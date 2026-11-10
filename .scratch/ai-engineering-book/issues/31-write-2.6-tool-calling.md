# 31 — Write chapter 2.6: Tool calling

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-02-programming-with-llms/2.6-tool-calling.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-02-programming-with-llms/2.5-structured-output.md` (2.5 Structured output)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-02-programming-with-llms/2.6-tool-calling.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Define tools with JSON schema
- Handle tool-use requests and send results back correctly
- Handle parallel tool calls and errors

**The explanation must cover**

- Tool definitions
- The tool-use round trip
- Tool results and errors
- Parallel tool calls
- Forcing or disabling tools
- Differences between Anthropic, OpenAI-compatible and Ollama

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Claude docs, tool use (TODO: find URL)
- Ollama tool calling docs (TODO: find URL)

**Practice brief**

Old roadmap item: give a model one tool (`read_file`) and handle one tool call round trip by hand, against local Qwen and a paid model. No loop yet.

Where: `experiments/NN-tool-call/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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
