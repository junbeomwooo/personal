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
import { SiFlutter } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaGithub } from "react-icons/fa6";
import { SiAdobe } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaDocker } from "react-icons/fa";

export default function About() {
  const locale = useLocale();

  const [firstSlideAnimation, setFirstSlideAnimation] = useState(true);
  const [secondSlideAnimation, setSecondSlideAnimation] = useState(false);
  const [thirdSlideAnimation, setThirdSlideAnimation] = useState(false);
  const [forthSlideAnimation, setforthSlideAnimation] = useState(false);

  const handleSlideChange = (e: SwiperType) => {
    if (e.activeIndex === 0) {
      setFirstSlideAnimation(true);
      setSecondSlideAnimation(false);
      setThirdSlideAnimation(false);
      setforthSlideAnimation(false);
    } else if (e.activeIndex === 1) {
      setFirstSlideAnimation(false);
      setSecondSlideAnimation(true);
      setThirdSlideAnimation(false);
      setforthSlideAnimation(false);
    } else if (e.activeIndex === 2) {
      setFirstSlideAnimation(false);
      setSecondSlideAnimation(false);
      setThirdSlideAnimation(true);
      setforthSlideAnimation(false);
    } else if (e.activeIndex === 3) {
      setFirstSlideAnimation(false);
      setSecondSlideAnimation(false);
      setThirdSlideAnimation(false);
      setforthSlideAnimation(true);
    }
  };

  const h = useTranslations("HomePage");

  const hoverSkills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "TAILWIND", icon: RiTailwindCssFill },
    { name: "JS", icon: FaJs },
    { name: "TS", icon: SiTypescript },
    { name: "REACT & RN", icon: FaReact },
    { name: "NEXT", icon: RiNextjsFill },
    { name: "FLUTTER", icon: SiFlutter },
    { name: "NODE", icon: FaNodeJs },
    { name: "EXPRESS", icon: SiExpress },
    { name: "GIT", icon: FaGithub },
    { name: "MYSQL", icon: DiMysql },
    { name: "DOCKER", icon: FaDocker },
    { name: "ADOBE", icon: SiAdobe },
    { name: "FIGMA", icon: FaFigma },
  ];

  const HoverSkillButton = ({
    dataName,
    icon: Icon,
  }: {
    dataName: string;
    icon: IconType;
  }) => {
    return (
      <motion.button
        className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
        data-name={dataName}
        initial={{ opacity: 0, y: "-35%" }}
        animate={{
          opacity: secondSlideAnimation ? 1 : 0,
          y: secondSlideAnimation ? "0%" : "-35%",
        }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      >
        <Icon className="w-[25px] h-[25px] text-white dark:text-black" />
      </motion.button>
    );
  };

  const graphSkills = [
    { skill: "HTML & CSS", percentage: 100 },
    { skill: "JAVASCRIPT & TYPESCRIPT", percentage: 90 },
    { skill: "REACT & REACT NATIVE", percentage: 90 },
    { skill: "NEXT.JS", percentage: 80 },
    { skill: "DART & FLUTTER", percentage: 60 },
    { skill: "NODE.JS", percentage: 80 },
    { skill: "SQL", percentage: 80 },
    { skill: "GIT", percentage: 90 },
    { skill: "DESIGN TOOLS (ADOBE & FIGMA)", percentage: 80 },
  ];

  const GraphSkillsComponent = ({
    skill,
    percentage,
  }: {
    skill: string;
    percentage: number;
  }) => {
    return (
      <div>
        <div className="flex justify-between mt-6">
          <h3>{skill}</h3>
          <h3 className="text-sm font-normal">{percentage}</h3>
        </div>
        <motion.div
          className={`h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]`}
          initial={{ width: "0%" }}
          animate={{
            width: secondSlideAnimation ? `${percentage}%` : "0%",
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    );
  };

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
                    <h2 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[40px] mr-4 text-[#8c1490] font-monaco font-medium ">
                      function
                    </h2>
                    {firstSlideAnimation && (
                      <h1 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[40px] text-orange-500 dark:text-[#88ff69] font-monaco font-medium mt-10">
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
                        I am a full-stack developer based in Copenhagen. I
                        bring a strong technical foundation across frontend and
                        backend, along with UI/UX skills from my design
                        background. This helps me bridge the gap between
                        engineering and design and build intuitive, scalable
                        solutions.
                        <br /> I am driven by passion and love tackling new
                        projects while ensuring my work meets high standards.
                        <br /> Moreover, I am positive, friendly, and dedicated
                        to exploring my limits and going beyond them.
                      </h3>
                    ) : (
                      <h3 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] leading-[20px] sm:leading-[24px] xl:leading-[34px] overflow-y-auto">
                        Jeg er full-stack-udvikler baseret i København. Jeg
                        bringer et solidt teknisk fundament på tværs af frontend
                        og backend samt UI/UX-færdigheder fra min designbaggrund.
                        Dette hjælper mig med at bygge bro mellem engineering og
                        design og skabe intuitive, skalerbare løsninger. <br />
                        Jeg drives af passion og elsker at tage nye projekter
                        op, samtidig med at jeg sikrer, at mit arbejde lever op
                        til høje standarder. <br /> Derudover er jeg positiv,
                        venlig og dedikeret til at udforske mine grænser og gå
                        ud over dem.
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
                    <h2 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[40px] mr-4 text-[#8c1490] font-monaco font-medium ">
                      function
                    </h2>
                    {secondSlideAnimation && (
                      <h1 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[40px] text-orange-500 dark:text-[#88ff69] font-monaco font-medium mt-10">
                        <ShuffleText content={h("skills")} />( ) {"{"}
                      </h1>
                    )}
                  </div>

                  {/* graph */}
                  <div className="font-medium text-sm ">
                    {graphSkills.map((v, i) => {
                      return (
                        <GraphSkillsComponent
                          key={i}
                          skill={v.skill}
                          percentage={v.percentage}
                        />
                      );
                    })}
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
                    {hoverSkills.map((v, i) => {
                      return (
                        <HoverSkillButton
                          key={i}
                          dataName={v.name}
                          icon={v.icon}
                        />
                      );
                    })}
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

          {/* Third: Experience */}
          <SwiperSlide className="w-full h-screen">
            <div className="flex items-center justify-center h-screen">
              <div className="w-full h-auto block xl:flex px-6 md:px-10 lg:px-40 justify-center items-center">
                <div>
                  {/* title */}
                  <div className="flex items-end">
                    <h2 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[40px] mr-4 text-[#8c1490] font-monaco font-medium ">
                      function
                    </h2>
                    {thirdSlideAnimation && (
                      <h1 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[40px] text-orange-500 dark:text-[#88ff69] font-monaco font-medium mt-10">
                        <ShuffleText content={h("experience")} />( ) {"{"}
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
                    {/* first experience */}
                    <div>
                      <h1 className="text-[14px] sm:text-[17px] md:text-[20px] xl:text-[22px] font-medium leading-[18px]">
                        {locale === "en"
                          ? "Spuddle, Denmark"
                          : "Spuddle, Danmark"}
                      </h1>
                      <div className="flex justify-between">
                      <h2 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] mt-4 xl:mt-5  text-[#888888] dark:text-[#b4b4b4]">
                        {locale === "en"
                          ? "Full-Stack Developer"
                          : "Full-Stack-udvikler"}
                      </h2>
                       <h2 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] mt-4 xl:mt-5  text-[#888888] dark:text-[#b4b4b4]">{locale === "en" ? "March 2026 - Present" : "Marts 2026 - Nu"}</h2>
                      </div>
                      {/* courses */}
                      <div>
                        <div className="text-[9.5px] sm:text-[11px] md:text-[14px] xl:text-[16px] mt-4 xl:mt-5 ml-4">
                          {locale === "en" ? (
                            <div className="flex flex-wrap gap-3 font-light">
                              <h4>
                                · Own features end-to-end across React Native
                                and Hono/PostgreSQL
                              </h4>
                              <h4>
                                · Build multiple interactive question types
                                across UI and backend schema
                              </h4>
                              <h4>
                                · Build REST APIs and type-safe schemas, keeping
                                frontend and backend in sync
                              </h4>
                              <h4>
                                · Configure staging and TestFlight deployment
                                for the mobile app
                              </h4>
                              <h4>
                                · Migrate the mobile test suite to Jest,
                                establishing testing setup for shared logic
                              </h4>
                            </div>
                          ) : (
                            <div className="flex flex-wrap gap-3 font-light">
                              <h4>
                                · Ejer features end-to-end på tværs af React
                                Native og Hono/PostgreSQL
                              </h4>
                              <h4>
                                · Bygger flere interaktive spørgsmålstyper på
                                tværs af UI og backend-skema
                              </h4>
                              <h4>
                                · Bygger REST API’er og type-sikre skemaer og
                                holder frontend og backend synkroniseret
                              </h4>
                              <h4>
                                · Konfigurerer staging- og TestFlight-deployment
                                til mobilappen
                              </h4>
                              <h4>
                                · Migrerede mobil-testsuiten til Jest og
                                etablerede testopsætning for delt logik
                              </h4>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* second experience */}
                    <div className="mt-2">
                      <div className="flex justify-between">
                      <h2 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] mt-4 xl:mt-5  text-[#888888] dark:text-[#b4b4b4]">
                        {locale === "en"
                          ? "Frontend Developer Intern"
                          : "Frontend-udvikler Praktikant"}
                      </h2>
                       <h2 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] mt-4 xl:mt-5  text-[#888888] dark:text-[#b4b4b4]">{locale === "en" ? "December 2025 - March 2026" : "December 2025 - Marts 2026"}</h2>
                      </div>
                      {/* courses */}
                      <div>
                        <div className="text-[9.5px] sm:text-[11px] md:text-[14px] xl:text-[16px] mt-4 xl:mt-5 ml-4">
                          {locale === "en" ? (
                            <div className="flex flex-wrap gap-3 font-light">
                              <h4>
                                · Developed reusable components and custom hooks
                                for maintainable code
                              </h4>
                              <h4>
                                · Built core app UI and screens with React
                                Native and TypeScript
                              </h4>
                            </div>
                          ) : (
                            <div className="flex flex-wrap gap-3 font-light">
                              <h4>
                                · Udviklede genanvendelige komponenter og custom
                                hooks for vedligeholdelig kode
                              </h4>
                              <h4>
                                · Byggede app-UI og skærme med React Native og
                                TypeScript
                              </h4>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* third experience */}
                    <div className="mt-14">
                      <h1 className="text-[14px] sm:text-[17px] md:text-[20px] xl:text-[22px]  font-medium leading-[18px]">
                        {locale === "en"
                          ? "Inværse Social ApS, Denmark"
                          : "Inværse Social ApS, Danmark"}
                      </h1>
                      <div className="flex justify-between">
                      <h2 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] mt-4 xl:mt-5 text-[#888888] dark:text-[#b4b4b4]">
                        {locale === "en"
                          ? "Frontend Developer Intern"
                          : "Frontend Udvikler Praktikant "}
                      </h2>
                      <h2 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] mt-4 xl:mt-5  text-[#888888] dark:text-[#b4b4b4]">{locale === "en" ? "September 2025 - November 2025" : "September 2025 - November 2025"}</h2>
                      </div>
                      {/* courses */}
                      <div>
                        <div className="text-[9.5px] sm:text-[11px] md:text-[14px] xl:text-[16px] mt-4 xl:mt-5 ml-4">
                          {locale === "en" ? (
                            <div className="flex flex-wrap gap-3  font-light">
                              <h4>
                                · Led the initial app migration to Flutter,
                                architecting the system from the ground up
                              </h4>
                              <h4>
                                · Designed the mobile UI and built core
                                application features
                              </h4>
                            </div>
                          ) : (
                            <div className="flex flex-wrap gap-3  font-light">
                              <h4>
                                · Ledede den indledende app-migration til
                                Flutter og arkitekturerede systemet fra bunden
                              </h4>
                              <h4>
                                · Designede mobil-UI og udviklede
                                kernefunktioner i applikationen
                              </h4>
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

          {/* Forth: Education */}
          <SwiperSlide className="w-full h-screen">
            <div className="flex items-center justify-center h-screen">
              <div className="w-full h-auto block xl:flex px-6 md:px-10 lg:px-40 justify-center items-center">
                <div>
                  {/* title */}
                  <div className="flex items-end">
                    <h2 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[40px] mr-4 text-[#8c1490] font-monaco font-medium ">
                      function
                    </h2>
                    {forthSlideAnimation && (
                      <h1 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[40px] text-orange-500 dark:text-[#88ff69] font-monaco font-medium mt-10">
                        <ShuffleText content={h("education")} />( ) {"{"}
                      </h1>
                    )}
                  </div>

                  {/* content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: forthSlideAnimation ? 1 : 0 }}
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
                          ? "August 2022 - January 2023 (920hr / 115days)"
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
                      opacity: forthSlideAnimation ? 1 : 0,
                      y: forthSlideAnimation ? "0%" : "-35%",
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
