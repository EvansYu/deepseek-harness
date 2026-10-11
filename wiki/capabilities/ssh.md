# ssh 能力索引

## 概述

本页由包清单与 README 元数据生成；共 5 个包。功能配置、限制和使用方式以[所属文档](../../packages/ssh/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [fs-ssh](../../packages/ssh/fs-ssh/package.json) | 面向与 SSH 子进程共享文件的消费方，说明远端文件系统语义。 [说明](../../packages/ssh/fs-ssh/README.zh.md) | [1 个测试文件](../../packages/ssh/fs-ssh/tests/provider.spec.ts) |
| [sandbox-ssh](../../packages/ssh/sandbox-ssh/package.json) | 面向使用 SSH 文件系统和子进程提供方的组合，说明远端文件效果限制。 [说明](../../packages/ssh/sandbox-ssh/README.zh.md) | [1 个测试文件](../../packages/ssh/sandbox-ssh/tests/provider.spec.ts) |
| [ssh-helper-runtime](../../packages/ssh/ssh-helper-runtime/package.json) | 构建并验证内嵌 Node 运行时的 Linux 与 macOS SSH helper 可执行文件。 [说明](../../packages/ssh/ssh-helper-runtime/README.zh.md)；私有包 | 未发现包内 spec/test 文件；查阅所属说明 |
| [ssh](../../packages/ssh/ssh/package.json) | 面向组合 POSIX 文件、进程与沙箱提供方的部署者，说明 OpenSSH 连接配置及远端辅助进程生命周期。 [说明](../../packages/ssh/ssh/README.zh.md) | [20 个测试文件](../../packages/ssh/ssh/tests/collection.spec.ts) |
| [subprocess-ssh](../../packages/ssh/subprocess-ssh/package.json) | 面向 Bash、LSP 及 Node 运行时消费方，说明托管 SSH 子进程与终端行为。 [说明](../../packages/ssh/subprocess-ssh/README.zh.md) | [5 个测试文件](../../packages/ssh/subprocess-ssh/tests/lifecycle.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
