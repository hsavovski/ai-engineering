# 157 — Fact-check chapter 10.6

Status: ready-for-agent
Type: task
Model: opus
Blocked by: none

## Read first

- `../spec.md`, sections "Chapter format" and "Accuracy rules"
- The chapter: `book/part-10-modifying-serving-models/10.6-nanochat.md`

## Goal

Fact-check chapter 10.6 (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter 10.6".

## Flagged by the writer (check these first)


The writer's BUILD-LOG notes:

- 2026-11-13: chapter 10.6 "nanochat" written (deeper): pipeline overview (Mermaid; no mid-training stage and RL outside the speedrun in the current repo, older posts differ), the single `--depth` dial, data (ClimbMix shards), tokenizer (BPE, special tokens, token_bytes for bits per byte), pretraining (gpt.py feature table mapped to Part 1 chapters, Muon+AdamW, schedule, batch/grad accumulation, precision), CORE eval, SFT task mixture, RL (REINFORCE-like `chat_rl.py`), inference engine, hardware table, cost (README figures and a formula, no hard-coded prices), 3 resources, 5 check questions, glossary terms, `experiments/39-nanochat/` (README tables + `predict.py` starter). Unverified / not done: I did NOT run nanochat (no `runcpu.sh`, no `uv sync`), so the experiment's expected behaviour on the M4 and the "30 min on M3 Max" timing are the script comment's claims only. Read only partly (from the GitHub API): gpt.py header and attention/MLP/softcap, tok_train.py, tokenizer.py special tokens, base_train.py args and schedule, chat_sft.py mixture, chat_rl.py docstring and reward, optim.py comments, dataloader docstring; NOT read: core_eval.py internals (the "likelihood comparison" is not asserted beyond the file's purpose), engine.py's tool-use code, execution.py, flash_attention.py, checkpoint code. Claims taken from the README/leaderboard/discussion 481 without independent check: $48 / ~$15 spot / ~$3 per GPU-hour, 1.5 h speedrun, the leaderboard table (2.76→2.02 h on 4 Mar 2026 ClimbMix), CORE 0.256525 for GPT-2 1.6B, 22 benchmarks, the 2019 $43,000 figure, "d12 is GPT-1 sized"; 8×A100 / MPS bf16 (~25% less memory) statements are the README's. The README's "4e19 FLOPs" speedrun figure was deliberately not used. Repo state: last push 2026-09-07 (GitHub API), defaults (e.g. target-param-data-ratio 12 vs 10.5 in LEADERBOARD.md) may drift. `predict.py` was not executed beyond syntax (it has NotImplementedError TODOs by design). All cited links were opened (GitHub API/curl 200): repo, discussions 1, 164, 481, runs/speedrun.sh, LEADERBOARD.md, climbmix and SmolTalk dataset pages; only their contents (SmolTalk's page, ClimbMix's page) were not read beyond existence. Whether `datasets/HuggingFaceTB/smoltalk` is the same SmolTalk `tasks/smoltalk.py` loads was not checked.

## Comments
