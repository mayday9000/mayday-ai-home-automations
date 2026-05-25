import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const CONSENT_TEXT_VERSION = "v1.0";
const CONSENT_TEXT =
  "By checking this box, I authorize Mayday AI to send me text messages to the mobile number provided in connection with the AI assistant service I have engaged Mayday AI to provide. Messages may include reminders, notes, confirmations, and operational notifications from my AI assistant. Message frequency varies. Message and data rates may apply. Consent is not a condition of engaging any Mayday AI service. I may opt out at any time by replying STOP to opt out, HELP for help. View our Privacy Policy and Terms of Service.";

const ADMIN_EMAIL = "masondavisai@gmail.com";

function normalizeToE164US(input: string): string | null {
  const digits = (input || "").replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (input.startsWith("+") && digits.length >= 10) return `+${digits}`;
  return null;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const fullName = String(body.full_name || "").trim();
    const businessName = String(body.business_name || "").trim();
    const phoneRaw = String(body.phone_number || "").trim();
    const email = String(body.email || "").trim();
    const cityState = String(body.city_state || "").trim();
    const consentGiven = body.consent === true;

    if (!fullName || !businessName || !phoneRaw || !email || !cityState) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    if (!consentGiven) {
      return new Response(
        JSON.stringify({ error: "SMS consent is required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const phoneE164 = normalizeToE164US(phoneRaw);
    if (!phoneE164) {
      return new Response(
        JSON.stringify({ error: "Invalid US phone number." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Server-side capture (ignore any client-supplied values)
    const xff = req.headers.get("x-forwarded-for") || "";
    const ipAddress =
      xff.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: inserted, error: insertError } = await supabase
      .from("sms_consents")
      .insert({
        full_name: fullName,
        business_name: businessName,
        phone_number: phoneE164,
        email,
        city_state: cityState,
        ip_address: ipAddress,
        user_agent: userAgent,
        consent_text_version: CONSENT_TEXT_VERSION,
        consent_text: CONSENT_TEXT,
      })
      .select()
      .single();

    if (insertError) {
      console.error("Insert error", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to save consent record." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Fire-and-forget emails through Lovable's transactional email function
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;
    const sendEmail = async (templateName: string, recipientEmail: string, templateData: Record<string, unknown>, idempotencyKey: string) => {
      try {
        const res = await fetch(`${SUPABASE_URL}/functions/v1/send-transactional-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${ANON_KEY}`,
            "apikey": ANON_KEY,
          },
          body: JSON.stringify({ templateName, recipientEmail, idempotencyKey, templateData }),
        });
        if (!res.ok) {
          const text = await res.text();
          console.warn(`Email send (${templateName}) failed: ${res.status} ${text}`);
        }
      } catch (e) {
        console.warn(`Email send (${templateName}) failed:`, e);
      }
    };

    await Promise.all([
      sendEmail(
        "sms-optin-confirmation",
        email,
        { fullName },
        `sms-confirm-${inserted.id}`,
      ),
      sendEmail(
        "sms-optin-admin-notification",
        ADMIN_EMAIL,
        {
          fullName,
          businessName,
          phoneNumber: phoneE164,
          email,
          cityState,
          ipAddress,
          userAgent,
          timestamp: inserted.created_at,
        },
        `sms-admin-${inserted.id}`,
      ),
    ]);

    return new Response(
      JSON.stringify({ success: true, id: inserted.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Unexpected error", err);
    return new Response(
      JSON.stringify({ error: "Unexpected server error." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
