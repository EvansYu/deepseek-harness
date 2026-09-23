# bundle 能力索引

## 概述

本页由包清单与 README 元数据生成；共 6 个包。功能配置、限制和使用方式以[所属文档](../../packages/bundle/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [acp-app](../../packages/bundle/acp-app/package.json) | 面向启动持久 harness agent（智能体）的用户与维护者，说明纯自动化 ACP（Agent Client Protocol）stdio 应用 profile。 [说明](../../packages/bundle/acp-app/README.zh.md) | [2 个测试文件](../../packages/bundle/acp-app/tests/acp-app.spec.ts) |
| [base](../../packages/bundle/base/package.json) | 共享的 dsh 核心：为每个 dsh --profile 表层提供模型访问、工具、持久会话与安全默认值，供用户组合或定制 profile。 [说明](../../packages/bundle/base/README.zh.md) | [1 个测试文件](../../packages/bundle/base/tests/base.spec.ts) |
| [headless](../../packages/bundle/headless/package.json) | dsh 的一次性任务模式：从命令行运行单个任务并打印最终答案，供用户脚本化或自动化 dsh。 [说明](../../packages/bundle/headless/README.zh.md) | [3 个测试文件](../../packages/bundle/headless/tests/headless.spec.ts) |
| [sdk-app](../../packages/bundle/sdk-app/package.json) | 面向启动 JSON-RPC harness 运行时的用户与维护者，说明 SDK stdio 应用 profile。 [说明](../../packages/bundle/sdk-app/README.zh.md) | [2 个测试文件](../../packages/bundle/sdk-app/tests/sdk-app.spec.ts) |
| [sdk-minimal](../../packages/bundle/sdk-minimal/package.json) | 供需要不含共享 base bundle 的极简跨平台 coding agent（编程智能体）的用户使用的独立 SDK profile，默认提供一个 shell 工具。 [说明](../../packages/bundle/sdk-minimal/README.zh.md) | [1 个测试文件](../../packages/bundle/sdk-minimal/tests/sdk-minimal.spec.ts) |
| [web-app](../../packages/bundle/web-app/package.json) | dsh 的浏览器 GUI：交互式聊天、模型与设置管理、会话历史，供运行 dsh web 表层的用户使用。 [说明](../../packages/bundle/web-app/README.zh.md) | [6 个测试文件](../../packages/bundle/web-app/tests/browser-defaults.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
