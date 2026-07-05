import { z } from "zod";

/** Normalize a US phone number to E.164, or null if it isn't one. */
export function normalizePhoneUS(input: string): string | null {
  const digits = (input || "").replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return null;
}

const usPhone = z
  .string()
  .trim()
  .max(30)
  .transform((val, ctx) => {
    const normalized = normalizePhoneUS(val);
    if (!normalized) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Enter a valid US phone number." });
      return z.NEVER;
    }
    return normalized;
  });

const shortText = z.string().trim().min(1).max(120);

/** Payload for the landing page callback form. */
export const leadSchema = z.object({
  name: shortText,
  business: shortText,
  phone: usPhone,
});

export type Lead = z.infer<typeof leadSchema>;

/** Payload for the SMS consent (A2P compliance) form. */
export const smsConsentSchema = z.object({
  full_name: shortText,
  business_name: shortText,
  phone_number: usPhone,
  email: z.string().trim().email().max(254),
  city_state: shortText,
  consent: z.literal(true),
});

export type SmsConsent = z.infer<typeof smsConsentSchema>;
