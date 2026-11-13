# 106 — Fact-check chapter 10.4

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-10-modifying-serving-models/10.4-merge-and-serve.md`

## Goal

Fact-check chapter 10.4 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 10.4".

## Flagged by the writer (check these first)

From `fact-check-backlog.md`:

- **The pipeline was never run.** The attempt to clone and build llama.cpp was denied by the auto-mode classifier and not retried. Fuse, convert, quantize and import are documented from docs and source only. The learner should run it, or someone should, before the chapter is trusted.
- "mlx-lm's adapter layout (`lora_a`/`lora_b`, `adapters.safetensors`) differs from the PEFT layout llama.cpp's LoRA converter expects, so serving the adapter separately is hard" is the writer's reading of the source and is flagged as untested.
- `mlx_lm.fuse --export-gguf` supports only llama, mistral and mixtral model types. Re-confirm against the current `fuse.py`, since this decides the whole Qwen3 route.
- "The delta is cast to the weight dtype before it is added" and "a QLoRA base is re-quantized unless `--dequantize` is passed": re-confirm in `fuse.py` / `utils.py`.
- "Q4 may erase a small LoRA delta" is a hypothesis, marked as one. Keep it that way unless measured.
- Ollama's current docs no longer document `ADAPTER`, so the chapter cites the v0.5.7 `modelfile.md` tag (as 10.1 does). Check the tag link still works.
- The Qwen3 `think` template branch was read from the local `ollama show --modelfile qwen3:14b` output, not from a public source.

The writer's BUILD-LOG notes:

- 2026-11-10: chapter 10.4 "Merge and serve in Ollama" written: fuse vs serving adapters (mlx-lm adapter format is not the PEFT format llama.cpp's LoRA converter reads, from source; Ollama ADAPTER undocumented in current docs), `mlx_lm.fuse` source walk-through (dtype cast of the delta, QLoRA re-quantization and `--dequantize`, `--export-gguf` limited to llama/mistral/mixtral), conversion and quantization of a fine-tune with a four-stage measurement plan, Ollama template parity (`raw: true` check, Qwen3 `think` branch observed in the local Modelfile), calling it from a harness; practice extends experiment 38 (README sections added, no solution code); 8 resource rows and 5 glossary terms added (issue 94). Pipeline was not run (building/cloning llama.cpp was denied in this session): fuse, converter, quantizer and Ollama steps follow docs and source only.

## Comments
