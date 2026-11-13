# 148 — Fact-check chapter 8.3

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-08-production/8.3-sandboxing.md`

## Goal

Fact-check chapter 8.3 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 8.3".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-12: chapter 8.3 "Sandboxing and least privilege" written (core): threat model for coding agents (Anthropic's user misuse / model misbehavior / external attacker split, read-write-network questions, prompts vs boundary), isolation ladder with Mermaid and comparison table (Seatbelt/bubblewrap, `srt`, containers incl. gVisor, VMs/microVMs, cloud sandboxes) with a choosing table, network egress (none / proxy allowlist / inspection; allowed domain as capability grant, domain fronting), least-privilege credentials (broker pattern, env scrubbing, narrow tokens, tool scoping, symlink-before-validate), how Claude is contained in claude.ai / Claude Code / Cowork (table from the May 2026 post), limits of sandboxes; practice is project/ roadmap step 27 (box `run_shell` in Docker `--network none` or a Seatbelt profile, probe it, repeat the 8.1 attack, find a gap; notes in notes/sandboxing.md); 7 resource rows in resources.md and 7 glossary terms added (issue 82). Opened and read (curl 2026-11-12): anthropic.com research/how-we-contain-claude (read most of it; the final paragraph is cut off in my view), research/claude-code-sandboxing (whole), Claude Code docs sandboxing (defaults, what runs outside, credentials, network isolation, limitations; middle sections skimmed) and sandbox-environments (comparison, runtime, dev containers, VM, cloud; the org-enforcement tail only partly). Only HTTP 200, not read in full: github.com/anthropics/sandbox-runtime (only the one-line description), docs.docker.com/ai/sandboxes (only that "microVM" appears; the chapter's "own Docker daemon" claim is from the Claude Code docs, not Docker's page), docs.docker.com none network driver page (title only; the "no outside connectivity" wording is from my own `docker run --network none` test), gvisor.dev/docs and firecracker-microvm.github.io (home pages only; "user-space kernel" and "boot fast" are general knowledge, unsourced beyond the HTTP check), OWASP LLM06 (the "excessive functionality, permissions, autonomy" root-cause wording comes from a partial grep of the page, only "excessive autonomy" confirmed verbatim), github.com/containers/bubblewrap (only 200). Not verified: the "isolation strength ordering" in the ladder diagram and the "choosing" rule-of-thumb table are my own framing; the claim that Apple documents no profile language is phrased as "I found no official reference" (not searched); reading times are my estimates; Anthropic's figures (93% approvals, 84% fewer prompts, 24 of 25 retries) are quoted from the post, not independently checked. Run: on this Mac (macOS 27.2) I ran a `sandbox-exec` profile (deny network, deny writes outside a work dir, deny read of a file) and found `/tmp` paths silently don't match until written as `/private/tmp`, and ran `docker run --rm --network none -v ...:ro alpine` (DNS failed, read-only mount refused writes); both are the basis of the practice hints. Not run: the practice itself with `project/` (the learner writes it), Claude Code's `/sandbox` and `srt`, bubblewrap, gVisor, Firecracker, Docker Sandboxes.

## Comments
