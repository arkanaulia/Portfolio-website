/*
  Auto-generated by Spline
*/
import * as THREE from 'three'
import { useRef } from 'react'
import useSpline from '@splinetool/r3f-spline'
import { Clone, Float, PerspectiveCamera, Stars } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useLerpedMouse } from './hooks'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'

const cameraTargetPosition = new THREE.Vector3(0, -10, 211)
export default function Scene({ scroll, ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/F978eZkMrVuOdHeE/scene.splinecode')
  const camera = useRef()
  const sceneContent = useRef()
  const mouse = useLerpedMouse()
  const size = useThree((state) => state.size)
  const isMobile = size.width < 768

  const lerpedScroll = useRef(0)

  useFrame(() => {
    // lerp the scroll
    lerpedScroll.current += (scroll.current - lerpedScroll.current) * 0.08

    // animate the camera
    const zStart = isMobile ? 2000 : 900
    const zEnd = isMobile ? -300 : -40
    const xMin = isMobile ? -600 : -800
    const xMax = isMobile ? -200 : -100
    const targetX = isMobile ? -50 : -300
    const yBase = isMobile ? 50 : 200
    const yRange = isMobile ? 100 : 200
    const t = lerpedScroll.current
    const arc = Math.sin(t * Math.PI)
    camera.current.position.set(
      THREE.MathUtils.lerp(xMax, xMin, arc),
      arc * yRange + yBase,
      THREE.MathUtils.lerp(zStart, zEnd, t),
    )
    cameraTargetPosition.x = THREE.MathUtils.lerp(0, targetX, arc)
    camera.current.lookAt(cameraTargetPosition)

    // rotate the model on mousehover
    sceneContent.current.position.x = (1 - t) * 150
    sceneContent.current.rotation.y = mouse.current.x * Math.PI * 0.03
  })

  return (
    <>
      <Stars radius={600} depth={1000} count={5000} factor={40} saturation={10} fade speed={0.1} />
      <color attach='background' args={['#575757']} />
      <fog attach='fog' args={['#575757', 1152.44, 2000]} />
      <group {...props} dispose={null}>
        <PerspectiveCamera
          name='Camera'
          ref={camera}
          makeDefault={true}
          far={100000}
          near={5}
          fov={60}
          position={[0, 188.65, 1224.41]}
          rotation={[-0.13, -0.08, -0.01]}
        />
        <pointLight
          name='Point Light'
          castShadow
          intensity={0.6}
          distance={1011}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={100}
          shadow-camera-far={2500}
          color='#c2d3fe'
          position={[319.47, 509.35, -330.97]}
          rotation={[0, -Math.PI / 6, 0]}
          scale={1}
        />
        <directionalLight
          name='Directional Light'
          castShadow
          intensity={0.8}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-2251.4065}
          shadow-camera-right={2251.4065}
          shadow-camera-top={2251.4065}
          shadow-camera-bottom={-2251.4065}
          color='#feefe8'
          position={[-189.41, 460.06, 327.57]}
        />

        <group ref={sceneContent}>
          <Float floatIntensity={3} speed={2}>
            <Clone object={nodes['Sphere 6']} />
          </Float>
          <Float floatIntensity={3} speed={2}>
            <Clone object={nodes['Sphere 5']} />
          </Float>
          <Float floatIntensity={3} speed={2}>
            <Clone object={nodes['Sphere 4']} />
          </Float>
          <Float floatIntensity={3} speed={2}>
            <Clone object={nodes['Sphere 3']} />
          </Float>
          <Float floatIntensity={3} speed={2}>
            <Clone object={nodes['Sphere 2']} />
          </Float>
          <Float floatIntensity={3} speed={2}>
            <Clone object={nodes['Sphere']} />
          </Float>

          <mesh
            name='Floor'
            geometry={nodes.Floor.geometry}
            material={materials['Floor Material']}
            castShadow
            receiveShadow
            position={[125.82, -329.82, 156.81]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
          <group name='people' position={[54.84, 0.52, 141.56]}>
            <mesh
              name='Wolf3D_Outfit_Top_1'
              geometry={nodes.Wolf3D_Outfit_Top_1.geometry}
              material={nodes.Wolf3D_Outfit_Top_1.material}
              castShadow
              receiveShadow
              position={[107.11, -478.79, 38.17]}
              rotation={[0, -0.64, 0]}
              scale={6.06}
            />
            <mesh
              name='Wolf3D_Outfit_Top_2'
              geometry={nodes.Wolf3D_Outfit_Top_2.geometry}
              material={nodes.Wolf3D_Outfit_Top_2.material}
              castShadow
              receiveShadow
              position={[107.11, -478.79, 38.17]}
              rotation={[0, -0.64, 0]}
              scale={6.06}
            />
            <mesh
              name='Wolf3D_Outfit_Top_3'
              geometry={nodes.Wolf3D_Outfit_Top_3.geometry}
              material={nodes.Wolf3D_Outfit_Top_3.material}
              castShadow
              receiveShadow
              position={[107.11, -478.79, 38.17]}
              rotation={[0, -0.64, 0]}
              scale={6.06}
            />
            <mesh
              name='Wolf3D_Outfit_Top_4'
              geometry={nodes.Wolf3D_Outfit_Top_4.geometry}
              material={nodes.Wolf3D_Outfit_Top_4.material}
              castShadow
              receiveShadow
              position={[107.11, -478.79, 38.17]}
              rotation={[0, -0.64, 0]}
              scale={6.06}
            />
            <mesh
              name='Wolf3D_Outfit_Top_5'
              geometry={nodes.Wolf3D_Outfit_Top_5.geometry}
              material={nodes.Wolf3D_Outfit_Top_5.material}
              castShadow
              receiveShadow
              position={[107.11, -478.79, 38.17]}
              rotation={[0, -0.64, 0]}
              scale={6.06}
            />
            <mesh
              name='Wolf3D_Outfit_Top_6'
              geometry={nodes.Wolf3D_Outfit_Top_6.geometry}
              material={nodes.Wolf3D_Outfit_Top_6.material}
              castShadow
              receiveShadow
              position={[107.11, -478.79, 38.17]}
              rotation={[0, -0.64, 0]}
              scale={6.06}
            />
            <mesh
              name='Wolf3D_Outfit_Top_7'
              geometry={nodes.Wolf3D_Outfit_Top_7.geometry}
              material={nodes.Wolf3D_Outfit_Top_7.material}
              castShadow
              receiveShadow
              position={[107.11, -478.79, 38.17]}
              rotation={[0, -0.64, 0]}
              scale={6.06}
            />
            <group name='chair' position={[50, 0, -30]} rotation={[0, -Math.PI / 6, 0]} scale={1}>
              <mesh
                name='Cube 9'
                geometry={nodes['Cube 9'].geometry}
                material={materials['Cube 9 Material']}
                castShadow
                receiveShadow
                position={[71.33, -114.14, 67.06]}
                rotation={[Math.PI / 2, 0, 1.31]}
                scale={1}
              />
              <mesh
                name='Cube 8'
                geometry={nodes['Cube 8'].geometry}
                material={materials['Cube 8 Material']}
                castShadow
                receiveShadow
                position={[68.92, -115.82, 71.09]}
                rotation={[Math.PI / 2, 0, -0.26]}
                scale={1}
              />
              <mesh
                name='Cylinder 6'
                geometry={nodes['Cylinder 6'].geometry}
                material={materials['Cylinder 6 Material']}
                castShadow
                receiveShadow
                position={[96.8, -215.71, 162.19]}
                rotation={[2.97, -1.06, 3.08]}
                scale={1.24}
              />
              <mesh
                name='Cylinder 4'
                geometry={nodes['Cylinder 4'].geometry}
                material={materials['Cylinder 4 Material']}
                castShadow
                receiveShadow
                position={[164.05, -215.71, 45.62]}
                rotation={[0.1, -0.51, 0.14]}
                scale={1.24}
              />
              <mesh
                name='Cylinder 61'
                geometry={nodes['Cylinder 61'].geometry}
                material={materials['Cylinder 61 Material']}
                castShadow
                receiveShadow
                position={[47.5, -215.71, -21.68]}
                rotation={[-2.97, -1.04, -3.08]}
                scale={1.24}
              />
              <mesh
                name='Cylinder 5'
                geometry={nodes['Cylinder 5'].geometry}
                material={materials['Cylinder 5 Material']}
                castShadow
                receiveShadow
                position={[-19.82, -215.71, 94.91]}
                rotation={[-0.1, -0.52, -0.14]}
                scale={1.24}
              />
              <mesh
                name='Cylinder 2'
                geometry={nodes['Cylinder 2'].geometry}
                material={materials['Cylinder 2 Material']}
                castShadow
                receiveShadow
                position={[73.29, -102.31, 74.78]}
                rotation={[0, -Math.PI / 6, 0]}
                scale={1.24}
              />
            </group>
            <group name='computer' position={[40, 15, 80]} rotation={[-2.8, 3.2, 3.06]} scale={[0.64, 0.7, 0.7]}>
              <mesh
                name='Rectangle 2'
                geometry={nodes['Rectangle 2'].geometry}
                material={materials['Rectangle 2 Material']}
                castShadow
                receiveShadow
                position={[-20.42, -1.24, 235.11]}
                rotation={[-2.59, 0.46, 2.87]}
                scale={[0.64, 0.7, 0.7]}
              />
              <mesh
                name='Rectangle 5'
                geometry={nodes['Rectangle 5'].geometry}
                material={materials['Rectangle 5 Material']}
                castShadow
                receiveShadow
                position={[32.65, -32.14, 143.2]}
                rotation={[1.7, 0.07, -2.62]}
                scale={[0.54, 0.58, 0.58]}
              />
              <mesh
                name='Rectangle 4'
                geometry={nodes['Rectangle 4'].geometry}
                material={materials['Rectangle 4 Material']}
                castShadow
                receiveShadow
                position={[9.52, -36.65, 183.26]}
                rotation={[1.7, 0.07, -2.62]}
                scale={[0.54, 0.58, 0.58]}
              />
              <mesh
                name='Rectangle 3'
                geometry={nodes['Rectangle 3'].geometry}
                material={materials['Rectangle 3 Material']}
                castShadow
                receiveShadow
                position={[16.53, -37.44, 171.12]}
                rotation={[1.7, 0.07, -2.62]}
                scale={[0.64, 0.7, 0.7]}
              />
              <mesh
                name='Rectangle'
                geometry={nodes.Rectangle.geometry}
                material={materials['Rectangle Material']}
                castShadow
                receiveShadow
                position={[-21.58, -5.27, 237.13]}
                rotation={[-2.59, 0.46, 2.87]}
                scale={[0.64, 0.7, 0.7]}
              />
            </group>
          </group>
        </group>
        <EffectComposer>
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
          {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
          <Noise opacity={0.1} />
          <Vignette eskil={false} offset={0} darkness={0.7} />
        </EffectComposer>
        <hemisphereLight name='Default Ambient Light' intensity={0.75} color='#eaeaea' />
      </group>
    </>
  )
}