---
name: execute
description: Execute a plan from .agents/plans/ in batches of 3 TDD tasks with review gates between batches
---

Execute a plan created by /plan-feature. No plan, no execution — if no plan file is specified or found in `.agents/plans/`, stop and ask which one to run.

## Step 1: Load & Critically Review

- Read the entire plan before touching anything
- Sanity-check it against the CURRENT codebase — files move, plans go stale
- If a task is now wrong or impossible, flag it and propose a correction BEFORE starting; don't silently improvise

## Step 2: Execute in Batches of 3

Work through tasks in order, THREE at a time. Each task follows the TDD cycle:

1. Write the test for the task's behavior
2. Run it — verify it FAILS (a test that never failed proves nothing)
3. Implement the minimal change from the plan
4. Run it — verify it PASSES, and no other tests broke
5. Commit with a conventional commit message (`feat:`, `fix:`, `test:`, `refactor:`)

## Step 3: Stop Between Batches

After every 3 tasks:

- Report: tasks completed, tests passing, commits made, anything that deviated from the plan
- WAIT for the user's go-ahead before starting the next batch

## Blocked? Stop, Don't Guess

If a task can't proceed — missing dependency, plan/reality mismatch, ambiguous requirement, failing test you can't explain:

- STOP immediately
- State exactly what blocked you and what you'd need to continue
- Never skip a task, stack workarounds, or invent scope the plan doesn't contain

The plan is the contract. Deviations are allowed only when surfaced and approved — runaway changes are how features turn into rewrites.
