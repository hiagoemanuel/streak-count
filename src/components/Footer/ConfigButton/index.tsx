'use client'

import Link from 'next/link'
import { setCookie } from 'nookies'
import { useState } from 'react'

import GearIcon from '@/svgs/gear.svg'
import ResetIcon from '@/svgs/reset.svg'
import DarkIcon from '@/svgs/dark-mode.svg'
import LightIcon from '@/svgs/light-mode.svg'
import LogoutIcon from '@/svgs/log-out.svg'
import TrashIcon from '@/svgs/trash.svg'

export default function ConfigButton() {
  const [handlerConfigs, setHandlerConfig] = useState<boolean>(false)
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')

  const handlerTheme = () => {
    const htmlDOM = document.getElementsByTagName('html')[0]

    if (currentTheme === 'dark') {
      htmlDOM.classList.remove('dark')
      setCookie(null, 'USER_THEME', 'light')
      setCurrentTheme('light')
    } else {
      htmlDOM.classList.add('dark')
      setCookie(null, 'USER_THEME', 'dark')
      setCurrentTheme('dark')
    }
  }

  return (
    <div className="w-[4.688rem] h-[4.688rem] rounded-full z-10 relative bg-light-200 dark:bg-dark-200">
      <button
        className="rounded-full w-full h-full flex justify-center items-center relative overflow-hidden bg-[inherit]"
        onClick={() => setHandlerConfig((p) => !p)}
      >
        <GearIcon
          className={`${handlerConfigs ? '-rotate-180' : ''} transition-transform duration-700`}
        />
        <span
          className={`${handlerConfigs ? 'translate-x-0 translate-y-0' : 'translate-x-20 -translate-y-20'} transition-transform -rotate-45 w-16 h-2 border-2 border-light-200 dark:border-dark-200 bg-orange  rounded-full z-10 absolute`}
        />
      </button>
      <div
        className={`${handlerConfigs ? 'scale-y-100' : 'scale-y-0'} transition-transform origin-bottom w-full p-4 pb-12 rounded-t-full flex flex-col gap-6 absolute bottom-9 -z-10 overflow-x-hidden bg-light-200 dark:bg-dark-200`}
      >
        <Link href="/logout">
          <LogoutIcon />
        </Link>
        <Link href="/delete-streak">
          <TrashIcon />
        </Link>
        <Link href="/reset-streak">
          <ResetIcon />
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
