// Notification service abstraction
// TODO: Integrate with Resend, SendGrid, or similar email service
// TODO: Integrate with Supabase for data persistence

export interface HelpRequestData {
  name: string
  phone: string
  email: string
  location: string
  species: string
  condition: string
  notes: string
  contactMethod: string
  consent: boolean
}

export interface VolunteerFormData {
  name: string
  email: string
  phone: string
  interests: string[]
  availability: string
  notes: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Help request notification
export async function notifyHelpRequest(data: HelpRequestData): Promise<{ success: boolean; error?: string }> {
  try {
    // Log for development
    console.log('[Geaux Wild] New help request received:', {
      name: data.name,
      species: data.species,
      condition: data.condition,
      location: data.location,
      timestamp: new Date().toISOString(),
    })

    // TODO: Send email notification via Resend
    // const { data: emailData, error } = await resend.emails.send({
    //   from: 'geauxwildrehab@gmail.com',
    //   to: ['geauxwildrehab@gmail.com'],
    //   subject: `[URGENT] New Wildlife Help Request - ${data.species}`,
    //   html: generateHelpRequestEmail(data),
    // })

    // TODO: Store in database via Supabase
    // const { error } = await supabase
    //   .from('help_requests')
    //   .insert(data)

    return { success: true }
  } catch (error) {
    console.error('[Geaux Wild] Help request notification failed:', error)
    return { success: false, error: 'Failed to process request' }
  }
}

// Volunteer form notification
export async function notifyVolunteerInterest(data: VolunteerFormData): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('[Geaux Wild] New volunteer interest:', {
      name: data.name,
      interests: data.interests,
      timestamp: new Date().toISOString(),
    })

    // TODO: Send email notification
    // TODO: Store in database

    return { success: true }
  } catch (error) {
    console.error('[Geaux Wild] Volunteer notification failed:', error)
    return { success: false, error: 'Failed to process request' }
  }
}

// Contact form notification
export async function notifyContact(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('[Geaux Wild] New contact message:', {
      name: data.name,
      subject: data.subject,
      timestamp: new Date().toISOString(),
    })

    // TODO: Send email notification
    // TODO: Store in database

    return { success: true }
  } catch (error) {
    console.error('[Geaux Wild] Contact notification failed:', error)
    return { success: false, error: 'Failed to process request' }
  }
}
