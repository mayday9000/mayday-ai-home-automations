import { CtaBand } from "../cta-band";

const WORKED_WITH = [
  "Home Services",
  "Dental & Ortho",
  "Med Spas",
  "Law Firms",
  "Real Estate",
  "Creators & Media",
];

// Client-approved testimonials.
const TESTIMONIALS = [
  {
    quote:
      "I'm on jobs all day. I used to lose my evenings to admin work after cleaning windows. Now most of it's handled for me, and it's more accurate than when I did it myself.",
    name: "Ryan",
    detail: "Owner, Windows By Ryan, Cary, NC",
  },
  {
    quote:
      "My listings get marketed without me touching a thing, so my time goes to clients and showings instead. Let's take it to another level. My team members will want the same system once they see this one.",
    name: "Jazz Gill",
    detail: "Real Estate Agent, Canada",
  },
  {
    quote:
      "The research and prep that used to eat up my filming weeks is done before I sit down. I started with one agent, and I keep commissioning more.",
    name: "Braden Langley",
    detail: "Langley Firearms, YouTube",
  },
];

export function Proof() {
  return (
    <section className="bg-cream-bright">
      <div className="mx-auto w-full max-w-content px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          Who we&rsquo;ve worked with
        </h2>

        <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          {WORKED_WITH.map((label) => (
            <li
              key={label}
              className="rounded-full border border-brand/25 bg-brand-tint px-4 py-1.5 text-sm font-bold text-brand-deep"
            >
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.detail} className="flex flex-col justify-between rounded-2xl border border-ink/10 bg-cream p-7 shadow-card">
              <blockquote className="leading-relaxed text-ink-soft">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/10 pt-4">
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-ink-faint">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <CtaBand proof="The demo call is the proof: hear exactly what your customers would hear, in the next 60 seconds." />
      </div>
    </section>
  );
}
