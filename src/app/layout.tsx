import type { Metadata } from 'next'
import { Aldrich } from 'next/font/google'
import './globals.css'

const aldrich = Aldrich({
  subsets: ['latin'],
  weight: ['400']
})

export const metadata: Metadata = {
  title: 'Streak Count',
  description: 'developed by <hiago emanuel>'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={aldrich.className}>{children}</body>
    </html>
  )
}
