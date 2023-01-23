import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import bg from '../assets/img/bg1.png'
import hoodie from '../assets/img/hoodie.png'
import mug from '../assets/img/mug.png'
import tshirt from '../assets/img/tshirt.png'
import construction from '../assets/img/Under-Construction-Banner.jpg'

const Home: NextPage = () => {
  const AnimatedStartBtn = ({
    title,
    src,
    alt,
  }: {
    title: string
    src: StaticImageData
    alt: string
  }) => {
    return (
      <motion.button
        className='relative'
        initial={{
          opacity: 0.7,
        }}
        whileHover={{
          scale: 1.2,
          opacity: 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <Image src={src} alt={alt} />
        <small className='absolute bottom-2 right-5 text-2xl text-white'>{title}</small>
      </motion.button>
    )
  }

  return (
    <div className='flex flex-col'>
      <Head>
        <title>Tshirt Designer</title>
        <meta name='description' content='Design your creativity' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <header className='fixed top-1/3 right-0 left-0 z-20 flex justify-center'>
        <Image src={construction} alt='website under construction' height={150} className='' />
      </header>

      <header className='flex h-12 w-full justify-center bg-black font-semibold text-white'>
        <div style={{ minWidth: '1200px' }} className='flex items-center justify-between'>
          <Link href='/' className='text-xl'>
            PDA-TEECRAFT
          </Link>
          <div className='flex gap-1'>
            {/*Red Btn*/}
            <button className='rounded-md bg-red py-2 px-3'>Start Creating</button>
            {/*Black Btn*/}
            <button className='rounded-md bg-black p-2 py-2 px-3 text-white'>Login</button>
          </div>
        </div>
      </header>

      <main
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
        className='relative flex min-h-screen flex-col items-center justify-center bg-white bg-center bg-no-repeat text-white'
      >
        <div className='absolute inset-0 bg-black opacity-50' />
        <p className='z-10 text-5xl'>Design your creativity</p>
        <p style={{ maxWidth: '975px' }} className='z-10 text-center text-lg'>
          Unleash your creativity with our state-of-the-art tshirt design tool. Our user-friendly
          interface allows you to effortlessly customize your own unique designs, featuring a wide
          range of colors, fonts, and graphics.
        </p>
        <button className='z-10 mt-10 rounded-md bg-white py-2 px-3 text-black'>
          Start Creating
        </button>
      </main>

      <article className='flex flex-col pb-10'>
        <h1 className='py-10 text-center text-5xl'>Start Creating</h1>
        <div className='flex justify-between self-center' style={{ minWidth: '1200px' }}>
          <AnimatedStartBtn src={tshirt} alt='tshirt start btn' title='Tshirt' />
          <AnimatedStartBtn src={hoodie} alt='hoodie start btn' title='Hoodie' />
          <AnimatedStartBtn src={mug} alt='mug start btn' title='Mug' />
        </div>
      </article>
    </div>
  )
}

export default Home
