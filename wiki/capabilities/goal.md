# goal 能力索引

## 概述

本页由包清单与 README 元数据生成；共 4 个包。功能配置、限制和使用方式以[所属文档](../../packages/goal/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [command-goal](../../packages/goal/command-goal/package.json) | 面向在 UI 命令平面中选择、组合或排查 goal 控制的用户与维护者的 /goal 斜杠命令说明。 [说明](../../packages/goal/command-goal/README.zh.md) | [1 个测试文件](../../packages/goal/command-goal/tests/command-goal.spec.ts) |
| [goal-round-driver](../../packages/goal/goal-round-driver/package.json) | 面向选择、组合或排查自动 Goal Round 的用户与维护者的同会话续行驱动器说明。 [说明](../../packages/goal/goal-round-driver/README.zh.md) | [2 个测试文件](../../packages/goal/goal-round-driver/tests/goal-round-driver.spec.ts) |
| [goal](../../packages/goal/goal/package.json) | 面向选择、配置或排查同会话持久 goal 服务的用户与维护者：每会话一个持久的完成目标。 [说明](../../packages/goal/goal/README.zh.md) | [3 个测试文件](../../packages/goal/goal/tests/goal.spec.ts) |
| [tool-goal](../../packages/goal/tool-goal/package.json) | 面向选择、组合或排查 get_goal、create_goal 与 update_goal 的用户与维护者的模型侧 goal 工具说明。 [说明](../../packages/goal/tool-goal/README.zh.md) | [1 个测试文件](../../packages/goal/tool-goal/tests/tool-goal.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
