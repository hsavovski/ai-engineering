# 55 — Write chapter 4.6: Regression evals in CI

Status: ready-for-agent
Type: task
Blocked by: 02

## Read first

- `../spec.md`, sections "The learner", "Chapter format", "Accuracy rules" and "Languages"
- The stub: `book/part-04-evals-observability/4.6-regression-evals-ci.md`
- The chapters it needs, for consistent terms and links back:
  - `book/part-04-evals-observability/4.3-code-based-checks.md` (4.3 Code-based checks)
- `GLOSSARY.md` and `book/landscape.md` (link to Landscape instead of hard-coding prices or model specs)

## Goal

Write the full chapter in `book/part-04-evals-observability/4.6-regression-evals-ci.md`, following the six-section format in the spec. Tier: **core**. Replace the stub warning and every TODO.

## Specifics

**Learning goals**

- Separate fast regression evals from slow capability evals
- Run evals in GitHub Actions within budget
- Set thresholds that account for noise

**The explanation must cover**

- Regression vs capability evals
- Running evals in CI
- Cost control (local models, small subsets)
- Thresholds and flakiness

**Planned resources to check** (all unverified: open each one, and drop or replace anything that doesn't hold up; find better primary sources where they exist)

- Husain & Shankar, evals FAQ
- GitHub Actions docs (TODO: find URL)

**Practice brief**

Add a GitHub Actions workflow to the repo that runs a small regression subset of `project/` evals on PRs, using a cheap OpenRouter model, with a cost cap.

Where: A step in the growing `project/` (see `project/ROADMAP.md`).

**Growing project**

This chapter is a step in the growing `project/`. See `project/ROADMAP.md` for what the project has before this step and what this step adds. The chapter gives the brief, steps and acceptance check; the learner writes the code.

## Acceptance criteria

- `npm run check -- 4.6` passes (sections, no stub leftovers, `last_verified`, tagged resources listed in `book/resources.md`, check-question answers, empty "My understanding")
- Every link opened and checked
- New terms added to `GLOSSARY.md`
- `npm run build` passes
- A dated `BUILD-LOG.md` line
- Committed
