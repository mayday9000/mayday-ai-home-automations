import { CtaBand } from "../cta-band";

const LEAK_MOMENTS = [
  {
    title: "After 5pm & weekends",
    body: "The burst pipe at 9pm. The toothache on a Sunday. Emergencies don't check your business hours — they go to whoever answers first.",
  },
  {
    title: "While you're with a customer",
    body: "You're mid-job or mid-appointment, the phone rings out, and by the time you call back they've already booked with someone who picked up.",
  },
  {
    title: "Lunch rush & short-staffed days",
    body: "The front desk steps out, two lines ring at once, and the call that slips through was the biggest job of the month.",
  },
];

export function Problem() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto w-full max-w-content px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Every missed call is a customer
          <span className="text-brand"> calling your competitor.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed text-cream/75">
          Nobody leaves voicemails anymore. When your phone goes unanswered, most callers simply
          dial the next name on the list — and book there instead.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {LEAK_MOMENTS.map((moment) => (
            <div key={moment.title} className="rounded-2xl border border-cream/10 bg-cream/5 p-6">
              <h3 className="font-display text-xl font-bold text-cream-bright">{moment.title}</h3>
              <p className="mt-3 leading-relaxed text-cream/70">{moment.body}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-lg leading-relaxed text-cream/85">
          You already paid to make that phone ring — the ads, the reviews, the referrals.
          <strong className="text-cream-bright"> Missing the call means paying for the lead twice:
          once to get it, once to lose it.</strong>
        </p>

        <CtaBand
          tone="dark"
          proof="Mayday picks up in seconds, 24/7 — before the caller gives up and dials the next name."
        />
      </div>
    </section>
  );
}
