import { Aldrich } from 'next/font/google'
import type { Metadata } from 'next'

import ThemeProvider from '@/contexts/theme'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import '@/styles/global.css'

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
      <html
        lang="en"
        className="bg-light-100 text-dark-100 dark:bg-dark-100 dark:text-light-100"
      >
        <body className={aldrich.className}>
          <main className="h-svh p-7 flex flex-col justify-between">
            <Header />
            {props.children}
            <Footer />
          </main>
          {props.modal}
        </body>
      </html>
    </ThemeProvider>
  )
}
