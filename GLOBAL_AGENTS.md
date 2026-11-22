# DeepSeek Harness agent workflows

Follow the repository and subtree instructions in [AGENTS.md](AGENTS.md). See the [README](README.md) for setup and [development guide](docs/development.md) for build and test commands.

- Use `sdd-riper-one-light` for medium-sized and larger coding tasks when the skill is available. Record acceptance criteria, check the implementation against them, and follow the repository's validation rules.
- Use the CodeMap in `mydocs/codemap/` to locate application entry points and package owners. Use CodeGraph to inspect indexed symbols and call paths.
- Use the [Mermaid rules](mydocs/knowledge/mermaid-rules.md) when editing diagrams. Run `pnpm run verify-mermaid` to check syntax.
- For general coding guidance, see the [Karpathy guidelines](mydocs/knowledge/karpathy-guidelines-en.md) and the repository's [DSH Core Guidelines](docs/core-guidelines/README.md).
