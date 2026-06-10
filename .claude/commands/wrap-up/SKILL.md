---
name: wrap-up
description: >-
  End-of-session ritual: log what this session did, commit, push, and
  hand me a continuation prompt for next time. Use when I say "wrap up",
  "done for today", "end session", "ship it", or "save my progress".
  Not for mid-session saves — only when the session is actually ending.
---

Wrap up this working session. Conversations end; the repo persists. Your
job is to make sure everything this session produced survives into the
next one: the work committed, the story logged, the thread ready to pick
back up.

## Steps, in order

### 1. Review the session

Look back over this conversation and identify:

- What got done (finished things, not attempts)
- Which files were created or changed
- Any decision I made that future sessions should know about
- What's unfinished or what I said I'd do next

Don't ask me to summarize — you were here.

### 2. Update the session log

Append an entry to `session-log.md` at the repo root (create the file
with a one-line title if it doesn't exist yet). Newest entry at the
bottom:

```markdown
## YYYY-MM-DD — [what this session was about, in a few words]

**Did:** [1-3 lines]
**Files:** [paths created or changed]
**Decided:** [only if a real decision was made — otherwise omit the line]
**Next:** [what the next session should pick up]
```

Keep it short. The log is a trail, not a diary.

### 3. Show me what's about to be saved

Run `git status` and show me a plain summary: which files, new or
changed, and a proposed one-line commit message that says what the
session accomplished (not "updates" or "changes").

**Wait for my go-ahead before committing.** "Wrap up" starts the
ritual; it is not yet permission to commit.

### 4. Commit and push

Once I confirm: stage the files, commit with the agreed message, push.
If the push fails (usually authentication), tell me plainly what
happened and what to click — don't retry silently.

### 5. Hand me the continuation prompt

Last, print a short prompt I can paste into my next session to pick up
where this one ended:

```
I'm continuing work in my Hub.

Last session (YYYY-MM-DD): [one sentence — what got done]
Next up: [what to work on]

Read session-log.md for context.
```

That's the whole point of the ritual: the next session starts already
knowing what this one knew.

## Rules

- Never commit without my explicit go-ahead in this conversation.
- Never push anything that looks like a credential or a private key —
  flag it instead.
- If nothing changed this session, say so, log the session anyway if I
  want the record, and skip the git steps.
