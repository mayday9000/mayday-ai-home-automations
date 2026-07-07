import { describe, it, expect } from "vitest";
import { normalizePhoneUS, leadSchema, smsConsentSchema } from "./validation";

describe("normalizePhoneUS", () => {
  it("normalizes 10-digit numbers to E.164", () => {
    expect(normalizePhoneUS("(919) 555-0142")).toBe("+19195550142");
    expect(normalizePhoneUS("919.555.0142")).toBe("+19195550142");
  });

  it("normalizes 11-digit numbers starting with 1", () => {
    expect(normalizePhoneUS("1 919 555 0142")).toBe("+19195550142");
    expect(normalizePhoneUS("+1 (919) 555-0142")).toBe("+19195550142");
  });

  it("rejects invalid numbers", () => {
    expect(normalizePhoneUS("12345")).toBeNull();
    expect(normalizePhoneUS("")).toBeNull();
    expect(normalizePhoneUS("call me maybe")).toBeNull();
  });
});

describe("leadSchema", () => {
  const valid = { name: "Sam Rivera", business: "Rivera Plumbing", phone: "(919) 555-0142" };

  it("accepts a valid lead and normalizes the phone", () => {
    const parsed = leadSchema.parse(valid);
    expect(parsed.phone).toBe("+19195550142");
    expect(parsed.name).toBe("Sam Rivera");
  });

  it("trims whitespace", () => {
    const parsed = leadSchema.parse({ ...valid, name: "  Sam  " });
    expect(parsed.name).toBe("Sam");
  });

  it("rejects missing fields", () => {
    expect(leadSchema.safeParse({ ...valid, name: "" }).success).toBe(false);
    expect(leadSchema.safeParse({ ...valid, business: "" }).success).toBe(false);
  });

  it("rejects invalid phone numbers", () => {
    expect(leadSchema.safeParse({ ...valid, phone: "123" }).success).toBe(false);
  });

  it("rejects absurdly long input", () => {
    expect(leadSchema.safeParse({ ...valid, name: "x".repeat(300) }).success).toBe(false);
  });
});

describe("smsConsentSchema", () => {
  const valid = {
    full_name: "Sam Rivera",
    business_name: "Rivera Plumbing",
    phone_number: "(919) 555-0142",
    email: "sam@example.com",
    city_state: "Cary, NC",
    consent: true,
  };

  it("accepts a valid consent submission", () => {
    const parsed = smsConsentSchema.parse(valid);
    expect(parsed.phone_number).toBe("+19195550142");
  });

  it("requires consent to be literally true", () => {
    expect(smsConsentSchema.safeParse({ ...valid, consent: false }).success).toBe(false);
    expect(smsConsentSchema.safeParse({ ...valid, consent: "yes" }).success).toBe(false);
  });

  it("rejects invalid email", () => {
    expect(smsConsentSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });
});
