"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();

  // 테마 선택전엔 테마가 비어있을테니 시스템 테마를 가져다씀
  const currentTheme = theme === "system" ? systemTheme : theme;
  // console.log(` theme ::::: ${theme}`);
  // console.log(` currentTheme ::::: ${currentTheme}`);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-between w-100vh mx-16 mt-16">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex">
        <h1>EN</h1>
        <h1
          className="cursor-pointer"
          onClick={() => {
            setTheme(currentTheme === "dark" ? "light" : "dark");
          }}
        >
          Dark
        </h1>
        <h1>Menu</h1>
      </div>
    </div>
  );
}
