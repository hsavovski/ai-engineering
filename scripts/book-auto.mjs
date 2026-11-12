// Unattended book release: launchd runs `tick` every 15 minutes. Each tick does at most one batch:
// write the open chapter issues (Sonnet, 4 at a time, in dependency waves), then fact-check every
// written chapter through generated fact-check issues (Opus for chapters with flagged claims, Sonnet
// for the rest). Before a batch it reads the real 5-hour and 7-day usage from a tiny Haiku call and
// waits if the batch would push the week past WEEKLY_CAP, so the week's limit is never hit.
//
//   node scripts/book-auto.mjs install     start the launchd job (runs a tick right away)
//   node scripts/book-auto.mjs uninstall   stop it
//   node scripts/book-auto.mjs status      what's open, usage, last batches
//   node scripts/book-auto.mjs pause|resume
//   node scripts/book-auto.mjs tick        one step by hand
//   node scripts/book-auto.mjs fc-preview  the fact-check issues it would generate now
//
// State and logs live in .book-auto/ (untracked, excluded in .git/info/exclude). Same agents and
// merge rules as scripts/workflows/book-batch.workflow.js, run as `claude -p` processes instead.
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { spawn, execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const TRACKER = '.scratch/ai-engineering-book'
const ISSUES = path.join(ROOT, TRACKER, 'issues')
const SPEC = `${TRACKER}/spec.md`
const BACKLOG = path.join(ROOT, TRACKER, 'fact-check-backlog.md')
const STATE_DIR = path.join(ROOT, '.book-auto')
const STATE_FILE = path.join(STATE_DIR, 'state.json')
const LOG_FILE = path.join(STATE_DIR, 'log.md')
const LOCK = path.join(STATE_DIR, 'lock')
const PAUSED = path.join(STATE_DIR, 'paused')
const LABEL = 'com.ai-engineering.book-auto'
const PLIST = path.join(os.homedir(), 'Library/LaunchAgents', `${LABEL}.plist`)
const CO_AUTHOR = 'Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>'

const WEEKLY_CAP = 0.9 // stop starting batches once the 7-day window would pass this
const FIVE_HOUR_START_MAX = 0.5 // a batch of 4 writers used ~33% of the 5-hour window (2026-11-12)
const BATCH_WEIGHT = 4 // a Sonnet writer weighs 1, an Opus fact-check 1, a Sonnet fact-check 0.5
const WEIGHT = { write: 1, 'fc-opus': 1, 'fc-sonnet': 0.5 }
const DEFAULT_WEEKLY_PER_WEIGHT = 0.007 // 58 issues used ~40% of the week, 2026-11-08..12
const MAX_ATTEMPTS = 2
const AGENT_TIMEOUT_MS = 90 * 60_000

// Fact-check priority: the backlog's "shakiest" chapters first
const SHAKIEST = ['3.2', '10.4', '9.2']
// A writer's BUILD-LOG line with one of these means a claim was left unverified
const FLAG = /not verified|could not|couldn't|denied|not opened|via (its )?summary|fetch summar|unverified|not checked|not confirmed|untested|\bnot run\b|not available|returned 40[34]|\b40[34]\b|stale|outdated|conflicts with|does not match|hypothesis/i

// ---------- small helpers ----------

const now = () => new Date().toISOString().replace(/\.\d+Z$/, 'Z')
const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' }).trim()
const tryGit = (...args) => {
  try { return git(...args) } catch { return null }
}

function log(line) {
  fs.mkdirSync(STATE_DIR, { recursive: true })
  fs.appendFileSync(LOG_FILE, `- ${now()} ${line}\n`)
  console.log(line)
}

function notify(title, text) {
  log(`NOTIFY ${title}: ${text}`)
  try {
    execFileSync('osascript', ['-e', `display notification ${JSON.stringify(text)} with title ${JSON.stringify(title)}`])
  } catch {}
}

function loadState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'))
  } catch {
    return { attempts: {}, pendingMerge: [], weeklyPerWeight: DEFAULT_WEEKLY_PER_WEIGHT, batches: [], notified: {} }
  }
}
const saveState = (s) => fs.writeFileSync(STATE_FILE, JSON.stringify(s, null, 2))

