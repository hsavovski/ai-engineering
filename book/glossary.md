<!-- Generated from GLOSSARY.md by `npm run glossary` (also runs before dev and build). Edit GLOSSARY.md, not this file. -->

# Glossary

Core vocabulary for the study. Each term links to the chapter that covers it. Chapter tasks add new terms here as they write chapters. The book renders this file at [Glossary](/glossary).

## Model internals

| Term | Meaning | Chapter |
|---|---|---|
| Model | The weights that predict text (Qwen, Claude, GPT). | [0.2](/part-00-catch-up/0.2-the-stack) |
| Parameters (weights) | The learned numbers in a model. "14b" means about 14 billion of them. | [1.5](/part-01-how-llms-work/1.5-transformer-block) |
| Token | The unit a model reads and writes: a word, a piece of a word, or a byte sequence. Prices and limits are counted in tokens. | [1.2](/part-01-how-llms-work/1.2-tokenization) |
| Tokenizer / BPE | Splits text into tokens. Byte-pair encoding (BPE) builds the vocabulary by repeatedly merging the most frequent pair of symbols. | [1.2](/part-01-how-llms-work/1.2-tokenization) |
| Embedding | A vector that represents a token (inside the model) or a whole text (from an embedding model). Similar meanings end up close together. | [1.3](/part-01-how-llms-work/1.3-embeddings) |
| Attention | The mechanism that lets each token weigh information from every earlier token, using queries, keys and values. | [1.4](/part-01-how-llms-work/1.4-attention) |
| Transformer block | Attention plus an MLP, wrapped in residual connections and normalization. A model is a stack of these. | [1.5](/part-01-how-llms-work/1.5-transformer-block) |
| Logits | The raw score the model gives every token in the vocabulary for the next position, before sampling. | [1.1](/part-01-how-llms-work/1.1-next-token-prediction) |
| Autoregressive generation | Producing output one token at a time, appending each chosen token to the input before predicting the next. | [1.1](/part-01-how-llms-work/1.1-next-token-prediction) |
| Softmax | Turns logits into a probability distribution: exponentiate each score, divide by the sum. | [1.1](/part-01-how-llms-work/1.1-next-token-prediction) |
| Logprob | The natural log of a token's probability (always ≤ 0). APIs return it instead of logits; sum them for a sequence's log probability. | [1.1](/part-01-how-llms-work/1.1-next-token-prediction) |
| Context window | The maximum number of tokens (prompt plus output) a model can attend to in one request. | [1.9](/part-01-how-llms-work/1.9-kv-cache-context-window) |
| KV cache | Stored keys and values for tokens already processed, so each new token doesn't recompute them. It grows with context length and costs memory. | [1.9](/part-01-how-llms-work/1.9-kv-cache-context-window) |
| Mixture of experts (MoE) | An architecture where a router sends each token through a few of many expert MLPs. "30b-a3b" means 30B total, ~3B active per token. | [1.11](/part-01-how-llms-work/1.11-mixture-of-experts) |
| Chat template | Ships with a model: turns a list of messages (and tools) into one token sequence with the control tokens the model was post-trained on. Thinking switches like Qwen3's `enable_thinking` live here. | [0.2](/part-00-catch-up/0.2-the-stack) |
| Vocabulary | The fixed list of tokens a model knows, each with an integer id. Its size is chosen when the tokenizer is trained; ids differ between model families. | [1.2](/part-01-how-llms-work/1.2-tokenization) |
| Byte-level BPE | BPE that starts from the 256 possible UTF-8 bytes instead of characters, so any text can be encoded and nothing is ever an unknown token. | [1.2](/part-01-how-llms-work/1.2-tokenization) |
| Pre-tokenization | A regex that splits text into chunks (words with their leading space, numbers, punctuation) before BPE, so merges never cross those boundaries. | [1.2](/part-01-how-llms-work/1.2-tokenization) |
| Special token | A reserved token added by hand, never produced by BPE from normal text, that marks structure: end of text, message boundaries, thinking, tool calls. | [1.2](/part-01-how-llms-work/1.2-tokenization) |
| Glitch token | A token that is in the vocabulary but was almost absent from the model's training data, so its embedding is untrained and it triggers odd behavior. | [1.2](/part-01-how-llms-work/1.2-tokenization) |

## Training

