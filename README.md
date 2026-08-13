# BlueRock for AI Builders — Starter

This is **your agentic project** — your home base for working with AI. It knows who you are and
how you write, holds your notes and priorities, and runs your real work: agents and skills doing
the job and writing it back as plain markdown you own, with a dashboard of what they did. Unlike
a chat window that starts fresh every time, your project is yours: real files you control, skills
and agents you shape, a setup that grows with your work.

It's the starting line for the [BlueRock](https://learn.bluerock.io) learning path, which takes
you from here to a project that runs parts of your day. Everything in this repo is yours to
change — the sessions assume you will.

## Two pieces: this project and the plugin

**This project is already here.** It comes with your Cloud AI Workspace, opened and ready — you
don't have to copy or set up anything to get it. The one thing you add is the plugin:

1. **This project** is where the work happens, and it comes seeded: your `CLAUDE.md`, your
   `notes/`, your `today.md`, the `design/` dashboard, and a set of **agents and skills you own
   and edit** in `.claude/` (below).
2. **The BlueRock plugin** brings the run-as-is core — `/bluerock:onboard`, `/bluerock:today`,
   `/bluerock:wrap-up`, `/bluerock:check`, `/bluerock:help`, the **Account Scorecard** team, and
   the learning path itself. You run these; you don't edit them. Install it once and they work.

The dashboard needs both — the plugin writes the data, your project renders it.

> Your project runs inside your **Cloud AI Workspace**, not on your laptop. The two are different
> things: the workspace is the environment BlueRock provides, the project is what you own. (The
> folder is named `my-workspace`; what's inside it is your project.)

You rarely type a full command. Say what you want — *"wrap up my session,"* *"draft a follow-up
from this call"* — and Claude picks the right skill. When you'd rather be explicit, use the full
name like `/bluerock:wrap-up`. The short form (`/wrap-up`) also works as long as no other
installed tool has the same name.

## Quickstart

> **Follow [learn.bluerock.io/get-started](https://learn.bluerock.io/get-started) for the real
> setup** — it asks whether you're using the Claude Desktop app or Cursor and gives you the right
> steps for each. Once you're connected to your workspace, this project is already open and two
> things are left.

1. **Install the plugin.** The marketplace URL and the steps for both apps are in
   [`bluerock-plugins.md`](./bluerock-plugins.md) — or just say *"read bluerock-plugins.md and
   help me install the BlueRock plugin"* and Claude will walk you through it.
   - **Claude Desktop:** Settings → Plugins → Add → Add marketplace → paste the URL → Sync → open
     the **bluerock** tab → click **+** on **BlueRock Builder Toolkit**.
   - **Cursor:** type `/plugins` → **Marketplaces** tab, add the URL → **Plugins** tab, install
     **bluerock**.
   - **Then open a new chat** — plugins only load when a session starts. This is the step people
     miss. Then say *"check my workspace"* (or `/bluerock:check`) to confirm you're set.
2. **Set up your project.** Run `/bluerock:onboard` (or just say *"onboard me"*). Fastest start:
   paste what ChatGPT or Claude already knows about you — the skill hands you a prompt to
   generate that — plus a couple of writing samples. It writes your `CLAUDE.md`, `voice.md`, and
   `objectives.md`, so your project knows who you are and how you write before you run anything
   else.

You'll barely touch the terminal. `/bluerock:wrap-up` saves your work at the end of a session.

## What's in your project

| Path | What it is |
|---|---|
| `CLAUDE.md` | Your standing brief — loads every session. `/bluerock:onboard` fills it (or write it yourself). |
| `voice.md` | Your style guide — every skill reads it so output sounds like you. |
| `objectives.md` | Your ranked priorities — `daily-brew` reads them to decide your focus. |
| `today.md` | Your living to-do for the day — `daily-brew` seeds it, `/bluerock:today` updates it, `/bluerock:wrap-up` tallies it. |
| `bluerock-plugins.md` | The plugin marketplace this project expects, and how to install it. |
| `notes/` | Where your notes live: `scribe` files them, `_TEMPLATE.md` is the shape, `sample-granola.md` is a fictional call to practice on. |
| `examples/` | Filled-in "what good looks like" profiles (`CLAUDE.example.md`, `voice.example.md`, `agent.example.md`, …) to model your own files on. |
| `.claude/agents/` | Agents you own and edit: `daily-brew`, `scribe`, `meeting-prep`, and the Account Research team (`researcher`, `signal-scanner`, `composer`). See `.claude/agents/README.md`. |
| `.claude/skills/` | Skills you own and edit: `meeting-recap`, `capture`, and `research` (dispatches the Account Research team). |
| `design/dashboard.html` | Your build dashboard. `/bluerock:wrap-up` refreshes it from your sessions. |

## What you run as-is, and what's yours to edit

Two kinds of tools, and the split is deliberate:

- **The plugin's core, you run as-is:** `/bluerock:onboard`, `/bluerock:today`,
  `/bluerock:wrap-up`, `/bluerock:check`, and the Account Scorecard team. `/bluerock:wrap-up` and
  `/bluerock:check` especially stay plugin-owned so they keep your dashboard correct for you.
- **The agents and skills in `.claude/` are yours:** open them, edit them, build your own
  alongside. They ship seeded so you have a working set on day one; the sessions teach you to
  edit and extend them. A skill you add under `.claude/skills/` runs as your own command (say,
  `/standup`); an agent under `.claude/agents/` is a specialist you shape.

That's the arc: a working set on day one, all of it yours to change as you learn what you'd do
differently.

## The learning path

Eight sessions. They run **right here in your session** — say *"start the course"* or
`/bluerock:learn` once the plugin is installed, and it picks up where you left off.
[learn.bluerock.io](https://learn.bluerock.io) has the same sessions to read along with.

| # | Session | You leave with |
|---|---|---|
| 1 | Get Started | Your Cloud AI Workspace connected and your project live |
| 2 | Meet your first agent team | A real result from a ready agent team, in your first session |
| 3 | Anatomy of an agent | An agent you edited, filing your real day |
| 4 | Give your agent memory | A project that knows who you are and how you write |
| 5 | Turn a task into a skill | A skill you use weekly |
| 6 | Assemble a team of agents | Your own team of specialist agents |
| 7 | Put an agent on a schedule | A brief that beats you to your desk |
| 8 | Run your system | A working system, running part of your real week |

Session 7 is where you connect your own GitHub repo, so your project is backed up and your
scheduled agents can reach it. Everything before that runs without one.
