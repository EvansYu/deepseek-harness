# 子智能体、工作流与外部集成

## 概述

复杂任务可拆分给子智能体，借助工作流编排，或由经过验证的外部事件触发。

## 目录

- [委派和续行](#委派和续行)
- [工作流和团队](#工作流和团队)
- [外部接入](#外部接入)
- [验证和限制](#验证和限制)

## 委派和续行

子智能体提供方涵盖进程内新建与 fork，以及 ACP、Codex、Claude Code 和 DSH SDK 集成；不同提供方的能力不能互相假定。工具层提供一次性或可续行委派，以及后续控制。

能力入口：[subagent](../capabilities/subagent.md)、[jobs](../capabilities/jobs.md)。

## 工作流和团队

workflow 提供编排服务，PTC 引擎执行工作流，workflow 与 Ralph 工具作为消费者。实验 Agent Teams 在可续行子智能体上增加成员名册、任务 DAG、消息邮箱及 Web 面板。

能力入口：[workflow](../capabilities/workflow.md)、[experimental](../capabilities/experimental.md)。

## 外部接入

MCP 将外部服务器工具引入本地工具系统；hook 桥适配 Claude Code/Codex 协议；webhook 经认证适配器和可信规则创建普通工作区会话；extensions 提供运行时插件检查与动态挂载能力。

能力入口：[mcp](../capabilities/mcp.md)、[hooks](../capabilities/hooks.md)、[webhook](../capabilities/webhook.md)、[extensions](../capabilities/extensions.md)。

## 验证和限制

先由相应能力页定位包内测试，再按[测试策略](../../docs/testing.md)选择行为、快照或真实 API 检查。本次知识库整理未运行这些产品流程；功能存在依据当前实现和所属说明，不代表运行验证。

## 开发备注

本页是源码导航与功能关系索引；精确字段、默认值和兼容性承诺由链接的所属文档维护。
