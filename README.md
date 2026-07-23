# BlueRock for Builders — Starter

Make your own copy of this template and you have a **Hub** — your home base for working with AI. It knows who you
are and how you write, holds your notes and priorities, and runs your real work: agents
and skills doing the job and writing it back as plain markdown you own, with a dashboard
of what they did. Unlike a chat window that starts fresh every time, the Hub is yours —
real files you control, skills and agents you shape, a setup that grows with your work.

It's the starting line for the [BlueRock for Builders](https://learn.bluerock.io)
curriculum, which takes you from here to your AI Work Hub that runs parts of your day. Everything
in this repo is yours to change — the course assumes you will.

## Two pieces: the plugin and this Hub

You install one thing and clone one thing, and they work together:

1. **The BlueRock plugin** brings the run-as-is core — `/onboard`, `/today`, `/wrap-up`,
   `/check`, and the **Account Scorecard** team (`/scorecard`). You run these; you don't edit
   them. Install it once and they work.
2. **This Hub** is where they run, and it comes seeded with more: your `CLAUDE.md`, your
   `notes/`, your `today.md`, the `design/` dashboard, and a set of **agents and skills you own
   and edit** in `.claude/` (below). The dashboard needs both — the plugin writes the data, your
   Hub renders it. (Your Hub lives inside your BlueRock **cloud workspace**, not on your laptop —
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
3. **Set up your Hub.** Run `/onboard` (or just say *"onboard me"*). Fastest
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
| `examples/` | Filled-in "what good looks like" profiles (`CLAUDE.example.md`, `voice.example.md`, `agent.example.md`, …) to model your own files on. |
| `.claude/agents/` | Agents you own and edit: `daily-brew`, `scribe`, `meeting-prep`, and the Account Research team (`researcher`, `signal-scanner`, `composer`). See `.claude/agents/README.md`. |
| `.claude/skills/` | Skills you own and edit: `meeting-recap`, `capture`, and `research` (dispatches the Account Research team). |
| `design/dashboard.html` | Your build dashboard. Open it in a browser; `/wrap-up` refreshes it from your sessions. |

## What you run as-is, and what's yours to edit

Two kinds of tools, and the split is deliberate:

- **The plugin's core, you run as-is:** `/onboard`, `/today`, `/wrap-up`, `/check`, and the
  Account Scorecard team. `/wrap-up` and `/check` especially stay plugin-owned so they keep your
  dashboard correct for you.
- **The agents and skills in `.claude/` are yours:** open them, edit them, build your own
  alongside. They ship seeded so you have a working set on day one; the curriculum teaches you to
  edit and extend them. A skill you add under `.claude/skills/` runs as your own command (say,
  `/standup`); an agent under `.claude/agents/` is a specialist you shape.

That's the arc: a working set on day one, all of it yours to change as you learn what you'd do
differently.

## The curriculum

Eight sessions at [learn.bluerock.io](https://learn.bluerock.io). Get
Started is free; the rest come with the beta:

| # | Session | You leave with |
|---|---|---|
| 1 | Get Started | Your secure workspace connected and your Hub stood up |
| 2 | Meet your first agent team | A real result from a ready agent team, in your first session |
| 3 | Anatomy of an agent | Your first agent spec, written |
| 4 | Give your agent memory | A Hub that knows who you are and how you write |
| 5 | Turn a task into a skill | A skill you use weekly |
| 6 | Assemble a team of agents | Your own team of specialist agents |
| 7 | Put an agent on a schedule | A brief that beats you to your desk |
| 8 | Run your system | A working system, running part of your real week |
