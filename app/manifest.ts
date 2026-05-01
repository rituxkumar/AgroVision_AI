import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AgroVision AI',
    short_name: 'AgroVision',
    description: 'Advanced AI-powered agricultural insights and scanning',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#22c55e',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
