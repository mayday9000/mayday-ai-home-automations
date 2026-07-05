import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { UnsubscribeFlow } from "./unsubscribe-flow";

export const metadata: Metadata = {
  title: "Unsubscribe — Mayday AI",
  robots: { index: false },
};

export default function Unsubscribe() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <Suspense fallback={<p className="text-ink-faint">Checking your unsubscribe link…</p>}>
          <UnsubscribeFlow />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
