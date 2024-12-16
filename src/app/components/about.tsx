"use client";

import Image from "next/image";
import { ReactTyped } from "react-typed";

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
// import { Mousewheel, Pagination } from "swiper/modules";

export default function About() {
  return (
    <>
      <div className="w-full h-full pt-[140px] sm:pt-[220px] xl:pt-[350px] block xl:flex px-6 md:px-10 lg:px-40 justify-between items-center">
        {/* photo */}
        <Image
          src="/jun.png"
          alt="my photo"
          width={500}
          height={500}
          className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] m-auto xl:w-[400px] xl:hidden"
        />
        {/* about */}
        <div className="w-full">
          {/* funtion About() */}
          <div className="flex items-end">
            <h2 className="text-[24px] md:text-[30px] xl:text-[40px] mr-4 text-[#8c1490] font-monaco font-bold ">
              function
            </h2>
            <h1 className="text-[24px] sm:text-[28px] md:text-[30px] xl:text-[40px] text-orange-500 dark:text-[#88ff69] font-monaco font-bold mt-10">
              About( ) {"{"}
            </h1>
          </div>

          {/* content */}
          <div className="py-4 xl:max-w-[900px]">
            <ReactTyped
              strings={[
                "My name is Junbeom Woo and I am 26 years old.<br />" +
                  "I have a bright and outgoing personality and I am passionate about Web development.<br />" +
                  "I hold a residence permit under the EU regulations.<br /><br />" +
                  "I obtained a Bachelor’s degree in Visual Design in South Korea and continued my studies in a 6-month long Full-Stack coding boot camp focused on foundational knowledge in Web development.<br />" +
                  "I have moved to Denmark in late March 2024 and I am currently seeking employment in Copenhagen.",
              ]}
              typeSpeed={3}
              className="text-[14px] sm:text-[15px] md:text-[18px] xl:text-[20px] leading-[20px] sm:leading-[24px] xl:leading-[34px] overflow-y-auto"
              loop={false}
              showCursor={true}
              contentType="html"
            />
          </div>
          <h1 className="text-[24px] sm:text-[28px] md:text-[30px] text-orange-500 dark:text-[#88ff69] font-monaco font-bold xl:text-[40px]">
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
    </>
  );
}
