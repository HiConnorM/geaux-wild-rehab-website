'use server'

import { contactSchema, type ContactInput } from '@/lib/schemas'
import { notifyContact } from '@/lib/notify'

export async function submitContactForm(data: ContactInput) {
  // Validate data
  const result = contactSchema.safeParse(data)

  if (!result.success) {
    return {
      success: false,
      error: 'Invalid form data',
      fieldErrors: result.error.flatten().fieldErrors,
    }
  }

  // Check honeypot
  if (data.website && data.website.length > 0) {
    // Silently fail for bots
    return { success: true }
  }

  // TODO: Add rate limiting check here
  // const isRateLimited = await checkRateLimit(data.email)
  // if (isRateLimited) {
  //   return { success: false, error: 'Too many requests. Please try again later.' }
  // }

  // Process the form submission
  const notification = await notifyContact({
    name: result.data.name,
    email: result.data.email,
    subject: result.data.subject,
    message: result.data.message,
  })

  if (!notification.success) {
    return {
      success: false,
      error: notification.error || 'Failed to send message',
    }
  }

  return { success: true }
}
