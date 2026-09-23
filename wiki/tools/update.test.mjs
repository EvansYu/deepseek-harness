/** Exercise wiki freshness, invalid relationships, and complete local history in isolated repositories. */
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { test } from 'node:test'

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'dsh-wiki-'))
  t.after(() => rmSync(root, { recursive: true, force: true, maxRetries: 3 }))
  const put = (path, text) => { mkdirSync(dirname(join(root, path)), { recursive: true }); writeFileSync(join(root, path), text) }
  const run = (command, args) => {
    const result = spawnSync(command, args, { cwd: root, encoding: 'utf8', timeout: 60_000, env: { ...process.env, GIT_CONFIG_NOSYSTEM: '1', GIT_CONFIG_GLOBAL: process.platform === 'win32' ? 'NUL' : '/dev/null' } })
    assert.ifError(result.error)
    assert.equal(result.signal, null)
    return result
  }
  const git = (...args) => { const result = run('git', args); assert.equal(result.status, 0, result.stderr); return result.stdout }
  put('wiki/data/concepts.json', '{"nodes":[],"edges":[]}\n')
  put('wiki/MAINTENANCE.md', '# Maintenance\n')
  put('wiki/features/index.md', '# Features\n')
  put('wiki/history/index.md', '# History\n')
  put('wiki/history/.gitignore', '.cache/\n')
  put('packages/demo/README.zh.md', '# Demo\n')
  put('packages/demo/example/package.json', '{"name":"example","description":"Example"}\n')
  put('packages/demo/example/src/index.ts', 'export const value = 1\n')
  put('packages/demo/example/run.cmd', 'echo demo\r\n')
  mkdirSync(join(root, 'wiki/tools'), { recursive: true })
  mkdirSync(join(root, 'wiki/capabilities'), { recursive: true })
  copyFileSync(fileURLToPath(new URL('./update.mjs', import.meta.url)), join(root, 'wiki/tools/update.mjs'))
  git('init', '--initial-branch=main')
  git('config', 'user.name', 'Wiki fixture')
  git('config', 'user.email', 'wiki@example.invalid')
  return { root, put, git, wiki: mode => run(process.execPath, ['wiki/tools/update.mjs', mode]) }
}

test('source changes require regeneration; missing links and obsolete pages fail', t => {
  const { put, wiki } = fixture(t)
  assert.equal(wiki('--write').status, 0)
  assert.equal(wiki('--check').status, 0)
  put('packages/demo/example/run.cmd', 'echo demo\n')
  assert.equal(wiki('--check').status, 0)
  put('packages/demo/example/src/index.ts', 'export const value = 2\n')
  assert.match(wiki('--check').stderr, /wiki\/data\/graph.json/)
  assert.equal(wiki('--write').status, 0)
  assert.equal(wiki('--check').status, 0)
  put('wiki/features/index.md', '[missing](absent.md)\n')
  assert.match(wiki('--check').stderr, /missing absent.md/)
  put('wiki/features/index.md', '# Features\n')
  put('wiki/capabilities/removed.md', '# Obsolete\n')
  assert.match(wiki('--check').stderr, /obsolete/)
})

test('dangling edges, missing evidence, duplicate nodes and missing pages fail', t => {
  const { put, wiki } = fixture(t)
  put('wiki/data/concepts.json', JSON.stringify({ nodes: [{ id: 'x', page: 'missing.md' }, { id: 'x' }], edges: [{ from: 'x', to: 'absent', relation: 'implementedBy', status: 'confirmed', evidence: 'absent.md' }] }))
  const result = wiki('--write')
  assert.equal(result.status, 1)
  for (const message of ['duplicate node id', 'missing evidence', 'missing page', 'dangling edge']) assert.ok(result.stderr.includes(message), result.stderr)
})

test('history counts branch-only commits once and retains their full messages and paths', t => {
  const { root, put, git, wiki } = fixture(t)
  git('add', '.')
  git('commit', '-m', 'feat: initial capability', '-m', 'Full body retained.')
  git('checkout', '-b', 'side')
  put('branch-only.txt', 'side\n')
  git('add', '.')
  git('commit', '-m', 'fix: branch-only change')
  git('checkout', 'main')
  put('main-only.txt', 'main\n')
  git('add', '.')
  git('commit', '-m', 'docs: current branch')
  assert.equal(wiki('--history').status, 0)
  const coverage = JSON.parse(readFileSync(join(root, 'wiki/history/coverage.json'), 'utf8'))
  assert.equal(coverage.total, 3)
  assert.equal(coverage.head, 2)
  assert.equal(coverage.outsideHead, 1)
  const records = readFileSync(join(root, 'wiki/history/.cache/commits.jsonl'), 'utf8').trim().split('\n').map(line => JSON.parse(line))
  assert.ok(records.some(record => record.message.includes('Full body retained.')))
  assert.ok(records.some(record => !record.inHead && record.paths.includes('branch-only.txt')))
})
