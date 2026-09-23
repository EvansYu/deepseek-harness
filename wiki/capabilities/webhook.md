# webhook 能力索引

## 概述

本页由包清单与 README 元数据生成；共 2 个包。功能配置、限制和使用方式以[所属文档](../../packages/webhook/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [webhook-github](../../packages/webhook/webhook-github/package.json) | 面向把已认证 JSON 事件路由到 webhook 运行时的部署，说明带签名的 GitHub webhook 适配器。 [说明](../../packages/webhook/webhook-github/README.zh.md) | [4 个测试文件](../../packages/webhook/webhook-github/tests/body.spec.ts) |
| [webhook](../../packages/webhook/webhook/package.json) | 面向注册可信外部事件策略并创建 Workspace 会话的维护者，说明 webhook 规则运行时。 [说明](../../packages/webhook/webhook/README.zh.md) | [4 个测试文件](../../packages/webhook/webhook/tests/invariant.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
