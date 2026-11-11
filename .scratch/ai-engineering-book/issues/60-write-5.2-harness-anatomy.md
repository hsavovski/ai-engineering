# 60 — Write chapter 5.2: Anatomy: reading opencode's source

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-05-harnesses/5.2-harness-anatomy.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-05-harnesses/5.1-what-is-a-harness.md` (5.1 What a harness is)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-05-harnesses/5.2-harness-anatomy.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Find the loop, tools, prompts and context management in opencode's source
- Explain one non-obvious design decision
- Borrow ideas for your own harness

**The explanation must cover**

- Repo tour
- The agent loop
- Tool implementations (edit, bash, search)
- System prompts per model
- Context management and compaction
- Permissions

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- opencode repo (TODO: find URL)
- Codex CLI repo (TODO: find URL, for comparison)

**Practice brief**

Write `notes/opencode-anatomy.md`: a diagram of the main modules and how one request flows through them, with links to source lines.

Where: Notes only, no code (`notes/`).

**Growing project**

No code. The practice is reading and writing notes.

## Acceptance criteria

- `npm run check -- 5.2` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
