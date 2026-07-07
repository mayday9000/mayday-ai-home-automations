---
name: plan-feature
description: Deep codebase analysis → step-by-step implementation plan saved to .agents/plans/ for review before any code is written
---

Plan first, code never. This skill produces a plan ONLY — do not implement anything, do not edit source files. The output is a plan file the user reviews before /execute runs it.

## Phase 1: Deep Codebase Analysis

- Read EVERY file relevant to the feature — entry points, models, routes, components, tests, config
- Map how similar existing features are built; the plan must follow the codebase's existing patterns, not invent new ones
- Identify the test setup: framework, how tests are run, where they live
- Note constraints from CLAUDE.md (TDD required, conventional commits, no secrets outside .env)

## Phase 2: Write the Plan

Break the feature into bite-sized tasks — each one 2–5 minutes of work. For EVERY task include:

- **Exact file path(s)** to create or modify
- **Code snippet or precise description** of the change
- **Test command** to verify the task is done
- Tasks ordered so each builds on the last; test-writing tasks come BEFORE their implementation tasks (TDD)

Plan structure:

```markdown
# Plan: <feature name>

## Context
<what exists today, what we're adding, key files involved>

## Tasks
### Task 1: <name>
- Files: <paths>
- Change: <snippet or description>
- Verify: <command>
...

## Risks & Open Questions
<anything ambiguous — flag it here instead of guessing>
```

## Phase 3: Save & Stop

1. Save to `.agents/plans/<kebab-case-feature-name>.md` (create the directory if needed)
2. Summarize the plan: task count, files touched, open questions
3. STOP. Tell the user to review the plan, then run /execute to build it.

A vague task ("update the API") is a planning failure. If you can't name the exact file and change, you haven't analyzed deeply enough — go back to Phase 1.
