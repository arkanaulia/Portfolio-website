import Head from 'next/head'
import React, { Suspense } from 'react'
// A Smart Component from Framer
// import Landing from '../components/canvas/Landing'
import Topnav from '../components/canvas/Topnav'
import Botnav from '../components/canvas/Botnav'
import Loading from '@/components/Loading'
import Landing from '../components/canvas/Landing'
import useRouter from 'next/router'

export default function index() {

  return (
    <>
      <Head>
        <title>arkanaulia</title>
        <meta name='description' content='Modules' />
        <link rel='icon' href='/icons/favicon.ico' />
      </Head>

      <div className='flex flex-col'>
        <Topnav />

        <Landing />

        <Botnav />
      </div>
    </>
  )
}
