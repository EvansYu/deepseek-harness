# feedback 能力索引

## 概述

本页由包清单与 README 元数据生成；共 2 个包。功能配置、限制和使用方式以[所属文档](../../packages/feedback/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [command-feedback](../../packages/feedback/command-feedback/package.json) | 会话反馈：`/feedback` 命令、Web 反馈弹窗背后的 `sessionFeedback` Host Remote，以及固定的分类表；供用户与维护者选择、组合或排查反馈采集。 [说明](../../packages/feedback/command-feedback/README.zh.md) | [2 个测试文件](../../packages/feedback/command-feedback/tests/command-feedback.spec.ts) |
| [message-feedback](../../packages/feedback/message-feedback/package.json) | 在权威 Session 日志中保存已完成 assistant 消息的评分、分类与备注。 [说明](../../packages/feedback/message-feedback/README.zh.md) | [2 个测试文件](../../packages/feedback/message-feedback/tests/loader-composition.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