| Term | Meaning | Chapter |
|---|---|---|
| Pretraining | Training on a huge text corpus to predict the next token. Where most knowledge comes from. | [1.6](/part-01-how-llms-work/1.6-pretraining) |
| Scaling laws | Empirical relations between parameters, training tokens, compute and loss. | [1.6](/part-01-how-llms-work/1.6-pretraining) |
| Knowledge cutoff | The date after which a model's training data stops. | [1.6](/part-01-how-llms-work/1.6-pretraining) |
| Base vs. instruct model | A base model only continues text; an instruct (chat) model has been post-trained to follow instructions. | [1.7](/part-01-how-llms-work/1.7-post-training) |
| SFT | Supervised fine-tuning: training on example prompts and good responses. | [1.7](/part-01-how-llms-work/1.7-post-training) |
| RLHF | Reinforcement learning from human feedback: a reward model trained on human preferences guides further training. | [1.7](/part-01-how-llms-work/1.7-post-training) |
| DPO | Direct preference optimization: learns from preference pairs without a separate reward model. | [1.7](/part-01-how-llms-work/1.7-post-training) |
| RLVR | Reinforcement learning with verifiable rewards (e.g. tests pass, the math answer is right). The main way reasoning models are trained. | [1.10](/part-01-how-llms-work/1.10-reasoning-models) |
| Fine-tuning | Further training of an existing model on your own data. | [10.3](/part-10-modifying-serving-models/10.3-lora-mlx) |
| LoRA | Low-rank adaptation: fine-tuning small added matrices instead of all weights. Cheap enough for a Mac. | [10.3](/part-10-modifying-serving-models/10.3-lora-mlx) |
| Distillation | Training a smaller model to imitate a larger one's outputs. | [10.9](/part-10-modifying-serving-models/10.9-distillation-synthetic-data) |
| Open-weight model | A model whose trained weights are published for anyone to download and run (Qwen, DeepSeek, Mistral). The training data and code usually aren't. | [0.1](/part-00-catch-up/0.1-what-changed) |

## Inference

| Term | Meaning | Chapter |
|---|---|---|
| Inference server | Runs a model and exposes an API (Ollama, LM Studio, llama.cpp, MLX). | [0.2](/part-00-catch-up/0.2-the-stack) |
| Prefill / decode | Prefill processes the whole prompt in parallel; decode generates output one token at a time. That's why prompt tok/s ≫ output tok/s. | [1.1](/part-01-how-llms-work/1.1-next-token-prediction) |
| Memory-bound decode | Each decode step streams all (active) weights from memory, so output speed is capped at roughly memory bandwidth ÷ model size. | [1.1](/part-01-how-llms-work/1.1-next-token-prediction) |
| Greedy decoding | Always picking the most likely next token (temperature 0). Deterministic, but prone to repetition. | [1.8](/part-01-how-llms-work/1.8-sampling) |
| Temperature | Scales the logits before sampling: low is more deterministic, high is more varied. | [1.8](/part-01-how-llms-work/1.8-sampling) |
| Top-p / top-k / min-p | Sampling filters that drop unlikely tokens before picking one. | [1.8](/part-01-how-llms-work/1.8-sampling) |
| Reasoning model | A model trained to produce a chain of thought ("thinking tokens") before its answer. | [1.10](/part-01-how-llms-work/1.10-reasoning-models) |
| Test-time compute | Spending more tokens or samples at inference to get better answers. | [1.10](/part-01-how-llms-work/1.10-reasoning-models) |
| Inference scaling | Another name for test-time compute: improving answers by spending more compute at inference instead of training. | [1.10](/part-01-how-llms-work/1.10-reasoning-models) |
| Quantization | Storing weights in fewer bits (e.g. 4 or 8) to save memory and gain speed, at some quality cost. | [1.12](/part-01-how-llms-work/1.12-quantization) |
| GGUF | The model file format used by llama.cpp and Ollama, usually holding quantized weights (Q4_K_M, Q8_0...). | [10.2](/part-10-modifying-serving-models/10.2-hf-to-gguf) |
| TTFT | Time to first token: how long until streaming output starts. | [2.2](/part-02-programming-with-llms/2.2-streaming) |
| Speculative decoding | A small draft model proposes tokens that the big model verifies in one pass, speeding up generation. | [10.8](/part-10-modifying-serving-models/10.8-serving-optimizations) |
| Inference engine | The code that runs the forward pass on hardware (llama.cpp, MLX, vLLM). Owns speed and memory, not messages or HTTP. | [0.2](/part-00-catch-up/0.2-the-stack) |
| Keep-alive | How long Ollama keeps a model loaded in memory after a request (`keep_alive`, `OLLAMA_KEEP_ALIVE`). Faster next call, but the memory stays taken. | [0.4](/part-00-catch-up/0.4-your-lab) |

