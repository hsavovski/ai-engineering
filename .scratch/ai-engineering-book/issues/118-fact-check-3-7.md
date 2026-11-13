# 118 — Fact-check chapter 3.7

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-03-agents/3.7-mcp-building.md`

## Goal

Fact-check chapter 3.7 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 3.7".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 3.7 "Build an MCP server" written: what a server is in code (McpServer, registerTool, Zod schema, serveStdio factory, stdout discipline), what the SDK does versus the spec's server MUSTs, tool design reusing 3.3 (names, output budget, errors as results, statelessness and state handles, structuredContent, annotations, read vs write table), resources and templates and prompts (who triggers each), testing in three layers (plain functions, Inspector CLI and web, real clients) with debugging habits, packaging and configuration (claude mcp add, scopes, .mcp.json, absolute paths, env, versioning, HTTP deferred to 8.6), securing your own server; practice is project step 6 (study-repo server with list_chapters, search_notes, append_progress_log, a resource, optional prompt; brief and acceptance check only, notes/mcp-building.md, no experiment folder); 5 resource rows and 6 glossary terms added (issue 43). Pages opened: first-server, tools, resources, prompts, stdio, testing (SDK docs), Inspector repo and docs page, Claude Code MCP docs (first 100k characters), spec Tools page, build-server page. Not opened separately: SDK serving docs (only the folder listing). Nothing was run. The Part 3 write tool conflicts with the rule that agents never write PROGRESS.md; the chapter flags it as a deliberate, user-directed exception.

## Comments

- 2026-11-13 (fact-checker): ~45 claims, 11 external links and 5 resource rows checked, all live and read in full (SDK docs as raw markdown, spec and Claude Code docs via their .md versions). Fixed 6, cut 0. Nothing in the chapter needs a human: its commands are quoted from the docs, not reported as run.
