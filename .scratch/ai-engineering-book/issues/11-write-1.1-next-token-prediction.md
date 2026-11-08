# 11 — Write chapter 1.1: Next-token prediction: the big picture

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-01-how-llms-work/1.1-next-token-prediction.md`
- It has no prerequisite chapters.
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-01-how-llms-work/1.1-next-token-prediction.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Describe the generation loop end to end: text → tokens → logits → sample → append
- Name the parts that later chapters zoom into
- Connect the loop to what you observed in experiment 00 (tok/s, thinking tokens)

**The explanation must cover**

- Autoregressive generation
- Logits and probability distributions
- Prefill vs decode (why prompt tok/s ≠ output tok/s)
- A map of Part 1

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- 3Blue1Brown, neural networks / transformer series, chapter "But what is a GPT?" (TODO: find URL)
- Karpathy, "Intro to Large Language Models" talk (TODO: find URL)

**Practice brief**

In TypeScript, call Ollama with logprobs enabled (if supported; otherwise an OpenRouter model that returns logprobs) and print the top-5 candidate tokens at each step for a short completion.

Where: `experiments/NN-logprobs/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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

## Comments

- 2026-11-08 (agent): done. Ollama 0.40.14 returns `logprobs` / `top_logprobs` (max 20) natively, so the practice uses local Ollama, not OpenRouter. Experiment folder `experiments/03-logprobs/` with a README skeleton; the learner writes `logprobs.ts`. The planned Karpathy "Intro to LLMs" talk is kept as optional; his 2025 "Deep Dive" (14:27–42:52) is the essential watch instead. `needs` unchanged, so no `npm run map`.
