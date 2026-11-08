# Glossary

Core vocabulary for the study. Each term links to the chapter that covers it. Chapter tasks add new terms here as they write chapters. The book renders this file at [Glossary](book/glossary.md).

## Model internals

| Term | Meaning | Chapter |
|---|---|---|
| Model | The weights that predict text (Qwen, Claude, GPT). | [0.2](book/part-00-catch-up/0.2-the-stack.md) |
| Parameters (weights) | The learned numbers in a model. "14b" means about 14 billion of them. | [1.5](book/part-01-how-llms-work/1.5-transformer-block.md) |
| Token | The unit a model reads and writes: a word, a piece of a word, or a byte sequence. Prices and limits are counted in tokens. | [1.2](book/part-01-how-llms-work/1.2-tokenization.md) |
| Tokenizer / BPE | Splits text into tokens. Byte-pair encoding (BPE) builds the vocabulary by repeatedly merging the most frequent pair of symbols. | [1.2](book/part-01-how-llms-work/1.2-tokenization.md) |
| Embedding | A vector that represents a token (inside the model) or a whole text (from an embedding model). Similar meanings end up close together. | [1.3](book/part-01-how-llms-work/1.3-embeddings.md) |
| Attention | The mechanism that lets each token weigh information from every earlier token, using queries, keys and values. | [1.4](book/part-01-how-llms-work/1.4-attention.md) |
| Transformer block | Attention plus an MLP, wrapped in residual connections and normalization. A model is a stack of these. | [1.5](book/part-01-how-llms-work/1.5-transformer-block.md) |
| Logits | The raw score the model gives every token in the vocabulary for the next position, before sampling. | [1.1](book/part-01-how-llms-work/1.1-next-token-prediction.md) |
| Context window | The maximum number of tokens (prompt plus output) a model can attend to in one request. | [1.9](book/part-01-how-llms-work/1.9-kv-cache-context-window.md) |
| KV cache | Stored keys and values for tokens already processed, so each new token doesn't recompute them. It grows with context length and costs memory. | [1.9](book/part-01-how-llms-work/1.9-kv-cache-context-window.md) |
| Mixture of experts (MoE) | An architecture where a router sends each token through a few of many expert MLPs. "30b-a3b" means 30B total, ~3B active per token. | [1.11](book/part-01-how-llms-work/1.11-mixture-of-experts.md) |

## Training

| Term | Meaning | Chapter |
|---|---|---|
| Pretraining | Training on a huge text corpus to predict the next token. Where most knowledge comes from. | [1.6](book/part-01-how-llms-work/1.6-pretraining.md) |
| Scaling laws | Empirical relations between parameters, training tokens, compute and loss. | [1.6](book/part-01-how-llms-work/1.6-pretraining.md) |
| Knowledge cutoff | The date after which a model's training data stops. | [1.6](book/part-01-how-llms-work/1.6-pretraining.md) |
| Base vs. instruct model | A base model only continues text; an instruct (chat) model has been post-trained to follow instructions. | [1.7](book/part-01-how-llms-work/1.7-post-training.md) |
| SFT | Supervised fine-tuning: training on example prompts and good responses. | [1.7](book/part-01-how-llms-work/1.7-post-training.md) |
| RLHF | Reinforcement learning from human feedback: a reward model trained on human preferences guides further training. | [1.7](book/part-01-how-llms-work/1.7-post-training.md) |
| DPO | Direct preference optimization: learns from preference pairs without a separate reward model. | [1.7](book/part-01-how-llms-work/1.7-post-training.md) |
| RLVR | Reinforcement learning with verifiable rewards (e.g. tests pass, the math answer is right). The main way reasoning models are trained. | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| Fine-tuning | Further training of an existing model on your own data. | [10.3](book/part-10-modifying-serving-models/10.3-lora-mlx.md) |
| LoRA | Low-rank adaptation: fine-tuning small added matrices instead of all weights. Cheap enough for a Mac. | [10.3](book/part-10-modifying-serving-models/10.3-lora-mlx.md) |
| Distillation | Training a smaller model to imitate a larger one's outputs. | [10.9](book/part-10-modifying-serving-models/10.9-distillation-synthetic-data.md) |

## Inference

