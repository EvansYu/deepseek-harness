# fs 能力索引

## 概述

本页由包清单与 README 元数据生成；共 7 个包。功能配置、限制和使用方式以[所属文档](../../packages/fs/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [fs-local](../../packages/fs/fs-local/package.json) | `ctx.fs` 的宿主文件系统后端：面向选择或排查本地文件访问的部署方与维护者。 [说明](../../packages/fs/fs-local/README.zh.md) | [4 个测试文件](../../packages/fs/fs-local/tests/filesystem.spec.ts) |
| [fs-observation-policy](../../packages/fs/fs-observation-policy/package.json) | 编辑前读取的文件系统策略插件：面向选择或排查受防护写入/编辑行为的部署方与维护者。 [说明](../../packages/fs/fs-observation-policy/README.zh.md) | [1 个测试文件](../../packages/fs/fs-observation-policy/tests/policy.spec.ts) |
| [fs-sandbox](../../packages/fs/fs-sandbox/package.json) | 强制沙箱的 `ctx.fs` 后端：面向把模型文件变更限制在会话工作区内的部署方与维护者。 [说明](../../packages/fs/fs-sandbox/README.zh.md) | [2 个测试文件](../../packages/fs/fs-sandbox/tests/containment.spec.ts) |
| [fs](../../packages/fs/fs/package.json) | `ctx.fs` 文件系统服务约定：面向选择或挂载文件系统后端的部署方，以及实现后端的开发者。 [说明](../../packages/fs/fs/README.zh.md) | [2 个测试文件](../../packages/fs/fs/tests/invariant.spec.ts) |
| [tool-fs-search](../../packages/fs/tool-fs-search/package.json) | 面向模型的 glob 与 grep 发现工具：供组合或排查 agent（智能体）工作区搜索的用户与维护者使用。 [说明](../../packages/fs/tool-fs-search/README.zh.md) | [6 个测试文件](../../packages/fs/tool-fs-search/tests/integration.spec.ts) |
| [tool-fs](../../packages/fs/tool-fs/package.json) | 面向模型的 read、read_image、write 与 edit 工具：供组合或排查 agent 文件系统访问的用户与维护者使用。 [说明](../../packages/fs/tool-fs/README.zh.md) | [6 个测试文件](../../packages/fs/tool-fs/tests/diff.spec.ts) |
| [tool-str-replace-editor](../../packages/fs/tool-str-replace-editor/package.json) | 基于 `ctx.fs` 的独立 str_replace_editor 工具：供为 agent（智能体）组合 Claude Code 风格文件编辑能力的用户与维护者使用。 [说明](../../packages/fs/tool-str-replace-editor/README.zh.md) | [1 个测试文件](../../packages/fs/tool-str-replace-editor/tests/tools.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
