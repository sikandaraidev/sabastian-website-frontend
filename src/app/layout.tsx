import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Header } from '@/components/Header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sabastian | Cybersecurity Executive',
  description: 'Engineering Cyber Resilience for Mission-Critical Systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(inter.variable, outfit.variable, "bg-void-black text-white antialiased overflow-x-hidden selection:bg-signal-blue selection:text-white")}>
        <Header />
        {children}
      </body>
    </html>
  )
}
