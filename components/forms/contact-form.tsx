'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PawLoader } from '@/components/ui/paw-loader'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { contactSchema, type ContactInput } from '@/lib/schemas'
import { submitContactForm } from '@/app/contact/actions'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      _formLoadedAt: new Date().toISOString(),
    },
  })

  async function onSubmit(data: ContactInput) {
    setIsSubmitting(true)
    setServerError(null)

    const result = await submitContactForm(data)

    if (result.success) {
      setIsSuccess(true)
      reset({
        _formLoadedAt: new Date().toISOString(),
      })
    } else {
      setServerError(
        result.error ||
          'Something went wrong while sending your message. Please try again or contact Geaux Wild Rehab directly.',
      )
    }

    setIsSubmitting(false)
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
          <CheckCircle className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. Your message has been sent to Geaux Wild Rehab.
        </p>
        <Button
          onClick={() => {
            setIsSuccess(false)
            setValue('_formLoadedAt', new Date().toISOString())
          }}
          variant="outline"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Honeypot – visually hidden from users */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', height: 0, overflow: 'hidden' }}>
        <label htmlFor="hp-website-contact">Website</label>
        <input
          id="hp-website-contact"
          type="text"
          {...register('website')}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Hidden timing field */}
      <input type="hidden" {...register('_formLoadedAt')} />

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="cf-name">
            Name <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </Label>
          <Input
            id="cf-name"
            {...register('name')}
            placeholder="Your name"
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.name ? 'cf-name-error' : undefined}
            className={errors.name ? 'border-destructive' : ''}
          />
          {errors.name && (
            <p id="cf-name-error" role="alert" className="text-sm text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="cf-email">
            Email <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </Label>
          <Input
            id="cf-email"
            type="email"
            {...register('email')}
            placeholder="your@email.com"
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email ? 'cf-email-error' : undefined}
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && (
            <p id="cf-email-error" role="alert" className="text-sm text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="cf-subject">
          Subject <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </Label>
        <Input
          id="cf-subject"
          {...register('subject')}
          placeholder="What is this about?"
          aria-required="true"
          aria-describedby={errors.subject ? 'cf-subject-error' : undefined}
          className={errors.subject ? 'border-destructive' : ''}
        />
        {errors.subject && (
          <p id="cf-subject-error" role="alert" className="text-sm text-destructive">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="cf-message">
          Message <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </Label>
        <Textarea
          id="cf-message"
          {...register('message')}
          placeholder="How can we help you?"
          rows={5}
          aria-required="true"
          aria-describedby={errors.message ? 'cf-message-error' : undefined}
          className={errors.message ? 'border-destructive' : ''}
        />
        {errors.message && (
          <p id="cf-message-error" role="alert" className="text-sm text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      {serverError && (
        <div role="alert" className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm">
          {serverError}
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto gap-2 gradient-brand text-white border-0 hover:opacity-90"
        aria-label={isSubmitting ? 'Sending message, please wait' : 'Send message'}
      >
        {isSubmitting && <PawLoader size="sm" className="text-white" />}
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
