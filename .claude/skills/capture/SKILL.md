---
name: capture
description: >-
  Fast capture — jot something down right now without thinking about where it
  goes. Use when I say "capture this", "note this", "remember that", "jot this
  down", or paste a quick thought or snippet mid-day.
---

The fast front door for intake. I give you a thought, a result, a to-do, or a
pasted snippet; you file it so it's not lost and it shows up where it should.

## First — anchor to the project

Notes belong in the builder's project — the folder holding `CLAUDE.md` and `design/` side by
side. **The session usually starts inside it already**, so check that first. Its folder is
normally named `my-workspace`, but identify it by that signature, not by its name (older
setups have it one level below the home folder under a name the builder chose). Before
filing: run `ls`. See `CLAUDE.md` and `design/` side by side? You're in the project.
If not, find it: `ls */CLAUDE.md`, then `ls ~/*/CLAUDE.md`, else
`find ~ -maxdepth 3 -path '*/design/dashboard.html'`. `cd` into that folder, capture its
**absolute path** with `pwd`, and file notes at that full path
(e.g. `/home/you/maria-hub/notes/`) — never a bare relative path, so nothing lands in
the home folder. Can't find it at all? Ask the builder where they cloned their project. A
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
