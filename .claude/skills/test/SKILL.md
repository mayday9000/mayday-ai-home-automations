---
name: test
description: TDD - write failing test first (RED → GREEN → REFACTOR)
---

The iron law: NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST.

For the feature or function I describe, run the cycle:

## RED — Write a failing test

- One behavior per test
- Clear name that describes the behavior
- Real code, no mocks unless absolutely unavoidable
- Run it — verify it FAILS. A test you never saw fail proves nothing.

## GREEN — Minimal code

- Write the SIMPLEST code that makes the test pass
- Don't add features, don't refactor, don't "improve"
- Run again — verify it passes

## REFACTOR — Clean up

- Remove duplication, improve names, extract helpers
- Keep tests green throughout
- Don't add new behavior during refactoring

"I'll write tests after" is NOT TDD — tests written after the code pass immediately and prove nothing.