| Term | Meaning | Chapter |
|---|---|---|
| Inference server | Runs a model and exposes an API (Ollama, LM Studio, llama.cpp, MLX). | [0.2](book/part-00-catch-up/0.2-the-stack.md) |
| Prefill / decode | Prefill processes the whole prompt in parallel; decode generates output one token at a time. That's why prompt tok/s ≫ output tok/s. | [1.1](book/part-01-how-llms-work/1.1-next-token-prediction.md) |
| Temperature | Scales the logits before sampling: low is more deterministic, high is more varied. | [1.8](book/part-01-how-llms-work/1.8-sampling.md) |
| Top-p / top-k / min-p | Sampling filters that drop unlikely tokens before picking one. | [1.8](book/part-01-how-llms-work/1.8-sampling.md) |
| Reasoning model | A model trained to produce a chain of thought ("thinking tokens") before its answer. | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| Test-time compute | Spending more tokens or samples at inference to get better answers. | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| Quantization | Storing weights in fewer bits (e.g. 4 or 8) to save memory and gain speed, at some quality cost. | [1.12](book/part-01-how-llms-work/1.12-quantization.md) |
| GGUF | The model file format used by llama.cpp and Ollama, usually holding quantized weights (Q4_K_M, Q8_0...). | [10.2](book/part-10-modifying-serving-models/10.2-hf-to-gguf.md) |
| TTFT | Time to first token: how long until streaming output starts. | [2.2](book/part-02-programming-with-llms/2.2-streaming.md) |
| Speculative decoding | A small draft model proposes tokens that the big model verifies in one pass, speeding up generation. | [10.8](book/part-10-modifying-serving-models/10.8-serving-optimizations.md) |

## Programming with LLMs

| Term | Meaning | Chapter |
|---|---|---|
| OpenAI-compatible API | The Chat Completions request shape that many providers and local servers accept (OpenRouter, Ollama `/v1`). | [2.1](book/part-02-programming-with-llms/2.1-calling-models.md) |
| Streaming | Receiving output incrementally (server-sent events) instead of waiting for the full response. | [2.2](book/part-02-programming-with-llms/2.2-streaming.md) |
| System prompt | Instructions that frame the whole conversation, separate from user messages. | [2.3](book/part-02-programming-with-llms/2.3-prompting.md) |
| Structured output | Constraining or validating model output to match a schema, usually JSON Schema. | [2.5](book/part-02-programming-with-llms/2.5-structured-output.md) |
| Tool calling | The model asks your code to run a named function with JSON arguments, then reads the result. | [2.6](book/part-02-programming-with-llms/2.6-tool-calling.md) |
| Prompt caching | Reusing the processed prefix of a prompt across requests. Cheaper and faster when the prefix repeats. | [2.7](book/part-02-programming-with-llms/2.7-prompt-caching.md) |
| Embedding model | A model that turns a text into one vector, used for search and clustering. | [2.8](book/part-02-programming-with-llms/2.8-embeddings-in-practice.md) |
| RAG | Retrieval-augmented generation: fetch relevant documents and put them in the prompt. | [2.9](book/part-02-programming-with-llms/2.9-rag-fundamentals.md) |
| Hybrid search | Combining keyword search (BM25) with vector search. | [2.10](book/part-02-programming-with-llms/2.10-better-retrieval.md) |
| Reranker | A model that re-scores retrieved results for relevance before they go into the prompt. | [2.10](book/part-02-programming-with-llms/2.10-better-retrieval.md) |
| Router / gateway | One endpoint in front of many models (LiteLLM, OpenRouter). | [9.2](book/part-09-model-landscape-cost/9.2-openrouter-litellm.md) |

## Agents

