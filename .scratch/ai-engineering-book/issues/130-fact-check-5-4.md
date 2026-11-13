# 130 — Fact-check chapter 5.4

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-05-harnesses/5.4-mini-harness.md`

## Goal

Fact-check chapter 5.4 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 5.4".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 5.4 "Build a mini coding harness" written: where the new pieces plug into the loop (Mermaid), edit-format table (whole file, search/replace, patch, line range) with Aider's formats and unified-diff post and Anthropic's text editor tool as the reference, exact-match failure table (zero/several/already applied/missing/escaping path), atomic writes and line endings, shell as a write path; permission model (action/resource/effect, deny-first vs last-match, nobody-answers = deny, Mermaid decision flow, gate table, compound shell commands, denial as tool result with reason, prompt vs sandbox); streaming terminal UX (Anthropic stream events, partial-JSON tool args, one-line tool calls, diff at the prompt, layered Ctrl-C with a valid history, TTY check, UI as event client); project instructions wiring (path shown, rebuilt each request so compaction can't drop it, prompt generated from tool list); checkpoints (git vs snapshot store vs own VCS table, per-turn lazy snapshots, created files, shell not covered, tell the model after undo); running the eval set (no-human policy, throwaway copies, fixed model, edit-failure counts); practice is project step 19 (12 steps, brief and acceptance only, no code, no experiment folder, notes/mini-harness.md); 7 resource rows and 5 glossary terms added (issue 62). Opened and read as extracted page text (fetched 2026-11-12): Aider edit-formats, unified-diffs post and git page; Claude API text editor tool and streaming pages; Claude Code checkpointing, permissions, permission-modes and memory pages; Anthropic writing-tools-for-agents (redirect from /engineering/ confirmed); agents.md; Node TTY docs; arXiv abstract page for SWE-agent. Not verified: the SWE-agent paper body (only the abstract was read; the "Look for" points at its interface-design discussion without section names); the Aider 26% to 59% figures are from the post's text and are for one old model and the author's own benchmark; the memory page was only skimmed (the claim that it covers reusing an existing AGENTS.md rests on its intro text); Claude Code's current permission-modes list beyond acceptEdits; whether a local Ollama model streams tool arguments in fragments (the chapter tells the learner to look, makes no claim); the chapter's claim that providers typically reject a history with a tool_use lacking a result is carried over from 2.2, not re-checked; the shell-gate rule, atomic-write advice and snapshot design are my own recommendations and labelled as such where stated. The OpenAI Codex apply-patch format was not opened (a guessed GitHub URL returned 404), so patch-style editing is described only through Aider's udiff. Nothing was run besides check and build; no code exists for this chapter.

## Comments
