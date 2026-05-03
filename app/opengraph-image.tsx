import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'José Eugênio - Especialista em Landing Pages'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#040605',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: '#ededed',
          borderBottom: '16px solid #00D28E'
        }}
      >
        <div style={{ display: 'flex', marginBottom: '60px' }}>
          <div
            style={{
               width: '80px',
               height: '80px',
               backgroundColor: '#00D28E',
               transform: 'rotate(45deg)',
               borderRadius: '12px',
               boxShadow: '0 0 40px rgba(0,210,142,0.6)'
            }}
          />
        </div>
        <div style={{ fontSize: 90, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '24px' }}>
          José Eugênio
        </div>
        <div style={{ fontSize: 48, color: '#A1A1AA', fontWeight: 500 }}>
          Especialista em <span style={{ color: '#00D28E', marginLeft: '12px' }}>Landing Pages</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
