# 38 – LoRA fine-tune with mlx-lm

## What I tried

Can a LoRA adapter trained on a few hundred of my own commits make a 1.7B Qwen write commit messages in my style, and does it beat the base model on a held-out test set?

Steps and acceptance check: [chapter 10.3](../../book/part-10-modifying-serving-models/10.3-lora-mlx.md#practice).

| File | Who writes it | What it does |
|---|---|---|
| `prepare_data.py` | given, with TODOs for the data-quality rules | `git log` -> `data/{train,valid,test}.jsonl` in chat format |
| `lora_config.yaml` | given (read every line) | all training settings |
| `compare.py` | **me** (`score()` and the aggregation) | base vs. tuned generations on the test set |

```bash
cd experiments/38-lora
uv run prepare_data.py ~/code/repo-a ~/code/repo-b      # once
uv run mlx_lm.lora --config lora_config.yaml            # train
uv run mlx_lm.lora --model Qwen/Qwen3-1.7B --adapter-path adapters --data data --test   # test loss
uv run compare.py --adapter-path adapters
```

Free: everything runs locally (log it in `costs.md` as EUR 0 if you keep a line per experiment).

## What happened

<!-- Fill in after running. -->

### Predictions (before running)

<!-- Base-model test loss, tuned test loss, which of your metrics moves most, what the tuned model will still get wrong. -->

### Dataset

| Item | Value |
|---|---|
| Repos, author filter | |
| Commits after filtering (train / valid / test) | |
| What I dropped and why | |

### Training run

| Setting | Value |
|---|---|
| Base model | |
| Trainable parameters (printed at start) | |
| rank / scale / num_layers / lr | |
| Iterations, batch size, epochs | |
| Peak memory, time | |
| Validation loss at iteration 1 / best / last | |

### Results on the test set

| | Base | Tuned |
|---|---|---|
| Test loss / perplexity | | |
| Metric 1: | | |
| Metric 2: | | |

## Why

<!-- Did validation loss and your metrics agree? What did the base model get wrong that the tuned one fixed, and the reverse? Would a three-example prompt have done the same? -->

## 10.4: merge and serve

Steps and acceptance check: [chapter 10.4](../../book/part-10-modifying-serving-models/10.4-merge-and-serve.md#practice). Inputs: your `adapters/`, `data/` and `compare.py` from 10.3, plus the llama.cpp clone from experiment 37. Keep `fused_model/` and `llama.cpp/` out of git (add them to a `.gitignore`; `*.gguf` and `*.safetensors` are already ignored at the repo root).

```bash
uv run mlx_lm.fuse --model Qwen/Qwen3-1.7B --adapter-path adapters --save-path fused_model
# then: convert_hf_to_gguf.py -> llama-quantize -> Modelfile -> ollama create (see the chapter)
```

Free: local only, no paid API calls.

### Predictions (before running)

<!-- Fused size; fused vs. unfused metrics (exact / near / worse); does Q4_K_M keep your style rules? A reason for each. -->

### Merge check (step 3)

| Prompts with identical text, fused vs. unfused (of 10) | First difference looks like |
|---|---|
| | |

### Template parity (step 7)

| Prompt path | Output (first line) | Same as the HF-rendered raw prompt? |
|---|---|---|
| raw, HF-rendered, thinking off | | |
| /api/chat, `think: false` | | |
| /api/chat, `think` not set | | |

### Four stages (step 8)

Sample size: ___ test examples. Differences smaller than ___ I count as noise.

| Model | Size | Metric 1 | Metric 2 | Notes |
|---|---|---|---|---|
| stock `qwen3:1.7b` (floor) | | | | |
| tuned, unfused (mlx-lm) | | | | |
| fused bf16 (mlx-lm) | | | | |
| Q8_0 in Ollama | | | | |
| Q4_K_M in Ollama | | | | |

### Why

<!-- Which step cost the most? Did it match the prediction? What did the fine-tune keep and lose (step 10)? -->

## 10.9: synthetic labels from a paid teacher

Steps and acceptance check: [chapter 10.9](../../book/part-10-modifying-serving-models/10.9-distillation-synthetic-data.md#practice). Inputs: your `data/` (especially the frozen `test.jsonl`), `lora_config.yaml` and `compare.py` from 10.3. You write `generate.ts` and `filter.ts` (TypeScript); training is the same `mlx_lm.lora` command with `--adapter-path adapters_synth`. Keep `synthetic/` and `data_synth/` out of git if they contain private diffs.

Paid: the teacher's tokens. Log the actual spend from the provider's dashboard in `costs.md`.

### Teacher and terms

| Item | Value |
|---|---|
| Teacher, model ID, date | |
| Terms clause checked (link, section) | |
| Repos I am allowed to send | |
| SHA-256 of `data/test.jsonl` (must equal the 10.3 one) | |

### Predictions (before running)

<!-- Student on teacher labels vs. real labels; what the teacher will do differently; which filter rejects most; estimated cost. -->

### Generation and filtering

| Stage | Rows | Notes |
|---|---|---|
| Training diffs sent | | |
| Raw teacher outputs | | |
| Removed by rule 1: | | |
| Removed by rule 2: | | |
| Removed as exact / near duplicates | | |
| Kept | | |
| Tokens in / out, cost, cost per kept row | | |

### Comparison on the real test set

| | Test loss | Metric 1 | Metric 2 |
|---|---|---|---|
| Base | | | |
| Base + good prompt | | | |
| Student on my real messages (10.3) | | | |
| Student on filtered teacher messages | | | |

### Why

<!-- What did the teacher get right that I didn't, and the reverse? Did filtering matter? Worth the cost against writing more labels myself? Where do the terms stop me? -->
