---
name: meeting-recap
description: >-
  Drafts a meeting recap email from call notes, in my voice — the recap I
  send the people I met with. Use when I say "recap that meeting", "draft a
  follow-up", "follow-up email from this call", "send them a summary", or
  paste meeting notes or a transcript. Reads today's notes file (or the file
  I name) if I don't paste anything.
---

Draft a meeting recap email from call notes. The email is FROM me, TO the
people I met with. Keep it short enough that a busy person reads the
whole thing.

## First — anchor to the Hub

When I don't paste notes, you read them from my Hub — the repo I cloned from the
starter. In an SSH/cloud container the session usually starts in the **home folder**,
with the Hub one level down. I named it when I cloned (`maria-hub`, `alex-hub` — don't
assume a fixed name like `hub-starter`); identify it by its signature, not its name.
Before reading a notes file: run `ls`. See `CLAUDE.md` and `design/` side by side?
You're in the Hub. If not, find it: `ls */CLAUDE.md`, then `ls ~/*/CLAUDE.md`, else
`find ~ -maxdepth 3 -path '*/design/dashboard.html'`. `cd` into that folder and read the
notes at its **absolute path** (e.g. `/home/you/maria-hub/notes/…`). Can't find it? Ask
me where I cloned my Hub. (If I pasted the notes into chat, skip all this — you already
have what you need.)

## Inputs, in priority order

1. Notes or a transcript pasted into the chat with the request.
2. A notes file I name (e.g., "from Tuesday's notes" → `notes/<that-date>.md`).
3. Today's notes file, `notes/<today>.md`: use the most recent meeting
   under the Meetings section.

If none of these exist, say so and ask which call I mean. Do not invent
a meeting.

## Structure (every time, same shape)

1. **Subject line:** the topic plus the next step, under 9 words.
   Not "Great meeting you!"
2. **One-line opener:** reference something specific that was said or
   decided. No "I hope this email finds you well."
3. **What we agreed:** 2-4 bullets max. Each bullet is a commitment with
   an owner: theirs or mine. Pull these from the Decisions / commitments
   section or the action items in the notes.
4. **The ask:** exactly one next step, with a proposed date or time
   window. One ask per email, never two.
5. **Sign-off:** plain. "Thanks," or "Talk Tuesday," plus my name.

## Voice rules

- My voice, not vendor voice: direct, warm, zero filler.
- No emojis. No exclamation points unless I used one in the notes.
- Names and specifics over abstractions: "the McLeod integration call
  with Jordan" beats "our technical discussion."
- Numbers stay exact. If the notes say $90K, write $90K.
- If a commitment in the notes has no owner or date, flag it to me in
  a note BELOW the draft, outside the email body. Never guess inside
  the email.

## Output

- The draft email in a single fenced block, paste-ready: subject line
  first, then the body. Nothing else inside the fence.
- Below the fence: anything I should double-check before sending
  (missing dates, ambiguous owners, a commitment I may not want to
  make in writing). Two bullets max. Skip entirely if there's nothing.
