# Builders Dashboard — data contract (what `/wrap-up` must emit)

> Derived from `design/dashboard-mockup.png` (the approved BlueRock Dashboard mockup).
> Beta has **no BR OTEL/sensor data** — every value below is sourced from files the
> starter project's `/wrap-up` skill emits about Linda's own builder activity.
> **Label decision (Linda, 2026-06-17):** "Sensor-sourced" is **softened** to honest
> framing ("From your sessions") since beta data is `/wrap-up`, not OTEL. The renderer
> ships with this softened wording.

## Delivery model (Linda, 2026-06-17)
The dashboard is **not** a Next.js route. It is a **design stored in the starter Cursor
project** that renders as a **local HTML page** — no server. The starter project's
`/wrap-up` skill regenerates the data file from the builder's own session activity, and
the renderer reads it. This workaround is sufficient for beta.

- `design/dashboard.html` — self-contained renderer (cool-paper, opens via `file://`).
- `design/dashboard-data.js` — the data file `/wrap-up` **overwrites**; sets
  `window.__BR_DASH__` and is loaded by `<script src>` so it works without a server
  (a `fetch()` of a local JSON is blocked over `file://`; a `<script src>` is not).
- The existing `app/dashboard/` React scaffold is the **design reference** these were
  ported from; it is left untouched.

## Source of truth
`/wrap-up` (runs in the **starter project**, not marketing-hub) writes the per-run atoms
(`runs[]`, below) **and** the pre-rolled sections (cost / actions / perf / brag) computed
from those atoms at wrap-up time. The renderer just paints — it does not re-aggregate.
Prefer **structured/typed** output over a prose blob (Linda's standing analytics-preempt
pref). The pinned top-level shape is `window.__BR_DASH__` (see `dashboard-data.js`):
`{ meta, productivity, priorities, cost, actions, guardrail, perf, brag, runs }`.

## Chrome (Linda, 2026-06-17)
- **No left nav.** Single full-width column. The old sidebar nav counts / projects /
  curriculum list are dropped; the curriculum resume pointer lives in the welcome strip.
- **Logo** = the `builders-logo-light.svg` lockup in the topbar (copied into `design/`
  for the standalone render), **not** a hand-built mark + text. Brand-blue is logo-only.
- **Styling** matches the `/learn` site by construction — both use the resolved
  `palette-cool-paper` tokens from `app/br-theme.css` / `learn-theme.css` (same cream /
  coral / ink families, radii, blue shadows, Source Serif 4 / DM Sans / JetBrains Mono).

## Fields the mockup needs

### Workspace meta (topbar)
- **Header simplified (Linda, 2026-06-24):** logo lockup at 3× (90px); **dropped** workspace name/region, "online · N days" uptime, and "Open in Cursor". Topbar = logo + Trial pill / Help / avatar.
- trial days left ("11 days left") — **account arithmetic** (`14 − days since trial start`; 14-day trial), seeded at provisioning, not telemetry.

### Welcome strip
- builder name — **singular "you," single user (not a team/plan)**
- outputs-shipped count over a **reliable window** ("You've shipped N outputs this week" — counted from `runs[]`, not a last-visit anchor). Zero/unknown → greeting only, **no fabricated count**.
- curriculum resume pointer (current chapter # + title)

### 01 · Spend & activity ("What your agents did and what it cost")
- **Cost · 7d:** today's cost ($1.84), Δ% vs prior, 7-pt daily series (Sun→Today) for the sparkline
- **Actions · 7d by agent:** total (142) + per-agent breakdown `[{agent, count}]` (Researcher 64, Signal Scanner 47, Composer 31) → donut
- **Guardrail events · 7d:** `{ wired, events: [{ts, action, rule, outcome, target, source, severity}] }`.
  - `wired:false` (beta default) → honest **"All clean so far · telemetry wiring in progress"**.
  - `wired:true` + empty `events` → substantiated **"All clean — no guardrail events."**
  - `events` non-empty → loud state with the count.
  - Container-block observability is resolved below (§ Guardrail-event capture).

### 02 · Performance ("How it's going")
Honest set only — everything here is derivable from the skills at beta (no sensors). Dropped from the original mockup: **output quality / reader rating** (no signal — would be a net-new rating capture) and **cache hit rate** (operator metric, not a builder outcome; surface the benefit as cost instead).
- `perf.successRate` + `runs {successful, total}` — run = a logged agent run; success = completed without error/guardrail block. The `success` flag is set by `/wrap-up` (a model judgment at beta, not a sensor signal).
- `perf.avgSessionMin` + `perf.avgSessionDeltaMin` — **avg session length** (from `session-metrics.py`), neutral WoW delta (shorter is not "better").
- `perf.outputsShipped` — count of outputs this week from `runs[]`.
- **Brag stat (this week):** sessions count, tools called, files read, tokens, model name, guardrail-event count → templated sentence.

### 03 · Highlights & recent ("The last five things you shipped")
- last N run records: `{ts, target, outputFile, runTime, agent}` (filterable: All agents / This week)

### Productivity trend (lead chart)
- `productivity: { metricLabel, weekly: [{ week, actions, outputs, milestone? }] }`
- Headline series = **`actions` per week** (agent actions = proxy for work delegated; the
  rising curve). `outputs` = things shipped that week (shown as "first → latest /wk").
- `milestone` annotates a week, rendered as a dashed reference line (Hub AreaChart style).
- Rolled up by `/wrap-up` from the per-run atoms, bucketed by ISO week.

### Priorities (closure loop — plugin v0.2)
- `priorities: { set, closed, carried }` for the week. Counted by `/wrap-up` from `today.md`:
  `set` = total Focus items, `closed` = `[x]`, `carried` = `[>]`. `daily-brew` seeds `today.md`
  each morning and opens by closing yesterday's loop; `/bluerock:today` keeps it current.
- Rendered as the lead card of **01 · Productivity** ("N / M closed," % bar, carried count).
- "From your sessions," not sensors — the clearest builder-facing "this is working" stat.

## Implied per-run record shape (the atom `/wrap-up` should log)
```
{ ts, sessionId, agent, target, outputFile, runTimeSec, success,
  tokens, toolsCalled, filesRead, model, costUsd,
  guardrailEvents: [{ ts, action, rule, outcome, target }] }
```
Everything on the dashboard rolls up from a list of these + workspace meta. Define this first;
the dashboard build is mostly rendering once it's pinned.

## Guardrail-event capture & schema (research finding, 2026-06-17)

Probed: *when BR blocks an action at the container level, can the Claude Code session see it,
and can a hook capture it for `/wrap-up`?*

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

**The one open question (route to David O. / event-sensor plane):** does the BR sensor
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
