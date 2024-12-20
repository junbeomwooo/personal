"use client";

import Image from "next/image";
import { ReactTyped } from "react-typed";
import { useLocale } from "next-intl";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

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

  return (
    <div className="h-full w-full relative m-0 p-0">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        loop={false}
        modules={[Mousewheel, Pagination]}
        className="w-full h-screen"
      >
        {/* First: Who am I  */}
        <SwiperSlide className="w-full h-screen">
          <div className="w-full h-screen pt-[135px] md:pt-[220px] xl:pt-0 block xl:flex px-6 md:px-10 lg:px-40 justify-between items-center">
            {/* photo */}
            <Image
              src="/jun.png"
              alt="my photo"
              width={500}
              height={500}
              className="w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] m-auto xl:w-[400px] xl:hidden"
            />
            {/* about */}
            <div className="w-full">
              {/* funtion About() */}
              <div className="flex items-end">
                <h2 className="text-[20px] md:text-[30px] xl:text-[40px] mr-4 text-[#8c1490] font-monaco font-bold ">
                  function
                </h2>
                <h1 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[40px] text-orange-500 dark:text-[#88ff69] font-monaco font-bold mt-10">
                  WhoAmI( ) {"{"}
                </h1>
              </div>

              {/* content */}
              <div className="py-4 xl:max-w-[900px]">
                <ReactTyped
                  strings={
                    locale === "en"
                      ? [
                          "My name is Junbeom Woo and I am 26 years old.<br />" +
                            "I have a bright and outgoing personality and I am passionate about Web development.<br />" +
                            "I hold a residence permit under the EU regulations.<br /><br />" +
                            "I obtained a Bachelor’s degree in Visual Design in South Korea and continued my studies in a 6-month long Full-Stack coding boot camp focused on foundational knowledge in Web development.<br />" +
                            "I have moved to Denmark in late March 2024 and I am currently seeking employment in Copenhagen.",
                        ]
                      : [
                          "Mit navn er Junbeom Woo, og jeg er 26 år gammel.<br />" +
                            "Jeg har en lys og udadvendt personlighed, og jeg brænder for webudvikling.<br />" +
                            "Jeg har en opholdstilladelse under EU-reglerne.<br /><br />" +
                            "Jeg har opnået en bachelorgrad i visuel design i Sydkorea og fortsatte mine studier på et 6-måneders Full-Stack kode-bootcamp med fokus på grundlæggende viden om webudvikling.<br />" +
                            "Jeg flyttede til Danmark i slutningen af marts 2024, og jeg søger i øjeblikket arbejde i København.",
                        ]
                  }
                  typeSpeed={3}
                  className="text-[13px] sm:text-[15px] md:text-[18px] xl:text-[20px] leading-[20px] sm:leading-[24px] xl:leading-[34px] overflow-y-auto"
                  loop={false}
                  showCursor={true}
                  contentType="html"
                />
              </div>
              <h1 className="text-[20px] sm:text-[28px] md:text-[30px] text-orange-500 dark:text-[#88ff69] font-monaco font-bold xl:text-[40px]">
                {"}"}
              </h1>
            </div>
            {/* photo */}
            <Image
              src="/jun.png"
              alt="my photo"
              width={500}
              height={500}
              className="hidden m-auto xl:block xl:w-[400px] xl:h-[400px]"
            />
          </div>
        </SwiperSlide>

        {/* Second: Skills */}
        <SwiperSlide className="w-full h-screen">
          <div className="w-full h-screen pt-[135px] md:pt-[220px] xl:pt-0 block xl:flex px-6 md:px-10 lg:px-40 justify-between items-center">
            {/* Skills */}
            <div className="w-full xl:w-1/2 mt-14 sm:mt-0">
              {/* funtion Skills() */}
              <div className="flex items-end">
                <h2 className="text-[20px] md:text-[30px] xl:text-[40px] mr-4 text-[#8c1490] font-monaco font-bold ">
                  function
                </h2>
                <h1 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[40px] text-orange-500 dark:text-[#88ff69] font-monaco font-bold mt-10">
                  Skills( ) {"{"}
                </h1>
              </div>

              {/* text */}
              <div className="py-4 xl:max-w-[900px] hidden md:block">
                <ReactTyped
                  strings={
                    locale === "en"
                      ? [
                          "I specialize in front-end development.<br />" +
                            "I also have experience in full-stack development using Node.js, Express and MySQL.<br /> <br />" +
                            " I primarily build web applications using HTML, CSS, and JS, with React and Next.js.<br />" +
                            "    I handle data through server and API communication, efficiently processing it and displaying it in a user-friendly design.",
                        ]
                      : [
                          "Jeg specialiserer mig i front-end udvikling, men har også erfaring med full-stack udvikling ved hjælp af Node.js, Express og MySQL.<br /> <br />" +
                            "Jeg bygger primært webapplikationer ved hjælp af HTML, CSS og JS, med React og Next.js.<br />" +
                            "Jeg håndterer data gennem server- og API-kommunikation, behandler dem effektivt og viser dem i et brugervenligt design.",
                        ]
                  }
                  typeSpeed={3}
                  className="text-[13px] sm:text-[15px] md:text-[18px] xl:text-[20px] leading-[20px] sm:leading-[24px] xl:leading-[34px] overflow-y-auto"
                  loop={false}
                  showCursor={true}
                  contentType="html"
                />
              </div>

              {/* graph */}
              <div className="font-medium text-sm xl:hidden ">
                {/* HTML & CSS */}
                <div>
                  <div className="flex justify-between mt-6">
                    <h3>HTML & CSS</h3>
                    <h3 className="text-sm font-normal">100</h3>
                  </div>
                  <div className="w-[100%] h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]" />
                </div>

                {/* JS & TS */}
                <div>
                  <div className="flex justify-between mt-4">
                    <h3>JAVASCRIPT & TYPESCRIPT</h3>
                    <h3 className="text-sm font-normal">80</h3>
                  </div>
                  <div className="w-[80%] h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]" />
                </div>
                {/* React & Next.js */}
                <div>
                  <div className="flex justify-between mt-4">
                    <h3>REACT & NEXT.JS</h3>
                    <h3 className="text-sm font-normal">90</h3>
                  </div>
                  <div className="w-[90%] h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]" />
                </div>

                {/* Node.js & EXPRESS */}
                <div>
                  <div className="flex justify-between mt-4">
                    <h3>NODE.JS & EXPRESS</h3>
                    <h3 className="text-sm font-normal">70</h3>
                  </div>
                  <div className="w-[70%] h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]" />
                </div>

                {/* MySQL*/}
                <div>
                  <div className="flex justify-between mt-4">
                    <h3>MYSQL</h3>
                    <h3 className="text-sm font-normal">70</h3>
                  </div>
                  <div className="w-[70%] h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]" />
                </div>

                {/* ADOBE ILLUSTRATOR & PHOTOSHOP*/}
                <div>
                  <div className="flex justify-between mt-4">
                    <h3>Adobe Illustrator & PhotoShop</h3>
                    <h3 className="text-sm font-normal">80</h3>
                  </div>
                  <div className="w-[80%] h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]" />
                </div>

                {/* hover me! */}
                <div className="mt-10 hidden sm:block">
                  {" "}
                  <h3 className="font-medium text-orange-500 dark:text-[#88ff69]">Hover Me !</h3>
                </div>
                {/* skills icon */}
                <div className="mt-4 gap-4 flex-wrap hidden sm:flex  opacity-60">
                  {/* html */}
                  <button
                    className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                    data-name="HTML"
                  >
                    <FaHtml5 className="w-[25px] h-[25px] text-white dark:text-black" />
                  </button>

                  {/* css */}
                  <button
                    className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                    data-name="CSS"
                  >
                    <FaCss3Alt className="w-[25px] h-[25px] text-white dark:text-black" />
                  </button>

                  {/* TailwindCss */}
                  <button
                    className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                    data-name="TAILWIND"
                  >
                    <RiTailwindCssFill className="w-[25px] h-[25px] text-white dark:text-black" />
                  </button>

                  {/* JS */}
                  <button
                    className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                    data-name="JS"
                  >
                    <FaJs className="w-[20px] h-[20px] text-white dark:text-black" />
                  </button>

                  {/* TS */}
                  <button
                    className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                    data-name="TS"
                  >
                    <SiTypescript className="w-[20px] h-[20px] text-white dark:text-black" />
                  </button>

                  {/* React */}
                  <button
                    className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                    data-name="REACT"
                  >
                    <FaReact className="w-[25px] h-[25px] text-white dark:text-black" />
                  </button>

                  {/* Next.js */}
                  <button
                    className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                    data-name="NEXT"
                  >
                    <RiNextjsFill className="w-[25px] h-[25px] text-white dark:text-black" />
                  </button>

                  {/* Node.js */}
                  <button
                    className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                    data-name="NODE"
                  >
                    <FaNodeJs className="w-[25px] h-[25px] text-white dark:text-black" />
                  </button>

                  {/* Express */}
                  <button
                    className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                    data-name="EXPRESS"
                  >
                    <SiExpress className="w-[25px] h-[25px] text-white dark:text-black" />
                  </button>

                  {/* MySQL */}
                  <button
                    className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                    data-name="MYSQL"
                  >
                    <DiMysql className="w-[25px] h-[25px] text-white dark:text-black" />
                  </button>

                  {/* Illustrator */}
                  <button
                    className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                    data-name="ILLUSTRATOR"
                  >
                    <SiAdobeillustrator className="w-[20px] h-[20px] text-white dark:text-black" />
                  </button>

                  {/* PhotoShop */}
                  <button
                    className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                    data-name="PHOTOSHOP"
                  >
                    <SiAdobephotoshop className="w-[20px] h-[20px] text-white dark:text-black" />
                  </button>
                </div>
              </div>
              <h1 className="text-[20px] sm:text-[28px] md:text-[30px] text-orange-500 dark:text-[#88ff69] font-monaco font-bold xl:text-[40px] mt-6">
                {"}"}
              </h1>
            </div>
            {/* graph 2 */}
            <div className="font-medium hidden text-[18px] xl:block xl:w-1/2 ml-20 ">
              {/* HTML & CSS */}
              <div>
                <div className="flex justify-between ">
                  <h3>HTML & CSS</h3>
                  <h3 className="text-sm font-normal">100</h3>
                </div>
                <div className="w-[100%] h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]" />
              </div>

              {/* JS & TS */}
              <div>
                <div className="flex justify-between mt-8">
                  <h3>JAVASCRIPT & TYPESCRIPT</h3>
                  <h3 className="text-sm font-normal">80</h3>
                </div>
                <div className="w-[80%] h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]" />
              </div>

              {/* React & Next.js */}
              <div>
                <div className="flex justify-between mt-8">
                  <h3>REACT & NEXT.JS</h3>
                  <h3 className="text-sm font-normal">90</h3>
                </div>
                <div className="w-[90%] h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]" />
              </div>

              {/* Node.js & EXPRESS */}
              <div>
                <div className="flex justify-between mt-8">
                  <h3>NODE.JS & EXPRESS</h3>
                  <h3 className="text-sm font-normal">70</h3>
                </div>
                <div className="w-[70%] h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]" />
              </div>

              {/* MySQL*/}
              <div>
                <div className="flex justify-between mt-8">
                  <h3>MYSQL</h3>
                  <h3 className="text-sm font-normal">70</h3>
                </div>
                <div className="w-[70%] h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]" />
              </div>

              {/* ADOBE ILLUSTRATOR & PHOTOSHOP*/}
              <div>
                <div className="flex justify-between mt-8">
                  <h3>Adobe Illustrator & Photoshop</h3>
                  <h3 className="text-sm font-normal">80</h3>
                </div>
                <div className="w-[80%] h-[5px] bg-orange-500 mt-2 dark:bg-[#88ff69]" />
              </div>

                  {/* hover me! */}
              <div className="mt-10 hidden sm:block">
                  {" "}
                  <h3 className="font-medium text-[15px] text-orange-500 dark:text-[#88ff69]">Hover Me !</h3>
                </div>

              {/* skills icon */}
              <div className="mt-4 gap-4 flex-wrap hidden sm:flex  opacity-60">
                {/* html */}
                <button
                  className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                  data-name="HTML"
                >
                  <FaHtml5 className="w-[25px] h-[25px] text-white dark:text-black" />
                </button>

                {/* css */}
                <button
                  className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                  data-name="CSS"
                >
                  <FaCss3Alt className="w-[25px] h-[25px] text-white dark:text-black" />
                </button>

                {/* TailwindCss */}
                <button
                  className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                  data-name="TAILWIND"
                >
                  <RiTailwindCssFill className="w-[25px] h-[25px] text-white dark:text-black" />
                </button>

                {/* JS */}
                <button
                  className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                  data-name="JS"
                >
                  <FaJs className="w-[20px] h-[20px] text-white dark:text-black" />
                </button>

                {/* TS */}
                <button
                  className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                  data-name="TS"
                >
                  <SiTypescript className="w-[20px] h-[20px] text-white dark:text-black" />
                </button>

                {/* React */}
                <button
                  className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                  data-name="REACT"
                >
                  <FaReact className="w-[25px] h-[25px] text-white dark:text-black" />
                </button>

                {/* Next.js */}
                <button
                  className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                  data-name="NEXT"
                >
                  <RiNextjsFill className="w-[25px] h-[25px] text-white dark:text-black" />
                </button>

                {/* Node.js */}
                <button
                  className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                  data-name="NODE"
                >
                  <FaNodeJs className="w-[25px] h-[25px] text-white dark:text-black" />
                </button>

                {/* Express */}
                <button
                  className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                  data-name="EXPRESS"
                >
                  <SiExpress className="w-[25px] h-[25px] text-white dark:text-black" />
                </button>

                {/* MySQL */}
                <button
                  className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                  data-name="MYSQL"
                >
                  <DiMysql className="w-[25px] h-[25px] text-white dark:text-black" />
                </button>

                {/* Illustrator */}
                <button
                  className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                  data-name="ILLUSTRATOR"
                >
                  <SiAdobeillustrator className="w-[20px] h-[20px] text-white dark:text-black" />
                </button>

                {/* PhotoShop */}
                <button
                  className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center dark:bg-[#88ff69] hoverable2"
                  data-name="PHOTOSHOP"
                >
                  <SiAdobephotoshop className="w-[20px] h-[20px] text-white dark:text-black" />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
