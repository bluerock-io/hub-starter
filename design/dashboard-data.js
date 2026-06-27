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
    resume: { chapter: 3, title: 'Save to GitHub' },
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

  // Actions · 7d by agent → donut + total.
  actions: {
    total: 142,
    byAgent: [
      { name: 'Researcher', count: 64, tone: 'coral' },
      { name: 'Signal Scanner', count: 47, tone: 'plum' },
      { name: 'Composer', count: 31, tone: 'composer' },
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
    outputsShipped: 9,                    // this week, counted from runs[]
  },

  // Brag stat (this week). Mockup wording: sessions + tools + files + tokens
  // + model + guardrail-event count → one templated sentence.
  brag: {
    sessions: 1,
    toolsCalled: 47,
    filesRead: 23,
    tokens: '47K',
    model: 'claude-sonnet-4.6',
    guardrailEvents: 0,
  },

  // Priorities (this week). Counted by /wrap-up from today.md: set = total Focus
  // items, closed = [x], carried = [>]. The closure loop daily-brew opens and
  // wrap-up closes. "From your sessions," not sensors.
  priorities: { set: 12, closed: 9, carried: 2 },

  // ── 03 · Highlights & recent ──────────────────────────────────────────
  // Last N run atoms. The renderer shows ts / target / outputFile / runTime.
  // Full atom shape kept here so the file IS the source `/wrap-up` rolls up.
  runs: [
    { ts: '2026-05-18T09:41:00Z', sessionId: 's-0418', agent: 'Researcher',     target: 'Northstar Analytics', outputFile: 'northstar-analytics.pdf', runTimeSec: 41,  success: true, tokens: 6200, toolsCalled: 9,  filesRead: 4, model: 'claude-sonnet-4.6', costUsd: 0.31, guardrailEvents: [] },
    { ts: '2026-05-17T16:08:00Z', sessionId: 's-0417b', agent: 'Composer',      target: 'Mercury Goods',       outputFile: 'mercury-goods.pdf',       runTimeSec: 52,  success: true, tokens: 7100, toolsCalled: 11, filesRead: 5, model: 'claude-sonnet-4.6', costUsd: 0.36, guardrailEvents: [] },
    { ts: '2026-05-17T10:22:00Z', sessionId: 's-0417a', agent: 'Researcher',    target: 'Foundry HQ',          outputFile: 'foundry-hq.pdf',          runTimeSec: 36,  success: true, tokens: 5400, toolsCalled: 8,  filesRead: 3, model: 'claude-sonnet-4.6', costUsd: 0.27, guardrailEvents: [] },
    { ts: '2026-05-15T14:55:00Z', sessionId: 's-0415', agent: 'Signal Scanner', target: 'Stitch Health',       outputFile: 'stitch-health.pdf',       runTimeSec: 62,  success: true, tokens: 8300, toolsCalled: 12, filesRead: 6, model: 'claude-sonnet-4.6', costUsd: 0.42, guardrailEvents: [] },
    { ts: '2026-05-14T11:30:00Z', sessionId: 's-0414', agent: 'Researcher',     target: 'Lattice Robotics',    outputFile: 'lattice-robotics.pdf',    runTimeSec: 44,  success: true, tokens: 5900, toolsCalled: 9,  filesRead: 4, model: 'claude-sonnet-4.6', costUsd: 0.30, guardrailEvents: [] },
  ],
};
