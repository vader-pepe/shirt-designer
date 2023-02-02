import { Josefin_Sans } from '@next/font/google'
import type { AppProps } from 'next/app'
import Image from 'next/image'

import '../styles/globals.css'

import construction from '../assets/img/Under-Construction-Banner.jpg'

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
      <div className='fixed inset-0 z-20 flex items-center justify-center'>
        <Image src={construction} alt='website under construction' height={150} className='' />
      </div>
      <title>Tshirt Designer</title>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
