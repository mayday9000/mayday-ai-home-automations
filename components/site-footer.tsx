import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_TEL, TAGLINE } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-cream-dim">
      <div className="mx-auto flex w-full max-w-content flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg font-extrabold tracking-tight">
            Mayday<span className="text-brand"> AI</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-ink-soft">{TAGLINE}</p>
          <p className="mt-4 text-sm text-ink-soft">Cary, North Carolina</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
          <a href="/privacy" className="text-ink-soft hover:text-brand">Privacy Policy</a>
          <a href="/terms" className="text-ink-soft hover:text-brand">Terms of Service</a>
          <a href="/sms-signup" className="text-ink-soft hover:text-brand">Text Notifications</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink-soft hover:text-brand">{CONTACT_EMAIL}</a>
          <a href={`tel:${PHONE_TEL}`} className="text-ink-soft hover:text-brand">{PHONE_DISPLAY}</a>
        </nav>
      </div>
      <div className="mx-auto w-full max-w-content px-5 pb-8 sm:px-8">
        <p className="text-xs text-ink-faint">
          © {new Date().getFullYear()} Mayday AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
