# 134 — Fact-check chapter 6.2

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-06-claude-code/6.2-claude-md-and-memory.md`

## Goal

Fact-check chapter 6.2 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 6.2".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 6.2 "CLAUDE.md and memory" written: context-not-configuration framing, what earns a line (two-question filter, before/after example), memory hierarchy with load order (Mermaid; ancestors, on-demand descendants, imports that do not shrink cost, AGENTS.md interplay, worktree-safe local prefs), path-scoped rules and a decision order, auto memory mechanics and limits, keeping it short (/init, /doctor, prompt-audit, HTML comments), measuring cost (/context all, /memory, count_tokens, wc -m); practice is notes/memory-audit.md (baseline, inventory, line verdicts, rewrite, re-measure; notes only, no code, no experiment folder); 4 resource rows and 6 glossary terms added (issue 66). Opened: code.claude.com memory and best-practices pages, Matt Pocock writing-for-agents SKILL.md (read via summary), token-counting docs. Nothing was run. The learner has no ~/.claude/CLAUDE.md, so practice treats ancestor and auto memory as user memory.

## Comments

## Needs human

- Practice step 1 asks for a per-file token figure from `/context all`. The docs ([commands](https://code.claude.com/docs/en/commands), `/context [all]`) describe a "per-item breakdown" listing which CLAUDE.md and memory files loaded, but not whether each row shows tokens. The fact-checker could not run an interactive Claude Code session. Run `/context all` once and confirm; the chapter labels this as unverified and gives `wc -m` as the fallback.
