import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation";
import { getDb } from "@/lib/db";

export const runtime = "nodejs";

function clientMeta(req: NextRequest) {
  const xff = req.headers.get("x-forwarded-for") ?? "";
  return {
    ip: xff.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown",
    userAgent: req.headers.get("user-agent") ?? "unknown",
  };
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: humans never see this field. A filled value means a bot, and a
  // forwarded bot submission would place a real outbound call. Report success
  // so the bot learns nothing, forward nowhere.
  if (typeof body === "object" && body !== null && (body as Record<string, unknown>)["company_site"]) {
    return NextResponse.json({ ok: true });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Check your name, business name, and phone number." },
      { status: 400 },
    );
  }

  const lead = parsed.data;
  const { ip, userAgent } = clientMeta(req);

  // Sink 1: the lead-intake webhook that triggers the AI callback (the demo).
  // Payload follows the lead-intake contract; the shared secret stays
  // server-side in an env var, never in browser code.
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  const webhookSecret = process.env.LEAD_INTAKE_SECRET;
  let webhookOk = false;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(webhookSecret ? { "x-lead-intake-secret": webhookSecret } : {}),
        },
        body: JSON.stringify({
          name: lead.name,
          phone: lead.phone,
          message: `Business: ${lead.business}`,
          source: "website_form",
        }),
        signal: AbortSignal.timeout(8000),
      });
      webhookOk = res.ok;
      if (res.status === 400) {
        // Intake rejected the phone number; let the visitor correct it.
        return NextResponse.json(
          { error: "That phone number didn't go through. Double-check it and try again." },
          { status: 400 },
        );
      }
      if (!res.ok) console.error(`Lead webhook responded ${res.status}`);
    } catch (err) {
      console.error("Lead webhook failed:", err);
    }
  } else {
    console.warn("LEAD_WEBHOOK_URL not set — lead not forwarded:", lead.phone);
  }

  // Sink 2: Neon, so no lead is ever lost even if the webhook hiccups.
  const sql = getDb();
  let dbOk = false;
  if (sql) {
    try {
      await sql`
        INSERT INTO leads (name, business, phone, source, ip_address, user_agent)
        VALUES (${lead.name}, ${lead.business}, ${lead.phone}, 'landing-page', ${ip}, ${userAgent})
      `;
      dbOk = true;
    } catch (err) {
      console.error("Lead DB insert failed:", err);
    }
  }

  // In production with sinks configured, surface total failure so the visitor
  // calls instead of waiting for a callback that will never come.
  const configured = Boolean(webhookUrl || sql);
  if (configured && !webhookOk && !dbOk && process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { error: "We couldn't queue your callback. Please call us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
