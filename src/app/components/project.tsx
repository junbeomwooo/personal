"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function Project() {

  const [title, setTitle] = useState("FOTBOLD");

  return (
    <AnimatePresence>
      {/* Container */}
      <div className="w-full h-screen pt-[135px] md:pt-[30px] xl:pt-0 flex px-6 md:px-10 lg:px-20 xl:items-center">
        {/* Box */}
        <div className="w-full">
          <motion.div
            className="flex items-end"
            initial={{ opacity: 0, y: "-35%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            <h2 className="text-[20px] md:text-[30px] xl:text-[40px] mr-4 text-[#8c1490] font-monaco font-bold ">
              function
            </h2>
            <h1 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[40px] text-orange-500 dark:text-[#88ff69] font-monaco font-bold mt-10">
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
            onSlideChange={(e) => {
              if (e.activeIndex === 0) {
                setTitle("FOTBOLD")
              } else if (e.activeIndex === 1) {
                setTitle("NMP")
              } else if (e.activeIndex === 2) {
                setTitle("UNICO")
              }
            }}
          >
            {/* fotbold */}
            <SwiperSlide>
              <div className="w-full block xl:flex justify-between gap-[50px] py-6 px-20 ">
                {/* photo */}
                <Image
                  src="/Fotbold.png"
                  alt="Fotbold : Live Football Scores & Comprehensive Football Info"
                  width={1000}
                  height={1000}
                  className="w-full xl:w-1/2 h-auto"
                />

                {/* explantion */}
                <div className="w-full xl:w-1/2">
                  <h1 className="text-[14px] sm:text-[17px] md:text-[20px] xl:text-[22px]  font-medium leading-[18px] mt-8 xl:mt-0">
                    Fotbold: Live Football Scores & Comprehensive Football Info
                  </h1>
                  <h2 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] mt-4 xl:mt-5 text-[#888888] dark:text-[#b4b4b4]">
                    Jul 2024 - Present
                  </h2>
                  <h3 className="mt-4 xl:mt-5 text-[11px] sm:text-[14px] md:text-[17px] xl:text-[19px] leading-[25px]">
                    I developed a movie chart site named “NMP” that showcases
                    popular recent movies as part of a mini-project. I used
                    Next.js and TypeScript, and it is deployed on Vercel.
                  </h3>
                  <h4 className="mt-4 xl:mt-5 text-[11px] sm:text-[14px] md:text-[17px] xl:text-[19px]">
                    • Client : HTML, CSS, Next.js, TypeScript
                    <br />
                    <br />
                    • Version and issue management : Github <br />
                    <br />• Deployment environment : Vercel • Design : Adobe
                    Illustrator, Adobe Photoshop
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full block xl:flex justify-between gap-[50px] py-6 px-20 ">
                {/* photo */}
                <Image
                  src="/Fotbold.png"
                  alt="Fotbold : Live Football Scores & Comprehensive Football Info"
                  width={1000}
                  height={1000}
                  className="w-full xl:w-1/2 h-auto"
                />

                {/* explantion */}
                <div className="w-full xl:w-1/2">
                  <h1 className="text-[14px] sm:text-[17px] md:text-[20px] xl:text-[22px]  font-medium leading-[18px] mt-8 xl:mt-0">
                    Fotbold: Live Football Scores & Comprehensive Football Info
                  </h1>
                  <h2 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] mt-4 xl:mt-5 text-[#888888] dark:text-[#b4b4b4]">
                    Jul 2024 - Present
                  </h2>
                  <h3 className="mt-4 xl:mt-5 text-[11px] sm:text-[14px] md:text-[17px] xl:text-[19px] leading-[25px]">
                    I developed a movie chart site named “NMP” that showcases
                    popular recent movies as part of a mini-project. I used
                    Next.js and TypeScript, and it is deployed on Vercel.
                  </h3>
                  <h4 className="mt-4 xl:mt-5 text-[11px] sm:text-[14px] md:text-[17px] xl:text-[19px]">
                    • Client : HTML, CSS, Next.js, TypeScript
                    <br />
                    <br />
                    • Version and issue management : Github <br />
                    <br />• Deployment environment : Vercel • Design : Adobe
                    Illustrator, Adobe Photoshop
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full block xl:flex justify-between gap-[50px] py-6 px-20 ">
                {/* photo */}
                <Image
                  src="/Fotbold.png"
                  alt="Fotbold : Live Football Scores & Comprehensive Football Info"
                  width={1000}
                  height={1000}
                  className="w-full xl:w-1/2 h-auto"
                />

                {/* explantion */}
                <div className="w-full xl:w-1/2">
                  <h1 className="text-[14px] sm:text-[17px] md:text-[20px] xl:text-[22px]  font-medium leading-[18px] mt-8 xl:mt-0">
                    Fotbold: Live Football Scores & Comprehensive Football Info
                  </h1>
                  <h2 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] mt-4 xl:mt-5 text-[#888888] dark:text-[#b4b4b4]">
                    Jul 2024 - Present
                  </h2>
                  <h3 className="mt-4 xl:mt-5 text-[11px] sm:text-[14px] md:text-[17px] xl:text-[19px] leading-[25px]">
                    I developed a movie chart site named “NMP” that showcases
                    popular recent movies as part of a mini-project. I used
                    Next.js and TypeScript, and it is deployed on Vercel.
                  </h3>
                  <h4 className="mt-4 xl:mt-5 text-[11px] sm:text-[14px] md:text-[17px] xl:text-[19px]">
                    • Client : HTML, CSS, Next.js, TypeScript
                    <br />
                    <br />
                    • Version and issue management : Github <br />
                    <br />• Deployment environment : Vercel • Design : Adobe
                    Illustrator, Adobe Photoshop
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <motion.h1
            className="text-[20px] sm:text-[28px] md:text-[30px] text-orange-500 dark:text-[#88ff69] font-monaco font-bold xl:text-[40px]"
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
