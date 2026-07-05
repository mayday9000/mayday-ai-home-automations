import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/config";
import { LeadCtaButton } from "./lead-modal";
import { PhoneIcon } from "./site-header";

/**
 * The repeated conversion block: same primary CTA everywhere, tel: fallback,
 * and a proof line sitting right next to it (proof adjacency per the brief).
 */
export function CtaBand({ proof, tone = "light" }: { proof: string; tone?: "light" | "dark" }) {
  const linkColor =
    tone === "dark"
      ? "text-cream/85 decoration-brand/60 hover:text-cream-bright"
      : "text-ink-soft decoration-brand/40 hover:text-brand";
  const proofColor = tone === "dark" ? "text-cream/60" : "text-ink-faint";

  return (
    <div className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-4 text-center">
      <LeadCtaButton />
      <a
        href={`tel:${PHONE_TEL}`}
        className={`inline-flex items-center gap-2 text-base font-semibold underline underline-offset-4 ${linkColor}`}
      >
        <PhoneIcon />
        Or call us now — our AI answers: {PHONE_DISPLAY}
      </a>
      <p className={`text-sm ${proofColor}`}>{proof}</p>
    </div>
  );
}
