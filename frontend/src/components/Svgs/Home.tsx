import { type SVGProps } from 'react'

export const Home = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" {...props}>
    <path
      className="fill-orange"
      d="M22.816.9A4.789 4.789 0 0 0 20 0a4.789 4.789 0 0 0-2.816.9l-15.5 11.305c-.526.384-.95.87-1.241 1.422A3.787 3.787 0 0 0 0 15.397v20.511c0 1.086.474 2.126 1.318 2.894C2.162 39.569 3.307 40 4.5 40h5c1.194 0 2.338-.431 3.182-1.198.844-.768 1.318-1.808 1.318-2.894v-10c0-1.256 1.12-2.274 2.5-2.274h7c1.38 0 2.5 1.018 2.5 2.273v10.001c0 1.086.474 2.126 1.318 2.894.844.767 1.988 1.198 3.182 1.198h5c1.194 0 2.338-.431 3.182-1.198.844-.768 1.318-1.808 1.318-2.894V15.397c0-.613-.151-1.218-.443-1.77a4.183 4.183 0 0 0-1.241-1.422L22.816.9Z"
    />
  </svg>
)
