# 158 — Fact-check chapter 10.7

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-10-modifying-serving-models/10.7-inference-engines.md`

## Goal

Fact-check chapter 10.7 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 10.7".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-13: chapter 10.7 "Inference engines: llama.cpp, MLX, vLLM" written (deeper): what an engine does (Mermaid of conversion paths), llama.cpp and GGUF (backends, mmap/single-file, `llama-server` parallel slots and continuous batching), MLX and mlx-lm (unified memory, HF-style safetensors folder format, `convert -q` options, long-prompt tools, server), vLLM and PagedAttention (KV cache waste, block table, sharing, with a worked example from 1.9's 160 KiB/token), single-user vs server optimization table, benchmarking methodology table (pp/tg, matched variables, warm-up, interleaving, memory gauges), a choosing table; practice is `experiments/40-mlx-vs-gguf/` (README skeleton only; learner writes `bench.ts`; qwen3:8b Q4_K_M in Ollama vs mlx-community/Qwen3-8B-4bit); 5 check questions, 8 resource rows, 10 glossary terms (issue 97). Opened and read via curl 2026-11-13 (HTTP 200): llama.cpp README, llama-bench README, llama-server README (flag table only), GGUF spec (design goals), MLX README, MLX unified-memory page, mlx-lm README, SERVER.md, `benchmark.py`, `convert.py` (argparse only), vLLM blog post (PagedAttention section), arXiv 2309.06180 abstract page, vLLM docs home, vllm-metal repo page, Ollama README and FAQ (grepped lines), HF Hub API file lists for mlx-community/Qwen3-8B-4bit/-8bit and Qwen/Qwen3-8B-GGUF. UNVERIFIED: the full PagedAttention paper body was not read (abstract only; the optional resource says so); the vLLM blog's 24x/3.5x/60-80%/<4%/55% figures are quoted from the post, not reproduced; mlx-lm default quantization group size/bits were not found (chapter tells the learner to read `--help`); the 16-token block size, the 40 GiB GPU and the memory-bandwidth decode ceiling `tokens/s ≲ bandwidth ÷ bytes` are my own illustration/reasoning and labelled as such; "heat changes clocks" is my reasoning; the vLLM-on-Mac claim rests on the vllm-metal README only; the claim that vLLM loads GGUF is from the docs-home feature list; `mlx_lm.benchmark` as a CLI name comes from the README's mention, the script itself was read; the choosing table is my synthesis; reading times are estimates; the 1.12 bits-per-weight table was referenced, not re-read. Not run: nothing was executed (no mlx-lm install, no llama-bench, no benchmark, `bench.ts` not written by design); the practice steps, the Ollama `eval_count`/`eval_duration` field names and `memory_pressure` use were not tested; only check and build.

## Comments
