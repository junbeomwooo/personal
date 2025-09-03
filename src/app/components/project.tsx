"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import { Swiper, SwiperSlide } from "swiper/react";
import { Switch } from "@headlessui/react";

import { LuSunMedium } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import ShuffleText from "react-shuffle-text";

export default function Project() {
  const [title, setTitle] = useState("WEATHER_APP");

  const locale = useLocale();

  const router = useRouter();

  const { theme } = useTheme();

  const [mode, setMode] = useState(theme);

  return (
    <AnimatePresence>
      {/* Container */}
      <div className="w-full h-screen flex md:px-10 lg:px-40 xl:px-20 2xl:px-40 items-center relative">
        {/* Box */}
        <div className="w-full h-auto scale-90 sm:scale-[80%] xl:scale-100">
          <div className="flex items-end px-6 ">
            <h2 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[40px] mr-4 text-[#8c1490] font-monaco font-medium ">
              function
            </h2>
            <h1 className="text-[20px] sm:text-[28px] md:text-[30px] xl:text-[40px] text-orange-500 dark:text-[#88ff69] font-monaco font-medium">
              <ShuffleText content={title} />( ) {"{"}
            </h1>
          </div>

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
                setTitle("WEATHER_APP");
              } else if (e.activeIndex === 1) {
                setTitle("FOTBOLD");
              } else if (e.activeIndex === 2) {
                setTitle("UNICO");
              } else if (e.activeIndex === 3) {
                setTitle("NMP");
              }
            }}
          >
            {/* Weather App */}
            <SwiperSlide>
              <div className="w-full h-auto block xl:flex justify-between gap-[60px] py-4 xl:py-14 px-10 sm:px-20 items-center">
                {/* photo */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: title === "WEATHER_APP" ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full xl:w-1/2 h-auto hoverable hover:opacity-80"
                >
                  <Image
                    src={
                      mode === "light"
                        ? "/weather_app_mockup.jpeg"
                        : "/weather_app_mockup_dark.jpeg"
                    }
                    alt="Weather Forecast App (React Native + Expo)"
                    width={3000}
                    height={2000}
                    onClick={() =>
                      router.push(
                        "https://expo.dev/preview/update?message=Publishing+Weather+Application&updateRuntimeVersion=1.0.0&createdAt=2025-09-02T00%3A26%3A36.713Z&slug=exp&projectId=bf7b74cf-6294-437a-b78e-c98a17564095&group=79b26f1c-aa42-417c-95b3-12ace4a547cf"
                      )
                    }
                  />
                </motion.div>

                <div className="w-full xl:w-1/2 mt-4 sm:mt-6 xl:mt-0">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: title === "WEATHER_APP" ? 1 : 0 }}
                    transition={{ duration: 1, ease: "linear" }}
                  >
                    {/* Title and Switch */}
                    <div className="flex items-center justify-between">
                      {/* title */}
                      <h1 className="text-[14px] sm:text-[17px] md:text-[20px] xl:text-[22px]  font-semibold leading-[18px] md:leading-[30px]">
                        Weather Forecast App (React Native + Expo)
                      </h1>
                      {/* dark/ light mode button */}
                      <Switch
                        checked={mode === "dark"}
                        onChange={() => {
                          setMode(mode === "light" ? "dark" : "light");
                        }}
                        className="group inline-flex h-4 w-8 sm:h-6 sm:w-11 items-center rounded-full bg-orange-500 transition data-[checked]:bg-green-600 hoverable"
                      >
                        <span className="size-3 sm:size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-4 sm:group-data-[checked]:translate-x-6 flex items-center justify-center">
                          {mode === "light" ? (
                            <LuSunMedium className="scale-75 text-orange-600 font-bold" />
                          ) : (
                            <FaRegMoon className="scale-75 text-green-600 font-bold" />
                          )}
                        </span>
                      </Switch>
                    </div>
                    {/* period */}
                    <h2 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] mt-2 sm:mt-4 xl:mt-5 text-[#888888] dark:text-[#b4b4b4]">
                      Jun 2025 - Aug 2025
                    </h2>
                    {/* Explanation */}
                    <h3 className="mt-2 sm:mt-4 xl:mt-5 text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] leading-[15px] sm:leading-[30px]">
                      {locale === "en"
                        ? "A cross-platform weather app for iOS and Android, built with React Native and Expo. It provides current, hourly, and daily forecasts. The app automatically adjusts its theme according to local sunrise and sunset times, allows users to save their favorite cities, and view them on a map with detailed weather information."
                        : "En tværplatforms-vejrapp til iOS og Android, bygget med React Native og Expo. Den giver aktuelle, time-for-time og daglige vejrudsigter. Appen justerer automatisk sit tema i henhold til lokal solopgang og solnedgang, og brugere kan gemme deres foretrukne byer og se dem på et kort med detaljerede vejrdata."}
                    </h3>
                  </motion.div>

                  {/* skills */}
                  <div className="flex gap-2 mt-4 sm:mt-6 flex-wrap">
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "WEATHER_APP" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      HTML
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "WEATHER_APP" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      CSS
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "WEATHER_APP" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      NativeWind
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "WEATHER_APP" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      TypeScript
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "WEATHER_APP" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      React Native
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "WEATHER_APP" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      Expo
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "WEATHER_APP" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      Github
                    </motion.h1>
                  </div>

                  {/* buttons */}
                  <div className="flex justify-between mt-6 sm:mt-11 gap-10">
                    <motion.button
                      className="bg-none w-1/2 py-3 text-orange-500 font-medium border-2 border-solid border-orange-500 hover:no-underline hoverable hover:bg-orange-500 hover:text-white hover:dark:text-white dark:border-green-500 dark:text-green-500 hover:dark:bg-green-500 text-[13px] sm:text-base"
                      onClick={() =>
                        router.push(
                          "https://expo.dev/preview/update?message=Publishing+Weather+Application&updateRuntimeVersion=1.0.0&createdAt=2025-09-02T00%3A26%3A36.713Z&slug=exp&projectId=bf7b74cf-6294-437a-b78e-c98a17564095&group=79b26f1c-aa42-417c-95b3-12ace4a547cf"
                        )
                      }
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "WEATHER_APP" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2, ease: "easeInOut" },
                      }}
                    >
                      Move to page
                    </motion.button>
                    <motion.button
                      className="bg-none w-1/2 py-3 text-orange-500 font-medium border-2 border-solid border-orange-500 hover:no-underline hoverable hover:bg-orange-500 hover:text-white hover:dark:text-white dark:border-green-500 dark:text-green-500 hover:dark:bg-green-500 text-[13px] sm:text-base"
                      onClick={() =>
                        window.open(
                          "https://github.com/junbeomwooo/react-native-weather-app"
                        )
                      }
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "WEATHER_APP" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2, ease: "easeInOut" },
                      }}
                    >
                      View on Github
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* fotbold */}
            <SwiperSlide>
              <div className="w-full h-auto block xl:flex justify-between gap-[60px] py-4 xl:py-14 px-10 sm:px-20 items-center">
                {/* photo */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: title === "FOTBOLD" ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full xl:w-1/2 h-auto hoverable hover:opacity-80"
                >
                  <Image
                    src={
                      mode === "light"
                        ? "/fotbold_mockup.jpg"
                        : "/fotbold_mockup_dark.jpg"
                    }
                    alt="Fotbold : Live Football Scores & Football Info"
                    width={3000}
                    height={2000}
                    onClick={() => router.push("https://fodbold.vercel.app/en")}
                  />
                </motion.div>

                <div className="w-full xl:w-1/2 mt-4 sm:mt-6 xl:mt-0">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: title === "FOTBOLD" ? 1 : 0 }}
                    transition={{ duration: 1, ease: "linear" }}
                  >
                    {/* Title and Switch */}
                    <div className="flex items-center justify-between">
                      {/* title */}
                      <h1 className="text-[14px] sm:text-[17px] md:text-[20px] xl:text-[22px]  font-semibold leading-[18px] md:leading-[30px]">
                        Fotbold: Live Football Scores & Info
                      </h1>
                      {/* dark/ light mode button */}
                      <Switch
                        checked={mode === "dark"}
                        onChange={() => {
                          setMode(mode === "light" ? "dark" : "light");
                        }}
                        className="group inline-flex h-4 w-8 sm:h-6 sm:w-11 items-center rounded-full bg-orange-500 transition data-[checked]:bg-green-600 hoverable"
                      >
                        <span className="size-3 sm:size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-4 sm:group-data-[checked]:translate-x-6 flex items-center justify-center">
                          {mode === "light" ? (
                            <LuSunMedium className="scale-75 text-orange-600 font-bold" />
                          ) : (
                            <FaRegMoon className="scale-75 text-green-600 font-bold" />
                          )}
                        </span>
                      </Switch>
                    </div>
                    {/* period */}
                    <h2 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] mt-2 sm:mt-4 xl:mt-5 text-[#888888] dark:text-[#b4b4b4]">
                      Sep 2024 - May 2025
                    </h2>
                    {/* Explanation */}
                    <h3 className="mt-2 sm:mt-4 xl:mt-5 text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] leading-[15px] sm:leading-[30px]">
                      {locale === "en"
                        ? "This website uses the API-Football platform to provide real-time football scores and information on matches, players, teams, and leagues. It supports English, Danish,and Korean, with both dark and light themes for an optimized user experience. Inspired by FotMob, it offers comprehensive and accessible football data."
                        : "Denne hjemmeside bruger API-Football platformen til at levere live fodboldresultater og information om kampe, spillere, hold og ligaer. Den understøtter engelsk, dansk og koreansk, og tilbyder både mørk og lys tema for en optimeret brugeroplevelse. Inspireret af FotMob tilbyder den omfattende og tilgængelig fodbolddata."}
                    </h3>
                  </motion.div>

                  {/* skills */}
                  <div className="flex gap-2 mt-4 sm:mt-6 flex-wrap">
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "FOTBOLD" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      HTML
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "FOTBOLD" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      CSS
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "FOTBOLD" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      Tailwind CSS
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "FOTBOLD" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      TypeScript
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "FOTBOLD" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      Next.js
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "FOTBOLD" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      Vercel
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "FOTBOLD" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      Github
                    </motion.h1>
                  </div>

                  {/* buttons */}
                  <div className="flex justify-between mt-6 sm:mt-11 gap-10">
                    <motion.button
                      className="bg-none w-1/2 py-3 text-orange-500 font-medium border-2 border-solid border-orange-500 hover:no-underline hoverable hover:bg-orange-500 hover:text-white hover:dark:text-white dark:border-green-500 dark:text-green-500 hover:dark:bg-green-500 text-[13px] sm:text-base"
                      onClick={() =>
                        router.push("https://fodbold.vercel.app/en")
                      }
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "FOTBOLD" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2, ease: "easeInOut" },
                      }}
                    >
                      Move to page
                    </motion.button>
                    <motion.button
                      className="bg-none w-1/2 py-3 text-orange-500 font-medium border-2 border-solid border-orange-500 hover:no-underline hoverable hover:bg-orange-500 hover:text-white hover:dark:text-white dark:border-green-500 dark:text-green-500 hover:dark:bg-green-500 text-[13px] sm:text-base"
                      onClick={() =>
                        window.open("https://github.com/junbeomwooo/fodbold")
                      }
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "FOTBOLD" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2, ease: "easeInOut" },
                      }}
                    >
                      View on Github
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* unico */}
            <SwiperSlide>
              <div className="w-full block xl:flex justify-between gap-[60px] py-4 xl:py-14 px-10 sm:px-20 items-center">
                {/* photo */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: title === "UNICO" ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full xl:w-1/2 h-auto hoverable hover:opacity-80"
                >
                  <Image
                    src="/unico-mockup.jpg"
                    alt="UNICO: Online Eyewear Store"
                    width={3000}
                    height={2000}
                    onClick={() =>
                      router.push(
                        "http://ec2-18-153-11-213.eu-central-1.compute.amazonaws.com:3001/"
                      )
                    }
                  />
                </motion.div>

                {/* explantion */}
                <div className="w-full xl:w-1/2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: title === "UNICO" ? 1 : 0 }}
                    transition={{ duration: 1, ease: "linear" }}
                  >
                    <h1 className="text-[14px] sm:text-[17px] md:text-[20px] xl:text-[22px]  font-semibold leading-[18px] mt-4 sm:mt-6 xl:mt-0 md:leading-[30px]">
                      UNICO: Online Eyewear Store
                    </h1>
                    <h2 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] mt-2 sm:mt-4 xl:mt-5 text-[#888888] dark:text-[#b4b4b4]">
                      Aug 2022 - Jan 2023
                    </h2>
                    {locale === "en" ? (
                      <h3 className="mt-2 sm:mt-4 xl:mt-5 text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] leading-[15px] sm:leading-[30px]">
                        I created a virtual brand named ‘UNICO’ specializing in
                        selling sunglasses and eyeglasses through a responsive
                        website. The site ensures smooth communication between
                        clients and data with a backend server. Additionally, I
                        implemented efficient data processing and retrieval in
                        dynamic web applications using MySQL.
                      </h3>
                    ) : (
                      <h3 className="mt-2 sm:mt-4 xl:mt-5 text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] leading-[15px] sm:leading-[30px]">
                        Jeg har oprettet et virtuelt brand ved navn ‘UNICO’, der
                        specialiserer sig i at sælge solbriller og briller
                        gennem en responsiv hjemmeside. Siden sikrer smidig
                        kommunikation mellem kunder og data ved hjælp af en
                        backend-server. Derudover implementerede jeg effektiv
                        databehandling og hentning i dynamiske webapplikationer
                        ved hjælp af MySQL.
                      </h3>
                    )}
                  </motion.div>

                  {/* skills */}
                  <div className="flex gap-2 mt-4 sm:mt-6 flex-wrap">
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "UNICO" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      HTML
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "UNICO" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      CSS
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "UNICO" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      Styled-components
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "UNICO" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      JavaScript
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "UNICO" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      React
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "UNICO" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      Redux
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "UNICO" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      Node.js
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "UNICO" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      Express
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "UNICO" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      MySQL
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "UNICO" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      AWS
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "UNICO" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      Github
                    </motion.h1>
                  </div>
                  {/* buttons */}
                  <div className="flex justify-between mt-6 sm:mt-11 gap-10">
                    <motion.button
                      className="bg-none w-1/2 py-3 text-orange-500 font-medium border-2 border-solid border-orange-500 hover:no-underline hoverable hover:bg-orange-500 hover:text-white hover:dark:text-white dark:border-green-500 dark:text-green-500 hover:dark:bg-green-500 text-[13px] sm:text-base"
                      onClick={() =>
                        router.push(
                          "http://ec2-18-153-11-213.eu-central-1.compute.amazonaws.com:3001/"
                        )
                      }
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "UNICO" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2, ease: "easeInOut" },
                      }}
                    >
                      Move to page
                    </motion.button>
                    <motion.button
                      className="bg-none w-1/2 py-3 text-orange-500 font-medium border-2 border-solid border-orange-500 hover:no-underline hoverable hover:bg-orange-500 hover:text-white hover:dark:text-white dark:border-green-500 dark:text-green-500 hover:dark:bg-green-500 text-[13px] sm:text-base"
                      onClick={() =>
                        window.open("https://github.com/junbeomwooo/web-unico")
                      }
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "UNICO" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2, ease: "easeInOut" },
                      }}
                    >
                      View on Github
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* nmp */}
            <SwiperSlide>
              <div className="w-full block xl:flex justify-between gap-[60px] py-4 xl:py-14 px-10 sm:px-20 items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: title === "NMP" ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full xl:w-1/2 h-auto hoverable hover:opacity-80"
                >
                  {/* photo */}
                  <Image
                    src="/nmp.png"
                    alt="NMP(Next Movie Project)"
                    width={3000}
                    height={2000}
                    onClick={() =>
                      router.push("https://nmp-mini-project.vercel.app/")
                    }
                  />
                </motion.div>

                {/* explantion */}
                <div className="w-full xl:w-1/2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: title === "NMP" ? 1 : 0 }}
                    transition={{ duration: 1, ease: "linear" }}
                  >
                    <h1 className="text-[14px] sm:text-[17px] md:text-[20px] xl:text-[22px]  font-semibold leading-[18px] mt-4 sm:mt-6 xl:mt-0 md:leading-[30px]">
                      NMP(Next Movie Project)
                    </h1>
                    <h2 className="text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] mt-2 sm:mt-4 xl:mt-5 text-[#888888] dark:text-[#b4b4b4]">
                      May 2024 - Jul 2024
                    </h2>
                    {locale === "en" ? (
                      <h3 className="mt-2 sm:mt-4 xl:mt-5 text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] leading-[15px] sm:leading-[30px]">
                        I developed a movie chart site named “NMP” as part of a
                        mini-project to practice Next.js. The site showcases
                        popular recent movies, offering detailed information
                        about each movie. Additionally, it provides related
                        YouTube videos and recommendations for similar movies.
                      </h3>
                    ) : (
                      <h3 className="mt-2 sm:mt-4 xl:mt-5 text-[11px] sm:text-[13px] md:text-[16px] xl:text-[18px] leading-[15px] sm:leading-[30px]">
                        Jeg udviklede et filmsite kaldet “NMP” som en del af et
                        mini-projekt for at øve mig i Next.js. Sitet præsenterer
                        populære, aktuelle film og tilbyder detaljerede
                        oplysninger om hver film. Derudover indeholder det
                        relaterede YouTube-videoer og anbefalinger til lignende
                        film.
                      </h3>
                    )}
                  </motion.div>

                  {/* skills */}
                  <div className="flex gap-2 mt-4 sm:mt-6 flex-wrap">
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "NMP" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      HTML
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "NMP" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      CSS
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "NMP" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      TypeScript
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "NMP" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      Next.js
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "NMP" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      Vercel
                    </motion.h1>
                    <motion.h1
                      className="px-1 sm:px-3 py-0.5 sm:py-1 bg-orange-500 dark:bg-green-600 text-[10px] sm:text-sm rounded-lg text-white font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "NMP" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      Github
                    </motion.h1>
                  </div>
                  {/* buttons */}
                  <div className="flex justify-between mt-6 sm:mt-11 gap-10">
                    <motion.button
                      className="bg-none w-1/2 py-3 text-orange-500 font-medium border-2 border-solid border-orange-500 hover:no-underline hoverable hover:bg-orange-500 hover:text-white hover:dark:text-white dark:border-green-500 dark:text-green-500 hover:dark:bg-green-500 text-[13px] sm:text-base"
                      onClick={() =>
                        router.push("https://nmp-mini-project.vercel.app/")
                      }
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "NMP" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2, ease: "easeInOut" },
                      }}
                    >
                      Move to page
                    </motion.button>
                    <motion.button
                      className="bg-none w-1/2 py-3 text-orange-500 font-medium border-2 border-solid border-orange-500 hover:no-underline hoverable hover:bg-orange-500 hover:text-white hover:dark:text-white dark:border-green-500 dark:text-green-500 hover:dark:bg-green-500 text-[13px] sm:text-base"
                      onClick={() =>
                        window.open(
                          "https://github.com/junbeomwooo/NMP-MiniProject"
                        )
                      }
                      initial={{ scale: 0 }}
                      animate={{ scale: title === "NMP" ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2, ease: "easeInOut" },
                      }}
                    >
                      View on Github
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <h1 className="text-[20px] sm:text-[28px] md:text-[30px] text-orange-500 dark:text-[#88ff69] font-monaco font-bold xl:text-[40px] px-6">
            {"}"}
          </h1>
        </div>
      </div>
    </AnimatePresence>
  );
}
