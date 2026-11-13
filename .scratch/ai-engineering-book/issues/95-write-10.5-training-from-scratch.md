# 95 — Write chapter 10.5: Training from scratch

Status: resolved
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

Where: `experiments/13-tiny-gpt/`: a standalone experiment (number assigned up front so parallel tasks don't collide). Shared with issue 23: whichever runs first creates the folder, later ones add to it.

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 10.5` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
