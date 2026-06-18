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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { helpRequestSchema, type HelpRequestInput } from '@/lib/schemas'
import { submitHelpRequest } from '@/app/get-help/actions'

const speciesOptions = [
  { value: 'squirrel', label: 'Squirrel' },
  { value: 'raccoon', label: 'Raccoon' },
  { value: 'opossum', label: 'Opossum' },
  { value: 'rabbit', label: 'Rabbit' },
  { value: 'bird-songbird', label: 'Bird - Songbird' },
  { value: 'bird-raptor', label: 'Bird - Raptor (hawk, owl)' },
  { value: 'bird-waterfowl', label: 'Bird - Waterfowl (duck, goose)' },
  { value: 'fox', label: 'Fox' },
  { value: 'deer', label: 'Deer/Fawn' },
  { value: 'turtle', label: 'Turtle' },
  { value: 'other', label: 'Other' },
  { value: 'unknown', label: 'Not sure' },
]

const conditionOptions = [
  { value: 'injured', label: 'Visibly injured (bleeding, broken limb, etc.)' },
  { value: 'orphaned', label: 'Orphaned (parent confirmed deceased)' },
  { value: 'possibly-orphaned', label: 'Possibly orphaned (parent not seen)' },
  { value: 'sick', label: 'Appears sick or weak' },
  { value: 'caught-by-pet', label: 'Caught by cat or dog' },
  { value: 'trapped', label: 'Trapped or stuck' },
  { value: 'other', label: 'Other situation' },
]