## Programming with LLMs

| Term | Meaning | Chapter |
|---|---|---|
| OpenAI-compatible API | The Chat Completions request shape that many providers and local servers accept (OpenRouter, Ollama `/v1`). | [2.1](/part-02-programming-with-llms/2.1-calling-models) |
| Streaming | Receiving output incrementally (server-sent events) instead of waiting for the full response. | [2.2](/part-02-programming-with-llms/2.2-streaming) |
| System prompt | Instructions that frame the whole conversation, separate from user messages. | [2.3](/part-02-programming-with-llms/2.3-prompting) |
| Structured output | Constraining or validating model output to match a schema, usually JSON Schema. | [2.5](/part-02-programming-with-llms/2.5-structured-output) |
| Tool calling | The model asks your code to run a named function with JSON arguments, then reads the result. | [2.6](/part-02-programming-with-llms/2.6-tool-calling) |
| Prompt caching | Reusing the processed prefix of a prompt across requests. Cheaper and faster when the prefix repeats. | [2.7](/part-02-programming-with-llms/2.7-prompt-caching) |
| Embedding model | A model that turns a text into one vector, used for search and clustering. | [2.8](/part-02-programming-with-llms/2.8-embeddings-in-practice) |
| RAG | Retrieval-augmented generation: fetch relevant documents and put them in the prompt. | [2.9](/part-02-programming-with-llms/2.9-rag-fundamentals) |
| Hybrid search | Combining keyword search (BM25) with vector search. | [2.10](/part-02-programming-with-llms/2.10-better-retrieval) |
| Reranker | A model that re-scores retrieved results for relevance before they go into the prompt. | [2.10](/part-02-programming-with-llms/2.10-better-retrieval) |
| Router / gateway | One endpoint in front of many models (LiteLLM, OpenRouter). | [9.2](/part-09-model-landscape-cost/9.2-openrouter-litellm) |
| Native API | A provider's or server's own API shape (Anthropic Messages, Ollama `/api/chat`), exposing features a compatible API can't carry. | [0.2](/part-00-catch-up/0.2-the-stack) |
| Token usage | The token counts a response reports (input, output, and breakdowns such as cached or thinking tokens). Multiply by per-MTok prices to get cost. | [0.4](/part-00-catch-up/0.4-your-lab) |
| Cost ledger | `costs.md`: one row per paid run (tokens, cost, actual or estimate), reconciled against the provider dashboards. | [0.4](/part-00-catch-up/0.4-your-lab) |

## Agents

| Term | Meaning | Chapter |
|---|---|---|
| Workflow | LLM calls orchestrated by fixed code paths (chaining, routing, parallelization). | [3.1](/part-03-agents/3.1-workflows-vs-agents) |
| Agent | Model + harness running a loop: think → call tool → read result → repeat. | [3.1](/part-03-agents/3.1-workflows-vs-agents) |
| Agent loop | The loop itself: call the model, run requested tools, append results, repeat until it stops. | [3.2](/part-03-agents/3.2-agent-loop) |
| Context engineering | Curating what goes into the context window on each turn, so it holds the right tokens and few wasted ones. | [3.4](/part-03-agents/3.4-context-engineering) |
| Context rot | Quality degrades as the context grows, even within the window limit. | [3.4](/part-03-agents/3.4-context-engineering) |
| Compaction | Summarizing older conversation to free context space. | [3.4](/part-03-agents/3.4-context-engineering) |
| Agent memory | Information an agent stores and retrieves across sessions (files, notes, databases). | [3.5](/part-03-agents/3.5-memory) |
| MCP | Model Context Protocol: an open standard for connecting AI applications to tools and data through servers. | [3.6](/part-03-agents/3.6-mcp-using) |
| AGENTS.md | An open format for project instructions for coding agents ("a README for agents"). | [3.8](/part-03-agents/3.8-agents-md-and-skills) |
| Agent skill | A folder with a `SKILL.md` and resources that an agent loads on demand (progressive disclosure). | [3.8](/part-03-agents/3.8-agents-md-and-skills) |
| Sub-agent | An agent spawned by another agent with its own context, returning a summary. | [3.10](/part-03-agents/3.10-multi-agent) |
| A2A | Agent2Agent protocol: an open standard for agents to discover and talk to other agents. | [3.12](/part-03-agents/3.12-a2a) |
| Agentic AI Foundation (AAIF) | A Linux Foundation fund, formed 2025-12-09, that governs open agent standards: MCP, AGENTS.md, goose, and since 2026 A2A and Agent Skills. | [0.3](/part-00-catch-up/0.3-standards-and-orgs) |
| MCP host / client / server | The AI application (host) creates one MCP client per connection to an MCP server, which provides tools, resources and prompts. | [0.3](/part-00-catch-up/0.3-standards-and-orgs) |
| MCP primitives | What an MCP server offers: tools (model-invoked functions), resources (context data) and prompts (user templates). | [0.3](/part-00-catch-up/0.3-standards-and-orgs) |
| SEP | Specification Enhancement Proposal: how changes to the MCP spec are proposed and decided. | [0.3](/part-00-catch-up/0.3-standards-and-orgs) |
| Agent Card | A2A's JSON self-description of an agent (identity, skills, endpoint, auth), served at `/.well-known/agent-card.json` for discovery. | [0.3](/part-00-catch-up/0.3-standards-and-orgs) |
| Progressive disclosure | Loading only a skill's name and description up front, and its full instructions when a task needs them. | [0.3](/part-00-catch-up/0.3-standards-and-orgs) |

