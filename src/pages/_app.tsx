import { useRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Router from 'next/router'
import '@/styles/index.css'
import Loading from '@/components/Loading'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
})

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 7000)
  }, [])

  return (
    <>
      {loading ? (
        <div id='loading-screen' className='fade-in'>
          <Loading />
        </div>
      ) : (
        <div id='loading-screen' className='fade-out'>
          <Loading />
        </div>
      )}

      <Component {...pageProps} />

      <AnimatedCursor
      // innerSize={10}
      // outerSize={8}
      // color='255, 10, 10'
      // outerAlpha={0.2}
      // innerScale={0.7}
      // outerScale={5}
      // clickables={[
      //   'a',
      //   'input[type="text"]',
      //   'input[type="email"]',
      //   'input[type="number"]',
      //   'input[type="submit"]',
      //   'input[type="image"]',
      //   'label[for]',
      //   'select',
      //   'textarea',
      //   'button',
      //   '.link',
      // ]}
      />
    </>
  )
}

// const start = () => {
//   setLoading(true)
// }
// const end = () => {
//   setLoading(false)
// }  // Router.events.on('routeChangeStart', start)
// Router.events.on('routeChangeComplete', end)
// Router.events.on('routeChangeError', end)

// return () => {

//   Router.events.off('routeChangeStart', start)
//   Router.events.off('routeChangeComplete', end)
//   Router.events.off('routeChangeError', end)
// }
