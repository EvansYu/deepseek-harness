# compaction 能力索引

## 概述

本页由包清单与 README 元数据生成；共 5 个包。功能配置、限制和使用方式以[所属文档](../../packages/compaction/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [command-compact](../../packages/compaction/command-compact/package.json) | 面向交互式组合的按需 /compact 命令：它做什么、你会看到什么，以及如何挂载。 [说明](../../packages/compaction/command-compact/README.zh.md) | [2 个测试文件](../../packages/compaction/command-compact/tests/command-compact.spec.ts) |
| [compaction-basic](../../packages/compaction/compaction-basic/package.json) | 面向部署场景的自动会话压缩（compaction）：用于选择、调优或排查随 token 压力上升对较早历史进行摘要的方式。 [说明](../../packages/compaction/compaction-basic/README.zh.md) | [4 个测试文件](../../packages/compaction/compaction-basic/tests/compaction-basic.spec.ts) |
| [compaction-image-offload](../../packages/compaction/compaction-image-offload/package.json) | 面向组合 compaction 的部署的图片省略执行器说明：支持图片的路由以请求超出图片预算拒绝时会发生什么。 [说明](../../packages/compaction/compaction-image-offload/README.zh.md) | [2 个测试文件](../../packages/compaction/compaction-image-offload/tests/image-offload.spec.ts) |
| [compaction-tool-result-pruner](../../packages/compaction/compaction-tool-result-pruner/package.json) | 面向组合压缩（compaction）部署场景的工具输出修剪：选择大小限制或排查超大工具结果为何被缩短。 [说明](../../packages/compaction/compaction-tool-result-pruner/README.zh.md) | [2 个测试文件](../../packages/compaction/compaction-tool-result-pruner/tests/loader-composition.spec.ts) |
| [compaction](../../packages/compaction/compaction/package.json) | 面向后端实现者与部署方的共享压缩约定：会话压缩做什么、何时使用，以及如何实现后端。 [说明](../../packages/compaction/compaction/README.zh.md) | [3 个测试文件](../../packages/compaction/compaction/tests/compaction.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
