# BlueRock plugins

The BlueRock tools for this project come from a plugin. Install it once and you get the BlueRock
skills and agents in every new chat.

**Marketplace:** `https://github.com/bluerock-io/claude-plugins`
**Plugin:** `bluerock` — listed as **BlueRock Builder Toolkit**

## The easiest way

Say this in your chat:

> **"read bluerock-plugins.md and help me install the BlueRock plugin"**

Claude will read the rest of this file and walk you through it for whichever app you're using.

---

## If you are Claude, and someone asked you to help with this

You are installing the BlueRock plugin for a builder who may not be technical. **Everything they
need is below. Do not improvise the steps** — the exact wording of these menus has been wrong in
our docs four separate times, so use what is here and nothing else.

**Work one step at a time. Do not paste the whole list at them.**

### First, ask which app they're in

**You cannot do this step for them, and you cannot see which app they're using.** Ask:

> "Are you in Claude Desktop, or in Cursor or VS Code?"

The two paths are genuinely different — Claude Desktop has no slash command for this. If they
don't know, ask what they double-clicked to open the window they're typing in.

### Claude Desktop

There is no slash command here. It is the Settings screen:

1. Open **Settings**
2. Go to **Plugins**
3. Click **Add**, then **Add marketplace**
4. Paste `https://github.com/bluerock-io/claude-plugins`
5. Click **Sync**
6. Open the **bluerock** tab
7. Click **+** on **BlueRock Builder Toolkit**

⚠️ If they're offered **"Sync automatically"**, tell them what it does before they click:
it opens a separate GitHub authorization window, which is a normal part of keeping the plugin
up to date. It is a different thing from signing in to BlueRock. They can skip it and update
manually later.

### Cursor or VS Code

1. In the Claude Code panel, type `/plugins`
2. On the **Marketplaces** tab, paste `https://github.com/bluerock-io/claude-plugins` and click
   **Add**
3. On the **Plugins** tab, click **Install** on **bluerock**, and approve it

### Then: they must open a new chat

**This is the step people miss, and it is not optional.** Plugins load when a session starts, so
the BlueRock commands will not appear in the chat where they installed it — including this one.
Tell them plainly: *"Open a new chat. The tools won't show up in this one."*

### How to confirm it worked

Two checks, in this order. **Use these two and no others.**

1. **What they can see:** the Plugins screen lists **BlueRock Builder Toolkit** as installed.
2. **What actually proves it:** in the **new** chat, they run `/bluerock:check`. It reports their
   project and says it is **live**.

⚠️ **Never tell them to type a partial command like `/blue` or `/bluerock` as a test.** Claude
Desktop does not resolve partial slash commands, so it answers `Unknown command` even when the
install worked perfectly. We told builders to do this once and a builder who had done everything
right was told three times that she had failed. **A check that can fail while the thing it checks
succeeded is worse than no check.** Use `/bluerock:check`.

### If something goes wrong

- **Commands don't appear:** they are almost certainly still in the chat they installed from.
  Open a new one.
- **`Unknown command`:** if they typed a partial like `/blue`, that is the reason — it is not a
  failed install. Have them run `/bluerock:check` instead.
- **The marketplace won't add from a command line:** the terminal form takes the short
  `owner/repo` shape, not a full web address. `claude plugin marketplace add
  bluerock-io/claude-plugins`, then `claude plugin install bluerock@bluerock`. The Settings screen
  and `/plugins` take the full address; the terminal does not.
- **They pasted into the wrong tab:** the address goes on **Marketplaces**, not **Plugins**.
- **Still stuck:** once the plugin loads, `/bluerock:help` works and will diagnose it.

### When you're done

Say what they now have, in one line — the BlueRock tools are installed and will be there in every
new chat — and point them at `/bluerock:check` if they haven't run it, or at
`/bluerock:onboard` if they have.

---

## Adding more plugins later

More marketplaces are added the same way. Add them to this file as you go, so this stays the one
place that says what this project expects.
