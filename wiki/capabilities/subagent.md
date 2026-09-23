# subagent 能力索引

## 概述

本页由包清单与 README 元数据生成；共 10 个包。功能配置、限制和使用方式以[所属文档](../../packages/subagent/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [subagent-acp](../../packages/subagent/subagent-acp/package.json) | 面向用户与维护者的进程外 ACP（Agent Client Protocol）subagent 后端，用于选择委派提供方、配置子 ACP agent（智能体）命令或排查远程子 agent 运行问题。 [说明](../../packages/subagent/subagent-acp/README.zh.md) | [1 个测试文件](../../packages/subagent/subagent-acp/tests/subagent-acp.spec.ts) |
| [subagent-claude-code](../../packages/subagent/subagent-claude-code/package.json) | 面向用户与维护者的一次性 Claude Code subagent 提供方，用于选择产品后端、安装 Profile bundle 或配置无人值守的 Claude Code 委派。 [说明](../../packages/subagent/subagent-claude-code/README.zh.md) | [2 个测试文件](../../packages/subagent/subagent-claude-code/tests/real-product.spec.ts) |
| [subagent-codex](../../packages/subagent/subagent-codex/package.json) | 面向用户与维护者的一次性 Codex subagent 提供方，用于选择产品后端、安装 Profile bundle 或配置无人值守的 Codex 委派。 [说明](../../packages/subagent/subagent-codex/README.zh.md) | [3 个测试文件](../../packages/subagent/subagent-codex/tests/real-product-cleanup.spec.ts) |
| [subagent-dsh-sdk](../../packages/subagent/subagent-dsh-sdk/package.json) | 面向用户与维护者的进程外 SDK subagent 后端，用于选择委派提供方、配置子 Harness 运行时，或排查本地嵌套子 agent（智能体）的运行问题。 [说明](../../packages/subagent/subagent-dsh-sdk/README.zh.md) | [1 个测试文件](../../packages/subagent/subagent-dsh-sdk/tests/subagent-dsh-sdk.spec.ts) |
| [subagent-fork-in-process](../../packages/subagent/subagent-fork-in-process/package.json) | 面向用户与维护者的进程内 fork subagent 后端说明，用于选择、配置或排查以父级已完成轮次作初始内容的子 agent（智能体）。 [说明](../../packages/subagent/subagent-fork-in-process/README.zh.md) | [2 个测试文件](../../packages/subagent/subagent-fork-in-process/tests/multi-subagent.spec.ts) |
| [subagent-in-process-driver](../../packages/subagent/subagent-in-process-driver/package.json) | 共享进程内 subagent 运行驱动器，供维护者与后端作者理解或扩展 spawn 与 fork 的运行生命周期。 [说明](../../packages/subagent/subagent-in-process-driver/README.zh.md) | [4 个测试文件](../../packages/subagent/subagent-in-process-driver/tests/inheritance.spec.ts) |
| [subagent-spawn-in-process](../../packages/subagent/subagent-spawn-in-process/package.json) | 面向用户与维护者的进程内 spawn subagent 后端说明，用于选择、配置或排查全新子级委派。 [说明](../../packages/subagent/subagent-spawn-in-process/README.zh.md) | [1 个测试文件](../../packages/subagent/subagent-spawn-in-process/tests/subagent-spawn-in-process.spec.ts) |
| [subagent](../../packages/subagent/subagent/package.json) | 面向用户与维护者的 subagent 委派 seam，用于选择提供方后端、组装委派工具或排查子 agent（智能体）运行问题。 [说明](../../packages/subagent/subagent/README.zh.md) | [15 个测试文件](../../packages/subagent/subagent/tests/archive-admission.spec.ts) |
| [tool-subagent-control](../../packages/subagent/tool-subagent-control/package.json) | 供用户与维护者在组合或调试可继续子级控制功能时使用的全局 send_message、interrupt_agent 与 list_agents 工具。 [说明](../../packages/subagent/tool-subagent-control/README.zh.md) | [2 个测试文件](../../packages/subagent/tool-subagent-control/tests/list-agents.spec.ts) |
| [tool-subagent](../../packages/subagent/tool-subagent/package.json) | 面向模型的 subagent 委派工具，供用户与维护者配置、组合或排查基于 subagent 提供方的委派。 [说明](../../packages/subagent/tool-subagent/README.zh.md) | [5 个测试文件](../../packages/subagent/tool-subagent/tests/list-models.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
