// import Spline from "@splinetool/react-spline";
import React, { Suspense } from 'react'
import Loading from '../Loading'
import Spline from '@splinetool/react-spline'



export default function Landing() {
  return (
    <div className='w-full h-full fixed'>
      <Spline scene='https://prod.spline.design/baG5ZVH4xAfQ9a0S/scene.splinecode' />
    </div>
  )
}
