# typert 能力索引

## 概述

本页由包清单与 README 元数据生成；共 4 个包。功能配置、限制和使用方式以[所属文档](../../packages/typert/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [typert-generator](../../packages/typert/generator/package.json) | 构建时 Typert 生成器：源代码类型分析、与编译器无关的模型与产物生成，供接入 Typert 发布或消费生成产物的维护者阅读。 [说明](../../packages/typert/generator/README.zh.md) | [8 个测试文件](../../packages/typert/generator/tests/cordis-catalog-contract.spec.ts) |
| [typert-loader](../../packages/typert/loader/package.json) | 生成的 Typert 产物所用的 Loader 集成：已挂载的包如何自动把宿主侧反射与 schema 贡献给运行时注册表。 [说明](../../packages/typert/loader/README.zh.md) | [1 个测试文件](../../packages/typert/loader/tests/loader.spec.ts) |
| [typert-protocol](../../packages/typert/protocol/package.json) | 共享的 Typert Remote 协议：业务包、生成产物、Host Gateway 与 Client API 使用的装饰器、wire 描述符、编解码器与提供方约定。 [说明](../../packages/typert/protocol/README.zh.md) | [2 个测试文件](../../packages/typert/protocol/tests/owned-value.spec.ts) |
| [typert-registry](../../packages/typert/registry/package.json) | 运行时 Typert 注册表：保存生成的包反射、惰性 Zod schema factory 与 Remote 调用描述符，并按需为消费方解析。 [说明](../../packages/typert/registry/README.zh.md) | [1 个测试文件](../../packages/typert/registry/tests/typert.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
