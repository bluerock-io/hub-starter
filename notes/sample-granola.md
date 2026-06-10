# Northwind Logistics — Discovery (Alex Reyes)

**Date:** May 19, 2026
**Duration:** 25 min
**Attendees:** Alex Reyes (VP Operations, Northwind Logistics), Sam Chen (AE, BrightLine), [You] (RevOps Lead, BrightLine)

---

## Enhanced Notes

### Summary

Alex Reyes (VP Ops at Northwind, a regional 3PL with ~400 trucks) is
evaluating BrightLine to replace a manual workflow they currently run
across three spreadsheets and a Slack channel. Their pain is reconciling
inbound load tenders against carrier capacity in near-real time — today
it takes two analysts about three hours each morning. Northwind is six
weeks into a broader operations modernization initiative and has board
visibility on cycle-time reduction.

Sam led the call; you joined for the data/integration questions in the
back half. Strong fit signals: clear pain owner, named budget, executive
sponsor (their COO, Maria Voss). Open question on whether their existing
data warehouse (Snowflake) is the right primary integration point or
whether we lead with their TMS (McLeod). Alex leaned toward TMS-first.

### Key points

- Northwind currently reconciles ~180 load tenders / day across three
  spreadsheets. Two analysts spend ~3 hrs each morning. Errors flow
  downstream into carrier payment disputes.
- Their TMS is McLeod (LoadMaster). Data warehouse is Snowflake.
- Maria Voss (COO) is the executive sponsor. Board has visibility on
  cycle-time reduction as a 2026 OKR.
- Budget is approved at the $80-120K/yr range; Alex has procurement
  flexibility through Q3.
- They evaluated Trimble's offering last quarter but stalled — Alex
  said "their pricing tier system was opaque and we couldn't get a
  number out of them for six weeks."
- Alex mentioned Trimble's CISO left last month — "they're in some
  kind of reorg, nobody at our level can get a real answer."

### Action items

- [ ] Sam to send the BrightLine pricing PDF by EOD Wednesday (May 20)
- [ ] Alex to introduce [You] to Jordan Park (Northwind's data lead)
      for a follow-on integration scoping call
- [ ] Schedule technical demo with Jordan + Alex for next Tuesday
      (May 26), focused on the McLeod LoadMaster integration path
- [ ] [You] to send the McLeod customer reference (Stevens Transport)
      that Alex specifically asked about

### Open questions

- Should the primary integration be McLeod (TMS) or Snowflake
  (warehouse)? Alex leans McLeod; Jordan may have a different view.
- Pricing tier — Alex asked for "the next step up from $80K." We
  parked it; Sam will include in the pricing PDF.

---

## Transcript

**Sam Chen** (00:01): Alex, thanks for making the time. I know you're
in the middle of a tight quarter at Northwind. Want to start with what
prompted the conversation?

**Alex Reyes** (00:18): Sure. We're six weeks into what we're calling
ops modernization — basically Maria, our COO, looked at our morning
reconciliation process and said it was insane that we have two
analysts spending three hours every day moving numbers between
spreadsheets. So we're looking at automation options, and BrightLine
keeps coming up in our internal references.

**Sam Chen** (00:51): Got it. Can you walk me through what that
morning process looks like today?

**Alex Reyes** (01:02): Yeah. So we get load tenders from shippers
overnight — usually 180 or so a day. Those land in our TMS, which is
McLeod LoadMaster. But the carrier capacity side lives in a separate
spreadsheet that one of our dispatch leads maintains by hand. And then
there's a third spreadsheet for active driver hours that we have to
cross-reference because of HOS rules. Reconciling those three sources
into a single morning brief is what takes the three hours.

**Sam Chen** (01:48): And the errors — where do those bite you?

**Alex Reyes** (01:55): Carrier payment. When we mis-assign a load to
a carrier whose capacity is actually full, the carrier still runs the
load to keep us happy, but they invoice us at a premium rate. We end
up in a dispute cycle that's costing us maybe $40K a month, plus the
soft cost of the relationship damage.

**Sam Chen** (02:24): That's exactly the pattern we see at Stevens
Transport, by the way. Different scale but same shape. [You], you
might want to walk through the integration story here.

**[You]** (02:38): Sure. Alex, the question I'd want to get to is
where the right primary integration point is. We can pull tender
data directly from McLeod's API — most McLeod customers go that route.
But if your team is already standardizing on Snowflake as the source
of truth, we can read from there instead. Which way is Northwind
leaning?

**Alex Reyes** (03:11): I'd lean McLeod. Snowflake is more aspirational
right now — we're still loading historical data into it. McLeod is
where the live data actually lives. But honestly, Jordan Park, who's
my data lead, would have a stronger opinion than I do. Should I get
you two on a call?

**[You]** (03:34): Yeah, that'd be the right next step. We can scope
the integration in 45 minutes if Jordan's available.

**Alex Reyes** (03:43): Let me set that up. Tuesday work?

**[You]** (03:46): Tuesday's good. Let me know what time works for
Jordan and I'll send the invite.

**Sam Chen** (03:55): Alex — you mentioned earlier you'd looked at
Trimble. Can I ask what stalled there?

**Alex Reyes** (04:08): [laughs] Pricing. Their tier system was
opaque and we couldn't get a real number out of them for six weeks.
I think their CISO left last month and they're in some kind of reorg
— at our level nobody can get a straight answer about anything. We
moved on.

**Sam Chen** (04:31): Understood. On pricing, what I can do is get
the PDF over to you by tomorrow EOD. We have three tiers; for a
fleet your size you'd be in our mid-tier, which lands at $90K/year
all-in. There's a step up to $120K if you want the advanced
forecasting module, but I'd say start without it.

**Alex Reyes** (04:58): That works. Send the PDF. I have budget
approved in the $80-120K range and procurement flexibility through
Q3, so this should move.

**Sam Chen** (05:12): Perfect. And the Stevens Transport reference —
you wanted that?

**Alex Reyes** (05:18): Yeah, [You], can you send me that contact?

**[You]** (05:21): Absolutely. I'll send it today.

**Sam Chen** (05:25): Great. So to recap — pricing PDF from me by
tomorrow EOD, Stevens reference from [You] today, you'll set up the
Jordan call for Tuesday, and we'll scope the McLeod integration there.

**Alex Reyes** (05:39): That works. Maria will want a status update
end of next week — anything I can preview for her?

**Sam Chen** (05:46): After the Tuesday call we'll send you a 1-page
solution brief you can drop into her update.

**Alex Reyes** (05:55): Perfect. Thanks both.
