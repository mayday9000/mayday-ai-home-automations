import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/config";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-content items-center justify-between px-5 py-5 sm:px-8">
      <a href="/" className="font-display text-xl font-extrabold tracking-tight">
        Mayday<span className="text-brand"> AI</span>
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        className="group flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-brand sm:text-base"
      >
        <PhoneIcon />
        <span className="hidden sm:inline">Our AI answers —&nbsp;</span>
        {PHONE_DISPLAY}
      </a>
    </header>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3.5a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2Z" />
    </svg>
  );
}
