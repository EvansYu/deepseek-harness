# Web、桌面与人机协作

## 概述

相同智能体能力通过网页、桌面、无界面调用及编程接口呈现；启用哪些功能由组合决定。

## 目录

- [对话工作台](#对话工作台)
- [文件和预览](#文件和预览)
- [安装与设置](#安装与设置)
- [程序化与实验入口](#程序化与实验入口)
- [验证和限制](#验证和限制)

## 对话工作台

Web 包含工作区和会话导航、流式对话、工具详情、工作分组、轨迹、模型选择、命令、引用建议、目标与计划显示。批准和提问走明确的人机交互服务。主会话输入框支持左右边缘拖动调整宽度，顶部边缘上下拖动调整草稿高度；高度在浏览器中记忆，双击顶部恢复自动增长，窄视口限制可见高度。实现与交互细节见 [ui-conversation](../../packages/client/ui-conversation/README.zh.md)。

能力入口：[client](../capabilities/client.md)、[api](../capabilities/api.md)、[interaction](../capabilities/interaction.md)。

## 文件和预览

客户端提供文件树、文档预览、侧栏浏览器、图片查看、工作区变更与差异预览、代码块操作及文档缩放。Office 转换在 Host 承载；具体格式支持查各功能包说明。

能力入口：[client](../capabilities/client.md)、[document](../capabilities/document.md)、[host](../capabilities/host.md)、[deliverables](../capabilities/deliverables.md)。

## 安装与设置

Profile、Bundle、插件管理、插件配置表单、凭据授权、权限预设、本地化、主题及快捷键共同构成应用配置体验。Desktop 的窗口、更新和资源包装由 apps/desktop 拥有。

能力入口：[boot](../capabilities/boot.md)、[bundle](../capabilities/bundle.md)、[settings](../capabilities/settings.md)、[credentials](../capabilities/credentials.md)、[client](../capabilities/client.md)、[host](../capabilities/host.md)、[apps](../capabilities/apps.md)。

## 程序化与实验入口

TypeScript 和 Python SDK 通过进程外协议驱动应用；ACP 为自动化集成服务。语音输入、浏览器 WebWorker 及 Agent Team 的可视化能力属于实验领域，不等于各 Profile 的默认功能。

能力入口：[sdk](../capabilities/sdk.md)、[acp](../capabilities/acp.md)、[experimental](../capabilities/experimental.md)。

## 验证和限制

先由相应能力页定位包内测试，再按[测试策略](../../docs/testing.md)选择行为、快照或真实 API 检查。本次知识库整理未运行这些产品流程；功能存在依据当前实现和所属说明，不代表运行验证。

## 开发备注

本页是源码导航与功能关系索引；精确字段、默认值和兼容性承诺由链接的所属文档维护。
