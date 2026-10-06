# Builders Dashboard — data contract (what `/bluerock:wrap-up` must emit)

> ⚑ **This file is the single authority on the dashboard's shape, and
> `/bluerock:wrap-up` (in the `bluerock` plugin, `skills/wrap-up/SKILL.md`, step 2) is its
> one consumer.** Wrap-up writes only the fields defined here, in the structure defined
> here: no invented fields, no improvised formats, no restyling. If a value has no honest
> source, the field gets its defined empty state rather than a plausible number — every
> such state is specified below. **Changing a field name or shape here breaks the writer
> and the renderer together**, so change all three in one pass: this file,
> `dashboard.html`, and the skill.

> Derived from the approved BlueRock Dashboard design.
> Beta has **no BR OTEL/sensor data** — every value below is sourced from files the
> builder's agentic project's `/bluerock:wrap-up` skill emits about the builder's own
> activity.
> **Label decision (2026-06-17):** "Sensor-sourced" is **softened** to honest
> framing ("From your sessions") since beta data is `/bluerock:wrap-up`, not OTEL. The renderer
> ships with this softened wording.

## Delivery model
The dashboard is **not** a Next.js route. It is a **design stored in the builder's
agentic project** that renders as a **local HTML page** — no server. The project's
`/bluerock:wrap-up` skill regenerates the data file from the builder's own session activity, and
the renderer reads it. This workaround is sufficient for beta.

- `design/dashboard.html` — self-contained renderer (cool-paper, opens via `file://`).
- `design/dashboard-data.js` — the data file `/bluerock:wrap-up` **overwrites**; sets
  `window.__BR_DASH__` and is loaded by `<script src>` so it works without a server
  (a `fetch()` of a local JSON is blocked over `file://`; a `<script src>` is not).
