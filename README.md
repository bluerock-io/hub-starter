# BlueRock for Builders — Starter

Clone this and you have a **Hub** — your home base for working with AI. It knows who you
are and how you write, holds your notes and priorities, and runs your real work: agents
and skills doing the job and writing it back as plain markdown you own, with a dashboard
of what they did. Unlike a chat window that starts fresh every time, the Hub is yours —
real files you control, skills and agents you shape, a setup that grows with your work.

It's the starting line for the [BlueRock for Builders](https://builders.bluerock.io/learn)
curriculum, which takes you from here to a Hub that runs parts of your day. Everything
in this repo is yours to change — the course assumes you will.

## Two pieces: the plugin and this Hub

You install one thing and clone one thing, and they work together:

1. **The BlueRock plugin** brings the skills and agents — `/bluerock:onboard`,
   `/bluerock:today`, `/bluerock:wrap-up`, the `daily-brew` and `scribe` agents, the
   Account Research team, and more. Install it once and they work.
2. **This Hub** is the workspace they run in: your `CLAUDE.md`, your `notes/`, your
   `today.md`, and the `design/` dashboard. The dashboard needs both — the plugin writes
   the data, your Hub renders it.

You rarely type the full command. Say what you want — *"wrap up my session,"* *"draft a
follow-up from this call"* — and Claude picks the right skill. The `/bluerock:` form is
there when you'd rather be explicit.

## Quickstart

1. **Install the plugin** in Claude Code (the panel inside Cursor):
   ```
   /plugin marketplace add bluerock-io/claude-plugins
   /plugin install bluerock@bluerock
   ```
2. **Create your Hub from this template.** Click **"Use this template" → "Create a new
   repository,"** name it `<yourname>-hub`, and set it **Private**. In Cursor:
   **Cmd+Shift+P → "Git: Clone,"** paste the URL, open it.
3. **Prime your Hub.** Run `/bluerock:onboard` (or just say *"onboard me"*). Fastest
   start: paste what ChatGPT or Claude already knows about you — the skill hands you a
   prompt to generate that — plus a couple of writing samples. It writes your
   `CLAUDE.md`, `voice.md`, and `objectives.md`, so your Hub knows who you are and how
   you write before you run anything else.

You'll barely touch the terminal. Commits and pushes happen through Cursor's Source Control
panel — and `/bluerock:wrap-up` does them for you at the end of a session.

## What's in your Hub

| Path | What it is |
|---|---|
| `CLAUDE.md` | Your standing brief — loads every session. `/bluerock:onboard` fills it (or write it yourself). |
| `voice.md` | Your style guide — every skill reads it so output sounds like you. |
| `objectives.md` | Your ranked priorities — `daily-brew` reads them to decide your focus. |
| `today.md` | Your living to-do for the day — `daily-brew` seeds it, `/bluerock:today` updates it, `/bluerock:wrap-up` tallies it. |
| `notes/` | Where your notes live: `scribe` files them, `_TEMPLATE.md` is the shape, `sample-granola.md` is a fictional call to practice on. |
| `examples/` | Filled-in "what good looks like" profiles (`CLAUDE.example.md`, `voice.example.md`, …) to model your own files on. |
| `design/dashboard.html` | Your build dashboard. Open it in a browser; `/bluerock:wrap-up` refreshes it from your sessions. |

## The plugin's skills work today; the ones you build are yours

You don't copy skills into this repo — the plugin's versions run the moment you install
it. The curriculum walks you through each one so you can see how it's built, and then
you make your own:

- **Build a skill** under `.claude/commands/` — it runs as your own command (say,
  `/standup`) right alongside the plugin's.
- **Build an agent** under `.claude/agents/` — give it the same name as a plugin agent
  (like `daily-brew`) and yours takes over.
- **A couple you just run as-is:** `/bluerock:wrap-up` and `/bluerock:check` power your
  dashboard, so the plugin keeps their format correct for you.

That's the arc: install for skills that work on day one, build your own as you learn
what you'd change.

## The curriculum

Six modules at [learn.bluerock.io](https://learn.bluerock.io). Get
Started is free; the six modules come with the beta:

| # | Module | You leave with |
|---|---|---|
| 1 | Anatomy of an agent | Your first agent spec, written |
| 2 | Prime your Hub | A Hub that knows who you are and how you write |
| 3 | Skills as operational playbooks | A skill you use weekly |
| 4 | Agents as your specialists | A specialist agent you made your own |
| 5 | Async agents | A brief that beats you to your desk |
| 6 | Your Hub in action | A working system, presented — with your dashboard |
