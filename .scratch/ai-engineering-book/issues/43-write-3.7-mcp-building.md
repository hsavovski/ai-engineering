# 43 — Write chapter 3.7: Build an MCP server

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-03-agents/3.7-mcp-building.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.6-mcp-using.md` (3.6 MCP: using servers)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-03-agents/3.7-mcp-building.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Build a TS MCP server with tools and a resource
- Test it with the MCP inspector
- Use it from Claude Code and from your own agent

**The explanation must cover**

- Server SDK basics
- Designing MCP tools (reuse 3.3)
- Resources and prompts
- Testing and debugging
- Packaging and configuration

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- MCP docs, build a server (TODO: find URL)
- MCP Inspector (TODO: find URL)

**Practice brief**

Build an MCP server in `project/` that exposes this study repo: chapter list and status, search notes, append to the `PROGRESS.md` log. Connect it to Claude Code.

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
