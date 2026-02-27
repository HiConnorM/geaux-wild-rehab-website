import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/layout/header'
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
    default: 'Geaux Wild Rehab | Louisiana Native Wildlife Rehabilitation',
    template: '%s | Geaux Wild Rehab',
  },
  description: 'Geaux Wild Rehab is dedicated to the rescue, rehabilitation, and release of injured and orphaned native Louisiana wildlife. Found an animal? Get help now.',
  keywords: ['wildlife rehabilitation', 'Louisiana', 'animal rescue', 'wildlife rescue', 'orphaned animals', 'injured wildlife', 'native wildlife'],
  authors: [{ name: 'Geaux Wild Rehab' }],
  creator: 'Geaux Wild Rehab',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://geauxwildrehab.org',
    siteName: 'Geaux Wild Rehab',
    title: 'Geaux Wild Rehab | Louisiana Native Wildlife Rehabilitation',
    description: 'Dedicated to the rescue, rehabilitation, and release of injured and orphaned native Louisiana wildlife.',
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
    title: 'Geaux Wild Rehab | Louisiana Native Wildlife Rehabilitation',
    description: 'Dedicated to the rescue, rehabilitation, and release of injured and orphaned native Louisiana wildlife.',
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
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <OrganizationSchema />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
