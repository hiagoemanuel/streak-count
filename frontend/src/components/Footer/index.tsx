'use client'

import Link from 'next/link'
import ConfigButton from './ConfigButton'
import { Interrogation } from '../Svgs/Interrogation'
import { useContext } from 'react'
import { ModalContext } from '@/contexts/ModalContext'

export default function Footer({ streakRoute }: { streakRoute?: string }) {
  const { openModal } = useContext(ModalContext)
  return (
    <footer className="flex justify-between items-end gap-2 flex-wrap">
      <div>
        <div
          className="w-20 h-20 flex justify-center items-center rounded-full cursor-pointer bg-light-200 dark:bg-dark-200"
          onClick={() => {
            openModal('help')
          }}
        >
          <Interrogation />
        </div>
      </div>
      <h4 className="order-1 mx-auto text-[.875rem] xs:text-lg min-[509px]:order-none">
        developed by{' '}
        <Link className="text-orange" href="https://github.com/hiagoemanuel" target="_blanck">
          {'<'}hiago emanuel{'>'}
        </Link>
      </h4>
      <ConfigButton streakRoute={streakRoute} />
    </footer>
  )
}
