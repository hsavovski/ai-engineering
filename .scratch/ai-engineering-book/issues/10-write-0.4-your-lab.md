# 10 — Write chapter 0.4: Your lab: local and paid setup

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-00-catch-up/0.4-your-lab.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-00-catch-up/0.2-the-stack.md` (0.2 The stack in one picture)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-00-catch-up/0.4-your-lab.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Know what runs where in your lab and why
- Read token usage and turn it into cost
- Log spend in `costs.md` from day one

**The explanation must cover**

- Ollama on a 24 GB M4 Pro: what fits, `ollama ps`, keep-alive
- OpenRouter vs direct Anthropic API
- Keys in `.env`, never in code
- Token usage and the cost ledger
- The smoke test from issue 04 as the reference experiment

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- `notes/setup.md`
- Ollama docs (TODO: find URL)
- OpenRouter quickstart docs (TODO: find URL)
- Anthropic API getting started, https://platform.claude.com/docs (unverified)

**Practice brief**

Run the smoke test from issue 04 (`experiments/01-keys-smoke-test/`) if it isn't done yet, compute the cost of each call by hand from the token counts, and check it against the provider dashboards.

Where: `experiments/NN-keys-smoke-test/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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
