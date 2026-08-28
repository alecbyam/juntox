import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

// 512x512 : suffisant pour la favicon (le navigateur redimensionne) et pour
// l'icône PWA du manifest (app/manifest.ts déclare sizes: '512x512' sur cette
// même route — les deux doivent rester cohérents).
export const size = { width: 512, height: 512 }
export const contentType = 'image/png'

export default function Icon() {
  const logo = readFileSync(join(process.cwd(), 'public', 'logo-juntox-mark.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#185FA5',
          borderRadius: 112,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={368} height={368} style={{ objectFit: 'contain' }} alt="" />
      </div>
    ),
    { ...size }
  )
}
