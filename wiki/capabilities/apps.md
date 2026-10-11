# apps 能力索引

## 概述

本页由包清单与 README 元数据生成；共 4 个包。功能配置、限制和使用方式以[所属文档](../../docs/architecture.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [@deepseek-ai/dsh](../../apps/cli/package.json) | dsh CLI: profile launch, plugin management, and configuration inspection [说明](../../apps/cli/README.zh.md) | [14 个测试文件](../../apps/cli/tests/args.spec.ts) |
| [desktop-host](../../apps/desktop-host/package.json) | Private Node-mode host process for the Electron desktop application [说明](../../apps/desktop-host/package.json)；私有包 | [4 个测试文件](../../apps/desktop-host/tests/office-engine.spec.ts) |
| [desktop](../../apps/desktop/package.json) | Electron desktop shell for a bundled dsh runtime and external plugins [说明](../../apps/desktop/README.zh.md)；私有包 | [130 个测试文件](../../apps/desktop/tests/account-backend.spec.ts) |
| [web-frontend](../../apps/web/package.json) | Web application entry: vite build over the @deepseek-ai/dsh-client-web shell library; dist/ served by apps/cli's dsh web [说明](../../apps/web/package.json) | [3 个测试文件](../../apps/web/tests/assembled-remote.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
