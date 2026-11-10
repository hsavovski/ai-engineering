# 70 — Write chapter 6.6: MCP and plugins in Claude Code

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-06-claude-code/6.6-mcp-plugins.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-06-claude-code/6.1-how-claude-code-works.md` (6.1 How Claude Code works)
  - `book/part-03-agents/3.6-mcp-using.md` (3.6 MCP: using servers)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-06-claude-code/6.6-mcp-plugins.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Add and scope MCP servers
- Install and build a plugin
- Measure the context cost of extensions

**The explanation must cover**

- MCP scopes and configuration
- Tool search / deferred tools
- Plugins and marketplaces
- Plugin security and trust

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Claude Code docs: MCP, plugins (unverified)

**Practice brief**

Package your 3.7 MCP server and 6.3 skill as a local Claude Code plugin, install it, and check the context cost.

Where: `experiments/NN-plugin/`: a standalone experiment (NN = next free number; reuse the folder if an earlier chapter already created it).

**Growing project**

Standalone experiment, not a `project/` step. Provide the brief, steps and acceptance check (and heavily commented starter code only if it's Python). The learner writes the code.

## Acceptance criteria

- All six sections present: Why this matters, Explanation, resources at the point of use, Practice, Check questions, My understanding
- Every link opened and checked, and `last_verified` set
- Resources added to `book/resources.md`
- New terms added to `GLOSSARY.md`
- "My understanding" left empty
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
