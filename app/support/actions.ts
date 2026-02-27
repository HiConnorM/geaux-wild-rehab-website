'use server'

import { volunteerSchema, type VolunteerInput } from '@/lib/schemas'
import { notifyVolunteerInterest } from '@/lib/notify'

export async function submitVolunteerForm(data: VolunteerInput) {
  // Validate data
  const result = volunteerSchema.safeParse(data)

  if (!result.success) {
    return {
      success: false,
      error: 'Please check the form for errors',
      fieldErrors: result.error.flatten().fieldErrors,
    }
  }

  // Check honeypot
  if (data.website && data.website.length > 0) {
    // Silently succeed for bots
    return { success: true }
  }

  // TODO: Add rate limiting check here

  // Process the form submission
  const notification = await notifyVolunteerInterest({
    name: result.data.name,
    email: result.data.email,
    phone: result.data.phone,
    interests: result.data.interests,
    availability: result.data.availability,
    notes: result.data.notes || '',
  })

  if (!notification.success) {
    return {
      success: false,
      error: notification.error || 'Failed to submit form',
    }
  }

  return { success: true }
}
