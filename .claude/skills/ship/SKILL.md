---
name: ship
description: Pre-deployment verification
---

Before deploying, verify:

1. npm run build passes with zero errors

2. No hardcoded secrets (grep for API keys)

3. No console.log in production code

4. Git status is clean

5. Push to remote and confirm
