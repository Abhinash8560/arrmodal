"use-client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ReduxProvider from './redux/provider/ReduxProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Webinar',
  description: 'Medical Mentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ReduxProvider>
      <body className={inter.className}>{children}</body>
      </ReduxProvider>
    </html>
  )
}
