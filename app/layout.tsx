import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header, MobileHeader } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { OrganizationSchema } from '@/lib/seo'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({ 
  subsets: ["latin"],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Geaux Wild Rehab | Louisiana Wildlife Rehabilitation',
    template: '%s | Geaux Wild Rehab',
  },
  description: 'Geaux Wild Rehab is a 501(c)(3) nonprofit wildlife rehabilitation center based in Hammond, Louisiana, dedicated to giving Louisiana\'s native wildlife a second chance. Licensed by the Louisiana Department of Wildlife and Fisheries.',
  keywords: ['wildlife rehabilitation', 'Louisiana', 'animal rescue', 'wildlife rescue', 'orphaned animals', 'injured wildlife', 'native wildlife', 'Hammond Louisiana', '501c3 nonprofit'],
  authors: [{ name: 'Geaux Wild Rehab' }],
  creator: 'Geaux Wild Rehab',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://geauxwildrehab.org',
    siteName: 'Geaux Wild Rehab',
    title: 'Geaux Wild Rehab | Louisiana Wildlife Rehabilitation',
    description: 'A 501(c)(3) nonprofit dedicated to giving Louisiana\'s native wildlife a second chance. Based in Hammond, Louisiana. Licensed by the Louisiana Department of Wildlife and Fisheries.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Geaux Wild Rehab - Louisiana Wildlife Rehabilitation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geaux Wild Rehab | Louisiana Wildlife Rehabilitation',
    description: 'A 501(c)(3) nonprofit dedicated to giving Louisiana\'s native wildlife a second chance. Based in Hammond, Louisiana.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#14b8a6' },
    { media: '(prefers-color-scheme: dark)', color: '#0d9488' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} bg-background`}>
      <head>
        <OrganizationSchema />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <MobileHeader />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
