# guard 能力索引

## 概述

本页由包清单与 README 元数据生成；共 2 个包。功能配置、限制和使用方式以[所属文档](../../packages/guard/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [repeat-tool-reminder](../../packages/guard/repeat-tool-reminder/package.json) | 建议性循环卫生 guard：当 agent（智能体）重复完全相同的工具调用时提醒模型，供选择、配置或排查此插件的用户与维护者阅读。 [说明](../../packages/guard/repeat-tool-reminder/README.zh.md) | [1 个测试文件](../../packages/guard/repeat-tool-reminder/tests/repeat-tool-reminder.spec.ts) |
| [tool-call-timeout-policy](../../packages/guard/timeout-policy/package.json) | 为配合取消的工具调用设置协作式时间上限，并在超时流程完成后映射为清晰的模型错误，供选择或排查此插件的用户与维护者阅读。 [说明](../../packages/guard/timeout-policy/README.zh.md) | [1 个测试文件](../../packages/guard/timeout-policy/tests/timeout-policy.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
