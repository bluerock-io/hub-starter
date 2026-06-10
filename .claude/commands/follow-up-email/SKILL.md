---
name: follow-up-email
description: >-
  Drafts a follow-up email from call notes, in my voice. Use when I say
  "draft a follow-up", "follow-up email from this call", or paste meeting
  notes or a transcript and ask for a recap email. Reads today's notes
  file (or the file I name) if I don't paste anything.
---

Draft a follow-up email from call notes. The email is FROM me, TO the
people I met with. Keep it short enough that a busy person reads the
whole thing.

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
