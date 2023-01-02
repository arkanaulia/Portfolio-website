import Head from 'next/head'
import App from '@/components/ExpPage/App'
import Link from 'next/link'
import Idlelogo from 'https://framer.com/m/idlelogo-TKFx.js@kofpiXmnXsVOMD84aYmV'
import {BsArrowUpRight} from 'react-icons/bs'

export default function experience() {
  return (
    <>
      <Head>
        <title>arkanaulia - experience</title>
        <meta name='description' content='Modules' />
        <link rel='icon' href='/icons/favicon.ico' />
      </Head>
      <div className='left-0 md:p-10 p-5 fixed z-30 mix-blend-exclusion'>
        <Link href='/'>
          <Idlelogo />
        </Link>
      </div>
      <section className='md:text-md text-sm fixed text-justify md:w-max w-full h-max bottom-0 md:right-0 z-30  md:px-10 md:self-end m-1 md:mb-10 text-white'>
        <div className='bg-zinc-900 flex gap-2 flex-col w-full md:w-max p-3 rounded-xl bg-opacity-20 backdrop-blur-md text-opacity-100 border-opacity-10 border-solid border-2 border-slate-50'>
          <p className=''>Hi! get to know me more!</p>

          <div className='bg-zinc-900 items-center transition-all transition-duration: 300ms; hover:bg-gray-800  justify-center flex px-2 py-1 md:px-5 md:py-2 w-full rounded-lg bg-opacity-20 backdrop-blur-md text-opacity-100 border-opacity-10 border-solid border-2 border-slate-50'>
            <Link className='w-full' href={'/About'}>
              <p className='text-sm md:text-base w-full'>Go to my bio</p>
            </Link>
            <BsArrowUpRight className='text-sm' />
          </div>
        </div>
      </section>
      <div className='bg-gray-800 w-full h-full overflow-hidden'>
        <App />
      </div>
    </>
  )
}
