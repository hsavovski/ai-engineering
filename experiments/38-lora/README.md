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
