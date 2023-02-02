import bg from 'assets/img/bg1.png'
import hoodie from 'assets/img/hoodie.png'
import mug from 'assets/img/mug.png'
import tshirt from 'assets/img/tshirt.png'
import breakpoints from 'data/breakpoints'
import { motion } from 'framer-motion'
import useMediaQuery from 'hooks/useMediaQuery'
import type { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { AlertTriangle } from 'react-feather'

const Home: NextPage = () => {
  const breakpoint = useMediaQuery(breakpoints.md)

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
    <>
      <div
        className='flex min-h-screen flex-col bg-cover bg-center backdrop-grayscale'
        style={{
          backgroundImage: `url(${bg.src})`,
          boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.4)',
        }}
      >
        <header className='z-10 bg-black py-2 px-4'>
          <div
            className='flex items-center justify-between'
            style={{
              maxWidth: !breakpoint ? '1200px' : undefined,
              margin: !breakpoint ? 'auto' : undefined,
            }}
          >
            <Link href='/'>
              <h3 className='text-white'>PDA-TEECRAFT</h3>
            </Link>
            <div className='flex gap-2'>
              <button className='rounded-md bg-red py-1 px-2 text-white hover:opacity-90'>
                Start Creating
              </button>
              <button className='rounded-md bg-black py-1 px-2 text-white hover:opacity-90'>
                Login
              </button>
            </div>
          </div>
        </header>

        <div className='border-box z-10 mx-8 mt-10 flex flex-col items-center justify-center rounded-md bg-black/70 p-4 backdrop-blur-sm md:hidden'>
          <AlertTriangle className='w-10 text-orange-500' />
          <h3 className='mt-2 text-center text-white'>
            We can't provide you the designer feature in mobile, but you can still login to see your
            existing designs!
          </h3>
        </div>

        <main className='z-10'>
          <h2 className='mt-20 text-center text-3xl text-white md:mt-36 md:text-5xl'>
            Design your creativity
          </h2>

          <p
            className='mt-20 px-5 text-center text-lg text-white'
            style={{
              maxWidth: !breakpoint ? '975px' : undefined,
              marginLeft: !breakpoint ? 'auto' : undefined,
              marginRight: !breakpoint ? 'auto' : undefined,
            }}
          >
            Unleash your creativity with our state-of-the-art tshirt design tool. Our user-friendly
            interface allows you to effortlessly customize your own unique designs, featuring a wide
            range of colors, fonts, and graphics.
          </p>

          <div className=' mt-10 flex items-center justify-center md:mt-36'>
            <button className='text-md rounded-md bg-white py-1 px-2 hover:opacity-90 '>
              Start Creating
            </button>
          </div>
        </main>
      </div>
      <article className='hidden flex-col pb-10 md:flex'>
        <h1 className='py-10 text-center text-5xl'>Start Creating</h1>
        <div className='flex justify-between self-center' style={{ minWidth: '1200px' }}>
          <AnimatedStartBtn src={tshirt} alt='tshirt start btn' title='Tshirt' />
          <AnimatedStartBtn src={hoodie} alt='hoodie start btn' title='Hoodie' />
          <AnimatedStartBtn src={mug} alt='mug start btn' title='Mug' />
        </div>
      </article>
    </>
  )
}

export default Home
