# 156 — Fact-check chapter 10.5

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-10-modifying-serving-models/10.5-training-from-scratch.md`

## Goal

Fact-check chapter 10.5 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 10.5".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-13: chapter 10.5 "Training from scratch" written (core): tokenizer choice (vocab size vs embedding/head parameters vs sequence length, byte-level BPE trained on train split, per-token loss not comparable, bits per byte), data preparation at scale (FineWeb, split by document, uint16 shards, TinyStories as laptop corpus), training efficiency on MPS (batch in tokens, gradient accumulation, warmup+cosine, weight decay, tied embeddings, bf16/compile as things to measure), evaluation during training (val loss + bpb, fixed-prompt samples, benchmarks), compute estimates (`6ND` calibrated on the 1.13 reference run ≈2.6 TFLOP/s, 77 min prediction for the new run, GPT-2-small on 10B tokens ≈33 days here). Practice extends `experiments/13-tiny-gpt/` with `prepare_bpe.py` (starter, 4 TODOs; `tokenizers` + `numpy` added to pyproject, `data_bpe/` and `out_bpe/` gitignored) and a README "Part 2" section; the learner writes `train_bpe.py`/`sample_bpe.py`. Opened (HTTP 200 and content read): build-nanogpt README, `train_gpt2.py`, `fineweb.py`, nanoGPT README, Raschka ch05 README, TinyStories dataset card + arXiv abstract, FineWeb dataset card + arXiv abstract, tokenizers quicktour (headings only), YouTube oEmbed title for the GPT-2 lecture. Verified by running: the HF `tokenizers` byte-level BPE snippet used in the `prepare_bpe.py` TODO text (on a toy corpus). NOT verified/run: `prepare_bpe.py` itself was only syntax-checked (its TODOs are unfilled; torch/model.py skeleton not run, nothing trained); the GPT-2 lecture length "~4 h" is from memory; the 2.6 TFLOP/s calibration and the 77-minute/33-day predictions are derived from 1.13's own reference-run figures (10.8M params, 3,000 steps, ~20 min), not re-measured; the build-nanogpt README's "~1hr and ~$10" is quoted, not checked against current GPU prices; bf16 autocast, `torch.compile` and `scaled_dot_product_attention` on MPS were not tested (the chapter tells the learner to measure); the "5–10%" attention-FLOPs share is my arithmetic from Kaplan's formula; TinyStoriesV2 file sizes (~2.2 GB / ~22 MB) from HTTP Content-Length; FineWeb-Edu vs FineWeb sample naming taken from `fineweb.py` only.

## Comments
