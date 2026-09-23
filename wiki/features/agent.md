# 智能体对话与任务推进

## 概述

从模型对话推进到工具执行、长任务管理与可恢复历史。

## 目录

- [模型与上下文](#模型与上下文)
- [会话与历史](#会话与历史)
- [计划和目标](#计划和目标)
- [验证和限制](#验证和限制)

## 模型与上下文

LLM 服务统一消息与流，DeepSeek 和 pi-ai 适配器承接模型请求；重试与 token 计量是独立包。上下文能力包括工作区指令、时间和会话引用；skill 提供目录发现与按需载入。压缩由独立服务及提供方处理。

能力入口：[llm](../capabilities/llm.md)、[context](../capabilities/context.md)、[skill](../capabilities/skill.md)、[compaction](../capabilities/compaction.md)、[core](../capabilities/core.md)。

## 会话与历史

会话支持持久化、恢复、fork、标题和投影；查询能力提供历史搜索、关系追踪、精确读取及导出。事件回放用于重建模型与 UI 所需信息。

能力入口：[session](../capabilities/session.md)、[session-query](../capabilities/session-query.md)、[attachment](../capabilities/attachment.md)。

## 计划和目标

todo 记录任务列表；plan 管理协作计划状态及退出审核；goal 管理同一会话的持久目标，可选 driver 负责自动续行；schedule 提供会话内定时跟进。它们是不同机制，目标记录本身不负责调度。

能力入口：[todo](../capabilities/todo.md)、[plan](../capabilities/plan.md)、[goal](../capabilities/goal.md)、[schedule](../capabilities/schedule.md)、[guard](../capabilities/guard.md)。

## 验证和限制

先由相应能力页定位包内测试，再按[测试策略](../../docs/testing.md)选择行为、快照或真实 API 检查。本次知识库整理未运行这些产品流程；功能存在依据当前实现和所属说明，不代表运行验证。

## 开发备注

本页是源码导航与功能关系索引；精确字段、默认值和兼容性承诺由链接的所属文档维护。
