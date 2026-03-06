# Contributing Guide

First off, thanks for considering a contribution to `FCT Font Generator`.
If you're here, you're already helping make the tool cleaner, faster, and less painful for everyone generating Factorio rich text.

We keep the project intentionally lean: static front-end, zero build drama, and straightforward review flow.

## I Have a Question

Please do **not** use GitHub Issues for general usage/support questions.
Issues are reserved for actionable engineering work (bugs, enhancements, tasks).

For questions, use community channels:

- Telegram chat: https://t.me/FCTostin
- Steam community group: https://steamcommunity.com/groups/FCTgroup
- YouTube channel for updates/context: https://www.youtube.com/@FCT-Ostin

> [!TIP]
> If your question includes reproducible technical details, there's a high chance it can be converted into a valid bug report or enhancement proposal.

## Reporting Bugs

Before opening a new bug report:

1. Search existing Issues for duplicates.
2. Re-test on the latest version from `main`.
3. Confirm it is reproducible with clean browser cache/session.

When filing the issue, include:

- **Environment**
  - OS and version (e.g. `Windows 11`, `Ubuntu 24.04`)
  - Browser and version (e.g. `Chrome 126`, `Firefox 128`)
  - App version/commit hash (`git rev-parse --short HEAD`)
- **Steps to Reproduce**
  - Exact click/input sequence.
  - Include source text, selected font, selected color.
- **Expected Behavior**
  - What should have happened.
- **Actual Behavior**
  - What actually happened.
- **Artifacts**
  - Screenshots, screen recording, console logs.

Minimal bug template:

```md
### Environment
- OS:
- Browser:
- Commit:

### Steps to Reproduce
1.
2.
3.

### Expected Behavior

### Actual Behavior

### Additional Context
```

## Suggesting Enhancements

Feature requests are welcome, but keep them sharp and product-driven.

A solid enhancement proposal should include:

- The pain point you are solving.
- Why current behavior is insufficient.
- Real use cases (not just hypothetical scenarios).
- Any UX/API tradeoffs to consider.

Strong proposal format:

```md
### Problem

### Proposed Solution

### Use Cases

### Potential Tradeoffs
```

## Local Development / Setup

### 1) Fork and clone

```bash
# Fork on GitHub first, then:
git clone https://github.com/<your-username>/fonts-online_rich_text.git
cd fonts-online_rich_text
```

### 2) Create a feature branch

```bash
git checkout -b feature/short-description
```

### 3) Run locally

```bash
# Option A: open index.html directly in browser

# Option B: serve as static app (recommended for clipboard API behavior)
python -m http.server 8080
# open http://localhost:8080
```

### 4) Make your changes

Keep edits focused. Avoid drive-by refactors unrelated to your task.

## Pull Request Process

### Branch naming

Use predictable branch prefixes:

- `feature/<short-name>`
- `bugfix/<short-name-or-issue-id>`
- `docs/<short-name>`
- `chore/<short-name>`

Examples:

- `feature/add-font-filter`
- `bugfix/issue-42-copy-flyout`
- `docs/readme-refresh`

### Commit messages (Conventional Commits required)

Use Conventional Commit format:

- `feat: add keyboard navigation for font dropdown`
- `fix: prevent copy action when output is empty`
- `docs: rewrite setup section in readme`
- `style: normalize button spacing in toolbar`
- `refactor: isolate rich text builder function`

### Keep your branch synced

Before opening PR:

```bash
git fetch upstream
git rebase upstream/main
```

If you don't have `upstream` configured:

```bash
git remote add upstream https://github.com/OstinUA/fonts-online_rich_text.git
```

### PR description requirements

Every PR should include:

- What changed and why.
- Link to issue (`Closes #123`) when relevant.
- Test/verification notes.
- Screenshots for UI changes.
- Any known limitations or follow-up tasks.

## Styleguides

### General code style

- Keep the project dependency-free unless there is a very strong reason.
- Prefer clear, small, pure functions over tangled handlers.
- Use descriptive naming; avoid cryptic one-letter identifiers.
- Do not mix unrelated refactors into feature/bugfix PRs.

### Formatting and linting

There is no hard-enforced formatter config in-repo yet.
Contributors should keep style consistent with existing code in each file.

Recommended local tools (optional but useful):

- `ESLint` for JavaScript sanity checks.
- `Prettier` for markdown/style consistency.

> [!NOTE]
> If you introduce project-level lint/format tooling, propose it in a dedicated PR first.

### Architecture conventions

- `index.html` is the UI shell.
- `style.css` contains all styling concerns.
- `script.js` owns runtime behavior.
- `profiles/*.js` are locale dictionaries; keep keys aligned across locales.

## Testing

New behavior should ship with reasonable validation.

At minimum, run a manual smoke test:

1. Text input updates generated output.
2. Font selection updates tags correctly.
3. Color picker updates preview and rich text wrapper.
4. Character limit indicator reacts correctly.
5. Copy action writes expected string to clipboard.
6. Locale switching updates all visible labels.

Suggested commands (if toolchain is available in your environment):

```bash
# Optional static checks
npx eslint script.js
npx prettier --check README.md CONTRIBUTING.md
```

## Code Review Process

- Maintainers review incoming PRs.
- Expect at least **one approval** before merge.
- Address reviewer feedback with focused follow-up commits.
- Resolve conversations explicitly once fixed.
- Keep discussions technical, concise, and respectful.

If requested changes are unclear, ask for concrete repro steps or examples before pushing another revision.

Thanks again for contributing and helping keep this project sharp.
