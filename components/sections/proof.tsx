import { CtaBand } from "../cta-band";

const WORKED_WITH = [
  "Home Services",
  "Dental & Ortho",
  "Med Spas",
  "Law Firms",
  "Real Estate",
  "Creators & Media",
];

/*
 * PLACEHOLDER SLOTS — replace quote/name/detail with real client testimonials.
 * Bracketed text renders as an obvious to-fill slot, not fake social proof.
 */
const TESTIMONIAL_SLOTS = [
  {
    quote:
      "[Testimonial slot — e.g. how many after-hours calls Mayday answered in the first month, and what that meant in booked work.]",
    name: "[Client name]",
    detail: "Owner — home services company",
  },
  {
    quote:
      "[Testimonial slot — e.g. front-desk experience: what changed during lunch rushes and double-ring moments.]",
    name: "[Client name]",
    detail: "Practice manager — dental / med spa",
  },
  {
    quote:
      "[Testimonial slot — e.g. intake result: consultations booked from calls that used to hit voicemail.]",
    name: "[Client name]",
    detail: "Partner — professional services firm",
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
          {TESTIMONIAL_SLOTS.map((slot) => (
            <figure key={slot.detail} className="flex flex-col justify-between rounded-2xl border border-ink/10 bg-cream p-7 shadow-card">
              <blockquote className="leading-relaxed text-ink-soft">
                &ldquo;{slot.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/10 pt-4">
                <p className="font-bold">{slot.name}</p>
                <p className="text-sm text-ink-faint">{slot.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <CtaBand proof="The demo call is the proof — hear exactly what your customers would hear, in the next 60 seconds." />
      </div>
    </section>
  );
}
