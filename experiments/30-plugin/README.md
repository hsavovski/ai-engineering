# 30 – Plugin: study-tools

## What I tried

My 3.7 study MCP server and my 6.3 `write-chapter` skill packaged as one local Claude Code plugin (`study-tools`), installed from a local marketplace, with the context cost measured.

Steps and acceptance check: [chapter 6.6](../../book/part-06-claude-code/6.6-mcp-plugins.md#practice). I write the plugin.

## What happened

### Baseline `/context` (step 1)

| Category | Tokens |
|---|---|
| MCP tools | |
| Skills | |
| Memory files | |
| Total | |

### Shape decisions (step 2)

| Question | Answer |
|---|---|
| Server files the plugin needs | |
| Where the server finds `notes/` and `PROGRESS.md` from a plugin copy; what happens if the variable is missing | |
| Where `node_modules` lives | |
| Skill stays model-invoked? | |

### Validation and loading (steps 3–5)

<!-- `claude plugin validate` output for the plugin and the marketplace, warnings and how you handled them. Skill name and MCP tool-name prefix seen under --plugin-dir. Install scope chosen and why. -->

### Context cost (step 6)

| Measure | Tool search on | `ENABLE_TOOL_SEARCH=false` |
|---|---|---|
| `/context` total after install | | |
| Delta from baseline | | |
| `claude plugin details` `Always-on` | | n/a |

### Failure paths (step 7)

| Case | What happened |
|---|---|
| Edit + `/reload-plugins` without bumping `version` | |
| Plugin disabled | |
| Different project | |

### Stranger review (step 8)

| File / line | What it can do to an installer | Change I made |
|---|---|---|
| | | |

## Why (what I learned)

<!-- What the plugin gives over two separate installs, and what it costs. At least three bullets. -->
