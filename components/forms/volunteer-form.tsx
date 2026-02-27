'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
      reset()
      setSelectedInterests([])
    } else {
      setServerError(result.error || 'Something went wrong. Please try again.')
    }

    setIsSubmitting(false)
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-6">
          We have received your volunteer interest form. Someone from our team will 
          reach out to you soon with next steps.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          Submit Another Form
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Honeypot */}
      <input
        type="text"
        {...register('website')}
        className="sr-only"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Contact Information */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="vol-name">Name *</Label>
          <Input
            id="vol-name"
            {...register('name')}
            placeholder="Your name"
            className={errors.name ? 'border-destructive' : ''}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="vol-email">Email *</Label>
          <Input
            id="vol-email"
            type="email"
            {...register('email')}
            placeholder="your@email.com"
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="vol-phone">Phone *</Label>
        <Input
          id="vol-phone"
          type="tel"
          {...register('phone')}
          placeholder="(555) 555-5555"
          className={errors.phone ? 'border-destructive' : ''}
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      {/* Interest Areas */}
      <div className="space-y-3">
        <Label>Areas of Interest *</Label>
        <div className="grid gap-3">
          {interestOptions.map((option) => (
            <div key={option.value} className="flex items-start gap-3">
              <Checkbox
                id={option.value}
                checked={selectedInterests.includes(option.value)}
                onCheckedChange={() => toggleInterest(option.value)}
              />
              <Label
                htmlFor={option.value}
                className="text-sm font-normal cursor-pointer leading-relaxed"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>
        {errors.interests && (
          <p className="text-sm text-destructive">{errors.interests.message}</p>
        )}
      </div>

      {/* Availability */}
      <div className="space-y-2">
        <Label htmlFor="vol-availability">Availability *</Label>
        <Input
          id="vol-availability"
          {...register('availability')}
          placeholder="e.g., Weekends, Weekday evenings, Flexible"
          className={errors.availability ? 'border-destructive' : ''}
        />
        {errors.availability && (
          <p className="text-sm text-destructive">{errors.availability.message}</p>
        )}
      </div>

      {/* Notes */}
      <div className="space-y-2">
        <Label htmlFor="vol-notes">Anything else we should know?</Label>
        <Textarea
          id="vol-notes"
          {...register('notes')}
          placeholder="Tell us about any relevant experience, skills, or questions you have."
          rows={3}
        />
      </div>

      {serverError && (
        <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm">
          {serverError}
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full gap-2 gradient-brand text-white border-0 hover:opacity-90"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? 'Submitting...' : 'Submit Interest Form'}
      </Button>
    </form>
  )
}
