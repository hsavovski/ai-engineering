# 72 — Write chapter 6.8: Working within Pro limits

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-06-claude-code/6.8-pro-limits.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-06-claude-code/6.1-how-claude-code-works.md` (6.1 How Claude Code works)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-06-claude-code/6.8-pro-limits.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain what drives usage (context size, model, subagents)
- Pick models and effort per task
- Build habits that keep context small

**The explanation must cover**

- How usage is counted
- Model and effort choice
- /clear, /compact and fresh sessions
- Subagent and parallel cost
- Offloading to local models or OpenRouter

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Claude Code docs, costs (https://code.claude.com/docs/en/costs, unverified)
- Claude help center, usage limits (TODO: find URL)

**Practice brief**

Track one week of Claude Code use: what hit limits, what didn't. Write three rules for yourself in `notes/claude-code.md`.

Where: Notes only, no code (`notes/`).

**Growing project**

No code. The practice is reading and writing notes.

## Acceptance criteria

- All six sections present: Why this matters, Explanation, resources at the point of use, Practice, Check questions, My understanding
- Every link opened and checked, and `last_verified` set
- Resources added to `book/resources.md`
- New terms added to `GLOSSARY.md`
- "My understanding" left empty
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
