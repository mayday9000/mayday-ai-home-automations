---
name: commit
description: Conventional commit with smart message
---

Look at staged changes (git diff --cached). If nothing is staged, review the working tree and stage the relevant files.

Write a conventional commit message:

- `feat:` — new feature (minor version bump)
- `fix:` — bug fix (patch version bump)
- `refactor:` — code restructure, no behavior change
- `docs:` — documentation only
- `chore:` — maintenance (deps, config, CI)
- `test:` — adding or fixing tests

Rules:

- Subject under 72 characters, specific about WHAT and WHY
- Include a 1-2 line body if the change isn't obvious
- Good: `feat: add Stripe webhook signature verification`
- Bad: `update code`, `fix bug`, `WIP`

Commit it.
