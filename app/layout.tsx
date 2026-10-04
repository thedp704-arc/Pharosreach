import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { Grain } from '@/components/grain'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-serif' })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pharosreach.com'),
  title: {
    default: 'Pharos Reach | Websites & Business Systems',
    template: '%s | Pharos Reach',
  },
  description:
    'Pharos Reach builds high-trust websites, CRM infrastructure, automation, and digital systems for ambitious businesses.',
  keywords: [
    'web design',
    'web development',
    'CRM setup',
    'business automation',
    'e-commerce development',
    'digital systems',
    'Pharos Reach',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pharos Reach | Websites & Business Systems',
    description:
      'High-trust websites and practical digital systems that help businesses turn attention into enquiries and growth.',
    url: 'https://www.pharosreach.com',
    siteName: 'Pharos Reach',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharos Reach | Websites & Business Systems',
    description:
      'High-trust websites and practical digital systems for ambitious businesses.',
  },
  icons: {
    icon: '/pharos-logo.png',
    apple: '/pharos-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Grain />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Toaster />
      </body>
    </html>
  )
}
