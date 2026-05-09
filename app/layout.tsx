import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Camille Hoy',
  description:
    'Research and insights strategist. Turning curiosity about people into research that organizations can actually act on.',
  openGraph: {
    title: 'Camille Hoy',
    description: 'Research and Insights Strategist',
    url: 'https://camillehoy.com',
    siteName: 'Camille Hoy',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
