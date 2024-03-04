'use client'

import { useRouter } from 'next/navigation'

import { EmojiAdd } from '@/components/Svgs/EmojiAdd'
import { EmojiList } from '@/components/Svgs/EmojiList'
import { EmojiGear } from '@/components/Svgs/EmojiGear'
import { LogOut } from '@/components/Svgs/LogOut'
import { Trash } from '@/components/Svgs/Trash'
import { Reset } from '@/components/Svgs/Reset'
import { PrefferedTheme } from '@/components/Svgs/PrefferedTheme'

import * as S from './style'

export default function Help() {
  const router = useRouter()

  return (
    <S.Container>
      <S.HelpModal>
        <S.HeaderModal>
          <h1>how to use</h1>
          <S.CloseModal onClick={() => router.back()} />
        </S.HeaderModal>
        <S.Description>
          To add a streak count, just press the <EmojiAdd />. If you want to
          organize your streak counts, click on <EmojiList />
        </S.Description>
        <S.Description>
          click on the icon <EmojiGear id="reset-style" /> to make your changes
        </S.Description>
        <S.IconsDetails>
          <S.IconDescription>
            <LogOut /> - log out of account
          </S.IconDescription>
          <S.IconDescription>
            <Trash /> - delete your streak count
          </S.IconDescription>
          <S.IconDescription>
            <Reset id="reset-icon" /> - reset your steak count
          </S.IconDescription>
          <S.IconDescription>
            <PrefferedTheme /> - choose your preferred theme
          </S.IconDescription>
        </S.IconsDetails>
      </S.HelpModal>
    </S.Container>
  )
}
