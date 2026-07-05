"use client";

import { useMemo, useState } from "react";
import {
  INDUSTRY_PRESETS,
  WEEKS_PER_MONTH,
  computeMonthlyRecovered,
  formatUsd,
} from "@/lib/roi";
import { LeadCtaButton } from "../lead-modal";

export function RoiCalculator() {
  const [presetKey, setPresetKey] = useState(INDUSTRY_PRESETS[0].key);
  const preset = INDUSTRY_PRESETS.find((p) => p.key === presetKey) ?? INDUSTRY_PRESETS[0];

  const [avgTicket, setAvgTicket] = useState<number>(preset.avgTicket);
  const [missedPerWeek, setMissedPerWeek] = useState<number>(preset.missedCallsPerWeek);

  function applyPreset(key: string) {
    const next = INDUSTRY_PRESETS.find((p) => p.key === key);
    if (!next) return;
    setPresetKey(key);
    setAvgTicket(next.avgTicket);
    setMissedPerWeek(next.missedCallsPerWeek);
  }

  const monthly = useMemo(
    () =>
      computeMonthlyRecovered({
        avgTicket,
        missedCallsPerWeek: missedPerWeek,
        captureRate: preset.captureRate,
      }),
    [avgTicket, missedPerWeek, preset.captureRate],
  );

  const weekly = Math.round(monthly / WEEKS_PER_MONTH);

  return (
    <section id="calculator" className="bg-brand-dark text-cream-bright">
      <div className="mx-auto w-full max-w-content px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          How much is your phone leaking right now?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-cream-bright">
          Your numbers, deliberately conservative math. We assume most missed calls were
          never going to book — and it still adds up fast.
        </p>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 rounded-3xl bg-cream-bright p-6 text-ink shadow-2xl sm:p-10 md:grid-cols-2 md:gap-10">
          <div className="space-y-7">
            <div>
              <label htmlFor="roi-industry" className="mb-1.5 block text-sm font-bold">
                Your industry
              </label>
              <select
                id="roi-industry"
                value={presetKey}
                onChange={(e) => applyPreset(e.target.value)}
                className="w-full rounded-xl border-2 border-ink/15 bg-cream-bright px-4 py-3 text-base font-medium"
              >
                {INDUSTRY_PRESETS.map((p) => (
                  <option key={p.key} value={p.key}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="roi-ticket" className="mb-1.5 block text-sm font-bold">
                Average job / appointment value
              </label>
              <div className="relative">
                <span aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-ink-faint">
                  $
                </span>
                <input
                  id="roi-ticket"
                  type="number"
                  min={0}
                  max={100000}
                  inputMode="numeric"
                  value={Number.isFinite(avgTicket) ? avgTicket : ""}
                  onChange={(e) => setAvgTicket(e.target.value === "" ? NaN : Number(e.target.value))}
                  className="w-full rounded-xl border-2 border-ink/15 bg-cream-bright py-3 pl-8 pr-4 text-base font-medium"
                />
              </div>
            </div>

            <div>
              <label htmlFor="roi-missed" className="mb-1.5 block text-sm font-bold">
                Calls you miss per week{" "}
                <span className="font-display text-lg font-extrabold text-brand-deep">{missedPerWeek}</span>
              </label>
              <input
                id="roi-missed"
                type="range"
                min={1}
                max={30}
                step={1}
                value={missedPerWeek}
                onChange={(e) => setMissedPerWeek(Number(e.target.value))}
                className="w-full accent-brand"
              />
              <p className="mt-1 flex justify-between text-xs text-ink-faint">
                <span>1</span>
                <span>30</span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-ink-faint">
                Count nights, weekends, lunch, and every time you were mid-job. Most owners
                guess low.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-ink p-6 text-cream sm:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-cream/60">
                Recovered revenue, conservatively
              </p>
              <p aria-live="polite" className="mt-3 font-display text-5xl font-extrabold tracking-tight text-cream-bright sm:text-6xl">
                {formatUsd(monthly)}
                <span className="text-xl font-bold text-cream/60"> /mo</span>
              </p>
              <p className="mt-2 text-lg font-semibold text-cream/80">
                ≈ {formatUsd(monthly * 12)} a year
              </p>
              <p className="mt-5 border-t border-cream/15 pt-5 text-sm leading-relaxed text-cream/70">
                Every week you wait costs about{" "}
                <strong className="text-cream-bright">{formatUsd(weekly)}</strong> in calls that
                booked somewhere else.
              </p>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-cream/50">
              Assumes only {Math.round(preset.captureRate * 100)}% of missed calls would have
              become paying customers at your average value — on purpose. The real number is
              often higher.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 text-center">
          <LeadCtaButton className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-7 py-4 text-lg font-bold text-cream-bright transition-colors hover:bg-ink/85" />
          <p className="text-sm text-cream-bright">
            Two to three recovered jobs a month typically pays for the system several times over.
          </p>
        </div>
      </div>
    </section>
  );
}
