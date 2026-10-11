# util 能力索引

## 概述

本页由包清单与 README 元数据生成；共 17 个包。功能配置、限制和使用方式以[所属文档](../../packages/util/README.zh.md)为准。

## 目录

- [包与功能](#包与功能)
- [开发备注](#开发备注)

## 包与功能

| 包 | 功能与证据 | 验证入口 |
|---|---|---|
| [atomic-write](../../packages/util/atomic-write/package.json) | 原子文件替换与跨进程写锁，供绝不允许在磁盘上留下不完整、被符号链接劫持或权限过宽内容的包使用。 [说明](../../packages/util/atomic-write/README.zh.md) | [1 个测试文件](../../packages/util/atomic-write/tests/atomic-write.spec.ts) |
| [brand](../../packages/util/brand/package.json) | 供拥有易混淆领域值的包使用的名义字符串与数字类型及无状态构造函数。 [说明](../../packages/util/brand/README.zh.md) | [1 个测试文件](../../packages/util/brand/tests/brand.spec.ts) |
| [chunked-list](../../packages/util/chunked-list/package.json) | 用于 projection state 的不可变的仅追加列表，提供有界追加复制、按插入顺序迭代和 Zod 检查点校验。 [说明](../../packages/util/chunked-list/README.zh.md) | [1 个测试文件](../../packages/util/chunked-list/tests/chunked-list.spec.ts) |
| [util-code-language](../../packages/util/code-language/package.json) | Client 代码界面与 Host read 卡片共享的唯一「扩展名 → 语法高亮语言」表。 [说明](../../packages/util/code-language/README.zh.md) | [1 个测试文件](../../packages/util/code-language/tests/code-language.spec.ts) |
| [util-crypto](../../packages/util/crypto/package.json) | 面向替换仅安全上下文可用的 crypto.randomUUID 调用的维护者，说明跨运行时 UUID 生成。 [说明](../../packages/util/crypto/README.zh.md) | [1 个测试文件](../../packages/util/crypto/tests/uuid.spec.ts) |
| [deque](../../packages/util/deque/package.json) | 供 Host 和浏览器包使用的环形双端队列，提供摊销常数时间的队列操作、已移除条目的即时释放和有界空闲存储。 [说明](../../packages/util/deque/README.zh.md) | [1 个测试文件](../../packages/util/deque/tests/deque.spec.ts) |
| [home-paths](../../packages/util/home-paths/package.json) | DeepSeek Harness 主目录与共享 agent 配置根目录的共享解析，以及用户数据路径、波浪号展开与稳定监听路径。 [说明](../../packages/util/home-paths/README.zh.md) | [1 个测试文件](../../packages/util/home-paths/tests/home-paths.spec.ts) |
| [http-proxy](../../packages/util/http-proxy/package.json) | Harness 的出站 HTTP 代理支持：从启动环境解析出的一份策略，如何覆盖到 Node fetch 本来会直连的每一个请求。 [说明](../../packages/util/http-proxy/README.zh.md) | [3 个测试文件](../../packages/util/http-proxy/tests/install.spec.ts) |
| [launch-environment](../../packages/util/launch-environment/package.json) | 本次运行环境的不可变快照，记住每个值来自哪一层；供必须以不信任压平 process.env 的方式解析面向用户值的包使用。 [说明](../../packages/util/launch-environment/README.zh.md) | [1 个测试文件](../../packages/util/launch-environment/tests/launch-environment.spec.ts) |
| [lazy-require](../../packages/util/lazy-require/package.json) | 按调用方解析并惰性加载 CommonJS 兼容的 Host 依赖，使应用启动时不初始化尚未使用的依赖。 [说明](../../packages/util/lazy-require/README.zh.md) | [1 个测试文件](../../packages/util/lazy-require/tests/index.spec.ts) |
| [native-command](../../packages/util/native-command/package.json) | 宿主原生命令与路径打开工具，提供无 shell 执行、取消、桌面探测与 WSL 路径交接。 [说明](../../packages/util/native-command/README.zh.md) | [6 个测试文件](../../packages/util/native-command/tests/file-applications-linux-native.spec.ts) |
| [output-retention](../../packages/util/output-retention/package.json) | 为必须限制返回上下文量的工具提供有界的面向模型输出：项与文本 retainer，以及标准化的省略页脚。 [说明](../../packages/util/output-retention/README.zh.md) | [1 个测试文件](../../packages/util/output-retention/tests/output-retention.spec.ts) |
| [package-manifest](../../packages/util/package-manifest/package.json) | 包身份、运行时要求和 DSH 插件元数据的共享 TypeScript 声明。 [说明](../../packages/util/package-manifest/README.zh.md) | 未发现包内 spec/test 文件；查阅所属说明 |
| [util-time](../../packages/util/time/package.json) | 面向在协议边界接收调用方所报时区的维护者，说明 IANA 时区校验与规范化。 [说明](../../packages/util/time/README.zh.md) | [1 个测试文件](../../packages/util/time/tests/time.spec.ts) |
| [timeout](../../packages/util/timeout/package.json) | 共享超时运算、截止时间融合与超时和取消分类，供需要限制调用方超时提示、启动 deadline 并在之后区分二者的能力使用。 [说明](../../packages/util/timeout/README.zh.md) | [1 个测试文件](../../packages/util/timeout/tests/timeout.spec.ts) |
| [util-values](../../packages/util/values/package.json) | 供运行时包使用的无损 JSON 校验、分离式快照、深度冻结、结构相等与穷尽联合类型辅助函数。 [说明](../../packages/util/values/README.zh.md) | [2 个测试文件](../../packages/util/values/tests/partial-json.spec.ts) |
| [util-workspace-path](../../packages/util/workspace-path/package.json) | 浏览器安全的 Workspace 路径辅助函数：拼接相对路径、缩写 POSIX 主目录并生成显示标题。 [说明](../../packages/util/workspace-path/README.zh.md) | [3 个测试文件](../../packages/util/workspace-path/tests/file-address.spec.ts) |

## 开发备注

此页不手工编辑。依赖的方向和类别、源码与测试路径见 [graph.json](../data/graph.json)；`dependencies`、`peerDependencies` 与 `devDependencies` 不等同于运行时调用。
