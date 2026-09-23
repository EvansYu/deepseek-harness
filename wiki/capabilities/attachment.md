# attachment 能力索引

## 概述

本页由包清单与 README 元数据生成；共 2 个包。功能配置、限制和使用方式以[所属文档](../../packages/attachment/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [attachment-local](../../packages/attachment/attachment-local/package.json) | DSH_HOME 下附加图片的本地存储，供用户与维护者选择或排查图片附件的存放位置。 [说明](../../packages/attachment/attachment-local/README.zh.md) | [10 个测试文件](../../packages/attachment/attachment-local/tests/encoding.spec.ts) |
| [attachment](../../packages/attachment/attachment/package.json) | 持久图片与文件附件，供用户与维护者在提示词与命令中附加、复用或排查上传内容。 [说明](../../packages/attachment/attachment/README.zh.md) | [3 个测试文件](../../packages/attachment/attachment/tests/admission.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
