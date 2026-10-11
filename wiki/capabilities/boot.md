# boot 能力索引

## 概述

本页由包清单与 README 元数据生成；共 5 个包。功能配置、限制和使用方式以[所属文档](../../packages/boot/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [app-boot](../../packages/boot/app-boot/package.json) | dsh profile 与临时 Python SDK 运行时的共享 Loader 启动支持：环境层、patch、诊断与配置预览。 [说明](../../packages/boot/app-boot/README.zh.md) | [20 个测试文件](../../packages/boot/app-boot/tests/app-boot.spec.ts) |
| [cmdline](../../packages/boot/cmdline/package.json) | dsh app bin 的应用自有命令行：应用从启动器剩余参数中解析自己的 flag、--help 与退出行为。 [说明](../../packages/boot/cmdline/README.zh.md) | [1 个测试文件](../../packages/boot/cmdline/tests/cmdline.spec.ts) |
| [config-editor](../../packages/boot/config-editor/package.json) | 保存当前 profile 配置，并通过 Loader 应用。 [说明](../../packages/boot/config-editor/README.zh.md) | 未发现包内 spec/test 文件；查阅所属说明 |
| [hmr](../../packages/boot/hmr/package.json) | 通过统一协调队列热重载插件代码和 profile 配置。 [说明](../../packages/boot/hmr/README.zh.md) | [8 个测试文件](../../packages/boot/hmr/tests/coordination.spec.ts) |
| [plugin-manager](../../packages/boot/plugin-manager/package.json) | 通过 Web 侧边栏或 agent 启停 profile 插件，并安装、删除或选择组合包。 [说明](../../packages/boot/plugin-manager/README.zh.md) | [12 个测试文件](../../packages/boot/plugin-manager/tests/build-approval.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
