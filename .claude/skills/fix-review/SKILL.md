---
name: fix-review
description: Fix-first code review - auto-fix mechanical issues, ask on judgment calls
---

Review the current changes (git diff, or the files I specify). Auto-fix everything mechanical without asking; ask before every judgment call. Zero noise, maximum signal.

## AUTO-FIX without asking

- Dead code, unused imports, unused variables
- Stale comments that contradict the current implementation
- Missing TypeScript types where inference fails
- `console.log` left in production paths
- Hardcoded localhost URLs that should be env vars

## ASK before touching

- Security pattern choices (auth middleware, RLS policies)
- Race conditions and async ordering
- Architecture changes (new abstractions, file structure)
- Business logic that seems wrong but may reflect a product decision
- Error handling strategy (fail-silent vs fail-loud)

## Severity levels

- **CRITICAL**: data loss, secret exposure, auth bypass — block merge immediately
- **HIGH**: security holes, missing error handling on payment paths — block merge
- **MEDIUM**: N+1 queries, type unsafety, missing loading states — fix before merge
- **LOW**: code style, naming inconsistency — auto-fix or note for next pass

## Security checklist (run on EVERY review)

1. Grep for hardcoded secrets
2. Check SQL injection vectors
3. Verify auth on all API routes
4. Confirm RLS is enabled on new tables
5. Validate Stripe webhook signatures

Report findings grouped by severity, list what was auto-fixed, and list the questions that need my decision.
