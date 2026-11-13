# 131 — Fact-check chapter 5.5

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-05-harnesses/5.5-harnesses-local-qwen.md`

## Goal

Fact-check chapter 5.5 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 5.5".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 5.5 "Harnesses on local Qwen" written (core): pointing harnesses at Ollama (/v1 base URL, ignored key, opencode discovery and custom provider limit/capabilities, Aider ollama_chat and extra_params, Cline, Ollama integrations index), context size as the silent failure (default-by-VRAM vs Aider's 2k claim, 64000 recommendation, three ways to set num_ctx, harness vs server window mismatch), tool-call failure modes (7-item list, thinking field), choosing a local coder model (qwen3-coder:30b, qwen3 tags), what local can own; experiment 26-local-harnesses README template; 3 glossary terms, 6 resource rows. All docs pages opened via fetch subagents on 2026-11-12. Unverified/not run: nothing executed locally (no Ollama/harness runs); "ordering of failures from experience", the 'likely fine locally' table and the claim that qwen2.5-coder:14b may lack tool support are my judgement, not sourced; Ollama's `think` / reasoning field behaviour on /v1 not found in docs; Qwen page quote of Hermes format found but no literal <tool_call> example; Ollama default-context figures (4k/32k/256k by VRAM) vs Aider's 2k conflict and weren't reconciled; opencode's package name per its page is @opencode/ai/providers/openai-compatible (not used in the chapter); Ollama integrations/opencode.md and Aider/Cline/Continue integration pages not opened; the ~20x thinking slowdown and 6% spill come from the spec/Landscape, not re-measured.

## Comments
