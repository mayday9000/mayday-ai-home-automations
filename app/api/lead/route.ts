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

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Check your name, business name, and phone number." },
      { status: 400 },
    );
  }

  const lead = parsed.data;
  const { ip, userAgent } = clientMeta(req);
  const submittedAt = new Date().toISOString();

  // Sink 1: webhook that triggers the AI callback (the actual demo).
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  let webhookOk = false;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, source: "landing-page", submittedAt, ip, userAgent }),
        signal: AbortSignal.timeout(8000),
      });
      webhookOk = res.ok;
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
