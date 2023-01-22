import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import bg from '../assets/img/bg1.png'
import tshirt from '../assets/img/tshirt.png'
import hoodie from '../assets/img/hoodie.png'
import mug from '../assets/img/mug.png'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Tshirt Designer</title>
        <meta name='description' content='Design your creativity' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <header className='flex justify-center bg-black font-semibold h-12 w-full text-white'>
        <div style={{ minWidth: '1200px' }} className='flex justify-between items-center'>
          <div className='text-xl'>PDA-TEECRAFT</div>
          <div className='flex gap-1'>
            {/*Red Btn*/}
            <button className='bg-red py-2 px-3 rounded-md'>Start Creating</button>
            {/*Black Btn*/}
            <button className='bg-black py-2 px-3 text-white p-2 rounded-md'>Login</button>
          </div>
        </div>
      </header>

      <main
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
        className='min-h-screen bg-white bg-center bg-no-repeat flex flex-col items-center justify-center text-white relative'
      >
        <div className='bg-black opacity-50 absolute inset-0' />
        <p className='text-5xl z-10'>Design your creativity</p>
        <p style={{ maxWidth: '975px' }} className='text-center z-10 text-lg'>
          Unleash your creativity with our state-of-the-art tshirt design tool. Our user-friendly
          interface allows you to effortlessly customize your own unique designs, featuring a wide
          range of colors, fonts, and graphics.
        </p>
        <button className='bg-white text-black py-2 px-3 rounded-md z-10 mt-10'>Start Creating</button>
      </main>

      <article className='flex flex-col pb-10'>
        <h1 className='py-10 text-5xl text-center'>Start Creating</h1>
        <div className='flex justify-between self-center relative' style={{ minWidth: '1200px' }}>
          <Image src={tshirt} alt='tshirt guy' className='relative'/>
          <Image src={hoodie} alt='hoodie guy' />
          <Image src={mug} alt='mug' />
        </div>
      </article>
    </div>
  )
}

export default Home
