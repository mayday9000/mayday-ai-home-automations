import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function LegalPage({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-3 text-ink-faint">Effective Date: {effectiveDate}</p>
        <div className="mt-10 space-y-5 leading-relaxed text-ink-soft [&_h2]:pt-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_li]:ml-6 [&_li]:list-disc [&_strong]:text-ink">
          {children}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export function LegalContact() {
  return (
    <p>
      Mayday AI
      <br />
      Cary, North Carolina
      <br />
      Email: admin@maydayautomation.com
      <br />
      Phone: 919-244-3451
    </p>
  );
}
