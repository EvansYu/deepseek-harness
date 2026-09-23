# lsp 能力索引

## 概述

本页由包清单与 README 元数据生成；共 3 个包。功能配置、限制和使用方式以[所属文档](../../packages/lsp/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [lsp-stdio](../../packages/lsp/lsp-stdio/package.json) | ctx.lsp 的 stdio 语言服务器提供方：配置好的服务器命令、扩展名映射与有边界的临时打开查询，供组合本地代码导航的用户与维护者阅读。 [说明](../../packages/lsp/lsp-stdio/README.zh.md) | [7 个测试文件](../../packages/lsp/lsp-stdio/tests/connection.spec.ts) |
| [lsp](../../packages/lsp/lsp/package.json) | LSP 能力 seam（ctx.lsp）：按文件扩展名选择提供方、四种规范化的代码导航操作与结构化错误，供组合或扩展代码导航的用户与维护者阅读。 [说明](../../packages/lsp/lsp/README.zh.md) | [1 个测试文件](../../packages/lsp/lsp/tests/lsp.spec.ts) |
| [tool-lsp](../../packages/lsp/tool-lsp/package.json) | 面向模型的 lsp 工具：四种只读代码导航操作、从 1 开始的 UTF-16 光标坐标、有边界的结果与悬停文本，供组合模型代码导航的用户与维护者阅读。 [说明](../../packages/lsp/tool-lsp/README.zh.md) | [4 个测试文件](../../packages/lsp/tool-lsp/tests/integration.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
