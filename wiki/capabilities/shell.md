# shell 能力索引

## 概述

本页由包清单与 README 元数据生成；共 10 个包。功能配置、限制和使用方式以[所属文档](../../packages/shell/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [bash-local](../../packages/shell/bash-local/package.json) | 面向部署方与维护者的默认 POSIX Bash 执行器说明，用于选择、配置或排查基于 shell seam 的非隔离命令执行。 [说明](../../packages/shell/bash-local/README.zh.md) | [2 个测试文件](../../packages/shell/bash-local/tests/executor.spec.ts) |
| [bash-sandbox](../../packages/shell/bash-sandbox/package.json) | 面向部署方与维护者的沙箱 Bash 执行器说明，用于选择、配置或排查受限命令执行及其拒绝与升权事实。 [说明](../../packages/shell/bash-sandbox/README.zh.md) | [3 个测试文件](../../packages/shell/bash-sandbox/tests/foreground-timeout.spec.ts) |
| [pwsh-local](../../packages/shell/pwsh-local/package.json) | 面向部署方与维护者的本地 PowerShell 执行器说明，用于选择、配置或排查基于 shell seam 的非隔离 PowerShell 命令执行。 [说明](../../packages/shell/pwsh-local/README.zh.md) | [2 个测试文件](../../packages/shell/pwsh-local/tests/executor.spec.ts) |
| [pwsh-sandbox](../../packages/shell/pwsh-sandbox/package.json) | 面向部署方与维护者的沙箱 PowerShell 执行器说明，用于选择、配置或排查受限 PowerShell 命令执行及其拒绝事实。 [说明](../../packages/shell/pwsh-sandbox/README.zh.md) | [2 个测试文件](../../packages/shell/pwsh-sandbox/tests/foreground-timeout.spec.ts) |
| [shell-env](../../packages/shell/shell-env/package.json) | 受管 DSH_* shell 环境，供选择、配置或扩展每次模型 shell 调用所运行环境的使用者与维护者阅读。 [说明](../../packages/shell/shell-env/README.zh.md) | [1 个测试文件](../../packages/shell/shell-env/tests/shell-env.spec.ts) |
| [shell](../../packages/shell/shell/package.json) | 面向开发者与维护者的 shell 执行器 seam 说明，用于选择、组合或实现基于 ctx.shell 的命令执行。 [说明](../../packages/shell/shell/README.zh.md) | [2 个测试文件](../../packages/shell/shell/tests/render.spec.ts) |
| [tool-bash-persistent](../../packages/shell/tool-bash-persistent/package.json) | 面向模型的持久 bash 工具，供选择、配置或排查跨调用保留的按所有者隔离 shell 状态的使用者与维护者阅读。 [说明](../../packages/shell/tool-bash-persistent/README.zh.md) | [2 个测试文件](../../packages/shell/tool-bash-persistent/tests/loader-composition.spec.ts) |
| [tool-bash](../../packages/shell/tool-bash/package.json) | 面向模型的 bash 工具，供选择、配置或排查一次性命令执行、后台任务与沙箱升权的使用者与维护者阅读。 [说明](../../packages/shell/tool-bash/README.zh.md) | [4 个测试文件](../../packages/shell/tool-bash/tests/background-start.spec.ts) |
| [tool-pwsh-persistent](../../packages/shell/tool-pwsh-persistent/package.json) | 面向模型的持久 pwsh 工具，供选择、配置或排查跨调用保留的按所有者隔离 PowerShell 状态的使用者与维护者阅读。 [说明](../../packages/shell/tool-pwsh-persistent/README.zh.md) | [2 个测试文件](../../packages/shell/tool-pwsh-persistent/tests/loader-composition.spec.ts) |
| [tool-pwsh](../../packages/shell/tool-pwsh/package.json) | 面向模型的 pwsh 工具，供选择、配置或排查 Windows 上一次性 PowerShell 执行、后台任务与沙箱升权的使用者与维护者阅读。 [说明](../../packages/shell/tool-pwsh/README.zh.md) | [5 个测试文件](../../packages/shell/tool-pwsh/tests/background-start.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
