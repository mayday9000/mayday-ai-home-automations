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
 * Rotates the industry phrase in the headline. All phrases are stacked in one
 * grid cell so the box is always as wide as the longest phrase — rotation
 * never causes layout shift. Screen readers get a stable generic phrase, and
 * the rotation pauses for prefers-reduced-motion users.
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

  return (
    <>
      <span className="sr-only">business</span>
      <span aria-hidden="true" className="inline-grid justify-items-center align-baseline">
        {INDUSTRIES.map((phrase, i) => (
          <span
            key={phrase}
            className={`col-start-1 row-start-1 whitespace-nowrap text-brand transition-transform duration-200 ease-out ${
              i === index ? "visible translate-y-0" : "invisible translate-y-2"
            }`}
          >
            {phrase}
          </span>
        ))}
      </span>
    </>
  );
}
