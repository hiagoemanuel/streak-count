'use client'

import { useRouter } from 'next/navigation'

import EmojiAdd from '@/svgs/emoji-add.svg'
import EmojiList from '@/svgs/emoji-list.svg'
import EmojiGear from '@/svgs/emoji-gear.svg'

import LogoutIcon from '@/svgs/log-out.svg'
import TrashIcon from '@/svgs/trash.svg'
import ResetIcon from '@/svgs/reset.svg'
import ThemeIcon from '@/svgs/preferred-theme.svg'

import { Container } from '../style'
import * as S from './style'

export default function Help() {
  const router = useRouter()

  return (
    <Container>
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
            <LogoutIcon /> - log out of account
          </S.IconDescription>
          <S.IconDescription>
            <TrashIcon /> - delete your streak count
          </S.IconDescription>
          <S.IconDescription>
            <ResetIcon id="reset-icon" /> - reset your steak count
          </S.IconDescription>
          <S.IconDescription>
            <ThemeIcon /> - choose your preferred theme
          </S.IconDescription>
        </S.IconsDetails>
      </S.HelpModal>
    </Container>
  )
}
