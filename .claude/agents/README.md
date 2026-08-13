# Your agents

These are **your agents**. They live here in your project, in `.claude/agents/`, so they are
yours to read, run, edit, and add to. Open any file to see how it works. Change it and the
next run uses your version.

## What you start with

Your project comes seeded with a working team so you have a head start:

- **`daily-brew`** — a morning brief that closes yesterday's loop and sets today's priorities.
- **`scribe`** — files a note any time you drop one.
- **`meeting-prep`** — a short brief before a call.
- **`researcher`, `signal-scanner`, `composer`** — the Account Research team. Together they
  produce a deep, sourced dossier on a company (run the `research` skill to dispatch them).

## Edit them, or add your own

- **Edit:** open any file above and change it. These are yours — no forking, no cache. Your
  edits take effect the next time the agent runs.
- **Add one:** ask Claude Code in your project to create an agent (it saves the new file right
  here, `.claude/agents/<name>.md`), or copy `examples/agent.example.md` and fill it in.
- Each agent is a plain markdown file: a small frontmatter block (`name`, `description`, and
  optionally `tools`, `model`) plus the five-part anatomy — Identity, Job, Context, Tools,
  Output. See `examples/agent.example.md` for a template.

## Where an agent lives

**This folder.** That's it — there's one home for your agents and you're looking at it. An
agent here works whenever you're in your project, and it travels with the repo when you save
your work.

You may see `~/.claude/agents` mentioned elsewhere as a second, machine-wide location. In your
workspace it isn't a separate place: `/bluerock:check` links it to this folder, which is what
makes your agents load in every new chat. Saving to either path writes to the same files.

## A note on the BlueRock plugin's agents

Some agents come from the BlueRock plugin and run as-is — you don't edit those: `scout` and
`scorer` (the Account Scorecard team) and `site-reader` and `distiller` (the Messaging Doc
team). Everything in *this* folder is yours.
