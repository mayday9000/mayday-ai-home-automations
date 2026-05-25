import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Mayday AI'
const BRAND_ORANGE = '#FF6600'

interface Props {
  fullName?: string
}

const SmsOptinConfirmationEmail = ({ fullName }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>You're subscribed to {SITE_NAME} text notifications</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {fullName ? `Thanks, ${fullName}!` : 'You\'re subscribed.'}
        </Heading>
        <Text style={text}>
          You've successfully opted in to receive text notifications from your{' '}
          {SITE_NAME} assistant. You'll start receiving reminders, notes,
          confirmations, and operational notifications as soon as your account
          is active.
        </Text>
        <Text style={text}>
          Message frequency varies. Message and data rates may apply. Reply{' '}
          <strong>STOP</strong> at any time to opt out, or <strong>HELP</strong> for help.
        </Text>
        <Text style={footer}>— The {SITE_NAME} Team</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: SmsOptinConfirmationEmail,
  subject: `You're subscribed to ${SITE_NAME} text notifications`,
  displayName: 'SMS opt-in confirmation',
  previewData: { fullName: 'Jane Doe' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '560px' }
const h1 = { fontSize: '24px', fontWeight: 'bold', color: BRAND_ORANGE, margin: '0 0 20px' }
const text = { fontSize: '15px', color: '#333333', lineHeight: '1.6', margin: '0 0 18px' }
const footer = { fontSize: '13px', color: '#888888', margin: '32px 0 0' }
