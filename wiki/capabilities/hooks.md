# hooks 能力索引

## 概述

本页由包清单与 README 元数据生成；共 3 个包。功能配置、限制和使用方式以[所属文档](../../packages/hooks/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [hook-protocol](../../packages/hooks/hook-protocol/package.json) | Claude Code 与 Codex 桥接背后的共享钩子规则——钩子能做什么、运行时会发生什么——供 hooks 子系统的用户与维护者阅读。 [说明](../../packages/hooks/hook-protocol/README.zh.md) | [7 个测试文件](../../packages/hooks/hook-protocol/tests/codec.spec.ts) |
| [hooks-claude-code](../../packages/hooks/hooks-claude-code/package.json) | 在 agent 运行期间使用你现有的 Claude Code hooks.json 或 settings 钩子配置——阻塞提示词与工具、附加上下文或强制继续——供本桥接的用户与维护者阅读。 [说明](../../packages/hooks/hooks-claude-code/README.zh.md) | [6 个测试文件](../../packages/hooks/hooks-claude-code/tests/bridge.spec.ts) |
| [hooks-codex](../../packages/hooks/hooks-codex/package.json) | 在 agent 运行期间使用你现有的 Codex hooks.json 钩子配置——阻塞提示词与工具、附加上下文或强制继续——供本桥接的用户与维护者阅读。 [说明](../../packages/hooks/hooks-codex/README.zh.md) | [5 个测试文件](../../packages/hooks/hooks-codex/tests/bridge.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
