'use server'

import { contactSchema, type ContactInput } from '@/lib/schemas'
import { sendContactEmail } from '@/lib/resend'

const MIN_SUBMIT_SECONDS = 3

export async function submitContactForm(data: ContactInput) {
  // -------------------------------------------------------------------------
  // 1. Honeypot check
  // -------------------------------------------------------------------------
  if (data.website && data.website.length > 0) {
    console.log('[Geaux Wild] Honeypot triggered on contact form')
    return { success: true }
  }

  // -------------------------------------------------------------------------
  // 2. Time-based bot check
  // -------------------------------------------------------------------------
  if (data._formLoadedAt) {
    const loadedAt = new Date(data._formLoadedAt).getTime()
    const elapsed = (Date.now() - loadedAt) / 1000
    if (!isNaN(loadedAt) && elapsed < MIN_SUBMIT_SECONDS) {
      console.log('[Geaux Wild] Contact form submitted too quickly (possible bot)')
      return { success: true }
    }
  }

  // -------------------------------------------------------------------------
  // 3. Schema / field validation
  // -------------------------------------------------------------------------
  const result = contactSchema.safeParse(data)

  if (!result.success) {
    return {
      success: false,
      error: 'Invalid form data',
      fieldErrors: result.error.flatten().fieldErrors,
    }
  }

  const d = result.data
  const submittedAt = new Date().toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    dateStyle: 'full',
    timeStyle: 'short',
  }) + ' (CT)'

  // -------------------------------------------------------------------------
  // 4. Send email via Resend
  // -------------------------------------------------------------------------
  const emailResult = await sendContactEmail({
    name: d.name,
    email: d.email,
    phone: d.phone,
    subject: d.subject,
    message: d.message,
    submittedAt,
  })

  if (!emailResult.success) {
    console.error('[Geaux Wild] Contact form email failed:', emailResult.error)
    return {
      success: false,
      error:
        'Something went wrong while sending your message. Please try again or contact Geaux Wild Rehab directly.',
    }
  }

  return { success: true }
}
