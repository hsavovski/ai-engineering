# 82 — Write chapter 8.3: Sandboxing and least privilege

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-08-production/8.3-sandboxing.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-08-production/8.1-prompt-injection.md` (8.1 Prompt injection and the lethal trifecta)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-08-production/8.3-sandboxing.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Compare sandbox options (OS sandboxes, containers, VMs, cloud sandboxes)
- Apply filesystem and network restrictions
- Scope credentials to the task

**The explanation must cover**

- Threat model for coding agents
- macOS sandbox / bubblewrap, containers, microVMs
- Network egress control
- Least-privilege credentials
- How Claude is contained across products

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/claude-code-sandboxing
- https://www.anthropic.com/research/how-we-contain-claude

**Practice brief**

Run `project/`'s shell tool inside a sandbox (container or OS sandbox) with no network and a scoped filesystem. Repeat the 8.1 attack.

Where: A step in the growing `project/` (see `project/ROADMAP.md`).

**Growing project**

This chapter is a step in the growing `project/`. See `project/ROADMAP.md` for what the project has before this step and what this step adds. The chapter gives the brief, steps and acceptance check; the learner writes the code.

## Acceptance criteria

- All six sections present: Why this matters, Explanation, resources at the point of use, Practice, Check questions, My understanding
- Every link opened and checked, and `last_verified` set
- Resources added to `book/resources.md`
- New terms added to `GLOSSARY.md`
- "My understanding" left empty
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
