import { CtaBand } from "../cta-band";

export function Guarantee() {
  return (
    <section id="guarantee" className="bg-ink text-cream">
      <div className="mx-auto w-full max-w-content px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border-2 border-brand bg-ink p-8 text-center sm:p-12">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">
            100% performance guarantee
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-cream-bright sm:text-4xl">
            If it doesn&rsquo;t capture every after-hours lead from day one,
            <span className="text-brand"> you don&rsquo;t pay.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            Not a discount. Not a credit. Your monthly fee is simply on hold until the system does
            exactly what this page says it does: answer every after-hours call and capture every
            lead.
          </p>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-cream/60">
            We can only make this offer because missed-call recovery is measurable — you&rsquo;ll see
            every answered call and every captured lead in your log.
          </p>
        </div>

        <CtaBand
          tone="dark"
          proof="Your risk is capped at zero. The worst case is the system works and you keep it."
        />
      </div>
    </section>
  );
}
