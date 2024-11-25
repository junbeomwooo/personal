"use client";

// import React, { useState, useEffect, useRef } from "react";
// import * as THREE from "three";
// import RINGS from "vanta/dist/vanta.rings.min";
// import { useTheme } from "next-themes";

// export default function Background() {
//   const [vantaEffect, setVantaEffect] = useState<any>(null);

//   const myRef = useRef(null);

//   const { theme } = useTheme();

//   if (typeof window !== "undefined") {
//     window.THREE = THREE;
//   }

//   useEffect(() => {
//     /** 테마에 따라 색상 변경을 위해 조건문과 의존성 배열에서
//      * 1. !vanEffect를 제외하여 테마 변경시에만 업데이트된 색상이 렌더링되게함*/
//     if ( window.THREE) {
//       setVantaEffect(
//         RINGS({
//           THREE,
//           el: myRef.current,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 200.00,
//           minWidth: 200.00,
//           scale: 1.00,
//           scaleMobile: 1.00,
//           backgroundColor: theme === "light" ? 0xffffff:0x0
//         })
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [theme]);

//   return <div ref={myRef} className="w-full h-full absolute -z-50 opacity-80" />;
// }

import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, MeshReflectorMaterial, BakeShadows } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField, ToneMapping } from '@react-three/postprocessing'
import { easing } from 'maath'
import { suspend } from 'suspend-react'
import { Instances, Computers } from './Computers'
import { useTheme } from 'next-themes';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

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
      <hemisphereLight intensity={theme === 'light' ?  8 : 0.15} groundColor={"black"} />
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
