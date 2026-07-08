/* ───────────────────────────────────────────────────────────────────────
   BlueRock for Builders — dashboard data (SAMPLE)
   ───────────────────────────────────────────────────────────────────────
   This is the file the starter project's `/wrap-up` skill OVERWRITES.
   `dashboard.html` reads `window.__BR_DASH__` from here (loaded via
   <script src>, so it works over file:// with no server).

   Beta has NO BlueRock OTEL/sensor pipeline. Every value below is rolled up
   by `/wrap-up` from the builder's OWN session activity (honest dogfooding,
   not faked metrics). The per-run atom `/wrap-up` logs is in `runs[]`; the
   pre-rolled sections (cost / actions / perf / brag) are computed from those
   atoms at wrap-up time so the renderer just paints (analytics-preempt: emit
   structured rollups, don't re-parse in the browser N times).

   Shape is pinned in `dashboard-data-contract.md`. Keep it typed/structured.
   ─────────────────────────────────────────────────────────────────────── */

window.__BR_DASH__ = {
  // ── Workspace meta (topbar + sidebar footer) ──────────────────────────
  meta: {
    builder: 'Linda',
    workspace: 'linda-vu-9c2',
    region: 'cloud-east-1',
    uptimeLabel: 'online · 16 days',
    trialDaysLeft: 11,
    outputsSince: { count: 3, since: 'this week' }, // single user; window = this week from runs[], not a last-visit anchor
    resume: { chapter: 3, title: 'Skills as Playbooks' },
  },

  // ── Productivity trend (weekly) ───────────────────────────────────────
  // Headline trend chart. `actions` = agent actions/week (proxy for work
  // delegated — the rising curve); `outputs` = things shipped that week.
  // Rolled up by /wrap-up from the per-run atoms, bucketed by week.
  // `milestone` annotates a week (renders as a reference line).
  productivity: {
    metricLabel: 'Agent actions per week',
    weekly: [
      { week: 'Apr 20', actions: 18,  outputs: 1, milestone: 'Joined' },
      { week: 'Apr 27', actions: 34,  outputs: 2 },
      { week: 'May 4',  actions: 47,  outputs: 2 },
      { week: 'May 11', actions: 62,  outputs: 3 },
      { week: 'May 18', actions: 88,  outputs: 4, milestone: 'First multi-agent run' },
      { week: 'May 25', actions: 104, outputs: 4 },
      { week: 'Jun 1',  actions: 126, outputs: 5 },
      { week: 'Jun 8',  actions: 142, outputs: 3 },
    ],
  },

  // ── 01 · Spend & activity ─────────────────────────────────────────────
  // Cost · 7d. series is Sun→Today (7 points). deltaPct vs prior day.
  cost: {
    today: 1.84,
    deltaPct: -12.4,
    series: [2.1, 2.4, 2.9, 2.2, 1.9, 2.1, 1.84],
  },

  // Actions · 7d by agent → donut + total. Names the rhythm agents that fire
  // most (scribe files notes all day; daily-brew runs each morning) and the
  // Account Research team (researcher + signal-scanner + composer, counted as
  // one team) when a /bluerock:research run happens — so the builder can see
  // which agents and teams are active. Use the SAME label in runs[] so a team
  // reads consistently across the donut and the recent-activity table.
  // `total` must equal Σ byAgent counts; tones are stable per name. `timeMin` =
  // wall-clock minutes for that agent/team this week (honestly sourceable from
  // transcript timestamps). The card renders one bar per agent/team (length =
  // actions) plus the time. A team carries `members: [{name, count, timeMin}]`
  // (members sum to the team's count and timeMin); the card expands the team
  // into its members, so the builder sees both team and individual activity.
  actions: {
    total: 142,
    byAgent: [
      { name: 'scribe', count: 54, tone: 'coral', timeMin: 18 },
      { name: 'daily-brew', count: 36, tone: 'plum', timeMin: 14 },
      { name: 'Account Research', count: 33, tone: 'composer', timeMin: 24, members: [
        { name: 'researcher', count: 15, timeMin: 11 },
        { name: 'signal-scanner', count: 11, timeMin: 8 },
        { name: 'composer', count: 7, timeMin: 5 },
      ] },
      { name: 'meeting-prep', count: 19, tone: 'sage', timeMin: 9 },
    ],
  },

  // Guardrail events · 7d. `wired:false` for beta (no sensor pipeline yet) →
  // renders the honest "telemetry wiring in progress" calm state instead of a
  // substantiated "Zero". When the BR sensor writes events to
  // .bluerock/guardrail-events.jsonl, set wired:true and populate events[].
  guardrail: {
    wired: false,
    events: [], // [{ ts, action, rule, outcome, target, source, severity }]
  },

  // ── 02 · Performance & quality ────────────────────────────────────────
  perf: {
    successRate: 0.94,
    runs: { successful: 56, total: 60 },  // run = a logged agent run; success = completed w/o error/guardrail block (set by /wrap-up)
    avgSessionMin: 24,                    // avg session length this week (from session-metrics.py)
    avgSessionDeltaMin: -3,               // vs last week (neutral — not better/worse)
    outputsShipped: 3,                    // this week, counted from runs[] — same source/window as meta.outputsSince.count (keep them equal)
  },

  // Brag stat (this week). Mockup wording: sessions + tools + files + tokens
  // + model + guardrail-event count → one templated sentence.
  brag: {
    sessions: 5,
    toolsCalled: 142,  // = actions.total (the week's agent actions)
    filesRead: 71,
    tokens: '210K',
    model: 'claude-sonnet-4-6',
    guardrailEvents: 0,
  },

  // Priorities (this week). Counted by /wrap-up from today.md: set = total Focus
  // items, closed = [x], carried = [>]. The closure loop daily-brew opens and
  // wrap-up closes. "From your sessions," not sensors.
  priorities: { set: 12, closed: 9, carried: 2 },

  // ── 03 · Highlights & recent ──────────────────────────────────────────
  // Last N run atoms — "the last things you shipped." A real rhythm week:
  // research dossiers (the multi-agent Account Research run), the daily-brew
  // morning brief, meeting prep, and a recap — not only account research.
  // `agent` = the agent, team, or skill that produced the output — named so the
  // builder can see who's shipping (a /bluerock:research run is attributed to the
  // "Account Research" team, the label the builder invoked; rhythm outputs to
  // their agent/skill). The 3 most recent are dated this week, matching
  // perf.outputsShipped / meta.outputsSince.count = 3; the older 2 fill "last 5."
  // The renderer shows ts / agent / target / outputFile / runTime; full atom
  // shape kept here so the file IS the source `/wrap-up` rolls up.
  runs: [
    { ts: '2026-06-09T15:20:00Z', sessionId: 's-0609b',  agent: 'Account Research', target: 'Northstar Analytics',   outputFile: 'northstar-analytics-dossier.md', runTimeSec: 156, success: true, tokens: 18400, toolsCalled: 24, filesRead: 8, model: 'claude-sonnet-4-6', costUsd: 0.62, guardrailEvents: [] },
    { ts: '2026-06-08T13:30:00Z', sessionId: 's-0608a',  agent: 'meeting-prep',     target: 'Foundry HQ intro call', outputFile: 'foundry-hq-prep.md',           runTimeSec: 41,  success: true, tokens: 4100,  toolsCalled: 6,  filesRead: 5, model: 'claude-sonnet-4-6', costUsd: 0.16, guardrailEvents: [] },
    { ts: '2026-06-08T10:15:00Z', sessionId: 's-0608b',  agent: 'Account Research', target: 'Stitch Health',         outputFile: 'stitch-health-dossier.md',       runTimeSec: 148, success: true, tokens: 17200, toolsCalled: 22, filesRead: 7, model: 'claude-sonnet-4-6', costUsd: 0.58, guardrailEvents: [] },
    { ts: '2026-06-03T11:10:00Z', sessionId: 's-0603',   agent: 'meeting-recap', target: 'Mercury Goods discovery', outputFile: 'mercury-goods-recap.md',        runTimeSec: 44,  success: true, tokens: 4600,  toolsCalled: 7,  filesRead: 4, model: 'claude-sonnet-4-6', costUsd: 0.18, guardrailEvents: [] },
    { ts: '2026-06-02T07:30:00Z', sessionId: 's-0602am', agent: 'daily-brew',    target: 'Morning brief',         outputFile: 'today.md',                       runTimeSec: 34,  success: true, tokens: 5200,  toolsCalled: 9,  filesRead: 6, model: 'claude-sonnet-4-6', costUsd: 0.21, guardrailEvents: [] },
  ],
};
