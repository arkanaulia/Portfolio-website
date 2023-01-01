import styles from './Overlay.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'
import Lottie from 'lottie-react'
import Scroll from '../../../public/animation/scroll.json'

export function Overlay({ scroll }) {
  return (
    <div
      className='h-full w-full absolute top-0 left-0 z-10 overflow-y-auto will-change-transform px-20 flex flex-col gap-80 text-white'
      onScroll={(e) => {
        const scroll01 = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
        scroll.current = scroll01
      }}>
      <section className='h-screen py-0  md:px-40 flex-col flex w-full md:items-start items-center'>
        <header className='md:mt-80 mt-44 mb-2 md:mb-4 relative flex flex-row items-center md:items-start gap-5'>
          <h1 className='font-medium text-3xl md:text-5xl'>
            <strong>Ar·kan </strong>Au·li·a
          </h1>
          <nav className='text-2xl py-3 '>
            <a className=''>/də&apos;zīnər/</a>
          </nav>
        </header>
        <div className='flex flex-col items-center md:w-1/3 gap-3'>
          <p className='md:text-2xl text-justify'>
            A designer focused on fusing eye-pleasing and problem-solving for an improved user experience.
          </p>
          <p className='mt-14'>Scroll down to know more!</p>
          <Lottie className='w-20' animationData={Scroll} />
        </div>
      </section>
      <section className='md:text-2xl text-justify md:px-40 w-max'>
        <div className='w-full bg-zinc-900 p-10 rounded-xl bg-opacity-20 backdrop-blur-md text-opacity-100 border-opacity-10 border-solid border-2 border-slate-50'>
          <p className=''>
            Hi i&apos;m Arkan, i&apos;m a multidiciplinary designer <sub>(i guess)</sub> from Indonesia.
            <br />I am in the third year of my informatics degree program. <br />{' '}
            <sub>(yes i supposedly can programming)</sub>
          </p>
        </div>
        <div className='flex flex-row gap-3'>
          <div className=' w-max bg-zinc-900 mt-3 p-10 rounded-xl bg-opacity-20 backdrop-blur-md text-opacity-100 border-opacity-10 border-solid border-2 border-slate-50 flex flex-col gap-10'>
            <p className='text-md'>My bag of ammo</p>
            <div className='flex flex-row gap-7'>
              <Image alt='figma' src={'/img/figma.svg'} width={35} height={55} />
              <Image alt='figma' src={'/img/blender.svg'} width={65} height={35} />
              <Image alt='figma' src={'/img/ae.svg'} width={55} height={55} />
              <Image alt='figma' src={'/img/ai.svg'} width={55} height={55} />
              <Image alt='figma' src={'/img/ps.svg'} width={55} height={55} />
            </div>
          </div>
          <div className='w-max bg-zinc-900 mt-3 p-10 rounded-xl bg-opacity-20 backdrop-blur-md text-opacity-100 border-opacity-10 border-solid border-2 border-slate-50 flex flex-col gap-10'>
            <p className='text-md'>Tech stack</p>
            <div className='flex flex-row gap-7'>
              <Image alt='figma' src={'/img/Tailwind.svg'} width={55} height={55} />
              <Image alt='figma' src={'/img/spline.png'} width={55} height={55} />
              <Image alt='figma' src={'/img/react.svg'} width={55} height={55} />
              <Image alt='figma' src={'/img/next.svg'} width={55} height={55} />
              <Image alt='figma' src={'/img/three.svg'} width={55} height={55} />
            </div>
          </div>
        </div>
      </section>
      <section className='md:text-2xl text-justify md:px-40 w-max'>
        <div className='flex-col flex bg-zinc-900 w-full p-10 gap-6 rounded-xl bg-opacity-20 backdrop-blur-md text-opacity-100 border-opacity-10 border-solid border-2 border-slate-50'>
          <p className=''>
            you can find me playing games and read manhwa in my free time.
            <br />
            I also like coffee and chit chat, so contact me if you want to <br /> get some coffee together{' '}
            <sub>ekhem ;)</sub>
          </p>
          <div className='flex flex-row self-end gap-1 w-full'>
            <div className='bg-zinc-900 self-end transition-all transition-duration: 300ms; hover:bg-gray-800 w-max px-2 py-2 rounded-lg bg-opacity-20 backdrop-blur-md text-opacity-100 border-opacity-10 border-solid border-2 border-slate-50'>
              <Link href='https://www.instagram.com/arkanaulia' className='' target={'_blank'}>
                <Image alt='figma' src={'/img/ig.svg'} width={25} height={55} />
              </Link>
            </div>
            <div className='bg-zinc-900 self-end transition-all transition-duration: 300ms; hover:bg-gray-800 w-full px-5 py-2 rounded-lg bg-opacity-20 backdrop-blur-md text-opacity-100 border-opacity-10 border-solid border-2 border-slate-50'>
              <Link
                href={'mailto:arkanaulia@gmail.com'}
                className='flex flex-row items-center gap-2 w-full'
                target={'_blank'}>
                <p className='text-base w-full'>Get some coffee with me </p>
                <BsArrowUpRight className='text-sm' />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='md:text-2xl text-justify  md:px-40 self-end mb-44'>
        <div className='bg-zinc-900 flex gap-5 flex-col w-max p-10 rounded-xl bg-opacity-20 backdrop-blur-md text-opacity-100 border-opacity-10 border-solid border-2 border-slate-50'>
          <p className=''>Did you already see my work? Come see it!</p>

          <div className='bg-zinc-900 items-center transition-all transition-duration: 300ms; hover:bg-gray-800 gap-2 justify-center flex px-5 py-2 w-full rounded-lg bg-opacity-20 backdrop-blur-md text-opacity-100 border-opacity-10 border-solid border-2 border-slate-50'>
            <Link className='w-full' href={'/work'}>
              <p className='text-base w-full'>Go to my work</p>
            </Link>
            <BsArrowUpRight className='text-sm' />
          </div>
        </div>
      </section>
    </div>
  )
}
