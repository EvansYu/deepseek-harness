# interaction 能力索引

## 概述

本页由包清单与 README 元数据生成；共 5 个包。功能配置、限制和使用方式以[所属文档](../../packages/interaction/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [commands](../../packages/interaction/commands/package.json) | 交互式 UI 的面向用户斜杠命令注册表：插件拥有的命令直接针对 agent（智能体）执行，不产生模型消息；供组合或扩展命令面的用户与维护者阅读。 [说明](../../packages/interaction/commands/README.zh.md) | [2 个测试文件](../../packages/interaction/commands/tests/commands.spec.ts) |
| [permission-presets](../../packages/interaction/permission-presets/package.json) | 面向用户的权限预设：供选择、配置或排查把沙箱模式与审批策略捆绑在一起的 Permissions 选择器的用户与维护者阅读。 [说明](../../packages/interaction/permission-presets/README.zh.md) | [3 个测试文件](../../packages/interaction/permission-presets/tests/invariant.spec.ts) |
| [tool-ask-user](../../packages/interaction/tool-ask-user/package.json) | 基于 user-questions seam 的模型侧 ask_user_question 工具；供组合或排查交互式 agent（智能体）表面的用户与维护者阅读。 [说明](../../packages/interaction/tool-ask-user/README.zh.md) | [1 个测试文件](../../packages/interaction/tool-ask-user/tests/tool-ask-user.spec.ts) |
| [user-approval](../../packages/interaction/user-approval/package.json) | 与通道无关的一次性审批 seam；供组合应答者、设置策略或排查以拒绝方式关闭的权限决定的用户与维护者阅读。 [说明](../../packages/interaction/user-approval/README.zh.md) | [2 个测试文件](../../packages/interaction/user-approval/tests/approval.spec.ts) |
| [user-questions](../../packages/interaction/user-questions/package.json) | 基于 waterfall 的问答服务，用于工具、权限插件、本地 answerer 与 Agent-scoped Web 交互。 [说明](../../packages/interaction/user-questions/README.zh.md) | [1 个测试文件](../../packages/interaction/user-questions/tests/user-questions.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
