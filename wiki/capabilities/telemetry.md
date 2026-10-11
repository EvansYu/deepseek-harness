# telemetry 能力索引

## 概述

本页由包清单与 README 元数据生成；共 1 个包。功能配置、限制和使用方式以[所属文档](../../packages/telemetry/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [otel](../../packages/telemetry/otel/package.json) | 通过共享 Cordis OTel 服务创建独立的 OTLP 上报通道。 [说明](../../packages/telemetry/otel/README.zh.md) | [2 个测试文件](../../packages/telemetry/otel/tests/event-log.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
