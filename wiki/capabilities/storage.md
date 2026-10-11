# storage 能力索引

## 概述

本页由包清单与 README 元数据生成；共 4 个包。功能配置、限制和使用方式以[所属文档](../../packages/storage/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [storage-domain](../../packages/storage/storage-domain/package.json) | 领域数据形式（ctx.storageDomain）：面向在存储后端之上选择、挂载或排查经过 schema 校验、发出变更事件的 KV 领域的宿主与维护者。 [说明](../../packages/storage/storage-domain/README.zh.md) | [1 个测试文件](../../packages/storage/storage-domain/tests/domain.spec.ts) |
| [storage-json](../../packages/storage/storage-json/package.json) | JSON 存储后端：面向在配置根目录下选择、配置或排查整单元文件与逐记录文件的宿主与维护者。 [说明](../../packages/storage/storage-json/README.zh.md) | [1 个测试文件](../../packages/storage/storage-json/tests/json-backend.spec.ts) |
| [storage-sqlite](../../packages/storage/storage-sqlite/package.json) | SQLite 存储后端：面向在单个数据库文件中选择、配置或排查按行存储文档的 KV 存储的宿主与维护者。 [说明](../../packages/storage/storage-sqlite/README.zh.md) | [1 个测试文件](../../packages/storage/storage-sqlite/tests/sqlite-backend.spec.ts) |
| [storage](../../packages/storage/storage/package.json) | 存储枢纽（ctx.storage）：面向选择、挂载或排查具名存储后端与数据形式设施的组合方与维护者。 [说明](../../packages/storage/storage/README.zh.md) | [1 个测试文件](../../packages/storage/storage/tests/registry.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
