"use client";

import { useEffect, useState } from "react";
import { PHONE_TEL } from "@/lib/config";
import { useLeadModal } from "./lead-modal";

/**
 * Mobile-only persistent bottom bar. Stays hidden while the hero's own CTAs
 * are on screen (watches the #hero-cta sentinel), then slides in.
 */
export function StickyCtaBar() {
  const { open } = useLeadModal();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("hero-cta");
    if (!sentinel) {
      setShow(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-cream-bright/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-bar backdrop-blur transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-3">
        <a
          href={`tel:${PHONE_TEL}`}
          tabIndex={show ? 0 : -1}
          className="flex flex-1 items-center justify-center rounded-xl border-2 border-brand px-4 py-3 text-base font-bold text-brand"
        >
          Call Now
        </a>
        <button
          type="button"
          onClick={open}
          tabIndex={show ? 0 : -1}
          className="flex-1 rounded-xl bg-brand px-4 py-3 text-base font-bold text-cream-bright shadow-cta"
        >
          Get a Callback
        </button>
      </div>
    </div>
  );
}
