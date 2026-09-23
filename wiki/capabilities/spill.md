# spill 能力索引

## 概述

本页由包清单与 README 元数据生成；共 3 个包。功能配置、限制和使用方式以[所属文档](../../packages/spill/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [spill-local](../../packages/spill/spill-local/package.json) | 本地文件系统 spill 后端：spill 文本如何保存到私有会话级文件，并用 read 或 grep 取回。 [说明](../../packages/spill/spill-local/README.zh.md) | [2 个测试文件](../../packages/spill/spill-local/tests/loader-composition.spec.ts) |
| [spill-policy](../../packages/spill/spill-policy/package.json) | 工具结果保留：文字和图片共享 token 预算，并通过完整结果文件恢复省略内容。 [说明](../../packages/spill/spill-policy/README.zh.md) | [5 个测试文件](../../packages/spill/spill-policy/tests/multimodal-recovery.spec.ts) |
| [spill](../../packages/spill/spill/package.json) | spill 存储服务：保存超大工具文本或已捕获的会话引用，并返回可用于取回内容的定位信息。 [说明](../../packages/spill/spill/README.zh.md) | [1 个测试文件](../../packages/spill/spill/tests/service.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
