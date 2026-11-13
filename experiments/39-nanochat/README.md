# 39 – nanochat

## What I tried

Run nanochat's smallest configuration (`runs/runcpu.sh`, a depth-6 model) on the Mac if it works, or read it through if not, and map every stage to the Part 1 chapter behind it. Predict the cost first.

Steps and acceptance check: [chapter 10.6](../../book/part-10-modifying-serving-models/10.6-nanochat.md#practice).

| File | Who writes it | What it does |
|---|---|---|
| `predict.py` | given, with TODOs | model size, FLOPs, time and cost predictions before the run |
| `nanochat/` | cloned, ignored by git | `git clone https://github.com/karpathy/nanochat` here |

```bash
cd experiments/39-nanochat
git clone https://github.com/karpathy/nanochat
git -C nanochat rev-parse HEAD        # write the commit below
python predict.py                      # step 2, before running anything
cd nanochat && uv sync --extra cpu     # then follow runs/runcpu.sh command by command
```

Free if you stay on the Mac. If you rent a GPU, log the amount in `costs.md`.

## What happened

<!-- Fill in after running. -->

Commit of `karpathy/nanochat` I used: ___

### Stage map (step 1)

| Stage | Script | Library file it leans on most | Part 1 chapter |
|---|---|---|---|
| Tokenizer | | | |
| Pretraining | | | |
| Base evaluation | | | |
| SFT | | | |
| RL | | | |
| Inference | | | |

### Predictions (before running)

| Item | Prediction | Measured |
|---|---|---|
| Width, scaling parameters | | |
| Training FLOPs, time on this Mac | | |
| Tokens per second | | |
| `val_bpb` | | |

### Run log

| Step | Command (shortened if I changed settings) | Time | Note |
|---|---|---|---|
| tokenizer | | | compression ratio: |
| pretrain | | | MFU: |
| base eval | | | |
| SFT | | | |

### Samples: base vs. SFT

| Prompt | Base | SFT |
|---|---|---|
| What is the capital of France? | | |
| a short story | | |
| Who are you? | | |

### Cost of the real thing (step 9)

| Item | Value |
|---|---|
| 8×H100 node price per hour, date, source | |
| Speedrun hours (README) and cost | |
| This run's cost | |

## Why

<!-- What did SFT change in kind? Where did your prediction miss, and by how much? Which Part 1 chapter did the code make clearer? -->
