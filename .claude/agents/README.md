# Your agents

These are **your agents**. They live here in your Hub, in `.claude/agents/`, so they are
yours to read, run, edit, and add to. Open any file to see how it works. Change it and the
next run uses your version.

## What you start with

Your Hub comes seeded with a working team so you have a head start:

- **`daily-brew`** — a morning brief that closes yesterday's loop and sets today's priorities.
- **`scribe`** — files a note any time you drop one.
- **`meeting-prep`** — a short brief before a call.
- **`researcher`, `signal-scanner`, `composer`** — the Account Research team. Together they
  produce a deep, sourced dossier on a company (run the `research` skill to dispatch them).

## Edit them, or add your own

- **Edit:** open any file above and change it. These are yours — no forking, no cache. Your
  edits take effect the next time the agent runs.
- **Add one:** ask Claude Code in your Hub to create an agent (it saves the new file right
  here, `.claude/agents/<name>.md`), or copy `examples/agent.example.md` and fill it in.
- Each agent is a plain markdown file: a small frontmatter block (`name`, `description`, and
  optionally `tools`, `model`) plus the five-part anatomy — Identity, Job, Context, Tools,
  Output. See `examples/agent.example.md` for a template.

## Where an agent lives (scope)

- **In this Hub** — an agent in `.claude/agents/` (here) works whenever you're in this Hub,
  and it travels with the repo when you commit. This is the right home for most of your agents.
- **In every project** — once an agent is good enough that you want it everywhere, save a copy
  at `~/.claude/agents/<name>.md`. It's then available in all your projects on this machine (but
  it isn't part of this Hub).

## A note on the BlueRock plugin's agents

A couple of agents (`scout` and `scorer`, the Account Scorecard team) come from the BlueRock
plugin and run as-is — you don't edit those. Everything in this folder is yours.
