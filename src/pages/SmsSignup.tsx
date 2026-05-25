import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

export const CONSENT_TEXT_PLAIN =
  "By checking this box, I authorize Mayday AI to send me text messages to the mobile number provided in connection with the AI assistant service I have engaged Mayday AI to provide. Messages may include reminders, notes, confirmations, and operational notifications from my AI assistant. Message frequency varies. Message and data rates may apply. Consent is not a condition of engaging any Mayday AI service. I may opt out at any time by replying STOP to opt out, HELP for help. View our Privacy Policy and Terms of Service.";

const validatePhone = (val: string) => {
  const digits = val.replace(/\D/g, "");
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
};

const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

const SmsSignup = () => {
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cityState, setCityState] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");

  const allFilled = fullName && businessName && phone && email && cityState;
  const canSubmit = useMemo(
    () => Boolean(allFilled) && consent && !submitting,
    [allFilled, consent, submitting],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    const newErrors: Record<string, string> = {};
    if (!validatePhone(phone)) newErrors.phone = "Please enter a valid US phone number.";
    if (!validateEmail(email)) newErrors.email = "Please enter a valid email address.";
    if (!consent) newErrors.consent = "You must check the SMS consent box to subscribe.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-sms-consent", {
        body: {
          full_name: fullName,
          business_name: businessName,
          phone_number: phone,
          email,
          city_state: cityState,
          consent: true,
        },
      });
      if (error || (data && (data as { error?: string }).error)) {
        setFormError(
          "Something went wrong. Please try again or email masondavisai@gmail.com.",
        );
      } else {
        setSubmitted(true);
      }
    } catch {
      setFormError(
        "Something went wrong. Please try again or email masondavisai@gmail.com.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container max-w-2xl mx-auto px-4 sm:px-6">
          {submitted ? (
            <div className="text-center py-12" aria-live="polite">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                You're subscribed.
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Check your email for a confirmation. You'll start receiving text
                notifications from your Mayday AI assistant as soon as your
                account is active. Reply STOP at any time to opt out.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                  Get text notifications from your AI assistant
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Sign up to receive reminders, notes, and confirmations by text
                  from your Mayday AI assistant.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5 bg-card p-6 sm:p-8 rounded-2xl shadow-card">
                <Field
                  id="full_name"
                  label="Full Name"
                  value={fullName}
                  onChange={setFullName}
                  required
                  autoComplete="name"
                />
                <Field
                  id="business_name"
                  label="Business Name"
                  value={businessName}
                  onChange={setBusinessName}
                  required
                  autoComplete="organization"
                />
                <Field
                  id="phone_number"
                  label="Mobile Phone Number"
                  type="tel"
                  value={phone}
                  onChange={setPhone}
                  required
                  autoComplete="tel"
                  error={errors.phone}
                  placeholder="(919) 555-1234"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  required
                  autoComplete="email"
                  error={errors.email}
                />
                <Field
                  id="city_state"
                  label="City and State"
                  value={cityState}
                  onChange={setCityState}
                  required
                  autoComplete="address-level2"
                  placeholder="Cary, NC"
                />

                <div className="pt-2">
                  <label
                    htmlFor="sms_consent"
                    className="flex items-start gap-3 cursor-pointer group"
                  >
                    <input
                      id="sms_consent"
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-6 w-6 min-w-[24px] min-h-[24px] accent-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                      aria-describedby={errors.consent ? "consent-error" : undefined}
                    />
                    <span className="text-sm text-foreground/90 leading-relaxed">
                      By checking this box, I authorize Mayday AI to send me text messages to the mobile number provided in connection with the AI assistant service I have engaged Mayday AI to provide. Messages may include reminders, notes, confirmations, and operational notifications from my AI assistant. Message frequency varies. Message and data rates may apply. Consent is not a condition of engaging any Mayday AI service. I may opt out at any time by replying STOP to opt out, HELP for help. View our{" "}
                      <Link to="/privacy" className="underline text-primary hover:text-primary-dark">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link to="/terms" className="underline text-primary hover:text-primary-dark">
                        Terms of Service
                      </Link>
                      .
                    </span>
                  </label>
                  {errors.consent && (
                    <p
                      id="consent-error"
                      role="alert"
                      aria-live="polite"
                      className="text-sm text-destructive mt-2"
                    >
                      {errors.consent}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full bg-gradient-primary text-white hover:shadow-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                >
                  {submitting ? "Subscribing..." : "Subscribe to text notifications"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your phone number will only be used to send notifications you've requested. We never sell or share it.
                </p>

                {formError && (
                  <p role="alert" aria-live="assertive" className="text-sm text-destructive text-center">
                    {formError}
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
  placeholder?: string;
}

const Field = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
  error,
  placeholder,
}: FieldProps) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-foreground mb-1.5">
      {label} {required && <span className="text-destructive">*</span>}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      autoComplete={autoComplete}
      placeholder={placeholder}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${id}-error` : undefined}
      className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition"
    />
    {error && (
      <p id={`${id}-error`} role="alert" aria-live="polite" className="text-sm text-destructive mt-1">
        {error}
      </p>
    )}
  </div>
);

export default SmsSignup;
