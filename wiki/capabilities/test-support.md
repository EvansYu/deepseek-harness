# test-support 能力索引

## 概述

本页由包清单与 README 元数据生成；共 7 个包。功能配置、限制和使用方式以[所属文档](../../packages/test-support/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [agent-loop-testkit](../../packages/test-support/agent-loop-testkit/package.json) | 为 agent-loop 测试提供先决依赖挂载、生产 AgentLoop 驱动与职责明确的 Inbox 桩。 [说明](../../packages/test-support/agent-loop-testkit/README.zh.md) | [1 个测试文件](../../packages/test-support/agent-loop-testkit/tests/agent-loop-testkit.spec.ts) |
| [client-test-runtime](../../packages/test-support/client-runtime/package.json) | 面向浏览器功能测试的 jsdom slot 测试运行时，供测试作者针对生产机制检验 slot、存储与渲染。 [说明](../../packages/test-support/client-runtime/README.zh.md) | [12 个测试文件](../../packages/test-support/client-runtime/tests/assembly-bundle-roster.client.spec.ts) |
| [llm-mock-server](../../packages/test-support/llm-mock-server/package.json) | 用于在无提供方密钥的情况下测试 LLM（大语言模型）适配器与恢复策略的可通过脚本控制的 Messages 兼容故障服务器，面向测试作者与演示。 [说明](../../packages/test-support/llm-mock-server/README.zh.md) | [2 个测试文件](../../packages/test-support/llm-mock-server/tests/cli.spec.ts) |
| [llm-replay](../../packages/test-support/llm-replay/package.json) | 面向快照测试的无密钥 LLM（大语言模型）回放插件，供测试作者针对已记录模型 transcript（文本记录）启动真实 agent（智能体）。 [说明](../../packages/test-support/llm-replay/README.zh.md) | [2 个测试文件](../../packages/test-support/llm-replay/tests/llm-replay.spec.ts) |
| [loader-smoke](../../packages/test-support/loader-smoke/package.json) | 面向无密钥示例冒烟测试的共享子进程与直接 agent（智能体） harness，供测试作者启动真实 Loader 组合。 [说明](../../packages/test-support/loader-smoke/README.zh.md) | [3 个测试文件](../../packages/test-support/loader-smoke/tests/agent-turn.spec.ts) |
| [remote-mock](../../packages/test-support/remote-mock/package.json) | Typert Remote 流量的端点具名 mock：一元应答与流脚本的表、活流控制、日志与 Connection 载体面，供测试作者在没有 Host 的情况下启动真实浏览器客户端。 [说明](../../packages/test-support/remote-mock/README.zh.md) | [5 个测试文件](../../packages/test-support/remote-mock/tests/proxy-types.client.spec.ts) |
| [session-snapshot](../../packages/test-support/session-snapshot/package.json) | 面向无密钥 profile 测试的会话日志快照支持：manifest（元数据清单）、身份脱敏、规范化、workspace 检查与协议适配器。 [说明](../../packages/test-support/session-snapshot/README.zh.md) | [7 个测试文件](../../packages/test-support/session-snapshot/tests/harness.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
