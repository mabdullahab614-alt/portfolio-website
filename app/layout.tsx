import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abdullah Javid | AI Developer',
  description: 'Portfolio of Abdullah Javid — AI Developer, ML Engineer, and Game Dev shipping production-ready projects from Lahore, Pakistan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-dark-bg text-white`}>
        {children}
      </body>
    </html>
  )
}
