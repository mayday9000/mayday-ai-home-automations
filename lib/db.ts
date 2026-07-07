import { neon } from "@neondatabase/serverless";

type Sql = ReturnType<typeof neon>;

let cached: Sql | null | undefined;

/**
 * Returns a Neon SQL client, or null when DATABASE_URL is not configured
 * (local dev / preview without a database). Callers must degrade gracefully.
 */
export function getDb(): Sql | null {
  if (cached !== undefined) return cached;
  const url = process.env.DATABASE_URL;
  cached = url ? neon(url) : null;
  return cached;
}
