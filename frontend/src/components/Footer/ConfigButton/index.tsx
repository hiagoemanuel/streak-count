'use client'

import { useContext, useState } from 'react'

import { Gear } from '@/components/Svgs/Gear'
import { LogOut } from '@/components/Svgs/LogOut'
import { Trash } from '@/components/Svgs/Trash'
import { Reset } from '@/components/Svgs/Reset'
import ThemeButton from './ThemeButton'
import { ModalContext } from '@/contexts/ModalContext'

export default function ConfigButton({ streakRoute }: { streakRoute?: string }) {
  const [handlerConfigs, setHandlerConfig] = useState<boolean>(false)
  const { openModal } = useContext(ModalContext)

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
        {streakRoute ? (
          <>
            <div
              className="cursor-pointer"
              onClick={() => {
                openModal('logout')
              }}
            >
              <LogOut />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                openModal('delete-streak')
              }}
            >
              <Trash />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                openModal('reset-streak')
              }}
            >
              <Reset />
            </div>
            <ThemeButton propClass="py-0" />
          </>
        ) : (
          <>
            <div
              className="cursor-pointer"
              onClick={() => {
                openModal('logout')
              }}
            >
              <LogOut />
            </div>
            <ThemeButton propClass="py-0" />
          </>
        )}
      </div>
    </div>
  )
}
