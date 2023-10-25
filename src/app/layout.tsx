import type { Metadata } from 'next'
import { Aldrich } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import '@/styles/global.css'
import * as S from './style'

const aldrich = Aldrich({
  subsets: ['latin'],
  weight: ['400']
})

export const metadata: Metadata = {
  title: 'Streak Count',
  description: 'developed by <hiago emanuel>'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={aldrich.className}>
        <S.MainContainer>
          <Header />
          {children}
          <Footer />
        </S.MainContainer>
      </body>
    </html>
  )
}
