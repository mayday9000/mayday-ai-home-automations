import { NextRequest, NextResponse } from "next/server";
import { smsConsentSchema } from "@/lib/validation";
import { CONSENT_TEXT_PLAIN, CONSENT_TEXT_VERSION } from "@/lib/consent";
import { getDb } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = smsConsentSchema.safeParse(body);
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    const message =
      issue?.path[0] === "consent"
        ? "SMS consent is required."
        : issue?.path[0] === "phone_number"
          ? "Invalid US phone number."
          : issue?.path[0] === "email"
            ? "Invalid email address."
            : "All fields are required.";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const consent = parsed.data;
  const xff = req.headers.get("x-forwarded-for") ?? "";
  const ip = xff.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
  const userAgent = req.headers.get("user-agent") ?? "unknown";

  const sql = getDb();
  if (!sql) {
    // Consent records are legally significant — never fake success in production.
    if (process.env.NODE_ENV === "production") {
      console.error("sms-consent: DATABASE_URL not configured in production");
      return NextResponse.json(
        { error: "Signup is temporarily unavailable. Please email admin@maydayautomation.com." },
        { status: 503 },
      );
    }
    console.warn("sms-consent (dev, no DB):", consent.phone_number);
    return NextResponse.json({ success: true, stubbed: true });
  }

  try {
    await sql`
      INSERT INTO sms_consents
        (full_name, business_name, phone_number, email, city_state,
         ip_address, user_agent, consent_text_version, consent_text)
      VALUES
        (${consent.full_name}, ${consent.business_name}, ${consent.phone_number},
         ${consent.email}, ${consent.city_state}, ${ip}, ${userAgent},
         ${CONSENT_TEXT_VERSION}, ${CONSENT_TEXT_PLAIN})
    `;
  } catch (err) {
    console.error("sms-consent insert failed:", err);
    return NextResponse.json({ error: "Failed to save consent record." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
