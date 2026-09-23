# llm 能力索引

## 概述

本页由包清单与 README 元数据生成；共 7 个包。功能配置、限制和使用方式以[所属文档](../../packages/llm/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [deepseek-llm-api-extensions](../../packages/llm/deepseek-llm-api-extensions/package.json) | 面向提供方插件的官方 DeepSeek 请求扩展注册表，用于贡献具有生命周期归属的顶层 API 字段。 [说明](../../packages/llm/deepseek-llm-api-extensions/README.zh.md) | [1 个测试文件](../../packages/llm/deepseek-llm-api-extensions/tests/registry.spec.ts) |
| [llm-deepseek](../../packages/llm/llm-deepseek/package.json) | 配置 DeepSeek Messages、推理与图片输入。 [说明](../../packages/llm/llm-deepseek/README.zh.md) | [15 个测试文件](../../packages/llm/llm-deepseek/tests/adapter.spec.ts) |
| [llm-pi-ai](../../packages/llm/llm-pi-ai/package.json) | 面向用户与维护者的 pi-ai 多提供方适配器说明：通过 pi-ai 目录与手工声明网关路由 harness LLM（大语言模型）服务。 [说明](../../packages/llm/llm-pi-ai/README.zh.md) | [14 个测试文件](../../packages/llm/llm-pi-ai/tests/adapter.spec.ts) |
| [llm-retry](../../packages/llm/llm-retry/package.json) | 面向用户与维护者的重试执行器说明：在持久 agent（智能体）步骤边界上配置按提供方路由的模型请求恢复。 [说明](../../packages/llm/llm-retry/README.zh.md) | [5 个测试文件](../../packages/llm/llm-retry/tests/invariant.spec.ts) |
| [llm](../../packages/llm/llm/package.json) | 面向用户与维护者的提供方无关模型调用服务说明：流式发起请求、注册提供方适配器或解析模型元数据。 [说明](../../packages/llm/llm/README.zh.md) | [13 个测试文件](../../packages/llm/llm/tests/adapter-failure.spec.ts) |
| [plugin-package-inventory-deepseek](../../packages/llm/plugin-package-inventory-deepseek/package.json) | 面向发送官方 DeepSeek 请求的部署，说明活跃 Loader 包清单元数据。 [说明](../../packages/llm/plugin-package-inventory-deepseek/README.zh.md) | [1 个测试文件](../../packages/llm/plugin-package-inventory-deepseek/tests/inventory.spec.ts) |
| [token-meter](../../packages/llm/token-meter/package.json) | 面向用户与维护者的具备回放感知的 token 与上下文压力计量说明：评估提示词规模或构建压缩（compaction）与占用显示。 [说明](../../packages/llm/token-meter/README.zh.md) | [5 个测试文件](../../packages/llm/token-meter/tests/context-breakdown-projection.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