function takeLock() {
  fs.mkdirSync(STATE_DIR, { recursive: true })
  if (fs.existsSync(LOCK)) {
    const pid = Number(fs.readFileSync(LOCK, 'utf8'))
    try {
      process.kill(pid, 0)
      return false // a tick is still running a batch
    } catch {}
  }
  fs.writeFileSync(LOCK, String(process.pid))
  return true
}

// ---------- issues and chapters ----------

function chapterFiles() {
  const out = {}
  const book = path.join(ROOT, 'book')
  for (const dir of fs.readdirSync(book).filter((d) => d.startsWith('part-'))) {
    for (const f of fs.readdirSync(path.join(book, dir)).filter((f) => /^\d+\.\d+-.*\.md$/.test(f))) {
      const { data } = matter(fs.readFileSync(path.join(book, dir, f), 'utf8'))
      out[data.chapter] = { file: `book/${dir}/${f}`, needs: data.needs ?? [], tier: data.tier }
    }
  }
  return out
}

function readIssues() {
  return fs
    .readdirSync(ISSUES)
    .filter((f) => /^\d+-.*\.md$/.test(f))
    .map((f) => {
      const text = fs.readFileSync(path.join(ISSUES, f), 'utf8')
      const title = text.split('\n')[0]
      const fc = title.match(/Fact-check chapter (\d+\.\d+)/)
      const wr = title.match(/Write chapter (\d+\.\d+)/)
      return {
        n: f.match(/^(\d+)-/)[1],
        file: `${TRACKER}/issues/${f}`,
        status: text.match(/^Status: (.*)$/m)?.[1].trim(),
        kind: fc ? 'fact-check' : wr ? 'write' : 'other',
        chapter: (fc ?? wr)?.[1],
        model: text.match(/^Model: (\w+)/m)?.[1] ?? 'sonnet',
        experiments: [...new Set([...text.matchAll(/experiments\/(\d+-[\w-]+)/g)].map((m) => m[1]))],
      }
    })
    .sort((a, b) => Number(a.n) - Number(b.n))
}

const isOpen = (i) => i.status !== 'resolved' && i.status !== 'wontfix'
const branchOf = (i) => (i.kind === 'fact-check' ? `factcheck-${i.chapter}` : `issue-${i.n}`)
const weightOf = (i) => (i.kind === 'write' ? WEIGHT.write : i.model === 'opus' ? WEIGHT['fc-opus'] : WEIGHT['fc-sonnet'])

function pickBatch(issues, state) {
  const chapters = chapterFiles()
  const runnable = (i) => i.status === 'ready-for-agent' && (state.attempts[i.n] ?? 0) < MAX_ATTEMPTS
  const openWrites = issues.filter((i) => i.kind === 'write' && isOpen(i))
  const unwritten = new Set(openWrites.map((i) => i.chapter))

  const writes = openWrites.filter((i) => runnable(i) && (chapters[i.chapter]?.needs ?? []).every((n) => !unwritten.has(n)))
  const pool = writes.length ? writes : issues.filter((i) => i.kind === 'fact-check' && runnable(i))

  const batch = []
  let weight = 0
  const usedExperiments = new Set()
  for (const i of pool) {
    if (weight + weightOf(i) > BATCH_WEIGHT) continue
    if (i.experiments.some((e) => usedExperiments.has(e))) continue // issues sharing a folder build on each other
    batch.push(i)
    weight += weightOf(i)
    i.experiments.forEach((e) => usedExperiments.add(e))
  }
  return { batch, weight, openWrites }
}

// ---------- fact-check issue generation ----------

