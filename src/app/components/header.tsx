"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import { LuSunMedium } from "react-icons/lu";
import { BiCategory } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";

export default function Header() {

  const t = useTranslations("HomePage");

  const router = useRouter();

  const { systemTheme, theme, setTheme } = useTheme();

  // 테마 선택전엔 테마가 비어있을테니 시스템 테마를 가져다씀
  const currentTheme = theme === "system" ? systemTheme : theme;

  // 메뉴가 열렸을때와 닫혔을떄를 판별하기 위한 상태값
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 첫번째 애니메이션이 실행된 뒤의 두번째 애니메이션을 실행하기 위한 상태값
  const [secondAnimation, setSecondAnimation] = useState(false);

  /** 페이지 이동 */
  const changeLan = (lan: string): void => {
    const changeUrl = window.location.pathname.replace(/^\/[a-z]{2}/, lan);
    router.push(`/${changeUrl}`);
  };

  /** 현재 언어 locale 정보 */
  const locale = window.location.pathname.substring(0, 3);

  return (
    <>
      <div className="flex justify-between items-center w-100vh mx-16 mt-12">
        {/* 로고 */}
        <div>
          <motion.div
            initial={{
              y: -30,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 10,
            }}
            transition={{
              ease: "easeOut",
              duration: 1,
            }}
            onAnimationComplete={() => setSecondAnimation(true)}
          >
            <div className="font-apple">
              <h3 className="text-base">Import</h3>
              <h1 className="text-3xl">&gt;JUN</h1>
            </div>
          </motion.div>
        </div>

        {/* 각종메뉴들 */}
        <div className="flex items-center">
          {/* 언어 변경 */}
          {secondAnimation && (
            <motion.div
              initial={{
                y: -30,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 10,
              }}
              transition={{
                ease: "easeOut",
                duration: 1.5,
              }}
            >
              {locale === "/en" ? (
                <button onClick={() => changeLan("da")}>
                  DA
                </button>
              ) : (
                <button onClick={() => changeLan("en")}>
                  EN
                </button>
              )}
            </motion.div>
          )}

          {/* 다크/라이트 모드 */}
          {secondAnimation && (
            <motion.div
              initial={{
                y: -30,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 10,
              }}
              transition={{
                ease: "easeOut",
                duration: 1.5,
              }}
            >
              <button
                className="cursor-pointer w-24 flex justify-center"
                onClick={() => {
                  setTheme(currentTheme === "dark" ? "light" : "dark");
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {currentTheme === "dark" ? (
                    <motion.div
                      key="light"
                      initial={{ opacity: 1, rotate: 45 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -45 }}
                      transition={{ duration: 0.5 }}
                    >
                      <LuSunMedium className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="dark"
                      initial={{ opacity: 0, rotate: -45 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 45 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaRegMoon className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          )}

          {/* 메뉴바 */}
          <motion.div
            initial={{
              y: -30,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 10,
            }}
            transition={{
              ease: "easeOut",
              duration: 1,
            }}
            onAnimationComplete={() => setSecondAnimation(true)}
          >
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  // X 아이콘 (메뉴가 열렸을 때)
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IoClose className="w-12 h-12" />
                  </motion.div>
                ) : (
                  // 햄버거 아이콘 (메뉴가 닫혔을 때)
                  <motion.div
                    key="open"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BiCategory className="w-12 h-12" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
