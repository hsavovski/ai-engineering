# Growing project roadmap

One TypeScript agent grows across the book, so each practice step builds on the last one instead of starting over. The chapter gives the brief, steps and acceptance check. **You write the code.**

Steps are listed in build order. You can still read chapters in any order, but a project step expects the steps above it to be done. Standalone experiments (in `experiments/`) are not listed here.

| # | Chapter | Adds to `project/` | Builds on |
|---|---|---|---|
| 1 | [3.2 Build the agent loop from scratch](../book/part-03-agents/3.2-agent-loop.md) | TS CLI agent: `read_file` and `run_shell` tools, loop until no tool calls, step log; runs on local Qwen and a paid model | experiments from 2.1, 2.6 |
| 2 | [3.3 Tool design](../book/part-03-agents/3.3-tool-design.md) | `edit_file`, `list_files`, `search`; one tool redesigned from transcripts | 1 |
| 3 | [3.4 Context engineering](../book/part-03-agents/3.4-context-engineering.md) | Token tracking per turn, compaction above a threshold | 1 |
| 4 | [3.5 Memory](../book/part-03-agents/3.5-memory.md) | File-based memory tool (`memory/`) across sessions | 3 |
| 5 | [3.6 MCP: using servers](../book/part-03-agents/3.6-mcp-using.md) | MCP client: tools from MCP servers next to native tools | 2 |
| 6 | [3.7 Build an MCP server](../book/part-03-agents/3.7-mcp-building.md) | An MCP server exposing this study repo (chapters, notes, progress log) | 5 |
| 7 | [3.8 AGENTS.md and agent skills](../book/part-03-agents/3.8-agents-md-and-skills.md) | Reads `AGENTS.md`; discovers skills in `skills/` with progressive disclosure | 3 |
| 8 | [3.9 Advanced tool use](../book/part-03-agents/3.9-advanced-tool-use.md) | `search_tools` meta-tool: definitions loaded on demand | 5 |
| 9 | [3.10 Multi-agent patterns](../book/part-03-agents/3.10-multi-agent.md) | `delegate` tool: sub-agent with its own context | 1 |
| 10 | [3.11 TS agent SDKs](../book/part-03-agents/3.11-agent-sdks.md) | A second entry point rebuilt with one SDK (the hand-written loop stays) | 2 |
| 11 | [4.1 Error analysis first](../book/part-04-evals-observability/4.1-error-analysis.md) | `evals/error-analysis.md`: failure taxonomy from 20 runs | 2 |
| 12 | [4.2 Building an eval set](../book/part-04-evals-observability/4.2-eval-sets.md) | `evals/`: 20–30 cases | 11 |
| 13 | [4.3 Code-based checks](../book/part-04-evals-observability/4.3-code-based-checks.md) | `npm run eval`: runner, code graders, pass rate per model | 12 |
| 14 | [4.4 LLM-as-judge](../book/part-04-evals-observability/4.4-llm-as-judge.md) | A judge validated against your own labels | 13 |
| 15 | [4.5 Evaluating agents](../book/part-04-evals-observability/4.5-evaluating-agents.md) | Multiple trials, pass@k / pass^k | 13 |
| 16 | [4.6 Regression evals in CI](../book/part-04-evals-observability/4.6-regression-evals-ci.md) | GitHub Actions running a regression subset with a cost cap | 13 |
| 17 | [4.7 Tracing](../book/part-04-evals-observability/4.7-tracing.md) | OpenTelemetry spans (GenAI conventions) sent to Langfuse | 1 |
| 18 | [4.8 Cost and latency tracking](../book/part-04-evals-observability/4.8-cost-latency.md) | Cost per run, `--budget` flag | 17 |
| 19 | [5.4 Build a mini coding harness](../book/part-05-harnesses/5.4-mini-harness.md) | Exact-match edit tool, permission prompts, streaming output | 2, 3, 7 |
| 20 | [5.6 Long-running agents](../book/part-05-harnesses/5.6-long-running-agents.md) | Feature list + progress log, fresh context per feature | 19 |
| 21 | [7.1 Spec-driven development](../book/part-07-ai-native-development/7.1-spec-driven-development.md) | Next feature built from a spec with Claude Code | 19 |
| 22 | [7.2 TDD with agents](../book/part-07-ai-native-development/7.2-tdd-with-agents.md) | A feature built strictly test-first | 19 |
| 23 | [7.3 Automated code review](../book/part-07-ai-native-development/7.3-automated-review.md) | AI review vs your own on one change | 22 |
| 24 | [7.5 Automating the whole lifecycle](../book/part-07-ai-native-development/7.5-automating-lifecycle.md) | One feature through the full pipeline, timed | 21, 16 |
| 25 | [8.1 Prompt injection](../book/part-08-production/8.1-prompt-injection.md) | An injection attack on your own agent, documented | 19 |
| 26 | [8.2 OWASP Top 10](../book/part-08-production/8.2-owasp.md) | `SECURITY.md` threat model | 25 |
| 27 | [8.3 Sandboxing](../book/part-08-production/8.3-sandboxing.md) | Shell tool inside a sandbox, no network | 25 |
| 28 | [8.4 Guardrails](../book/part-08-production/8.4-guardrails.md) | Input and output guardrails, measured | 25 |
| 29 | [8.5 Durable agents](../book/part-08-production/8.5-durable-agents.md) | Resumable state, retry with backoff | 1 |
| 30 | [9.4 Cost-effective routing rules](../book/part-09-model-landscape-cost/9.4-routing-rules.md) | Local by default, escalate to paid, through the 9.2 gateway | 13, 18 |

Experiments that plug into the project: 8.6 (streaming web UI), 10.4 (serve your fine-tune and call it from the project), 11.4 (browser via Playwright MCP).
