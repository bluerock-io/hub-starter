# hub-starter

The starting point for your Hub: the workspace where your AI agents read and
write your real work as plain markdown — notes, priorities, your profile, and a
dashboard of what your agents did. This starter pairs with the BlueRock for
Builders curriculum and the BlueRock plugin.

You own this repo. Everything in it is yours to customize, and the curriculum
assumes you will.

## How it fits together

Two pieces work together — you need both:

1. **The BlueRock plugin** gives you the working skills and agents (`/onboard`,
   `daily-brew`, `/today`, `meeting-recap`, `/wrap-up`, and more). Install it once
   and they just work.
2. **This scaffold** is the project they operate in: your `CLAUDE.md`, your
   `notes/`, your `today.md`, and the `design/` dashboard the plugin's `/wrap-up`
   refreshes. The dashboard needs both: the plugin writes the data, the scaffold
   renders it.

## Quickstart

1. **Install the plugin** in Claude Code:
   ```
   /plugin marketplace add lvn-bluerock/claude-plugins
   /plugin install bluerock@bluerock
   ```
2. **Clone this scaffold.** Click **"Use this template" → "Create a new
   repository"** at the top of this page. Name it `<yourname>-hub`, set it
   **Private**. In Cursor: **Cmd+Shift+P → "Git: Clone"**, paste the URL, open it.
3. **Prime your Hub.** Run `/onboard`. The fastest start: open ChatGPT or Claude
   and run this, then paste the result back into `/onboard`:

   ```
   Based on everything you know about me from our past conversations and your
   memory, write a profile I can use to set up a new AI workspace. Pull from real
   patterns in how I've actually worked with you — not generic guesses. If a
   section lacks signal, say so rather than inventing.

   ## Who I am
   My role, company/industry, and what I actually spend my time on day to day.
   ## What I'm working on
   My current projects, goals, and recurring priorities.
   ## How I write and communicate
   My voice: tone, sentence length, vocabulary I favor, things I avoid. Quote 2–3
   short phrasings that sound like me if you can.
   ## How I like AI to help
   Response length, format, level of detail, what frustrates me, what I value.
   ## Domain context
   The specialized knowledge, jargon, tools, or people that recur in my work.

   Keep it concrete and paste-ready — a brief I'd hand a new assistant on day one.
   ```

   `/onboard` turns that into your `CLAUDE.md`, `voice.md`, and `objectives.md` —
   now your Hub knows who you are and how you write.

No terminal needed at any point. Commits and pushes happen through Cursor's
Source Control panel.

## What's in here

| Path | What it is |
|---|---|
| `CLAUDE.md` | Your standing brief — loads every session. Filled by `/onboard` (or by hand). |
| `voice.md` | Your style guide — every content skill reads it so output sounds like you. |
| `objectives.md` | Your ranked priorities — `daily-brew` reads it to decide your focus. |
| `today.md` | Your living priorities for the day — `daily-brew` seeds it, `/today` updates it, `/wrap-up` tallies it. |
| `notes/_TEMPLATE.md` | The shape of a daily note: the four sections `scribe` writes and `daily-brew` reads. |
| `notes/sample-granola.md` | A fictional call transcript for practice. |
| `examples/` | Annotated reference copies of the plugin's skills + filled "what good looks like" profiles. Read them, then build your own. |
| `design/dashboard.html` | Your build dashboard. Open it in a browser; `/wrap-up` refreshes its data. |

## The skills live in the plugin; you build your own

The `examples/` folder holds reference copies of the skills and agents — the
answer key. They are **not** live (live copies here would shadow the plugin and
break the working rhythm). The plugin's versions run out of the box. When the
curriculum says "make it yours," you create your own version under `.claude/`
(e.g. `.claude/agents/daily-brew.md`) and **your version automatically overrides
the plugin's**. Clone for the workspace. Install for the skills. Build for ownership.

## The curriculum

| # | Module | You leave with |
|---|---|---|
| 1 | Anatomy of an agent | Your first agent spec, understood |
| 2 | Prime your Hub | A Hub that knows who you are and how you write |
| 3 | Skills as operational playbooks | A skill you use weekly |
| 4 | Agents as your specialists | A specialist agent you made your own |
| 5 | Async agents | A brief that's waiting for you when you wake up |
| 6 | Your Hub in action | A working system, presented — with your dashboard as proof |