function generateFactCheckIssues(issues, { dryRun = false } = {}) {
  const checked = new Set(
    (tryGit('log', '--format=%s', '--grep', 'Fact-check chapter') ?? '')
      .split('\n')
      .map((s) => s.match(/Fact-check chapter (\d+\.\d+)/)?.[1])
      .filter(Boolean),
  )
  const hasIssue = new Set(issues.filter((i) => i.kind === 'fact-check').map((i) => i.chapter))
  const chapters = chapterFiles()
  const written = issues.filter((i) => i.kind === 'write' && i.status === 'resolved').map((i) => i.chapter)
  const todo = [...new Set(written)].filter((c) => chapters[c] && !checked.has(c) && !hasIssue.has(c))
  if (!todo.length) return 0

  const buildLog = fs.readFileSync(path.join(ROOT, 'BUILD-LOG.md'), 'utf8').split('\n')
  const backlog = fs.existsSync(BACKLOG) ? fs.readFileSync(BACKLOG, 'utf8') : ''
  const backlogSection = (c) => {
    const m = backlog.match(new RegExp(`^### ${c.replace('.', '\\.')} [^\\n]*\\n([\\s\\S]*?)(?=^### |^## |(?![\\s\\S]))`, 'm'))
    return m ? m[1].trim() : ''
  }

  const items = todo.map((c) => {
    const logLines = buildLog.filter((l) => l.includes(`chapter ${c} "`))
    const fromBacklog = backlogSection(c)
    const flaggedLines = logLines.filter((l) => FLAG.test(l))
    const flagged = Boolean(fromBacklog) || flaggedLines.length > 0
    return { c, flagged, fromBacklog, logLines }
  })
  const rank = (x) => (SHAKIEST.includes(x.c) ? 0 : x.flagged ? 1 : 2)
  const byId = (a, b) => a.c.split('.').map(Number).reduce((d, v, k) => d || v - b.c.split('.').map(Number)[k], 0)
  items.sort((a, b) => rank(a) - rank(b) || byId(a, b))

  let next = Math.max(...issues.map((i) => Number(i.n))) + 1
  if (dryRun) {
    for (const it of items) console.log(`${next++} fact-check ${it.c} ${it.flagged ? 'opus' : 'sonnet'}${it.fromBacklog ? ' (backlog)' : ''}`)
    return items.length
  }
  for (const it of items) {
    const n = String(next++)
    const ch = chapters[it.c]
    const body = `# ${n} — Fact-check chapter ${it.c}

Status: ready-for-agent
Type: task
Model: ${it.flagged ? 'opus' : 'sonnet'}
Blocked by: none

## Read first

- \`../spec.md\`, sections "Chapter format" and "Accuracy rules"
- The chapter: \`${ch.file}\`

## Goal

Fact-check chapter ${it.c} (written by another agent): fix or cut wrong, unsourced or stale claims, repair broken links, keep the author's structure and voice. Commit as "Fact-check chapter ${it.c}".
${
  it.flagged
    ? `
## Flagged by the writer (check these first)

${it.fromBacklog ? `From \`fact-check-backlog.md\`:\n\n${it.fromBacklog}\n` : ''}${it.logLines.length ? `\nThe writer's BUILD-LOG notes:\n\n${it.logLines.join('\n')}\n` : ''}`
    : ''
}
## Comments
`
    fs.writeFileSync(path.join(ISSUES, `${n}-fact-check-${it.c.replace('.', '-')}.md`), body)
  }
  git('add', `${TRACKER}/issues`)
  git('commit', '-m', `Add fact-check issues for ${items.length} chapters\n\n${CO_AUTHOR}`, '--', `${TRACKER}/issues`)
  log(`generated ${items.length} fact-check issues (${items.filter((i) => i.flagged).length} flagged → Opus)`)
  return items.length
}

// ---------- claude processes ----------

