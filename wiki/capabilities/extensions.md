# extensions 能力索引

## 概述

本页由包清单与 README 元数据生成；共 4 个包。功能配置、限制和使用方式以[所属文档](../../packages/extensions/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [cordis-client-runner](../../packages/extensions/cordis-client-runner/package.json) | 动态 Cordis 包的浏览器半说明，供选择、组合或排查页面如何应答运行请求并装载浏览器半代码的用户与维护者阅读。 [说明](../../packages/extensions/cordis-client-runner/README.zh.md) | [7 个测试文件](../../packages/extensions/cordis-client-runner/tests/api-catalog.client.spec.ts) |
| [cordis-host-runner](../../packages/extensions/cordis-host-runner/package.json) | 动态 Cordis 包的 host 半说明，供选择、组合或排查注册表、沙箱与运行往返的 agent（智能体）与维护者阅读。 [说明](../../packages/extensions/cordis-host-runner/README.zh.md) | [6 个测试文件](../../packages/extensions/cordis-host-runner/tests/composition.spec.ts) |
| [tool-cordis](../../packages/extensions/tool-cordis/package.json) | 为开发和配置已安装 Harness 插件的 agent 提供只读运行时 API 查询。 [说明](../../packages/extensions/tool-cordis/README.zh.md) | [3 个测试文件](../../packages/extensions/tool-cordis/tests/config.spec.ts) |
| [client-ui-cordis](../../packages/extensions/ui-cordis/package.json) | 历史 Cordis 卡片及进程内 runner 定义的控件。 [说明](../../packages/extensions/ui-cordis/README.zh.md) | [4 个测试文件](../../packages/extensions/ui-cordis/tests/card-model.client.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
