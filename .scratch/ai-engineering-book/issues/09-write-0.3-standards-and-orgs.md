# 09 — Write chapter 0.3: Standards and orgs: MCP, AGENTS.md, A2A, AAIF

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-00-catch-up/0.3-standards-and-orgs.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-00-catch-up/0.2-the-stack.md` (0.2 The stack in one picture)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-00-catch-up/0.3-standards-and-orgs.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Say what MCP, AGENTS.md, A2A and agent skills each standardize
- Know who governs each (Agentic AI Foundation, Linux Foundation) and since when
- Know which chapters go deep on each

**The explanation must cover**

- MCP: origin, what it standardizes, governance
- AGENTS.md
- Agent skills
- A2A and its relation to MCP
- The Agentic AI Foundation (founded Dec 2025): founding projects and members
- Re-verify: the date A2A joined the AAIF, if it has

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- MCP specification and docs (TODO: find URL)
- Linux Foundation AAIF announcement (TODO: find primary URL; secondary: https://www.infoq.com/news/2025/12/agentic-ai-foundation)
- AGENTS.md site (TODO: find URL)
- A2A project (TODO: find URL)

**Practice brief**

Find one real `AGENTS.md` and one real MCP server in open-source repos you use. Note what each one gives an agent that it wouldn't otherwise have.

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
