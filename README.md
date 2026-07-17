# BlueRock for Builders — Starter

Make your own copy of this template and you have a **Hub** — your home base for working with AI. It knows who you
are and how you write, holds your notes and priorities, and runs your real work: agents
and skills doing the job and writing it back as plain markdown you own, with a dashboard
of what they did. Unlike a chat window that starts fresh every time, the Hub is yours —
real files you control, skills and agents you shape, a setup that grows with your work.

It's the starting line for the [BlueRock for Builders](https://learn.bluerock.io)
curriculum, which takes you from here to a Hub that runs parts of your day. Everything
in this repo is yours to change — the course assumes you will.

## Two pieces: the plugin and this Hub

You install one thing and clone one thing, and they work together:

1. **The BlueRock plugin** brings the skills and agents — `/onboard`,
   `/today`, `/wrap-up`, the `daily-brew` and `scribe` agents, the
   Account Research team, and more. Install it once and they work.
2. **This Hub** is where they run: your `CLAUDE.md`, your `notes/`, your `today.md`, and the
   `design/` dashboard. The dashboard needs both — the plugin writes the data, your Hub
   renders it. (Your Hub lives inside your BlueRock **cloud workspace**, not on your laptop —
   the two are different things.)

You rarely type the full command. Say what you want — *"wrap up my session,"* *"draft a
follow-up from this call"* — and Claude picks the right skill. When you'd rather be explicit,
each tool has a short command like `/wrap-up`: that's the full name `/bluerock:wrap-up` with
the `/bluerock:` prefix dropped, and it works as long as no other installed tool has the same
name (right now none do). If a short name is ever taken, the full `/bluerock:` name still works.

## Quickstart

> You work in your **BlueRock cloud workspace** — opened in Cursor via the **BlueRock
> Connector**, not on your laptop. For the full setup (connect your workspace, install Claude
> Code), follow **[learn.bluerock.io/get-started](https://learn.bluerock.io/get-started)**.
> The short version, once you're in your workspace:

1. **Create your Hub from this template.** Click **"Use this template" → "Create a new
   repository,"** name it `<yourname>-hub`, set it **Private**, and copy the URL. In Cursor:
   **Cmd+Shift+P → "Git: Clone,"** paste the URL, pick your **home folder**. When it asks
   *"open the cloned repository?"* click **Cancel** — your Hub lands as a subfolder (e.g.
   `my-hub`) and the skills find it on their own. (Do this before the plugin, so `/check` has
   a Hub to confirm.)
2. **Install the plugin.** In the Claude Code panel, type `/plugins` (plural) → **Marketplaces**
   tab, add `bluerock-io/claude-plugins` → **Plugins** tab, install **bluerock**
   ("Install for you"), trust it, and **Restart**. Then say *"check my workspace"* (or
   `/check`) — with your Hub already there, it confirms you're set.
3. **Prime your Hub.** Run `/onboard` (or just say *"onboard me"*). Fastest
   start: paste what ChatGPT or Claude already knows about you — the skill hands you a
   prompt to generate that — plus a couple of writing samples. It writes your
   `CLAUDE.md`, `voice.md`, and `objectives.md`, so your Hub knows who you are and how
   you write before you run anything else.

You'll barely touch the terminal. Commits and pushes happen through Cursor's Source Control
panel — and `/wrap-up` does them for you at the end of a session.

## What's in your Hub

| Path | What it is |
|---|---|
| `CLAUDE.md` | Your standing brief — loads every session. `/onboard` fills it (or write it yourself). |
| `voice.md` | Your style guide — every skill reads it so output sounds like you. |
| `objectives.md` | Your ranked priorities — `daily-brew` reads them to decide your focus. |
| `today.md` | Your living to-do for the day — `daily-brew` seeds it, `/today` updates it, `/wrap-up` tallies it. |
| `notes/` | Where your notes live: `scribe` files them, `_TEMPLATE.md` is the shape, `sample-granola.md` is a fictional call to practice on. |
| `examples/` | Filled-in "what good looks like" profiles (`CLAUDE.example.md`, `voice.example.md`, …) to model your own files on. |
| `design/dashboard.html` | Your build dashboard. Open it in a browser; `/wrap-up` refreshes it from your sessions. |

## The plugin's skills work today; the ones you build are yours

You don't copy skills into this repo — the plugin's versions run the moment you install
it. The curriculum walks you through each one so you can see how it's built, and then
you make your own:

- **Build a skill** under `.claude/commands/` — it runs as your own command (say,
  `/standup`) right alongside the plugin's.
- **Build an agent** under `.claude/agents/` — give it the same name as a plugin agent
  (like `daily-brew`) and yours takes over.
- **A couple you just run as-is:** `/wrap-up` and `/check` power your
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
