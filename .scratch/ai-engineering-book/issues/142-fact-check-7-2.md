# 142 — Fact-check chapter 7.2

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-07-ai-native-development/7.2-tdd-with-agents.md`

## Goal

Fact-check chapter 7.2 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 7.2".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 7.2 "TDD with agents" written (core): why TDD fits agents (pass/fail signal, no shared bias, tests survive compaction), the workflow with a red-green Mermaid (confirm the failure, commit tests, vertical slices, refactor as a separate step), a table of test-weakening shortcuts, four guard layers (prompt, deny rule on test paths, Stop-hook diff gate and CI, independent reviewer) with their limits, what makes a test agent-proof (public seam, literal expected values, boundary-only mocks), unit vs integration table and a rule of thumb (agent behaviour is an eval, test the harness with a scripted fake model), tests as verification in long tasks; practice is a `project/` feature built test-first with `project/TDD-LOG.md` logging every attempt to change a test (three feature suggestions, no code); 4 resource rows and 6 glossary terms added (issue 74). Opened and read (curl, 2026-11-12): the Anthropic best-practices article (TDD section; page is dated 2025-04-18, updated since), Pocock's tdd SKILL.md, tests.md and mocking.md, Claude Code docs best-practices (check, Stop-hook and review sections), hooks reference (Stop input), permissions (Read/Edit deny scope), prompting best practices (hardcoding section). Not verified: the diff-gate shell snippet and the `Edit(**/*.test.ts)` deny rule were not run or tested in Claude Code; the Stop-hook cap of eight blocked stops is quoted from docs, not reproduced; the claim that a Node/Python script bypasses Edit deny rules is from the permissions docs, not tried; Pocock's repo has no interface-design/refactoring files (404), so "refactoring is a separate stage" rests on one line of SKILL.md and may differ from his other skills; the claim that his TDD skill is what this study's tooling uses is from the installed skill list, not checked further; I did not find a primary source for how often agents weaken tests, so the chapter gives none and has the learner measure it; the unit-vs-integration table and the "agent behaviour is an eval, not a TDD test" rule are my own synthesis; reading times are estimates; the three suggested project features were not checked against what 5.4 actually built. Nothing from the chapter's practice was run; only check and build.

## Comments

## Needs human

- Run the `Edit(**/*.test.ts)` deny rule and the Stop-hook diff-gate snippet in a real Claude Code session; neither was run (the chapter labels both as untested).
