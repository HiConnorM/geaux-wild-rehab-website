'use server'

import { helpRequestSchema, type HelpRequestInput } from '@/lib/schemas'
import { sendHelpRequestEmail } from '@/lib/resend'

// Minimum seconds a human takes to fill out this form
const MIN_SUBMIT_SECONDS = 3

export async function submitHelpRequest(data: HelpRequestInput) {
  // -------------------------------------------------------------------------
  // 1. Honeypot check (runs before Zod so bots don't learn schema details)
  // -------------------------------------------------------------------------
  if (data.website && data.website.length > 0) {
    console.log('[Geaux Wild] Honeypot triggered on help request form')
    // Return a fake success so bots don't learn they were blocked
    return { success: true }
  }

  // -------------------------------------------------------------------------
  // 2. Time-based bot check
  // -------------------------------------------------------------------------
  if (data._formLoadedAt) {
    const loadedAt = new Date(data._formLoadedAt).getTime()
    const elapsed = (Date.now() - loadedAt) / 1000
    if (!isNaN(loadedAt) && elapsed < MIN_SUBMIT_SECONDS) {
      console.log('[Geaux Wild] Help request submitted too quickly (possible bot)')
      return { success: true }
    }
  }

  // -------------------------------------------------------------------------
  // 3. Schema / field validation
  // -------------------------------------------------------------------------
  const result = helpRequestSchema.safeParse(data)

  if (!result.success) {
    return {
      success: false,
      error: 'Please check the form for errors',
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
  const emailResult = await sendHelpRequestEmail({
    name: d.name,
    phone: d.phone,
    email: d.email || undefined,
    location: d.location,
    landmark: d.landmark,
    species: d.species,
    condition: d.condition,
    notes: d.notes,
    contactMethod: d.contactMethod,
    contained: d.contained,
    immediateDanger: d.immediateDanger,
    submittedAt,
  })

  if (!emailResult.success) {
    console.error('[Geaux Wild] Help request email failed:', emailResult.error)
    return {
      success: false,
      error:
        'Something went wrong while sending your message. Please try again or contact Geaux Wild Rehab directly.',
    }
  }

  return { success: true }
}
