# core 能力索引

## 概述

本页由包清单与 README 元数据生成；共 8 个包。功能配置、限制和使用方式以[所属文档](../../packages/core/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [agent-default-model](../../packages/core/agent-default-model/package.json) | 面向用户与维护者的部署默认模型选择说明，用于选择、配置或调试新创建的 agent（智能体）初始使用哪个模型。 [说明](../../packages/core/agent-default-model/README.zh.md) | [1 个测试文件](../../packages/core/agent-default-model/tests/agent-default-model.spec.ts) |
| [agent-loop](../../packages/core/agent-loop/package.json) | 面向用户与维护者的默认 agent（智能体）驱动器说明，用于选择、配置或调试 agent 的创建方式以及轮次与步骤的运行方式。 [说明](../../packages/core/agent-loop/README.zh.md) | [24 个测试文件](../../packages/core/agent-loop/tests/agent-initiator.spec.ts) |
| [agent-tool-presentation](../../packages/core/agent-tool-presentation/package.json) | 面向用户与维护者的 agent（智能体）平面呈现选择器说明，用于选择、配置或调试 agent preset 的模型看到其工具的哪种形态。 [说明](../../packages/core/agent-tool-presentation/README.zh.md) | [1 个测试文件](../../packages/core/agent-tool-presentation/tests/agent-tool-presentation.spec.ts) |
| [agent](../../packages/core/agent/package.json) | 面向插件、UI 与编排器的 Agent 句柄、实时注册表、进程本地发起方作用域，以及 agent/* 事件词汇。 [说明](../../packages/core/agent/README.zh.md) | [7 个测试文件](../../packages/core/agent/tests/agent-initiator.spec.ts) |
| [scope](../../packages/core/scope/package.json) | 面向插件作者与维护者的作用域注册库，用于构建按 agent（智能体）或按分组隔离贡献的注册表或事件接口。 [说明](../../packages/core/scope/README.zh.md) | [3 个测试文件](../../packages/core/scope/tests/invariant.spec.ts) |
| [session](../../packages/core/session/package.json) | 面向用户与维护者的事件溯源会话日志与内存存储说明，用于构建、检查或扩展每个 agent（智能体）交互背后的持久记录。 [说明](../../packages/core/session/README.zh.md) | [17 个测试文件](../../packages/core/session/tests/canonical-envelopes.spec.ts) |
| [system-prompt](../../packages/core/system-prompt/package.json) | 面向用户与维护者的系统提示词组装说明，用于添加提示词段、变量、工具 schema 来源或配置面向模型的提示词。 [说明](../../packages/core/system-prompt/README.zh.md) | [4 个测试文件](../../packages/core/system-prompt/tests/invariant.spec.ts) |
| [tools](../../packages/core/tools/package.json) | 面向工具作者与维护者的工具注册表与执行流水线说明，用于注册、限制、呈现或调试面向模型的工具。 [说明](../../packages/core/tools/README.zh.md) | [12 个测试文件](../../packages/core/tools/tests/execution-mode.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
