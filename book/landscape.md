# Landscape

Models, prices, tools and standards: the facts that go stale fastest. Chapters link here instead of hard-coding them.

**Last refreshed:** 2026-11-08

Prices are USD per 1M tokens (MTok), standard tier, read from each provider's own pricing page on the refresh date. Anything that couldn't be confirmed on a primary source is left out. Check the source before relying on a number: prices change often, and several below are promotional.

## Frontier models

### Anthropic

| Model | API ID | Context | Input | Output | Source |
|---|---|---|---|---|---|
| Claude Fable 5.1 | `claude-fable-5-1` | 1M | $10 | $50 | [models](https://platform.claude.com/docs/en/about-claude/models/overview), [pricing](https://platform.claude.com/docs/en/about-claude/pricing#model-pricing) |
| Claude Opus 5.5 | `claude-opus-5-5` | 1M | $4 | $20 | same |
| Claude Sonnet 5.5 | `claude-sonnet-5-5` | 1M | $2 | $10 | same |
| Claude Haiku 5.5 | `claude-haiku-5-5` | 1M | $0.10 (prompt ≤100k) · $0.50 (>100k) | $0.50 · $2.50 | same, [long context](https://platform.claude.com/docs/en/about-claude/pricing#long-context-pricing) |

- Max output is 128K for all four ([models](https://platform.claude.com/docs/en/about-claude/models/overview)).
- [Prompt caching](https://platform.claude.com/docs/en/about-claude/pricing#prompt-caching): 5-minute writes cost 1.25× input, 1-hour writes 2×. Cache reads cost 0.025× input on Fable 5.1, 0.05× on Opus 5.5 and Sonnet 5.5, and 0.1× on other models.
- [Batch API](https://platform.claude.com/docs/en/about-claude/pricing#batch-processing): 50% off input and output.

### OpenAI

| Model | API ID | Context | Input | Cached input | Output | Source |
|---|---|---|---|---|---|---|
| GPT-6 Astra (flagship) | `gpt-6-astra` | 1.05M | $10 | $1.00 | $50 | [models](https://developers.openai.com/api/docs/models), [pricing](https://developers.openai.com/api/docs/pricing) |
| GPT-6.1 Sol | `gpt-6.1-sol` | 1.05M | $2 | $0.10 | $10 | same |
| GPT-6.1 Terra | `gpt-6.1-terra` | 1.05M | $1.00 | $0.05 | $5.00 | same |
| GPT-6 Luna (small) | `gpt-6-luna` | 1.05M | $0.10 | $0.01 | $0.50 | same |

- These are short-context prices (input ≤272K tokens). Longer prompts cost more, e.g. GPT-6 Astra is $20 / $75 ([pricing](https://developers.openai.com/api/docs/pricing)).
- The only Codex model on the pricing page, `gpt-5.3-codex`, is marked deprecated on [its model page](https://developers.openai.com/api/docs/models/gpt-5.3-codex). No current Codex-specific API model was listed.

### Google

| Model | API ID | Context | Input | Output | Source |
|---|---|---|---|---|---|
| Gemini 4 Argon (flagship) | `gemini-4-argon` | 1M | $2.00 until 2026-11-30, then $4.00 | $10.00, then $20.00 | [models](https://aistudio.google.com/docs/models), [pricing](https://aistudio.google.com/docs/pricing) |
| Gemini 3.8 Flash | `gemini-3.8-flash` | not stated | $0.75 until 2026-12-31, then $1.50 | $3.75, then $7.50 | same |
| Gemini 3.5 Flash-Lite | `gemini-3.5-flash-lite` | not stated | $0.30 | $2.50 | same |
| Gemini 3.1 Flash-Lite | `gemini-3.1-flash-lite` | not stated | $0.25 (text/image/video) | $1.50 | same |

- Output prices include thinking tokens. The Gemini docs moved from `ai.google.dev` to `aistudio.google.com`.

### xAI

| Model | API ID | Context | Input | Cached input | Output | Source |
|---|---|---|---|---|---|---|
| Grok 4.7 (flagship) | `grok-4.7` | 500K | $2.00 | $0.50 | $6.00 | [models & pricing](https://docs.x.ai/docs/models) |
| Grok 4.3 | `grok-4.3` | 1M | $1.25 | $0.20 | $2.50 | same |
| Grok Build 0.1 | `grok-build-0.1` | 256K | $1.00 | $0.20 | $2.00 | same |

- These prices apply under 200K prompt tokens. At 200K and above, every token in the request costs double.

## Other labs, including open-weight

Whether a model is open-weight is only stated here when its source page says so.

### DeepSeek

| Model | API ID | Context | Input (cache miss) | Input (cache hit) | Output | Source |
|---|---|---|---|---|---|---|
| DeepSeek V4.1 Flash | `deepseek-flash` | 1M | $0.30 | $0.006 | $1.20 | [pricing](https://api-docs.deepseek.com/quick_start/pricing/) |
| DeepSeek V4 Pro | `deepseek-v4-pro` | 1M | $1.32 | $0.044 | $3.96 | same |

- These are peak-hour prices. Off-peak prices are half: peak is 01:00–04:00 and 06:00–10:00 UTC on weekdays, and weekends count as off-peak. The API is OpenAI-compatible at `https://api.deepseek.com` and Anthropic-compatible at `https://api.deepseek.com/anthropic`.

### Moonshot (Kimi)

| Model | API ID | Context | Input | Cached input | Output | Source |
|---|---|---|---|---|---|---|
| Kimi K3.1 Pro | `kimi-k3.1-pro` | 1M | $2.00 | $0.20 | $10.00 | [pricing](https://platform.kimi.ai/docs/pricing/chat) |
| Kimi K3.1 Pro high-speed | `kimi-k3.1-pro-highspeed` | 1M | $4.00 | $0.20 | $20.00 | same |
| Kimi K3 | `kimi-k3` | 1M | $3.00 | $0.30 | $15.00 | same |
| Kimi K2.7 Code | `kimi-k2.7-code` | 262K | $0.95 | $0.19 | $4.00 | same |

- The K2 series is closed to new users from 2026-10-31 and retires by the end of December 2026 ([pricing](https://platform.kimi.ai/docs/pricing/chat)). The platform moved from `platform.moonshot.ai` to `platform.kimi.ai`.

### Qwen (Alibaba)

- **API models:** `qwen3.8-max` (flagship), `qwen3.7-plus` (balanced) and `qwen3.8-flash` (fast and cheap). Each has a 1M context and 128K max output ([models](https://www.alibabacloud.com/help/en/model-studio/models), [text generation](https://www.alibabacloud.com/help/en/model-studio/text-generation-model)).
- **Sized models:** Model Studio also lists IDs such as `qwen3.5-397b-a17b`, `qwen3.5-122b-a10b`, `qwen3.5-35b-a3b` and `qwen3.5-27b`, with 256K context.
- **Prices:** these only appear in the Model Studio console, so they couldn't be verified and aren't listed.
- **In your lab:** `qwen3:8b`, `qwen3:14b`, `qwen3:30b-a3b` and `qwen2.5-coder:14b` run in Ollama (see `notes/setup.md`).

### Mistral

| Model | Weights | Context | Input | Output | Source |
|---|---|---|---|---|---|
| Mistral Large 4 | Open (Mistral Ecosystem Open Weight License); MoE, 1.05T total / 52B active | 1M | $0.70 | $2.10 | [model card](https://docs.mistral.ai/models/model-cards/mistral-large-4-0), [pricing](https://docs.mistral.ai/inference/pricing) |
| Mistral Small 4 | Apache 2.0 | not stated | $0.15 | $0.60 | [models](https://docs.mistral.ai/getting-started/models/models_overview/), [pricing](https://docs.mistral.ai/inference/pricing) |
| Ministral 3 (14B / 8B / 3B) | Apache 2.0 | not stated | $0.20 / $0.15 / $0.10 | $0.20 / $0.15 / $0.10 | same |
| Codestral | — | not stated | $0.30 | $0.90 | [pricing](https://docs.mistral.ai/inference/pricing) |

### Meta

- **Muse Spark Open:** an 816B open-weight model for agentic coding ([dev.meta.ai](https://dev.meta.ai/)). Hosted Muse models are sold through the Meta Model API. No prices were found.
- **Llama 4:** natively multimodal mixture-of-experts models ([Llama](https://dev.meta.ai/llama/)). Sizes and context windows aren't on that page. `llama.com` now redirects to `dev.meta.ai`.

## Access routes

| Route | What it is | Notes |
|---|---|---|
| Direct APIs | Each provider's own API (links above) | Best for provider-specific features such as Anthropic prompt caching or batch. |
| [OpenRouter](https://openrouter.ai/docs) | One OpenAI-compatible API for hundreds of models | No markup on inference ("billed at the provider's list price"). A 5.5% platform fee is charged when you buy credits on the Standard plan ([pricing](https://openrouter.ai/pricing)). |
| [LiteLLM](https://docs.litellm.ai/) | Self-hosted, open-source gateway (MIT, [repo](https://github.com/BerriAI/litellm)) | Puts local and paid models behind one endpoint you run yourself. |
| [Ollama](https://ollama.com/) | Local model runner with native and OpenAI-compatible APIs | Latest release is [v0.40.15](https://github.com/ollama/ollama/releases); `notes/setup.md` records 0.40.14 installed. |
| [LM Studio](https://lmstudio.ai/) | Desktop app for local models | Its runtime uses MLX and llama.cpp. |
| [MLX LM](https://github.com/ml-explore/mlx-lm) | Python package for running and fine-tuning LLMs on Apple silicon (MIT) | Used in Part 10 for LoRA. |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | LLM inference in C/C++ (MIT) | The engine behind GGUF; conversion and quantization tools. |

### What fits in 24 GB of unified memory

These are measured on your own Mac in [experiment 00](https://github.com/hsavovski/ai-engineering/tree/main/experiments/00-speed-check), at ctx 8192, Q4:

| Model | In memory | Free memory left | Verdict |
|---|---|---|---|
| qwen3:8b | 5.2 GB | 49% | Comfortable |
| qwen3:14b | 9.7 GB | 21% | Comfortable, the default |
| qwen3:30b-a3b (MoE) | 19 GB, 6% spilled to CPU | 14% | Tight; close other apps |

Rule of thumb: weights take about *parameters × bits ÷ 8* bytes, plus the KV cache, which grows with context length. See [1.12 Quantization](/part-01-how-llms-work/1.12-quantization) and [1.9 The KV cache](/part-01-how-llms-work/1.9-kv-cache-context-window).

## Coding agents and harnesses

| Harness | One line | Open source |
|---|---|---|
| [Claude Code](https://code.claude.com/docs) | Anthropic's agentic coding tool: reads your codebase, edits files, runs commands | No |
| [Codex CLI](https://github.com/openai/codex) | OpenAI's coding agent that runs locally in your terminal | Apache-2.0 |
| [opencode](https://opencode.ai/) | Open-source coding agent: desktop, terminal, mobile, SDK ([repo](https://github.com/anomalyco/opencode)) | MIT |
| [Aider](https://aider.chat/) | Pair programming with LLMs in your terminal ([repo](https://github.com/Aider-AI/aider)) | Yes (license not stated on the site) |
| [Cline](https://cline.bot/) | Open-source agent runtime for the editor, terminal or your own product ([repo](https://github.com/cline/cline)) | Yes (license not stated on the site) |
| [Cursor](https://cursor.com/) | AI code editor and coding agent | No |
| [Continue](https://continue.dev/) | Acquired by Cursor; its open-source codebase stays available ([docs](https://docs.continue.dev)) | Yes |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Google's terminal agent. Since 2026-06-18, individual users go through Antigravity CLI instead | Apache-2.0 |
| [goose](https://github.com/aaif-goose/goose) | Extensible open-source agent that works with any LLM; an AAIF project ([docs](https://goose-docs.ai/)) | Apache-2.0 |

## Key standards and orgs

| Standard / org | What it is | Status | Source |
|---|---|---|---|
| Agentic AI Foundation (AAIF) | A Linux Foundation fund for open agent standards | Formed 2025-12-09 with three founding projects: MCP (Anthropic), goose (Block), AGENTS.md (OpenAI). 10 projects as of 2026-10-22, adding A2A, Agent Router, agentgateway, Agent Skills (Anthropic), Open Responses (OpenAI), OpenEnv (Hugging Face) and OpenSandbox (Alibaba) | [LF announcement](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation), [four new projects (2026-10-22)](https://www.linuxfoundation.org/press/agentic-ai-foundation-announces-four-new-projects-agent-skills-open-responses-openenv-and-opensandbox), [aaif.io projects](https://aaif.io/projects/) |
| MCP | Open standard for connecting AI applications to external systems | Part of the AAIF. Latest spec revision 2026-07-28 | [modelcontextprotocol.io](https://modelcontextprotocol.io), [spec](https://modelcontextprotocol.io/specification/latest) |
| AGENTS.md | "A README for agents": project instructions for coding agents, used by 60k+ open-source projects | Released by OpenAI in August 2025; stewarded by the AAIF | [agents.md](https://agents.md) |
| Agent Skills | Open format for packaging agent know-how and workflows | Developed by Anthropic (launched October 2025), published as an open standard in December 2025 ([repo](https://github.com/agentskills/agentskills)). Donated to the AAIF on 2026-10-22 | [agentskills.io](https://agentskills.io), [Anthropic: donating Agent Skills](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation) |
| A2A | Agent2Agent protocol for agents to discover and talk to each other | Originated by Google and donated to the Linux Foundation. Spec v1.0.0. Accepted as an AAIF Growth Stage project on 2026-08-27 | [a2a-protocol.org](https://a2a-protocol.org/latest/), [spec](https://a2a-protocol.org/latest/specification/), [joining AAIF](https://a2a-protocol.org/latest/blog/2026/08/27/a-new-chapter-for-a2a-joining-the-agentic-ai-foundation/) |
| OpenTelemetry GenAI conventions | Standard span and attribute names for LLM and agent traces | Status: **Development**, not stable. Moved to their own repo | [semconv-genai](https://github.com/open-telemetry/semantic-conventions-genai), [spans](https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-spans.md) |
| Agent payment protocols | AP2 (signed mandates, rail-agnostic), ACP (checkout API + single-use token), x402 (HTTP 402 + signed stablecoin transfers) | Verified 2026-11-12: AP2 v0.2 (2026-04-28), donated by Google to the FIDO Alliance. ACP beta, spec 2026-04-17, maintained by OpenAI and Stripe. x402 Foundation announced at the Linux Foundation on 2026-04-02, spec v2. Whether ChatGPT Instant Checkout is currently live: not verified | [AP2](https://ap2-protocol.org/), [ACP](https://github.com/agentic-commerce-protocol/agentic-commerce-protocol), [x402](https://docs.x402.org/), [chapter 3.13](/part-03-agents/3.13-agent-payments) |

## How to refresh this page

1. Open every source link in the tables, and update numbers, IDs and context windows. Drop anything that's gone or can't be confirmed.
2. Check each provider's models page for new flagship or small models, and for deprecations.
3. Look for **promotional prices with end dates** (Google, OpenAI) and update them once they've passed.
4. Check the Ollama release page against `notes/setup.md`.
5. Check the harness list for new entrants and changes in status (acquisitions, renames, license changes).
6. Re-check the standards: MCP spec revision, A2A version, AAIF projects, OTel GenAI status.
7. Update **Last refreshed** at the top, and add a dated line to `BUILD-LOG.md`.
