import { LeadModalProvider } from "@/components/lead-modal";
import { StickyCtaBar } from "@/components/sticky-cta-bar";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { RoiCalculator } from "@/components/sections/roi-calculator";
import { Proof } from "@/components/sections/proof";
import { Guarantee } from "@/components/sections/guarantee";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  return (
    <LeadModalProvider>
      <SiteHeader />
      {/* Bottom padding keeps the sticky mobile CTA bar from covering the footer. */}
      <div className="pb-24 md:pb-0">
        <main>
          <Hero />
          <Problem />
          <HowItWorks />
          <RoiCalculator />
          <Proof />
          <Guarantee />
          <Faq />
        </main>
        <SiteFooter />
      </div>
      <StickyCtaBar />
    </LeadModalProvider>
  );
}
