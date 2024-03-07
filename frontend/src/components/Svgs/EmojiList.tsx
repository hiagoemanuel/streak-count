import { type SVGProps } from 'react'

export const EmojiList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="inline-block"
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <path
      className="fill-dark-100 dark:fill-light-100"
      d="M0 0h15v2H0zM0 6.75h15v2H0zM0 13.5h15v2H0z"
    />
  </svg>
)
