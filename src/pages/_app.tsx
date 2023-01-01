import { useRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Router from 'next/router'
import '@/styles/index.css'
import Loading from '@/components/Loading'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

export default function App({ Component, pageProps = { title: 'index' } }) {
  // const ref = useRef()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const start = () => {
      console.log('START')
      setLoading(true)
    }
    const end = () => {
      console.log('end')
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    // console.log(loading )
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)

    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])
  return (
    <>
      {loading ? <Loading /> : <Component {...pageProps} />}
  
      
    </>
  )
}
