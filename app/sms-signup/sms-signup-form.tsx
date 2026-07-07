"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/config";

const GENERIC_ERROR = `Something went wrong. Please try again or email ${CONTACT_EMAIL}.`;

function validPhone(val: string) {
  const digits = val.replace(/\D/g, "");
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
}

const validEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

export function SmsSignupForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");
    const data = new FormData(e.currentTarget);
    const payload = {
      full_name: String(data.get("full_name") ?? "").trim(),
      business_name: String(data.get("business_name") ?? "").trim(),
      phone_number: String(data.get("phone_number") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      city_state: String(data.get("city_state") ?? "").trim(),
      consent: data.get("sms_consent") === "on",
    };

    const newErrors: Record<string, string> = {};
    if (!validPhone(payload.phone_number)) newErrors.phone = "Please enter a valid US phone number.";
    if (!validEmail(payload.email)) newErrors.email = "Please enter a valid email address.";
    if (!payload.consent) newErrors.consent = "You must check the SMS consent box to subscribe.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/sms-consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || body.error) {
        setFormError(body.error ?? GENERIC_ERROR);
      } else {
        setSubmitted(true);
      }
    } catch {
      setFormError(GENERIC_ERROR);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="py-12 text-center" aria-live="polite">
        <h2 className="font-display text-3xl font-extrabold">You&rsquo;re subscribed.</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft">
          Check your email for a confirmation. You&rsquo;ll start receiving text notifications from
          your Mayday AI assistant as soon as your account is active. Reply STOP at any time to opt
          out.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-ink/10 bg-cream-bright p-6 shadow-card sm:p-8"
    >
      <Field id="full_name" label="Full Name" autoComplete="name" />
      <Field id="business_name" label="Business Name" autoComplete="organization" />
      <Field
        id="phone_number"
        label="Mobile Phone Number"
        type="tel"
        autoComplete="tel"
        error={errors.phone}
        placeholder="(919) 555-1234"
      />
      <Field id="email" label="Email" type="email" autoComplete="email" error={errors.email} />
      <Field
        id="city_state"
        label="City and State"
        autoComplete="address-level2"
        placeholder="Cary, NC"
      />

      <div className="pt-2">
        <label htmlFor="sms_consent" className="flex cursor-pointer items-start gap-3">
          <input
            id="sms_consent"
            name="sms_consent"
            type="checkbox"
            className="mt-1 h-6 w-6 min-h-[24px] min-w-[24px] cursor-pointer rounded accent-brand"
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span className="text-sm leading-relaxed text-ink-soft">
            By checking this box, I authorize Mayday AI to send me text messages to the mobile
            number provided in connection with the AI assistant service I have engaged Mayday AI to
            provide. Messages may include reminders, notes, confirmations, and operational
            notifications from my AI assistant. Message frequency varies. Message and data rates
            may apply. Consent is not a condition of engaging any Mayday AI service. I may opt out
            at any time by replying STOP to opt out, HELP for help. View our{" "}
            <a href="/privacy" className="font-semibold text-brand underline underline-offset-2">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="font-semibold text-brand underline underline-offset-2">
              Terms of Service
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" role="alert" className="mt-2 text-sm font-medium text-brand-deep">
            {errors.consent}
          </p>
        )}
      </div>

      <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
        {submitting ? "Subscribing…" : "Subscribe to text notifications"}
      </button>

      <p className="text-center text-xs text-ink-faint">
        Your phone number will only be used to send notifications you&rsquo;ve requested. We never
        sell or share it.
      </p>

      {formError && (
        <p role="alert" className="text-center text-sm font-medium text-brand-deep">
          {formError}
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  autoComplete,
  error,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label} <span aria-hidden="true" className="text-brand">*</span>
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-xl border-2 border-ink/15 bg-cream-bright px-4 py-3 text-base placeholder:text-ink-faint focus:border-brand"
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-sm font-medium text-brand-deep">
          {error}
        </p>
      )}
    </div>
  );
}
