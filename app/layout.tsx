import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: { default: 'RAYMOND NII OTO DARKU Advisory', template: '%s | RNO Advisory' },
  description: 'Independent strategic advisory and development consulting from Accra, Ghana.',
  openGraph: { title: 'RAYMOND NII OTO DARKU Advisory', description: 'Experience That Guides. Insight That Creates Impact.', type: 'website' },
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#10243A' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
