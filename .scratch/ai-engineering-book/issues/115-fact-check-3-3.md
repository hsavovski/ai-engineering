# 115 — Fact-check chapter 3.3

Status: resolved
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-03-agents/3.3-tool-design.md`

## Goal

Fact-check chapter 3.3 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 3.3".

## Flagged by the writer (check these first)

From `fact-check-backlog.md`:

- Check that the "Building effective agents" appendix quotes (ACI, poka-yoke, absolute filepaths) are not over-read.
- The Sonnet 3.5 / SWE-bench anecdote is paraphrased and flagged as the authors' own evaluation.
- The chapter says nothing about what the text editor tool returns on a missing or duplicate `old_str` match because the writer could not confirm it.
- The `search_files` example and the error / transcript tables are the writer's own and labelled as such. No local model was run.

The writer's BUILD-LOG notes:

- 2026-11-10: chapter 3.3 "Tool design" written: tools as a contract with a non-deterministic caller (ACI, poka-yoke), granularity decision table, naming and namespacing, a weak vs strong search_files definition, token-efficient outputs and truncation markers, an error-message table, a transcript-reading table and the prototype/evaluate/read-transcripts workflow; practice is project step 2 (edit_file, list_files, search; notes in notes/tool-design.md; brief and acceptance check only, no code, no experiment folder); 4 resource rows and 4 glossary terms added (issue 39). All four links opened; the writing-tools article was read at anthropic.com/research (the engineering URL resolves to it). No local model run for this chapter.

## Comments

- 2026-11-13 (fact-check): all 4 sources opened (HTTP 200) and ~30 claims checked against them. The flagged Appendix 2 quotes (ACI, poka-yoke, absolute filepaths, format advice) are verbatim and not over-read. Fixed: "wrapping API endpoints one for one" (not in the source) reworded to the article's "merely wrap existing ... API endpoints"; the Sonnet 3.5 / SWE-bench and "2025" anecdotes now say what the post says, with the link; added the source link to the 206/72-token and 25,000-token paragraphs. Nothing cut, nothing left for a human.
