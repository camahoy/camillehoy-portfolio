import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Camille Hoy — Research & Insights Strategist',
  description:
    'Research and insights strategist at the crossroads of data, strategy, and execution. Building systems that turn curiosity into something companies can actually use.',
  openGraph: {
    title: 'Camille Hoy',
    description: 'Research and Insights Strategist',
    url: 'https://camillehoy.com',
    siteName: 'Camille Hoy',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
