# session-query 能力索引

## 概述

本页由包清单与 README 元数据生成；共 4 个包。功能配置、限制和使用方式以[所属文档](../../packages/session-query/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [session-log-export](../../packages/session-query/session-log-export/package.json) | Web 会话日志 ZIP 导出：Host 流式传输、认证下载路由、Session Header 操作与 /export 命令。 [说明](../../packages/session-query/session-log-export/README.zh.md) | [8 个测试文件](../../packages/session-query/session-log-export/tests/archive.host.spec.ts) |
| [session-query-sqlite](../../packages/session-query/session-query-sqlite/package.json) | 面向部署方与维护者的 SQLite FTS5 会话历史全文搜索后端，用于选择、配置或排查查询服务之上的全文搜索。 [说明](../../packages/session-query/session-query-sqlite/README.zh.md) | [2 个测试文件](../../packages/session-query/session-query-sqlite/tests/query.spec.ts) |
| [session-query](../../packages/session-query/session-query/package.json) | 面向消费方与后端作者的统一会话历史查询服务：对实时与持久化会话日志的精确读取、关系追踪与提供方无关过滤。 [说明](../../packages/session-query/session-query/README.zh.md) | [4 个测试文件](../../packages/session-query/session-query/tests/observation.spec.ts) |
| [tool-session-query](../../packages/session-query/tool-session-query/package.json) | 面向 agent（智能体）开发者与维护者、经工作区授权且面向模型的会话历史工具，用于选择、配置或排查既往会话搜索、追踪与事件读取。 [说明](../../packages/session-query/tool-session-query/README.zh.md) | [2 个测试文件](../../packages/session-query/tool-session-query/tests/sqlite-integration.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
