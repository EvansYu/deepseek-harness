# workflow 能力索引

## 概述

本页由包清单与 README 元数据生成；共 4 个包。功能配置、限制和使用方式以[所属文档](../../packages/workflow/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [tool-ralph](../../packages/workflow/tool-ralph/package.json) | 面向模型的 ralph 工具：固定前台 agent loop（智能体循环），让全新 agent 围绕一个不可变目标迭代，供选择或配置此类迭代的用户与维护者阅读。 [说明](../../packages/workflow/tool-ralph/README.zh.md) | [2 个测试文件](../../packages/workflow/tool-ralph/tests/integration.spec.ts) |
| [tool-workflow](../../packages/workflow/tool-workflow/package.json) | 面向模型的工作流工具：运行扇出 subagent 的 JavaScript 编排脚本，供选择或配置模型驱动编排的用户与维护者阅读。 [说明](../../packages/workflow/tool-workflow/README.zh.md) | [2 个测试文件](../../packages/workflow/tool-workflow/tests/invariant.spec.ts) |
| [workflow-ptc](../../packages/workflow/workflow-ptc/package.json) | 通过共享的沙箱化 PTC Node 进程运行时执行工作流编排，保留工作流钩子、subagent 路由和调用方拥有的取消能力。 [说明](../../packages/workflow/workflow-ptc/README.zh.md) | [8 个测试文件](../../packages/workflow/workflow-ptc/tests/egress.spec.ts) |
| [workflow](../../packages/workflow/workflow/package.json) | 工作流编排能力：运行由模型编写的、扇出 subagent 的脚本，供选择或构建在 ctx.workflowEngine 之上的用户与维护者阅读。 [说明](../../packages/workflow/workflow/README.zh.md) | [2 个测试文件](../../packages/workflow/workflow/tests/invariant.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
