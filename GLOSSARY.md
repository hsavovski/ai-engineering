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
| Autoregressive generation | Producing output one token at a time, appending each chosen token to the input before predicting the next. | [1.1](book/part-01-how-llms-work/1.1-next-token-prediction.md) |
| Softmax | Turns logits into a probability distribution: exponentiate each score, divide by the sum. | [1.1](book/part-01-how-llms-work/1.1-next-token-prediction.md) |
| Logprob | The natural log of a token's probability (always ≤ 0). APIs return it instead of logits; sum them for a sequence's log probability. | [1.1](book/part-01-how-llms-work/1.1-next-token-prediction.md) |
| Context window | The maximum number of tokens (prompt plus output) a model can attend to in one request. | [1.9](book/part-01-how-llms-work/1.9-kv-cache-context-window.md) |
| KV cache | Stored keys and values for tokens already processed, so each new token doesn't recompute them. It grows with context length and costs memory. | [1.9](book/part-01-how-llms-work/1.9-kv-cache-context-window.md) |
| Mixture of experts (MoE) | An architecture where a router sends each token through a few of many expert MLPs. "30b-a3b" means 30B total, ~3B active per token. | [1.11](book/part-01-how-llms-work/1.11-mixture-of-experts.md) |
| Chat template | Ships with a model: turns a list of messages (and tools) into one token sequence with the control tokens the model was post-trained on. Thinking switches like Qwen3's `enable_thinking` live here. | [0.2](book/part-00-catch-up/0.2-the-stack.md) |
| Vocabulary | The fixed list of tokens a model knows, each with an integer id. Its size is chosen when the tokenizer is trained; ids differ between model families. | [1.2](book/part-01-how-llms-work/1.2-tokenization.md) |
| Byte-level BPE | BPE that starts from the 256 possible UTF-8 bytes instead of characters, so any text can be encoded and nothing is ever an unknown token. | [1.2](book/part-01-how-llms-work/1.2-tokenization.md) |
| Pre-tokenization | A regex that splits text into chunks (words with their leading space, numbers, punctuation) before BPE, so merges never cross those boundaries. | [1.2](book/part-01-how-llms-work/1.2-tokenization.md) |
| Special token | A reserved token added by hand, never produced by BPE from normal text, that marks structure: end of text, message boundaries, thinking, tool calls. | [1.2](book/part-01-how-llms-work/1.2-tokenization.md) |
| Glitch token | A token that is in the vocabulary but was almost absent from the model's training data, so its embedding is untrained and it triggers odd behavior. | [1.2](book/part-01-how-llms-work/1.2-tokenization.md) |
| Embedding matrix | The `vocab_size × d_model` table with one learned vector per token id. Turning ids into vectors is a row lookup, mathematically a one-hot vector times the matrix. | [1.3](book/part-01-how-llms-work/1.3-embeddings.md) |
| Unembedding (`lm_head`) | The output matrix that turns the final hidden vector into one logit per token: a dot product with each token's output vector. | [1.3](book/part-01-how-llms-work/1.3-embeddings.md) |
| Weight tying | Using the same matrix for the input embedding and the unembedding. Saves a lot of parameters in small models (Qwen3-0.6B ties, Qwen3-8B doesn't). | [1.3](book/part-01-how-llms-work/1.3-embeddings.md) |
| Cosine similarity | The dot product of two vectors divided by their lengths: compares direction only, from −1 to 1. Equals the dot product for unit vectors. | [1.3](book/part-01-how-llms-work/1.3-embeddings.md) |
| Anisotropy | Embedding vectors crowding into a narrow region instead of spreading out, so even unrelated items have high cosine. Only rankings transfer between models, not cosine values. | [1.3](book/part-01-how-llms-work/1.3-embeddings.md) |
| RoPE | Rotary position embedding: rotates query and key vectors by a position-dependent angle inside attention, so their dot product depends on relative position. Qwen3 uses it. | [1.3](book/part-01-how-llms-work/1.3-embeddings.md) |
| Query, key, value (Q, K, V) | Three learned projections of each position's vector: what it looks for (query), what it advertises (key), and what it hands over if attended to (value). | [1.4](book/part-01-how-llms-work/1.4-attention.md) |
| Scaled dot-product attention | `softmax(Q·Kᵀ / √d_k) · V`: score every query against every key, scale, softmax each row into weights, and take the weighted average of the values. | [1.4](book/part-01-how-llms-work/1.4-attention.md) |
| Attention pattern | The `n × n` matrix of softmax weights: how much each position attends to each other position. Its size is why attention costs O(n²). | [1.4](book/part-01-how-llms-work/1.4-attention.md) |
| Causal mask | Sets scores for future positions to −∞ before softmax, so each token only sees itself and earlier tokens. Makes parallel training and the KV cache possible. | [1.4](book/part-01-how-llms-work/1.4-attention.md) |
| Multi-head attention | Several attentions in parallel, each with its own smaller Q/K/V projections, concatenated and projected by `W_O`. Qwen3-8B has 32 heads in each of 36 layers. | [1.4](book/part-01-how-llms-work/1.4-attention.md) |
| GQA / MQA | Grouped-query attention: groups of query heads share one key/value head (Qwen3-8B: 32 query, 8 KV heads). Multi-query attention shares a single KV head. Both shrink the KV cache, not the n² compute. | [1.4](book/part-01-how-llms-work/1.4-attention.md) |
| FlashAttention | An exact attention kernel that computes in tiles in fast on-chip memory and never stores the full `n × n` matrix: memory becomes linear in n, compute stays quadratic. | [1.4](book/part-01-how-llms-work/1.4-attention.md) |
| Residual stream | The per-position vector that runs from the embedding to the unembedding. Each attention and MLP sub-layer reads a normalized copy and adds its output back (`x = x + f(Norm(x))`). | [1.5](book/part-01-how-llms-work/1.5-transformer-block.md) |
| RMSNorm / pre-norm | RMSNorm rescales a vector by its root mean square times a learned scale (LayerNorm without mean subtraction). Pre-norm applies it to each sub-layer's input, leaving the residual path as pure additions. | [1.5](book/part-01-how-llms-work/1.5-transformer-block.md) |
| MLP (feed-forward layer) | The per-position network in each block: up-project to `d_ff`, nonlinearity, down-project. Holds about two-thirds of a dense model's parameters. | [1.5](book/part-01-how-llms-work/1.5-transformer-block.md) |
| SwiGLU | The gated MLP used by modern LLMs: `W_down · (SiLU(W_gate·x) ⊙ W_up·x)`. Three matrices instead of two. | [1.5](book/part-01-how-llms-work/1.5-transformer-block.md) |
| QK-Norm | An RMSNorm applied to each query and key head before RoPE, for training stability. Used by Qwen3. | [1.5](book/part-01-how-llms-work/1.5-transformer-block.md) |
| LM head | The final unembedding layer (`lm_head`) that maps the last hidden vector to one logit per vocabulary entry. | [1.5](book/part-01-how-llms-work/1.5-transformer-block.md) |

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
| Reward model | A model (usually the SFT model with a scalar head) trained on preference pairs to score a prompt and response; the proxy RLHF optimizes against. Loss: `−log σ(r_chosen − r_rejected)`. | [1.7](book/part-01-how-llms-work/1.7-post-training.md) |
| Preference pair | A prompt with a chosen and a rejected response. The data for reward models and DPO. | [1.7](book/part-01-how-llms-work/1.7-post-training.md) |
| PPO | Proximal policy optimization: the policy-gradient algorithm that clips each update; used in classic RLHF. | [1.7](book/part-01-how-llms-work/1.7-post-training.md) |
| KL penalty | A charge for how far the tuned model drifts from a reference model, so it can't exploit the reward model's blind spots. DPO's β plays the same role. | [1.7](book/part-01-how-llms-work/1.7-post-training.md) |
| Reward hacking | Optimizing a proxy reward until it rises while real quality falls. Source of verbosity and sycophancy. | [1.7](book/part-01-how-llms-work/1.7-post-training.md) |
| GRPO | Group relative policy optimization: samples a group of outputs per question and uses each output's reward minus the group mean (divided by the group std) as its advantage, so no value model is needed. Used to train DeepSeek-R1. | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| Advantage | How much better an output's reward is than a baseline. In GRPO the baseline is the group average, so an output that beats its siblings gets pushed up. | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| Cold-start data | A small set of long chain-of-thought examples used for SFT before reasoning RL, to make the early outputs readable and stable. | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| Sycophancy | Telling users what they want to hear, because preference data rewards agreement. | [1.7](book/part-01-how-llms-work/1.7-post-training.md) |
| Rejection sampling | Sampling many responses per prompt, keeping the reward model's best and fine-tuning on them. | [1.7](book/part-01-how-llms-work/1.7-post-training.md) |
| Constitutional AI / RLAIF | Training with AI-generated critiques and preference labels guided by written principles, instead of human labels. | [1.7](book/part-01-how-llms-work/1.7-post-training.md) |
| RLVR | Reinforcement learning with verifiable rewards (e.g. tests pass, the math answer is right). The main way reasoning models are trained. | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| Fine-tuning | Further training of an existing model on your own data. | [10.3](book/part-10-modifying-serving-models/10.3-lora-mlx.md) |
| LoRA | Low-rank adaptation: fine-tuning small added matrices instead of all weights. Cheap enough for a Mac. | [10.3](book/part-10-modifying-serving-models/10.3-lora-mlx.md) |
| Distillation | Training a smaller model to imitate a larger one's outputs. | [10.9](book/part-10-modifying-serving-models/10.9-distillation-synthetic-data.md) |
| Open-weight model | A model whose trained weights are published for anyone to download and run (Qwen, DeepSeek, Mistral). The training data and code usually aren't. | [0.1](book/part-00-catch-up/0.1-what-changed.md) |
| Cross-entropy loss | The pretraining loss: −log of the probability the model gave the real next token, averaged over every position. Measured in nats. | [1.6](book/part-01-how-llms-work/1.6-pretraining.md) |
| Perplexity | `exp(loss)`: the effective number of tokens the model is choosing between. Only comparable across models with the same tokenizer and evaluation text. | [1.6](book/part-01-how-llms-work/1.6-pretraining.md) |
| Training compute (`C ≈ 6ND`) | FLOPs to train a model of N parameters on D tokens: about 2N per token forward, 4N backward. | [1.6](book/part-01-how-llms-work/1.6-pretraining.md) |
| Chinchilla-optimal | The compute-optimal split of a training budget: scale parameters and tokens equally, about 20 tokens per parameter (Hoffmann et al., 2022). | [1.6](book/part-01-how-llms-work/1.6-pretraining.md) |
| Overtraining | Training a model on far more tokens than Chinchilla-optimal so a smaller model reaches a given quality. Costs more to train, less to serve. | [1.6](book/part-01-how-llms-work/1.6-pretraining.md) |
| Deduplication | Removing repeated URLs, documents (MinHash near-duplicates) and lines from training data. Reduces memorization and wasted compute. | [1.6](book/part-01-how-llms-work/1.6-pretraining.md) |
| Data mixture | The proportions of web, code, math, multilingual and other data in a pretraining run, often changed between training stages. | [1.6](book/part-01-how-llms-work/1.6-pretraining.md) |

## Inference

| Term | Meaning | Chapter |
|---|---|---|
| Inference server | Runs a model and exposes an API (Ollama, LM Studio, llama.cpp, MLX). | [0.2](book/part-00-catch-up/0.2-the-stack.md) |
| Prefill / decode | Prefill processes the whole prompt in parallel; decode generates output one token at a time. That's why prompt tok/s ≫ output tok/s. | [1.1](book/part-01-how-llms-work/1.1-next-token-prediction.md) |
| Memory-bound decode | Each decode step streams all (active) weights from memory, so output speed is capped at roughly memory bandwidth ÷ model size. | [1.1](book/part-01-how-llms-work/1.1-next-token-prediction.md) |
| Greedy decoding | Always picking the most likely next token (temperature 0). Deterministic, but prone to repetition. | [1.8](book/part-01-how-llms-work/1.8-sampling.md) |
| Temperature | Scales the logits before sampling: low is more deterministic, high is more varied. | [1.8](book/part-01-how-llms-work/1.8-sampling.md) |
| Top-p / top-k / min-p | Sampling filters that drop unlikely tokens before picking one. | [1.8](book/part-01-how-llms-work/1.8-sampling.md) |
| Truncation sampling | Deleting unlikely candidates before the random draw, then renormalizing: top-k keeps a fixed count, top-p a fixed probability mass, min-p everything above a fraction of the top token's probability. | [1.8](book/part-01-how-llms-work/1.8-sampling.md) |
| Repetition penalty | Lowering the score of tokens that already appeared, to break loops. Multiplicative (`repeat_penalty`, from CTRL) or additive (presence / frequency penalty). Harmful for code and JSON, which repeat by design. | [1.8](book/part-01-how-llms-work/1.8-sampling.md) |
| Presence / frequency penalty | Additive repetition penalties (OpenAI-style, −2 to 2): presence subtracts a flat amount once a token has appeared, frequency subtracts more with every use. | [1.8](book/part-01-how-llms-work/1.8-sampling.md) |
| Seed | The starting value of the sampler's random number generator. Same logits + same seed = same choices, which is why seeds only give reproducible output when the logits are bit-identical. | [1.8](book/part-01-how-llms-work/1.8-sampling.md) |
| Batch invariance | A kernel property: the result for one request doesn't depend on how many other requests are batched with it. Most inference kernels lack it, which is the main reason hosted LLMs aren't deterministic even at temperature 0. | [1.8](book/part-01-how-llms-work/1.8-sampling.md) |
| Reasoning model | A model trained to produce a chain of thought ("thinking tokens") before its answer. | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| Test-time compute | Spending more tokens or samples at inference to get better answers. | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| Inference scaling | Another name for test-time compute: improving answers by spending more compute at inference instead of training. | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| Chain of thought (CoT) | Intermediate reasoning tokens written before the answer, used as scratch space. Prompted ('think step by step') or trained (reasoning models). | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| Thinking tokens | The chain-of-thought output of a reasoning model. Billed and timed as output tokens, even when the API shows only a summary. | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| Thinking budget / effort | Limits on how much a model thinks: a token cap (Qwen3 cuts thinking off and forces an answer) or an effort level (Claude's adaptive thinking). | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| Hybrid thinking model | One set of weights that can answer with or without thinking, switched by the chat template or a request parameter (Qwen3 `think`/`/no_think`). | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| Self-consistency / majority vote | Parallel test-time compute: sample several reasoning paths and return the most common final answer. | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| Best-of-N | Sample N answers and keep the one a verifier or reward model scores highest. | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| Overthinking | A reasoning model spending many tokens on a question it already answered correctly early on, with little or no accuracy gain. | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| CoT faithfulness | Whether the written chain of thought reflects what actually drove the answer. Studies find models often omit factors they used. | [1.10](book/part-01-how-llms-work/1.10-reasoning-models.md) |
| Quantization | Storing weights in fewer bits (e.g. 4 or 8) to save memory and gain speed, at some quality cost. | [1.12](book/part-01-how-llms-work/1.12-quantization.md) |
| GGUF | The model file format used by llama.cpp and Ollama, usually holding quantized weights (Q4_K_M, Q8_0...). | [10.2](book/part-10-modifying-serving-models/10.2-hf-to-gguf.md) |
| TTFT | Time to first token: how long until streaming output starts. | [2.2](book/part-02-programming-with-llms/2.2-streaming.md) |
| Speculative decoding | A small draft model proposes tokens that the big model verifies in one pass, speeding up generation. | [10.8](book/part-10-modifying-serving-models/10.8-serving-optimizations.md) |
| Inference engine | The code that runs the forward pass on hardware (llama.cpp, MLX, vLLM). Owns speed and memory, not messages or HTTP. | [0.2](book/part-00-catch-up/0.2-the-stack.md) |
| Keep-alive | How long Ollama keeps a model loaded in memory after a request (`keep_alive`, `OLLAMA_KEEP_ALIVE`). Faster next call, but the memory stays taken. | [0.4](book/part-00-catch-up/0.4-your-lab.md) |
| KV cache size per token | `2 × layers × KV heads × head dim × bytes per number`. Qwen3-14B at 16-bit: 160 KiB per token. | [1.9](book/part-01-how-llms-work/1.9-kv-cache-context-window.md) |
| `num_ctx` | Ollama's context length setting. The runtime reserves the KV cache for the whole window at load time, so a larger value uses more memory even for a short prompt. | [1.9](book/part-01-how-llms-work/1.9-kv-cache-context-window.md) |
| KV cache quantization | Storing the cache at lower precision (`OLLAMA_KV_CACHE_TYPE`: `f16`, `q8_0`, `q4_0`) to cut its memory; needs Flash Attention. | [1.9](book/part-01-how-llms-work/1.9-kv-cache-context-window.md) |
| Lost in the middle | Models use information at the start or end of a long context better than information in the middle. | [1.9](book/part-01-how-llms-work/1.9-kv-cache-context-window.md) |
| Needle in a haystack | A test that hides one fact in a long document and asks for it. Near-perfect scores say little about real long-context work. | [1.9](book/part-01-how-llms-work/1.9-kv-cache-context-window.md) |
| PagedAttention | Manages the KV cache in fixed-size blocks, like OS virtual memory, to avoid fragmentation and allow sharing across requests (vLLM). | [1.9](book/part-01-how-llms-work/1.9-kv-cache-context-window.md) |

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
| Bi-encoder vs. cross-encoder | A bi-encoder (embedding model) embeds each text once and compares vectors: fast, used for search. A cross-encoder reads the query and document together: slower but more accurate, used for reranking. | [1.3](book/part-01-how-llms-work/1.3-embeddings.md) |
| Matryoshka embeddings | Embeddings trained so the first dimensions carry the most information, so a vector can be truncated (e.g. 1024 → 128) for cheaper storage and search at some cost in quality. | [1.3](book/part-01-how-llms-work/1.3-embeddings.md) |
| RAG | Retrieval-augmented generation: fetch relevant documents and put them in the prompt. | [2.9](book/part-02-programming-with-llms/2.9-rag-fundamentals.md) |
| Hybrid search | Combining keyword search (BM25) with vector search. | [2.10](book/part-02-programming-with-llms/2.10-better-retrieval.md) |
| Reranker | A model that re-scores retrieved results for relevance before they go into the prompt. | [2.10](book/part-02-programming-with-llms/2.10-better-retrieval.md) |
| Router / gateway | One endpoint in front of many models (LiteLLM, OpenRouter). | [9.2](book/part-09-model-landscape-cost/9.2-openrouter-litellm.md) |
| Native API | A provider's or server's own API shape (Anthropic Messages, Ollama `/api/chat`), exposing features a compatible API can't carry. | [0.2](book/part-00-catch-up/0.2-the-stack.md) |
| Token usage | The token counts a response reports (input, output, and breakdowns such as cached or thinking tokens). Multiply by per-MTok prices to get cost. | [0.4](book/part-00-catch-up/0.4-your-lab.md) |
| Cost ledger | `costs.md`: one row per paid run (tokens, cost, actual or estimate), reconciled against the provider dashboards. | [0.4](book/part-00-catch-up/0.4-your-lab.md) |

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
| Agentic AI Foundation (AAIF) | A Linux Foundation fund, formed 2025-12-09, that governs open agent standards: MCP, AGENTS.md, goose, and since 2026 A2A and Agent Skills. | [0.3](book/part-00-catch-up/0.3-standards-and-orgs.md) |
| MCP host / client / server | The AI application (host) creates one MCP client per connection to an MCP server, which provides tools, resources and prompts. | [0.3](book/part-00-catch-up/0.3-standards-and-orgs.md) |
| MCP primitives | What an MCP server offers: tools (model-invoked functions), resources (context data) and prompts (user templates). | [0.3](book/part-00-catch-up/0.3-standards-and-orgs.md) |
| SEP | Specification Enhancement Proposal: how changes to the MCP spec are proposed and decided. | [0.3](book/part-00-catch-up/0.3-standards-and-orgs.md) |
| Agent Card | A2A's JSON self-description of an agent (identity, skills, endpoint, auth), served at `/.well-known/agent-card.json` for discovery. | [0.3](book/part-00-catch-up/0.3-standards-and-orgs.md) |
| Progressive disclosure | Loading only a skill's name and description up front, and its full instructions when a task needs them. | [0.3](book/part-00-catch-up/0.3-standards-and-orgs.md) |

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
| Background agent | An agent that runs unattended in a cloud sandbox, started from an issue, chat or CI event, and returns a pull request or report. | [7.4](book/part-07-ai-native-development/7.4-ci-background-agents.md) |

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
