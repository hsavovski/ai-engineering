# 121 — Fact-check chapter 3.11

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-03-agents/3.11-agent-sdks.md`

## Goal

Fact-check chapter 3.11 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 3.11".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 3.11 "TS agent SDKs: rebuild with one" written: what an agent SDK provides (table of loop pieces, spectrum diagram, "who owns the loop"), Vercel AI SDK (providers, ToolLoopAgent, stopWhen/isStepCount default 20, prepareStep, tool-error parts), Claude Agent SDK (bundled Claude Code binary, built-in tools vs in-process MCP tools, tools vs allowedTools, maxTurns unset and settingSources defaults, Claude-only providers, API-key billing, Ollama Anthropic endpoint unsupported per gateway docs), OpenAI Agents SDK JS (Runner, maxTurns 10 throwing MaxTurnsExceededError, handoffs vs agents as tools, beta aisdk adapter, tracing on by default), Mastra (Agent/createTool, model router, maxSteps default 5), side-by-side table, four kinds of lock-in; practice is project step 10 (second entry point with one SDK, shared plain-function tools, same caps/exit statuses/JSONL log, README comparison; no experiment folder); 5 resource rows and 5 glossary terms added (issue 47). All cited pages opened on 2026-11-12; npm versions/licenses read from the registry. The issue's anthropic.com/research URL 404s; the claude.com/resources article URL is used. Not verified: OpenAI SDK default behaviour when a function tool throws (docs ambiguous, left to the practice), AI SDK HarnessAgent page (404, only the overview mention is cited). Nothing was run.

## Comments

- 2026-11-13 (fact-checker): all 25 links and 5 resource rows open; ~55 claims checked. Fixed: Glob/Grep default availability on macOS/Linux, .env note attribution, aisdk import path, tracing default and source, ai npm version. Cut: "the tools Claude was trained to use" (unsourced). No items need a human.
