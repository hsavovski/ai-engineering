# 32 — Write chapter 2.7: Prompt caching and cost

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-02-programming-with-llms/2.7-prompt-caching.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-02-programming-with-llms/2.1-calling-models.md` (2.1 Calling models: Anthropic, OpenAI-compatible, Ollama)
  - `book/part-01-how-llms-work/1.9-kv-cache-context-window.md` (1.9 The KV cache and the context window)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-02-programming-with-llms/2.7-prompt-caching.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain how prefix caching works and what breaks it
- Use cache controls in the Anthropic API and read cache usage fields
- Design prompts for cache hits

**The explanation must cover**

- KV-cache reuse across requests
- Explicit (Anthropic) vs automatic (OpenAI, others) caching
- Cache write vs read pricing
- Prompt layout for caching
- How Claude Code uses caching

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Claude docs, prompt caching (TODO: find URL)
- Claude Code docs, "How Claude Code uses prompt caching", https://code.claude.com/docs/en/prompt-caching (unverified)
- `book/landscape.md` for prices

**Practice brief**

Send a long fixed document plus 5 different questions to Claude with and without cache control. Record cache read/write tokens, latency and cost in `costs.md`.

Where: `experiments/NN-prompt-caching/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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
