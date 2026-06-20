/**
 * Server-side only Resend email utility.
 * NEVER import this file from client components.
 */

import { Resend } from 'resend'

// ---------------------------------------------------------------------------
// Client (lazy-initialized so missing key only throws at send time)
// ---------------------------------------------------------------------------

let _resend: Resend | null = null

function getResendClient(): Resend {
  if (!_resend) {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      throw new Error('RESEND_API_KEY environment variable is not set')
    }
    _resend = new Resend(apiKey)
  }
  return _resend
}

// ---------------------------------------------------------------------------
// Environment helpers
// ---------------------------------------------------------------------------

// FROM_EMAIL must be a valid Resend "from" address.
// Acceptable formats: "user@domain.com" OR "Display Name <user@domain.com>"
// The domain must be verified in your Resend dashboard.
// Until verified, we fall back to Resend's built-in sandbox domain.
function resolveFromEmail(): string {
  const raw = (process.env.FROM_EMAIL ?? '').trim()

  // If not set, use sandbox fallback
  if (!raw) return 'Geaux Wild Rehab <onboarding@resend.dev>'

  // Already in correct RFC format: "Name <email>" or bare "email"
  if (raw.includes('<') && raw.includes('>')) return raw
  if (/^[^\s]+@[^\s]+\.[^\s]+$/.test(raw)) return raw

  // Common malformed: "Display Name user@domain.com" (missing angle brackets)
  // Extract the email address from the end of the string
  const emailMatch = raw.match(/([a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,})$/)
  if (emailMatch) {
    const email = emailMatch[1]
    const displayName = raw.slice(0, raw.lastIndexOf(email)).trim()
    return displayName ? `${displayName} <${email}>` : email
  }

  // Can't parse it — fall back to sandbox so emails still go out
  console.error('[Geaux Wild] FROM_EMAIL is malformed, falling back to sandbox:', raw)
  return 'Geaux Wild Rehab <onboarding@resend.dev>'
}

const FROM_EMAIL = resolveFromEmail()

const TO_EMAIL =
  process.env.TO_EMAIL ?? 'Geauxwildrehab@gmail.com'

const ALERT_EMAIL = process.env.ALERT_EMAIL ?? ''

// ---------------------------------------------------------------------------
// HTML escaping – prevent injection of HTML into email bodies
// ---------------------------------------------------------------------------

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function esc(value: string | undefined | null): string {
  if (!value) return '<em style="color:#999">not provided</em>'
  return escapeHtml(String(value))
}

// ---------------------------------------------------------------------------
// Shared email wrapper
// ---------------------------------------------------------------------------

