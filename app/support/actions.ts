'use server'

import { volunteerSchema, type VolunteerInput } from '@/lib/schemas'
import { sendVolunteerEmail } from '@/lib/resend'

const MIN_SUBMIT_SECONDS = 3

export async function submitVolunteerForm(data: VolunteerInput) {
  // -------------------------------------------------------------------------
  // 1. Honeypot check
  // -------------------------------------------------------------------------
  if (data.website && data.website.length > 0) {
    console.log('[Geaux Wild] Honeypot triggered on volunteer form')
    return { success: true }
  }

  // -------------------------------------------------------------------------
  // 2. Time-based bot check
  // -------------------------------------------------------------------------
  if (data._formLoadedAt) {
    const loadedAt = new Date(data._formLoadedAt).getTime()
    const elapsed = (Date.now() - loadedAt) / 1000
    if (!isNaN(loadedAt) && elapsed < MIN_SUBMIT_SECONDS) {
      console.log('[Geaux Wild] Volunteer form submitted too quickly (possible bot)')
      return { success: true }
    }
  }

  // -------------------------------------------------------------------------
  // 3. Schema / field validation
  // -------------------------------------------------------------------------
  const result = volunteerSchema.safeParse(data)

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
  const emailResult = await sendVolunteerEmail({
    name: d.name,
    email: d.email,
    phone: d.phone,
    interests: d.interests,
    availability: d.availability,
    notes: d.notes,
    submittedAt,
  })

  if (!emailResult.success) {
    console.error('[Geaux Wild] Volunteer form email failed:', emailResult.error)
    return {
      success: false,
      error:
        'Something went wrong while sending your message. Please try again or contact Geaux Wild Rehab directly.',
    }
  }

  return { success: true }
}
