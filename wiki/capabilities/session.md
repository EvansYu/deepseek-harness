# session 能力索引

## 概述

本页由包清单与 README 元数据生成；共 21 个包。功能配置、限制和使用方式以[所属文档](../../packages/session/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [session-checkpoint-policy](../../packages/session/session-checkpoint-policy/package.json) | 面向用户与维护者的语义会话持久性检查点说明，用于部署不会在崩溃时丢失模型请求或工具副作用的持久化 agent（智能体）。 [说明](../../packages/session/session-checkpoint-policy/README.zh.md) | [1 个测试文件](../../packages/session/session-checkpoint-policy/tests/session-checkpoint-policy.spec.ts) |
| [session-format-catalog](../../packages/session/session-format-catalog/package.json) | 供持久化读取方使用的构建期静态第一方 Session 格式编解码器与相邻迁移装配。 [说明](../../packages/session/session-format-catalog/README.zh.md) | [5 个测试文件](../../packages/session/session-format-catalog/tests/catalog.spec.ts) |
| [session-format-v0-to-v1](../../packages/session/session-format-v0-to-v1/package.json) | 冻结的已发布 v0 会话标头、事件与打包行解码器，以及到 v1 的恒等转换。 [说明](../../packages/session/session-format-v0-to-v1/README.zh.md) | [5 个测试文件](../../packages/session/session-format-v0-to-v1/tests/codec.spec.ts) |
| [session-format-v1-to-v2](../../packages/session/session-format-v1-to-v2/package.json) | 冻结的已发布 v1 Session 读取器，以及把 Assistant 流嵌入已发布 v2 事件的基数变化迁移。 [说明](../../packages/session/session-format-v1-to-v2/README.zh.md) | [3 个测试文件](../../packages/session/session-format-v1-to-v2/tests/codec.spec.ts) |
| [session-format-v2-to-v3](../../packages/session/session-format-v2-to-v3/package.json) | 完整的 V2 到 V3 会话转换：系统头节点、经过审计的引用、PTC 与预设名称、规范信封、保留与拒绝规则。 [说明](../../packages/session/session-format-v2-to-v3/README.zh.md) | [8 个测试文件](../../packages/session/session-format-v2-to-v3/tests/admission.spec.ts) |
| [session-format-v3-to-v4](../../packages/session/session-format-v3-to-v4/package.json) | 完整的 V3 到 V4 Session 转换与原生接纳：工具角色结果、生产者来源、父目录、引用重映射及拒绝规则。 [说明](../../packages/session/session-format-v3-to-v4/README.zh.md) | [20 个测试文件](../../packages/session/session-format-v3-to-v4/tests/attribution.spec.ts) |
| [session-format](../../packages/session/session-format/package.json) | 纯函数式相邻会话格式规划、无损 JSON 值检查、仅标头迁移与物理编解码分派。 [说明](../../packages/session/session-format/README.zh.md) | [4 个测试文件](../../packages/session/session-format/tests/catalog.spec.ts) |
| [session-log-deepseek](../../packages/session/session-log-deepseek/package.json) | 面向启用官方 DeepSeek 请求元数据的部署，增量上传规范会话日志。 [说明](../../packages/session/session-log-deepseek/README.zh.md) | [3 个测试文件](../../packages/session/session-log-deepseek/tests/config.spec.ts) |
| [session-persistence-jsonl](../../packages/session/session-persistence-jsonl/package.json) | 面向部署方与维护者的随产品交付 JSONL 会话持久化后端说明，用于选择、配置或排查带可选 Zstandard 压缩的逐会话持久日志。 [说明](../../packages/session/session-persistence-jsonl/README.zh.md) | [19 个测试文件](../../packages/session/session-persistence-jsonl/tests/catalog-migration.spec.ts) |
| [session-persistence](../../packages/session/session-persistence/package.json) | 面向用户与维护者的持久会话存储 seam 说明，用于选择持久化后端、恢复会话，或按共享服务约定构建后端。 [说明](../../packages/session/session-persistence/README.zh.md) | [1 个测试文件](../../packages/session/session-persistence/tests/storage-contract.spec.ts) |
| [session-projection-cache](../../packages/session/session-projection-cache/package.json) | 面向部署方与维护者的持久会话投影缓存说明，用于选择、配置或排查持久检查点、零 I/O 列表读取与加速的冷投影折叠。 [说明](../../packages/session/session-projection-cache/README.zh.md) | [2 个测试文件](../../packages/session/session-projection-cache/tests/cache.spec.ts) |
| [session-projection](../../packages/session/session-projection/package.json) | 面向开发者与维护者的会话投影注册表说明，用于向客户端载体提供日志派生逐会话状态的完整当前值，或维护驱动约定。 [说明](../../packages/session/session-projection/README.zh.md) | [1 个测试文件](../../packages/session/session-projection/tests/registry.spec.ts) |
| [session-stats](../../packages/session/session-stats/package.json) | 面向客户端与维护者的全日志会话计数与墙钟时间说明，用于选择、组合或排查 sessionStats 投影单元。 [说明](../../packages/session/session-stats/README.zh.md) | [2 个测试文件](../../packages/session/session-stats/tests/loader-composition.spec.ts) |
| [session-telemetry-otel](../../packages/session/session-telemetry-otel/package.json) | 面向部署方的 OpenTelemetry 会话遥测后端说明，用于选择模式、配置导出器或排查哪些数据离开本机。 [说明](../../packages/session/session-telemetry-otel/README.zh.md) | [2 个测试文件](../../packages/session/session-telemetry-otel/tests/egress.spec.ts) |
| [session-telemetry](../../packages/session/session-telemetry/package.json) | 面向部署方与后端作者的会话遥测捕获 seam 说明，用于选择上报后端、挂载脱敏规则或实现后端约定。 [说明](../../packages/session/session-telemetry/README.zh.md) | [2 个测试文件](../../packages/session/session-telemetry/tests/redact.spec.ts) |
| [session-title-first-prompt-llm](../../packages/session/session-title-first-prompt-llm/package.json) | 面向用户与维护者的首消息 LLM（大语言模型）会话标题提供方说明，用于选择标题策略或排查自动标题生成。 [说明](../../packages/session/session-title-first-prompt-llm/README.zh.md) | [2 个测试文件](../../packages/session/session-title-first-prompt-llm/tests/loader-composition.spec.ts) |
| [session-title-llm](../../packages/session/session-title-llm/package.json) | 面向会话标题提供方的共享模型执行策略：路由、上限、取消、请求记录与流式组装。 [说明](../../packages/session/session-title-llm/README.zh.md) | [1 个测试文件](../../packages/session/session-title-llm/tests/llm.spec.ts) |
| [session-title](../../packages/session/session-title/package.json) | 面向用户与维护者的日志支持型会话标题说明，用于选择标题来源、配置服务或排查标题状态。 [说明](../../packages/session/session-title/README.zh.md) | [6 个测试文件](../../packages/session/session-title/tests/persistence.spec.ts) |
| [session-turn-outline](../../packages/session/session-turn-outline/package.json) | 面向组合或调试 turnOutline 投影单元的客户端与维护者的全量轮次大纲说明，支撑整会话轮次导航。 [说明](../../packages/session/session-turn-outline/README.zh.md) | [2 个测试文件](../../packages/session/session-turn-outline/tests/loader-composition.spec.ts) |
| [tool-working-directory](../../packages/session/tool-working-directory/package.json) | 使用同一工具读取 Session 的当前目录，或进入一个现有目录。相对路径变更基于当前目录解析。返回的绝对路径可传给其他工具。 [说明](../../packages/session/tool-working-directory/README.zh.md) | 未发现包内 spec/test 文件；查阅所属说明 |
| [working-directory](../../packages/session/working-directory/package.json) | 改变一个 Session 的工作目录，同时保留已有进程各自的目录。所选目录可通过回放恢复，并出现在用户上下文中。当前目录消失时，只要原始项目仍然存在，就恢复到原始项目。 [说明](../../packages/session/working-directory/README.zh.md) | [2 个测试文件](../../packages/session/working-directory/tests/admission.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
