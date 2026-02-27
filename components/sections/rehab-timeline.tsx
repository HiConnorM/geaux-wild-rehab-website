'use client'

import { Stethoscope, Shield, Activity, TreeDeciduous } from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = [
  {
    icon: Stethoscope,
    title: 'Intake',
    description: 'Every animal receives a thorough examination and assessment upon arrival.',
  },
  {
    icon: Shield,
    title: 'Stabilize',
    description: 'Critical care to address injuries, dehydration, and immediate health concerns.',
  },
  {
    icon: Activity,
    title: 'Rehabilitate',
    description: 'Species-specific care, nutrition, and skill-building for wild survival.',
  },
  {
    icon: TreeDeciduous,
    title: 'Release',
    description: 'Carefully selected release sites ensure the best chance of survival.',
  },
]

export function RehabTimeline() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Our Process
          </p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            The Journey to Recovery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From rescue to release, every animal in our care follows a careful rehabilitation journey 
            designed to give them the best chance at a healthy life in the wild.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Connection Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-border" />
          <div className="absolute top-16 left-0 h-0.5 w-1/2 gradient-brand" />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Step Number Circle */}
                <div className="relative z-10 flex justify-center mb-6">
                  <div
                    className={cn(
                      'w-12 h-12 rounded-full flex items-center justify-center',
                      index < 2 ? 'gradient-brand' : 'bg-muted'
                    )}
                  >
                    <step.icon
                      className={cn(
                        'w-6 h-6',
                        index < 2 ? 'text-white' : 'text-muted-foreground'
                      )}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center shrink-0',
                    index < 2 ? 'gradient-brand' : 'bg-muted'
                  )}
                >
                  <step.icon
                    className={cn(
                      'w-5 h-5',
                      index < 2 ? 'text-white' : 'text-muted-foreground'
                    )}
                  />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-2" />
                )}
              </div>
              <div className="pb-8">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                  Step {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
