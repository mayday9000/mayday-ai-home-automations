/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  to?: string
  displayName?: string
  previewData?: Record<string, any>
}

import { template as smsOptinConfirmation } from './sms-optin-confirmation.tsx'
import { template as smsOptinAdminNotification } from './sms-optin-admin-notification.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'sms-optin-confirmation': smsOptinConfirmation,
  'sms-optin-admin-notification': smsOptinAdminNotification,
}