function runClaude({ prompt, model, cwd, outFile, timeoutMs = AGENT_TIMEOUT_MS }) {
  return new Promise((resolve) => {
    const out = fs.openSync(outFile, 'w')
    const child = spawn(
      'claude',
      ['-p', '--model', model, '--permission-mode', 'auto', '--output-format', 'stream-json', '--verbose', prompt],
      { cwd, stdio: ['ignore', out, out] },
    )
    const timer = setTimeout(() => child.kill('SIGTERM'), timeoutMs)
    child.on('close', (code) => {
      clearTimeout(timer)
      fs.closeSync(out)
      resolve(code)
    })
  })
}

// Real usage, from the rate_limit_event a headless session emits
async function probeUsage() {
  fs.mkdirSync(STATE_DIR, { recursive: true })
  const outFile = path.join(STATE_DIR, 'probe.jsonl')
  await runClaude({ prompt: 'Reply with just: ok', model: 'haiku', cwd: os.tmpdir(), outFile, timeoutMs: 120_000 })
  for (const line of fs.readFileSync(outFile, 'utf8').split('\n').reverse()) {
    if (!line.includes('rate_limit_event')) continue
    const w = JSON.parse(line).rate_limit_info?.unifiedWindows
    if (w?.five_hour && w?.seven_day) {
      return {
        five: w.five_hour.utilization,
        fiveStatus: w.five_hour.status,
        fiveResets: w.five_hour.resetsAt,
        week: w.seven_day.utilization,
        weekStatus: w.seven_day.status,
        weekResets: w.seven_day.resetsAt,
      }
    }
  }
  return null
}

const lastText = (outFile) => {
  try {
    const lines = fs.readFileSync(outFile, 'utf8').trim().split('\n').reverse()
    for (const l of lines) {
      const j = JSON.parse(l)
      if (j.type === 'result') return String(j.result ?? '').slice(0, 2000)
    }
  } catch {}
  return ''
}

// ---------- prompts (same rules as scripts/workflows/book-batch.workflow.js) ----------

const workspace = (dir, branch) => `Your workspace is the git worktree ${dir} on branch ${branch}, already created from main with node_modules symlinked. Do every read, edit, command and commit inside ${dir}, with absolute paths under it. Commit on ${branch} only; merging, pushing and switching branches belong to the merge step. Other agents work in the other worktrees under ${ROOT}/.worktrees/ at the same time.
You run unattended and can't ask anyone anything: make reasonable calls and mention them in your final message.`

const writerPrompt = (i, dir) => `Run issue ${i.n} (chapter ${i.chapter}) of the AI engineering study book.

${workspace(dir, branchOf(i))}

Do the task exactly as the issue file describes: ${i.file}. Read ${SPEC} first and follow its working agreements (claim, BUILD-LOG.md line, resolve, commit). The experiment folder, if the issue has one, is named in the issue: use that exact name. Before committing, \`npm run check -- ${i.chapter}\` and \`npm run build\` must both pass inside the worktree. A separate fact-check pass runs later, so spend your effort on writing; still open every link you cite, as the accuracy rules require. In your BUILD-LOG.md line, name every claim you could not verify and anything you could not run (for example because a permission was denied): the fact-check pass reads that line. End the commit message with "${CO_AUTHOR}".
Finish with a short report: what you added, and anything unverified.`

const factCheckPrompt = (i, dir) => `You are a skeptical fact-checker for chapter ${i.chapter} of the AI engineering study book, written by another agent. This is issue ${i.n}: ${i.file}.

${workspace(dir, branchOf(i))}

Set the issue's Status to claimed. Read the issue (its "Flagged by the writer" section, if any, lists what to check first) and the "Chapter format" and "Accuracy rules" sections of ${SPEC}. \`npm run check -- ${i.chapter}\` covers the mechanical format, so spend your effort on claims and links:
1. Every dated or numeric claim (dates, versions, sizes, ratios, counts, benchmark numbers) and every claim attributed to a source: open the source and confirm it says that. Fix the wording to match the source, or cut the claim. A claim with no source in its paragraph gets a real, opened primary source, or is cut.
2. Every external link in the chapter and the chapter's rows in book/resources.md: open it, and replace or remove broken ones.
3. Prices, rankings and model specs belong on book/landscape.md: replace them with a link there, unless they are clearly a historical, sourced example or a labelled made-up example.
4. The Practice gives a brief, steps and an acceptance check without solving it for the learner; "My understanding" stays untouched.
5. Anything only a person can settle (a command you were not allowed to run, a page that blocks automated access): don't retry it. Make sure the chapter labels it as unverified, and list it in the issue under a "## Needs human" heading.

Fix only real problems and keep the author's structure and voice. Then run \`npm run check -- ${i.chapter}\` and \`npm run build\`, set the issue's Status to resolved, add a dated BUILD-LOG.md line (claims checked, fixed, cut), and commit with the message "Fact-check chapter ${i.chapter}" ending with "${CO_AUTHOR}".
Finish with a short report: claims checked, fixed, cut, and anything left for a human.`

