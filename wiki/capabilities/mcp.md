# mcp 能力索引

## 概述

本页由包清单与 README 元数据生成；共 2 个包。功能配置、限制和使用方式以[所属文档](../../packages/mcp/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [mcp-client](../../packages/mcp/mcp-client/package.json) | 面向部署方与维护者的 MCP 客户端桥接说明，用于选择、配置或排查连接到外部 MCP 服务器、并将其工具注册到 ctx.tools 的插件。 [说明](../../packages/mcp/mcp-client/README.zh.md) | [9 个测试文件](../../packages/mcp/mcp-client/tests/apply.spec.ts) |
| [mcp-resources](../../packages/mcp/mcp-resources/package.json) | 通过共享工具、显式服务器选择和 agent 作用域访问，按需发现与读取 MCP 资源。 [说明](../../packages/mcp/mcp-resources/README.zh.md) | [1 个测试文件](../../packages/mcp/mcp-resources/tests/resources.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
