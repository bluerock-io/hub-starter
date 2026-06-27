<!--
EXAMPLE — a reference copy, not a live skill.

This is the wrap-up skill that ships in the BlueRock plugin
(/bluerock:wrap-up). You don't build this one — it's more involved than the
others (it reads your session transcript and regenerates the dashboard data).
It's here so you can understand what runs under the hood when you close a
session, and how the dashboard gets its numbers. The metrics script it calls
ships with the plugin. Nothing in examples/ runs; it's here to learn from.
-->
---
name: wrap-up
description: >-
  End-of-session ritual: log what this session did, refresh my BlueRock
  dashboard, then (with my go-ahead) commit, push, and hand me a continuation
  prompt for next time. Use when I say "wrap up", "done for today", "end
  session", "ship it", or "save my progress". Not for mid-session saves; only
  when the session is actually ending.
---

Wrap up this working session. Conversations end; the work persists. Make sure
everything this session produced survives into the next one: my dashboard
refreshed, the story logged, and — once I say so — committed and ready to pick
back up.

## Steps, in order

### 1. Review the session

Look back over this conversation and identify what got done (finished things,
not attempts), which files were created or changed, any decision I made that
future sessions should know about, and what's unfinished. Don't ask me to
summarize — you were here.

### 2. Refresh my dashboard

Real numbers, not guesses. First read this session's tokens + time honestly from
the Claude Code transcript (the metrics script ships with the plugin). Then:

- **Build this session's run atom(s)** — one per agentic run, matching the
  dashboard data contract (`design/dashboard-data-contract.md`).
- **Append the atom(s) to the run history** (keep all atoms).
- **Tally today's priorities.** Read `today.md` and count Focus items: `set`
  (total), `closed` (`[x]`), `carried` (`[>]`). Offer to check off anything I
  finished this session that's still `[ ]`. This feeds the dashboard's
  "priorities set vs. closed."
- **Roll up the sections and overwrite `design/dashboard-data.js`** so my
  dashboard repaints — match the pinned contract exactly, all keys present.

Provenance is a trust claim. Beta has **no BlueRock sensor pipeline**, so the
label is **"From your sessions,"** never "sensor-sourced." Guardrail data is
`{ wired: false, events: [] }`; cost stays at zero/placeholder unless a real
pricing table is present — never a fabricated number under a trust label.

### 3. Update the session log

Append an entry to `session-log.md` at the project root (create it if missing).
Newest at the bottom, short — a trail, not a diary.

### 4. Show me what's about to be saved

Run `git status` and show me a plain summary plus a proposed one-line commit
message. **Wait for my go-ahead before committing.**

### 5. Commit and push (only after I confirm)

Once I confirm: stage, commit with the agreed message, push. If the push fails,
tell me plainly what happened and what to click. Don't retry silently.

### 6. Hand me the continuation prompt

Print a short prompt I can paste into my next session so it starts already
knowing what this one knew.

## Rules

- Never commit without my explicit go-ahead in this conversation.
- Never push anything that looks like a credential or a private key; flag it.
- If nothing changed this session, say so, still refresh the dashboard and log
  the session if I want the record, and skip the git steps.
