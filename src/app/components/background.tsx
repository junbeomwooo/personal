"use client";

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import RINGS from "vanta/dist/vanta.rings.min";
import { useTheme } from "next-themes";

export default function Background() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  const myRef = useRef(null);

  const { theme } = useTheme();

  if (typeof window !== "undefined") {
    window.THREE = THREE;
  }

  useEffect(() => {
    /** 테마에 따라 색상 변경을 위해 조건문과 의존성 배열에서
     * 1. !vanEffect를 제외하여 테마 변경시에만 업데이트된 색상이 렌더링되게함*/
    if ( window.THREE) {
      setVantaEffect(
        RINGS({
          THREE,
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: theme === "light" ? 0xffffff:0x0
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [theme]);

  return <div ref={myRef} className="w-full h-full absolute -z-10 opacity-80" />;
}
