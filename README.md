# <a href="https://github.com/OstinUA" target="_blank" rel="noopener"><img src="https://raw.githubusercontent.com/OstinUA/Image-storage/main/Factorio/Gear-silhouette-of-the-Factorio-logo.png" width="32" valign="middle" alt="telegram:FCTostin"></a> FCT Font Generator <a href="https://github.com/OstinUA"><img align="right" src="https://img.shields.io/badge/OstinUA-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>

![Factorio: 2.0+](https://img.shields.io/badge/Factorio-2.0%2B%20%2F%20Space%20Age-orange?style=for-the-badge)

![Platform: Web](https://img.shields.io/badge/Platform-Web_App-0ea5e9?style=for-the-badge)
[![Frontend: Vanilla JS](https://img.shields.io/badge/Frontend-Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111)](script.js)
[![Styles: CSS3](https://img.shields.io/badge/Styles-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](style.css)
[![Markup: HTML5](https://img.shields.io/badge/Markup-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](index.html)
![Status: Active](https://img.shields.io/badge/Status-Active-22c55e?style=for-the-badge)
![Coverage: Manual](https://img.shields.io/badge/Coverage-Manual%20Validation-lightgrey?style=for-the-badge)
[![i18n](https://img.shields.io/badge/i18n-multi--language-2ea44f?style=for-the-badge)](#features)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Technical Notes](#technical-notes)
  - [Project Structure](#project-structure)
  - [Key Design Decisions](#key-design-decisions)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Usage](#usage)
- [Configuration](#configuration)
- [License](#license)
- [Community and Support](#community-and-support)
- [Support the Development](#support-the-development)

## Project Overview

`FCT Font Generator` is a lightweight front-end utility that outputs valid Factorio rich text strings like:

```text
[color=#ffc53a][font=default-bold]Your text here[/font][/color]
```

The app is purpose-built for people who frequently format chat lines, station names, map labels, and blueprint annotations. Instead of hand-typing tags and praying you didn't mess up the nesting, you get a quick UI workflow with instant feedback.

> [!IMPORTANT]
> This project intentionally stays dependency-free (pure HTML/CSS/JS) so it can be opened locally and still work out of the box.

## Features

- Visual font picker with in-context previews for available Factorio fonts.
- Real-time rich text generation using Factorio-compatible tag syntax.
- HEX color picker integrated directly into the formatting pipeline.
- Live output preview where text color updates instantly.
- Character-length validator (with limit feedback for constrained in-game fields).
- One-click clipboard copy for generated markup.
- Multi-language UI powered by language profile files.
- Keyboard-accessible font selection interactions.

> [!TIP]
> If you name stations or map markers a lot, this tool drastically reduces typo churn and formatting regressions.

## Technology Stack

- **HTML5**: semantic page skeleton and UI layout.
- **CSS3**: Factorio-inspired visual theme and responsive behavior.
- **Vanilla JavaScript (ES6+)**: UI state, i18n switching, generation logic, clipboard actions.
- **Static profile modules** (`profiles/*.js`): localization dictionaries loaded in the browser.

## Technical Notes

### Project Structure

```text
.
├── index.html              # Main UI shell
├── style.css               # Theme and component styling
├── script.js               # Core app logic (rendering, generation, copy, i18n)
├── profiles/               # Language profile dictionaries
│   ├── en.js
│   ├── ru.js
│   └── ...
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
└── LICENSE
```

### Key Design Decisions

1. **Zero build step**
   The project is a pure static app. No bundlers, no transpilers, no runtime dependency graph. Easier onboarding, easier hosting.

2. **No framework lock-in**
   All logic is plain JavaScript for low overhead and transparent behavior.

3. **Data-driven localization**
   Language files are split into dedicated modules, so adding a locale is a predictable copy-edit flow.

4. **Fast feedback UX**
   Output, counter state, and preview all update immediately to keep the editing loop tight.

> [!NOTE]
> The tool targets practical utility over feature bloat. Keep it snappy and deterministic.

## Getting Started

### Prerequisites

You only need:

- A modern browser (`Chrome`, `Firefox`, `Edge`, `Safari`).
- Optional for local dev convenience: `Python 3.x` or `Node.js` for running a static file server.
- `Git` if you plan to clone and contribute.

### Installation

```bash
# 1) Clone the repository
git clone https://github.com/OstinUA/fonts-online_rich_text.git

# 2) Enter the project directory
cd fonts-online_rich_text

# 3) Quick start (direct open)
# Open index.html in your browser

# 4) Optional: run a local static server (Python)
python -m http.server 8080
# then open http://localhost:8080
```

> [!WARNING]
> Some browser clipboard APIs may behave differently for `file://` URLs. If copy-to-clipboard is blocked, run the app through a local HTTP server.

## Testing

There is no formal test suite yet, but you can run a practical QA pass quickly.

```bash
# Optional: lint HTML structure (if you have htmlhint installed)
# npx htmlhint index.html

# Optional: lint JavaScript syntax (if eslint is configured in your environment)
# npx eslint script.js
```

Manual smoke test checklist:

1. Enter text, choose font, pick color.
2. Verify generated tags update instantly.
3. Confirm character counter switches to error state over limit.
4. Click copy and paste output into a text area.
5. Switch languages and confirm UI strings update.

## Deployment

Because this is a static application, deployment is straightforward.

### Option A: GitHub Pages

1. Push the repository to GitHub.
2. Enable Pages from the main branch.
3. Serve from repository root.

### Option B: Any static host (Netlify, Vercel static, Nginx, etc.)

```bash
# There is no build artifact.
# Deploy all repository static assets as-is.
```

> [!CAUTION]
> Ensure all `profiles/*.js` files are served with valid MIME types and accessible paths, otherwise language switching will partially fail.

## Usage

```text
# Workflow example
1) Input text: "Main Bus - Iron"
2) Select font: default-bold
3) Pick color: #ffc53a
4) Copy result:
[color=#ffc53a][font=default-bold]Main Bus - Iron[/font][/color]

# Paste result directly into Factorio rich-text-aware fields.
```

## Configuration

This project currently does not require `.env` files or server-side config.

Available configuration points are code-level constants/state in `script.js`:

- Default selected font (`selectedFont`).
- Default language fallback (`currentLang` / locale selection logic).
- Character limit UI logic (`155` max displayed in counter).
- Font preview registry (`fonts` array with image URLs).

If you need customization for your fork, start there.

## License

This project is distributed under the `GPL-3.0` license. See [`LICENSE`](LICENSE) for full legal text.

## Community and Support

Project created with the support of the FCTostin community.

[![YouTube](https://img.shields.io/badge/YouTube-Channel-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@FCT-Ostin)
[![Telegram](https://img.shields.io/badge/Telegram-Join_Chat-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/FCTostin)
[![Steam](https://img.shields.io/badge/Steam-Join_Group-1b2838?style=for-the-badge&logo=steam&logoColor=white)](https://steamcommunity.com/groups/FCTgroup)

## Support the Development

[![Patreon](https://img.shields.io/badge/Patreon-Support-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://www.patreon.com/c/OstinFCT)
[![Boosty](https://img.shields.io/badge/Boosty-Donate-F15F2C?style=for-the-badge&logo=boosty&logoColor=white)](https://boosty.to/ostinfct)

## Contacts

- GitHub: [OstinUA](https://github.com/OstinUA)
- Team page: [FCTostin-team](https://github.com/FCTostin-team)
- Contribution process: see [`CONTRIBUTING.md`](CONTRIBUTING.md).
