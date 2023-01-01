import React, { useRef, useLayoutEffect, memo } from 'react'
import { useGLTF, useTexture, useFBO, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { MeshRefractionMaterial } from '../shaders/MeshRefractionMaterial'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { RGBELoader } from 'three-stdlib'

export function Model(props) {
  const { nodes, materials } = useGLTF('/assets/theseus.glb')
  // const texture = useTexture('/img/rustMetal.jpg')
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/decor_shop_1k.hdr')
  const fbo = useFBO(1024)
  const ref = useRef()
   useFrame((state) => {
    //  ref.current.visible = false
     state.gl.setRenderTarget(fbo)
    //  oldBg = state.scene.background
     state.scene.background = texture
     state.gl.render(state.scene, state.camera)
    //  state.scene.background = oldBg
     state.gl.setRenderTarget(null)
    //  ref.current.visible = true
   })
  return (
    <group {...props} dispose={null}>
      {/* <mesh
        geometry={nodes.Studio.geometry}
        material={nodes.Studio.material}
        position={[0.06, 0.04, -4.44]}
        scale={[-9.97, -11.14, -10.78]}
      /> */}
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials.glass}
        position={[0.68, 1.34, -2.57]}
        scale={[0.25, 1.0, 0.25]}

        // material-color='green'
      >
        {/* <sphereBufferGeometry args={[1, 64, 64]} /> */}
        {/* <meshPhysicalMaterial
          envMapIntensity={0.4}
          map={texture}
          clearcoat={0.5}
          clearcoatRoughness={5}
          roughness={0.05}
          metalness={0.8}
        /> */}
<meshBasicMaterial color='#999' />
        <MeshRefractionMaterial
          uSceneTex={fbo.texture}
          uRefractPower={1.0}
          uRefractNormal={0.85}
          uTransparent={0.35}
          uSat={1.03}
          uIntensity={2}
        />
        
        <Shadows />
      </mesh>
      {/* <mesh {...props}>
        <sphereBufferGeometry args={[1, 64, 64]} />
      </mesh> */}
      {/* <mesh geometry={nodes.Geo_Node.geometry} material={nodes.Geo_Node.material} /> */}
    </group>
  )
}

const Shadows = memo(() => (
  <AccumulativeShadows
    temporal
    frames={100}
    color='lightblue'
    colorBlend={1}
    toneMapped={true}
    alphaTest={0.9}
    opacity={1}
    scale={15}
    position={[0, 0, 0]}>
    <RandomizedLight amount={8} radius={15} ambient={0.5} intensity={1} position={[-5, 10, 0]} bias={0.001} />
  </AccumulativeShadows>
))

useGLTF.preload('/theseus.glb')
