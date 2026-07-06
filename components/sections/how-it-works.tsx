import { CtaBand } from "../cta-band";

const STEPS = [
  {
    number: "1",
    title: "We build it around your business",
    body: "Your services, your service area, your booking rules, your calendar. Your phone number and your team's workflow don't change. Mayday just catches what they can't.",
  },
  {
    number: "2",
    title: "It answers everything you can't",
    body: "Every call picked up in seconds, 24/7. It answers real questions, qualifies the caller, books straight into your calendar, and routes true emergencies to a human immediately.",
  },
  {
    number: "3",
    title: "You see every job it saves",
    body: "Every call is logged, recorded, and transcribed. You watch recovered appointments land on your calendar and know exactly what was said on every call.",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto w-full max-w-content px-5 py-16 sm:px-8 sm:py-24">
      <h2 className="text-center font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
        How it works
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-lg text-ink-soft">
        No new phone number. No staff replaced. No workflow changes.
      </p>

      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {STEPS.map((step) => (
          <li key={step.number} className="rounded-2xl border border-ink/10 bg-cream-bright p-7 shadow-card">
            <span
              aria-hidden="true"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand font-display text-xl font-extrabold text-cream-bright"
            >
              {step.number}
            </span>
            <h3 className="mt-5 font-display text-xl font-bold">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{step.body}</p>
          </li>
        ))}
      </ol>

      <CtaBand proof="Website chat and an “Open 24 Hours” Google Business Profile are included in the build." />
    </section>
  );
}
