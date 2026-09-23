# host 能力索引

## 概述

本页由包清单与 README 元数据生成；共 9 个包。功能配置、限制和使用方式以[所属文档](../../packages/host/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [host-directory-picker-auto](../../packages/host/directory-picker-auto/package.json) | 目录选择 seam 的自适应选择器：在启动时判定一次 web GUI 宿主的处境，并挂载匹配的原生或浏览后端。 [说明](../../packages/host/directory-picker-auto/README.zh.md) | [2 个测试文件](../../packages/host/directory-picker-auto/tests/loader-composition.spec.ts) |
| [host-directory-picker-browse](../../packages/host/directory-picker-browse/package.json) | 目录选择 seam 的应用内浏览后端：为 web GUI 宿主提供单层目录列举与子目录创建，也能服务于远程客户端。 [说明](../../packages/host/directory-picker-browse/README.zh.md) | [1 个测试文件](../../packages/host/directory-picker-browse/tests/service.spec.ts) |
| [host-directory-picker-native](../../packages/host/directory-picker-native/package.json) | 目录选择 seam 的原生 OS 选择器后端：为坐在 web GUI 宿主屏幕前的操作者每次打开一个平台选择器。 [说明](../../packages/host/directory-picker-native/README.zh.md) | [5 个测试文件](../../packages/host/directory-picker-native/tests/native-picker.spec.ts) |
| [host-directory-picker](../../packages/host/directory-picker/package.json) | 面向 web GUI 宿主的工作区目录选择 seam：原生与浏览后端所实现的服务约定、能力词汇与错误码。 [说明](../../packages/host/directory-picker/README.zh.md) | [1 个测试文件](../../packages/host/directory-picker/tests/seam.spec.ts) |
| [host-frontend-static](../../packages/host/frontend-static/package.json) | Web 壳的 SPA dist 服务器：占据 webserver 回退席位，以遍历拒绝与 SPA index 回退服务已构建的前端。 [说明](../../packages/host/frontend-static/README.zh.md) | [1 个测试文件](../../packages/host/frontend-static/tests/frontend-static.spec.ts) |
| [host-open-in-app](../../packages/host/open-in-app/package.json) | open-in-app 的主机半边：在 macOS、Windows、Linux 上把已安装的编辑器、Git GUI、终端与文件管理器解析为已验证的启动器，并以三条 webServer 路由提供目录、图标与启动端点。 [说明](../../packages/host/open-in-app/README.zh.md) | [4 个测试文件](../../packages/host/open-in-app/tests/host-routes.spec.ts) |
| [host-plugin-inventory](../../packages/host/plugin-inventory/package.json) | 当前 Cordis Loader 插件状态的只读投影，并附带每个 agent preset（智能体预设）的组合：面向 web GUI 宿主客户端的 pluginInventory 服务及其 pluginInventory/list Remote。 [说明](../../packages/host/plugin-inventory/README.zh.md) | [1 个测试文件](../../packages/host/plugin-inventory/tests/inventory.spec.ts) |
| [host-product-telemetry-otel](../../packages/host/product-telemetry-otel/package.json) | 配置显式产品使用事件、OTLP/HTTP 路由、批量发送与退出等待上限。 [说明](../../packages/host/product-telemetry-otel/README.zh.md) | [1 个测试文件](../../packages/host/product-telemetry-otel/tests/telemetry.spec.ts) |
| [host-webserver](../../packages/host/webserver/package.json) | web GUI 宿主的 HTTP 服务器：具名路由与 upgrade 注册、index 转换，以及服务 Web 壳 SPA dist 的唯一回退席位。 [说明](../../packages/host/webserver/README.zh.md) | [1 个测试文件](../../packages/host/webserver/tests/webserver.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
