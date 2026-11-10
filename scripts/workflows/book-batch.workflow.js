// One batch of book work: write chapters (issues) and/or fact-check written chapters, each in its
// own worktree, then one agent merges the branches into main. Nothing is pushed.
//
// Before a run, the launching session fills in the two lists below:
// - WRITE: open chapter issues whose `needs` are all written (at most ~4 per batch), never two
//   that share an experiment folder (e.g. 93 and 99 both use 38-lora).
// - FACT_CHECK: written chapters not yet fact-checked; `git log --oneline --grep "Fact-check chapter"`
//   lists the ones that are. Fact-checking is a separate, optional pass to save Pro usage.
// Either list may be empty.
// Then it creates the worktrees one after another (`git worktree add` run in parallel races on
// .git/worktrees and can fail), using the two commands in workspace() below with each branch name:
// issue-NN for WRITE, factcheck-X.Y for FACT_CHECK.
export const meta = {
  name: 'book-batch',
  description: 'Write chapter issues and/or fact-check chapters in parallel worktrees, then merge them into main',
  phases: [
    { title: 'Work', detail: 'one agent per issue or chapter, each in its own worktree' },
    { title: 'Merge', detail: 'one agent merges every finished branch into main, checks and builds' },
  ],
}

const WRITE = [
  // { issue: '22', chapter: '1.12' },
]
const FACT_CHECK = [
  // { chapter: '1.1' },
]

const ROOT = '/Users/icosvsk/Desktop/claude/learning/ai-engineering'
const SPEC = '.scratch/ai-engineering-book/spec.md'
const CO_AUTHOR = 'Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>'

const WORK_SCHEMA = {
  type: 'object',
  properties: {
    branch: { type: 'string' },
    chapter_file: { type: 'string' },
    commit: { type: 'string', description: 'short SHA of the last commit on the branch, or "none" if the work failed' },
    check_passed: { type: 'boolean', description: 'npm run check -- <id> passes' },
    build_passed: { type: 'boolean' },
    changes: { type: 'array', items: { type: 'string' }, description: 'writer: resources/glossary terms/experiment folder added; fact-checker: claim → what changed, link → what was done' },
    notes: { type: 'string', description: 'anything surprising, dropped, or left for the learner' },
  },
  required: ['branch', 'chapter_file', 'commit', 'check_passed', 'build_passed', 'changes', 'notes'],
}

const MERGE_SCHEMA = {
  type: 'object',
  properties: {
    merged: { type: 'array', items: { type: 'string' }, description: 'branch → merge commit SHA' },
    skipped: { type: 'array', items: { type: 'string' }, description: 'branch → why it was left unmerged' },
    conflicts_resolved: { type: 'array', items: { type: 'string' }, description: 'file → how' },
    check_passed: { type: 'boolean', description: 'npm run check passes on main after the last merge' },
    build_passed: { type: 'boolean' },
    progress_commit: { type: 'string', description: 'SHA of the PROGRESS.md table update, or "none"' },
    notes: { type: 'string' },
  },
  required: ['merged', 'skipped', 'conflicts_resolved', 'check_passed', 'build_passed', 'progress_commit', 'notes'],
}

// Same setup as the spec's working agreements; the agent runs it itself.
const workspace = (name) => {
  const dir = `${ROOT}/.worktrees/${name}`
  return `Your workspace is the git worktree ${dir} on branch ${name}, normally created before this run. If it doesn't exist, create it from ${ROOT}:

    git worktree add .worktrees/${name} -b ${name} main
    ln -s ../../node_modules .worktrees/${name}/node_modules

If \`git worktree add\` fails (other agents may be adding worktrees at the same moment), run \`git worktree prune\`, delete the ${name} branch if it was created, wait a few seconds and retry, up to three times. Then do every read, edit, command and commit inside ${dir}, with absolute paths under it. Commit on ${name} only; merging, pushing and switching branches belong to the merge step. Other agents work in the other worktrees under ${ROOT}/.worktrees/ at the same time.
You can't ask the learner anything: make reasonable calls and put them in "notes".`
}

const writer = ({ issue, chapter }) =>
  agent(
    `Run issue ${issue} (chapter ${chapter}) of the AI engineering study book.

${workspace(`issue-${issue}`)}

Do the task exactly as the issue file describes: .scratch/ai-engineering-book/issues/${issue}-*.md. Read ${SPEC} first and follow its working agreements (claim, BUILD-LOG.md line, resolve, commit). The experiment folder, if the issue has one, is named in the issue: use that exact name. Before committing, \`npm run check -- ${chapter}\` and \`npm run build\` must both pass inside the worktree. A separate fact-check pass runs later, so spend your effort on writing; still open every link you cite, as the accuracy rules require. End the commit message with "${CO_AUTHOR}".`,
    { label: `write:${chapter}`, phase: 'Work', schema: WORK_SCHEMA },
  )

