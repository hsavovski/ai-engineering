# 72 — Write chapter 6.8: Working within Pro limits

Status: resolved
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

- `npm run check -- 6.8` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
