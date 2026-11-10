# 45 — Write chapter 3.9: Advanced tool use: tool search and code execution

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-03-agents/3.9-advanced-tool-use.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-03-agents/3.6-mcp-using.md` (3.6 MCP: using servers)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-03-agents/3.9-advanced-tool-use.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Explain tool search / deferred tool loading
- Explain programmatic tool calling and code execution with MCP
- Measure token savings

**The explanation must cover**

- The cost of tool definitions in context
- Tool search
- Code execution: the model writes code that calls tools
- Tool-use examples
- Trade-offs: sandboxing and debuggability

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- https://www.anthropic.com/research/advanced-tool-use
- https://www.anthropic.com/research/code-execution-with-mcp

**Practice brief**

Give `project/` 30+ tools (e.g. from MCP servers) and add a `search_tools` meta-tool that loads definitions on demand. Compare tokens per task before and after.

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
