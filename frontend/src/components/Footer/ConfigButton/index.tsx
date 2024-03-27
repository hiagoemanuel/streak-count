'use client'

import Link from 'next/link'
import { parseCookies, setCookie } from 'nookies'
import { useEffect, useState } from 'react'

import { Gear } from '@/components/Svgs/Gear'
import { LogOut } from '@/components/Svgs/LogOut'
import { Trash } from '@/components/Svgs/Trash'
import { Reset } from '@/components/Svgs/Reset'
import { DarkIcon } from '@/components/Svgs/DarkIcon'
import { LightIcon } from '@/components/Svgs/LightIcon'

export default function ConfigButton() {
  const [handlerConfigs, setHandlerConfig] = useState<boolean>(false)
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>()

  useEffect(() => {
    const { USER_THEME } = parseCookies()
    if (USER_THEME === 'dark') {
      setCurrentTheme('dark')
    } else {
      setCurrentTheme('light')
    }
  }, [])

  const handlerTheme = () => {
    const htmlDOM = document.getElementsByTagName('html')[0]
    if (currentTheme === 'dark') {
      htmlDOM.classList.remove('dark')
      setCookie(null, 'USER_THEME', 'light', { maxAge: 30 * 24 * 60 * 60 }) // 30d
      setCurrentTheme('light')
    } else {
      htmlDOM.classList.add('dark')
      setCookie(null, 'USER_THEME', 'dark')
      setCurrentTheme('dark')
    }
  }

  return (
    <div className="w-20 h-20 rounded-full z-10 relative bg-light-200 dark:bg-dark-200">
      <button
        className="rounded-full w-full h-full flex justify-center items-center relative overflow-hidden bg-[inherit]"
        onClick={() => {
          setHandlerConfig((p) => !p)
        }}
      >
        <Gear
          className={`${handlerConfigs ? '-rotate-180' : ''} transition-transform duration-700`}
        />
        <span
          className={`${handlerConfigs ? 'translate-x-0 translate-y-0' : 'translate-x-20 -translate-y-20'} transition-transform -rotate-45 w-16 h-2 border-2 border-light-200 dark:border-dark-200 bg-orange  rounded-full z-10 absolute`}
        />
      </button>
      <div
        className={`${handlerConfigs ? 'scale-y-100' : 'scale-y-0'} transition-transform origin-bottom w-full p-5 pb-12 rounded-t-full flex flex-col gap-6 absolute bottom-9 -z-10 overflow-x-hidden bg-light-200 dark:bg-dark-200`}
      >
        <Link href="/logout">
          <LogOut />
        </Link>
        <Link href="/delete-streak">
          <Trash />
        </Link>
        <Link href="/reset-streak">
          <Reset />
        </Link>
        <button
          className={`${currentTheme === 'light' ? '-translate-x-24' : ''} transition-transform w-max flex gap-14 overflow-hidden`}
        >
          <DarkIcon onClick={handlerTheme} />
          <LightIcon onClick={handlerTheme} />
        </button>
      </div>
    </div>
  )
}
