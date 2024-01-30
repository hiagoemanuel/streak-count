'use client'

import Link from 'next/link'

import InterrogationIcon from '@/svgs/interrogation.svg'
import GearIcon from '@/svgs/gear.svg'
import ResetIcon from '@/svgs/reset.svg'
import DarkIcon from '@/svgs/dark-mode.svg'
import LightIcon from '@/svgs/light-mode.svg'
import LogoutIcon from '@/svgs/log-out.svg'
import TrashIcon from '@/svgs/trash.svg'

import { useContext, useState } from 'react'
import * as S from './style'
import { ThemeContext, themes } from '@/contexts/theme'

export default function Footer() {
  const [handlerConfigs, setHandlerConfig] = useState<boolean>(false)
  const { theme, setTheme } = useContext(ThemeContext)
  const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>(() => {
    return themes.dark === theme ? 'dark' : 'light'
  })

  const handlerTheme = () => {
    if (currentTheme === 'dark') {
      setTheme(themes.light)
      setCurrentTheme('light')
      localStorage.setItem('current-theme', 'light')
    } else {
      setTheme(themes.dark)
      setCurrentTheme('dark')
      localStorage.setItem('current-theme', 'dark')
    }
  }

  return (
    <S.Footer>
      <S.HelpButton>
        <Link href="/help">
          <InterrogationIcon />
        </Link>
      </S.HelpButton>
      <S.Credits>
        developed by{' '}
        <Link href="https://github.com/hiagoemanuel" target="_blanck">
          {'<'}hiago emanuel{'>'}
        </Link>
      </S.Credits>
      <S.Configs>
        <S.ConfigButton
          onClick={() => setHandlerConfig((p) => !p)}
          $isOpen={handlerConfigs}
        >
          <GearIcon className={handlerConfigs ? 'is-open' : ''} />
        </S.ConfigButton>
        <S.Settings $isOpen={handlerConfigs}>
          <Link href="/logout">
            <LogoutIcon />
          </Link>
          <Link href="/delete-streak">
            <TrashIcon />
          </Link>
          <Link href="/reset-streak">
            <ResetIcon />
          </Link>
          <S.SwitchTheme $darkOrLight={currentTheme}>
            <DarkIcon onClick={handlerTheme} />
            <LightIcon onClick={handlerTheme} />
          </S.SwitchTheme>
        </S.Settings>
      </S.Configs>
    </S.Footer>
  )
}
