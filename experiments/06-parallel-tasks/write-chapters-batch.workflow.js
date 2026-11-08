export const meta = {
  name: 'write-chapters-batch',
  description: 'Write 4 book chapters in parallel worktrees, then fact-check each chapter against its sources',
  phases: [
    { title: 'Write', detail: 'one agent per issue, in its own worktree' },
    { title: 'Verify', detail: 'one fact-checker per chapter, same worktree' },
  ],
}

const ROOT = '/Users/icosvsk/Desktop/claude/learning/ai-engineering'

const WRITE_SCHEMA = {
  type: 'object',
  properties: {
    issue: { type: 'string' },
    chapter_file: { type: 'string' },
    commit: { type: 'string', description: 'short SHA of the commit on the issue branch' },
    words: { type: 'number' },
    external_links: { type: 'number' },
    resources_added: { type: 'number' },
    glossary_terms_added: { type: 'number' },
    fetch_failures: { type: 'array', items: { type: 'string' }, description: 'URL + how it was handled' },
    build_passed: { type: 'boolean' },
    notes: { type: 'string', description: 'anything surprising, skipped, or left for the learner' },
  },
  required: ['issue', 'chapter_file', 'commit', 'words', 'external_links', 'resources_added', 'glossary_terms_added', 'fetch_failures', 'build_passed', 'notes'],
}

const VERIFY_SCHEMA = {
  type: 'object',
  properties: {
    claims_checked: { type: 'number' },
    claims_fixed: { type: 'array', items: { type: 'string' }, description: 'claim → what changed' },
    claims_cut: { type: 'array', items: { type: 'string' } },
    links_checked: { type: 'number' },
    links_broken: { type: 'array', items: { type: 'string' }, description: 'URL → what was done' },
    other_problems: { type: 'array', items: { type: 'string' }, description: 'spec/format violations found and fixed, e.g. hard-coded prices, missing sections, practice solved for the learner' },
    commit: { type: 'string', description: 'short SHA of the fix commit, or "none" if nothing changed' },
    build_passed: { type: 'boolean' },
  },
  required: ['claims_checked', 'claims_fixed', 'claims_cut', 'links_checked', 'links_broken', 'other_problems', 'commit', 'build_passed'],
}

const ISSUES = [
  { n: '09', chapter: '0.3 Standards and orgs' },
  { n: '10', chapter: '0.4 Your lab: local and paid setup' },
  { n: '12', chapter: '1.2 Tokens and tokenization' },
  { n: '18', chapter: '1.8 Sampling and temperature' },
]

const where = (n) => `${ROOT}/.worktrees/issue-${n}`

const workspaceRules = (n) => `Your workspace is the git worktree ${where(n)} on branch issue-${n}. It is already created, with node_modules linked.
- Do ALL reads, edits, commands and commits inside ${where(n)}. Use absolute paths under it. Never touch ${ROOT} itself or the other worktrees under ${ROOT}/.worktrees/.
- Never merge, rebase, push or switch branches. Commit on issue-${n} only.
- Shared files (GLOSSARY.md, book/resources.md, PROGRESS.md) are edited by other tasks in parallel: only append rows/lines, never reorder or reformat.
- To open a URL, use a web-fetch tool if you have one; otherwise \`curl -sL --max-time 20\`. Never invent URLs.`

const results = await pipeline(
  ISSUES,
  (it) => agent(
    `Run issue ${it.n} (chapter ${it.chapter}) of the AI engineering study book.

${workspaceRules(it.n)}

Do the task exactly as the issue file describes: ${where(it.n)}/.scratch/ai-engineering-book/issues/${it.n}-*.md. First read the spec at ${where(it.n)}/.scratch/ai-engineering-book/spec.md (the issue's "Read first" list says which sections), and follow the spec's working agreements: set the issue Status to claimed before starting and resolved when done, add a dated PROGRESS.md log line (date 2026-11-08), run \`npm run build\` in the worktree, and commit. Pay special attention to the accuracy rules, including the new one: every dated or numeric claim links its source in the same paragraph, and prices/rankings/model specs stay on Landscape.

You are not able to ask the learner questions; make reasonable calls and note them in "notes". Return the summary fields.`,
    { label: `write:${it.n}`, phase: 'Write', schema: WRITE_SCHEMA },
  ),
  (w, it) => agent(
    `You are a skeptical fact-checker for chapter ${it.chapter} of a study book, written by another agent (issue ${it.n}, commit ${w ? w.commit : 'HEAD'}).

${workspaceRules(it.n)}

Chapter file: ${where(it.n)}/${w ? w.chapter_file : '(find it from the issue file)'}. Read the spec's "Chapter format" and "Accuracy rules" sections at ${where(it.n)}/.scratch/ai-engineering-book/spec.md.

Check:
1. Every dated or numeric claim (dates, versions, sizes, ratios, counts, benchmark numbers) and every claim attributed to a source: open the source and confirm it says that. If the source doesn't support it, fix the wording to match the source, or cut the claim. A claim with no source in its paragraph either gets one (a real, opened primary source) or is cut.
2. Every external link in the chapter and the rows this task added to book/resources.md: open it. Replace or remove broken ones.
3. No hard-coded prices, rankings or model specs (they belong on book/landscape.md; link there).
4. The six sections exist, "My understanding" is empty, and the Practice gives a brief and steps without solving it for the learner.

Be concrete and conservative: fix only real problems, keep the author's structure and voice. If you changed anything, run \`npm run build\` in the worktree and commit on issue-${it.n} with message "Fact-check chapter ${it.chapter.split(' ')[0]} (issue ${it.n})" ending with the line "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>". Return the summary fields.`,
    { label: `verify:${it.n}`, phase: 'Verify', schema: VERIFY_SCHEMA },
  ).then((v) => ({ issue: it.n, chapter: it.chapter, write: w, verify: v })),
)

return results
