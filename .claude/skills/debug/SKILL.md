---
name: debug
description: Systematic 4-phase root-cause debugging protocol — never guess at bugs
---

Never guess at bugs. Follow all four phases in order. Find root cause BEFORE attempting any fix.

## Phase 1: Root Cause Investigation (before touching ANY code)

- Read the error message carefully — it often contains the exact solution
- Reproduce consistently — can you trigger it reliably?
- Check recent changes — git diff, recent commits, new dependencies
- Trace data flow backward — where does the bad value originate?

## Phase 2: Pattern Analysis

- Find working examples of similar code in this same codebase
- Compare against references — read implementations completely, don't skim
- Identify EVERY difference between working and broken code

## Phase 3: Hypothesis & Testing

- Form ONE hypothesis: "I think X is the root cause because Y"
- Make the SMALLEST possible change to test it
- Didn't work? Form a NEW hypothesis — never stack fixes on top of each other

## Phase 4: Implementation

1. Create a failing test case first
2. Implement a single fix addressing the root cause
3. Verify: the test passes and no other tests broke
4. If 3+ fixes have failed: question the architecture, not the fix

Never apply "quick fixes" without understanding the problem. Fix at the source, not the symptom.
