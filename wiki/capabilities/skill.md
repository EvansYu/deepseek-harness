# skill 能力索引

## 概述

本页由包清单与 README 元数据生成；共 5 个包。功能配置、限制和使用方式以[所属文档](../../packages/skill/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [skill-filesystem](../../packages/skill/skill-filesystem/package.json) | 本地文件系统 skill 提供方，供编写本地 skill 或配置项目、自定义与用户 skill 根目录如何被发现与监视的用户与维护者阅读。 [说明](../../packages/skill/skill-filesystem/README.zh.md) | [2 个测试文件](../../packages/skill/skill-filesystem/tests/skill-filesystem-watcher.spec.ts) |
| [skill-office](../../packages/skill/skill-office/package.json) | 随包附带的 Word、PowerPoint 和 Excel 指令，供需要 Office 文件编写与结构检查能力的部署使用。 [说明](../../packages/skill/skill-office/README.zh.md) | [2 个测试文件](../../packages/skill/skill-office/tests/checkers.spec.ts) |
| [skill](../../packages/skill/skill/package.json) | skill（技能）提供方注册表，供选择、配置或排查来自任意来源的 skill 如何被合并、解析与加载的用户与维护者阅读。 [说明](../../packages/skill/skill/README.zh.md) | [1 个测试文件](../../packages/skill/skill/tests/skill.spec.ts) |
| [tool-skill](../../packages/skill/tool-skill/package.json) | 面向模型的 skill（技能）目录与加载工具，供希望了解 agent（智能体）看到的内容或配置会话 skill 目录的用户与维护者阅读。 [说明](../../packages/skill/tool-skill/README.zh.md) | [1 个测试文件](../../packages/skill/tool-skill/tests/tool-skill.spec.ts) |
| [tool-workspace-dependencies](../../packages/skill/tool-workspace-dependencies/package.json) | load_workspace_dependencies 工具：返回随包附带的 Python、Node.js 与 pnpm 的绝对路径，payload 可原地使用或安装到 Harness home。 [说明](../../packages/skill/tool-workspace-dependencies/README.zh.md) | [1 个测试文件](../../packages/skill/tool-workspace-dependencies/tests/tool-workspace-dependencies.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
