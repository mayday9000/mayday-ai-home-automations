"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CONTACT_EMAIL } from "@/lib/config";

type State =
  | { kind: "validating" }
  | { kind: "valid" }
  | { kind: "already" }
  | { kind: "invalid" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function UnsubscribeFlow() {
  const params = useSearchParams();
  const token = params.get("token") ?? "";
  const [state, setState] = useState<State>({ kind: "validating" });

  useEffect(() => {
    if (!token) {
      setState({ kind: "invalid" });
      return;
    }
    fetch(`/api/unsubscribe?token=${encodeURIComponent(token)}`)
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (r.ok && data.valid) setState({ kind: "valid" });
        else if (data.reason === "already_unsubscribed") setState({ kind: "already" });
        else setState({ kind: "invalid" });
      })
      .catch(() => setState({ kind: "invalid" }));
  }, [token]);

  async function confirm() {
    setState({ kind: "submitting" });
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json().catch(() => ({}));
      if (data.success || data.reason === "already_unsubscribed") {
        setState({ kind: "success" });
      } else {
        setState({ kind: "error", message: "Unable to process unsubscribe." });
      }
    } catch {
      setState({ kind: "error", message: "Something went wrong. Please try again." });
    }
  }

  switch (state.kind) {
    case "validating":
      return <p className="text-ink-faint">Checking your unsubscribe link…</p>;
    case "submitting":
      return <p className="text-ink-faint">Processing…</p>;
    case "valid":
      return (
        <>
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl">
            Unsubscribe from Mayday AI emails
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Click below to confirm and stop receiving emails from Mayday AI.
          </p>
          <button type="button" onClick={confirm} className="btn-primary mt-8">
            Confirm unsubscribe
          </button>
        </>
      );
    case "success":
      return (
        <>
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl">You&rsquo;re unsubscribed</h1>
          <p className="mt-4 text-lg text-ink-soft">
            You won&rsquo;t receive further emails from Mayday AI at this address.
          </p>
        </>
      );
    case "already":
      return (
        <>
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl">Already unsubscribed</h1>
          <p className="mt-4 text-lg text-ink-soft">
            This email address is already opted out of Mayday AI emails.
          </p>
        </>
      );
    case "invalid":
      return (
        <>
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl">Invalid or expired link</h1>
          <p className="mt-4 text-lg text-ink-soft">
            This unsubscribe link is no longer valid. If you keep receiving emails, contact{" "}
            {CONTACT_EMAIL}.
          </p>
        </>
      );
    case "error":
      return (
        <p role="alert" className="font-medium text-brand-deep">
          {state.message}
        </p>
      );
  }
}
