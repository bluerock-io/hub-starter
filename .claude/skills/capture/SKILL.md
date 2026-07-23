---
name: capture
description: >-
  Fast capture — jot something down right now without thinking about where it
  goes. Use when I say "capture this", "note this", "remember that", "jot this
  down", or paste a quick thought or snippet mid-day.
---

The fast front door for intake. I give you a thought, a result, a to-do, or a
pasted snippet; you file it so it's not lost and it shows up where it should.

## First — anchor to the Hub

Notes belong in the builder's Hub — the repo they cloned from the starter. In an
SSH/cloud container the session usually starts in the **home folder**, with the Hub one
level down. The builder named it when they cloned (`maria-hub`, `alex-hub` — don't
assume a fixed name like `hub-starter`); identify it by its signature, not its name.
Before filing: run `ls`. See `CLAUDE.md` and `design/` side by side? You're in the Hub.
If not, find it: `ls */CLAUDE.md`, then `ls ~/*/CLAUDE.md`, else
`find ~ -maxdepth 3 -path '*/design/dashboard.html'`. `cd` into that folder, capture its
**absolute path** with `pwd`, and file notes at that full path
(e.g. `/home/you/maria-hub/notes/`) — never a bare relative path, so nothing lands in
the home folder. Can't find it at all? Ask the builder where they cloned their Hub. A
captured note the builder can't find later is worse than none.

## What to do

1. **File the note** into today's notes (`notes/<today>.md`) under the right
   section — the same convention `scribe` uses (Meetings / Decisions / Open
   threads / Brain dump). For anything substantial, hand off to the `scribe`
   agent; for a one-liner, just append.
2. **If it's a task or priority,** also add it to `today.md` Focus as a `[ ]`
   item (see `/today`).
3. **Confirm in one line** — where it went. Don't re-print the file.

## Rules

- Speed over ceremony: no clarifying questions unless it's truly ambiguous.
- Never overwrite; always append.
- Plain English, no infra vocabulary.