export function HelpRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<HelpRequestInput>({
    resolver: zodResolver(helpRequestSchema),
    defaultValues: {
      contactMethod: 'phone',
      // Set the form load timestamp for bot detection
      _formLoadedAt: new Date().toISOString(),
    },
  })

  const consent = watch('consent')

  async function onSubmit(data: HelpRequestInput) {
    setIsSubmitting(true)
    setServerError(null)

    const result = await submitHelpRequest(data)

    if (result.success) {
      setIsSuccess(true)
      reset({
        contactMethod: 'phone',
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
        <h3 className="text-xl font-semibold text-foreground mb-2">Request Submitted!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. Your message has been sent to Geaux Wild Rehab. For
          the fastest response, please call or text{' '}
          <a href="tel:5044918036" className="font-semibold text-primary hover:underline">
            504-491-8036
          </a>
          . Response times may vary depending on current animal care needs.
        </p>
        <Button
          onClick={() => {
            setIsSuccess(false)
            setValue('_formLoadedAt', new Date().toISOString())
          }}
          variant="outline"
        >
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Honeypot – visually hidden, aria-hidden, no tab stop */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', height: 0, overflow: 'hidden' }}>
        <label htmlFor="hp-website-help">Website</label>
        <input
          id="hp-website-help"
          type="text"
          {...register('website')}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Hidden timing field */}
      <input type="hidden" {...register('_formLoadedAt')} />

      {/* Contact Information */}
      <fieldset className="space-y-4 border-0 p-0 m-0">
        <legend className="font-semibold text-foreground text-base mb-2">Your Information</legend>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="hr-name">
              Name <span aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </Label>
            <Input
              id="hr-name"
              {...register('name')}
              placeholder="Your name"
              autoComplete="name"
              aria-required="true"
              aria-describedby={errors.name ? 'hr-name-error' : undefined}
              className={errors.name ? 'border-destructive' : ''}
            />
            {errors.name && (
              <p id="hr-name-error" role="alert" className="text-sm text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="hr-phone">
              Phone <span aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </Label>
            <Input
              id="hr-phone"
              type="tel"
              {...register('phone')}
              placeholder="(555) 555-5555"
              autoComplete="tel"
              aria-required="true"
              aria-describedby={errors.phone ? 'hr-phone-error' : undefined}
              className={errors.phone ? 'border-destructive' : ''}
            />
            {errors.phone && (
              <p id="hr-phone-error" role="alert" className="text-sm text-destructive">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="hr-email">Email</Label>
            <Input
              id="hr-email"
              type="email"
              {...register('email')}
              placeholder="your@email.com"
              autoComplete="email"
              aria-describedby={errors.email ? 'hr-email-error' : undefined}
              className={errors.email ? 'border-destructive' : ''}
            />
            {errors.email && (
              <p id="hr-email-error" role="alert" className="text-sm text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="hr-location">
              City/Parish <span aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </Label>
            <Input
              id="hr-location"
              {...register('location')}
              placeholder="e.g., Baton Rouge, East Baton Rouge Parish"
              aria-required="true"
              aria-describedby={errors.location ? 'hr-location-error' : undefined}
              className={errors.location ? 'border-destructive' : ''}
            />
            {errors.location && (
              <p id="hr-location-error" role="alert" className="text-sm text-destructive">
                {errors.location.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="hr-landmark">Exact Location / Nearby Landmark</Label>
          <Input
            id="hr-landmark"
            {...register('landmark')}
            placeholder="e.g., Behind the Walmart on Hwy 190, near the park entrance"
          />
        </div>
      </fieldset>

      {/* Animal Information */}
      <fieldset className="space-y-4 border-0 p-0 m-0">
        <legend className="font-semibold text-foreground text-base mb-2">Animal Information</legend>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="hr-species">
              Species <span aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </Label>
            <Select onValueChange={(value) => setValue('species', value)}>
              <SelectTrigger
                id="hr-species"
                aria-required="true"
                aria-describedby={errors.species ? 'hr-species-error' : undefined}
                className={errors.species ? 'border-destructive' : ''}
              >
                <SelectValue placeholder="Select species" />
              </SelectTrigger>
              <SelectContent>
                {speciesOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.species && (
              <p id="hr-species-error" role="alert" className="text-sm text-destructive">
                {errors.species.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="hr-condition">
              Condition <span aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </Label>
            <Select onValueChange={(value) => setValue('condition', value)}>
              <SelectTrigger
                id="hr-condition"
                aria-required="true"
                aria-describedby={errors.condition ? 'hr-condition-error' : undefined}
                className={errors.condition ? 'border-destructive' : ''}
              >
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                {conditionOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.condition && (
              <p id="hr-condition-error" role="alert" className="text-sm text-destructive">
                {errors.condition.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="hr-contained">Is the animal contained?</Label>
            <Select onValueChange={(value) => setValue('contained', value)}>
              <SelectTrigger id="hr-contained">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes, in a box/carrier</SelectItem>
                <SelectItem value="no">No, it is loose</SelectItem>
                <SelectItem value="unsure">Not sure</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hr-danger">Is the animal in immediate danger?</Label>
            <Select onValueChange={(value) => setValue('immediateDanger', value)}>
              <SelectTrigger id="hr-danger">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="unsure">Not sure</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="hr-notes">
            Additional Details <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </Label>
          <Textarea
            id="hr-notes"
            {...register('notes')}
            placeholder="Please describe the situation in more detail. Where did you find the animal? What is it currently doing? Any visible injuries?"
            rows={4}
            aria-describedby={errors.notes ? 'hr-notes-error' : undefined}
            className={errors.notes ? 'border-destructive' : ''}
          />
          {errors.notes && (
            <p id="hr-notes-error" role="alert" className="text-sm text-destructive">
              {errors.notes.message}
            </p>
          )}
        </div>
      </fieldset>

      {/* Contact Preference */}
      <fieldset className="space-y-4 border-0 p-0 m-0">
        <legend className="font-semibold text-foreground text-base">
          Preferred Contact Method <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </legend>
        <RadioGroup
          defaultValue="phone"
          onValueChange={(value) =>
            setValue('contactMethod', value as 'phone' | 'text' | 'email')
          }
          className="flex flex-wrap gap-4"
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem value="phone" id="hr-contact-phone" />
            <Label htmlFor="hr-contact-phone" className="font-normal cursor-pointer">
              Phone call
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="text" id="hr-contact-text" />
            <Label htmlFor="hr-contact-text" className="font-normal cursor-pointer">
              Text message
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="email" id="hr-contact-email" />
            <Label htmlFor="hr-contact-email" className="font-normal cursor-pointer">
              Email
            </Label>
          </div>
        </RadioGroup>
        {errors.contactMethod && (
          <p role="alert" className="text-sm text-destructive">
            {errors.contactMethod.message}
          </p>
        )}
      </fieldset>

      {/* Consent */}
      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <Checkbox
            id="hr-consent"
            checked={consent}
            onCheckedChange={(checked) => setValue('consent', checked === true)}
            aria-required="true"
            aria-describedby={errors.consent ? 'hr-consent-error' : undefined}
          />
          <Label
            htmlFor="hr-consent"
            className="text-sm font-normal leading-relaxed cursor-pointer"
          >
            I understand that response times may vary depending on current animal care needs.
            I consent to being contacted regarding this wildlife inquiry.{' '}
            <span aria-hidden="true">*</span>
          </Label>
        </div>
        {errors.consent && (
          <p id="hr-consent-error" role="alert" className="text-sm text-destructive">
            {errors.consent.message}
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
        size="lg"
        className="w-full sm:w-auto gap-2 gradient-brand text-white border-0 hover:opacity-90"
        aria-label={isSubmitting ? 'Submitting help request, please wait' : 'Submit help request'}
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {isSubmitting ? 'Submitting...' : 'Submit Help Request'}
      </Button>
    </form>
  )
}
