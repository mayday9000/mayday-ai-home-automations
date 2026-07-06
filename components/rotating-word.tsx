"use client";

import { useEffect, useState } from "react";

const INDUSTRIES = [
  "plumbing company",
  "dental office",
  "med spa",
  "law firm",
  "HVAC company",
  "landscaping crew",
];

/**
 * Rotating "Your {industry}" headline lead. All variants are stacked in one
 * grid cell so rotation never causes layout shift, and the animation is
 * transform-only so text is never rendered at partial opacity.
 *
 * Desktop: each variant is a full line ("Your plumbing company") centered
 * independently, so the headline is always optically centered. Mobile: the
 * phrase box flows inline with the rest of the headline.
 *
 * Screen readers get a stable generic phrase; rotation pauses for
 * prefers-reduced-motion users.
 */
export function RotatingIndustry() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % INDUSTRIES.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const itemClass = (active: boolean) =>
    `col-start-1 row-start-1 whitespace-nowrap transition-transform duration-200 ease-out ${
      active ? "visible translate-y-0" : "invisible translate-y-2"
    }`;

  return (
    <>
      <span className="sr-only">Your business</span>

      {/* Mobile: inline phrase box */}
      <span aria-hidden="true" className="sm:hidden">
        Your{" "}
        <span className="inline-grid justify-items-center align-baseline">
          {INDUSTRIES.map((phrase, i) => (
            <span key={phrase} className={`${itemClass(i === index)} text-brand`}>
              {phrase}
            </span>
          ))}
        </span>
      </span>

      {/* Desktop: full centered line per variant */}
      <span aria-hidden="true" className="hidden sm:grid justify-items-center">
        {INDUSTRIES.map((phrase, i) => (
          <span key={phrase} className={itemClass(i === index)}>
            Your <span className="text-brand">{phrase}</span>
          </span>
        ))}
      </span>
    </>
  );
}
