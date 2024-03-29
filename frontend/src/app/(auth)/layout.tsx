import ThemeButton from '@/components/Footer/ConfigButton/ThemeButton'
import { type ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <div className="w-full flex justify-end">
        <ThemeButton />
      </div>
    </>
  )
}
