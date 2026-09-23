# experimental 能力索引

## 概述

本页由包清单与 README 元数据生成；共 20 个包。功能配置、限制和使用方式以[所属文档](../../packages/experimental/README.zh.md)为准。此组为实验能力，不代表默认启用或稳定支持。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [experimental-agent-team-profile](../../packages/experimental/agent-team-profile/package.json) | 在一个实验性组合包中启用团队协作、工具与 Web 成员和任务看板。 [说明](../../packages/experimental/agent-team-profile/README.zh.md) | [1 个测试文件](../../packages/experimental/agent-team-profile/tests/profile.spec.ts) |
| [experimental-agent-team](../../packages/experimental/agent-team/package.json) | 在一个会话中运行一个小型具名 agent（智能体）团队：成员之间的持久消息与共享任务板，用于组合实验性 Team 插件的部署。 [说明](../../packages/experimental/agent-team/README.zh.md) | [4 个测试文件](../../packages/experimental/agent-team/tests/invariant.spec.ts) |
| [experimental-api-speech-to-text](../../packages/experimental/api-speech-to-text/package.json) | 通过带认证的 Web Remote 提供有界临时转写。 [说明](../../packages/experimental/api-speech-to-text/README.zh.md) | [2 个测试文件](../../packages/experimental/api-speech-to-text/tests/controller.spec.ts) |
| [experimental-auto-review](../../packages/experimental/auto-review/package.json) | 为 Web profile 添加实验性逐调用 Auto review，在工具以 Full access 执行前使用当前 agent 的模型审查。 [说明](../../packages/experimental/auto-review/README.zh.md) | [1 个测试文件](../../packages/experimental/auto-review/tests/auto-review.spec.ts) |
| [experimental-browser-use-chrome-devtools-mcp](../../packages/experimental/browser-use-chrome-devtools-mcp/package.json) | 通过 Chrome DevTools MCP 操作 Chromium，为每个活动 Session 保持独立浏览器状态。 [说明](../../packages/experimental/browser-use-chrome-devtools-mcp/README.zh.md) | [1 个测试文件](../../packages/experimental/browser-use-chrome-devtools-mcp/tests/provider.spec.ts) |
| [experimental-browser-use-playwright-mcp](../../packages/experimental/browser-use-playwright-mcp/package.json) | 通过 Playwright MCP 操作 Chromium，为每个活动 Session 保持独立浏览器状态。 [说明](../../packages/experimental/browser-use-playwright-mcp/README.zh.md) | [1 个测试文件](../../packages/experimental/browser-use-playwright-mcp/tests/provider.spec.ts) |
| [experimental-browser-use-runtime](../../packages/experimental/browser-use-runtime/package.json) | 在实验性浏览器提供方之间共享按 Session 管理的浏览器所有权与 MCP 激活。 [说明](../../packages/experimental/browser-use-runtime/README.zh.md) | [5 个测试文件](../../packages/experimental/browser-use-runtime/tests/agent-disposal.spec.ts) |
| [experimental-browser-use-stagehand-native](../../packages/experimental/browser-use-stagehand-native/package.json) | 通过 Stagehand 原生浏览器操作与显式配置的模型推理控制 Chromium。 [说明](../../packages/experimental/browser-use-stagehand-native/README.zh.md) | [9 个测试文件](../../packages/experimental/browser-use-stagehand-native/tests/launch-process.spec.ts) |
| [experimental-client-ui-agent-team](../../packages/experimental/client-ui-agent-team/package.json) | 使用并排查实验性 Web Agent Teams roster、共享任务板与 teammate 导航面板。 [说明](../../packages/experimental/client-ui-agent-team/README.zh.md) | [2 个测试文件](../../packages/experimental/client-ui-agent-team/tests/browser-plugin.client.spec.ts) |
| [experimental-client-ui-voice-input](../../packages/experimental/client-ui-voice-input/package.json) | 录制语音并将可确认的转写文字插入会话草稿。 [说明](../../packages/experimental/client-ui-voice-input/README.zh.md) | [7 个测试文件](../../packages/experimental/client-ui-voice-input/tests/audio.client.spec.ts) |
| [experimental-computer-use-cua-driver-mcp](../../packages/experimental/computer-use-cua-driver-mcp/package.json) | 通过已安装的 Cua Driver MCP 可执行程序和独占提供者注册，配置实验性本地计算机使用能力。 [说明](../../packages/experimental/computer-use-cua-driver-mcp/README.zh.md) | [2 个测试文件](../../packages/experimental/computer-use-cua-driver-mcp/tests/composition.spec.ts) |
| [experimental-computer-use-cua-driver-native](../../packages/experimental/computer-use-cua-driver-native/package.json) | 通过原生 npm SDK 运行 Cua Driver 的电脑操作工具，持久化截图，并明确主机桌面权限要求。 [说明](../../packages/experimental/computer-use-cua-driver-native/README.zh.md) | [3 个测试文件](../../packages/experimental/computer-use-cua-driver-native/tests/cancellation.spec.ts) |
| [experimental-inspector](../../packages/experimental/inspector/package.json) | 面向 Host 与浏览器 Client Cordis 运行时的实验性 Chrome DevTools 检查，包括 Console 求值、Sources、Network 采集、Elements 树和独立于 CDP 的查询 API。 [说明](../../packages/experimental/inspector/README.zh.md) | [20 个测试文件](../../packages/experimental/inspector/tests/client-runtime.client.spec.ts) |
| [experimental-ptc-runtime-python](../../packages/experimental/ptc-runtime-python/package.json) | CPython 子进程 PTC 运行时：为 Python 模型代码实现 dsh-ptc-runtime seam，及其使用的 fd-3 wire 协议。 [说明](../../packages/experimental/ptc-runtime-python/README.zh.md) | [5 个测试文件](../../packages/experimental/ptc-runtime-python/tests/boot-write-failure.spec.ts) |
| [experimental-speech-to-text-sensevoice](../../packages/experimental/speech-to-text-sensevoice/package.json) | 按需准备和运行本地 CPU SenseVoice 工作进程。 [说明](../../packages/experimental/speech-to-text-sensevoice/README.zh.md) | [10 个测试文件](../../packages/experimental/speech-to-text-sensevoice/tests/download-error.spec.ts) |
| [experimental-speech-to-text](../../packages/experimental/speech-to-text/package.json) | 具名实验性转写 Provider 及取消操作的所有权。 [说明](../../packages/experimental/speech-to-text/README.zh.md) | [2 个测试文件](../../packages/experimental/speech-to-text/tests/configuration.spec.ts) |
| [experimental-tool-agent-team](../../packages/experimental/tool-agent-team/package.json) | 九个让模型创建、发消息与协调 teammate 的工具，供挂载实验性 Team 插件的组合使用。 [说明](../../packages/experimental/tool-agent-team/README.zh.md) | [1 个测试文件](../../packages/experimental/tool-agent-team/tests/tool-team.spec.ts) |
| [experimental-voice-input-bundle](../../packages/experimental/voice-input-bundle/package.json) | 从插件管理页启用实验性语音输入。 [说明](../../packages/experimental/voice-input-bundle/README.zh.md) | 未发现包内 spec/test 文件；查阅所属说明 |
| [experimental-webworker-packer](../../packages/experimental/webworker-packer/package.json) | 面向构建或排查实验性预览部署的维护者，说明浏览器 worker 虚拟文件系统（VFS）镜像打包。 [说明](../../packages/experimental/webworker-packer/README.zh.md) | [3 个测试文件](../../packages/experimental/webworker-packer/tests/exports.spec.ts) |
| [experimental-webworker-runtime](../../packages/experimental/webworker-runtime/package.json) | 面向构建或排查实验性 Web 预览运行时的维护者，说明浏览器 worker 中的 harness 托管。 [说明](../../packages/experimental/webworker-runtime/README.zh.md) | [34 个测试文件](../../packages/experimental/webworker-runtime/tests/client/apply-injections.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
