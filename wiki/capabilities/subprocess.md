# subprocess 能力索引

## 概述

本页由包清单与 README 元数据生成；共 3 个包。功能配置、限制和使用方式以[所属文档](../../packages/subprocess/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [subprocess-local](../../packages/subprocess/subprocess-local/package.json) | 子进程服务的本地宿主提供方：在宿主机器上运行由 OS 所有的受管范围与真实终端会话，并明确披露较弱的 fallback。 [说明](../../packages/subprocess/subprocess-local/README.zh.md) | [15 个测试文件](../../packages/subprocess/subprocess-local/tests/control.spec.ts) |
| [subprocess](../../packages/subprocess/subprocess/package.json) | 面向组合作者与能力消费方的子进程服务（`ctx.subprocess`）说明：启动、观察并终止受管子进程与终端会话。 [说明](../../packages/subprocess/subprocess/README.zh.md) | [3 个测试文件](../../packages/subprocess/subprocess/tests/control.spec.ts) |
| [win32-process](../../packages/subprocess/win32-process/package.json) | 面向实现或排查 Windows ACL 沙箱与普通子进程 Job runner 的维护者，说明底层 Win32 进程原语。 [说明](../../packages/subprocess/win32-process/README.zh.md) | [6 个测试文件](../../packages/subprocess/win32-process/tests/ffi.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
