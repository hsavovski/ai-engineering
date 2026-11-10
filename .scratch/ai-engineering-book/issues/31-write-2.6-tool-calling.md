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

- `npm run check -- 2.6` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
