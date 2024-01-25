import { Aldrich } from 'next/font/google'
import type { Metadata } from 'next'

import ThemeProvider from '@/contexts/theme'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import '@/styles/global.css'
import { RootLayoutContainer } from './style'

const aldrich = Aldrich({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Streak Count',
  description: 'developed by <hiago emanuel>'
}

export default function RootLayout(props: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={aldrich.className}>
          <RootLayoutContainer>
            <Header />
            {props.children}
            <Footer />
          </RootLayoutContainer>
          {props.modal}
        </body>
      </html>
    </ThemeProvider>
  )
}
