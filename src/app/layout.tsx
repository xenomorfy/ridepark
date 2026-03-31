import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import '../index.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RIDEPARK — Прокат мототехники и квадроциклов',
  description: 'RIDEPARK — прокат мотоциклов и квадроциклов. Трассы, обучение, соревнования.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
