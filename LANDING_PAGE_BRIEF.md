# Mayday AI — Landing Page Rebuild Brief

## Objective
Migrate maydayautomation.com off Lovable to a custom-coded site (Next.js 14+ App Router, Tailwind, deployed to Vercel) optimized for ONE conversion event: getting a lead to either (a) call the number, or (b) submit a short form that triggers an instant callback from Mayday's AI voice agent. The voice agent backend is out of scope — the page just needs to fire the form payload to a webhook endpoint (stub it as `POST /api/lead` with a TODO) and expose a `tel:` link.

## Positioning (niche-agnostic)
Mayday AI builds AI phone receptionists and missed-call recovery systems for service businesses. Do NOT write copy that only speaks to plumbers. The page must land equally with:
- Home services: plumbing, HVAC, garage door, window cleaning/power washing, landscaping
- Health/aesthetics: dentists, orthodontists, med spas
- Professional services: law firms, accounting practices
- Also credible with: real estate (agents/wholesalers), YouTubers/creators (past client categories — mention as "worked with," not primary targets)

Primary targets to visually feature: service businesses + dental/med spa. Use industry-rotating copy devices (e.g., a rotating word in the headline: "your plumbing company / your dental office / your med spa / your law firm never misses a call again") rather than niche-locked copy.

## Core message hierarchy (from the offer doc, generalized)
1. **The leak:** the average local business misses a huge share of inbound calls — after 5pm, weekends, lunch rush, when the team is with a customer/patient. Missed calls = booked-elsewhere revenue.
2. **The fix:** an AI receptionist that answers every call 24/7, qualifies the caller, routes true emergencies to a human, books appointments into the calendar, and captures every lead. Plus website chat and "Open 24 Hours" Google Business Profile activation.
3. **The math:** even 2–3 recovered jobs/appointments per month pays for the system many times over. Include an interactive ROI mini-calculator (avg ticket × missed calls/week → monthly recovered revenue) — this is the page's signature element.
4. **The guarantee:** 100% performance guarantee — if the system doesn't capture every after-hours lead from day one, they don't pay the monthly until it does.
5. **Positioning language:** never "AI replaces your receptionist." Always "your team handles business hours; this catches everything you'd miss anyway." Keep "AI" light in headlines — sell outcomes ("Never Miss Another Call," "24/7 Call Protection").

## Conversion architecture (Hormozi-derived)
- **Hero = thesis:** one quantified-outcome headline with highlighted key phrase, subhead naming the audience broadly, and the dual CTA immediately visible: big primary button "Get a Call From Our AI in 60 Seconds" (opens 3-field form: name, business name, mobile) + secondary `tel:` link "Or call us now — our AI answers." The demo IS the product: the fact that their form submission gets an instant AI callback is the proof mechanism. Say that explicitly near the CTA.
- **CTA repetition:** the same primary CTA appears after every major section (hero, problem, how-it-works, ROI calculator, proof, guarantee, FAQ). Same label everywhere.
- **Proof adjacency:** stats/testimonials/industry logos sit next to every CTA, not in one isolated section.
- **Guarantee block:** its own visually distinct section with the performance guarantee spelled out plainly.
- **Objection handling as FAQ:** adapt the four objections from the offer doc, generalized: "We don't want a robot answering our phones" / "We already have an answering service" / "What if it messes up a customer call" / "Is it worth the monthly cost." Keep the answers' structure: agree, reframe, cap the downside, cite the guarantee.
- **Sticky mobile CTA bar:** on mobile, a persistent bottom bar with "Call Now" + "Get a Callback." Most of this traffic will be mobile.
- **Speed:** page must be static/SSG, zero heavy client JS beyond the form + calculator, Lighthouse 95+ mobile. Every 100ms matters for paid traffic later.
- **Urgency:** do NOT fabricate countdown timers or fake scarcity. Acceptable urgency = the cost-of-inaction math ("every week you wait ≈ $X in missed calls").

## Design direction
- Brand: Mayday AI. Primary orange #D9531E with cream typography (existing business cards use this). Tagline: "We handle the busywork. You handle what matters."
- Direct-response clarity over agency-site aesthetics: high contrast, big type, obvious buttons — but it must not look like a ClickFunnels template. One signature element (the ROI calculator) gets the boldness; everything else stays disciplined.
- Real copy throughout, no lorem ipsum. Mobile-first.

## Out of scope
Voice agent backend, CRM integration, blog, multi-page site (single landing page + thank-you page + `/api/lead` stub only).

## Thank-you page
After form submit: "Keep your phone nearby — you're getting a call in the next 60 seconds." This page is part of the demo experience; treat it as a conversion asset (set expectations, add a calendar fallback link placeholder).