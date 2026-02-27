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
    },
  })

  const consent = watch('consent')

  async function onSubmit(data: HelpRequestInput) {
    setIsSubmitting(true)
    setServerError(null)

    const result = await submitHelpRequest(data)

    if (result.success) {
      setIsSuccess(true)
      reset()
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
        <h3 className="text-xl font-semibold text-foreground mb-2">Request Submitted!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for contacting us. We will reach out via your preferred contact method 
          as soon as possible. In the meantime, please keep the animal warm and quiet.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          Submit Another Request
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
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground">Your Information</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              {...register('name')}
              placeholder="Your name"
              className={errors.name ? 'border-destructive' : ''}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              {...register('phone')}
              placeholder="(555) 555-5555"
              className={errors.phone ? 'border-destructive' : ''}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="your@email.com"
              className={errors.email ? 'border-destructive' : ''}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">City/Parish *</Label>
            <Input
              id="location"
              {...register('location')}
              placeholder="e.g., Baton Rouge, East Baton Rouge Parish"
              className={errors.location ? 'border-destructive' : ''}
            />
            {errors.location && (
              <p className="text-sm text-destructive">{errors.location.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Animal Information */}
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground">Animal Information</h3>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="species">Species *</Label>
            <Select onValueChange={(value) => setValue('species', value)}>
              <SelectTrigger className={errors.species ? 'border-destructive' : ''}>
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
              <p className="text-sm text-destructive">{errors.species.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="condition">Condition *</Label>
            <Select onValueChange={(value) => setValue('condition', value)}>
              <SelectTrigger className={errors.condition ? 'border-destructive' : ''}>
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
              <p className="text-sm text-destructive">{errors.condition.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Additional Details</Label>
          <Textarea
            id="notes"
            {...register('notes')}
            placeholder="Please describe the situation in more detail. Where did you find the animal? What is it currently doing? Any visible injuries?"
            rows={4}
          />
        </div>
      </div>

      {/* Contact Preference */}
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground">Preferred Contact Method *</h3>
        <RadioGroup
          defaultValue="phone"
          onValueChange={(value) => setValue('contactMethod', value as 'phone' | 'text' | 'email')}
          className="flex flex-wrap gap-4"
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem value="phone" id="phone-call" />
            <Label htmlFor="phone-call" className="font-normal cursor-pointer">
              Phone call
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="text" id="text" />
            <Label htmlFor="text" className="font-normal cursor-pointer">
              Text message
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="email" id="email-contact" />
            <Label htmlFor="email-contact" className="font-normal cursor-pointer">
              Email
            </Label>
          </div>
        </RadioGroup>
        {errors.contactMethod && (
          <p className="text-sm text-destructive">{errors.contactMethod.message}</p>
        )}
      </div>

      {/* Consent */}
      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <Checkbox
            id="consent"
            checked={consent}
            onCheckedChange={(checked) => setValue('consent', checked === true)}
          />
          <Label htmlFor="consent" className="text-sm font-normal leading-relaxed cursor-pointer">
            I understand that Geaux Wild Rehab is a volunteer organization and response times 
            may vary. I consent to being contacted regarding this wildlife inquiry. *
          </Label>
        </div>
        {errors.consent && (
          <p className="text-sm text-destructive">{errors.consent.message}</p>
        )}
      </div>

      {serverError && (
        <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm">
          {serverError}
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full sm:w-auto gap-2 gradient-brand text-white border-0 hover:opacity-90"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? 'Submitting...' : 'Submit Help Request'}
      </Button>
    </form>
  )
}
