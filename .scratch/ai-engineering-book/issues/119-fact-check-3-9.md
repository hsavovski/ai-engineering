# 119 — Fact-check chapter 3.9

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-03-agents/3.9-advanced-tool-use.md`

## Goal

Fact-check chapter 3.9 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 3.9".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 3.9 "Advanced tool use: tool search and code execution" written: what tool definitions cost (tokens, selection accuracy, attention, latency) with a made-up sizing table, tool search (always-loaded core, what is searched, ranking, result size, when not to use; Mermaid sequence), the Claude API defer_loading/tool_reference mechanism and its cache behaviour, three harness options (activate, proxy, provider-native) as own analysis, Claude Code's ENABLE_TOOL_SEARCH, code execution with MCP (file-tree code API, five properties, Cloudflare Code Mode), programmatic tool calling (pause/resume, caller, when it pays), tool-use examples (input_examples, cost, non-Claude equivalent), a trade-off table plus sandboxing and debuggability; practice is project step 8 (30+ tools, search_tools with load-on-demand, before/after table on qwen3:14b and one paid model, caching check, optional examples and native defer_loading comparison; notes/advanced-tool-use.md; brief and acceptance check only, no code, no experiment folder); 5 resource rows and 6 glossary terms added (issue 45). Opened: both planned Anthropic articles (research/ URLs work), Claude docs tool-search-tool, programmatic-tool-calling, define-tools (input_examples), tool-use-with-prompt-caching, the embeddings cookbook recipe, Claude Code MCP docs (tool search section), Cloudflare Code Mode post. Note: the API identifiers in the Nov 2025 article (beta header, code_execution_20250825) are outdated; the docs now list tool search and programmatic tool calling as stable with code_execution_20260120. Nothing was run.

## Comments
