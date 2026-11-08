# 18 — Write chapter 1.8: Sampling and temperature

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-01-how-llms-work/1.8-sampling.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-01-how-llms-work/1.1-next-token-prediction.md` (1.1 Next-token prediction: the big picture)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-01-how-llms-work/1.8-sampling.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain greedy, temperature, top-k, top-p and min-p
- Predict the effect of each setting
- Choose settings for code, extraction and creative tasks

**The explanation must cover**

- Softmax with temperature
- Truncation samplers: top-k, top-p, min-p
- Repetition penalties
- Seeds and determinism (and why it isn't fully deterministic)
- Provider defaults and which ones can be changed

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Ollama API docs, options (TODO: find URL)
- Chip Huyen, *AI Engineering*, ch. 2, sampling section

**Practice brief**

Run the same prompt 10× at temperatures 0, 0.7, 1.2 with qwen3:14b and measure output diversity (distinct answers, length). Optionally build the temperature-slider Vue demo for this chapter.

Where: `experiments/NN-temperature/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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

- 2026-11-08 (agent): done. Big finding while checking provider defaults: Claude API version `2026-10-21` rejects `temperature`/`top_p`/`top_k` with a 400, and Claude 4.7+ only sample at defaults; the chapter covers this with the migration-guide sources. `ollama show qwen3:14b --parameters` shows the model ships Qwen's thinking-mode settings (temp 0.6, top_k 20, top_p 0.95), so the practice starts by recording them. Ollama's `repeat_penalty` default is now 1.0 (disabled). Planned resources: the Ollama options URL is the Modelfile parameter table; Chip Huyen's ch. 2 is kept as optional, with her free sampling article as the essential read. Experiment folder is `experiments/05-temperature/` (04 left for issue 12's tokenizer experiment, which runs in parallel). `needs` unchanged, so no `npm run map`.
