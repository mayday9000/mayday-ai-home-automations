export const WEEKS_PER_MONTH = 4.3;

export interface IndustryPreset {
  key: string;
  label: string;
  avgTicket: number;
  missedCallsPerWeek: number;
  /** Share of missed calls conservatively assumed to become booked, paying work. */
  captureRate: number;
}

/**
 * Conservative defaults. avgTicket is a low-end estimate of first-visit /
 * first-job value for each industry; captureRate assumes most missed calls
 * do NOT turn into jobs.
 */
export const INDUSTRY_PRESETS: IndustryPreset[] = [
  { key: "plumbing", label: "Plumbing", avgTicket: 400, missedCallsPerWeek: 8, captureRate: 0.25 },
  { key: "hvac", label: "HVAC", avgTicket: 550, missedCallsPerWeek: 8, captureRate: 0.25 },
  { key: "dental", label: "Dental / Ortho", avgTicket: 700, missedCallsPerWeek: 6, captureRate: 0.2 },
  { key: "medspa", label: "Med Spa", avgTicket: 350, missedCallsPerWeek: 6, captureRate: 0.25 },
  { key: "legal", label: "Law Firm", avgTicket: 1500, missedCallsPerWeek: 5, captureRate: 0.15 },
  { key: "landscaping", label: "Landscaping / Exterior", avgTicket: 300, missedCallsPerWeek: 7, captureRate: 0.25 },
  { key: "other", label: "Other Service Business", avgTicket: 350, missedCallsPerWeek: 6, captureRate: 0.25 },
];

export interface RoiInput {
  avgTicket: number;
  missedCallsPerWeek: number;
  captureRate: number;
}

export function computeMonthlyRecovered({ avgTicket, missedCallsPerWeek, captureRate }: RoiInput): number {
  const ticket = Number.isFinite(avgTicket) ? Math.max(0, avgTicket) : 0;
  const missed = Number.isFinite(missedCallsPerWeek) ? Math.max(0, missedCallsPerWeek) : 0;
  const rate = Number.isFinite(captureRate) ? Math.min(1, Math.max(0, captureRate)) : 0;
  return Math.round(ticket * missed * WEEKS_PER_MONTH * rate);
}

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