const mergePrompt = (branches) => `Merge finished book branches into main for the AI engineering study book, in ${ROOT} (the main checkout).

Branches to merge, in this order: ${branches.join(', ')}.

1. Check ${ROOT} is on main with no uncommitted changes to tracked files (untracked files such as the learner's notes and .book-auto/ are fine; leave them alone). If not, merge nothing and say why.
2. For each branch, in order: \`git merge --no-ff -m "Merge <branch>" <branch>\`.
   - Conflicts in GLOSSARY.md, book/resources.md, BUILD-LOG.md or the generated book/experiments/index.md are both sides appending rows or lines: keep both sides, the earlier branch's lines first, and existing lines unchanged.
   - A conflict where both sides edited the same existing line of a chapter or of those shared files: combine both edits if they are compatible; otherwise \`git merge --abort\` and skip the branch.
   - Any other conflict: \`git merge --abort\`, skip the branch, and carry on with the next one.
   - After each merge, run \`npm run check\` and \`npm run build\`. If either fails, fix it only if the cause is the merge itself (a lost or duplicated row); otherwise \`git reset --hard HEAD~1\`, skip the branch, and carry on.
3. After the last merge: \`npm run progress\`, and commit the PROGRESS.md change (if any) as "Update progress table" ending with "${CO_AUTHOR}". This regenerates the table only; leave the rest of PROGRESS.md to the learner.
4. For each merged branch: \`git worktree remove .worktrees/<branch>\` (add --force only for the untracked node_modules symlink) and \`git branch -d <branch>\`. Keep the worktrees of skipped branches.
5. Don't push.
Finish with a short report: merged, skipped and why, conflicts and how you resolved them.`

// ---------- worktrees and verification ----------

function freshWorktree(branch) {
  const rel = `.worktrees/${branch}`
  if (fs.existsSync(path.join(ROOT, rel))) tryGit('worktree', 'remove', '--force', rel)
  tryGit('worktree', 'prune')
  if (tryGit('rev-parse', '--verify', '--quiet', `refs/heads/${branch}`) != null) git('branch', '-D', branch)
  git('worktree', 'add', rel, '-b', branch, 'main')
  fs.symlinkSync('../../node_modules', path.join(ROOT, rel, 'node_modules'))
  return path.join(ROOT, rel)
}

function npmOk(cwd, args) {
  try {
    execFileSync('npm', ['run', ...args], { cwd, stdio: 'ignore', timeout: 10 * 60_000 })
    return true
  } catch {
    return false
  }
}

function verify(i, dir) {
  const branch = branchOf(i)
  const ahead = Number(tryGit('rev-list', '--count', `main..${branch}`) ?? 0)
  if (!ahead) return 'no commit'
  const status = (tryGit('show', `${branch}:${i.file}`) ?? '').match(/^Status: (.*)$/m)?.[1]
  if (status !== 'resolved') return `issue status is "${status}"`
  if (!npmOk(dir, ['check', '--', i.chapter])) return 'npm run check failed'
  if (!npmOk(dir, ['build'])) return 'npm run build failed'
  return null
}

