# 135 — Fact-check chapter 6.3

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-06-claude-code/6.3-skills.md`

## Goal

Fact-check chapter 6.3 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 6.3".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 6.3 "Skills" written (core): SKILL.md anatomy with a worked example and a frontmatter field table, where Claude Code finds skills (locations, parent/nested/worktree lookup, name-clash order, live reload), progressive disclosure with the listing budget, body persistence and compaction limits plus a Mermaid of what is in context when, skills vs CLAUDE.md vs subagents vs slash commands (table, merged-commands note, decision flowchart), Matt Pocock's grilling, grill-with-docs, tdd and writing-for-agents/SKILL-MECHANICS as case studies, testing skills (baseline comparison, five-step routine, skill-creator, security note); practice is experiments/27-my-skill (write-chapter skill, trigger test, baseline comparison, /compact check, adapt one Pocock skill; README template only, no code); 4 resource rows and 6 glossary terms added (issue 67). Opened and read (fetched with curl 2026-11-12): Claude Code skills docs (most sections, not the visual-output example or synced-skills detail), sub-agents docs (skills preload lines only), Anthropic skills article, Pocock repo README, grilling, grill-with-docs, tdd (first half; output was truncated), domain-modeling (head), writing-for-agents SKILL.md (part, truncated) and SKILL-MECHANICS.md. Only checked for HTTP 200, not read: agentskills.io/skill-creation/evaluating-skills (the ~15 min and the "eval file format" descriptions rest on the skills docs' summary), skill-creator plugin page, code.claude.com commands page, anthropic.com research URL (same content as the engineering URL, canonical is /research/). Not verified: that the "Agent skills" section of this study's CLAUDE.md came from setup-matt-pocock-skills (worded as "the kind of setting that setup asks about", from the README only; the skill file was not read); the minimum Claude Code version for the worktree skills fallback (omitted); tdd's "seams confirmed with the user" and "reads GLOSSARY.md" were read in the file head. The 1% listing budget, 5,000/25,000-token compaction numbers and 1,536-character cap come from the skills docs, not tested. Nothing was run: no skill was installed or triggered, no command from the chapter executed.

## Comments
