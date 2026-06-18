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
import { Checkbox } from '@/components/ui/checkbox'
import { volunteerSchema, type VolunteerInput } from '@/lib/schemas'
import { submitVolunteerForm } from '@/app/support/actions'

const interestOptions = [
  { value: 'animal-care', label: 'Animal Care (feeding, cleaning, monitoring)' },
  { value: 'transport', label: 'Transport (animal pickup/delivery, supply runs)' },
  { value: 'foster', label: 'Fostering (caring for animals at your home)' },
  { value: 'facility', label: 'Facility Maintenance (cleaning, repairs)' },
  { value: 'admin', label: 'Administrative (data entry, phone, email)' },
  { value: 'social-media', label: 'Social Media & Outreach' },
  { value: 'fundraising', label: 'Fundraising & Events' },
]

export function VolunteerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<VolunteerInput>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      interests: [],
      _formLoadedAt: new Date().toISOString(),
    },
  })

  function toggleInterest(value: string) {
    const newInterests = selectedInterests.includes(value)
      ? selectedInterests.filter((i) => i !== value)
      : [...selectedInterests, value]
    setSelectedInterests(newInterests)
    setValue('interests', newInterests)
  }

  async function onSubmit(data: VolunteerInput) {
    setIsSubmitting(true)
    setServerError(null)

    const result = await submitVolunteerForm(data)

    if (result.success) {
      setIsSuccess(true)
      reset({
        interests: [],
        _formLoadedAt: new Date().toISOString(),
      })
      setSelectedInterests([])
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
        <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-6">
          We have received your volunteer interest form. Someone from our team will reach
          out to you soon with next steps.
        </p>
        <Button
          onClick={() => {
            setIsSuccess(false)
            setValue('_formLoadedAt', new Date().toISOString())
          }}
          variant="outline"
        >
          Submit Another Form
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Honeypot – visually hidden from users */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', height: 0, overflow: 'hidden' }}>
        <label htmlFor="hp-website-volunteer">Website</label>
        <input
          id="hp-website-volunteer"
          type="text"
          {...register('website')}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Hidden timing field */}
      <input type="hidden" {...register('_formLoadedAt')} />

      {/* Contact Information */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="vf-name">
            Name <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </Label>
          <Input
            id="vf-name"
            {...register('name')}
            placeholder="Your name"
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.name ? 'vf-name-error' : undefined}
            className={errors.name ? 'border-destructive' : ''}
          />
          {errors.name && (
            <p id="vf-name-error" role="alert" className="text-sm text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="vf-email">
            Email <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </Label>
          <Input
            id="vf-email"
            type="email"
            {...register('email')}
            placeholder="your@email.com"
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email ? 'vf-email-error' : undefined}
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && (
            <p id="vf-email-error" role="alert" className="text-sm text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="vf-phone">
          Phone <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </Label>
        <Input
          id="vf-phone"
          type="tel"
          {...register('phone')}
          placeholder="(555) 555-5555"
          autoComplete="tel"
          aria-required="true"
          aria-describedby={errors.phone ? 'vf-phone-error' : undefined}
          className={errors.phone ? 'border-destructive' : ''}
        />
        {errors.phone && (
          <p id="vf-phone-error" role="alert" className="text-sm text-destructive">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Interest Areas */}
      <fieldset className="space-y-3 border-0 p-0 m-0">
        <legend className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Areas of Interest <span aria-hidden="true">*</span>
          <span className="sr-only">(required, select at least one)</span>
        </legend>
        <div className="grid gap-3">
          {interestOptions.map((option) => (
            <div key={option.value} className="flex items-start gap-3">
              <Checkbox
                id={`vf-interest-${option.value}`}
                checked={selectedInterests.includes(option.value)}
                onCheckedChange={() => toggleInterest(option.value)}
              />
              <Label
                htmlFor={`vf-interest-${option.value}`}
                className="text-sm font-normal cursor-pointer leading-relaxed"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>
        {errors.interests && (
          <p role="alert" className="text-sm text-destructive">
            {errors.interests.message}
          </p>
        )}
      </fieldset>

      {/* Availability */}
      <div className="space-y-2">
        <Label htmlFor="vf-availability">
          Availability <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </Label>
        <Input
          id="vf-availability"
          {...register('availability')}
          placeholder="e.g., Weekends, Weekday evenings, Flexible"
          aria-required="true"
          aria-describedby={errors.availability ? 'vf-availability-error' : undefined}
          className={errors.availability ? 'border-destructive' : ''}
        />
        {errors.availability && (
          <p id="vf-availability-error" role="alert" className="text-sm text-destructive">
            {errors.availability.message}
          </p>
        )}
      </div>

      {/* Notes */}
      <div className="space-y-2">
        <Label htmlFor="vf-notes">Anything else we should know?</Label>
        <Textarea
          id="vf-notes"
          {...register('notes')}
          placeholder="Tell us about any relevant experience, skills, or questions you have."
          rows={3}
        />
      </div>

      {serverError && (
        <div role="alert" className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm">
          {serverError}
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full gap-2 gradient-brand text-white border-0 hover:opacity-90"
        aria-label={isSubmitting ? 'Submitting volunteer form, please wait' : 'Submit volunteer interest form'}
      >
        {isSubmitting && <PawLoader size="sm" className="text-white" />}
        {isSubmitting ? 'Submitting...' : 'Submit Interest Form'}
      </Button>
    </form>
  )
}
