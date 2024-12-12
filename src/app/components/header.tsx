"use client";

import { useLocale } from "next-intl";
import { useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import { LuSunMedium } from "react-icons/lu";
import { BiCategory } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";

export default function Header() {
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
  const locale = useLocale();

  return (
    <div className="fixed w-full  mt-10 z-50">
      <div className="flex justify-between items-center w-100vh mx-6 md:mx-10 lg:mx-20 ">
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
            <button
              className="font-apple hover:no-underline hoverable"
              onClick={() => router.push("/")}
            >
              <h1 className="text-lg sm:text-xl hoverable font-bold">
                JUNBEOM WOO
              </h1>
            </button>
          </motion.div>
        </div>

        {/* 각종메뉴들 */}
        <div className="flex items-center ">
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
              {locale === "en" ? (
                <button
                  onClick={() => changeLan("da")}
                  className="p-3 sm:p-4 hoverable"
                >
                  <h1 className="hoverable text-base">DA</h1>
                </button>
              ) : (
                <button
                  onClick={() => changeLan("en")}
                  className="p-3 sm:p-4 hoverable"
                >
                  <h1 className="hoverable text-base">EN</h1>
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
                className="p-3 sm:p-4 flex justify-center hoverable"
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
                      <button className="hoverable">
                        <LuSunMedium className="w-5 h-5 sm:w-6 sm:h-6 hoverable" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="dark"
                      initial={{ opacity: 0, rotate: -45 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 45 }}
                      transition={{ duration: 0.5 }}
                    >
                      <button className="hoverable">
                        <FaRegMoon className="w-5 h-5 hoverable" />
                      </button>
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
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="pt-4 pb-4 pl-3 sm:pl-4 hoverable"
            >
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
                    <button className="hoverable">
                      <IoClose className="w-10 h-10 sm:w-12 sm:h-12 hoverable" />
                    </button>
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
                    <button className="hoverable">
                      <BiCategory className="w-10 h-10 sm:w-12 sm:h-12 hoverable" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
