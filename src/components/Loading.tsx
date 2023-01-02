import Lottie from "lottie-react"
import loading from "../../public/animation/loading.json"
import Image from "next/image"
import styles from './Loading.module.css'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  
  return (
    <div className="h-screen w-screen bg-orange-600 sticky top-0 left-0">
      <div className=' h-full flex flex-col items-center justify-center text-gray-800 text-4xl gap-3'>
        <Image className="text-white" alt='' src={'/img/logowhite.svg'} width={100} height={50} />
        <Lottie className='w-44' animationData={loading} />
      </div></div>
  )
}
