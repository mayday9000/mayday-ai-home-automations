import { describe, it, expect } from "vitest";
import { INDUSTRY_PRESETS, WEEKS_PER_MONTH, computeMonthlyRecovered, formatUsd } from "./roi";

describe("computeMonthlyRecovered", () => {
  it("multiplies ticket × missed calls/week × weeks/month × capture rate", () => {
    // 400 × 10 × 4.3 × 0.25 = 4300
    expect(computeMonthlyRecovered({ avgTicket: 400, missedCallsPerWeek: 10, captureRate: 0.25 })).toBe(4300);
  });

  it("rounds to the nearest dollar", () => {
    const result = computeMonthlyRecovered({ avgTicket: 333, missedCallsPerWeek: 7, captureRate: 0.25 });
    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBe(Math.round(333 * 7 * WEEKS_PER_MONTH * 0.25));
  });

  it("clamps negative or NaN inputs to zero", () => {
    expect(computeMonthlyRecovered({ avgTicket: -100, missedCallsPerWeek: 10, captureRate: 0.25 })).toBe(0);
    expect(computeMonthlyRecovered({ avgTicket: NaN, missedCallsPerWeek: 10, captureRate: 0.25 })).toBe(0);
    expect(computeMonthlyRecovered({ avgTicket: 400, missedCallsPerWeek: -5, captureRate: 0.25 })).toBe(0);
  });

  it("caps capture rate at 1", () => {
    expect(computeMonthlyRecovered({ avgTicket: 100, missedCallsPerWeek: 10, captureRate: 5 })).toBe(
      computeMonthlyRecovered({ avgTicket: 100, missedCallsPerWeek: 10, captureRate: 1 }),
    );
  });
});

describe("INDUSTRY_PRESETS", () => {
  it("covers the industries featured on the page", () => {
    const keys = INDUSTRY_PRESETS.map((p) => p.key);
    for (const k of ["plumbing", "hvac", "dental", "medspa", "legal", "landscaping"]) {
      expect(keys).toContain(k);
    }
  });

  it("uses conservative capture rates (≤ 40%)", () => {
    for (const p of INDUSTRY_PRESETS) {
      expect(p.captureRate).toBeGreaterThan(0);
      expect(p.captureRate).toBeLessThanOrEqual(0.4);
    }
  });

  it("has sane positive defaults", () => {
    for (const p of INDUSTRY_PRESETS) {
      expect(p.avgTicket).toBeGreaterThan(0);
      expect(p.missedCallsPerWeek).toBeGreaterThan(0);
      expect(p.label.length).toBeGreaterThan(0);
    }
  });
});

describe("formatUsd", () => {
  it("formats whole dollars with separators and no cents", () => {
    expect(formatUsd(4300)).toBe("$4,300");
    expect(formatUsd(0)).toBe("$0");
  });
});
