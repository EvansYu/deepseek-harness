# api 能力索引

## 概述

本页由包清单与 README 元数据生成；共 9 个包。功能配置、限制和使用方式以[所属文档](../../packages/api/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [api-account-controller](../../packages/api/account-controller/package.json) | 账号页面使用经过认证的 Remote 操作和快照流。控制器提供登录状态，不返回 token 或 PKCE 私密数据。 [说明](../../packages/api/account-controller/README.zh.md) | [1 个测试文件](../../packages/api/account-controller/tests/controller.spec.ts) |
| [api-gateway](../../packages/api/gateway/package.json) | 带类型的 Client 到 Host 调用与流：分派、校验、取消、重连与转发的 Host 事件。 [说明](../../packages/api/gateway/README.zh.md) | [9 个测试文件](../../packages/api/gateway/tests/control-retry.client.spec.ts) |
| [api-job-controller](../../packages/api/job-controller/package.json) | Host 与 Client 的 job 控制：把一个会话看得到的名册与一个 job 的保留输出镜像到浏览器，不触碰模型的消耗型游标，并代人类停止一个 job。 [说明](../../packages/api/job-controller/README.zh.md) | [5 个测试文件](../../packages/api/job-controller/tests/client-apply.client.spec.ts) |
| [api-remotes](../../packages/api/remotes/package.json) | 应用 Remote 装配：为 Client 消费方选择带类型的 Host 能力与转发事件。 [说明](../../packages/api/remotes/README.zh.md) | [1 个测试文件](../../packages/api/remotes/tests/remote-events.host.spec.ts) |
| [api-session-controller](../../packages/api/session-controller/package.json) | Host 与 Client 会话控制：创建、恢复、提示、跟随历史并投影实时会话状态。 [说明](../../packages/api/session-controller/README.zh.md) | [40 个测试文件](../../packages/api/session-controller/tests/agent.host.spec.ts) |
| [api-settings-controller](../../packages/api/settings-controller/package.json) | settings 与凭据配置界面的 Host Remote owner，涵盖脱敏读取、写入、凭据引用与原生文档打开。 [说明](../../packages/api/settings-controller/README.zh.md) | [2 个测试文件](../../packages/api/settings-controller/tests/credentials-controller.host.spec.ts) |
| [api-terminal-controller](../../packages/api/terminal-controller/package.json) | 用户交互式终端：执行环境默认 shell、有界屏幕恢复和类型化 Remote 控制。 [说明](../../packages/api/terminal-controller/README.zh.md) | [8 个测试文件](../../packages/api/terminal-controller/tests/bindings.client.spec.ts) |
| [api-workspace-controller](../../packages/api/workspace-controller/package.json) | Host 与 Client 工作区控制：修改工作区导航并跟随其完整投影。 [说明](../../packages/api/workspace-controller/README.zh.md) | [5 个测试文件](../../packages/api/workspace-controller/tests/default-directory.host.spec.ts) |
| [api-workspace-files](../../packages/api/workspace-files/package.json) | 面向 Web GUI 的工作区文件服务：有界文件读取、按目标监听文件系统变化，以及 Session 工作区根内的目录列举。 [说明](../../packages/api/workspace-files/README.zh.md) | [12 个测试文件](../../packages/api/workspace-files/tests/apply.client.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
