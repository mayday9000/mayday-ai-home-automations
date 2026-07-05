import { CtaBand } from "../cta-band";

/* Objection handling: agree → reframe → cap the downside → cite the guarantee. */
const FAQS = [
  {
    q: "We don't want a robot answering our phones.",
    a: "Neither do we — nobody wants a “press 1” phone tree. But the honest comparison isn't the AI versus your best person; it's the AI versus voicemail, because voicemail is who answers when you can't. Mayday sounds natural, holds a real conversation, and hands off to a human the moment one is needed. You'll hear it before your customers ever do — the demo call on this page is the exact experience.",
  },
  {
    q: "We already have an answering service.",
    a: "Good — that means you already agree missed calls cost money. But an answering service takes a message, and the lead still sits in a callback pile while they keep calling your competitors. Mayday answers instantly at 2am on a Sunday, answers real questions about your business, and books the appointment on the spot instead of adding to tomorrow morning's list.",
  },
  {
    q: "What if it messes up a customer call?",
    a: "The downside is capped. True emergencies route straight to a human, and every call is recorded and transcribed, so you see exactly what was said and we tune it until it handles calls the way you would. Compare that to today's worst case: the phone rings out and you never even learn who you lost. With Mayday, even an imperfect call still captures the lead's name and number.",
  },
  {
    q: "Is it worth the monthly cost?",
    a: "Run your own numbers in the calculator above. At a deliberately conservative capture rate, two to three recovered jobs or appointments a month typically pays for the system several times over — everything past that is margin. And the guarantee caps the risk: if it doesn't capture every after-hours lead from day one, you don't pay the monthly until it does.",
  },
];

export function Faq() {
  return (
    <section className="mx-auto w-full max-w-content px-5 py-16 sm:px-8 sm:py-24">
      <h2 className="text-center font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
        Fair questions
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-lg text-ink-soft">
        The four things every owner asks before the demo call convinces them.
      </p>

      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        {FAQS.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-ink/10 bg-cream-bright shadow-card open:border-brand/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-lg font-bold marker:content-none [&::-webkit-details-marker]:hidden">
              {item.q}
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand-deep transition-transform group-open:rotate-45"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <p className="px-6 pb-6 leading-relaxed text-ink-soft">{item.a}</p>
          </details>
        ))}
      </div>

      <CtaBand proof="Still unsure? The demo call takes 60 seconds and costs nothing." />
    </section>
  );
}
