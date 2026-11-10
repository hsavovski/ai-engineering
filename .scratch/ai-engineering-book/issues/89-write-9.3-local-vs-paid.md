# 89 — Write chapter 9.3: Local vs. paid

Status: resolved
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-09-model-landscape-cost/9.3-local-vs-paid.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-09-model-landscape-cost/9.1-paid-apis.md` (9.1 Paid APIs: Claude, GPT, Gemini, Kimi, DeepSeek)
  - `book/part-01-how-llms-work/1.12-quantization.md` (1.12 Quantization)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-09-model-landscape-cost/9.3-local-vs-paid.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Compare local and paid models on quality, speed and total cost
- Identify tasks local models handle well
- Understand privacy and offline benefits

**The explanation must cover**

- Quality gap on your tasks
- Speed and memory on a 24 GB Mac
- True cost (electricity, time)
- Privacy
- When local wins

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Your results from 5.5 and 9.1
- `book/landscape.md`

**Practice brief**

Combine results from 5.5 and 9.1 into one table in `notes/routing.md`: task type × model → pass rate, speed, cost.

Where: Notes only, no code (`notes/`).

**Growing project**

No code. The practice is reading and writing notes.

## Acceptance criteria

- `npm run check -- 9.3` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