// The main checkout mid-rebase/merge, or off main (an editor's "Sync" once started a rebase here)
function gitBusy() {
  const gitDir = path.join(ROOT, '.git')
  for (const [f, what] of [['rebase-merge', 'a rebase'], ['rebase-apply', 'a rebase'], ['MERGE_HEAD', 'a merge'], ['CHERRY_PICK_HEAD', 'a cherry-pick']]) {
    if (fs.existsSync(path.join(gitDir, f))) return `${what} is in progress`
  }
  const branch = tryGit('symbolic-ref', '--short', 'HEAD')
  return branch === 'main' ? null : `the main checkout is on ${branch ?? 'a detached HEAD'}, not main`
}

const merged = (branch) => tryGit('merge-base', '--is-ancestor', branch, 'main') !== null

async function mergeBranches(state, entries, batchDir) {
  const out = path.join(batchDir, 'merge.jsonl')
  await runClaude({ prompt: mergePrompt(entries.map((e) => e.branch)), model: 'sonnet', cwd: ROOT, outFile: out, timeoutMs: 60 * 60_000 })
  const left = []
  for (const e of entries) {
    if (tryGit('rev-parse', '--verify', '--quiet', `refs/heads/${e.branch}`) == null || merged(e.branch)) {
      log(`merged ${e.branch}`)
      // a merged branch the agent didn't clean up
      if (fs.existsSync(path.join(ROOT, '.worktrees', e.branch))) tryGit('worktree', 'remove', '--force', `.worktrees/${e.branch}`)
      tryGit('branch', '-d', e.branch)
      continue
    }
    e.mergeTries = (e.mergeTries ?? 0) + 1
    if (e.mergeTries < 3) left.push(e)
    else {
      state.attempts[e.n] = (state.attempts[e.n] ?? 0) + 1
      log(`gave up merging ${e.branch} after 3 tries; its issue will be redone (attempt ${state.attempts[e.n]})`)
    }
  }
  if (left.length) log(`not merged yet, retrying next tick: ${left.map((e) => e.branch).join(', ')}. Merge agent: ${lastText(out).slice(0, 400)}`)
  state.pendingMerge = left
}

// ---------- the tick ----------

