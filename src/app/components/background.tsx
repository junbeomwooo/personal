"use client";

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

if (typeof window !== "undefined") {
  window.THREE = THREE;
}

export default function Background() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined" && window.THREE) {
      if (!vantaEffect) {
        setVantaEffect(
          BIRDS({
            el: myRef.current,
          })
        );
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div ref={myRef} className="w-full h-full absolute">
        Foreground content goes here
      </div>
    </>
  );
}
