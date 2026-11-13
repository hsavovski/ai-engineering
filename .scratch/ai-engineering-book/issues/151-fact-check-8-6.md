# 151 — Fact-check chapter 8.6

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-08-production/8.6-streaming-ui-auth.md`

## Goal

Fact-check chapter 8.6 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 8.6".

## Flagged by the writer (check these first)

From `fact-check-backlog.md`:

- Pinned versions `ai@7.0.168` and `@ai-sdk/react@4.0.172` were npm latest on 2026-11-10. AI SDK 7 changed the server helpers (`toUIMessageStream({ stream: result.stream })`, `isStepCount`); older tutorials differ.
- Only the server-side snippet was run (against local `qwen2.5:0.5b-instruct`). **Not run:** the client tool-card code, the Redis resume path and the MCP OAuth flow.
- The MCP registration priority order and the security-best-practices page are cited from the 2025-11-25 revision, while the latest on Landscape is 2026-07-28. The chapter flags this.
- `ai` is cited via the npm registry URL because npmjs.com returns 403 to curl.

The writer's BUILD-LOG notes:

- 2026-11-10: chapter 8.6 "Streaming UI and auth" written: path from token to pixel (provider stream to UI message stream to `useChat` parts), a captured UI-message-stream run (ai 7.0.168, local Ollama) with headers and chunk order, tool-part state table and rendering rules, three execution patterns plus approval, disconnect/stop/resume (Last-Event-ID, AI SDK resumable streams, stop-vs-disconnect conflict, MCP redelivery), user auth (session cookies, per-route auth, ownership, user id from session), MCP OAuth (roles, 401 discovery chain, CIMD/DCR, PKCE, resource indicators, audience checks, step-up, 2026-07-28 changes) and the spec's named mistakes (token passthrough, confused deputy, SSRF, scope sprawl); practice is experiment 32 (README skeleton only: curl the raw stream, build UI with tool cards, killed-server and closed-tab drills, cookie auth with ownership checks, MCP 401 discovery drill with a stub server); 8 resource rows and 13 glossary terms added (issue 85). Client-side code and the Redis resume path were not run.

## Comments
