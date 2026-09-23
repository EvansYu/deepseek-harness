# jobs 能力索引

## 概述

本页由包清单与 README 元数据生成；共 3 个包。功能配置、限制和使用方式以[所属文档](../../packages/jobs/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [jobs-local](../../packages/jobs/jobs-local/package.json) | 进程本地后台任务注册表，供组合、容量评估或排查进程内任务的用户与维护者阅读：按所有者的准入、生命周期与销毁。 [说明](../../packages/jobs/jobs-local/README.zh.md) | [5 个测试文件](../../packages/jobs/jobs-local/tests/events.spec.ts) |
| [jobs](../../packages/jobs/jobs/package.json) | 后台任务注册表约定，供组合、实现或排查后台工作的用户与维护者阅读：id、归属、生命周期、输出环与事件流。 [说明](../../packages/jobs/jobs/README.zh.md) | [3 个测试文件](../../packages/jobs/jobs/tests/archive-admission.spec.ts) |
| [tool-jobs](../../packages/jobs/tool-jobs/package.json) | 面向模型的后台任务控制，供选择、配置或排查 job_output、job_list、job_kill 与完成通知的用户与维护者阅读。 [说明](../../packages/jobs/tool-jobs/README.zh.md) | [1 个测试文件](../../packages/jobs/tool-jobs/tests/tool-jobs.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
