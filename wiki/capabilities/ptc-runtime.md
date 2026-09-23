# ptc-runtime 能力索引

## 概述

本页由包清单与 README 元数据生成；共 2 个包。功能配置、限制和使用方式以[所属文档](../../packages/ptc-runtime/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [ptc-runtime-node](../../packages/ptc-runtime/ptc-runtime-node/package.json) | 在全新 Node 进程中运行 TypeScript 程序，使用会话文件系统沙箱、受管清理以及可配置的执行与输出限制。 [说明](../../packages/ptc-runtime/ptc-runtime-node/README.zh.md) | [12 个测试文件](../../packages/ptc-runtime/ptc-runtime-node/tests/bindings.spec.ts) |
| [ptc-runtime](../../packages/ptc-runtime/ptc-runtime/package.json) | 抽象 PTC 执行 seam（`ctx.ptcRuntime`），供用户与维护者组合、消费或构建后端，以针对宿主提供的绑定运行一段模型编写的程序。 [说明](../../packages/ptc-runtime/ptc-runtime/README.zh.md) | [2 个测试文件](../../packages/ptc-runtime/ptc-runtime/tests/reserved.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
