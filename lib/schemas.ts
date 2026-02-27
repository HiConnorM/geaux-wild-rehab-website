import { z } from 'zod'

export const helpRequestSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  location: z.string().min(2, 'Please enter your city or parish'),
  species: z.string().min(1, 'Please select a species'),
  condition: z.string().min(1, 'Please describe the condition'),
  notes: z.string().optional(),
  contactMethod: z.enum(['phone', 'text', 'email'], {
    required_error: 'Please select a contact method',
  }),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the terms' }),
  }),
  // Honeypot field - should be empty
  website: z.string().max(0).optional(),
})

export const volunteerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  interests: z.array(z.string()).min(1, 'Please select at least one area of interest'),
  availability: z.string().min(1, 'Please describe your availability'),
  notes: z.string().optional(),
  // Honeypot field
  website: z.string().max(0).optional(),
})

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(2, 'Please enter a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  // Honeypot field
  website: z.string().max(0).optional(),
})

export type HelpRequestInput = z.infer<typeof helpRequestSchema>
export type VolunteerInput = z.infer<typeof volunteerSchema>
export type ContactInput = z.infer<typeof contactSchema>
