# Migrating from Roo Code / Zoo Code to Kiwi Code

> **Last Updated:** July 8, 2026  
> **Kiwi Code Version:** 3.66.0

## What Changed

Kiwi Code is a privacy-first, fully self-hosted fork of Roo Code (formerly Zoo Code). The following changes affect migration:

### Breaking Changes

| From (Zoo Code) | To (Kiwi Code) | Impact |
|-----------------|----------------|--------|
| Command prefix `zoo-code.*` | `kiwi-code.*` | **Keybindings, custom VS Code commands, and extensions relying on Zoo Code commands must update their references.** |
| View ID `zoo-code.SidebarProvider` | `kiwi-code.SidebarProvider` | Extensions or scripts referencing the sidebar view must update. |
| View ID `zoo-code-ActivityBar` | `kiwi-code-ActivityBar` | Same as above. |
| Config key prefix `zoo-code.*` | `kiwi-code.*` | **All VS Code settings prefixed with `zoo-code.` must be manually migrated to `kiwi-code.`** |
| Package name `ZooCodeOrganization.zoo-code` | `FishRaposo.kiwi-code` | Extensions checking for the installed extension by ID must update. |

### Removed Features

Kiwi Code has **no cloud services, no telemetry, and no account system**:

| Feature | Status | Migration |
|---------|--------|-----------|
| Zoo Code Cloud (proxy mode) | **Removed** | Configure AI providers directly with your own API keys. No proxy transit. |
| Zoo Code Account / Sign-in | **Removed** | No account needed. Kiwi Code works entirely offline with local or direct API providers. |
| Zoo Gateway provider | **Removed** | Use OpenAI, Anthropic, OpenRouter, Ollama, LM Studio, or any other supported provider directly. |
| Telemetry / Usage analytics | **Removed** | No telemetry is collected. No opt-out needed. |
| Marketplace (MCP profiles) | **Removed** | MCP servers must be configured manually or via URL. |
| Discord / Reddit community | **Removed** | Community discussion moved to [GitHub Discussions](https://github.com/FishRaposo/kiwi-code/discussions). |

### Preserved Features

Everything else works identically to Zoo Code v3.66.0:

- All AI providers (OpenAI, Anthropic, OpenRouter, Ollama, LM Studio, etc.)
- All Modes and Custom Modes
- Agent rules, auto-approval, checkpointing
- Diff editing, command execution, file operations
- Code indexing, file search, code actions
- All 17 locale languages

## Migration Steps

### 1. Update VS Code Settings

Open your VS Code `settings.json` (User or Workspace) and replace all `zoo-code.` prefixes with `kiwi-code.`:

```bash
# macOS/Linux
sed -i 's/"zoo-code\./"kiwi-code./g' ~/Library/Application\ Support/Code/User/settings.json

# Windows (PowerShell)
(Get-Content $env:APPDATA\Code\User\settings.json) -replace '"zoo-code\.','"kiwi-code.' | Set-Content $env:APPDATA\Code\User\settings.json
```

Common settings to migrate:
- `zoo-code.apiModelId` → `kiwi-code.apiModelId`
- `zoo-code.apiProvider` → `kiwi-code.apiProvider`
- `zoo-code.allowedCommands` → `kiwi-code.allowedCommands`
- `zoo-code.customStoragePath` → `kiwi-code.customStoragePath`

### 2. Update Keybindings

If you have custom keybindings for Zoo Code commands, update them in `keybindings.json`:

```bash
# macOS/Linux
sed -i 's/zoo-code\./kiwi-code./g' ~/Library/Application\ Support/Code/User/keybindings.json

# Windows (PowerShell)
(Get-Content $env:APPDATA\Code\User\keybindings.json) -replace 'zoo-code\.','kiwi-code.' | Set-Content $env:APPDATA\Code\User\keybindings.json
```

### 3. Update Extensions or Scripts

Any VS Code extension or automation script that invokes Zoo Code commands must update:

```typescript
// Before (Zoo Code)
await vscode.commands.executeCommand("zoo-code.plusButtonClicked")
await vscode.commands.executeCommand("zoo-code.newTask")

// After (Kiwi Code)
await vscode.commands.executeCommand("kiwi-code.plusButtonClicked")
await vscode.commands.executeCommand("kiwi-code.newTask")
```

### 4. API Keys

Your API keys stored in VS Code's secure storage are **preserved** during migration because Kiwi Code uses the same storage key namespace. However, if you previously used Zoo Code Cloud (proxy mode) with a Zoo Code account, you will need to:

1. Obtain your own API keys directly from OpenAI, Anthropic, or your preferred provider.
2. Configure them in Kiwi Code Settings under the respective provider.

### 5. Custom Storage Path

If you used `zoo-code.customStoragePath` to store conversation history in a custom location, update the setting name and verify the path:

```json
{
  "kiwi-code.customStoragePath": "/path/to/your/custom/storage"
}
```

## Settings Import / Export

Kiwi Code supports importing and exporting settings via the settings panel. You can:

1. **Export** your Zoo Code settings to a JSON file before uninstalling.
2. **Import** that JSON file into Kiwi Code.
3. **Manually replace** all `zoo-code.` prefixes with `kiwi-code.` in the exported JSON before importing.

## Uninstalling Zoo Code

After migrating:

1. Disable or uninstall the Zoo Code extension (`ZooCodeOrganization.zoo-code`).
2. Install Kiwi Code from the VSIX or marketplace (when available).
3. Verify your settings and keybindings are updated.

## Troubleshooting

### Commands not found after migration

If you see `command 'kiwi-code.xxx' not found`:
- Ensure the Kiwi Code extension is activated (open the sidebar or run any Kiwi Code command).
- Check that you uninstalled the old Zoo Code extension to avoid conflicts.

### Settings not applying

If settings from `settings.json` don't seem to take effect:
- Verify the prefix is `kiwi-code.` not `zoo-code.`.
- Check both User and Workspace settings.

### Missing features

If you relied on Zoo Code Cloud, Zoo Gateway, or the Marketplace:
- These are intentionally removed. Configure providers directly.
- For MCP servers, add them manually via Settings → MCP Servers.

## Questions?

Open an issue on [GitHub](https://github.com/FishRaposo/kiwi-code/issues) or start a discussion in [GitHub Discussions](https://github.com/FishRaposo/kiwi-code/discussions).