const factChecker = ({ chapter }) =>
  agent(
    `You are a skeptical fact-checker for chapter ${chapter} of the AI engineering study book, written by another agent.

${workspace(`factcheck-${chapter}`)}

Find the chapter under book/part-*/ by its \`chapter: "${chapter}"\` frontmatter. Read the "Chapter format" and "Accuracy rules" sections of ${SPEC}. \`npm run check -- ${chapter}\` covers the mechanical format, so spend your effort on claims and links:
1. Every dated or numeric claim (dates, versions, sizes, ratios, counts, benchmark numbers) and every claim attributed to a source: open the source and confirm it says that. Fix the wording to match the source, or cut the claim. A claim with no source in its paragraph gets a real, opened primary source, or is cut.
2. Every external link in the chapter and the chapter's rows in book/resources.md: open it, and replace or remove broken ones.
3. Prices, rankings and model specs belong on book/landscape.md: replace them with a link there, unless they are clearly a historical, sourced example or a labelled made-up example.
4. The Practice gives a brief, steps and an acceptance check without solving it for the learner; "My understanding" stays untouched.

Fix only real problems and keep the author's structure and voice. Then run \`npm run check -- ${chapter}\` and \`npm run build\`, and commit with the message "Fact-check chapter ${chapter}" (use \`git commit --allow-empty\` if nothing needed fixing, so the check is on record), ending with "${CO_AUTHOR}".`,
    { label: `fact-check:${chapter}`, phase: 'Work', schema: WORK_SCHEMA },
  )

// One failed agent leaves its branch unmerged instead of failing the whole batch
const settle = (run, branch) =>
  run.then(
    (r) => ({ ...r, branch }),
    (err) => ({ branch, chapter_file: '', commit: 'none', check_passed: false, build_passed: false, changes: [], notes: `agent failed: ${err?.message ?? err}` }),
  )
const work = [
  ...WRITE.map((w) => settle(writer(w), `issue-${w.issue}`)),
  ...FACT_CHECK.map((f) => settle(factChecker(f), `factcheck-${f.chapter}`)),
]
const results = await Promise.all(work)

const ready = results.filter((r) => r.commit !== 'none' && r.check_passed && r.build_passed)
const notReady = results.filter((r) => !ready.includes(r))

const merge = ready.length
  ? await agent(
      `Merge finished book branches into main for the AI engineering study book, in ${ROOT} (the main checkout).

Branches to merge, in this order: ${ready.map((r) => r.branch).join(', ')}.

1. Check ${ROOT} is on main with no uncommitted changes to tracked files (untracked files such as the learner's notes are fine; leave them alone). If not, merge nothing and explain in "notes".
2. For each branch, in order: \`git merge --no-ff -m "Merge <branch>" <branch>\`.
   - Conflicts in GLOSSARY.md, book/resources.md or BUILD-LOG.md are both sides appending rows or lines: keep both sides, the earlier branch's lines first, and existing lines unchanged.
   - Any other conflict: \`git merge --abort\`, list the branch under "skipped" with the files, and carry on with the next branch.
   - After each merge, run \`npm run check\` and \`npm run build\`. If either fails, fix it only if the cause is the merge itself (a lost or duplicated row); otherwise \`git reset --hard HEAD~1\`, list the branch under "skipped" with the error, and carry on.
3. After the last merge: \`npm run progress\`, and commit the PROGRESS.md change (if any) as "Update progress table" ending with "${CO_AUTHOR}". This regenerates the table only; leave the rest of PROGRESS.md to the learner.
4. For each merged branch: \`git worktree remove .worktrees/<branch>\` (add --force only for the untracked node_modules symlink) and \`git branch -d <branch>\`. Keep the worktrees of skipped branches.
5. Leave the push to the learner.`,
      { label: 'merge', phase: 'Merge', schema: MERGE_SCHEMA },
    )
  : null

return {
  work: results,
  not_merged: notReady.map((r) => `${r.branch}: commit ${r.commit}, check ${r.check_passed}, build ${r.build_passed}. ${r.notes}`),
  merge,
}
