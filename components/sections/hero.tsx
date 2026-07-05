import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/config";
import { LeadCtaButton } from "../lead-modal";
import { RotatingIndustry } from "../rotating-word";
import { PhoneIcon } from "../site-header";

const INDUSTRY_BADGES = ["Plumbing", "HVAC", "Dental", "Med Spa", "Legal", "Landscaping"];

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-content px-5 pb-16 pt-10 text-center sm:px-8 sm:pt-16 lg:pb-24">
      <p className="mx-auto mb-5 inline-block rounded-full border border-brand/25 bg-brand-tint px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-deep sm:text-sm">
        24/7 call answering for service businesses
      </p>

      <h1 className="mx-auto max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
        Your <RotatingIndustry />
        <br className="hidden sm:block" /> never misses a call again.
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
        Mayday answers in seconds — nights, weekends, mid-job. It qualifies the caller, books the
        appointment, and puts real emergencies straight through to you.{" "}
        <strong className="text-ink">Your team handles business hours. Mayday catches the rest.</strong>
      </p>

      <div id="hero-cta" className="mx-auto mt-9 flex max-w-md flex-col items-center gap-4">
        <LeadCtaButton className="btn-primary w-full text-xl sm:w-auto sm:px-10" />
        <a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex items-center gap-2 text-base font-semibold text-ink-soft underline decoration-brand/40 underline-offset-4 hover:text-brand"
        >
          <PhoneIcon />
          Or call us now — our AI answers: {PHONE_DISPLAY}
        </a>
      </div>

      <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-ink-faint">
        The button is the demo: submit three fields and our AI calls you back in about 60 seconds.
        That call is exactly what your customers would hear.
      </p>

      <div className="mx-auto mt-12 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-ink-faint">Built for</p>
        <ul className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {INDUSTRY_BADGES.map((label) => (
            <li
              key={label}
              className="rounded-full border border-ink/10 bg-cream-bright px-4 py-1.5 text-sm font-semibold text-ink-soft"
            >
              {label}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-ink-faint">
          Backed by a <a href="#guarantee" className="font-semibold text-brand-deep underline decoration-brand/40 underline-offset-4 hover:text-brand">100% performance guarantee</a> — if it doesn&rsquo;t capture every after-hours lead, you don&rsquo;t pay.
        </p>
      </div>
    </section>
  );
}