async function tick() {
  if (fs.existsSync(PAUSED)) return console.log('paused')
  if (!takeLock()) return console.log('a batch is running')
  try {
    const state = loadState()
    const busy = gitBusy()
    if (busy) {
      if (!state.notified[`busy:${busy}`]) {
        state.notified[`busy:${busy}`] = now()
        notify('Book automation waiting', `${busy} in ${ROOT}; nothing runs until it's finished.`)
      }
      return saveState(state)
    }
    delete state.notified[Object.keys(state.notified).find((k) => k.startsWith('busy:'))]
    fs.mkdirSync(path.join(STATE_DIR, 'runs'), { recursive: true })

    if (state.pendingMerge.length) {
      const dir = path.join(STATE_DIR, 'runs', `merge-retry-${Date.now()}`)
      fs.mkdirSync(dir)
      await mergeBranches(state, state.pendingMerge, dir)
      return saveState(state)
    }

    let issues = readIssues()
    let { batch, weight } = pickBatch(issues, state)
    // no write can run (all done, or the rest wait on a failed one): fact-check what's written
    if (!batch.length) {
      if (generateFactCheckIssues(issues)) {
        issues = readIssues()
        ;({ batch, weight } = pickBatch(issues, state))
      }
    }
    if (!batch.length) {
      const open = issues.filter(isOpen)
      const key = open.length ? `stuck:${open.map((i) => i.n).join(',')}` : 'done'
      if (!state.notified[key]) {
        state.notified[key] = now()
        if (open.length) notify('Book automation needs you', `${open.length} issues left that it can't run: ${open.map((i) => i.n).join(', ')}. See .book-auto/log.md`)
        else {
          notify('Book release finished', 'Every chapter is written and fact-checked. See .book-auto/log.md')
          writeFinalReport(issues)
          uninstall()
        }
      }
      return saveState(state)
    }

    const usage = await probeUsage()
    if (!usage) return log('usage probe failed; trying again next tick')
    const est = state.weeklyPerWeight * weight
    if (usage.weekStatus !== 'allowed' || usage.week + est > WEEKLY_CAP) {
      const key = `week:${usage.weekResets}`
      if (!state.notified[key]) {
        state.notified[key] = now()
        notify('Book automation waiting', `Week at ${Math.round(usage.week * 100)}%; next batch (~${(est * 100).toFixed(1)}%) would pass ${WEEKLY_CAP * 100}%. Resumes after ${new Date(usage.weekResets * 1000).toLocaleString()}.`)
      }
      return saveState(state)
    }
    if (usage.fiveStatus !== 'allowed' || usage.five > FIVE_HOUR_START_MAX) {
      log(`waiting for the 5h window (${Math.round(usage.five * 100)}%, resets ${new Date(usage.fiveResets * 1000).toLocaleTimeString()})`)
      return saveState(state)
    }

    // ---- run one batch ----
    const id = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-')
    const batchDir = path.join(STATE_DIR, 'runs', id)
    fs.mkdirSync(batchDir, { recursive: true })
    const label = (i) => `${i.kind === 'write' ? 'write' : `fc(${i.model})`} ${i.chapter} #${i.n}`
    log(`batch ${id}: ${batch.map(label).join(', ')} | usage 5h ${Math.round(usage.five * 100)}% 7d ${Math.round(usage.week * 100)}%`)

    const dirs = batch.map((i) => freshWorktree(branchOf(i))) // one at a time: parallel `git worktree add` races
    await Promise.all(
      batch.map((i, k) =>
        runClaude({
          prompt: i.kind === 'write' ? writerPrompt(i, dirs[k]) : factCheckPrompt(i, dirs[k]),
          model: i.kind === 'write' ? 'sonnet' : i.model,
          cwd: dirs[k],
          outFile: path.join(batchDir, `${branchOf(i)}.jsonl`),
        }),
      ),
    )

    const ready = []
    batch.forEach((i, k) => {
      const problem = verify(i, dirs[k])
      const report = lastText(path.join(batchDir, `${branchOf(i)}.jsonl`))
      fs.writeFileSync(path.join(batchDir, `${branchOf(i)}.report.md`), report)
      if (!problem) return ready.push({ n: i.n, branch: branchOf(i) })
      state.attempts[i.n] = (state.attempts[i.n] ?? 0) + 1
      log(`${label(i)} not ready (${problem}); attempt ${state.attempts[i.n]} of ${MAX_ATTEMPTS}, worktree kept`)
      if (state.attempts[i.n] >= MAX_ATTEMPTS) notify('Book issue failed twice', `${label(i)}: ${problem}. Left for you in .worktrees/${branchOf(i)}`)
    })
    if (ready.length) await mergeBranches(state, ready, batchDir)

    // Calibrate the weekly cost per weight unit from the real change, within the same week
    const after = await probeUsage()
    if (after && after.weekResets === usage.weekResets && after.week > usage.week) {
      const measured = (after.week - usage.week) / weight
      state.weeklyPerWeight = state.batches.length ? 0.5 * state.weeklyPerWeight + 0.5 * measured : measured
    }
    state.batches.push({ id, items: batch.map(label), ready: ready.length, before: usage, after })
    log(`batch ${id} done: ${ready.length}/${batch.length} ready${after ? `, usage now 5h ${Math.round(after.five * 100)}% 7d ${Math.round(after.week * 100)}%` : ''}`)
    saveState(state)
  } finally {
    fs.rmSync(LOCK, { force: true })
  }
}

