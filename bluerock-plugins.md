# BlueRock plugins

The BlueRock tools for this project live in a plugin marketplace. Add the
marketplace, install the plugin, and you get the BlueRock skills and agents in
every new chat.

## Marketplace

```
https://github.com/bluerock-io/claude-plugins
```

Plugin to install: **bluerock** (listed as *BlueRock Builder Toolkit*).

## Installing it

Ask Claude to walk you through it — say **"read bluerock-plugins.md and help me
install the BlueRock plugin"** — or follow the steps for whichever app you're
using.

**Claude Desktop.** There is no slash command for this here; it's the Settings
UI. Settings → Plugins → Add → Add marketplace → paste the URL above → Sync →
open the **bluerock** tab → click **+** on **BlueRock Builder Toolkit**.

**Cursor or VS Code.** Type `/plugins` in the Claude Code panel. On the
**Marketplaces** tab, paste the URL above and click **Add**. On the **Plugins**
tab, click **Install** on **bluerock** and approve it.

**Then open a new chat.** Plugins only load when a session starts, so the
BlueRock commands will not appear in the chat you installed from. This is the
step people miss.

## Checking it worked

In a new chat, type `/blue` — the BlueRock commands should list. Or run
`/bluerock:check`, which confirms your project is set up and reports it as live.

If something looks wrong, `/bluerock:help` works the moment the plugin loads and
will tell you what to do next.

## Adding more plugins later

More marketplaces can be added the same way. Add them to this file as you go so
this stays the one place that says what this project expects.
