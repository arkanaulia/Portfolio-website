import Lottie from "lottie-react"
import loading from "../../public/animation/loading.json"
import Image from "next/image"

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className='h-screen w-screen bg-white flex flex-col items-center justify-center z-40 text-gray-800 text-4xl gap-3'>
        <Image alt="" src={"/img/logoarkan.svg"} width={100} height={50} />
        <Lottie className="w-44" animationData={loading} />
      </div>
    </>
  )
}
