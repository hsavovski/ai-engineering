# 85 — Write chapter 8.6: Streaming UI and auth

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-08-production/8.6-streaming-ui-auth.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-02-programming-with-llms/2.2-streaming.md` (2.2 Streaming)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-08-production/8.6-streaming-ui-auth.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Build a streaming chat UI with tool-call rendering
- Handle auth for users and for agent tool access (OAuth for MCP)
- Deal with disconnects and resumable streams

**The explanation must cover**

- Streaming to the browser
- Rendering tool calls and partial output
- Resumable streams
- User auth
- Delegated auth for agents and MCP

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Vercel AI SDK UI docs (TODO: find URL)
- MCP authorization spec (TODO: find URL)

**Practice brief**

Build a minimal web UI for `project/` (e.g. Vite + Vercel AI SDK UI) that streams text and shows tool calls as they happen.

Where: `experiments/NN-streaming-ui/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 8.6` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
