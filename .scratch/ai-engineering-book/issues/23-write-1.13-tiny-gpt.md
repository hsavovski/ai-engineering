# 23 — Write chapter 1.13: Build a tiny GPT

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-01-how-llms-work/1.13-tiny-gpt.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.5-transformer-block.md` (1.5 The transformer block)
  - `book/part-01-how-llms-work/1.6-pretraining.md` (1.6 Pretraining and scaling laws)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-01-how-llms-work/1.13-tiny-gpt.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Implement a tiny decoder-only transformer in PyTorch
- Train it on a small text corpus on the M4 (MPS)
- Sample from it and relate loss to output quality

**The explanation must cover**

- Data loading and batching
- Model code: embeddings, blocks, head
- Training loop and loss curves
- Sampling
- Running on Apple Silicon (MPS)

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Karpathy, "Let's build GPT: from scratch, in code, spelled out" (video, TODO: find URL)
- Karpathy, Zero to Hero, https://karpathy.ai/zero-to-hero.html (unverified)
- Raschka, *Build an LLM From Scratch*, ch. 4–5 (unverified)

**Practice brief**

Python with `uv`: heavily commented starter code (data loader and training loop skeleton), with the model left for the learner. Train on a small corpus, plot loss, sample text. Part 10.5 builds on this.

Where: `experiments/NN-tiny-gpt/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 1.13` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
