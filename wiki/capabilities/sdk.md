# sdk 能力索引

## 概述

本页由包清单与 README 元数据生成；共 3 个包。功能配置、限制和使用方式以[所属文档](../../packages/sdk/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [sdk-client](../../packages/sdk/client/package.json) | 面向以子进程方式启动 DeepSeek Harness 运行时、并通过 stdio JSON-RPC 驱动 agent（智能体）轮次的调用方的 TypeScript SDK 客户端：DeepSeekHarness 运行 API 与低层 HarnessClient。 [说明](../../packages/sdk/client/README.zh.md) | [4 个测试文件](../../packages/sdk/client/tests/cot-translation-projection.spec.ts) |
| [sdk-protocol](../../packages/sdk/protocol/package.json) | 面向客户端与服务端实现者的 SDK 协议格式（wire format）说明：Harness 运行时与其 SDK 客户端之间使用的按换行分帧 JSON-RPC 传输，以及具名的请求、结果与通知类型。 [说明](../../packages/sdk/protocol/README.zh.md) | [1 个测试文件](../../packages/sdk/protocol/tests/transport.spec.ts) |
| [sdk-jsonrpc-server](../../packages/sdk/server/package.json) | 面向让进程外 SDK 客户端在 DeepSeek Harness 运行时中打开会话并驱动 agent 的部署的 stdio JSON-RPC 服务插件。 [说明](../../packages/sdk/server/README.zh.md) | [5 个测试文件](../../packages/sdk/server/tests/plugin-apply.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
