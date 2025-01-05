"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function Project() {
  const [title, setTitle] = useState("FOTBOLD");

  const locale = useLocale();

  const router = useRouter();

  console.log(window.innerWidth);
  return (
    <AnimatePresence>
      {/* Container */}
      <div className="w-full h-screen flex md:px-10 lg:px-40 xl:px-20 2xl:px-40 items-center relative">
        {/* Box */}
        <div className="w-full h-auto scale-90 md:scale-[85%] xl:scale-100">
          <motion.div
            className="flex items-end px-6 "
            initial={{ opacity: 0, y: "-35%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            <h2 className="text-[20px] md:text-[30px] xl:text-[40px] mr-4 text-[#8c1490] font-monaco font-bold ">
              function
            </h2>
            <h1 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[40px] text-orange-500 dark:text-[#88ff69] font-monaco font-bold">
              {title}( ) {"{"}
            </h1>
          </motion.div>

          <Swiper
            navigation={true}
            modules={[Navigation]}
            onInit={(swiper) => {
              swiper.navigation.nextEl.classList.add("hoverable");
              swiper.navigation.prevEl.classList.add("hoverable");
            }}
            className="absolute h-auto"
            onSlideChange={(e) => {
              if (e.activeIndex === 0) {
                setTitle("FOTBOLD");
              } else if (e.activeIndex === 1) {
                setTitle("UNICO");
              } else if (e.activeIndex === 2) {
                setTitle("NMP");
              }
            }}
          >
            {/* fotbold */}
            <SwiperSlide>
              <div className="w-full h-auto block xl:flex justify-between gap-[60px] py-4 xl:py-14 px-10 sm:px-20 items-center">
                {/* photo */}
                <Image
                  src="/fotbold_mockup.jpg"
                  alt="Fotbold : Live Football Scores & Comprehensive Football Info"
                  width={3000}
                  height={2000}
                  className="w-full xl:w-1/2 h-auto hoverable hover:opacity-80"
                />

                {/* explantion */}
                <div className="w-full xl:w-1/2">
                  <h1 className="text-[14px] sm:text-[17px] md:text-[20px] xl:text-[22px]  font-semibold leading-[18px] mt-4 sm:mt-6 xl:mt-0 md:leading-[30px]">
                    Fotbold: Live Football Scores & Comprehensive Football Info
                  </h1>
                  <h2 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] mt-2 sm:mt-4 xl:mt-5 text-[#888888] dark:text-[#b4b4b4]">
                    Jul 2024 - Present
                  </h2>
                  <h3 className="mt-2 sm:mt-4 xl:mt-5 text-[12px] sm:text-[15px] md:text-[18px] xl:text-[20px] leading-[15px] sm:leading-[30px]">
                    I developed a movie chart site named “NMP” that showcases
                    popular recent movies as part of a mini-project. I used
                    Next.js and TypeScript, and it is deployed on Vercel.
                  </h3>

                  {/* skills */}
                  <div className="flex gap-2 mt-4 sm:mt-6 flex-wrap">
                    <h1 className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      HTML
                    </h1>
                    <h1 className="px-1 sm:px-3  py-0.5 sm:py-1 bg-orange-500  dark:bg-green-600  text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      CSS
                    </h1>
                    <h1 className="px-1 sm:px-3  py-0.5 sm:py-1 bg-orange-500  dark:bg-green-600  text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      Tailwind CSS
                    </h1>
                    <h1 className="px-1 sm:px-3  py-0.5 sm:py-1 bg-orange-500  dark:bg-green-600  text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      Next.js
                    </h1>
                    <h1 className="px-1 sm:px-3  py-0.5 sm:py-1 bg-orange-500  dark:bg-green-600  text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      TypeScript
                    </h1>
                    <h1 className="px-1 sm:px-3  py-0.5 sm:py-1 bg-orange-500  dark:bg-green-600  text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      Vercel
                    </h1>
                    <h1 className="px-1 sm:px-3  py-0.5 sm:py-1 bg-orange-500  dark:bg-green-600  text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      Github
                    </h1>
                  </div>
                  {/* buttons */}
                  <div className="flex justify-between mt-6 sm:mt-11 gap-4">
                    <button className="bg-none w-1/2 py-3 text-orange-500 font-medium border-2 border-solid border-orange-500 hover:no-underline hoverable hover:bg-orange-500 hover:text-white hover:dark:text-white dark:border-green-500 dark:text-green-500 hover:dark:bg-green-500 text-[13px] sm:text-base" onClick={() => router.push("/")}>
                      Move to page
                    </button>
                    <button className="bg-none w-1/2 py-3 text-orange-500 font-medium border-2 border-solid border-orange-500 hover:no-underline hoverable hover:bg-orange-500 hover:text-white hover:dark:text-white dark:border-green-500 dark:text-green-500 hover:dark:bg-green-500 text-[13px] sm:text-base" onClick={() => window.open("https://github.com/junbeomwooo/fodbold")}>
                      View on Github
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* unico */}
            <SwiperSlide>
              <div className="w-full block xl:flex justify-between gap-[60px] py-4 xl:py-14 px-10 sm:px-20 items-center">
                {/* photo */}
                <Image
                  src="/unico-mockup.jpg"
                  alt="UNICO: Online Eyewear Store"
                  width={3000}
                  height={2000}
                  className="w-full xl:w-1/2 h-auto hoverable hover:opacity-80"
                />

                {/* explantion */}
                <div className="w-full xl:w-1/2">
                  <h1 className="text-[14px] sm:text-[17px] md:text-[20px] xl:text-[22px]  font-semibold leading-[18px] mt-4 sm:mt-6 xl:mt-0 md:leading-[30px]">
                    UNICO: Online Eyewear Store
                  </h1>
                  <h2 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] mt-2 sm:mt-4 xl:mt-5 text-[#888888] dark:text-[#b4b4b4]">
                    Aug 2022 - Jan 2023
                  </h2>
                  {locale === "en" ? (
                    <h3 className="mt-2 sm:mt-4 xl:mt-5 text-[12px] sm:text-[15px] md:text-[18px] xl:text-[20px] leading-[15px] sm:leading-[30px]">
                      I created a virtual brand named ‘UNICO’ specializing in
                      selling sunglasses and eyeglasses through a responsive
                      website. The site ensures smooth communication between
                      clients and data with a backend server. Additionally, I
                      implemented efficient data processing and retrieval in
                      dynamic web applications using MySQL.
                    </h3>
                  ) : (
                    <h3 className="mt-2 sm:mt-4 xl:mt-5 text-[12px] sm:text-[15px] md:text-[18px] xl:text-[20px] leading-[15px] sm:leading-[30px]">
                      Jeg har oprettet et virtuelt brand ved navn ‘UNICO’, der
                      specialiserer sig i at sælge solbriller og briller gennem
                      en responsiv hjemmeside. Siden sikrer smidig kommunikation
                      mellem kunder og data ved hjælp af en backend-server.
                      Derudover implementerede jeg effektiv databehandling og
                      hentning i dynamiske webapplikationer ved hjælp af MySQL.
                    </h3>
                  )}

                  {/* skills */}
                  <div className="flex gap-2 mt-4 sm:mt-6 flex-wrap">
                    <h1 className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      HTML
                    </h1>
                    <h1 className="px-1 sm:px-3  py-0.5 sm:py-1 bg-orange-500  dark:bg-green-600  text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      CSS
                    </h1>
                    <h1 className="px-1 sm:px-3  py-0.5 sm:py-1 bg-orange-500  dark:bg-green-600  text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      Styled-components
                    </h1>
                    <h1 className="px-1 sm:px-3  py-0.5 sm:py-1 bg-orange-500  dark:bg-green-600  text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      JavaScript
                    </h1>
                    <h1 className="px-1 sm:px-3  py-0.5 sm:py-1 bg-orange-500  dark:bg-green-600  text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      React
                    </h1>
                    <h1 className="px-1 sm:px-3  py-0.5 sm:py-1 bg-orange-500  dark:bg-green-600  text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      Redux
                    </h1>
                    <h1 className="px-1 sm:px-3  py-0.5 sm:py-1 bg-orange-500  dark:bg-green-600  text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      Node.js
                    </h1>
                    <h1 className="px-1 sm:px-3  py-0.5 sm:py-1 bg-orange-500  dark:bg-green-600  text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      Express
                    </h1>
                    <h1 className="px-1 sm:px-3  py-0.5 sm:py-1 bg-orange-500  dark:bg-green-600  text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      MySQL
                    </h1>
                    <h1 className="px-1 sm:px-3  py-0.5 sm:py-1 bg-orange-500  dark:bg-green-600  text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      AWS
                    </h1>
                    <h1 className="px-1 sm:px-3  py-0.5 sm:py-1 bg-orange-500  dark:bg-green-600  text-[10px] sm:text-sm rounded-lg text-white font-semibold">
                      Github
                    </h1>
                  </div>
                  {/* buttons */}
                  <div className="flex justify-between mt-6 sm:mt-11 gap-4">
                    <button className="bg-none w-1/2 py-3 text-orange-500 font-medium border-2 border-solid border-orange-500 hover:no-underline hoverable hover:bg-orange-500 hover:text-white hover:dark:text-white dark:border-green-500 dark:text-green-500 hover:dark:bg-green-500 text-[13px] sm:text-base" onClick={() => router.push("http://ec2-3-73-1-218.eu-central-1.compute.amazonaws.com:3001/")}>
                      Move to page
                    </button>
                    <button className="bg-none w-1/2 py-3 text-orange-500 font-medium border-2 border-solid border-orange-500 hover:no-underline hoverable hover:bg-orange-500 hover:text-white hover:dark:text-white dark:border-green-500 dark:text-green-500 hover:dark:bg-green-500 text-[13px] sm:text-base" onClick={() => window.open("https://github.com/junbeomwooo/web-unico")}>
                      View on Github
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <motion.h1
            className="text-[20px] sm:text-[28px] md:text-[30px] text-orange-500 dark:text-[#88ff69] font-monaco font-bold xl:text-[40px] px-6"
            initial={{ opacity: 0, y: "-35%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            {"}"}
          </motion.h1>
        </div>
      </div>
    </AnimatePresence>
  );
}
