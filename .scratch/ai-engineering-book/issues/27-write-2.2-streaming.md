# 27 — Write chapter 2.2: Streaming

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-02-programming-with-llms/2.2-streaming.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-02-programming-with-llms/2.1-calling-models.md` (2.1 Calling models: Anthropic, OpenAI-compatible, Ollama)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-02-programming-with-llms/2.2-streaming.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Parse server-sent events by hand
- Handle text, thinking and tool-call deltas
- Measure time to first token

**The explanation must cover**

- SSE format
- Anthropic stream events vs OpenAI chunks
- Accumulating partial JSON for tool calls
- Cancellation and backpressure
- TTFT vs throughput

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Claude docs, streaming (TODO: find URL)
- MDN, Server-sent events (TODO: find URL)

**Practice brief**

Extend the 2.1 script to stream from all three providers, print tokens as they arrive, and log TTFT and tokens/s for each.

Where: `experiments/NN-streaming/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

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
