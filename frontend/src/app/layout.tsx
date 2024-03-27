import { Aldrich } from 'next/font/google'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import './global.css'

const aldrich = Aldrich({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Streak Count',
  description: 'developed by <hiago emanuel>',
}

export default function RootLayout(props: { children: React.ReactNode; modal: React.ReactNode }) {
  const themeCookie = cookies().get('USER_THEME')

  return (
    <html
      className={`${themeCookie?.value === 'dark' ? 'dark' : ''} bg-light-100 text-dark-100 dark:bg-dark-100 dark:text-light-100`}
      lang="en"
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
  )
}
