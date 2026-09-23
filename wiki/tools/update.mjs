/** Generate the source-linked wiki index and audit locally reachable Git history. */
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, readlinkSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const mode = process.argv[2]
if (!['--write', '--check', '--history'].includes(mode)) throw new Error('Use --write, --check, or --history')
const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 })
const read = path => readFileSync(resolve(root, path), 'utf8')
const json = value => `${JSON.stringify(value, null, 2)}\n`
const cell = value => String(value).replaceAll('|', '&#124;').replaceAll('\n', ' ')
const output = new Map()
const files = git('ls-files', '--cached', '--others', '--exclude-standard', '-z').split('\0').filter(Boolean).filter(p => existsSync(resolve(root, p))).sort()
const manifests = files.filter(p => /^packages\/[^/]+\/[^/]+\/package\.json$/.test(p) || /^apps\/[^/]+\/package\.json$/.test(p))
const packages = manifests.map(path => {
  const manifest = JSON.parse(read(path))
  const dir = dirname(path)
  const docs = existsSync(resolve(root, dir, 'README.zh.md')) ? `${dir}/README.zh.md` : `${dir}/README.md`
  const description = existsSync(resolve(root, docs)) ? read(docs).match(/^description: "(.*)"$/m)?.[1] : undefined
  const owned = files.filter(p => p.startsWith(`${dir}/`))
  const digest = createHash('sha256')
  for (const file of owned) {
    const path = resolve(root, file)
    const bytes = lstatSync(path).isSymbolicLink() ? readlinkSync(path).replaceAll('\\', '/') : file.endsWith('.cmd') ? read(path).replaceAll('\r\n', '\n') : readFileSync(path)
    digest.update(file).update('\0').update(bytes).update('\0')
  }
  return { id: manifest.name, type: 'package', group: path.startsWith('apps/') ? 'apps' : path.split('/')[1], path: dir, description: description ?? manifest.description ?? manifest.name, docs: existsSync(resolve(root, docs)) ? docs : path, sourceDigest: digest.digest('hex'), source: owned.filter(p => /\/src\/.*\.[cm]?[tj]sx?$/.test(p)), tests: owned.filter(p => /\.(spec|test)\.[cm]?[tj]sx?$/.test(p)), experimental: path.startsWith('packages/experimental/'), private: manifest.private === true, manifest }
})
const byName = new Map(packages.map(p => [p.id, p]))
const groups = [...new Set(packages.map(p => p.group))].sort()
const edges = []
for (const p of packages) {
  edges.push({ from: `group:${p.group}`, to: p.id, relation: 'contains', evidence: `${p.path}/package.json`, status: 'confirmed' })
  for (const field of ['dependencies', 'peerDependencies', 'devDependencies', 'optionalDependencies']) {
    for (const name of Object.keys(p.manifest[field] ?? {}).sort()) if (byName.has(name)) edges.push({ from: p.id, to: name, relation: field, evidence: `${p.path}/package.json`, status: 'confirmed' })
  }
}
const concepts = JSON.parse(read('wiki/data/concepts.json'))
edges.push(...concepts.edges)
const nodes = [...concepts.nodes, ...groups.map(group => ({ id: `group:${group}`, type: 'group', page: `wiki/capabilities/${group}.md` })), ...packages.map(({ manifest, ...p }) => p)]
output.set('wiki/data/graph.json', json({ schemaVersion: 1, scope: 'Current working tree; packages/*/* and apps/*; manifest relationships, not runtime call edges', nodes, edges }))
for (const group of groups) {
  const members = packages.filter(p => p.group === group)
  const owner = group === 'apps' ? 'docs/architecture.md' : `packages/${group}/README.zh.md`
  const lines = [`# ${group} 能力索引`, '', '## 概述', '', `本页由包清单与 README 元数据生成；共 ${members.length} 个包。功能配置、限制和使用方式以[所属文档](../../${owner})为准。${group === 'experimental' ? '此组为实验能力，不代表默认启用或稳定支持。' : ''}`, '', '## 目录', '', '- [包与功能](#包与功能)', '- [开发备注](#开发备注)', '', '## 包与功能', '', '| 包 | 功能与证据 | 验证入口 |', '|---|---|---|']
  for (const p of members) lines.push(`| [${p.id.replace('@deepseek-ai/dsh-', '')}](../../${p.path}/package.json) | ${cell(p.description)} [说明](../../${p.docs})${p.private ? '；私有包' : ''} | ${p.tests.length ? `[${p.tests.length} 个测试文件](../../${p.tests[0]})` : '未发现包内 spec/test 文件；查阅所属说明'} |`)
  lines.push('', '## 开发备注', '', '此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。', '')
  output.set(`wiki/capabilities/${group}.md`, lines.join('\n'))
}
output.set('wiki/capabilities/index.md', `# 能力目录\n\n## 概述\n\n按当前源码归属列出 ${groups.length} 个领域、${packages.length} 个包。每页提供功能、所属说明和测试入口；跨领域用户任务见[功能总览](../features/index.md)。\n\n## 目录\n\n${groups.map(g => `- [${g}](${g}.md)（${packages.filter(p => p.group === g).length} 个包）`).join('\n')}\n\n## 开发备注\n\n本目录自动生成；更新方法见[维护流程](../MAINTENANCE.md)。\n`)
if (mode === '--history') {
  if (git('rev-parse', '--is-shallow-repository').trim() !== 'false') throw new Error('Full history requires a non-shallow checkout')
  const reachable = new Set(git('rev-list', 'HEAD').trim().split('\n'))
  const raw = git('log', '--all', 'HEAD', '--date-order', '--format=%x1e%H%x00%P%x00%aI%x00%B%x00', '--name-only', '--no-renames')
  const records = raw.split('\x1e').filter(Boolean).map(chunk => {
    const [oid, parents, date, message, paths] = chunk.split('\0')
    return { oid, parents: parents.split(' ').filter(Boolean), date, message: message.trim(), paths: paths.trim().split('\n').filter(Boolean), inHead: reachable.has(oid) }
  })
  const count = Number(git('rev-list', '--count', '--all', 'HEAD').trim())
  if (records.length !== count) throw new Error(`History coverage mismatch: ${records.length}/${count}`)
  const monthly = {}, areas = {}, types = {}, outside = []
  for (const record of records) {
    const month = record.date.slice(0, 7)
    monthly[month] ??= { commits: 0, merges: 0, outsideHead: 0 }
    monthly[month].commits++
    if (record.parents.length > 1) monthly[month].merges++
    if (!record.inHead) { monthly[month].outsideHead++; outside.push(record) }
    const subject = record.message.split('\n')[0]
    const type = record.parents.length > 1 ? 'merge' : /^(feat|fix|docs|refactor|test|chore|perf|build|ci)(?:\(|:)/i.exec(subject)?.[1]?.toLowerCase() ?? 'unclassified'
    types[type] = (types[type] ?? 0) + 1
    const touched = new Set(record.paths.map(p => p.startsWith('packages/') ? p.split('/').slice(0, 2).join('/') : p.split('/')[0]))
    for (const area of touched) areas[area] = (areas[area] ?? 0) + 1
  }
  mkdirSync(resolve(root, 'wiki/history/.cache'), { recursive: true })
  writeFileSync(resolve(root, 'wiki/history/.cache/commits.jsonl'), records.map(r => JSON.stringify(r)).join('\n') + '\n')
  writeFileSync(resolve(root, 'wiki/history/.cache/refs.txt'), git('show-ref'))
  const dates = records.map(r => r.date.slice(0, 10)).sort()
  const summary = { scope: 'git log --all HEAD; local references only; merge paths use Git default combined-diff omission', total: count, head: reachable.size, outsideHead: outside.length, authorDateRange: [dates[0], dates.at(-1)], monthly, types, areas }
  writeFileSync(resolve(root, 'wiki/history/coverage.json'), json(summary))
  const rows = Object.entries(monthly).sort().map(([month, v]) => `| ${month} | ${v.commits} | ${v.merges} | ${v.outsideHead} |`)
  const areaRows = Object.entries(areas).sort((a, b) => b[1] - a[1]).map(([area, n]) => `| ${cell(area)} | ${n} |`)
  writeFileSync(resolve(root, 'wiki/history/coverage.md'), `# Git 历史覆盖报告\n\n## 概述\n\n本地全部引用与 HEAD 共 ${count} 条去重提交；HEAD 可达 ${reachable.size} 条，其余 ${outside.length} 条不属于当前分支历史。作者日期范围 ${dates[0]} 至 ${dates.at(-1)}。这是一次显式更新的历史快照，不随文档自身提交自动变化。\n\n## 目录\n\n- [月度分布](#月度分布)\n- [变更领域](#变更领域)\n- [方法与限制](#方法与限制)\n\n## 月度分布\n\n| 作者月份 | 提交 | 合并提交 | HEAD 外提交 |\n|---|---|---|---|\n${rows.join('\n')}\n\n## 变更领域\n\n每条提交在同一领域只计一次，跨领域会重复计数；领域总和不等于提交总数。\n\n| 历史路径领域（可能已删除） | 涉及提交数 |\n|---|---|\n${areaRows.join('\n')}\n\n## 方法与限制\n\n逐条读取完整提交说明、父提交、作者日期及变更路径；数量与 Git rev-list 对账。没有逐行人工审查全部历史补丁，提交说明只用于历史线索，现有能力以源码、清单及所属文档交叉确认。合并提交保留在计数中，路径采用 Git 默认输出，不把合并再计算成一次功能实现。当前未提交代码只进入能力索引，不进入历史统计。\n\n原始审计位于被 Git 忽略的本地 .cache/commits.jsonl 和 .cache/refs.txt；包含逐提交标识及完整说明，可直接用 git show 进一步审查。重新克隆后运行历史更新即可重建。本报告不覆盖未获取的远端分支、reflog 与不可达对象；未执行 fetch。\n\n## 开发备注\n\n统计数据见 [coverage.json](coverage.json)，解读见[演进分析](index.md)，刷新步骤见[维护流程](../MAINTENANCE.md)。\n`)
  console.log(`History audited: ${count} commits; ${outside.length} outside HEAD. Raw records: wiki/history/.cache/commits.jsonl`)
} else {
  const failures = []
  for (const [path, content] of output) {
    if (mode === '--write') { mkdirSync(dirname(resolve(root, path)), { recursive: true }); writeFileSync(resolve(root, path), content) }
    else if (!existsSync(resolve(root, path)) || read(path) !== content) failures.push(path)
  }
  const expected = new Set(groups.map(g => `${g}.md`).concat('index.md'))
  for (const name of readdirSync(resolve(root, 'wiki/capabilities'))) if (name.endsWith('.md') && !expected.has(name)) failures.push(`wiki/capabilities/${name} (obsolete; remove and repair inbound links)`)
  const ids = new Set(nodes.map(n => n.id))
  if (ids.size !== nodes.length) failures.push('duplicate node id')
  for (const edge of edges) if (!existsSync(resolve(root, edge.evidence))) failures.push(`missing evidence: ${edge.evidence}`)
  for (const node of nodes) if (node.page && !existsSync(resolve(root, node.page))) failures.push(`missing page: ${node.page}`)
  for (const edge of edges) if (!ids.has(edge.from) || !ids.has(edge.to)) failures.push(`dangling edge: ${edge.from} -> ${edge.to}`)
  for (const path of files.filter(p => p.startsWith('wiki/') && p.endsWith('.md'))) {
    for (const match of read(path).matchAll(/\]\(([^)]+)\)/g)) {
      const target = match[1].split('#')[0]
      if (target && !/^[a-z]+:/i.test(target) && !existsSync(resolve(root, dirname(path), target))) failures.push(`${path}: missing ${target}`)
    }
  }
  if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1 }
  else console.log(`Wiki ${mode}: ${packages.length} packages, ${groups.length} groups, ${edges.length} relationships (manifest + curated).`)
}
