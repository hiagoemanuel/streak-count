import { type SVGProps } from 'react'

export const EmojiAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <path className="fill-light-100 dark:fill-dark-100" d="M0 7h15v1.5H0z" />
    <path className="fill-light-100 dark:fill-dark-100" d="M7 15V0h1.5v15z" />
  </svg>
)
