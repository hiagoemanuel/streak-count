'use client'

import { ModalContext } from '@/contexts/ModalContext'
import type ModalProps from '@/types/global'
import { useContext } from 'react'

export default function Modal({ children, title, inputs, modalId }: ModalProps) {
  const { isModalOpen, closeModal } = useContext(ModalContext)

  if (isModalOpen(modalId)) {
    return (
      <div className="w-svw h-svh flex justify-center items-center absolute top-0 left-0 z-40 bg-[#00000010]">
        <div className="w-216 p-5 rounded-2xl m-1 flex flex-col items-center gap-7 bg-light-200 dark:bg-dark-200 sm:m-7">
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">{title}</h1>
          <div className="w-full flex gap-7 flex-wrap justify-center">
            {children}
            <input
              className={`${inputs.submit.color === 'red' ? 'bg-error' : 'bg-orange'} py-2 px-5 rounded-lg cursor-pointer`}
              type="submit"
              value={inputs.submit.value}
              onClick={inputs.submit.event}
            />
            <div
              className={`${inputs.refuse.color === 'orange' ? 'bg-orange' : 'bg-error'} py-2 px-5 rounded-lg cursor-pointer`}
              onClick={() => {
                closeModal(modalId)
              }}
            >
              {inputs.refuse.value}
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}
