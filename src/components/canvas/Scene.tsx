import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Stats } from '@react-three/drei'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}>
      <directionalLight intensity={0.4} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      {/* <OrbitControls /> */}
      {/* <Stats /> */}
    </Canvas>
  )
}
