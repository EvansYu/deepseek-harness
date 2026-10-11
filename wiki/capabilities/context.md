# context 能力索引

## 概述

本页由包清单与 README 元数据生成；共 6 个包。功能配置、限制和使用方式以[所属文档](../../packages/context/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [agent-instructions](../../packages/context/agent-instructions/package.json) | 面向用户与维护者的工作区指令上下文说明，用于启用、设置预算或排查 AGENTS.md/CLAUDE.md 的加载与刷新。 [说明](../../packages/context/agent-instructions/README.zh.md) | [1 个测试文件](../../packages/context/agent-instructions/tests/agent-instructions.spec.ts) |
| [file-reference-local](../../packages/context/file-reference-local/package.json) | 面向用户与维护者的本地工作区 @file 补全提供方，用于启用、调整规模或排查 ctx.fileReferences 的发现能力。 [说明](../../packages/context/file-reference-local/README.zh.md) | [2 个测试文件](../../packages/context/file-reference-local/tests/search.spec.ts) |
| [file-reference](../../packages/context/file-reference/package.json) | 面向宿主驱动 UI 的文件引用发现与 @file mention 语法，供选择该 seam 或为其搭配提供方的用户与维护者阅读。 [说明](../../packages/context/file-reference/README.zh.md) | [1 个测试文件](../../packages/context/file-reference/tests/service.spec.ts) |
| [session-reference](../../packages/context/session-reference/package.json) | 跨会话快照引用与持久的不受信任模型上下文，供启用或排查 ctx.sessionReferenceResolver 的用户与维护者阅读。 [说明](../../packages/context/session-reference/README.zh.md) | [2 个测试文件](../../packages/context/session-reference/tests/loader-composition.spec.ts) |
| [time-context](../../packages/context/time-context/package.json) | 按步骤提供时钟上下文，包含当前时间、浏览器时区与经过时长，供调优本插件的用户与维护者阅读。 [说明](../../packages/context/time-context/README.zh.md) | [2 个测试文件](../../packages/context/time-context/tests/request-zone.spec.ts) |
| [tmux-context](../../packages/context/tmux-context/package.json) | 可选的按轮次 tmux 位置上下文，供启用或调优 agent（智能体）的会话、window 与 pane 感知的用户与维护者阅读。 [说明](../../packages/context/tmux-context/README.zh.md) | [1 个测试文件](../../packages/context/tmux-context/tests/tmux-context.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
