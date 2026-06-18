import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Geaux Wild Rehab — Louisiana Wildlife Rehabilitation'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  // Fetch the fox hero image from the public Vercel blob
  const foxSrc = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Geaux%20Wild%20Rehab%20-%20Screenshot%202026-06-18%20at%204.04.55%E2%80%AFPM-E93POTP5WbSkrLHE0xgtTDXyj8qsHS.jpg'

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          backgroundColor: '#26C9AA',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ── Full-bleed screenshot as base layer ── */}
        {/* We embed the actual hero screenshot, scaled to fill */}
        <img
          src={foxSrc}
          width={1200}
          height={630}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'flex',
          }}
        />

        {/* Subtle teal vignette overlay so branding pops */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(38,201,170,0.18) 0%, transparent 60%)',
            display: 'flex',
          }}
        />

        {/* Bottom gradient for URL legibility */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 90,
            background: 'linear-gradient(to top, rgba(38,201,170,0.55) 0%, transparent 100%)',
            display: 'flex',
          }}
        />

        {/* Site URL watermark bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: 28,
            left: 72,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: 22,
              fontFamily: 'sans-serif',
              fontWeight: 600,
              letterSpacing: 0.3,
              display: 'flex',
            }}
          >
            geauxwildrehab.org
          </span>
        </div>
      </div>
    ),
    { ...size },
  )
}
