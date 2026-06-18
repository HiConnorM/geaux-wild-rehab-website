'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { usePathname, useRouter } from 'next/navigation'

type Origin = { x: number; y: number }

type TransitionContextValue = {
  startTransition: (href: string, origin?: Origin) => void
  isTransitioning: boolean
}

const TransitionContext = createContext<TransitionContextValue | null>(null)

/**
 * Access the iris page-transition controller.
 * Falls back to a plain navigation if used outside the provider so links
 * never trap the user.
 */
export function usePageTransition(): TransitionContextValue {
  const ctx = useContext(TransitionContext)
  if (!ctx) {
    return {
      startTransition: (href: string) => {
        if (typeof window !== 'undefined') window.location.assign(href)
      },
      isTransitioning: false,
    }
  }
  return ctx
}

// Brand palette — used interchangeably so each navigation alternates lead color.
const NAVY = '#3B468E'
const TEAL = '#26C9AA'
const CREAM = '#F8F4F4'

const COVER_MS = 620
const REVEAL_MS = 680
const ACCENT_DELAY_MS = 70
const EASE = 'cubic-bezier(0.76, 0, 0.24, 1)'
const SAFETY_MS = 2600

type Phase = 'idle' | 'covering' | 'covered' | 'revealing'

function farthestCorner(x: number, y: number) {
  const w = window.innerWidth
  const h = window.innerHeight
  return (
    Math.max(
      Math.hypot(x, y),
      Math.hypot(w - x, y),
      Math.hypot(x, h - y),
      Math.hypot(w - x, h - y),
    ) + 8
  )
}

function pathnameOf(href: string) {
  // Strip query + hash to compare against the current pathname.
  const [withoutHash] = href.split('#')
  const [path] = withoutHash.split('?')
  return path || '/'
}

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  const [phase, setPhase] = useState<Phase>('idle')
  const [origin, setOrigin] = useState<Origin>({ x: 0, y: 0 })
  const [radius, setRadius] = useState(0)
  const [colors, setColors] = useState({ main: NAVY, accent: TEAL })

  const transitioningRef = useRef(false)
  const targetHrefRef = useRef<string | null>(null)
  const targetPathRef = useRef<string | null>(null)
  const leadCountRef = useRef(0)
  const maxRadiusRef = useRef(0)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])
  const rafRef = useRef<number | null>(null)

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t))
    timersRef.current = []
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [])

  const reset = useCallback(() => {
    clearTimers()
    transitioningRef.current = false
    targetHrefRef.current = null
    targetPathRef.current = null
    setPhase('idle')
    setRadius(0)
  }, [clearTimers])

  const startTransition = useCallback(
    (href: string, clickOrigin?: Origin) => {
      // Ignore re-entrant clicks while a transition is running.
      if (transitioningRef.current) return

      const reduceMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (reduceMotion) {
        router.push(href)
        return
      }

      transitioningRef.current = true
      targetHrefRef.current = href
      targetPathRef.current = pathnameOf(href)

      const o = clickOrigin ?? {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      }
      setOrigin(o)
      maxRadiusRef.current = farthestCorner(o.x, o.y)

      // Alternate which brand color leads the iris on each navigation.
      const lead = leadCountRef.current % 2 === 0
      leadCountRef.current += 1
      setColors(
        lead ? { main: NAVY, accent: TEAL } : { main: TEAL, accent: NAVY },
      )

      setRadius(0)
      setPhase('covering')

      // Next frame: expand the iris to cover the viewport.
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => {
          setRadius(maxRadiusRef.current)
        })
      })

      // Once covered, push the route. The pathname effect handles the reveal.
      timersRef.current.push(
        setTimeout(() => {
          setPhase('covered')
          router.push(href)
        }, COVER_MS),
      )

      // Safety net: never leave the overlay stuck if navigation stalls.
      timersRef.current.push(setTimeout(() => reset(), SAFETY_MS))
    },
    [router, reset],
  )

  // When the route has changed and we are covered, play the reveal.
  useEffect(() => {
    if (!transitioningRef.current) return
    if (phase !== 'covered') return
    if (targetPathRef.current && pathname !== targetPathRef.current) return

    const href = targetHrefRef.current
    // Respect hash anchors — only force-scroll to top when there is none.
    if (!href || !href.includes('#')) {
      window.scrollTo(0, 0)
    }

    setPhase('revealing')
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(() => {
        setRadius(0)
      })
    })

    timersRef.current.push(
      setTimeout(() => reset(), REVEAL_MS + ACCENT_DELAY_MS + 40),
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, phase])

  // Clean up on unmount.
  useEffect(() => {
    return () => clearTimers()
  }, [clearTimers])

  const active = phase !== 'idle'
  const transitionDuration = phase === 'revealing' ? REVEAL_MS : COVER_MS
  const clip = `circle(${radius}px at ${origin.x}px ${origin.y}px)`

  return (
    <TransitionContext.Provider
      value={{ startTransition, isTransitioning: active }}
    >
      {children}

      {active && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2147483646,
            pointerEvents: 'none',
          }}
        >
          {/* Main iris layer */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: colors.main,
              clipPath: clip,
              WebkitClipPath: clip,
              transition: `clip-path ${transitionDuration}ms ${EASE}`,
              willChange: 'clip-path',
            }}
          />
          {/* Accent iris layer — slightly delayed to create a soft brand ring */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: colors.accent,
              clipPath: clip,
              WebkitClipPath: clip,
              transition: `clip-path ${transitionDuration}ms ${EASE} ${ACCENT_DELAY_MS}ms`,
              willChange: 'clip-path',
            }}
          />
          {/* Brief centered mark while the screen is fully covered */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: phase === 'covered' ? 1 : 0,
              transition: 'opacity 200ms ease-out',
            }}
          >
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: '9999px',
                background: CREAM,
                boxShadow: `0 0 0 6px ${colors.accent}55`,
                animation: 'gw-iris-pulse 900ms ease-in-out infinite',
              }}
            />
          </div>
          <style>{`
            @keyframes gw-iris-pulse {
              0%, 100% { transform: scale(1); opacity: 0.85; }
              50% { transform: scale(1.35); opacity: 1; }
            }
            @media (prefers-reduced-motion: reduce) {
              [data-gw-iris] * { animation: none !important; transition: none !important; }
            }
          `}</style>
        </div>
      )}
    </TransitionContext.Provider>
  )
}
