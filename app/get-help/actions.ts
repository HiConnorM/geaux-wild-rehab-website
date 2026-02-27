'use server'

import { helpRequestSchema, type HelpRequestInput } from '@/lib/schemas'
import { notifyHelpRequest } from '@/lib/notify'

export async function submitHelpRequest(data: HelpRequestInput) {
  // Validate data
  const result = helpRequestSchema.safeParse(data)

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
  // const isRateLimited = await checkRateLimit(data.email)
  // if (isRateLimited) {
  //   return { success: false, error: 'Too many requests. Please try again later.' }
  // }

  // Process the form submission
  const notification = await notifyHelpRequest({
    name: result.data.name,
    phone: result.data.phone,
    email: result.data.email,
    location: result.data.location,
    species: result.data.species,
    condition: result.data.condition,
    notes: result.data.notes || '',
    contactMethod: result.data.contactMethod,
    consent: result.data.consent,
  })

  if (!notification.success) {
    return {
      success: false,
      error: notification.error || 'Failed to submit request. Please try calling our hotline.',
    }
  }

  return { success: true }
}
