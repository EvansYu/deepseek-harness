# 一次请求的执行与扩展

## 概述

本页解释从用户输入到工具结果的主要关系。类型和取消语义以[核心子系统](../../docs/subsystems/core.md)、[生命周期](../../docs/agent-lifecycle.md)和[工具执行管线](../../docs/tool-execution-pipeline.md)为准。

## 目录

- [请求链路](#请求链路)
- [扩展点与所有权](#扩展点与所有权)
- [关键约束](#关键约束)

## 请求链路

1. UI、SDK 或其他入口提交输入，Agent 的 inbox 管理待处理工作。
2. AgentLoop 开启 turn，认领输入，组装系统提示词与工具 schema。
3. `agent/pre-step` 可以重写或拒绝输入；`agent/request` 与模型适配器准备本次调用。
4. 进入请求的输入和请求信息写入 Session，再从日志派生模型历史。
5. 模型流产生临时显示帧，并在完成或失败结算时记录消息或尝试。
6. 工具管线执行模型请求的能力，结果进入日志；仍需模型处理时继续下一 step。
7. 工作结束时关闭 turn；目标续行和其他插件可以安排后续工作。

## 扩展点与所有权

| 需求 | 拥有者 | 需要联查 |
|---|---|---|
| 更换模型 | [llm](../capabilities/llm.md) | 请求能力、消息和流协议、重试与计量 |
| 增加工具 | [core/tools](../../packages/core/tools/README.md) | schema、批准、超时、持久结果、UI 呈现 |
| 注入指令 | [context](../capabilities/context.md)、[skill](../capabilities/skill.md) | 注入时机、记录与压缩 |
| 并行或外包任务 | [subagent](../capabilities/subagent.md)、[jobs](../capabilities/jobs.md) | 归属、取消、输出、续行 |
| 改变停止条件 | [goal](../capabilities/goal.md)、[guard](../capabilities/guard.md) | 目标状态与 turn 生命周期 |

## 关键约束

模型可见内容必须能够从 Session 日志重建。临时流帧并非独立的持久历史来源。瀑布事件监听器通过 `next()` 委托；未委托会截断后续处理。插件注册需要可释放的 effect；生命周期和并发修改须遵守[防御模式](../../docs/defensive-patterns.md)。

CodeGraph 的下一步定位目标是 `packages/core/agent-loop/src/index.ts`、`packages/core/agent/src/types.ts` 和工具消费者的 `src/index.ts`；源码与测试列表可由[图数据](../data/graph.json)按包检索。

## 开发备注

本页是源码导航与功能关系索引；精确字段、默认值和兼容性承诺由链接的所属文档维护。
