# 159 — Fact-check chapter 10.8

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-10-modifying-serving-models/10.8-serving-optimizations.md`

## Goal

Fact-check chapter 10.8 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 10.8".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-13: chapter 10.8 "Speculative decoding, batching, prefix caching" written (deeper): shared bandwidth-bound starting point, speculative decoding (Mermaid sequence, losslessness, worked acceptance-rate table, when it helps, variants table: draft model / EAGLE / MTP / n-gram), continuous batching (static vs continuous worked example, Orca), paged KV cache as its enabler, prefix caching (vLLM block-hash design, Mermaid, link to API cache pricing without numbers, pointing to 2.7 and Landscape), summary table; practice is `experiments/41-speculative/` (README skeleton; Qwen3-8B 4-bit target with Qwen3-0.6B draft in MLX or llama.cpp, code vs prose); 6 check questions, 5 resource rows, 10 glossary terms (issue 98). Opened and read via curl 2026-11-13 (HTTP 200): arXiv abstract pages 2211.17192, 2302.01318, 2412.19437; USENIX Orca page (abstract); vLLM speculative decoding page, MTP page (first lines), prefix-caching design page and Automatic Prefix Caching page (grepped); llama.cpp docs/speculative.md (first ~16 kB read, rest skipped), llama-server README (flag lines only); mlx-lm README and generate.py (grepped for draft); HF API file lists for mlx-community/Qwen3-0.6B-4bit, Qwen3-1.7B-4bit, Qwen/Qwen3-0.6B-GGUF, Qwen3-8B-GGUF. UNVERIFIED: no paper body was read (only abstracts), so the Leviathan/Chen speed-ups are the abstracts' claims; the acceptance table (1+α+…+αᵏ, draft cost 0.1) and the static-batching 37.5% example are my own arithmetic/illustration and labelled as such; the claims that batch size/bandwidth-bound reasoning breaks at large batches, that prefill chunking is an engine knob (option names not checked), and why cache entries are short-lived/priced (memory cost) are my interpretation; the vLLM MTP page was read only in its opening lines and the DeepSeek-V3 report only via its abstract (what MTP does at serving time was not checked); vLLM 'lossless' warning about FLy is from the page; the claim that Ollama shows faster second turns because of prefix caching and that `--cache-reuse` works as described were not tested; mlx-lm `--draft-model`/`--num-draft-tokens` seen in generate.py source only (CLI defaults and whether the installed release has them not checked); llama.cpp draft flag names (`-md`, `--spec-type`, `--spec-draft-n-max`) are from the master docs and may differ in the Homebrew release (0.9.0 per brew info); Anthropic prompt-caching docs page was fetched but not read for this chapter; reading times are estimates. Not run: nothing was executed (no mlx-lm or llama.cpp installed, no speculative measurement); only check and build.

## Comments
