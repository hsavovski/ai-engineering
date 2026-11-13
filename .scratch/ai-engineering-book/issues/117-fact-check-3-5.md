# 117 — Fact-check chapter 3.5

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-03-agents/3.5-memory.md`

## Goal

Fact-check chapter 3.5 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 3.5".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 3.5 "Memory" written: memory vs compaction, CoALA's four kinds mapped to a coding agent plus Anthropic's four-layer hierarchy (Mermaid), files vs vector stores table, writing/updating/forgetting with a failure-mode table, the API memory tool and Claude Code auto memory, combining with compaction and the multisession pattern, memory poisoning (OWASP ASI06, path traversal), how to evaluate memory (two-phase task, baseline, staleness probe); practice is project step 4 (memory tool in `memory/`, safety tests, with/without comparison, staleness and injection probes; brief and acceptance check only, no code, no new experiment folder); 5 resource rows and 5 glossary terms added (issue 41). Links opened: all five cited resources plus the OWASP post. The planned research/ URL works (engineering/ was not used); the Claude docs memory-tool URL is platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool. The failure-mode table is the chapter's own synthesis, labelled as such. Nothing was run.

## Comments
