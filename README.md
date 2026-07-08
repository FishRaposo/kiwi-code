# Kiwi Code

> Your AI-Powered Dev Team, Right in Your Editor

## What is Kiwi Code?

Kiwi Code is a community fork of [Roo Code](https://github.com/RooVetGit/Roo-Code) (formerly Roo Code), stripped of cloud dependencies and telemetry, built for self-hosted use and open-source development.

This project inherits years of development from the Roo Code community, with a focus on:
- **Full privacy** — no cloud accounts, no telemetry, no external services required
- **Self-hosted by default** — works entirely with your own API keys and local models
- **Open source** — free to use, modify, and contribute to
- **Community-driven** — maintained by developers who use it daily

## What's New in v3.66.0

- **Claude Sonnet 5 support** — the latest Claude model is now available across Anthropic, Bedrock, and Vertex providers
- **Semble v0.4.1 upgrade** — flattened result parsing and localized status messages
- **Task-lifecycle status transition guard** — a new status transition guard and startup delegation reconciliation prevent invalid task state transitions
- **Friendli provider** — added Friendli AI with GLM-5.2 support
- **Ollama thinking mode** — native thinking/reasoning support for Ollama models
- Fix: LiteLLM cache key collision and silent fallback to a non-existent default model
- Fix: reliable auto context condensing for the VS Code Language Model API
- Fix: ThinkingBudget now supports `xhigh` and all extended reasoning effort values
- Fix: round-trip DeepSeek `reasoning_content` in thinking mode to prevent 400 errors
- Fix: base64-encode Gemini `thoughtSignature` bypass token to fix the Vertex AI empty-response loop
- Fix: provider cache reset after settings import
- Fix: atomically serialize `reopenParentFromDelegation`
- Fix: shell default profile name type guard
- Security: dependency-review, invisible-char detection, and least-privilege workflow permissions
- Upgrade `@anthropic-ai/sdk` to 0.104.1 and `@anthropic-ai/vertex-sdk` to 0.17.1
- Dependency and tooling updates

<details>
  <summary>🌐 Available languages</summary>

- [English](README.md)
- [Català](locales/ca/README.md)
- [Deutsch](locales/de/README.md)
- [Español](locales/es/README.md)
- [Français](locales/fr/README.md)
- [हिंदी](locales/hi/README.md)
- [Bahasa Indonesia](locales/id/README.md)
- [Italiano](locales/it/README.md)
- [日本語](locales/ja/README.md)
- [한국어](locales/ko/README.md)
- [Nederlands](locales/nl/README.md)
- [Polski](locales/pl/README.md)
- [Português (BR)](locales/pt-BR/README.md)
- [Русский](locales/ru/README.md)
- [Türkçe](locales/tr/README.md)
- [Tiếng Việt](locales/vi/README.md)
- [简体中文](locales/zh-CN/README.md)
- [繁體中文](locales/zh-TW/README.md)
- ...
    </details>

---

## What Can Kiwi Code Do For YOU?

- Generate Code from natural language descriptions and specs
- Adapt with Modes: Code, Architect, Ask, Debug, and Custom Modes
- Refactor & Debug existing code
- Write & Update documentation
- Answer Questions about your codebase
- Automate repetitive tasks
- Utilize MCP Servers

## Modes

Kiwi Code adapts to how you work:

- Code Mode: everyday coding, edits, and file ops
- Architect Mode: plan systems, specs, and migrations
- Ask Mode: fast answers, explanations, and docs
- Debug Mode: trace issues, add logs, isolate root causes
- Custom Modes: build specialized modes for your team or workflow

## Tutorial & Feature Videos

> Note: Video tutorials still reference the original Roo Code branding. The functionality is identical.

<div align="center">

|                                                                                                                                                                                                               |                                                                                                                                                                                                       |                                                                                                                                                                                                   |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <a href="https://www.youtube.com/watch?v=Mcq3r1EPZ-4"><img src="https://img.youtube.com/vi/Mcq3r1EPZ-4/maxresdefault.jpg" width="100%" alt="Installing the Extension"></a><br><b>Installing the Extension</b> | <a href="https://www.youtube.com/watch?v=ZBML8h5cCgo"><img src="https://img.youtube.com/vi/ZBML8h5cCgo/maxresdefault.jpg" width="100%" alt="Configuring Profiles"></a><br><b>Configuring Profiles</b> |  <a href="https://www.youtube.com/watch?v=r1bpod1VWhg"><img src="https://img.youtube.com/vi/r1bpod1VWhg/maxresdefault.jpg" width="100%" alt="Codebase Indexing"></a><br><b>Codebase Indexing</b>  |
|             <a href="https://www.youtube.com/watch?v=iiAv1eKOaxk"><img src="https://img.youtube.com/vi/iiAv1eKOaxk/maxresdefault.jpg" width="100%" alt="Custom Modes"></a><br><b>Custom Modes</b>             |          <a href="https://www.youtube.com/watch?v=Ho30nyY332E"><img src="https://img.youtube.com/vi/Ho30nyY332E/maxresdefault.jpg" width="100%" alt="Checkpoints"></a><br><b>Checkpoints</b>          | <a href="https://www.youtube.com/watch?v=HmnNSasv7T8"><img src="https://img.youtube.com/vi/HmnNSasv7T8/maxresdefault.jpg" width="100%" alt="Context Management"></a><br><b>Context Management</b> |

</div>

## Resources

- **[GitHub Issues](https://github.com/FishRaposo/kiwi-code/issues):** Report
  bugs and track development.
- **[Feature Requests](https://github.com/FishRaposo/kiwi-code/discussions):**
  Have an idea? Share it with the developers.

---

## Local Setup & Development

1. **Clone** the repo:

```sh
git clone https://github.com/FishRaposo/kiwi-code.git
```

2. **Install dependencies**:

```sh
pnpm install
```

3. **Run the extension**:

There are several ways to run the Kiwi Code extension:

### Development Mode (F5)

For active development, use VSCode's built-in debugging:

Press `F5` (or go to **Run** → **Start Debugging**) in VSCode. This will open a
new VSCode window with the Kiwi Code extension running.

- Changes to the webview will appear immediately.
- Changes to the core extension will also hot reload automatically.

### Automated VSIX Installation

To build and install the extension as a VSIX package directly into VSCode:

```sh
pnpm install:vsix [-y] [--editor=<command>]
```

This command will:

- Ask which editor command to use (code/cursor/code-insiders) - defaults to
  'code'
- Uninstall any existing version of the extension.
- Build the latest VSIX package.
- Install the newly built VSIX.
- Prompt you to restart VS Code for changes to take effect.

Options:

- `-y`: Skip all confirmation prompts and use defaults
- `--editor=<command>`: Specify the editor command (e.g., `--editor=cursor` or
  `--editor=code-insiders`)

### Manual VSIX Installation

If you prefer to install the VSIX package manually:

1. First, build the VSIX package:
    ```sh
    pnpm vsix
    ```
2. A `.vsix` file will be generated in the `bin/` directory (e.g.,
   `bin/kiwi-code-<version>.vsix`).
3. Install it manually using the VSCode CLI:
    ```sh
    code --install-extension bin/kiwi-code-<version>.vsix
    ```

---

We use [changesets](https://github.com/changesets/changesets) for versioning and
publishing. Check our `CHANGELOG.md` for release notes.

---

## Disclaimer

**Please note** that Kiwi Code does **not** make any representations or
warranties regarding any code, models, or other tools provided or made available
in connection with Kiwi Code, any associated third-party tools, or any resulting
outputs. You assume **all risks** associated with the use of any such tools or
outputs; such tools are provided on an **"AS IS"** and **"AS AVAILABLE"** basis.
Such risks may include, without limitation, intellectual property infringement,
cyber vulnerabilities or attacks, bias, inaccuracies, errors, defects, viruses,
downtime, property loss or damage, and/or personal injury. You are solely
responsible for your use of any such tools or outputs (including, without
limitation, the legality, appropriateness, and results thereof).

---

## Contributing

We love community contributions! Get started by reading our
[CONTRIBUTING.md](CONTRIBUTING.md).

---

## License

[Apache 2.0 © 2026 FishRaposo](./LICENSE)

---

**Enjoy Kiwi Code!** Whether you keep it on a short leash or let it roam
autonomously, we can't wait to see what you build. If you have questions or
feature ideas, open an [issue](https://github.com/FishRaposo/kiwi-code/issues). Happy coding!
