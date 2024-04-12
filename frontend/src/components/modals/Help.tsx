'use client'

import { EmojiAdd } from '@/components/Svgs/EmojiAdd'
import { EmojiList } from '@/components/Svgs/EmojiList'
import { EmojiGear } from '@/components/Svgs/EmojiGear'
import { LogOut } from '@/components/Svgs/LogOut'
import { Trash } from '@/components/Svgs/Trash'
import { Reset } from '@/components/Svgs/Reset'
import { PrefferedTheme } from '@/components/Svgs/PrefferedTheme'
import { useContext } from 'react'
import { ModalContext } from '@/contexts/ModalContext'

export default function Help() {
  const { isModalOpen, closeModal } = useContext(ModalContext)

  if (isModalOpen('help')) {
    return (
      <div className="w-full h-svh flex justify-center items-center absolute top-0 left-0 z-50 bg-[#00000015]]">
        <div className="w-100 p-12 rounded-3xl relative bg-light-200 dark:bg-dark-200">
          <header className="relative">
            <h3 className="text-center mb-7 text-orange xs:text-3xl">how to use</h3>
            <div
              className="w-8 h-8 absolute top-0 right-0 flex justify-center items-center rotate-45 cursor-pointer"
              onClick={() => {
                closeModal('help')
              }}
            >
              <span className="w-full h-1 absolute bg-orange rotate-90" />
              <span className="w-full h-1 bg-orange" />
            </div>
          </header>
          <p className="mb-5 text-sm xs:text-base">
            To add a streak count, just press the <EmojiAdd />. If you want to organize your streak
            counts, click on <EmojiList />
          </p>
          <p className="mb-5 text-sm xs:text-base">
            click on the icon <EmojiGear id="reset-style" /> to make your changes
          </p>
          <div className="flex flex-col gap-2">
            <p className="flex items-baseline gap-2">
              <LogOut className="inline-block min-w-fit" path="fill-dark-100 dark:fill-light-100" />
              - log out of account
            </p>
            <p className="flex items-baseline gap-2">
              <Trash className="inline-block min-w-fit" path="fill-dark-100 dark:fill-light-100" />-
              delete your streak count
            </p>
            <p className="flex items-baseline gap-2">
              <Reset
                className="inline-block min-w-fit"
                path="stroke-dark-100 dark:stroke-light-100"
              />
              - reset your steak count
            </p>
            <p className="flex items-baseline gap-2">
              <PrefferedTheme
                className="inline-block w-10"
                path="fill-dark-100 dark:fill-light-100"
              />
              - choose your preferred theme
            </p>
          </div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}
