import App from '../components/AboutPage/App'
import Idlelogo from 'https://framer.com/m/idlelogo-TKFx.js@kofpiXmnXsVOMD84aYmV'
import Link from 'next/link'
import { Suspense } from 'react'
import Loading from '@/components/Loading'

import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>arkanaulia - About</title>
        <meta name='description' content='Modules' />
        <link rel='icon' href='/icons/favicon.ico' />
      </Head>

        <App />
   
    </>
  )
}
