import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Mayday AI'
const BRAND_ORANGE = '#FF6600'

interface Props {
  fullName?: string
  businessName?: string
  phoneNumber?: string
  email?: string
  cityState?: string
  ipAddress?: string
  userAgent?: string
  timestamp?: string
}

const SmsOptinAdminEmail = ({
  fullName,
  businessName,
  phoneNumber,
  email,
  cityState,
  ipAddress,
  userAgent,
  timestamp,
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New SMS opt-in: {fullName ?? 'unknown'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New SMS opt-in</Heading>
        <Text style={text}>A new user has opted in to {SITE_NAME} text notifications.</Text>
        <Section style={card}>
          <Row label="Full Name" value={fullName} />
          <Row label="Business" value={businessName} />
          <Row label="Phone" value={phoneNumber} />
          <Row label="Email" value={email} />
          <Row label="City/State" value={cityState} />
          <Row label="Timestamp" value={timestamp} />
          <Row label="IP Address" value={ipAddress} />
          <Row label="User Agent" value={userAgent} />
        </Section>
        <Text style={footer}>Consent record stored in sms_consents (v1.0).</Text>
      </Container>
    </Body>
  </Html>
)

const Row = ({ label, value }: { label: string; value?: string }) => (
  <Text style={rowStyle}>
    <strong style={{ color: '#111' }}>{label}:</strong>{' '}
    <span style={{ color: '#333' }}>{value ?? '—'}</span>
  </Text>
)

export const template = {
  component: SmsOptinAdminEmail,
  subject: (d: Record<string, any>) =>
    `New SMS opt-in: ${d?.fullName ?? 'unknown'}${d?.businessName ? ` (${d.businessName})` : ''}`,
  displayName: 'SMS opt-in admin notification',
  previewData: {
    fullName: 'Jane Doe',
    businessName: 'Doe Plumbing',
    phoneNumber: '+19195551234',
    email: 'jane@doeplumbing.com',
    cityState: 'Cary, NC',
    ipAddress: '203.0.113.42',
    userAgent: 'Mozilla/5.0',
    timestamp: '2026-05-25T22:30:00Z',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '600px' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: BRAND_ORANGE, margin: '0 0 16px' }
const text = { fontSize: '15px', color: '#333333', lineHeight: '1.6', margin: '0 0 18px' }
const card = {
  backgroundColor: '#fafafa',
  border: '1px solid #eeeeee',
  borderRadius: '12px',
  padding: '20px 22px',
}
const rowStyle = { fontSize: '14px', lineHeight: '1.6', margin: '0 0 6px' }
const footer = { fontSize: '12px', color: '#888888', margin: '24px 0 0' }
