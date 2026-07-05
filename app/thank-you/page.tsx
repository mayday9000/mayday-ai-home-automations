import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Keep your phone nearby — Mayday AI",
  robots: { index: false },
};

// TODO: replace with the real scheduling link (Calendly/Cal.com) when ready.
const CALENDAR_FALLBACK_URL = "#";

export default function ThankYou() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-content px-5 py-16 text-center sm:px-8 sm:py-24">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-tint px-4 py-1.5 text-sm font-bold text-brand-deep">
          <span aria-hidden="true" className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
          </span>
          Your callback is queued
        </p>

        <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Keep your phone nearby — you&rsquo;re getting a call in the next{" "}
          <span className="text-brand">60 seconds.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          The voice on that call is our AI receptionist — the same one that would answer your
          customers. Ask it anything you&rsquo;d expect a caller to ask you: pricing, availability,
          booking. Try to stump it.
        </p>

        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-ink/10 bg-cream-bright p-6 text-left shadow-card">
          <h2 className="font-display text-lg font-bold">While you wait</h2>
          <ul className="mt-3 space-y-2 text-ink-soft">
            <li>· Unknown number? That&rsquo;s us — pick up.</li>
            <li>· Notice how fast it answers. Your callers get the same.</li>
            <li>· Think of your hardest customer question and ask it.</li>
          </ul>
        </div>

        <p className="mx-auto mt-10 max-w-md text-ink-soft">
          Call didn&rsquo;t come through, or want to talk to a human instead?{" "}
          <a href={`tel:${PHONE_TEL}`} className="font-semibold text-brand underline underline-offset-4">
            Call us at {PHONE_DISPLAY}
          </a>{" "}
          or{" "}
          <a href={CALENDAR_FALLBACK_URL} className="font-semibold text-brand underline underline-offset-4">
            grab a time on the calendar
          </a>
          .
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
