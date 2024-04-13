'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StreakList from '@/components/StreakList'
import { ModalContext } from '@/contexts/ModalContext'
import { useContext } from 'react'

export default async function Home() {
  const { openModal } = useContext(ModalContext)
  return (
    <>
      <Header />
      <div className="w-10/12 self-center xl:w-216">
        <header className="w-full flex justify-between">
          <div className="w-7 h-6 flex flex-col justify-between cursor-pointer">
            <div className="w-full h-1 bg-orange" />
            <div className="w-full h-1 bg-orange" />
            <div className="w-full h-1 bg-orange" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              openModal('new-streak')
            }}
          >
            <div className="w-7 h-7 flex justify-center items-center relative">
              <div className="w-full h-1 inline-block bg-orange rotate-90 absolute" />
              <div className="w-full h-1 inline-block bg-orange " />
            </div>
          </div>
        </header>
        <div className="h-48 overflow-y-scroll flex flex-col gap-1 scrollbar">
          <StreakList />
        </div>
      </div>
      <Footer />
    </>
  )
}
