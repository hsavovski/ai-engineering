# 145 — Fact-check chapter 7.5

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-07-ai-native-development/7.5-automating-lifecycle.md`

## Goal

Fact-check chapter 7.5 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 7.5".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-13: chapter 7.5 "Automating the whole lifecycle" written (core): issue→spec→implement→verify→review→merge pipeline (Mermaid, stage/gate table, three design rules, this repo as a worked example from CLAUDE.md and the spec), verification as the bottleneck (Amdahl framing, verification ladder, oracle, risk-tiered human review), metrics (throughput/defects/cost, DORA definitions, cost per accepted change with an invented worked example, METR trap), case studies (C compiler, Scion, this book), design procedure; practice is project step 24 with a stage log. Opened and read via curl: both planned Anthropic URLs (200), DORA metrics guide, DORA gen-AI report page, METR 2025 and 2026 posts. Unverified: the DORA 1.5%/7.2% figures come from the gen-AI report landing page, whose report year I did not confirm (worded "earlier report"); I read the Anthropic/METR pages as text-stripped HTML, not rendered, so quotes should be spot-checked; the Scion post describes "Claude Mythos Preview"/"Claude Tag" which I did not use or check; the claim that the book pipeline "stays within a weekly usage cap" is from root CLAUDE.md, not run. Could not run: the practice (learner does it); no experiment folder for this issue.

## Comments

- 2026-11-14 (fact-checker): all 6 external links and the 4 resource rows return 200 and were read in full as text. Every quote and number from the Scion post (13 Oct 2026), the C compiler post (5 Feb 2026), DORA's metrics guide and gen-AI report page, and both METR posts matched. The writer's flags are settled: the DORA report PDF is dated March 2025 in its metadata, and the chapter now says so; the Mythos/Tag names appear only in the Scion post, not in the chapter; the 15-minute launchd run, weekly usage cap and fast-forward push match CLAUDE.md. Fixed 4 wording issues (see BUILD-LOG). Needs human: none.
