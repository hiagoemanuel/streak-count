import Link from 'next/link'

export default function Signup() {
  return (
    <div className="h-full flex justify-center items-center">
      <form className="w-80 py-12 px-7 rounded-3xl bg-light-200 dark:bg-dark-200" action="/">
        <div className="text-center mb-1">
          <h1>Sign Up</h1>
          <div>
            <p className="text-xs text-error">this email is already in use,</p>
            <p className="text-xs text-error">try again</p>
          </div>
        </div>
        <div className="mb-6 flex flex-col gap-5">
          <input
            className="text-input-form w-full py-3 px-2"
            type="text"
            name="name"
            placeholder="name"
          />
          <div className="flex justify-between flex-wrap gap-1">
            <input
              className="text-input-form w-full py-3 px-2"
              type="password"
              name="password"
              placeholder="password"
            />
            <label
              className="w-fit flex items-center gap-1 text-orange text-xs hover:underline"
              htmlFor="forget-me"
            >
              <input
                className="w-3 h-3 border-2 border-solid border-orange rounded-sm appearance-none outline-none transition-colors relative hover:cursor-pointer checked:bg-orange checked:before:content-[''] checked:before:absolute checked:before:bottom-[1px] checked:before:left-[1px] checked:before:w-1.5 checked:before:h-2 checked:before:border-2 checked:before:border-solid checked:before:border-light-200 dark:checked:before:border-dark-200 checked:before:border-t-0 checked:before:border-l-0 checked:before:rotate-45"
                type="checkbox"
                id="forget-me"
              />
              <span className="cursor-pointer">dont&#39;t forget me</span>
            </label>
            <Link className="text-orange text-xs hover:underline cursor-pointer" href="/login">
              I have an account!
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <input
            className="w-full p-2 rounded-2xl cursor-pointer text-xl bg-orange"
            type="submit"
            value="Sign Up"
          />
        </div>
      </form>
    </div>
  )
}
