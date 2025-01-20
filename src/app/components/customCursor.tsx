"use client";

import { useEffect, useRef, useState } from "react";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { useContextCursor } from "../context/CursorContext";

export default function CustomCursor() {
  
  /** for hovering */

  // 커서 참조
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // define gloable context value 
  const {isHovering, setIsHovering} = useContextCursor();

  /** for magnifying */

  // hover 상태 추적
  const [isMagnifying, setIsMagnifying] = useState(false);

  // 커서에 표시할 텍스트
  const [cursorText, setCursorText] = useState<string>("");

  // 커서에 표시할 아이콘
  const [cursorIcon, setCursorIcon] = useState<JSX.Element | null>(null);

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
        // 단순 호버 전용
        if (e.target.matches(".hoverable")) {
          setIsHovering(true);

          // 호버 시 동시에 확대 + 텍스트 까지해주기위한
        } else if (e.target.matches(".hoverable2")) {
          setIsMagnifying(true);
          setCursorText(e.target.getAttribute("data-name") || "");

          // 아이콘 설정
          switch (e.target.getAttribute("data-name")) {
            case "HTML":
              setCursorIcon(
                <FaHtml5 className="text-white dark:text-black w-[10px] h-[10px]" />
              );
              break;
            case "CSS":
              setCursorIcon(
                <FaCss3Alt className="text-white dark:text-black  w-[10px] h-[10px]" />
              );
              break;
            case "TAILWIND":
              setCursorIcon(
                <RiTailwindCssFill className="text-white dark:text-black  w-[10px] h-[10px]" />
              );
              break;
            case "JS":
              setCursorIcon(
                <FaJs className="text-white dark:text-black  w-[10px] h-[10px]" />
              );
              break;
            case "TS":
              setCursorIcon(
                <SiTypescript className="text-white dark:text-black  w-[10px] h-[10px]" />
              );
              break;
            case "REACT":
              setCursorIcon(
                <FaReact className="text-white dark:text-black  w-[10px] h-[10px]" />
              );
              break;
            case "NEXT":
              setCursorIcon(
                <RiNextjsFill className="text-white dark:text-black  w-[10px] h-[10px]" />
              );
              break;
            case "NODE":
              setCursorIcon(
                <FaNodeJs className="text-white dark:text-black  w-[10px] h-[10px]" />
              );
              break;
            case "EXPRESS":
              setCursorIcon(
                <SiExpress className="text-white dark:text-black  w-[10px] h-[10px]" />
              );
              break;
            case "MYSQL":
              setCursorIcon(
                <DiMysql className="text-white dark:text-black  w-[10px] h-[10px]" />
              );
              break;
            case "ILLUSTRATOR":
              setCursorIcon(
                <SiAdobeillustrator className="text-white dark:text-black  w-[10px] h-[10px]" />
              );
              break;
            case "PHOTOSHOP":
              setCursorIcon(
                <SiAdobephotoshop className="text-white dark:text-black  w-[10px] h-[10px]" />
              );
              break;
            default:
              setCursorIcon(null); // 기본값은 아이콘을 비우거나 처리
              break;
          }
        } else {
          setIsHovering(false);
          setIsMagnifying(false);
          setCursorIcon(null);
          setCursorText("");
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
    };
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseout", handleHover);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleHover);
      document.removeEventListener("click", handleClick);
    };
  }, [setIsHovering]);

  return (
    <div
      className={`cursor ${
        isHovering ? "hovering" : isMagnifying ? "magnifying" : ""
      }`}
      ref={cursorRef}
    >
      <div>
        {/* 아이콘 */}
        <div className="flex justify-center">{cursorIcon}</div>
        {/* 텍스트 */}
        <h3 className="cursor-text text-white text-[2px] text-center mt-[2px] dark:text-black">
          {cursorText}
        </h3>
      </div>
    </div>
  );
}
