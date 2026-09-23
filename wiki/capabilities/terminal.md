# terminal 能力索引

## 概述

本页由包清单与 README 元数据生成；共 3 个包。功能配置、限制和使用方式以[所属文档](../../packages/terminal/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [terminal-bash](../../packages/terminal/terminal-bash/package.json) | 持久终端会话的随产品交付的 shell 后端：在共享沙箱策略下启动交互式 bash 或 pwsh，带就绪检测与有界逐行输出。 [说明](../../packages/terminal/terminal-bash/README.zh.md) | [6 个测试文件](../../packages/terminal/terminal-bash/tests/config.spec.ts) |
| [terminal](../../packages/terminal/terminal/package.json) | 面向部署方与消费方的持久终端会话说明，用于选择、组合或扩展限定所有者范围的 ctx.terminals 服务。 [说明](../../packages/terminal/terminal/README.zh.md) | [1 个测试文件](../../packages/terminal/terminal/tests/service.spec.ts) |
| [tool-terminal](../../packages/terminal/tool-terminal/package.json) | 面向需要跨调用终端状态的 agent（智能体）的 6 个持久终端工具，带所有者隔离、有界结果与可选后台发送。 [说明](../../packages/terminal/tool-terminal/README.zh.md) | [3 个测试文件](../../packages/terminal/tool-terminal/tests/loader-composition.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
