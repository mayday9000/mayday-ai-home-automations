import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const runtime = "nodejs";

type TokenRow = { email: string; used_at: string | null };

async function findToken(token: string): Promise<TokenRow | null> {
  const sql = getDb();
  if (!sql || !token || token.length > 200) return null;
  const rows = (await sql`
    SELECT email, used_at FROM unsubscribe_tokens WHERE token = ${token}
  `) as TokenRow[];
  return rows[0] ?? null;
}

/** Validate a token without consuming it. */
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token") ?? "";
  try {
    const row = await findToken(token);
    if (!row) return NextResponse.json({ valid: false });
    if (row.used_at) return NextResponse.json({ valid: false, reason: "already_unsubscribed" });
    return NextResponse.json({ valid: true });
  } catch (err) {
    console.error("unsubscribe validate failed:", err);
    return NextResponse.json({ valid: false });
  }
}

/** Consume the token and suppress the email address. */
export async function POST(req: NextRequest) {
  let token = "";
  try {
    const body = await req.json();
    token = String(body.token ?? "");
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const sql = getDb();
  try {
    const row = await findToken(token);
    if (!sql || !row) return NextResponse.json({ success: false, reason: "invalid" });
    if (row.used_at) return NextResponse.json({ success: false, reason: "already_unsubscribed" });

    await sql`UPDATE unsubscribe_tokens SET used_at = now() WHERE token = ${token}`;
    await sql`
      INSERT INTO email_suppressions (email, reason)
      VALUES (${row.email}, 'unsubscribe')
      ON CONFLICT (email) DO NOTHING
    `;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("unsubscribe failed:", err);
    return NextResponse.json({ error: "Unable to process unsubscribe." }, { status: 500 });
  }
}
