# 146 — Fact-check chapter 7.6

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-07-ai-native-development/7.6-humans-in-the-loop.md`

## Goal

Fact-check chapter 7.6 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 7.6".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-13: chapter 7.6 "Where humans stay in the loop" written (core): intent/taste/accountability and a 'what would detect it' test, risk-based review (Mermaid decision tree, signal table, spot-check rule), approval fatigue (Anthropic sandboxing post: 84% fewer prompts, auto mode post: 93% accepted, 17% miss rate, escalation), skill atrophy (Anthropic/Shen & Tamkin RCT, six patterns, limits) and deliberate practice; practice is notes/human-in-the-loop.md policy. Sources read via a web-fetch subagent's summary, not by me directly: all four Anthropic/arXiv pages. Unverified: the 84%, 93%, 17%, 3/20 escalation, n=52, 50% vs 67%, d=0.738, pattern score ranges (all from the subagent's report; the post's figure labels show ~65% not 67%); the claim 'deliberate practice' is from expertise psychology with no cited source; Mermaid not rendered visually. Did not run the practice (notes only).

## Comments

## Needs human

- The deliberate-practice citation links the DOI of Ericsson, Krampe & Tesch-Römer (1993), https://doi.org/10.1037/0033-295X.100.3.363. The DOI resolves, but the APA landing page returns 403 to automated access. The quoted line was checked against a mirrored copy of the paper, not the publisher page. Open the DOI once in a browser to confirm it lands on the paper.
