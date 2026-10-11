# schedule 能力索引

## 概述

本页由包清单与 README 元数据生成；共 2 个包。功能配置、限制和使用方式以[所属文档](../../packages/schedule/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [schedule](../../packages/schedule/schedule/package.json) | 宿主级持久提醒与按会话绑定的共享任务管理。 [说明](../../packages/schedule/schedule/README.zh.md) | [18 个测试文件](../../packages/schedule/schedule/tests/cron.spec.ts) |
| [tool-schedule](../../packages/schedule/tool-schedule/package.json) | 预设作用域的提醒管理工具（schedule_create、schedule_list、schedule_update、schedule_delete），基于宿主 ctx.schedule 服务，供选择哪些 agent 可以维护持久提醒的部署使用。 [说明](../../packages/schedule/tool-schedule/README.zh.md) | [1 个测试文件](../../packages/schedule/tool-schedule/tests/tool-schedule.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
