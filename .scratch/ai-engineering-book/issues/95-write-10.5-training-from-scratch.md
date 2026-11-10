# 95 — Write chapter 10.5: Training from scratch

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-10-modifying-serving-models/10.5-training-from-scratch.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.13-tiny-gpt.md` (1.13 Build a tiny GPT)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-10-modifying-serving-models/10.5-training-from-scratch.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Scale the tiny GPT with a real tokenizer and a bigger corpus
- Track loss and evaluate samples
- Estimate what a real pretraining run would cost

**The explanation must cover**

- Tokenizer choice
- Data preparation at scale
- Training efficiency on MPS
- Evaluation during training
- Compute estimates

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Karpathy, nanoGPT / build-nanogpt (TODO: find URL)
- Raschka, *Build an LLM From Scratch*, ch. 5 (unverified)

**Practice brief**

Extend the 1.13 experiment: BPE tokenizer, a larger dataset, longer training. Compare loss and samples with the 1.13 run.

Where: `experiments/NN-tiny-gpt/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- All six sections present: Why this matters, Explanation, resources at the point of use, Practice, Check questions, My understanding
- Every link opened and checked, and `last_verified` set
- Resources added to `book/resources.md`
- New terms added to `GLOSSARY.md`
- "My understanding" left empty
- If `needs` changed, `npm run map` re-run
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
