'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

// ─── SVG Paw Print ────────────────────────────────────────────────────────────
function PawPrint({ px, mirrored }: { px: number; mirrored?: boolean }) {
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 318.10115735997715 333.8337317969981"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      style={mirrored ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path
        transform="matrix(4.77079 0.60656 -0.602905 4.742045 159.050586 166.916854) translate(-35.392275 -36.44326)"
        d="M 30.03 66.03 C 26.93 62.93 26.62 59.73 28.92 54.67 C 30.06 52.16 31.00 48.61 31.00 46.78 C 31.00 40.57 35.48 36.08 41.72 36.03 C 44.99 36.01 46.68 36.66 49.31 38.97 C 51.17 40.60 54.72 42.81 57.18 43.86 C 62.67 46.21 64.92 50.37 63.09 54.78 C 61.58 58.44 58.91 59.99 52.92 60.70 C 49.78 61.07 46.11 62.49 42.78 64.64 C 36.85 68.46 32.89 68.89 30.03 66.03 Z M 14.30 50.23 C 9.56 46.50 9.37 39.97 13.96 38.51 C 19.72 36.69 26.91 46.69 22.80 50.80 C 21.08 52.52 16.86 52.24 14.30 50.23 Z M 6.44 36.69 C 4.91 32.71 7.99 29.25 9.90 32.81 C 10.71 34.33 10.51 35.13 8.99 36.51 C 7.25 38.08 6.98 38.10 6.44 36.69 Z M 55.65 35.17 C 53.27 32.54 53.47 25.53 56.00 23.00 C 59.75 19.25 63.84 21.40 64.66 27.54 C 65.59 34.51 59.63 39.56 55.65 35.17 Z M 23.38 34.09 C 19.22 31.56 17.42 26.53 19.52 23.33 C 21.54 20.25 24.30 20.39 27.95 23.75 C 32.00 27.48 32.78 31.22 30.09 33.91 C 27.54 36.46 27.28 36.47 23.38 34.09 Z M 39.10 28.10 C 36.61 25.61 35.66 21.02 36.94 17.65 C 38.94 12.39 45.14 12.85 46.97 18.40 C 48.35 22.60 47.45 26.57 44.66 28.52 C 41.94 30.43 41.39 30.39 39.10 28.10 Z M 15.49 17.99 C 14.55 16.47 15.95 13.00 17.50 13.00 C 19.46 13.00 20.53 17.05 18.86 18.11 C 17.07 19.24 16.25 19.21 15.49 17.99 Z M 56.00 15.06 C 56.00 12.23 57.84 11.55 60.06 13.56 C 62.78 16.02 62.48 17.00 59.00 17.00 C 56.70 17.00 56.00 16.55 56.00 15.06 Z M 37.67 9.33 C 36.22 7.89 37.04 5.00 38.89 5.00 C 40.86 5.00 42.42 7.51 41.44 9.09 C 40.79 10.15 38.63 10.29 37.67 9.33 Z"
      />
    </svg>
  )
}

// ─── Sizes ────────────────────────────────────────────────────────────────────
const SIZE_CFG = {
  sm: { px: 40,  W: 150, H: 280 },
  md: { px: 58,  W: 210, H: 390 },
  lg: { px: 76,  W: 270, H: 490 },
} as const

type Size = keyof typeof SIZE_CFG

// ─── Layout ───────────────────────────────────────────────────────────────────
// Tuned to the reference image (640×900 source).
// Left paws: toes face up-right (unmirrored).
// Right paws: toes face up-left (mirrored scaleX(-1)).
//
// Animation order bottom → top: paw[0], paw[1], paw[2], paw[3].
// After all 4 stamp in → hold together → all fade out → pause → repeat.
const PAW_LAYOUT = [
  // paw 0 — bottom-left
  { xFrac: 0.03, yFrac: 0.70, mirrored: false },
  // paw 1 — bottom-right (sits higher and to the right within pair)
  { xFrac: 0.50, yFrac: 0.54, mirrored: true  },
  // paw 2 — upper-left  (large gap above pair 1)
  { xFrac: 0.03, yFrac: 0.24, mirrored: false },
  // paw 3 — upper-right
  { xFrac: 0.50, yFrac: 0.05, mirrored: true  },
]

// ─── Timing ───────────────────────────────────────────────────────────────────
const STEP_MS   = 650   // gap between each paw stamping in
const HOLD_MS   = 1000  // all 4 visible together
const FADE_MS   = 500   // fade-out transition
const PAUSE_MS  = 300   // blank pause before next cycle

export type PawLoaderProps = {
  size?: Size
  /** Show all 4 paws frozen (no animation) — useful for static previews */
  static?: boolean
  fullScreen?: boolean
  color?: string
  className?: string
}

export function PawLoader({
  size = 'md',
  static: isStatic = false,
  fullScreen = false,
  color,
  className,
}: PawLoaderProps) {
  const { px, W, H } = SIZE_CFG[size]

  const [visibleCount, setVisibleCount] = useState(isStatic ? 4 : 0)
  const [fading, setFading]             = useState(false)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    if (isStatic) return

    function clearAll() {
      timersRef.current.forEach(clearTimeout)
      timersRef.current = []
    }

    function schedule(fn: () => void, ms: number) {
      const id = setTimeout(fn, ms)
      timersRef.current.push(id)
    }

    function runCycle() {
      // Stamp in one paw at a time
      PAW_LAYOUT.forEach((_, i) => {
        schedule(() => setVisibleCount(i + 1), i * STEP_MS)
      })

      // After last paw, hold, then fade all out
      const holdAt = PAW_LAYOUT.length * STEP_MS
      schedule(() => setFading(true), holdAt + HOLD_MS)

      // After fade, reset and restart
      schedule(() => {
        setVisibleCount(0)
        setFading(false)
        // Small delay then restart so the reset render flushes first
        const restartId = setTimeout(runCycle, PAUSE_MS)
        timersRef.current.push(restartId)
      }, holdAt + HOLD_MS + FADE_MS)
    }

    runCycle()
    return clearAll
  }, [isStatic])

  const trail = (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'relative',
        width: W,
        height: H,
        flexShrink: 0,
        color: color ?? 'currentColor',
      }}
      className={cn(className)}
    >
      {PAW_LAYOUT.map((paw, i) => {
        const visible = isStatic || i < visibleCount
        return (
          <span
            key={i}
            style={{
              position: 'absolute',
              left:     Math.round(paw.xFrac * W),
              top:      Math.round(paw.yFrac * H),
              opacity:  fading ? 0 : visible ? 1 : 0,
              transform: fading
                ? 'scale(1)'
                : visible
                  ? 'scale(1)'
                  : 'scale(0.7)',
              transition: fading
                ? `opacity ${FADE_MS}ms ease-in-out, transform ${FADE_MS}ms ease-in-out`
                : visible
                  ? 'opacity 160ms ease-out, transform 240ms cubic-bezier(0.34,1.56,0.64,1)'
                  : 'none',
              willChange: 'opacity, transform',
            }}
          >
            <PawPrint px={px} mirrored={paw.mirrored} />
          </span>
        )
      })}
      <span className="sr-only">Loading</span>
    </div>
  )

  if (fullScreen) {
    return (
      <div
        className="gw-paw-fullscreen fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: 'rgba(248,244,244,0.92)', backdropFilter: 'blur(4px)' }}
      >
        {trail}
      </div>
    )
  }

  return trail
}
