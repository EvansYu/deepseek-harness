# 编程、执行与信息获取

## 概述

智能体可在配置允许的执行环境中读写文件、运行命令、查询代码、获取网页及操作浏览器。

## 目录

- [文件与代码](#文件与代码)
- [命令与后台任务](#命令与后台任务)
- [本地和远端权限](#本地和远端权限)
- [网页与桌面](#网页与桌面)
- [验证和限制](#验证和限制)

## 文件与代码

文件服务及工具支持读取、写入与编辑，配套发现工具定位文件；观察策略检查已观察状态。LSP 服务规范化语言查询，并通过 stdio 提供方连接语言服务器。工作区变更和显式文件交付构成 deliverables。

能力入口：[fs](../capabilities/fs.md)、[lsp](../capabilities/lsp.md)、[deliverables](../capabilities/deliverables.md)。

## 命令与后台任务

shell 支持命令执行；terminal 提供持久 PTY；subprocess 管理进程及进程树。jobs 汇集后台命令、终端与委派任务，提供列表、读取和停止入口。PTC 将程序调用与工具绑定组合执行。

能力入口：[shell](../capabilities/shell.md)、[terminal](../capabilities/terminal.md)、[subprocess](../capabilities/subprocess.md)、[jobs](../capabilities/jobs.md)、[ptc-runtime](../capabilities/ptc-runtime.md)。

## 本地和远端权限

SSH 提供远端连接以及匹配的文件系统、子进程和 sandbox 实现；沙箱策略与批准共同限定执行。能否隔离及隔离方式取决于平台、Profile 和提供方，不能仅凭工具存在推定已受保护。

能力入口：[ssh](../capabilities/ssh.md)、[sandbox](../capabilities/sandbox.md)、[interaction](../capabilities/interaction.md)。

## 网页与桌面

web 组合搜索与 HTTP 抓取；浏览器和计算机服务允许指定提供方。Playwright MCP、Chrome DevTools MCP、Stagehand 与 Cua Driver 相关实现属于实验包，需要检查安装与配置。

能力入口：[web](../capabilities/web.md)、[browser-use](../capabilities/browser-use.md)、[computer-use](../capabilities/computer-use.md)、[experimental](../capabilities/experimental.md)。

## 验证和限制

先由相应能力页定位包内测试，再按[测试策略](../../docs/testing.md)选择行为、快照或真实 API 检查。本次知识库整理未运行这些产品流程；功能存在依据当前实现和所属说明，不代表运行验证。

## 开发备注

本页是源码导航与功能关系索引；精确字段、默认值和兼容性承诺由链接的所属文档维护。
