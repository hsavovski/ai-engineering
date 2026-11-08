# 07 — Write chapter 0.1: What changed from 2024 to 2026

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-00-catch-up/0.1-what-changed.md`
- It has no prerequisite chapters.
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-00-catch-up/0.1-what-changed.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Name the major shifts since 2024 and why each happened
- Place each shift in the part of the book that covers it
- Separate durable ideas from this year's product names

**The explanation must cover**

- Reasoning models and test-time compute becoming the default
- From chat to agents: tool use, long-running agents, coding agents (Claude Code, Codex CLI, opencode)
- MCP, AGENTS.md, skills and the Agentic AI Foundation
- Open-weight models (Qwen, DeepSeek, Kimi) and the price collapse
- Context engineering replacing "prompt engineering" as the main skill
- Managed and background agents

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Chip Huyen, *AI Engineering* (O'Reilly, 2025), ch. 1, https://github.com/chiphuyen/aie-book
- Anthropic engineering index, https://www.anthropic.com/engineering (skim titles for a timeline)
- Simon Willison's year-in-review posts (TODO: find URLs)

**Practice brief**

Write a one-page "then vs now" table in `notes/what-changed.md`: for each shift, what you believed in 2024, what is true now, and which chapter covers it.

Where: Notes only, no code (`notes/`).

**Growing project**

No code. The practice is reading and writing notes.

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
