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
      {/*TODO: Remove this while done*/}
      {/*<div className='fixed inset-0 flex justify-center items-center z-20'>
        <Image src={construction} alt='website under construction' height={150} className='' />
      </div>
      */}
      <title>Tshirt Designer</title>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
