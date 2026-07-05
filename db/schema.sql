-- Mayday AI landing page — Neon Postgres schema.
-- Run once against your Neon database (psql "$DATABASE_URL" -f db/schema.sql).

CREATE TABLE IF NOT EXISTS leads (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name        TEXT NOT NULL,
  business    TEXT NOT NULL,
  phone       TEXT NOT NULL,            -- E.164
  source      TEXT NOT NULL DEFAULT 'landing-page',
  ip_address  TEXT,
  user_agent  TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- A2P 10DLC consent records. Mirrors the fields captured by the previous
-- Supabase implementation so existing compliance documentation stays accurate.
CREATE TABLE IF NOT EXISTS sms_consents (
  id                   BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  full_name            TEXT NOT NULL,
  business_name        TEXT NOT NULL,
  phone_number         TEXT NOT NULL,   -- E.164
  email                TEXT NOT NULL,
  city_state           TEXT NOT NULL,
  ip_address           TEXT,
  user_agent           TEXT,
  consent_text_version TEXT NOT NULL,
  consent_text         TEXT NOT NULL,
  created_at           TIMESTAMPTZ NOT NULL DEFAULT now(),
  opted_out_at         TIMESTAMPTZ
);

-- Email unsubscribe tokens (issued by whatever sends email; consumed by /unsubscribe).
CREATE TABLE IF NOT EXISTS unsubscribe_tokens (
  token       TEXT PRIMARY KEY,
  email       TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  used_at     TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS email_suppressions (
  email       TEXT PRIMARY KEY,
  reason      TEXT NOT NULL DEFAULT 'unsubscribe',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
