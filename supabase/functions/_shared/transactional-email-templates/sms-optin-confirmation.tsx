import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Hr, Html, Preview, Text,
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
    <Preview>You're confirmed to receive text notifications from {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={text}>Hi {fullName || 'there'},</Text>

        <Text style={text}>
          You're confirmed to receive text notifications from Mayday AI in connection with your AI assistant.
        </Text>

        <Text style={text}>What you'll get:</Text>
        <Text style={listItem}>- Reminders and notes you configure through your AI assistant</Text>
        <Text style={listItem}>- Confirmations when actions are scheduled or completed</Text>
        <Text style={listItem}>- Operational alerts from your account</Text>

        <Text style={text}>
          Message frequency varies. Message and data rates may apply. Reply STOP at any time to opt out. Reply HELP for help, or email masondavisai@gmail.com.
        </Text>

        <Hr style={hr} />

        <Text style={signature}>— Mayday AI</Text>
        <Text style={footer}>Cary, North Carolina | 919-244-3451 | maydayautomation.com</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: SmsOptinConfirmationEmail,
  subject: `You're confirmed to receive text notifications from ${SITE_NAME}`,
  displayName: 'SMS opt-in confirmation',
  previewData: { fullName: 'Jane Doe' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '560px' }
const text = { fontSize: '15px', color: '#333333', lineHeight: '1.6', margin: '0 0 16px' }
const listItem = { fontSize: '15px', color: '#333333', lineHeight: '1.6', margin: '0 0 6px', paddingLeft: '8px' }
const hr = { borderColor: '#eeeeee', margin: '24px 0' }
const signature = { fontSize: '15px', color: BRAND_ORANGE, fontWeight: 'bold', margin: '0 0 4px' }
const footer = { fontSize: '13px', color: '#888888', margin: '0' }
