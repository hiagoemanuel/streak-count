'use client'

import { DarkIcon } from '@/components/Svgs/DarkIcon'
import { LightIcon } from '@/components/Svgs/LightIcon'
import { parseCookies, setCookie } from 'nookies'
import { useEffect, useState } from 'react'

export default function ThemeButton({ propClass }: { propClass?: string }) {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>()

  useEffect(() => {
    const { 'streak-count.theme': theme } = parseCookies()
    theme === 'dark' ? setCurrentTheme('dark') : setCurrentTheme('light')
  }, [])

  const handlerTheme = () => {
    const htmlDOM = document.getElementsByTagName('html')[0]
    if (currentTheme === 'dark') {
      htmlDOM.classList.remove('dark')
      setCookie(undefined, 'streak-count.theme', 'light', { maxAge: 30 * 24 * 60 * 60 }) // 30d
      setCurrentTheme('light')
    } else {
      htmlDOM.classList.add('dark')
      setCookie(null, 'streak-count.theme', 'dark', { maxAge: 30 * 24 * 60 * 60 }) // 30d
      setCurrentTheme('dark')
    }
  }

  return (
    <div
      className={`w-20 p-5 self-center rounded-full overflow-x-hidden bg-light-200 dark:bg-dark-200 cursor-pointer ${propClass} `}
      onClick={handlerTheme}
    >
      <button
        className={`${currentTheme === 'light' ? '-translate-x-24' : ''} transition transform w-max flex gap-14 overflow`}
      >
        <DarkIcon />
        <LightIcon />
      </button>
    </div>
  )
}