function emailWrapper(title: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:24px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background:#2d6a4f;padding:24px 32px;">
              <p style="margin:0;font-size:20px;font-weight:bold;color:#ffffff;">Geaux Wild Rehab</p>
              <p style="margin:4px 0 0;font-size:13px;color:#b7e4c7;">Wildlife Rehabilitation &bull; Hammond, Louisiana</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              ${body}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#f8f8f8;padding:16px 32px;border-top:1px solid #e8e8e8;">
              <p style="margin:0;font-size:12px;color:#999;">
                This message was sent from the Geaux Wild Rehab website contact form.
                Do not reply directly to this email — use the Reply-To address to reach the sender.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

// ---------------------------------------------------------------------------
// Label/value row helper
// ---------------------------------------------------------------------------

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:6px 0;vertical-align:top;width:180px;">
      <strong style="font-size:14px;color:#333;">${label}</strong>
    </td>
    <td style="padding:6px 0;vertical-align:top;font-size:14px;color:#444;">${value}</td>
  </tr>`
}

// ---------------------------------------------------------------------------
// WILDLIFE INTAKE – full detail email
// ---------------------------------------------------------------------------

export interface HelpRequestEmailData {
  name: string
  phone: string
  email?: string
  location: string
  landmark?: string
  species: string
  condition: string
  notes?: string
  contactMethod: string
  contained?: string
  immediateDanger?: string
  submittedAt: string
}

function buildHelpRequestEmailHtml(data: HelpRequestEmailData): string {
  const body = `
    <h2 style="margin:0 0 4px;font-size:22px;color:#1a1a1a;">New Wildlife Intake Submission</h2>
    <p style="margin:0 0 24px;font-size:14px;color:#666;">Submitted via geauxwildrehab.org</p>

    <div style="background:#fff8e1;border-left:4px solid #f59e0b;padding:16px;border-radius:4px;margin-bottom:24px;">
      <p style="margin:0;font-size:13px;font-weight:bold;color:#92400e;text-transform:uppercase;letter-spacing:.5px;">Priority Summary</p>
    </div>

    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;margin-bottom:24px;">
      ${row('Animal/Species:', esc(data.species))}
      ${row('Condition/Situation:', esc(data.condition))}
      ${row('City/Parish:', esc(data.location))}
      ${row('Nearby Landmark:', esc(data.landmark))}
      ${row('Finder Name:', esc(data.name))}
      ${row('Finder Phone:', esc(data.phone))}
      ${row('Finder Email:', esc(data.email))}
      ${row('Preferred Contact:', esc(data.contactMethod))}
      ${row('Animal Contained:', esc(data.contained))}
      ${row('Immediate Danger:', esc(data.immediateDanger))}
      ${row('Submitted At:', esc(data.submittedAt))}
    </table>

    ${
      data.notes
        ? `<div style="margin-bottom:24px;">
        <p style="margin:0 0 8px;font-size:15px;font-weight:bold;color:#333;">Full Details / Notes</p>
        <div style="background:#f9f9f9;border:1px solid #e0e0e0;border-radius:4px;padding:16px;font-size:14px;color:#444;white-space:pre-wrap;">${esc(data.notes)}</div>
      </div>`
        : ''
    }

    <div style="background:#fef3c7;border:1px solid #fcd34d;border-radius:6px;padding:16px;">
      <p style="margin:0;font-size:13px;color:#78350f;">
        <strong>Response Time Reminder:</strong> Geaux Wild Rehab is not a 24/7 emergency service.
        Response times may vary depending on current animal care needs.
        For the fastest response, call or text <strong>504-491-8036</strong>.
      </p>
    </div>
  `
  return emailWrapper(
    `New Wildlife Intake: ${data.species} in ${data.location}`,
    body,
  )
}

function buildHelpRequestPlainText(data: HelpRequestEmailData): string {
  return `New Wildlife Intake Submission — Geaux Wild Rehab
================================================

PRIORITY SUMMARY

Animal/Species:       ${data.species}
Condition/Situation:  ${data.condition}
City/Parish:          ${data.location}
Nearby Landmark:      ${data.landmark ?? 'not provided'}
Finder Name:          ${data.name}
Finder Phone:         ${data.phone}
Finder Email:         ${data.email ?? 'not provided'}
Preferred Contact:    ${data.contactMethod}
Animal Contained:     ${data.contained ?? 'not provided'}
Immediate Danger:     ${data.immediateDanger ?? 'not provided'}
Submitted At:         ${data.submittedAt}

FULL DETAILS / NOTES
${data.notes ?? 'No additional notes provided.'}

---
Response Time Reminder: Geaux Wild Rehab is not a 24/7 emergency service.
Response times may vary depending on current animal care needs.
Call or text 504-491-8036 for the fastest response.
`
}

// Condensed alert email for ALERT_EMAIL
function buildAlertEmailHtml(data: HelpRequestEmailData): string {
  const body = `
    <h2 style="margin:0 0 16px;font-size:20px;color:#1a1a1a;">Wildlife Intake Alert</h2>
    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
      ${row('Animal:', esc(data.species))}
      ${row('Condition:', esc(data.condition))}
      ${row('Location:', esc(data.location))}
      ${row('Finder:', esc(data.name))}
      ${row('Phone:', esc(data.phone))}
    </table>
    <p style="margin:24px 0 0;font-size:13px;color:#666;">Check the full intake email for complete details.</p>
  `
  return emailWrapper(
    `${data.species} - ${data.condition} - ${data.location}`,
    body,
  )
}

function buildAlertPlainText(data: HelpRequestEmailData): string {
  return `Wildlife Intake Alert

Animal:     ${data.species}
Condition:  ${data.condition}
Location:   ${data.location}
Finder:     ${data.name}
Phone:      ${data.phone}

Check the full intake email for complete details.
`
}

// ---------------------------------------------------------------------------
// CONTACT FORM email
// ---------------------------------------------------------------------------

export interface ContactEmailData {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  submittedAt: string
}

function buildContactEmailHtml(data: ContactEmailData): string {
  const subjectLine = data.subject
    ? `Contact Form: ${escapeHtml(data.subject)}`
    : 'New Contact Form Submission - Geaux Wild Rehab'

  const body = `
    <h2 style="margin:0 0 4px;font-size:22px;color:#1a1a1a;">New Contact Form Submission</h2>
    <p style="margin:0 0 24px;font-size:14px;color:#666;">Submitted via geauxwildrehab.org</p>

    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;margin-bottom:24px;">
      ${row('Name:', esc(data.name))}
      ${row('Email:', esc(data.email))}
      ${row('Phone:', esc(data.phone))}
      ${row('Subject:', esc(data.subject))}
      ${row('Submitted At:', esc(data.submittedAt))}
    </table>

    <div style="margin-bottom:24px;">
      <p style="margin:0 0 8px;font-size:15px;font-weight:bold;color:#333;">Message</p>
      <div style="background:#f9f9f9;border:1px solid #e0e0e0;border-radius:4px;padding:16px;font-size:14px;color:#444;white-space:pre-wrap;">${esc(data.message)}</div>
    </div>
  `
  return emailWrapper(subjectLine, body)
}

function buildContactPlainText(data: ContactEmailData): string {
  return `New Contact Form Submission — Geaux Wild Rehab
===============================================

Name:         ${data.name}
Email:        ${data.email}
Phone:        ${data.phone ?? 'not provided'}
Subject:      ${data.subject ?? 'not provided'}
Submitted At: ${data.submittedAt}

MESSAGE
${data.message}
`
}

// ---------------------------------------------------------------------------
// VOLUNTEER FORM email
// ---------------------------------------------------------------------------

export interface VolunteerEmailData {
  name: string
  email: string
  phone: string
  interests: string[]
  availability: string
  notes?: string
  submittedAt: string
}

function buildVolunteerEmailHtml(data: VolunteerEmailData): string {
  const body = `
    <h2 style="margin:0 0 4px;font-size:22px;color:#1a1a1a;">New Volunteer Interest Submission</h2>
    <p style="margin:0 0 24px;font-size:14px;color:#666;">Submitted via geauxwildrehab.org</p>

    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;margin-bottom:24px;">
      ${row('Name:', esc(data.name))}
      ${row('Email:', esc(data.email))}
      ${row('Phone:', esc(data.phone))}
      ${row('Availability:', esc(data.availability))}
      ${row('Interests:', esc(data.interests.join(', ')))}
      ${row('Submitted At:', esc(data.submittedAt))}
    </table>

    ${
      data.notes
        ? `<div style="margin-bottom:24px;">
        <p style="margin:0 0 8px;font-size:15px;font-weight:bold;color:#333;">Additional Notes</p>
        <div style="background:#f9f9f9;border:1px solid #e0e0e0;border-radius:4px;padding:16px;font-size:14px;color:#444;white-space:pre-wrap;">${esc(data.notes)}</div>
      </div>`
        : ''
    }
  `
  return emailWrapper('New Volunteer Interest - Geaux Wild Rehab', body)
}

function buildVolunteerPlainText(data: VolunteerEmailData): string {
  return `New Volunteer Interest Submission — Geaux Wild Rehab
=====================================================

Name:         ${data.name}
Email:        ${data.email}
Phone:        ${data.phone}
Availability: ${data.availability}
Interests:    ${data.interests.join(', ')}
Submitted At: ${data.submittedAt}

NOTES
${data.notes ?? 'No additional notes provided.'}
`
}

// ---------------------------------------------------------------------------
// Public send functions
// ---------------------------------------------------------------------------

export async function sendHelpRequestEmail(
  data: HelpRequestEmailData,
): Promise<{ success: boolean; error?: string }> {
  try {
    const resend = getResendClient()
    const to = TO_EMAIL
    const subject = `New Wildlife Intake: ${data.species} in ${data.location}`
    const replyTo = data.email ? data.email : undefined

    // Send full detail email
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject,
      html: buildHelpRequestEmailHtml(data),
      text: buildHelpRequestPlainText(data),
      ...(replyTo ? { replyTo } : {}),
    })

    if (error) {
      console.error('[Geaux Wild] Resend error (help request):', JSON.stringify(error))
      console.error('[Geaux Wild] FROM:', FROM_EMAIL, '| TO:', to)
      return { success: false, error: 'Email delivery failed' }
    }

    // Send condensed alert if ALERT_EMAIL is configured and different from TO_EMAIL
    const alertEmail = ALERT_EMAIL.trim()
    if (alertEmail && alertEmail !== to) {
      const alertSubject = `${data.species} - ${data.condition} - ${data.location}`
      const { error: alertError } = await resend.emails.send({
        from: FROM_EMAIL,
        to: alertEmail,
        subject: alertSubject,
        html: buildAlertEmailHtml(data),
        text: buildAlertPlainText(data),
        ...(replyTo ? { replyTo } : {}),
      })
      if (alertError) {
        // Non-fatal: log but don't fail the whole submission
        console.error('[Geaux Wild] Resend error (alert email):', alertError)
      }
    }

    return { success: true }
  } catch (err) {
    console.error('[Geaux Wild] Unexpected error sending help request email:', err)
    return { success: false, error: 'Unexpected error sending email' }
  }
}

export async function sendContactEmail(
  data: ContactEmailData,
): Promise<{ success: boolean; error?: string }> {
  try {
    const resend = getResendClient()
    const subject = data.subject
      ? `Contact Form: ${data.subject}`
      : 'New Contact Form Submission - Geaux Wild Rehab'

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      html: buildContactEmailHtml(data),
      text: buildContactPlainText(data),
      replyTo: data.email,
    })

    if (error) {
      console.error('[Geaux Wild] Resend error (contact form):', JSON.stringify(error))
      console.error('[Geaux Wild] FROM:', FROM_EMAIL, '| TO:', TO_EMAIL)
      return { success: false, error: 'Email delivery failed' }
    }

    return { success: true }
  } catch (err) {
    console.error('[Geaux Wild] Unexpected error sending contact email:', err)
    return { success: false, error: 'Unexpected error sending email' }
  }
}

export async function sendVolunteerEmail(
  data: VolunteerEmailData,
): Promise<{ success: boolean; error?: string }> {
  try {
    const resend = getResendClient()

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: 'New Volunteer Interest - Geaux Wild Rehab',
      html: buildVolunteerEmailHtml(data),
      text: buildVolunteerPlainText(data),
      replyTo: data.email,
    })

    if (error) {
      console.error('[Geaux Wild] Resend error (volunteer form):', JSON.stringify(error))
      console.error('[Geaux Wild] FROM:', FROM_EMAIL, '| TO:', TO_EMAIL)
      return { success: false, error: 'Email delivery failed' }
    }

    return { success: true }
  } catch (err) {
    console.error('[Geaux Wild] Unexpected error sending volunteer email:', err)
    return { success: false, error: 'Unexpected error sending email' }
  }
}
