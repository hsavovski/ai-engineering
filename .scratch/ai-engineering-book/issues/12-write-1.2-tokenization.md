# 12 — Write chapter 1.2: Tokens and tokenization

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-01-how-llms-work/1.2-tokenization.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.1-next-token-prediction.md` (1.1 Next-token prediction: the big picture)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-01-how-llms-work/1.2-tokenization.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain BPE and train a tiny one by hand
- Predict why some strings cost more tokens
- Count tokens for real prompts across two tokenizers

**The explanation must cover**

- Why not characters or words
- Byte-pair encoding step by step
- Special tokens and chat templates
- Tokenizer differences between model families
- Token-level failure modes

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Karpathy, "Let's build the GPT Tokenizer" (video, TODO: find URL)
- Raschka, *Build an LLM From Scratch*, ch. 2, https://github.com/rasbt/LLMs-from-scratch (unverified)
- Hugging Face LLM course, tokenizers chapter, https://huggingface.co/learn

**Practice brief**

Write a tiny BPE trainer in TypeScript on a small text, then compare its tokens with a real tokenizer (e.g. via a JS tokenizer package) on English, Bulgarian/German text and code. Optionally add a Vue demo component to this chapter.

Where: `experiments/NN-tokenizer/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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
- A dated `PROGRESS.md` log line
- Committed
