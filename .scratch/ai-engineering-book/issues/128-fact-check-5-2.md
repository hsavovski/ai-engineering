# 128 — Fact-check chapter 5.2

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-05-harnesses/5.2-harness-anatomy.md`

## Goal

Fact-check chapter 5.2 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 5.2".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 5.2 "Anatomy: reading opencode's source" written against a pinned opencode commit (135d46c, 2026-11-11, v2.2.7): how to read it (Effect, Location/Session/inbox), repo tour mapped to 5.1's components, the loop (drain vs runStep, tools forked while streaming, max-steps, output-limit and crash recovery), edit/shell/grep tool internals, system prompts (single template plus per-model plugins; per-model prompt files were removed in 2026 history), compaction (triggers, summary template, cache-aware precompute), permissions (last-match-wins, deny before saved approvals, decline defect tunnel, agents as permission sets), an end-to-end sequence diagram, a borrow table, and a Codex CLI comparison (per-model prompt files, separate sandboxing crate); practice is notes/opencode-anatomy.md (diagram with source links, traced request, one decision; notes only, no code, no experiment folder); 4 resource rows and 6 glossary terms added (issue 60). Links opened: opencode docs permissions and agents, openai/codex repo page; the opencode and codex source was cloned and read at the pinned commits (permalinks cite those). Nothing was run. The planned "per-model system prompts" topic does not match the code (one template plus plugins); the chapter says so.

## Comments
