# 67 — Write chapter 6.3: Skills

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-06-claude-code/6.3-skills.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-06-claude-code/6.2-claude-md-and-memory.md` (6.2 CLAUDE.md and memory)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-06-claude-code/6.3-skills.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain how Claude Code discovers and loads skills
- Read and adapt Matt Pocock's skills
- Write and test your own skill

**The explanation must cover**

- Skill anatomy
- Progressive disclosure
- Skills vs CLAUDE.md vs subagents vs slash commands
- Matt Pocock's skills as case studies
- Testing skills

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Claude Code docs, skills (https://code.claude.com/docs/en/skills, unverified)
- https://www.anthropic.com/research/equipping-agents-for-the-real-world-with-agent-skills
- Matt Pocock's skills repo (TODO: find URL)

**Practice brief**

Write a skill for this study (e.g. "write-chapter" that follows the spec's chapter format) and use it on one chapter task.

Where: `experiments/NN-my-skill/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- `npm run check -- 6.3` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
