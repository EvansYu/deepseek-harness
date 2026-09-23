# Git 历史覆盖报告

## 概述

本地全部引用与 HEAD 共 19681 条去重提交；HEAD 可达 19676 条，其余 5 条不属于当前分支历史。作者日期范围 2026-06-10 至 2026-09-23。这是一次显式更新的历史快照，不随文档自身提交自动变化。

## 目录

- [月度分布](#月度分布)
- [变更领域](#变更领域)
- [方法与限制](#方法与限制)

## 月度分布

| 作者月份 | 提交 | 合并提交 | HEAD 外提交 |
|---|---|---|---|
| 2026-06 | 581 | 196 | 0 |
| 2026-07 | 8297 | 4057 | 0 |
| 2026-08 | 6191 | 2152 | 0 |
| 2026-09 | 4612 | 1537 | 5 |

## 变更领域

每条提交在同一领域只计一次，跨领域会重复计数；领域总和不等于提交总数。

| 历史路径领域（可能已删除） | 涉及提交数 |
|---|---|
| .agents | 4157 |
| docs | 3352 |
| packages/client | 2840 |
| apps | 2574 |
| scripts | 2022 |
| pnpm-lock.yaml | 1126 |
| packages/core | 1068 |
| examples | 997 |
| packages/subagent | 762 |
| packages/host | 761 |
| packages/extensions | 615 |
| packages/ui | 587 |
| packages/llm | 584 |
| snapshots | 551 |
| packages/api | 517 |
| packages/cordis | 428 |
| packages/session | 407 |
| .github | 404 |
| packages/experimental | 367 |
| packages/fs | 367 |
| packages/bundle | 363 |
| packages/code-runtime | 357 |
| tsconfig.host.json | 340 |
| packages/context | 325 |
| packages/support | 321 |
| packages/boot | 320 |
| packages/subprocess | 317 |
| package.json | 298 |
| tsconfig.base.json | 295 |
| AGENTS.md | 286 |
| packages/test-support | 285 |
| packages/util | 275 |
| packages/session-query | 252 |
| packages/bash | 247 |
| packages/sandbox | 244 |
| packages/goal | 239 |
| packages/examples | 228 |
| packages/session-persistence | 223 |
| packages/workflow | 221 |
| knip.json | 221 |
| packages/skill | 217 |
| python | 209 |
| packages/hooks | 207 |
| packages/preset | 200 |
| packages/web | 190 |
| packages/sdk | 186 |
| packages/shell | 179 |
| packages/acp | 175 |
| packages/README.md | 175 |
| packages/compact | 175 |
| packages/todo | 171 |
| packages/typert | 170 |
| packages/plan | 162 |
| packages/interaction | 153 |
| vitest.config.ts | 153 |
| packages/pty | 140 |
| packages/lsp | 139 |
| packages/spill | 135 |
| packages/mcp | 133 |
| THIRD_PARTY_NOTICES.md | 129 |
| packages/guard | 126 |
| packages/credentials | 124 |
| website | 123 |
| packages/e2b | 122 |
| packages/schedule | 117 |
| packages/attachment | 111 |
| packages/settings | 109 |
| tsconfig.build.json | 106 |
| packages/terminal | 103 |
| packages/workspace | 102 |
| packages/tasks | 101 |
| packages/feedback | 99 |
| tsconfig.client.json | 99 |
| tsconfig.json | 98 |
| packages/storage | 97 |
| packages/compaction | 96 |
| packages/jobs | 90 |
| vendor | 89 |
| README.i18n.yaml | 87 |
| README.zh.md | 86 |
| packages/README.i18n.yaml | 84 |
| README.md | 80 |
| packages/README.zh.md | 76 |
| packages/self-modification | 67 |
| pnpm-workspace.yaml | 63 |
| benchmarks | 53 |
| packages/agent-loop | 52 |
| packages/AGENTS.md | 48 |
| packages/identity | 44 |
| packages/runtime-diagnostics | 44 |
| packages/telemetry | 42 |
| packages/webhook | 41 |
| native | 41 |
| packages/session-title | 40 |
| .gitignore | 38 |
| packages/ssh | 35 |
| packages/timeout | 35 |
| packages/tools | 33 |
| vitest.snapshot.config.ts | 31 |
| lefthook.yml | 31 |
| packages/agent | 30 |
| packages/tool-bash | 27 |
| packages/scaffold | 26 |
| packages/session-projection | 26 |
| eslint.config.mjs | 25 |
| packages/mode | 25 |
| patches | 24 |
| packages/document | 22 |
| vitest.e2e.config.ts | 22 |
| packages/deliverables | 21 |
| packages/session-persistence-jsonl | 21 |
| packages/session-persistence-sqlite | 21 |
| packages/prompt | 20 |
| tsdown.config.ts | 19 |
| packages/invariants | 19 |
| skills | 17 |
| yarn.lock | 17 |
| packages/ptc-runtime | 16 |
| packages/bash-local | 15 |
| tsconfig.typecheck.json | 14 |
| packages/system-prompt | 14 |
| packages/browser-use | 12 |
| packages/computer-use | 11 |
| .gitlab-ci.yml | 10 |
| packages/net | 10 |
| packages/llm-pi-ai | 10 |
| .oxlintrc.json | 9 |
| packages/visualizer | 9 |
| vitest.web.config.ts | 9 |
| packages/llm-deepseek | 9 |
| .gitattributes | 8 |
| missions | 8 |
| .claude | 7 |
| packages/llm-replay | 7 |
| packages/ui-stdio | 7 |
| bin | 6 |
| CONTEXT.md | 6 |
| assets | 5 |
| "docs | 5 |
| packages/session-fork | 5 |
| tsconfig.base.client.json | 4 |
| vitest.bench.config.ts | 4 |
| vitest.web.perf.config.ts | 4 |
| CONTRIBUTING.i18n.yaml | 4 |
| CONTRIBUTING.zh.md | 4 |
| packages/approval | 4 |
| packages/activity | 3 |
| vitest.expected.config.ts | 3 |
| BRAND-GUIDELINES.md | 3 |
| packages/team | 3 |
| CONTRIBUTING.md | 3 |
| eslint.format.config.mjs | 3 |
| .jscpd.json | 3 |
| research | 3 |
| tsconfig.test.json | 3 |
| vitest.web-stress.config.ts | 2 |
| .codex-node-preload.cjs | 2 |
| vitest.golden.config.ts | 2 |
| GUIDELINES.md | 2 |
| LICENSE | 2 |
| BENCHMARK.md | 2 |
| .oxlintrc.staged.json | 2 |
| tsdown.typert-host.config.ts | 2 |
| vitest.shared.ts | 2 |
| t1120.json | 2 |
| zh-tail.txt | 2 |
| packages/session-registry | 2 |
| "workspace | 2 |
| packages/process | 2 |
| tsconfig.vitest.json | 2 |
| .worktrees | 2 |
| verdict | 2 |
| MARKERS.md | 2 |
| .yarnrc.yml | 2 |
| yarn.config.cjs | 2 |
| Makefile | 1 |
| packages/tsdown.worker.ts | 1 |
| "snapshots | 1 |
| SAFETY.i18n.yaml | 1 |
| SAFETY.md | 1 |
| SAFETY.zh.md | 1 |
| BRAND_GUIDELINES.i18n.yaml | 1 |
| BRAND_GUIDELINES.md | 1 |
| BRAND_GUIDELINES.zh.md | 1 |
| .rgignore | 1 |
| .editorconfig | 1 |
| pytest.ini | 1 |
| packages/CLAUDE.md | 1 |
| CLAUDE.md | 1 |

## 方法与限制

逐条读取完整提交说明、父提交、作者日期及变更路径；数量与 Git rev-list 对账。没有逐行人工审查全部历史补丁，提交说明只用于历史线索，现有能力以源码、清单及所属文档交叉确认。合并提交保留在计数中，路径采用 Git 默认输出，不把合并再计算成一次功能实现。当前未提交代码只进入能力索引，不进入历史统计。

原始审计位于被 Git 忽略的本地 .cache/commits.jsonl 和 .cache/refs.txt；包含逐提交标识及完整说明，可直接用 git show 进一步审查。重新克隆后运行历史更新即可重建。本报告不覆盖未获取的远端分支、reflog 与不可达对象；未执行 fetch。

## 开发备注

统计数据见 [coverage.json](coverage.json)，解读见[演进分析](index.md)，刷新步骤见[维护流程](../MAINTENANCE.md)。
