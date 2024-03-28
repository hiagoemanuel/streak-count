'use client'

import { AuthContext } from '@/contexts/AuthContext'
import Link from 'next/link'
import { type FormEvent, createRef, useState, useContext } from 'react'

export default function Login() {
  const formRef = createRef<HTMLFormElement>()
  const [formErr, setFormErr] = useState<{ wasErr: boolean; msg: string }>({
    wasErr: false,
    msg: '',
  })
  const { login } = useContext(AuthContext)

  const handlerLogin = async (e: FormEvent) => {
    e.preventDefault()
    const formData = new FormData(formRef.current ?? undefined)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const dontForget = formData.get('forget-me') as string

    console.log(email, password, dontForget)

    try {
      await login({ email, password, dontForget })
    } catch (err) {
      setFormErr({ wasErr: true, msg: 'incorrect email or password' })
    }
  }

  return (
    <div className="h-full flex justify-center items-center">
      <form
        className="w-80 py-12 px-7 rounded-3xl bg-light-200 dark:bg-dark-200"
        method="POST"
        onSubmit={handlerLogin}
        ref={formRef}
      >
        <div className="text-center mb-1">
          <h1 className="mb-1">Login</h1>
          <div>
            <p className={`${formErr.wasErr ? 'visible' : 'invisible'} text-xs text-error`}>
              {formErr.msg}, <br /> try again
            </p>
          </div>
        </div>
        <div className="mb-6 flex flex-col gap-5">
          <input
            className="text-input-form w-full px-2"
            type="text"
            name="email"
            placeholder="email"
          />
          <div className="flex justify-between flex-wrap gap-2">
            <input
              className="text-input-form w-full px-2"
              type="password"
              name="password"
              placeholder="password"
            />
            <label
              className="w-fit flex items-center gap-1 text-orange hover:cursor-pointer hover:underline"
              htmlFor="forget-me"
            >
              <input
                className="w-3 h-3 border-2 border-solid border-orange rounded-sm appearance-none outline-none transition-colors relative hover:cursor-pointer checked:bg-orange checked:before:content-[''] checked:before:absolute checked:before:bottom-[1px] checked:before:left-[1px] checked:before:w-1.5 checked:before:h-2 checked:before:border-2 checked:before:border-solid checked:before:border-light-200 dark:checked:before:border-dark-200 checked:before:border-t-0 checked:before:border-l-0 checked:before:rotate-45"
                type="checkbox"
                name="forget-me"
                id="forget-me"
              />
              <span className="text-xs">dont&#39;t forget me</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <input
            className="w-full p-2 rounded-2xl cursor-pointer text-center text-xl bg-orange"
            type="submit"
            value="Login"
          />
          <Link
            className="w-full p-2 rounded-2xl cursor-pointer text-center text-xl bg-orange"
            href="/signup"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  )
}
