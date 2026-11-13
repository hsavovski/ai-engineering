# 138 — Fact-check chapter 6.6

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-06-claude-code/6.6-mcp-plugins.md`

## Goal

Fact-check chapter 6.6 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 6.6".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 6.6 "MCP and plugins in Claude Code" written (core): adding MCP servers and the three scopes (precedence, `.mcp.json` with `${VAR:-default}`, project-approval caveat for non-interactive use), tool search/deferred tools (Mermaid, `ENABLE_TOOL_SEARCH` values, `alwaysLoad`, output limits), measuring extension cost (`/context`, `claude plugin details` Always-on, cost-shape table), plugins (layout, manifest, namespacing, plugin-provided MCP servers, `CLAUDE_PLUGIN_ROOT`/`DATA`), local testing (`--plugin-dir`, validate, `/reload-plugins`), marketplaces, security and trust checklist; practice is experiment 30-plugin (README template; package 3.7 server + 6.3 skill); 5 glossary terms, 5 resource rows. Docs pages (mcp, plugins, discover-plugins, plugins-reference, plugin-marketplaces) read via a fetch subagent and URLs return 200. Unverified/not run: no commands executed (no `claude plugin` or `--plugin-dir` run here); table row claiming skills with model invocation off have no standing cost is an inference (docs don't state it); hooks having no model-visible standing cost is not stated in docs; organisation/managed-settings details (strictKnownMarketplaces etc.) not read; per-tool token figures not given; the 'Opus 4/Sonnet 4/Haiku 4.5 and later' tool-search model requirement and Every-turn/When-invoked estimates are as reported by the fetch subagent.

## Comments
