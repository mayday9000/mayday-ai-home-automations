"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { PRIMARY_CTA_LABEL } from "@/lib/config";

const LeadModalContext = createContext<{ open: () => void }>({ open: () => {} });

export function useLeadModal() {
  return useContext(LeadModalContext);
}

/** Primary CTA button. Every instance opens the same shared modal. */
export function LeadCtaButton({ className = "btn-primary" }: { className?: string }) {
  const { open } = useLeadModal();
  return (
    <button type="button" onClick={open} className={className}>
      {PRIMARY_CTA_LABEL}
    </button>
  );
}

export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const open = useCallback(() => {
    setError("");
    dialogRef.current?.showModal();
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // Close when clicking the backdrop (the dialog element itself).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClick = (e: MouseEvent) => {
      if (e.target === dialog) dialog.close();
    };
    dialog.addEventListener("click", onClick);
    return () => dialog.removeEventListener("click", onClick);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      business: String(data.get("business") ?? ""),
      phone: String(data.get("phone") ?? ""),
      company_site: String(data.get("company_site") ?? ""),
    };

    const digits = payload.phone.replace(/\D/g, "");
    if (!(digits.length === 10 || (digits.length === 11 && digits.startsWith("1")))) {
      setError("That phone number doesn't look right. Double-check it so our AI can reach you.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setError(body.error ?? "Something went wrong. Please try again, or just call us.");
        setSubmitting(false);
        return;
      }
      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again, or just call us.");
      setSubmitting(false);
    }
  }

  return (
    <LeadModalContext.Provider value={{ open }}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="lead-modal-title"
        className="m-auto w-[calc(100vw-2rem)] max-w-md rounded-2xl bg-cream-bright p-0 text-ink shadow-2xl backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h2 id="lead-modal-title" className="font-display text-2xl font-bold leading-tight">
              Get a call from our AI in 60 seconds
            </h2>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="-mr-2 -mt-2 rounded-lg p-2 text-ink-soft hover:bg-cream-dim hover:text-ink"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-sm text-ink-soft">
            This is the demo. The AI that calls you is the same one that would answer your
            customers' calls.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Honeypot: hidden from humans; bots that fill it are dropped server-side. */}
            <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
              <label htmlFor="lead-company-site">Company website</label>
              <input
                id="lead-company-site"
                name="company_site"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="lead-name" className="mb-1.5 block text-sm font-semibold">
                Your name
              </label>
              <input
                id="lead-name"
                name="name"
                type="text"
                required
                maxLength={120}
                autoComplete="name"
                className="w-full rounded-xl border-2 border-ink/15 bg-cream-bright px-4 py-3 text-base focus:border-brand"
              />
            </div>
            <div>
              <label htmlFor="lead-business" className="mb-1.5 block text-sm font-semibold">
                Business name
              </label>
              <input
                id="lead-business"
                name="business"
                type="text"
                required
                maxLength={120}
                autoComplete="organization"
                className="w-full rounded-xl border-2 border-ink/15 bg-cream-bright px-4 py-3 text-base focus:border-brand"
              />
            </div>
            <div>
              <label htmlFor="lead-phone" className="mb-1.5 block text-sm font-semibold">
                Mobile number
              </label>
              <input
                id="lead-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                className="w-full rounded-xl border-2 border-ink/15 bg-cream-bright px-4 py-3 text-base placeholder:text-ink-faint/50 focus:border-brand"
                placeholder="(984) 555-0142"
              />
            </div>

            {error && (
              <p role="alert" className="text-sm font-medium text-brand-deep">
                {error}
              </p>
            )}

            <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
              {submitting ? "Connecting…" : "Call me now"}
            </button>
            <p className="text-center text-xs text-ink-faint">
              One call, no spam. We only use your number for this callback.
            </p>
          </form>
        </div>
      </dialog>
    </LeadModalContext.Provider>
  );
}
