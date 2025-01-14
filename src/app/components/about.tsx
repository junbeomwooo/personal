"use client";

import { useLocale } from "next-intl";
import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../styles/globals.css";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import ShuffleText from "react-shuffle-text";

// Icons
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

export default function About() {
  const locale = useLocale();

  const [firstSlideAnimation, setFirstSlideAnimation] = useState(true);
  const [secondSlideAnimation, setSecondSlideAnimation] = useState(false);
  const [thirdSlideAnimation, setThirdSlideAnimation] = useState(false);

  const handleSlideChange = (e: SwiperType) => {
    if (e.activeIndex === 0) {
      setFirstSlideAnimation(true);
      setSecondSlideAnimation(false);
      setThirdSlideAnimation(false);
    } else if (e.activeIndex === 1) {
      setFirstSlideAnimation(false);
      setSecondSlideAnimation(true);
      setThirdSlideAnimation(false);
    } else if (e.activeIndex === 2) {
      setFirstSlideAnimation(false);
      setSecondSlideAnimation(false);
      setThirdSlideAnimation(true);
    }
  };

  const h = useTranslations("HomePage");

  return (
    <AnimatePresence>
      <div className="h-full w-full relative m-0 p-0">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={{
            forceToAxis: true, // 수직 방향으로만 반응
            thresholdDelta: 5, // 스크롤 양이 50 이상일 때만 넘어감
            thresholdTime: 500, // 최소 500ms 간격으로만 반응
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className}"></span>`,
          }}
          loop={false}
          modules={[Mousewheel, Pagination]}
          className="w-full h-screen"
          onSlideChange={handleSlideChange}
        >
          {/* First: Who am I  */}
          <SwiperSlide className="w-full h-screen">
            <div className="flex items-center justify-center h-screen">
              <div className="w-full h-auto block xl:flex px-6 md:px-10 lg:px-40 justify-between items-center">
                {/* photo */}
                <motion.img
                  src="/jun.png"
                  alt="my photo"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] m-auto xl:w-[400px] xl:hidden"
                />
                {/* about */}
                <div className="w-full">
                  {/* funtion About() */}
                  <div className="flex items-end">
                    <h2 className="text-[20px] md:text-[30px] xl:text-[40px] mr-4 text-[#8c1490] font-monaco font-bold ">
                      function
                    </h2>
                    {firstSlideAnimation && (
                      <h1 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[40px] text-orange-500 dark:text-[#88ff69] font-monaco font-bold mt-10">
                        <ShuffleText content={h("whoAmI")} />( ) {"{"}
                      </h1>
                    )}
                  </div>

                  {/* content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: firstSlideAnimation ? 1 : 0 }}
                    transition={{ duration: 1, ease: "linear" }}
                    className="py-4 xl:max-w-[900px]"
                  >
                    {locale === "en" ? (
                      <h3 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] leading-[20px] sm:leading-[24px] xl:leading-[34px] overflow-y-auto">
                        My name is Junbeom Woo and I am 26 years old.
                        <br />I have a bright and outgoing personality and I am
                        passionate about Web development.
                        <br />
                        I hold a residence permit under the EU regulations.
                        <br />
                        <br />
                        I obtained a Bachelor’s degree in Visual Design in South
                        Korea and continued my studies in a 6-month long
                        Full-Stack coding boot camp focused on foundational
                        knowledge in Web development.
                        <br />I have moved to Denmark in late March 2024 and I
                        am currently seeking employment in Copenhagen.
                      </h3>
                    ) : (
                      <h3 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] leading-[20px] sm:leading-[24px] xl:leading-[34px] overflow-y-auto">
                        Mit navn er Junbeom Woo, og jeg er 26 år gammel.
                        <br />
                        Jeg har en lys og udadvendt personlighed, og jeg brænder
                        for webudvikling.
                        <br />
                        Jeg har en opholdstilladelse under EU-reglerne.
                        <br />
                        <br />
                        Jeg har opnået en bachelorgrad i visuel design i
                        Sydkorea og fortsatte mine studier på et 6-måneders
                        Full-Stack kode-bootcamp med fokus på grundlæggende
                        viden om webudvikling.
                        <br />
                        Jeg flyttede til Danmark i slutningen af marts 2024, og
                        jeg søger i øjeblikket arbejde i København.
                      </h3>
                    )}
                  </motion.div>
                  <motion.h1
                    className="text-[20px] sm:text-[28px] md:text-[30px] text-orange-500 dark:text-[#88ff69] font-monaco font-bold xl:text-[40px]"
                    initial={{ opacity: 0, y: "-35%" }}
                    animate={{ opacity: 1, y: "0%" }}
                    transition={{ duration: 0.5, ease: "linear" }}
                  >
                    {"}"}
                  </motion.h1>
                </div>
                {/* photo */}

                <motion.img
                  src="/jun.png"
                  alt="my photo"
                  width={500}
                  height={500}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="hidden m-auto xl:block xl:w-[400px] xl:h-[400px]"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Second: Skills */}
          <SwiperSlide className="w-full h-screen">
            <div className="flex items-center justify-center h-screen">
              <div className="w-full h-auto block xl:flex px-6 md:px-10 lg:px-40 justify-center items-center">
                {/* Skills */}
                <div className="w-full xl:w-3/5">
                  {/* funtion Skills() */}
                  <div className="flex items-end">
                    <h2 className="text-[20px] md:text-[30px] xl:text-[40px] mr-4 text-[#8c1490] font-monaco font-bold ">
                      function
                    </h2>
                    {secondSlideAnimation && (
                      <h1 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[40px] text-orange-500 dark:text-[#88ff69] font-monaco font-bold mt-10">
                        <ShuffleText content={h("skills")} />( ) {"{"}
                      </h1>
                    )}
                  </div>

                  {/* graph */}
                  <div className="font-medium text-sm ">
                    {/* HTML & CSS */}
                    <div>
                      <div className="flex justify-between mt-6">
                        <h3>HTML & CSS</h3>
                        <h3 className="text-sm font-normal">100</h3>
                      </div>
                      <motion.div
                        className={`h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]`}
                        initial={{ width: "0%" }}
                        animate={{
                          width: secondSlideAnimation ? "100%" : "0%",
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    </div>

                    {/* JS & TS */}
                    <div>
                      <div className="flex justify-between mt-4">
                        <h3>JAVASCRIPT & TYPESCRIPT</h3>
                        <h3 className="text-sm font-normal">80</h3>
                      </div>
                      <motion.div
                        className={`h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]`}
                        initial={{ width: "0%" }}
                        animate={{ width: secondSlideAnimation ? "80%" : "0%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    </div>
                    {/* React & Next.js */}
                    <div>
                      <div className="flex justify-between mt-4">
                        <h3>REACT & NEXT.JS</h3>
                        <h3 className="text-sm font-normal">90</h3>
                      </div>
                      <motion.div
                        className={`h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]`}
                        initial={{ width: "0%" }}
                        animate={{ width: secondSlideAnimation ? "90%" : "0%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    </div>

                    {/* Node.js & EXPRESS */}
                    <div>
                      <div className="flex justify-between mt-4">
                        <h3>NODE.JS & EXPRESS</h3>
                        <h3 className="text-sm font-normal">70</h3>
                      </div>
                      <motion.div
                        className={`h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]`}
                        initial={{ width: "0%" }}
                        animate={{ width: secondSlideAnimation ? "70%" : "0%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    </div>

                    {/* MySQL*/}
                    <div>
                      <div className="flex justify-between mt-4">
                        <h3>MYSQL</h3>
                        <h3 className="text-sm font-normal">70</h3>
                      </div>
                      <motion.div
                        className={`h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]`}
                        initial={{ width: "0%" }}
                        animate={{ width: secondSlideAnimation ? "70%" : "0%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    </div>

                    {/* ADOBE ILLUSTRATOR & PHOTOSHOP*/}
                    <div>
                      <div className="flex justify-between mt-4">
                        <h3>Adobe Illustrator & PhotoShop</h3>
                        <h3 className="text-sm font-normal">80</h3>
                      </div>
                      <motion.div
                        className={`h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]`}
                        initial={{ width: "0%" }}
                        animate={{ width: secondSlideAnimation ? "80%" : "0%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    </div>

                    {/* hover me! */}
                    <div className="mt-10 hidden sm:block">
                      {" "}
                      <motion.h3
                        initial={{ opacity: 0, y: "-35%" }}
                        animate={{
                          opacity: secondSlideAnimation ? 1 : 0,
                          y: secondSlideAnimation ? "0%" : "-35%",
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="font-medium text-orange-500 dark:text-[#88ff69]"
                      >
                        {h("hoverMe")}
                      </motion.h3>
                    </div>
                  </div>
                  {/* skills icon */}
                  <div className="mt-4 gap-4 flex-wrap hidden sm:flex  opacity-60">
                    {/* html */}
                    <motion.button
                      className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                      data-name="HTML"
                      initial={{ opacity: 0, y: "-35%" }}
                      animate={{
                        opacity: secondSlideAnimation ? 1 : 0,
                        y: secondSlideAnimation ? "0%" : "-35%",
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <FaHtml5 className="w-[25px] h-[25px] text-white dark:text-black" />
                    </motion.button>

                    {/* css */}
                    <motion.button
                      className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                      data-name="CSS"
                      initial={{ opacity: 0, y: "-35%" }}
                      animate={{
                        opacity: secondSlideAnimation ? 1 : 0,
                        y: secondSlideAnimation ? "0%" : "-35%",
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <FaCss3Alt className="w-[25px] h-[25px] text-white dark:text-black" />
                    </motion.button>

                    {/* TailwindCss */}
                    <motion.button
                      className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                      data-name="TAILWIND"
                      initial={{ opacity: 0, y: "-35%" }}
                      animate={{
                        opacity: secondSlideAnimation ? 1 : 0,
                        y: secondSlideAnimation ? "0%" : "-35%",
                      }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    >
                      <RiTailwindCssFill className="w-[25px] h-[25px] text-white dark:text-black" />
                    </motion.button>

                    {/* JS */}
                    <motion.button
                      className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                      data-name="JS"
                      initial={{ opacity: 0, y: "-35%" }}
                      animate={{
                        opacity: secondSlideAnimation ? 1 : 0,
                        y: secondSlideAnimation ? "0%" : "-35%",
                      }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                      <FaJs className="w-[20px] h-[20px] text-white dark:text-black" />
                    </motion.button>

                    {/* TS */}
                    <motion.button
                      className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                      data-name="TS"
                      initial={{ opacity: 0, y: "-35%" }}
                      animate={{
                        opacity: secondSlideAnimation ? 1 : 0,
                        y: secondSlideAnimation ? "0%" : "-35%",
                      }}
                      transition={{ duration: 1.4, ease: "easeInOut" }}
                    >
                      <SiTypescript className="w-[20px] h-[20px] text-white dark:text-black" />
                    </motion.button>

                    {/* React */}
                    <motion.button
                      className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                      data-name="REACT"
                      initial={{ opacity: 0, y: "-35%" }}
                      animate={{
                        opacity: secondSlideAnimation ? 1 : 0,
                        y: secondSlideAnimation ? "0%" : "-35%",
                      }}
                      transition={{ duration: 1.6, ease: "easeInOut" }}
                    >
                      <FaReact className="w-[25px] h-[25px] text-white dark:text-black" />
                    </motion.button>

                    {/* Next.js */}
                    <motion.button
                      className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                      data-name="NEXT"
                      initial={{ opacity: 0, y: "-35%" }}
                      animate={{
                        opacity: secondSlideAnimation ? 1 : 0,
                        y: secondSlideAnimation ? "0%" : "-35%",
                      }}
                      transition={{ duration: 1.8, ease: "easeInOut" }}
                    >
                      <RiNextjsFill className="w-[25px] h-[25px] text-white dark:text-black" />
                    </motion.button>

                    {/* Node.js */}
                    <motion.button
                      className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                      data-name="NODE"
                      initial={{ opacity: 0, y: "-35%" }}
                      animate={{
                        opacity: secondSlideAnimation ? 1 : 0,
                        y: secondSlideAnimation ? "0%" : "-35%",
                      }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    >
                      <FaNodeJs className="w-[25px] h-[25px] text-white dark:text-black" />
                    </motion.button>

                    {/* Express */}
                    <motion.button
                      className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                      data-name="EXPRESS"
                      initial={{ opacity: 0, y: "-35%" }}
                      animate={{
                        opacity: secondSlideAnimation ? 1 : 0,
                        y: secondSlideAnimation ? "0%" : "-35%",
                      }}
                      transition={{ duration: 2.2, ease: "easeInOut" }}
                    >
                      <SiExpress className="w-[25px] h-[25px] text-white dark:text-black" />
                    </motion.button>

                    {/* MySQL */}
                    <motion.button
                      className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                      data-name="MYSQL"
                      initial={{ opacity: 0, y: "-35%" }}
                      animate={{
                        opacity: secondSlideAnimation ? 1 : 0,
                        y: secondSlideAnimation ? "0%" : "-35%",
                      }}
                      transition={{ duration: 2.4, ease: "easeInOut" }}
                    >
                      <DiMysql className="w-[25px] h-[25px] text-white dark:text-black" />
                    </motion.button>

                    {/* Illustrator */}
                    <motion.button
                      className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                      data-name="ILLUSTRATOR"
                      initial={{ opacity: 0, y: "-35%" }}
                      animate={{
                        opacity: secondSlideAnimation ? 1 : 0,
                        y: secondSlideAnimation ? "0%" : "-35%",
                      }}
                      transition={{ duration: 2.6, ease: "easeInOut" }}
                    >
                      <SiAdobeillustrator className="w-[20px] h-[20px] text-white dark:text-black" />
                    </motion.button>

                    {/* PhotoShop */}
                    <motion.button
                      className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                      data-name="PHOTOSHOP"
                      initial={{ opacity: 0, y: "-35%" }}
                      animate={{
                        opacity: secondSlideAnimation ? 1 : 0,
                        y: secondSlideAnimation ? "0%" : "-35%",
                      }}
                      transition={{ duration: 2.8, ease: "easeInOut" }}
                    >
                      <SiAdobephotoshop className="w-[20px] h-[20px] text-white dark:text-black" />
                    </motion.button>
                  </div>

                  <motion.h1
                    className="text-[20px] sm:text-[28px] md:text-[30px] text-orange-500 dark:text-[#88ff69] font-monaco font-bold xl:text-[40px] mt-6"
                    initial={{ opacity: 0, y: "-35%" }}
                    animate={{
                      opacity: secondSlideAnimation ? 1 : 0,
                      y: secondSlideAnimation ? "0%" : "-35%",
                    }}
                    transition={{ duration: 0.5, ease: "linear" }}
                  >
                    {"}"}
                  </motion.h1>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Third: Education */}
          <SwiperSlide className="w-full h-screen">
            <div className="flex items-center justify-center h-screen">
              <div className="w-full h-auto block xl:flex px-6 md:px-10 lg:px-40 justify-center items-center">
                <div>
                  {/* title */}
                  <div className="flex items-end">
                    <h2 className="text-[20px] md:text-[30px] xl:text-[40px] mr-4 text-[#8c1490] font-monaco font-bold ">
                      function
                    </h2>
                    {thirdSlideAnimation && (
                      <h1 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[40px] text-orange-500 dark:text-[#88ff69] font-monaco font-bold mt-10">
                        <ShuffleText content={h("education")} />( ) {"{"}
                      </h1>
                    )}
                  </div>

                  {/* content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: thirdSlideAnimation ? 1 : 0 }}
                    transition={{ duration: 1, ease: "linear" }}
                    className="py-6 xl:py-10 xl:max-w-[900px]"
                  >
                    {/* first euducation */}
                    <div>
                      <h1 className="text-[14px] sm:text-[17px] md:text-[20px] xl:text-[22px] font-medium leading-[18px]">
                        {locale === "en"
                          ? "Ezen Academy, Full Stack (JavaScript) Web Developer (FrontEnd & BackEnd)"
                          : "Ezen Academy, Full Stack (JavaScript) Webudvikler (Frontend & Backend)"}
                      </h1>
                      <h2 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] mt-4 xl:mt-5  text-[#888888] dark:text-[#b4b4b4]">
                        {locale === "en"
                          ? "August 2022 - January - 2023 (920hr / 115days)"
                          : "August 2022 - Januar 2023 (920 timer / 115 dage)"}
                      </h2>
                      {/* courses */}
                      <div>
                        <div className="text-[9.5px] sm:text-[11px] md:text-[14px] xl:text-[16px] mt-4 xl:mt-5 ml-4">
                          {locale === "en" ? (
                            <div className="flex flex-wrap gap-3 font-light">
                              <h4>· Front End Programming</h4>
                              <h4>· Server Programming</h4>
                              <h4>· JavaScript Programming</h4>
                              <h4>· Database</h4>
                              <h4>· Building a Developer Environment</h4>
                              <h4>· Building a Linux Server System</h4>
                              <h4>· Applied Programming</h4>
                            </div>
                          ) : (
                            <div className="flex flex-wrap gap-3 font-light">
                              <h4>· Frontend Programmering</h4>
                              <h4>· Server Programmering</h4>
                              <h4>· JavaScript Programmering</h4>
                              <h4>· Database</h4>
                              <h4>· Oprettelse af udviklingsmiljø</h4>
                              <h4>· Oprettelse af Linux Server System</h4>
                              <h4>· Anvendt Programmering</h4>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* second euducation */}
                    <div className="mt-14">
                      <h1 className="text-[14px] sm:text-[17px] md:text-[20px] xl:text-[22px]  font-medium leading-[18px]">
                        {locale === "en"
                          ? "Bachelor of Visual Design, Jangan University, South Korea"
                          : "Bachelor i Visuel Design, Jangan Universitet, Sydkorea"}
                      </h1>
                      <h2 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] mt-4 xl:mt-5 text-[#888888] dark:text-[#b4b4b4]">
                        {locale === "en"
                          ? "March 2016 - February 2022"
                          : "Marts 2016 - Februar 2022"}
                      </h2>
                      {/* courses */}
                      <div>
                        <div className="text-[9.5px] sm:text-[11px] md:text-[14px] xl:text-[16px] mt-4 xl:mt-5 ml-4">
                          {locale === "en" ? (
                            <div className="flex flex-wrap gap-3  font-light">
                              <h4>· Web Design</h4>
                              <h4>· Advertisement Design</h4>
                              <h4>· Brand Design</h4>
                              <h4>· Character Design</h4>
                              <h4>· Editorial Design</h4>
                              <h4>· Capstone Design</h4>
                              <h4>· Package Design</h4>
                              <h4>· 3D Studio Design</h4>
                            </div>
                          ) : (
                            <div className="flex flex-wrap gap-3  font-light">
                              <h4>· Webdesign</h4>
                              <h4>· Reklame Design</h4>
                              <h4>· Brand Design</h4>
                              <h4>· Karakter Design</h4>
                              <h4>· Editorial Design</h4>
                              <h4>· Capstone Design</h4>
                              <h4>· Pakningsdesign</h4>
                              <h4>· 3D Studio Design</h4>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.h1
                    className="text-[20px] sm:text-[28px] md:text-[30px] text-orange-500 dark:text-[#88ff69] font-monaco font-bold xl:text-[40px]"
                    initial={{ opacity: 0, y: "-35%" }}
                    animate={{
                      opacity: thirdSlideAnimation ? 1 : 0,
                      y: thirdSlideAnimation ? "0%" : "-35%",
                    }}
                    transition={{ duration: 0.5, ease: "linear" }}
                  >
                    {"}"}
                  </motion.h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </AnimatePresence>
  );
}