## Source of truth
`/bluerock:wrap-up` (runs in the builder's **agentic project**) writes the per-run atoms
(`runs[]`, below) **and** the pre-rolled sections (cost / actions / perf / brag) computed
from those atoms at wrap-up time. The renderer just paints — it does not re-aggregate.
Prefer **structured/typed** output over a prose blob — structured fields at design time
beat re-parsing prose later. The pinned top-level shape is `window.__BR_DASH__` (see `dashboard-data.js`):
`{ meta, productivity, priorities, cost, actions, guardrail, perf, brag, runs }`.

## Chrome
- **No left nav.** Single full-width column. The old sidebar nav counts / projects /
  learning-path list are dropped; the learning-path resume pointer lives in the welcome strip.
- **Logo** = the `builders-logo-light.svg` lockup in the topbar (copied into `design/`
  for the standalone render), **not** a hand-built mark + text. Brand-blue is logo-only.
- **Styling** matches learn.bluerock.io by construction — both use the resolved
  BlueRock builders palette (cool-paper: same cream / coral / ink families, radii, blue
  shadows, Source Serif 4 / DM Sans / JetBrains Mono).

### Seed honesty
- **`sample: true`** — top-level flag, set by the seeded `dashboard-data.js` only. Renders one quiet line above the welcome strip: *"Sample data — your own numbers replace this after your first wrap-up."* Every card on the page rolls up from the same seeded `runs[]`, so before a builder's first wrap-up the whole dashboard shows a stranger's week; the flag makes that a demo rather than a deception.
- **`/bluerock:wrap-up` drops the flag when it writes real rollups** (or writes `sample: false`). It is the one key wrap-up removes rather than updates, and nothing else clears it. The full empty-state design — what this page should look like before any run exists — is a separate decision, deliberately not made here.

## Fields the mockup needs

### Workspace meta (topbar)
- **Header simplified (2026-06-24):** logo lockup at 3× (90px); **dropped** workspace name/region, "online · N days" uptime, and "Open in Cursor". Topbar = logo + Trial pill / Help / avatar.
- trial days left ("11 days left") — **account arithmetic** (`30 − days since trial start`; 30-day trial, from 2026-10-07), seeded at provisioning, not telemetry.

### Welcome strip
- builder name — **singular "you," single user (not a team/plan)**
- outputs-shipped count over a **reliable window** ("You've shipped N outputs this week" — counted from `runs[]`, not a last-visit anchor). Zero/unknown → greeting only, **no fabricated count**.
- learning-path resume pointer — the **`chapter`** key (number + title). The key is named
  `chapter` and the UI displays "Session"; they differ on purpose. `resume.chapter` is shared
  across this repo (`my-workspace`, renamed from `hub-starter` 2026-08-13), the wrap-up skill,
  and other BlueRock consumers, so renaming the key breaks them together. Only the display text was swept when "Chapter" was retired (2026-08-06).

### 01 · Activity & spend ("What your agents did and what it cost")
Layout: the **Actions card leads** (wider); the **Cost card is second**. The Guardrail card is **dropped from the beta layout** (see below).
- **Actions · 7d by agent & team:** `{ total, byAgent: [{name, count, tone, timeMin, members?}] }`. Renders as one **horizontal bar per agent/team** (bar length = `count`, as a share of the busiest) plus the time, above a summary (total actions · total time). `name` is required (labels the row); `count` = action total; `tone` = a stable palette key (`coral` · `plum` · `composer` · `sage`; falls back to coral); `timeMin` = wall-clock minutes this week (honestly sourceable from transcript timestamps — unlike tokens/cost). A **team** entry (e.g. Account Research) carries `members: [{name, count, timeMin}]` (members sum to the team's `count` and `timeMin`); the card expands the team into its member agents, so the builder sees both team and individual activity.
- **Cost · 7d:** `{ available, today, deltaPct, series }` — today's cost, Δ% vs prior, 7-pt daily series (Sun→Today) for the sparkline.
  - **`available: false` is the default and it renders "Coming soon" — never a number** (2026-08-15). Beta workspaces carry no pricing table, so tokens cannot be turned into dollars honestly, and `$0` with a flat sparkline reads as a real and reassuring figure rather than a missing one. `today`, `deltaPct`, and `series` are ignored while unavailable.
  - **`available: true` only when a real pricing basis exists in the workspace** that `/bluerock:wrap-up` actually read. Never estimate, never infer a rate, never carry a rate over from another workspace. Same rule as the guardrail card's `wired: false`: an honest empty state beats a fabricated one under a trust label.
- **Guardrail events · 7d** — data field retained; **card dropped from the beta layout** (no sensor data yet; re-add when wired): `{ wired, events: [{ts, action, rule, outcome, target, source, severity}] }`.
  - `wired:false` (beta default) → honest **"All clean so far · telemetry wiring in progress"**.
  - `wired:true` + empty `events` → substantiated **"All clean — no guardrail events."**
  - `events` non-empty → loud state with the count.
  - Container-block observability is resolved below (§ Guardrail-event capture).

### 02 · Performance ("How it's going")
Honest set only — everything here is derivable from the skills at beta (no sensors). Dropped from the original mockup: **output quality / reader rating** (no signal — would be a net-new rating capture) and **cache hit rate** (operator metric, not a builder outcome; surface the benefit as cost instead).
- `perf.successRate` + `runs {successful, total}` — run = a logged agent run; success = completed without error/guardrail block. The `success` flag is set by `/bluerock:wrap-up` (a model judgment at beta, not a sensor signal).
- `perf.avgSessionMin` + `perf.avgSessionDeltaMin` — **avg session length** (from `session-metrics.py`), neutral WoW delta (shorter is not "better").
- `perf.outputsShipped` — count of outputs this week from `runs[]`.
- **Brag stat (this week):** sessions count, tools called, files read, tokens, model name → templated sentence. The `guardrailEvents` key stays in the data shape but is **not voiced in the sentence at beta** — without sensor data, "Zero guardrail events" claims monitoring that is not happening (same honesty rule as the cost card's `available: false`). The clause returns when the guardrail pipeline is wired.

### 03 · Highlights & recent ("The last five things you shipped")
- last N run records: `{ts, agent, target, outputFile, runTime}` (filterable: All agents / This week)
- `agent` renders as a named column (tone-matched to the Actions donut) so the builder can see which agent or team shipped each output. Multi-agent runs are attributed to the **team** the builder invoked (e.g. a `/research` run → "Account Research"), not the trailing sub-agent.

### Productivity trend (lead chart)
- `productivity: { metricLabel, weekly: [{ week, actions, outputs, milestone? }] }`
- Headline series = **`actions` per week** (agent actions = proxy for work delegated; the
  rising curve). `outputs` = things shipped that week (shown as "first → latest /wk").
- `milestone` annotates a week, rendered as a dashed reference line on the area chart.
- Rolled up by `/bluerock:wrap-up` from the per-run atoms, bucketed by ISO week.

### Priorities (closure loop — plugin v0.2)
- `priorities: { set, closed, carried }` for the week. Counted by `/bluerock:wrap-up` from `today.md`:
  `set` = total Focus items, `closed` = `[x]`, `carried` = `[>]`. `daily-brew` seeds `today.md`
  each morning and opens by closing yesterday's loop; `/bluerock:today` keeps it current.
- Rendered as the lead card of **01 · Productivity** ("N / M closed," % bar, carried count).
- "From your sessions," not sensors — the clearest builder-facing "this is working" stat.

## Implied per-run record shape (the atom `/bluerock:wrap-up` should log)
```
{ ts, sessionId, agent, target, outputFile, runTimeSec, success,
  tokens, toolsCalled, filesRead, model, costUsd,
  guardrailEvents: [{ ts, action, rule, outcome, target }] }
```
Everything on the dashboard rolls up from a list of these + workspace meta. Define this first;
the dashboard build is mostly rendering once it's pinned.

## Guardrail-event capture & schema (research finding, 2026-06-17)

Probed: *when BR blocks an action at the container level, can the Claude Code session see it,
and can a hook capture it for `/bluerock:wrap-up`?*

**Observable? — PARTIAL.** A container-level block is invisible to Claude Code's own
permission hooks (Claude Code thinks it allowed the tool). It surfaces **only if BR's
enforcement makes the tool process fail**:
- `PostToolUse` does **not** fire on a blocked/failed call.
- `PostToolUseFailure` **does** fire on tool failure and shows `stderr` + `tool_name` +
  `tool_input` to the session. So a block enforced by killing the process / refusing the
  connection (non-zero exit) is observable; a block that lets the tool exit 0, or silently
  drops the action, is **not**.

**Capture path (recommended = Fallback B):** the **BR sensor writes the event directly**
to a session-readable file `$CLAUDE_PROJECT_DIR/.bluerock/guardrail-events.jsonl` at block
time. The sensor is the authoritative source (it knows rule/target/outcome with full
fidelity), which sidesteps the "does the block surface as a tool error" uncertainty. A
`PostToolUseFailure` hook is a viable **secondary** signal **only with a BR-emitted stderr
sentinel** (e.g. `BLUEROCK_BLOCK rule=ssrf-egress target=…`) — without it you can't tell a
real block from an ordinary failing command, which would dishonestly inflate the count.

**The one open question (routed to the BlueRock event-sensor team):** does the BR sensor
(a) exit the blocked tool non-zero with an identifiable stderr sentinel, or (b) write the
structured event to a session-readable file? Either makes the card *real*. Neither yet =
card stays in its honest beta state (`wired:false`). Beta has no sensor pipeline, so the
expected launch state is exactly that.

### Event schema (JSONL, one object per line, append-only)
| Field | Type | Allowed values | Definition |
|---|---|---|---|
| `ts` | string | ISO 8601 UTC | When the action was evaluated/blocked |
| `action` | enum | `network_egress` · `command_exec` · `tool_call` · `file_access` · `data_query` | Class of action (maps to the Three Execution Boundaries + network) |
| `rule` | string | stable rule slug, e.g. `ssrf-egress`, `command-injection` | Which guardrail matched (references BR's 22 rules → OWASP MCP Top 10 / MAESTRO / CWE) |
| `outcome` | enum | `blocked` · `allowed` · `flagged` | `blocked` prevented · `flagged` allowed-but-recorded · `allowed` explicitly permitted (omit to keep file lean) |
| `target` | string | URL/host, command, tool name, file path, or SQL fragment (redact/truncate) | What the action aimed at |
| `source` | enum | `sensor` · `hook` · `transcript` | Which capture path produced the event (honesty + de-dup) |
| `severity` | enum | `critical` · `high` · `medium` · `low` | Maps to the rule's CWE severity (optional for beta) |

`outcome` stays a strict three-value enum — an ordinary tool error that is **not** a BR
block must never enter this file (the sentinel / sensor gate filters those out upstream).

**Validation eval before the card ships non-aspirational:** in a sensor-live container, run
a known-bad action (`curl http://169.254.169.254/latest/meta-data/` for SSRF; a command-
injection probe). Assert (1) blocked, (2) a `guardrail-events.jsonl` line appears with
`outcome:"blocked"` + correct `rule`/`target`, and (3) a benign failing command (failing
`npm test`) produces **no** guardrail event.
