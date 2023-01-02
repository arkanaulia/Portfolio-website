import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Overlay } from "./Overlay";
import Link from "next/link";
import Idlelogo from 'https://framer.com/m/idlelogo-TKFx.js@kofpiXmnXsVOMD84aYmV'

export default function App() {
  const scroll = useRef(0);
  return (
    <>
      <div className='left-0 p-10 fixed z-30'>
        <Link href='/'>
          <Idlelogo />
        </Link>
      </div>
      <Canvas shadows flat linear>
        <Suspense fallback={null}>
          <Scene scroll={scroll} />
        </Suspense>
      </Canvas>
      <Overlay scroll={scroll} />
    </>
  )
}
