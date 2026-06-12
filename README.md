# hub-starter

The seeded starting point for your Hub: a repo where your AI agents,
skills, and working memory live as plain markdown files. This starter
pairs with the BlueRock for Builders curriculum.

You own this repo. Everything in it is yours to customize, and the
curriculum assumes you will.

## Quickstart

1. Click **"Use this template" → "Create a new repository"** at the top
   of this page. Name it `<yourname>-hub`, set it **Private**.
2. In Cursor: **Cmd+Shift+P → "Git: Clone"**, paste your new repo's URL,
   pick a folder, authorize GitHub in the browser when prompted, then
   **Open**.
3. Open `CLAUDE.md` and fill in the bracketed sections. That file is
   your standing brief: every Claude Code session in this folder reads
   it first.

No terminal needed at any point. Commits and pushes happen through
Cursor's Source Control panel.

## What's seeded, and which module it belongs to

| Path | What it is | Module |
|---|---|---|
| `CLAUDE.md` | Your standing brief (a sample to customize) | M2 |
| `.claude/agents/scribe.md` | End-of-day note-filer agent | M1 (worked example) · M2 (you run it) |
| `.claude/agents/daily-brew.md` | Next-morning briefing agent | M2 (you run it) · M5 (you schedule it) |
| `.claude/commands/follow-up-email/SKILL.md` | Follow-up email skill | M3 (worked example) |
| `.claude/commands/wrap-up/SKILL.md` | End-of-session wrap ritual: log, commit, push, continuation prompt | M3 (optional second skill) · M6 (your wrap ritual) |
| `notes/_TEMPLATE.md` | Daily note template (the storage layer) | M2 |
| `notes/sample-granola.md` | A fictional call transcript for practicing | M2, M3 |

## Seeded vs. built

The seeded files are the worked examples from the curriculum: an answer
key, not a finished product. In each module's Your Turn you build your
own: M2 customizes `CLAUDE.md`, M3 ships a new skill, M4 ships a new
agent. Clone for structure. Build for learning.

## The six modules

| # | Module | You leave with |
|---|---|---|
| 1 | Anatomy of an agent | Your first agent spec, written |
| 2 | Build your Hub | This repo, alive: notes flowing in, agents running |
| 3 | Skills as operational playbooks | A skill you use weekly |
| 4 | Agents as your specialists | A specialist agent you designed |
| 5 | Async agents | A brief that's waiting for you when you wake up |
| 6 | Your Hub in action | A working system, presented |
