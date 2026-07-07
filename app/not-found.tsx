import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/config";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-content flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-32">
        <p className="font-display text-7xl font-extrabold text-brand">404</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="mt-4 max-w-md text-lg text-ink-soft">
          The good news: unlike your calls, a wrong URL doesn&rsquo;t cost you anything.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a href="/" className="btn-primary">
            Back to the homepage
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="font-semibold text-ink-soft underline decoration-brand/40 underline-offset-4 hover:text-brand"
          >
            Or call us: {PHONE_DISPLAY}
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
