# 37 – From Hugging Face to GGUF

## What I tried

Convert `Qwen/Qwen3-1.7B` (safetensors) to a BF16 GGUF with llama.cpp, quantize it to Q8_0 and Q4_K_M, import both into Ollama, and compare size, memory, speed and answers against each other and against the stock `qwen3:1.7b`. Steps are in [chapter 10.2](../../book/part-10-modifying-serving-models/10.2-hf-to-gguf.md#practice). `pipeline.py` is a commented skeleton: fill in the `TODO`s.

```bash
cd experiments/37-gguf
uv run pipeline.py inspect    # step 1: read the safetensors header
```

Free: local only, no paid API calls.

## What happened

<!-- Fill in after running. -->

### Prediction (before measuring)

| File | Predicted size | Reasoning |
|---|---|---|
| BF16 GGUF | | |
| Q8_0 | | |
| Q4_K_M | | |

Q8_0 faster or slower than Q4_K_M in Ollama, and by how much:

### Measurements

| Model | File size | Actual bits per weight | `ollama ps` memory | Output tok/s (median of 3) |
|---|---|---|---|---|
| qwen3-1.7b-q8-local | | | | |
| qwen3-1.7b-q4-local | | | | |
| qwen3:1.7b (stock) | | | | |

### Template check

`ollama show --modelfile` for the imported models: was a `TEMPLATE` filled in? What did I change, if anything?

### The five prompts

| # | Prompt (kind) | Q8_0 local | Q4_K_M local | Stock | Better |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

## Why

<!-- Where did the numbers differ from the predictions, and what explains it? Does my Q4_K_M match the stock tag's size? Is Q8_0 worth its extra disk at this size? -->
