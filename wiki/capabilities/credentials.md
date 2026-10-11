# credentials 能力索引

## 概述

本页由包清单与 README 元数据生成；共 5 个包。功能配置、限制和使用方式以[所属文档](../../packages/credentials/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [authorization](../../packages/credentials/authorization/package.json) | 面向用户与维护者的授权 flow 注册表：获取配置无法提供的凭据，因为拿到它需要与人对话。 [说明](../../packages/credentials/authorization/README.zh.md) | [1 个测试文件](../../packages/credentials/authorization/tests/authorization.spec.ts) |
| [credentials-local](../../packages/credentials/credentials-local/package.json) | 面向用户与维护者的文件型凭据提供方：选择、配置或排查本地凭据存储及其环境分层。 [说明](../../packages/credentials/credentials-local/README.zh.md) | [6 个测试文件](../../packages/credentials/credentials-local/tests/drain.spec.ts) |
| [credentials](../../packages/credentials/credentials/package.json) | 面向用户与维护者的凭据 seam：在不把机密值写进配置的前提下解析、描述或存储凭据——引用值与持久化记录。 [说明](../../packages/credentials/credentials/README.zh.md) | [1 个测试文件](../../packages/credentials/credentials/tests/credentials.spec.ts) |
| [deepseek-account-platform](../../packages/credentials/deepseek-account-platform/package.json) | 通过系统浏览器登录，并将账号凭证保存在现有本地凭证存储中。本地取消会阻止迟到的回调和兑换响应使用户登录。 [说明](../../packages/credentials/deepseek-account-platform/README.zh.md) | [6 个测试文件](../../packages/credentials/deepseek-account-platform/tests/account.spec.ts) |
| [deepseek-account](../../packages/credentials/deepseek-account/package.json) | 账号使用方可读取本地登录状态、发起或取消浏览器登录，并在保留 API Key 的情况下退出。Host 模型使用方仅能为提供者配置的推理来源解析账号凭证。 [说明](../../packages/credentials/deepseek-account/README.zh.md) | [2 个测试文件](../../packages/credentials/deepseek-account/tests/account-tasks.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
