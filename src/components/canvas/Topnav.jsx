import Idlelogo from "https://framer.com/m/idlelogo-TKFx.js@kofpiXmnXsVOMD84aYmV";
import Link from "next/link";

export default function Topnav() {
  return (
    <div className='flex flex-col gap-0'>
      <div className='w-full h-max z-10 fixed top-0 left-0 opacity-20 md:block hidden justify-center'>
        <h2 className='flex flex-row p-2 mx-auto text-white text-xs self-center items-center justify-center'>
          psstt, try drag around and zoom out your browser ;D
        </h2>
      </div>
      <div className=' h-max w-full z-10 flex flex-row fixed top-0 left-0 items-center justify-between py-5 px-10 text-white'>
        <Link href='/'>
          <Idlelogo />
        </Link>
        <p className=' text-xl relative w-max one transition-all transition-duration:300ms hover:underline '>
          <Link href='/About'>say hi!</Link>
          <span className='absolute -bottom-1 right-0 w-0 transition-all h-1 bg-white'></span>
        </p>
      </div>
    </div>
  )
}
