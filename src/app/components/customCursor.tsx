"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  // 커서 참조
  const cursorRef = useRef<HTMLDivElement | null>(null);
  // hover 상태 추적
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (cursorRef.current == null) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current == null) return;
      cursorRef.current.style.top = `${e.pageY}px`;
      cursorRef.current.style.left = `${e.pageX}px`;
    };

    // `mousemove` 이벤트로 커서 위치 추적
    document.addEventListener("mousemove", handleMouseMove);

    // `mouseenter`와 `mouseleave`로 hover 상태 추적
    const handleHover = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        if (e.target.matches("a, button, input")) {
          setIsHovering(true); // 해당 요소에 마우스가 올라오면 hover 상태로 설정
        } else {
          setIsHovering(false); // 아니면 hover 상태 해제
        }
      }
    };


    const handleClick = () => {
        if (cursorRef.current == null) return;
        cursorRef.current.classList.add("expand");
        setTimeout(() => {
          if (cursorRef.current == null) return;
          cursorRef.current.classList.remove("expand");
        }, 500);
    }
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseout", handleHover);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleHover);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      className={`cursor ${isHovering ? "hovering" : ""}`}
      ref={cursorRef}
    ></div>
  );
}
