import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#b91c1c',
          borderRadius: 14,
        }}
      >
        <span style={{ color: '#ffffff', fontSize: 32, fontWeight: 700, letterSpacing: -1 }}>
          JX
        </span>
      </div>
    ),
    { ...size }
  )
}
