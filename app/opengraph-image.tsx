import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Geaux Wild Rehab — Louisiana Wildlife Rehabilitation'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#26C9AA',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Decorative diamond shapes */}
        <div style={{ position: 'absolute', top: 80, left: 60, width: 28, height: 28, backgroundColor: 'rgba(255,255,255,0.2)', transform: 'rotate(45deg)', borderRadius: 4, display: 'flex' }} />
        <div style={{ position: 'absolute', top: 130, left: 30, width: 18, height: 18, backgroundColor: 'rgba(255,255,255,0.25)', transform: 'rotate(45deg)', borderRadius: 3, display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 160, left: 50, width: 40, height: 40, border: '3px solid rgba(255,255,255,0.2)', transform: 'rotate(45deg)', borderRadius: 4, display: 'flex' }} />
        <div style={{ position: 'absolute', top: 220, right: 80, width: 22, height: 22, border: '2px solid rgba(255,255,255,0.18)', transform: 'rotate(45deg)', borderRadius: 3, display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 80, right: 120, width: 14, height: 14, backgroundColor: 'rgba(255,255,255,0.15)', transform: 'rotate(45deg)', borderRadius: 2, display: 'flex' }} />

        {/* Large decorative circle — represents the fox glow area */}
        <div
          style={{
            position: 'absolute',
            right: -120,
            bottom: -120,
            width: 640,
            height: 640,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 50%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Top badge */}
        <div
          style={{
            position: 'absolute',
            top: 48,
            left: 72,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: 999,
            padding: '10px 22px',
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'white', display: 'flex' }} />
          <span style={{ color: 'white', fontSize: 18, fontFamily: 'sans-serif', fontWeight: 500, letterSpacing: 0.5 }}>
            Louisiana Wildlife Rehabilitation
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            position: 'absolute',
            left: 72,
            top: 118,
            display: 'flex',
            flexDirection: 'column',
            lineHeight: 0.9,
          }}
        >
          <span
            style={{
              fontSize: 200,
              fontWeight: 900,
              color: 'white',
              fontFamily: 'Georgia, serif',
              letterSpacing: -4,
              lineHeight: 1,
              display: 'flex',
            }}
          >
            GEAUX
          </span>
          <span
            style={{
              fontSize: 200,
              fontWeight: 900,
              color: 'white',
              fontFamily: 'Georgia, serif',
              letterSpacing: -4,
              lineHeight: 0.85,
              display: 'flex',
            }}
          >
            WILD
          </span>
        </div>

        {/* Right side content — sits over the circle glow */}
        <div
          style={{
            position: 'absolute',
            right: 72,
            top: 0,
            bottom: 0,
            width: 340,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 20,
          }}
        >
          {/* Tagline */}
          <p
            style={{
              color: 'rgba(255,255,255,0.92)',
              fontSize: 20,
              fontFamily: 'sans-serif',
              lineHeight: 1.6,
              margin: 0,
              display: 'flex',
            }}
          >
            Giving injured and orphaned native wildlife a second chance through licensed rehabilitation and compassionate care.
          </p>

          {/* Stat cards */}
          <div style={{ display: 'flex', gap: 14 }}>
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: 20,
                padding: '18px 24px',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
              }}
            >
              <span style={{ fontSize: 32, fontWeight: 900, color: '#3B468E', fontFamily: 'sans-serif', display: 'flex' }}>1,500+</span>
              <span style={{ fontSize: 14, color: '#888', fontFamily: 'sans-serif', display: 'flex', marginTop: 2 }}>Animals rescued</span>
            </div>
            <div
              style={{
                backgroundColor: '#3B468E',
                borderRadius: 20,
                padding: '18px 24px',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
              }}
            >
              <span style={{ fontSize: 32, fontWeight: 900, color: 'white', fontFamily: 'sans-serif', display: 'flex' }}>Est. 2021</span>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', fontFamily: 'sans-serif', display: 'flex', marginTop: 2 }}>Serving Louisiana</span>
            </div>
          </div>

          {/* URL */}
          <span
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: 16,
              fontFamily: 'sans-serif',
              display: 'flex',
            }}
          >
            geauxwildrehab.org
          </span>
        </div>

        {/* Bottom wavy divider suggestion — a soft white strip */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: 'rgba(255,255,255,0.25)',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  )
}
