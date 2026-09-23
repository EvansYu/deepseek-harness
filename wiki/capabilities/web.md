# web 能力索引

## 概述

本页由包清单与 README 元数据生成；共 6 个包。功能配置、限制和使用方式以[所属文档](../../packages/web/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [tool-web](../../packages/web/tool-web/package.json) | 构建于 ctx.web 之上的面向模型 web 工具（web_search、web_fetch）：部署方如何启用、配置并观察模型看到的搜索与抓取工具。 [说明](../../packages/web/tool-web/README.zh.md) | [4 个测试文件](../../packages/web/tool-web/tests/integration.spec.ts) |
| [web-fetch-http](../../packages/web/web-fetch-http/package.json) | ctx.web 的匿名公共 HTTP(S) 抓取后端：部署方如何挂载有界、安全的 URL 抓取，含同源重定向与仅文本解码。 [说明](../../packages/web/web-fetch-http/README.zh.md) | [2 个测试文件](../../packages/web/web-fetch-http/tests/fetch-http.spec.ts) |
| [web-search-deepseek](../../packages/web/web-search-deepseek/package.json) | ctx.web 的 DeepSeek 搜索提供方：部署方如何通过 Anthropic 兼容 Messages API 挂载 DeepSeek 原生 web 搜索，并逐次解析凭据。 [说明](../../packages/web/web-search-deepseek/README.zh.md) | [4 个测试文件](../../packages/web/web-search-deepseek/tests/deepseek.spec.ts) |
| [web-search-exa](../../packages/web/web-search-exa/package.json) | ctx.web 的 Exa 搜索提供方：部署方如何挂载厂商原生 web 搜索，获得可移植 snippet 与发布日期。 [说明](../../packages/web/web-search-exa/README.zh.md) | [2 个测试文件](../../packages/web/web-search-exa/tests/egress.spec.ts) |
| [web-search-perplexity](../../packages/web/web-search-perplexity/package.json) | ctx.web 的 Perplexity 搜索提供方：部署方如何挂载 OpenAI 兼容的 Perplexity 搜索，获得生成答案与引用。 [说明](../../packages/web/web-search-perplexity/README.zh.md) | [2 个测试文件](../../packages/web/web-search-perplexity/tests/egress.spec.ts) |
| [web](../../packages/web/web/package.json) | web 访问服务（ctx.web）：部署方与插件作者如何通过可互换的提供方搜索 web 与抓取 URL，以及统一的选择策略与错误词汇。 [说明](../../packages/web/web/README.zh.md) | [1 个测试文件](../../packages/web/web/tests/web.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
