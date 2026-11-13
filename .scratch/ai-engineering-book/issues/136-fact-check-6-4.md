# 136 — Fact-check chapter 6.4

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-06-claude-code/6.4-hooks-permissions.md`

## Goal

Fact-check chapter 6.4 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 6.4".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 6.4 "Hooks, permissions and auto mode" written (core): three layers (rules, sandbox, hooks) table and a Mermaid of the order hooks → rules → mode → tool → PostToolUse, permission rule syntax and deny-first precedence with limits (tool calls not intent, compound commands, Read/Edit deny coverage), modes table and the "repo can't set auto/bypass" rule, auto mode now being the built-in starting mode, sandbox (two boundaries, auto-allow vs regular, what runs outside it, unsandboxed retry), hooks (event table with can-block column, stdin JSON, exit 0/2 vs JSON output, precedence: hook deny wins in every mode, hook allow never beats deny/ask, gotchas), auto mode (four threats, decision order Mermaid, dropped broad allow rules, reasoning-blind classifier, two stages, injection probe, deny-and-continue, honest error rates), hooks vs instructions table and a worked configuration; practice is experiments/28-hooks (build-after-edit and .env-block hooks, 8 steps, README template only, no hook code); 5 resource rows and 9 glossary terms added (issue 68). Opened and read (curl, markdown versions, 2026-11-12): both Anthropic articles in full (the engineering/ URLs redirect to research/), Claude Code docs permissions, permission-modes (auto mode sections, not the critical-paths or protected-paths sections), sandboxing (first half, not configuration or managed settings), hooks-guide (most), hooks reference (exit-code table, PostToolUse, Notification, how-a-hook-resolves only). Not verified: the example permissions JSON and its `./.env.*` pattern were not tested against the path-matching rules (chapter says so); the `if` field with path patterns for Edit was not tested; the chapter's no-force-push script was run by hand with JSON on stdin (exit 2 and 0 as claimed) but not inside Claude Code; no hook or rule from the chapter was run in a live session, `/sandbox`, auto mode and `bypassPermissions` behaviour are from docs only; auto-mode-config docs not opened (cited as "not read"); the article says headless runs terminate after repeated denials while the current docs say the action doesn't run and Claude keeps going: the chapter flags the discrepancy and defers to the docs; the 93%, 84%, 8.5%/0.4%, 17% and 5.7% figures are quoted from the articles, not reproduced; the classifier model named in the article (Sonnet 4.6) was left out because the docs now say it varies; the ~minute reading times and the "worked configuration" list are my estimates/recommendations; I did not check that 6.2's chapter exists in the shape the chapter links to (only the path).

## Comments
