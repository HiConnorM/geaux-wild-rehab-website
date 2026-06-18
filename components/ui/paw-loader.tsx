'use client'

import { cn } from '@/lib/utils'

/**
 * Single paw print using the exact viewBox from the original SVG asset.
 */
function PawPrint({ px }: { px: number }) {
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 318.10115735997715 333.8337317969981"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path
        transform="matrix(4.77079 0.60656 -0.602905 4.742045 159.050586 166.916854) translate(-35.392275 -36.44326)"
        d="M 30.03 66.03 C 26.93 62.93 26.62 59.73 28.92 54.67 C 30.06 52.16 31.00 48.61 31.00 46.78 C 31.00 40.57 35.48 36.08 41.72 36.03 C 44.99 36.01 46.68 36.66 49.31 38.97 C 51.17 40.60 54.72 42.81 57.18 43.86 C 62.67 46.21 64.92 50.37 63.09 54.78 C 61.58 58.44 58.91 59.99 52.92 60.70 C 49.78 61.07 46.11 62.49 42.78 64.64 C 36.85 68.46 32.89 68.89 30.03 66.03 Z M 14.30 50.23 C 9.56 46.50 9.37 39.97 13.96 38.51 C 19.72 36.69 26.91 46.69 22.80 50.80 C 21.08 52.52 16.86 52.24 14.30 50.23 Z M 6.44 36.69 C 4.91 32.71 7.99 29.25 9.90 32.81 C 10.71 34.33 10.51 35.13 8.99 36.51 C 7.25 38.08 6.98 38.10 6.44 36.69 Z M 55.65 35.17 C 53.27 32.54 53.47 25.53 56.00 23.00 C 59.75 19.25 63.84 21.40 64.66 27.54 C 65.59 34.51 59.63 39.56 55.65 35.17 Z M 23.38 34.09 C 19.22 31.56 17.42 26.53 19.52 23.33 C 21.54 20.25 24.30 20.39 27.95 23.75 C 32.00 27.48 32.78 31.22 30.09 33.91 C 27.54 36.46 27.28 36.47 23.38 34.09 Z M 39.10 28.10 C 36.61 25.61 35.66 21.02 36.94 17.65 C 38.94 12.39 45.14 12.85 46.97 18.40 C 48.35 22.60 47.45 26.57 44.66 28.52 C 41.94 30.43 41.39 30.39 39.10 28.10 Z M 15.49 17.99 C 14.55 16.47 15.95 13.00 17.50 13.00 C 19.46 13.00 20.53 17.05 18.86 18.11 C 17.07 19.24 16.25 19.21 15.49 17.99 Z M 56.00 15.06 C 56.00 12.23 57.84 11.55 60.06 13.56 C 62.78 16.02 62.48 17.00 59.00 17.00 C 56.70 17.00 56.00 16.55 56.00 15.06 Z M 37.67 9.33 C 36.22 7.89 37.04 5.00 38.89 5.00 C 40.86 5.00 42.42 7.51 41.44 9.09 C 40.79 10.15 38.63 10.29 37.67 9.33 Z"
      />
    </svg>
  )
}

// ─── Size config ──────────────────────────────────────────────────────────────
// px        = paw size in pixels
// spread    = how far each paw moves left/right from center
// rowGap    = vertical gap between each paw
// Total height = px * 4 + rowGap * 3
const SIZES = {
  sm: { px: 20, spread: 16, rowGap: 14 },
  md: { px: 34, spread: 26, rowGap: 22 },
  lg: { px: 52, spread: 38, rowGap: 34 },
} as const

type Size = keyof typeof SIZES

type PawLoaderProps = {
  size?: Size
  fullScreen?: boolean
  color?: string
  className?: string
}

// Paw trail order: index 0 = topmost (first to stamp when reading top→bottom),
// animates first. Left/right alternate. Right paw is mirrored via scaleX(-1)
// so toes point inward and upward as in the reference.
//
// Delays fire top→bottom so it reads as the animal walking toward you (upward).
const STEPS: { side: 'left' | 'right'; delay: number }[] = [
  { side: 'right', delay: 0.0  },
  { side: 'left',  delay: 0.5  },
  { side: 'right', delay: 1.0  },
  { side: 'left',  delay: 1.5  },
]

export function PawLoader({
  size = 'md',
  fullScreen = false,
  color,
  className,
}: PawLoaderProps) {
  const { px, spread, rowGap } = SIZES[size]

  const totalW = px + spread * 2
  const totalH = px * 4 + rowGap * 3

  const trail = (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'relative',
        width: totalW,
        height: totalH,
        color: color ?? 'currentColor',
        flexShrink: 0,
      }}
      className={cn(className)}
    >
      {STEPS.map(({ side, delay }, i) => {
        const isRight = side === 'right'
        // i=0 is top, i=3 is bottom
        const top = i * (px + rowGap)
        // Left paw: center - spread, Right paw: center + small offset
        // Mirror right paw so both face toes-upward/inward like real tracks
        const left = isRight
          ? spread + px * 0.05
          : spread - px * 0.05

        return (
          <span
            key={i}
            className="gw-paw"
            style={{
              top,
              left,
              transform: isRight ? 'scaleX(-1)' : 'none',
              animationDelay: `${delay}s`,
              animationDuration: '2s',
            }}
          >
            <PawPrint px={px} />
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
        style={{
          background: 'rgba(248,244,244,0.92)',
          backdropFilter: 'blur(4px)',
        }}
      >
        {trail}
      </div>
    )
  }

  return trail
}
