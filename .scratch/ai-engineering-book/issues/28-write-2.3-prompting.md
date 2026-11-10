# 28 — Write chapter 2.3: Prompting

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-02-programming-with-llms/2.3-prompting.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-02-programming-with-llms/2.1-calling-models.md` (2.1 Calling models: Anthropic, OpenAI-compatible, Ollama)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-02-programming-with-llms/2.3-prompting.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Write clear system prompts and task briefs
- Use examples, structure (XML/Markdown) and prefill appropriately
- Iterate on prompts with a small test set instead of by feel

**The explanation must cover**

- Clarity and context over tricks
- System vs user prompts
- Few-shot examples
- Structuring with XML tags
- Prompting reasoning models differently
- Prompt iteration with a mini test set (preview of Part 4)

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Claude docs, prompt engineering overview (TODO: find URL)
- OpenAI prompting guide (TODO: find URL)
- Chip Huyen, *AI Engineering*, ch. 5

**Practice brief**

Pick one real task (e.g. summarizing commit messages). Write 5 test inputs, then iterate a prompt for a local model and a paid model, recording each version and its results.

Where: `experiments/NN-prompting/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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
