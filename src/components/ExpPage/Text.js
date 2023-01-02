import * as THREE from 'three'
import React, { useMemo, useRef, useLayoutEffect } from 'react'
import boldUrl from './assets/fonts/bold.blob'
import { Text3D, useFBO } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { RGBELoader } from 'three-stdlib'
import { MeshRefractionMaterial } from '../shaders/MeshRefractionMaterial'

export default function Text({
  children,
  vAlign = 'center',
  hAlign = 'center',
  size = 1.5,
  color = '#000000',
  ...props
}) {
  const config = useMemo(
    () => ({
      size: 20,
      height: 30,
      curveSegments: 32,
      bevelEnabled: true,
      bevelThickness: 6,
      bevelSize: 2,
      bevelOffset: 0,
      bevelSegments: 8,
    }),
    [],
  )
  const mesh = useRef()
  useLayoutEffect(() => {
    const size = new THREE.Vector3()
    mesh.current.geometry.computeBoundingBox()
    mesh.current.geometry.boundingBox.getSize(size)
    mesh.current.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
    mesh.current.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
  }, [children])

  const texture = useLoader(
    RGBELoader,
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/kloofendal_48d_partly_cloudy_puresky_1k.hdr',
  )
  const fbo = useFBO(1024)
  const ref = useRef()

  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <Text3D ref={mesh} font={boldUrl} {...config}>
        {children}
        <MeshRefractionMaterial
          uSceneTex={texture}
          uRefractPower={1.0}
          uRefractNormal={0.85}
          uTransparent={0.35}
          uSat={1.03}
          uIntensity={2}
        />
      </Text3D>
    </group>
  )
}
