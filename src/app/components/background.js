"use client";


import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, MeshReflectorMaterial, BakeShadows } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { easing } from 'maath'
import { suspend } from 'suspend-react'
import { Instances, Computers } from './Computers.js'
import { useTheme } from 'next-themes';

/*
 * Modified by Junbeom woo
 * Original Software: React Fiber Example
 * Copyright (c) 2020 Paul Henschel
 * 
 * MIT License
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


const suzi = import('@pmndrs/assets/models/bunny.glb')


function Bun(props) {
  const { nodes } = useGLTF(suspend(suzi).default)
  return (
    <mesh receiveShadow castShadow geometry={nodes.mesh.geometry} {...props}>
      <meshStandardMaterial color="#222" roughness={0.5} />
    </mesh>
  )
}

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta)
    state.camera.lookAt(0, 0, 0)
  })

  return null;
}


export default function Background() {
  const { theme } = useTheme();
  
  return (
    <div className='w-full h-full'>
    <Canvas shadows dpr={[1, 1.5]} camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }} eventPrefix="client"   style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex:0}}>
      <color attach="background" args={[`${theme === 'light'? "#f0d7b2" : "black"}`]} />
      {/* 모니터 밝기 */}
      <hemisphereLight intensity={theme === 'light' ? 7 : 0.15} groundColor={"black"} />

      {/* 바닥 밝기 */}
      <spotLight decay={0} position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={3} castShadow shadow-mapSize={1024} />
      {/* Main scene */}
      <group position={[-0, -1, 0]}>
        {/* Auto-instanced sketchfab model */}
        <Instances>
          <Computers scale={0.6} />
        </Instances>

        {/* Plane reflections + distance blur */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={2048}
            mixBlur={1}
            mixStrength={180}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#202020"
            metalness={0.8}
            mirror={0.5} 
          />
        </mesh>
        {/* Bunny and a light give it more realism */}
        <Bun scale={0.4} position={[0, 0.3, 0.5]} rotation={[0, -Math.PI * 0.85, 0]} />
        <pointLight distance={1.5} intensity={1} position={[-0.15, 0.7, 0]} color={theme === "light" ? "#4bf9ff": "orange"} />
      </group>
      {/* Postprocessing */}
      <EffectComposer enableNormalPass={false}>
        {/* 백그라운드 빛 번짐 */}
        <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={theme === "light" ? 4 : 5} />
        <DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={15} height={700} />
      </EffectComposer>
      {/* Camera movements */}
      <CameraRig />
      {/* Small helper that freezes the shadows for better performance */}
      <BakeShadows />
    </Canvas>
    </div>
  )
}