| Term | Meaning | Chapter |
|---|---|---|
| Workflow | LLM calls orchestrated by fixed code paths (chaining, routing, parallelization). | [3.1](book/part-03-agents/3.1-workflows-vs-agents.md) |
| Agent | Model + harness running a loop: think → call tool → read result → repeat. | [3.1](book/part-03-agents/3.1-workflows-vs-agents.md) |
| Agent loop | The loop itself: call the model, run requested tools, append results, repeat until it stops. | [3.2](book/part-03-agents/3.2-agent-loop.md) |
| Context engineering | Curating what goes into the context window on each turn, so it holds the right tokens and few wasted ones. | [3.4](book/part-03-agents/3.4-context-engineering.md) |
| Context rot | Quality degrades as the context grows, even within the window limit. | [3.4](book/part-03-agents/3.4-context-engineering.md) |
| Compaction | Summarizing older conversation to free context space. | [3.4](book/part-03-agents/3.4-context-engineering.md) |
| Agent memory | Information an agent stores and retrieves across sessions (files, notes, databases). | [3.5](book/part-03-agents/3.5-memory.md) |
| MCP | Model Context Protocol: an open standard for connecting AI applications to tools and data through servers. | [3.6](book/part-03-agents/3.6-mcp-using.md) |
| AGENTS.md | An open format for project instructions for coding agents ("a README for agents"). | [3.8](book/part-03-agents/3.8-agents-md-and-skills.md) |
| Agent skill | A folder with a `SKILL.md` and resources that an agent loads on demand (progressive disclosure). | [3.8](book/part-03-agents/3.8-agents-md-and-skills.md) |
| Sub-agent | An agent spawned by another agent with its own context, returning a summary. | [3.10](book/part-03-agents/3.10-multi-agent.md) |
| A2A | Agent2Agent protocol: an open standard for agents to discover and talk to other agents. | [3.12](book/part-03-agents/3.12-a2a.md) |

## Harnesses and Claude Code

| Term | Meaning | Chapter |
|---|---|---|
| Harness | Program around the model: tools, context management, the loop (Claude Code, opencode, Aider). | [5.1](book/part-05-harnesses/5.1-what-is-a-harness.md) |
| Coding agent | A harness specialized for software work: reads and edits code, runs commands and tests. | [5.3](book/part-05-harnesses/5.3-harness-comparison.md) |
| Long-running agent | An agent that works across many context windows, using progress files and handoffs. | [5.6](book/part-05-harnesses/5.6-long-running-agents.md) |
| CLAUDE.md | Claude Code's project and user instruction files, loaded into context at session start. | [6.2](book/part-06-claude-code/6.2-claude-md-and-memory.md) |
| Hook | A command the harness runs automatically on an event (e.g. before a tool call, after an edit). | [6.4](book/part-06-claude-code/6.4-hooks-permissions.md) |
| Permission mode | How much a harness lets the agent do without asking (ask, accept edits, auto, bypass...). | [6.4](book/part-06-claude-code/6.4-hooks-permissions.md) |
| Worktree | A second checkout of the same git repo, used to run agents in parallel without conflicts. | [6.5](book/part-06-claude-code/6.5-parallel-work.md) |
| Managed agent | An agent whose loop, sandbox and sessions are hosted by the provider. | [8.7](book/part-08-production/8.7-managed-agents.md) |

## Evals and observability

| Term | Meaning | Chapter |
|---|---|---|
| Eval | A repeatable test of an LLM system's behavior on a set of cases. | [4.2](book/part-04-evals-observability/4.2-eval-sets.md) |
| Error analysis | Reading real traces and categorizing failures before deciding what to measure. | [4.1](book/part-04-evals-observability/4.1-error-analysis.md) |
| LLM-as-judge | Using a model to grade outputs, checked against human labels. | [4.4](book/part-04-evals-observability/4.4-llm-as-judge.md) |
| pass@k / pass^k | pass@k: at least one of k attempts succeeds. pass^k: all k attempts succeed (consistency). | [4.5](book/part-04-evals-observability/4.5-evaluating-agents.md) |
| Regression eval | An eval that guards against breaking what already works, run on every change. | [4.6](book/part-04-evals-observability/4.6-regression-evals-ci.md) |
| Trace | A record of every step in a request (model calls, tool calls, timings, tokens), made of spans. | [4.7](book/part-04-evals-observability/4.7-tracing.md) |

## Security

| Term | Meaning | Chapter |
|---|---|---|
| Prompt injection | Instructions hidden in content the model reads, which hijack its behavior. | [8.1](book/part-08-production/8.1-prompt-injection.md) |
| Lethal trifecta | Private data + untrusted content + a way to send data out. With all three, injection can steal data. | [8.1](book/part-08-production/8.1-prompt-injection.md) |
| Sandbox | An isolated environment that limits what an agent's commands can touch (files, network). | [8.3](book/part-08-production/8.3-sandboxing.md) |
| Least privilege | Giving an agent only the access its task needs. | [8.3](book/part-08-production/8.3-sandboxing.md) |
| Guardrail | A check on inputs or outputs (policy, PII, format). A filter, not a security boundary. | [8.4](book/part-08-production/8.4-guardrails.md) |
