# sandbox 能力索引

## 概述

本页由包清单与 README 元数据生成；共 4 个包。功能配置、限制和使用方式以[所属文档](../../packages/sandbox/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [sandbox-local](../../packages/sandbox/sandbox-local/package.json) | 面向 Linux、macOS 或 Windows 上选择、配置或排查进程隔离的用户与维护者的本地各平台沙箱后端。 [说明](../../packages/sandbox/sandbox-local/README.zh.md) | [3 个测试文件](../../packages/sandbox/sandbox-local/tests/acl-grants.spec.ts) |
| [sandbox-policy](../../packages/sandbox/sandbox-policy/package.json) | 面向需要在各项负责强制执行的能力之间组合、配置或排查文件操作策略的用户与维护者，提供共享的逐调用沙箱策略解析器与当前模型上下文。 [说明](../../packages/sandbox/sandbox-policy/README.zh.md) | [1 个测试文件](../../packages/sandbox/sandbox-policy/tests/policy.spec.ts) |
| [sandbox-windows-acl](../../packages/sandbox/sandbox-windows-acl/package.json) | 面向 Windows 上选择、配置或排查受限令牌进程隔离的用户与维护者的 Windows 写入限制沙箱后端。 [说明](../../packages/sandbox/sandbox-windows-acl/README.zh.md) | [16 个测试文件](../../packages/sandbox/sandbox-windows-acl/tests/acl-failure-paths.spec.ts) |
| [sandbox](../../packages/sandbox/sandbox/package.json) | 面向用户与维护者的进程沙箱服务约定，用于组合、使用或扩展与宿主共享文件系统和内核的子进程限制机制。 [说明](../../packages/sandbox/sandbox/README.zh.md) | [4 个测试文件](../../packages/sandbox/sandbox/tests/diagnostics.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
