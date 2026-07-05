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
 * Rotates the industry phrase in the headline. Screen readers get a stable
 * generic phrase; the rotation is purely visual and pauses for
 * prefers-reduced-motion users.
 */
export function RotatingIndustry() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % INDUSTRIES.length);
        setVisible(true);
      }, 220);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span className="sr-only">business</span>
      <span
        aria-hidden="true"
        className={`inline-block text-brand transition-all duration-200 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        {INDUSTRIES[index]}
      </span>
    </>
  );
}
