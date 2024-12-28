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
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { MdHomeFilled } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { PiReadCvLogo } from "react-icons/pi";
import { IoMdContact } from "react-icons/io";


export default function Header() {
  const router = useRouter();

  const pathname = usePathname();

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

  const h = useTranslations("HomePage");

  return (
    <>
      <div className="fixed w-full mt-8 z-30 max-w-[1921px]">
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
                  className="p-3 sm:p-4 flex justify-center hoverable w-[55px]"
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

      <AnimatePresence>
        {isMenuOpen && (
          <div className="text-white dark:text-white fixed z-20 w-full h-full">
            <motion.div
              className="w-full h-full bg-black opacity-60 absolute z-20"
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.2, ease: "linear" }}
            />
            <div className="absolute pt-24 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="flex items-center justify-center w-full gap-10 max-sm:gap-4">
              {/* home */}
              <motion.div
                className={`w-[190px] h-[190px] border-4 border-solid border-[#ffffff] z-30 relative text-center hoverable max-sm:w-[100px] max-sm:h-[100px] max-sm:border-4 ${
                  pathname === "/en" || pathname === "/da"
                    ? "bg-[#F97316] dark:bg-[#00ce59] border-none"
                    : ""
                }`}
                initial={{ scale: 0, opacity: "0%" }}
                animate={{ scale: 1, opacity: "100%" }}
                exit={{ scale: 0, opacity: "0%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                whileHover={{
                  backgroundColor:
                    currentTheme === "light" ? "#F97316" : "#00ce59",
                  borderColor: currentTheme === "light" ? "#F97316" : "#00ce59",
                  transition: { duration: 0.2, ease: "linear" },
                }}
                onClick={() => {
                  router.push("/");
                  setIsMenuOpen(false);
                }}
              >
                <div className="mt-[53px] hoverable max-sm:mt-[0px]">
                  {pathname === "/en" || pathname === "/da" ? (
                    <MdHomeFilled className="w-[90px] h-[90px] m-auto max-sm:w-[50px] max-sm:mt-[5px]" />
                  ) : (
                    <>
                      {" "}
                      <h3 className="text-[55px] font-bold hoverable max-sm:text-[30px] max-sm:mt-[25px]">
                        Ho
                      </h3>
                      <h5 className="text-[22px] hoverable max-sm:text-[15px]">
                        {h("home")}
                      </h5>
                    </>
                  )}
                </div>
              </motion.div>
              {/* about */}
              <motion.div
                className={`w-[190px] h-[190px] border-4 border-solid border-[#ffffff] z-30 relative text-center hoverable max-sm:w-[100px] max-sm:h-[100px] max-sm:border-4 ${
                  pathname === "/en/about" || pathname === "/da/about"
                    ? "bg-[#F97316] dark:bg-[#00ce59] border-none"
                    : ""
                }`}
                initial={{ scale: 0, opacity: "0%" }}
                animate={{ scale: 1, opacity: "100%" }}
                exit={{ scale: 0, opacity: "0%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                whileHover={{
                  backgroundColor:
                    currentTheme === "light" ? "#F97316" : "#00ce59",
                  borderColor: currentTheme === "light" ? "#F97316" : "#00ce59",
                  transition: { duration: 0.2, ease: "linear" },
                }}
                onClick={() => {
                  router.push(`/${locale}/about`);
                  setIsMenuOpen(false);
                }}
              >
                <div className="mt-[53px] hoverable max-sm:mt-[0px]">
                  {pathname === "/en/about" || pathname === "/da/about" ? (
                    <IoIosInformationCircleOutline className="w-[90px] h-[90px] m-auto max-sm:w-[50px] max-sm:mt-[5px]" />
                  ) : (
                    <>
                      {" "}
                      <h3 className="text-[55px] font-bold hoverable max-sm:text-[30px] max-sm:mt-[25px]">
                        Ab
                      </h3>
                      <h5 className="text-[22px] hoverable max-sm:text-[15px]">
                        {h("about")}
                      </h5>
                    </>
                  )}
                </div>
              </motion.div>
              {/* project */}
              <motion.div
                className={`w-[190px] h-[190px] border-4 border-solid border-[#ffffff] z-30 relative text-center hoverable max-sm:w-[100px] max-sm:h-[100px] max-sm:border-4 ${
                  pathname === "/en/project" || pathname === "/da/project"
                    ? "bg-[#F97316] dark:bg-[#00ce59] border-none"
                    : ""
                }`}
                initial={{ scale: 0, opacity: "0%" }}
                animate={{ scale: 1, opacity: "100%" }}
                exit={{ scale: 0, opacity: "0%" }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                whileHover={{
                  backgroundColor:
                    currentTheme === "light" ? "#F97316" : "#00ce59",
                  borderColor: currentTheme === "light" ? "#F97316" : "#00ce59",
                  transition: { duration: 0.2, ease: "linear" },
                }}
                onClick={() => {
                  router.push(`/${locale}/project`);
                  setIsMenuOpen(false);
                }}
              >
                <div className="mt-[53px] hoverable max-sm:mt-[0px]">
                  {pathname === "/en/project" || pathname === "/da/project" ? (
                    <FaCode className="w-[90px] h-[90px] m-auto max-sm:w-[50px] max-sm:mt-[5px]" />
                  ) : (
                    <>
                      {" "}
                      <h3 className="text-[55px] font-bold hoverable max-sm:text-[30px] max-sm:mt-[25px]">
                        Pr
                      </h3>
                      <h5 className="text-[22px] hoverable max-sm:text-[15px]">
                        {h("project")}
                      </h5>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
            <div className="flex items-center justify-center w-full mt-10 gap-10 max-sm:gap-4">
              {/* resume */}
              <motion.div
                className={`w-[190px] h-[190px] border-4 border-solid border-[#ffffff] z-30 relative text-center hoverable max-sm:w-[100px] max-sm:h-[100px] max-sm:border-4 ${
                  pathname === "/en/resume" || pathname === "/da/resume"
                    ? "bg-[#F97316] dark:bg-[#00ce59] border-none"
                    : ""
                }`}
                initial={{ scale: 0, opacity: "0%" }}
                animate={{ scale: 1, opacity: "100%" }}
                exit={{ scale: 0, opacity: "0%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                whileHover={{
                  backgroundColor:
                    currentTheme === "light" ? "#F97316" : "#00ce59",
                  borderColor: currentTheme === "light" ? "#F97316" : "#00ce59",
                  transition: { duration: 0.2, ease: "linear" },
                }}
                onClick={() => {
                  router.push(`/${locale}/resume`);
                  setIsMenuOpen(false);
                }}
              >
                <div className="mt-[53px] hoverable max-sm:mt-[0px]">
                  {pathname === "/en/resume" || pathname === "/da/resume" ? (
                    <PiReadCvLogo className="w-[90px] h-[90px] m-auto max-sm:w-[50px] max-sm:mt-[5px]" />
                  ) : (
                    <>
                      {" "}
                      <h3 className="text-[55px] font-bold hoverable max-sm:text-[30px] max-sm:mt-[25px]">
                        Re
                      </h3>
                      <h5 className="text-[22px] hoverable max-sm:text-[15px]">
                        {h("resume")}
                      </h5>
                    </>
                  )}
                </div>
              </motion.div>
              {/* contact */}
              <motion.div
                className={`w-[190px] h-[190px] border-4 border-solid border-[#ffffff] z-30 relative text-center hoverable max-sm:w-[100px] max-sm:h-[100px] max-sm:border-4 ${
                  pathname === "/en/contact" || pathname === "/da/contact"
                    ? "bg-[#F97316] dark:bg-[#00ce59] border-none"
                    : ""
                }`}
                initial={{ scale: 0, opacity: "0%" }}
                animate={{ scale: 1, opacity: "100%" }}
                exit={{ scale: 0, opacity: "0%" }}
                transition={{ duration: 0., ease: "easeInOut" }}
                whileHover={{
                  backgroundColor:
                    currentTheme === "light" ? "#F97316" : "#00ce59",
                  borderColor: currentTheme === "light" ? "#F97316" : "#00ce59",
                  transition: { duration: 0.2, ease: "linear" },
                }}
                onClick={() => {
                  router.push(`/${locale}/contact`);
                  setIsMenuOpen(false);
                }}
              >
                <div className="mt-[53px] hoverable max-sm:mt-[0px]">
                  {pathname === "/en/contact" || pathname === "/da/contact" ? (
                    <IoMdContact className="w-[90px] h-[90px] m-auto max-sm:w-[50px] max-sm:mt-[5px]" />
                  ) : (
                    <>
                      {" "}
                      <h3 className="text-[55px] font-bold hoverable max-sm:text-[30px] max-sm:mt-[25px]">
                        Co
                      </h3>
                      <h5 className="text-[22px] hoverable max-sm:text-[15px]">
                        {h("contact")}
                      </h5>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
