import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  const logo = readFileSync(join(process.cwd(), 'public', 'logo-juntox-mark.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

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
            'radial-gradient(circle at 25% 20%, rgba(24,95,165,0.25), transparent 50%), radial-gradient(circle at 80% 70%, rgba(239,159,39,0.18), transparent 50%)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={140} height={140} style={{ objectFit: 'contain', marginBottom: 28 }} alt="" />
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
