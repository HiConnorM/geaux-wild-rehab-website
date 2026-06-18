import { z } from 'zod'

// ---------------------------------------------------------------------------
// Shared length limits (server-side enforced)
// ---------------------------------------------------------------------------
const NAME_MAX = 100
const EMAIL_MAX = 150
const PHONE_MAX = 30
const LOCATION_MAX = 200
const SPECIES_MAX = 100
const CONDITION_MAX = 200
const SUBJECT_MAX = 150
const MESSAGE_MAX = 3000

// ---------------------------------------------------------------------------
// Help Request (wildlife intake) schema
// ---------------------------------------------------------------------------

export const helpRequestSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(NAME_MAX, `Name must be ${NAME_MAX} characters or fewer`)
    .trim(),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(PHONE_MAX, `Phone must be ${PHONE_MAX} characters or fewer`)
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(EMAIL_MAX, `Email must be ${EMAIL_MAX} characters or fewer`)
    .trim()
    .optional()
    .or(z.literal('')),
  location: z
    .string()
    .min(2, 'Please enter your city or parish')
    .max(LOCATION_MAX, `Location must be ${LOCATION_MAX} characters or fewer`)
    .trim(),
  landmark: z
    .string()
    .max(LOCATION_MAX, `Landmark must be ${LOCATION_MAX} characters or fewer`)
    .trim()
    .optional(),
  species: z
    .string()
    .min(1, 'Please select or describe the species')
    .max(SPECIES_MAX, `Species must be ${SPECIES_MAX} characters or fewer`)
    .trim(),
  condition: z
    .string()
    .min(1, 'Please describe the condition')
    .max(CONDITION_MAX, `Condition must be ${CONDITION_MAX} characters or fewer`)
    .trim(),
  notes: z
    .string()
    .max(MESSAGE_MAX, `Notes must be ${MESSAGE_MAX} characters or fewer`)
    .trim()
    .optional(),
  contained: z.string().optional(),
  immediateDanger: z.string().optional(),
  contactMethod: z.enum(['phone', 'text', 'email'], {
    required_error: 'Please select a contact method',
  }),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the terms' }),
  }),
  // Honeypot field – must be empty
  website: z.string().max(0).optional(),
  // Time-to-submit field – ISO timestamp set when the form first renders
  _formLoadedAt: z.string().optional(),
})

export type HelpRequestInput = z.infer<typeof helpRequestSchema>

// ---------------------------------------------------------------------------
// Volunteer schema
// ---------------------------------------------------------------------------

export const volunteerSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(NAME_MAX, `Name must be ${NAME_MAX} characters or fewer`)
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(EMAIL_MAX, `Email must be ${EMAIL_MAX} characters or fewer`)
    .trim(),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(PHONE_MAX, `Phone must be ${PHONE_MAX} characters or fewer`)
    .trim(),
  interests: z.array(z.string()).min(1, 'Please select at least one area of interest'),
  availability: z
    .string()
    .min(1, 'Please describe your availability')
    .max(SUBJECT_MAX, `Availability must be ${SUBJECT_MAX} characters or fewer`)
    .trim(),
  notes: z
    .string()
    .max(MESSAGE_MAX, `Notes must be ${MESSAGE_MAX} characters or fewer`)
    .trim()
    .optional(),
  // Honeypot field
  website: z.string().max(0).optional(),
  _formLoadedAt: z.string().optional(),
})

export type VolunteerInput = z.infer<typeof volunteerSchema>

// ---------------------------------------------------------------------------
// Contact schema
// ---------------------------------------------------------------------------

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(NAME_MAX, `Name must be ${NAME_MAX} characters or fewer`)
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(EMAIL_MAX, `Email must be ${EMAIL_MAX} characters or fewer`)
    .trim(),
  phone: z
    .string()
    .max(PHONE_MAX, `Phone must be ${PHONE_MAX} characters or fewer`)
    .trim()
    .optional(),
  subject: z
    .string()
    .min(2, 'Please enter a subject')
    .max(SUBJECT_MAX, `Subject must be ${SUBJECT_MAX} characters or fewer`)
    .trim(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(MESSAGE_MAX, `Message must be ${MESSAGE_MAX} characters or fewer`)
    .trim(),
  // Honeypot field
  website: z.string().max(0).optional(),
  _formLoadedAt: z.string().optional(),
})

export type ContactInput = z.infer<typeof contactSchema>
