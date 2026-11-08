# 42 — Write chapter 3.6: MCP: using servers

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-03-agents/3.6-mcp-using.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.3-tool-design.md` (3.3 Tool design)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-03-agents/3.6-mcp-using.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain MCP's architecture: hosts, clients, servers, transports
- Explain tools, resources and prompts
- Connect an MCP server to Claude Code and to your own agent

**The explanation must cover**

- Why a protocol
- Architecture and transports (stdio, streamable HTTP)
- Tools, resources, prompts
- Auth
- Security concerns with third-party servers

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- MCP specification and docs (TODO: find URL)
- Claude Code docs, MCP, https://code.claude.com/docs/en/mcp (unverified)
- MCP TypeScript SDK repo (TODO: find URL)

**Practice brief**

Add an MCP client to `project/` using the TS SDK, connect one existing MCP server, and expose its tools to your loop alongside the native tools.

Where: A step in the growing `project/` (see `project/ROADMAP.md`).

**Growing project**

This chapter is a step in the growing `project/`. See `project/ROADMAP.md` for what the project has before this step and what this step adds. The chapter gives the brief, steps and acceptance check; the learner writes the code.

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
