'use client'

import { useRouter } from 'next/navigation'
import type ModalProps from '@/types/global'

export default function Modal({ children, title, inputs }: ModalProps) {
  const router = useRouter()

  return (
    <div className="w-svw h-svh flex justify-center items-center absolute top-0 left-0 z-40 bg-[#00000010]">
      <form
        className="w-216 p-5 rounded-2xl m-1 flex flex-col items-center gap-7 bg-light-200 dark:bg-dark-200 sm:m-7"
        action="/"
      >
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">{title}</h1>
        <div className="w-full flex gap-7 flex-wrap justify-center">
          {children}
          <input
            className={`${inputs.submit.color === 'red' ? 'bg-error' : 'bg-orange'} py-2 px-5 rounded-lg cursor-pointer`}
            type="submit"
            value={inputs.submit.value}
          />
          <div
            className={`${inputs.refuse.color === 'orange' ? 'bg-orange' : 'bg-error'} py-2 px-5 rounded-lg cursor-pointer`}
            onClick={() => {
              router.back()
            }}
          >
            {inputs.refuse.value}
          </div>
        </div>
      </form>
    </div>
  )
}
