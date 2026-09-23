# DeepSeek Harness CodeMap (project)

## 1. Orientation

- Project: `deepseek-harness`.
- Role: 以 Cordis 插件组合的 Agent Harness，提供 CLI、Web UI、会话持久化、模型与工具能力。
- Main languages / frameworks: TypeScript、Node.js、pnpm workspaces、Cordis；另有 Python SDK 与原生 Node addon。
- Runtime / deployment shape: `dsh` profile 组装插件；CLI 与 Web 入口在 `apps/cli/`，已构建产物由 `pnpm dsh` 使用。
- Primary entry types: CLI、Web、Cordis 插件、TypeScript/Python SDK。
- Confidence:
  - confirmed: `README.md`、`AGENTS.md`、`packages/README.md`、`package.json`。
  - inferred: 各 profile 到运行时插件的完整动态组合。
  - unknown: 单一用户请求在所有应用表面中的端到端影响范围。

## 2. Context Tree

```text
Node: DeepSeek Harness
  -> Node: Capability Index
  -> Node: Package Groups
  -> Node: Application Entries
  -> Node: Session And Agent Flow
  -> Node: Validation
  -> Node: Risk Areas
```

### Node: DeepSeek Harness

- Type: `project`
- Status: `confirmed`
- Purpose: 为 Agent 提供入口优先的代码导航；具体行为以当前源码和包 README 为准。
- Read First:
  - `AGENTS.md`: 工程约束、命令与包边界。
  - `docs/architecture.md`: 插件架构与应用启动规则。
  - `packages/README.md`: 按能力分组的所有权索引。
- Edges / Children:
  - `Capability Index`: 选择负责某项产品能力的包组。
  - `Application Entries`: 找到 CLI、Web 与 profile 启动路径。
  - `Session And Agent Flow`: 深入模型可见输入、事件日志与循环。
- Evidence: `README.md`、`AGENTS.md`、`packages/README.md`。
- Unknowns: 具体 task 的 profile、provider、持久化后端与客户端组合。
- Next Drill-Down: 使用 CodeGraph 从具体符号或调用流开始，不在本图中推断动态插件关系。

### Node: Capability Index

- Type: `capability`
- Status: `confirmed`
- Purpose: 将需求路由到拥有 Service Definition、Provider 或 Consumer 的包组。
- Children:
  - Agent/session/tools: `packages/core/`、`packages/session/`。
  - LLM 与上下文: `packages/llm/`、`packages/context/`、`packages/compaction/`。
  - Local execution: `packages/shell/`、`packages/fs/`、`packages/subprocess/`、`packages/terminal/`、`packages/sandbox/`。
  - Remote and user surfaces: `packages/api/`、`packages/host/`、`packages/client/`、`apps/`。
  - Composition and extensibility: `packages/preset/`、`packages/bundle/`、`packages/skill/`、`packages/extensions/`、`packages/hooks/`。
  - Collaboration: `packages/subagent/`、`packages/interaction/`、`packages/plan/`、`packages/todo/`、`packages/goal/`。
- Evidence: `packages/README.md` package-group table; `AGENTS.md` repository layout.
- Validation: relevant package tests plus the command selected in `AGENTS.md`.
- Next Drill-Down: read the owning group README, then use CodeGraph on the target service symbol.

### Node: Package Groups

- Type: `module`
- Status: `confirmed`
- Purpose: locate package ownership before editing cross-package imports.
- Children:
  - Core spine: `packages/core/` — session, prompt, tools, agent, loop.
  - Durable session plane: `packages/session/` and `packages/session-query/`.
  - Application delivery: `apps/cli/`, `apps/web/`, `packages/host/`, `packages/client/`.
  - Shared infrastructure: `packages/boot/`, `packages/util/`, `packages/test-support/`, `packages/runtime-diagnostics/`.
- Evidence: `packages/README.md`; `AGENTS.md` repository layout.
- Risk notes: public APIs are pre-stable, but released Session data has explicit version authority.
- Next Drill-Down: `packages/<group>/README.md` and `packages/AGENTS.md`.

