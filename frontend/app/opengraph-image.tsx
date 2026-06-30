import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#060608',
          backgroundImage:
            'radial-gradient(circle at 25% 20%, rgba(185,28,28,0.25), transparent 50%), radial-gradient(circle at 80% 70%, rgba(29,78,216,0.18), transparent 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 110,
            height: 110,
            borderRadius: 24,
            background: '#b91c1c',
            marginBottom: 36,
          }}
        >
          <span style={{ color: '#ffffff', fontSize: 56, fontWeight: 700, letterSpacing: -2 }}>
            JX
          </span>
        </div>
        <div style={{ display: 'flex', color: '#ffffff', fontSize: 64, fontWeight: 600, letterSpacing: -1 }}>
          JuntoX SARL
        </div>
        <div style={{ display: 'flex', color: '#a8a29e', fontSize: 28, marginTop: 18 }}>
          Intelligence transformée en impact
        </div>
      </div>
    ),
    { ...size }
  )
}
