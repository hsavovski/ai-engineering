# 13 – Tiny GPT

## What I tried

Can I write a decoder-only transformer from scratch in PyTorch, train it on Shakespeare on the M4's GPU (MPS), and connect the loss number to the quality of the text it produces?

Steps and acceptance check: [chapter 1.13](../../book/part-01-how-llms-work/1.13-tiny-gpt.md#practice).

| File | Who writes it | What it does |
|---|---|---|
| `prepare.py` | given | downloads the corpus, builds a character vocabulary, writes `data/*.bin` |
| `model.py` | **me** | `GPTConfig` and `GPT`: embeddings, blocks, head |
| `train.py` | given (read it all) | batching, AdamW loop, evaluation, best checkpoint, `out/losses.json` |
| `sample.py` | `generate()` is **mine** | loads the checkpoint, samples with temperature and top-k |
| `plot.py` | given | `out/loss.png` from `out/losses.json` |

```bash
cd experiments/13-tiny-gpt
uv run prepare.py                                  # once
uv run train.py                                    # needs a working model.py
uv run plot.py
uv run sample.py "ROMEO:" --temperature 0.8 --tokens 500
```

Free: everything runs locally.

## What happened

<!-- Fill in after running. -->

### Predictions (before running)

<!-- Loss at step 0; what the text looks like at loss 2.3, 1.8, 1.5. -->

### Checks

- Parameter count by hand vs. `count_parameters()`:
- Causal-mask test (change a later token, earlier logits unchanged):
- Overfit-one-batch result:

### Training run

| Setting | Value |
|---|---|
| Device | |
| Parameters | |
| Steps, batch, block size | |
| Time per step (MPS / CPU) | |
| Loss at step 0 (compare `ln 65 ≈ 4.17`) | |
| Best validation loss, at step | |
| Final train vs. validation loss | |

<!-- Embed out/loss.png (copy it next to this file) or paste the curve values. -->

### Samples

| Checkpoint (step, val loss) | Temperature | Sample |
|---|---|---|
| | | |

### One-variable experiments

| Change | Prediction | Val loss | Notes |
|---|---|---|---|
| dropout 0 vs. 0.2 | | | |
| `n_layer` 2 vs. 6 | | | |
| learning rate 1e-3 vs. 3e-4 | | | |
| `block_size` 64 vs. 256 | | | |

## Why

<!-- What loss gave the first readable words? Did it overfit, and at which step? What did temperature change at the same loss? What would a KV cache save in sample.py? -->
