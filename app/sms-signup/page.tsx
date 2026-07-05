import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmsSignupForm } from "./sms-signup-form";

export const metadata: Metadata = {
  title: "Text Notifications Signup — Mayday AI",
  robots: { index: false },
};

export default function SmsSignup() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-2xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            Get text notifications from your AI assistant
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Sign up to receive reminders, notes, and confirmations by text from your Mayday AI
            assistant.
          </p>
        </div>
        <SmsSignupForm />
      </main>
      <SiteFooter />
    </>
  );
}