function writeFinalReport(issues) {
  const needsHuman = issues
    .filter((i) => i.kind === 'fact-check')
    .map((i) => {
      const text = fs.readFileSync(path.join(ROOT, i.file), 'utf8')
      const m = text.match(/## Needs human\n([\s\S]*?)(?=\n## |$)/)
      return m && m[1].trim() ? `### ${i.chapter} (issue ${i.n})\n\n${m[1].trim()}\n` : null
    })
    .filter(Boolean)
  fs.writeFileSync(path.join(STATE_DIR, 'needs-human.md'), `# Left for a human after the automated release\n\n${needsHuman.join('\n') || 'Nothing.'}\n`)
}

// ---------- launchd ----------

function install() {
  const node = process.execPath.includes('fnm_multishells')
    ? path.join(os.homedir(), '.local/share/fnm/aliases/default/bin/node')
    : process.execPath
  const plist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>${LABEL}</string>
  <key>ProgramArguments</key>
  <array><string>${node}</string><string>${fileURLToPath(import.meta.url)}</string><string>tick</string></array>
  <key>WorkingDirectory</key><string>${ROOT}</string>
  <key>EnvironmentVariables</key>
  <dict><key>PATH</key><string>${path.dirname(node)}:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin</string></dict>
  <key>StartInterval</key><integer>900</integer>
  <key>RunAtLoad</key><true/>
  <key>StandardOutPath</key><string>${STATE_DIR}/launchd.log</string>
  <key>StandardErrorPath</key><string>${STATE_DIR}/launchd.log</string>
</dict>
</plist>
`
  fs.mkdirSync(STATE_DIR, { recursive: true })
  fs.writeFileSync(PLIST, plist)
  const domain = `gui/${process.getuid()}`
  try { execFileSync('launchctl', ['bootout', `${domain}/${LABEL}`], { stdio: 'ignore' }) } catch {}
  execFileSync('launchctl', ['bootstrap', domain, PLIST])
  log(`installed launchd job ${LABEL} (every 15 min)`)
}

function uninstall() {
  try { execFileSync('launchctl', ['bootout', `gui/${process.getuid()}/${LABEL}`], { stdio: 'ignore' }) } catch {}
  fs.rmSync(PLIST, { force: true })
  log('uninstalled launchd job')
}

async function status() {
  const state = loadState()
  const issues = readIssues()
  const open = issues.filter(isOpen)
  const { batch } = pickBatch(issues, state)
  console.log(`open: ${open.filter((i) => i.kind === 'write').length} write, ${open.filter((i) => i.kind === 'fact-check').length} fact-check`)
  console.log(`next batch: ${batch.map((i) => `${i.kind} ${i.chapter} #${i.n}${i.kind === 'fact-check' ? ` (${i.model})` : ''}`).join(', ') || '(none)'}`)
  console.log(`weekly cost per writer: ${(state.weeklyPerWeight * 100).toFixed(2)}%, failures: ${JSON.stringify(state.attempts)}, pending merge: ${state.pendingMerge.map((e) => e.branch).join(', ') || 'none'}`)
  console.log(`paused: ${fs.existsSync(PAUSED)}, running: ${fs.existsSync(LOCK)}, launchd: ${fs.existsSync(PLIST)}`)
  if (process.argv.includes('--usage')) console.log('usage:', await probeUsage())
  try {
    console.log('\nlast log lines:\n' + fs.readFileSync(LOG_FILE, 'utf8').trim().split('\n').slice(-10).join('\n'))
  } catch {}
}

const cmd = process.argv[2] ?? 'tick'
if (cmd === 'tick') await tick()
else if (cmd === 'fc-preview') generateFactCheckIssues(readIssues(), { dryRun: true })
else if (cmd === 'install') install()
else if (cmd === 'uninstall') uninstall()
else if (cmd === 'status') await status()
else if (cmd === 'pause') fs.mkdirSync(STATE_DIR, { recursive: true }), fs.writeFileSync(PAUSED, now()), log('paused')
else if (cmd === 'resume') fs.rmSync(PAUSED, { force: true }), log('resumed')
else console.log('usage: node scripts/book-auto.mjs [tick|install|uninstall|status [--usage]|pause|resume]')
