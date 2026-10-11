# preset 能力索引

## 概述

本页由包清单与 README 元数据生成；共 3 个包。功能配置、限制和使用方式以[所属文档](../../packages/preset/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [agent-preset-registry](../../packages/preset/agent-preset-registry/package.json) | 通过声明式 preset 选择 Agent 的工具、提示词和技能。同一进程可以运行多种组合。配置失败会显示在列表中；现有 Agent 保留已经使用的组合。 [说明](../../packages/preset/agent-preset-registry/README.zh.md) | [5 个测试文件](../../packages/preset/agent-preset-registry/tests/composition-inventory.spec.ts) |
| [agent-preset](../../packages/preset/agent-preset/package.json) | 在普通 Cordis YAML 中定义 Agent 的子插件列表。可同时声明多个 preset，由会话选择。声明会提前加载，修改只影响之后创建的 Agent。 [说明](../../packages/preset/agent-preset/README.zh.md) | [1 个测试文件](../../packages/preset/agent-preset/tests/skills.spec.ts) |
| [persona](../../packages/preset/persona/package.json) | preset 挂载的可组装人设行，让单个 agent 拥有自己的系统提示词人设，供配置或排查它的用户与维护者阅读。 [说明](../../packages/preset/persona/README.zh.md) | [1 个测试文件](../../packages/preset/persona/tests/persona.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
