# Mayday AI — Landing Page

Single-purpose landing page for [maydayautomation.com](https://maydayautomation.com): get a visitor to either call the number or submit the callback form, which triggers an instant demo call from Mayday's AI voice agent.

Built per `LANDING_PAGE_BRIEF.md` (source of truth for positioning and copy rules).

## Stack

- **Next.js 15 (App Router)** + **Tailwind CSS**, deployed on Vercel
- Fully static pages; the only server code is three API routes
- **Neon Postgres** for leads, SMS consent records, and unsubscribes
- Client JS is limited to two islands: the lead form modal and the ROI calculator (plus the rotating headline word and sticky mobile bar)

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Landing page |
| `/thank-you` | Post-submit page ("your call is coming in 60 seconds") |
| `/api/lead` | Validates the callback form, POSTs to `LEAD_WEBHOOK_URL`, mirrors into Neon |
| `/privacy`, `/terms` | Legal (ported from previous site; A2P compliance references these) |
| `/sms-signup` → `/api/sms-consent` | A2P 10DLC SMS consent capture |
| `/unsubscribe` → `/api/unsubscribe` | Email unsubscribe token flow |
| `/terms-and-conditions-privacy-policy` | 308 redirect to `/terms` (legacy URL) |

## Environment

Copy `.env.example` to `.env`:

- `LEAD_WEBHOOK_URL` — receives the lead JSON and triggers the AI callback. Unset: leads are logged, not forwarded.
- `DATABASE_URL` — Neon pooled connection string. Unset: dev degrades gracefully; in production `/api/sms-consent` returns 503 rather than fake-accepting consent records.

One-time DB setup: `psql "$DATABASE_URL" -f db/schema.sql`

## TODOs before launch

- Fill the three testimonial slots in `components/sections/proof.tsx` (bracketed placeholders).
- Set the calendar fallback URL in `app/thank-you/page.tsx`.
- Set `LEAD_WEBHOOK_URL` and `DATABASE_URL` in Vercel.

## Commands

```bash
npm run dev      # dev server
npm run build    # production build
npm test         # vitest (ROI math + form validation)
```