## Harnesses and Claude Code

| Term | Meaning | Chapter |
|---|---|---|
| Harness | Program around the model: tools, context management, the loop (Claude Code, opencode, Aider). | [5.1](/part-05-harnesses/5.1-what-is-a-harness) |
| Coding agent | A harness specialized for software work: reads and edits code, runs commands and tests. | [5.3](/part-05-harnesses/5.3-harness-comparison) |
| Long-running agent | An agent that works across many context windows, using progress files and handoffs. | [5.6](/part-05-harnesses/5.6-long-running-agents) |
| CLAUDE.md | Claude Code's project and user instruction files, loaded into context at session start. | [6.2](/part-06-claude-code/6.2-claude-md-and-memory) |
| Hook | A command the harness runs automatically on an event (e.g. before a tool call, after an edit). | [6.4](/part-06-claude-code/6.4-hooks-permissions) |
| Permission mode | How much a harness lets the agent do without asking (ask, accept edits, auto, bypass...). | [6.4](/part-06-claude-code/6.4-hooks-permissions) |
| Worktree | A second checkout of the same git repo, used to run agents in parallel without conflicts. | [6.5](/part-06-claude-code/6.5-parallel-work) |
| Managed agent | An agent whose loop, sandbox and sessions are hosted by the provider. | [8.7](/part-08-production/8.7-managed-agents) |
| Background agent | An agent that runs unattended in a cloud sandbox, started from an issue, chat or CI event, and returns a pull request or report. | [7.4](/part-07-ai-native-development/7.4-ci-background-agents) |

## Evals and observability

| Term | Meaning | Chapter |
|---|---|---|
| Eval | A repeatable test of an LLM system's behavior on a set of cases. | [4.2](/part-04-evals-observability/4.2-eval-sets) |
| Error analysis | Reading real traces and categorizing failures before deciding what to measure. | [4.1](/part-04-evals-observability/4.1-error-analysis) |
| LLM-as-judge | Using a model to grade outputs, checked against human labels. | [4.4](/part-04-evals-observability/4.4-llm-as-judge) |
| pass@k / pass^k | pass@k: at least one of k attempts succeeds. pass^k: all k attempts succeed (consistency). | [4.5](/part-04-evals-observability/4.5-evaluating-agents) |
| Regression eval | An eval that guards against breaking what already works, run on every change. | [4.6](/part-04-evals-observability/4.6-regression-evals-ci) |
| Trace | A record of every step in a request (model calls, tool calls, timings, tokens), made of spans. | [4.7](/part-04-evals-observability/4.7-tracing) |

## Security

| Term | Meaning | Chapter |
|---|---|---|
| Prompt injection | Instructions hidden in content the model reads, which hijack its behavior. | [8.1](/part-08-production/8.1-prompt-injection) |
| Lethal trifecta | Private data + untrusted content + a way to send data out. With all three, injection can steal data. | [8.1](/part-08-production/8.1-prompt-injection) |
| Sandbox | An isolated environment that limits what an agent's commands can touch (files, network). | [8.3](/part-08-production/8.3-sandboxing) |
| Least privilege | Giving an agent only the access its task needs. | [8.3](/part-08-production/8.3-sandboxing) |
| Guardrail | A check on inputs or outputs (policy, PII, format). A filter, not a security boundary. | [8.4](/part-08-production/8.4-guardrails) |
