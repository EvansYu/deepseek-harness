# 工程、诊断与验证

## 概述

维护功能需要同时关注类型、持久格式、生命周期、模型可见输出与产品交互。

## 目录

- [类型与扩展](#类型与扩展)
- [验证层次](#验证层次)
- [发布和边界](#发布和边界)
- [验证和限制](#验证和限制)

## 类型与扩展

Typert 生成类型图并支持 RPC；Cordis 类型化事件和可释放注册组织插件。运行时诊断使用包拥有的不变量发现独立观察之间的偏差。

能力入口：[typert](../capabilities/typert.md)、[runtime-diagnostics](../capabilities/runtime-diagnostics.md)、[core](../capabilities/core.md)。

## 验证层次

单元测试覆盖局部行为，真实 API e2e 验证提供方，录制会话快照约束模型和用户输出，SDK expected 输出约束集成。性能基准、文档检查与发布产物检查是其他独立证据，不能用单一单元测试替代。

能力入口：[test-support](../capabilities/test-support.md)、[sdk](../capabilities/sdk.md)。

## 发布和边界

源码程序与构建产物程序分开验证；Node 应用统一从 dsh Profile 启动。实验包的公开发布不意味着稳定承诺。平台支持与打包要求分别由应用、原生模块和所属提供方说明。

能力入口：[apps](../capabilities/apps.md)、[boot](../capabilities/boot.md)、[experimental](../capabilities/experimental.md)、[util](../capabilities/util.md)。

## 验证和限制

先由相应能力页定位包内测试，再按[测试策略](../../docs/testing.md)选择行为、快照或真实 API 检查。本次知识库整理未运行这些产品流程；功能存在依据当前实现和所属说明，不代表运行验证。

## 开发备注

本页是源码导航与功能关系索引；精确字段、默认值和兼容性承诺由链接的所属文档维护。
