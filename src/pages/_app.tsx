import { Josefin_Sans } from '@next/font/google'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

const josefin = Josefin_Sans({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${josefin.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
