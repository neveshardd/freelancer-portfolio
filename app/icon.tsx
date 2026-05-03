import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
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
          background: 'transparent',
        }}
      >
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#00D28E',
            transform: 'rotate(45deg)',
            borderRadius: '4px',
            boxShadow: '0 0 10px rgba(0,210,142,0.5)'
          }}
        />
      </div>
    ),
    { ...size }
  )
}
