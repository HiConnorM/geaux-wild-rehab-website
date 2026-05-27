/**
 * Shared GSAP utilities for the Geaux Wild Rehab homepage.
 * All animations respect prefers-reduced-motion.
 */

/** Returns true when the user has requested reduced motion. */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Default ScrollTrigger config — elements fade + slide up 28px as they enter
 * the viewport with a comfortable 80% threshold so content is already close
 * to visible before animating.
 */
export const ST_DEFAULTS = {
  start: 'top 88%',
  end: 'top 60%',
  toggleActions: 'play none none none',
} as const

/** Shared easing used throughout the site animations. */
export const EASE_OUT = 'power2.out'
export const EASE_EXPO = 'expo.out'
