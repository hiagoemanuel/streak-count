'use client'

import Link from 'next/link'

import InterrogationIcon from '@/svgs/interrogation.svg'
import GearIcon from '@/svgs/gear.svg'
import ResetIcon from '@/svgs/reset.svg'
import DarkIcon from '@/svgs/dark-mode.svg'
import LightIcon from '@/svgs/light-mode.svg'
import LogoutIcon from '@/svgs/log-out.svg'
import TrashIcon from '@/svgs/trash.svg'

import { useState } from 'react'
import * as S from './style'

export default function Footer() {
  const [handlerConfigs, setHandlerConfig] = useState<boolean>(false)
  const [switchTheme, setSwitchTheme] = useState<boolean>(false)

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
      <S.Configs $isOpen={handlerConfigs}>
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
          <div onClick={() => setSwitchTheme((p) => !p)}>
            {switchTheme ? <DarkIcon /> : <LightIcon />}
          </div>
        </S.Settings>
      </S.Configs>
    </S.Footer>
  )
}
