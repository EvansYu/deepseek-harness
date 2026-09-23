# deliverables 能力索引

## 概述

本页由包清单与 README 元数据生成；共 2 个包。功能配置、限制和使用方式以[所属文档](../../packages/deliverables/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [tool-present](../../packages/deliverables/tool-present/package.json) | 通过 present 声明交付可访问的文件；配置、Session 归属与源文件打开。 [说明](../../packages/deliverables/tool-present/README.zh.md) | [1 个测试文件](../../packages/deliverables/tool-present/tests/present.spec.ts) |
| [workspace-changes](../../packages/deliverables/workspace-changes/package.json) | 用 git 工作树快照和文件工具编辑前后的整文件捕获汇总每个顶层轮次改动的文件，以 workspace/changes Session 事件宣告，并在 Session 存活期间提供摘要和逐文件对比；配置、仓库要求与覆盖规则。 [说明](../../packages/deliverables/workspace-changes/README.zh.md) | [7 个测试文件](../../packages/deliverables/workspace-changes/tests/capture.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