### Node: Application Entries

- Type: `entry`
- Status: `confirmed`
- Purpose: distinguish supported application launch paths from package-level code.
- Entries:
  - CLI: `apps/cli/src/bin.ts`; source run uses `pnpm dsh --profile ...`.
  - Web: `pnpm dsh web`; CLI owns the local Web launch.
  - Build: `scripts/build.ts`, invoked by `pnpm run build`.
  - Profiles/bundles: `packages/preset/` and `packages/bundle/`.
- Evidence: `README.md`, `AGENTS.md`, `package.json`.
- Validation: `pnpm run build`; source smoke commands documented in `AGENTS.md`.
- Next Drill-Down: trace `apps/cli/src/bin.ts` to the selected command/profile with CodeGraph.

### Node: Session And Agent Flow

- Type: `flow`
- Status: `confirmed`
- Purpose: route tasks that affect model-visible inputs, agent execution, or durable data.
- Major Flows:
  - Session event and persistence: `packages/core/session/` -> `packages/session/` backends and projections.
  - Agent/model/tool loop: `packages/core/agent*`, `packages/core/tools/`, `packages/llm/`.
  - Web projection: `packages/host/` -> API/remotes -> `packages/client/`.
- Evidence: ownership descriptions in `AGENTS.md` and `packages/README.md`.
- Unknowns: exact runtime call chains depend on enabled Cordis plugins.
- Validation: focused package tests; snapshot coverage for model- or user-visible changes as required by `AGENTS.md`.
- Next Drill-Down: start a CodeGraph trace from an entry symbol to its provider or event consumer.

### Node: Validation

- Type: `validation`
- Status: `confirmed`
- Purpose: select proportionate checks rather than defaulting to the full suite.
- Validation Entry:
  - Build: `pnpm run build`.
  - Focused unit tests: `pnpm run test` or package-targeted Vitest command.
  - Static checks: `pnpm run typecheck`, `pnpm run lint`.
  - Documentation: `pnpm run doc-sync` or `pnpm run test:docs`.
- Evidence: `package.json`, `AGENTS.md`.
- Next Drill-Down: `.agents/skills/dsh-pre-push-checks/SKILL.md` before a push or check claim.

### Node: Risk Areas

- Type: `risk`
- Status: `confirmed`
- Risks:
  - Session format and migrations: follow `docs/session-format-status.md`; generations are immutable.
  - Application launch: supported Node apps launch only through `dsh` profiles.
  - Model-visible data: every model-visible input must be reconstructable from the session log.
  - Cross-package APIs: update every consumer when changing pre-stable public APIs.
- Evidence: `AGENTS.md`.
- Next Drill-Down: `docs/architecture.md`, `docs/defensive-patterns.md`, and the owning package README.

## 3. Compact Indexes

| Capability | Main Modules | Entry | Status |
| --- | --- | --- | --- |
| CLI and Web | `apps/cli/`, `apps/web/`, `packages/host/`, `packages/client/` | `apps/cli/src/bin.ts` | confirmed |
| Agent and tools | `packages/core/`, `packages/llm/` | profile composition | confirmed |
| Session data | `packages/core/session/`, `packages/session/`, `packages/session-query/` | Session services | confirmed |
| Execution | `packages/shell/`, `packages/fs/`, `packages/subprocess/`, `packages/terminal/` | model-facing tools | confirmed |
| Extensibility | `packages/preset/`, `packages/bundle/`, `packages/skill/`, `packages/extensions/` | Cordis configuration | confirmed |

### Quick File Index

- `AGENTS.md`: repository constraints and commands.
- `docs/architecture.md`: architectural rules and launch policy.
- `packages/README.md`: package ownership index.
- `package.json`: executable repository scripts.
- `apps/cli/src/bin.ts`: CLI entry point.

## 4. Maintenance Notes

- Refresh when package groups, supported application entries, or validation commands change.
- Create a focused Feature CodeMap for an actual flow; do not expand this map into a package-by-package rewrite of the documentation.
