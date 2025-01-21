"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const locale = useLocale();

  const c = useTranslations("Contact");

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const current = e.currentTarget;

    /**  Regex validation */
    const valueRegex = /^(?!\s*$).+/;

    // email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const email = current.email.value.trim().toLowerCase();
    const subject = current.subject.value;
    const message = current.message.value;

    try {
      // Regex validation
      if (!valueRegex.test(email)) {
        window.alert("Please enter your email.");
        return;
      }

      if (!valueRegex.test(subject)) {
        window.alert("Please enter your subject.");
        return;
      }

      if (!valueRegex.test(message)) {
        window.alert("Please enter your message.");
        return;
      }

      // Check email format
      if (!emailRegex.test(email)) {
        window.alert("Please enter your message.");
        return;
      }

      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          subject: subject,
          message: message,
        }),
      });

      const result = await res.json();
      if (result.success) {
        window.alert("Email sent successfully!");
      } else {
        window.alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex md:px-10 lg:px-40 xl:px-20 2xl:px-40 items-center relative">
      {/* message */}
      <div className="w-full px-6 md:px-10 lg:px-40 ">
        <motion.h1
          className="text-center text-[32px] lg:text-[50px] text-orange-500 dark:text-[#88ff69] font-semibold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {locale === "en" ? "Send me a message!" : "Send mig en besked!"}
        </motion.h1>

        <motion.h2
          className="text-center mt-5 text-[14px] lg:text-[25px] font-light text-orange-600 dark:text-[#74fe52]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {locale === "en"
            ? "Feel free to reach out anytime if you need anything!"
            : "Du er altid velkommen til at kontakte mig, hvis du har brug for noget!"}
        </motion.h2>

        {/* form */}
        <motion.form
          id="contactForm"
          onSubmit={submitForm}
          className="w-full xl:w-2/3 m-auto mt-10 lg:mt-20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex gap-4 xl:gap-20">
            <div className="w-1/2">
              <h3 className="font-extralight text-[12px] xl:text-base">
                Email
              </h3>
              <input
                type="email"
                name="email"
                className="w-full xl:mt-4 h-10 bg-[#EAEBEF] dark:bg-[#121212]  focus:outline-none focus:border-none font-extralight hover:no-underline hoverable text-[11px] xl:text-base"
                placeholder={
                  locale === "en"
                    ? "Enter your email address"
                    : "Indtast din email"
                }
              />
              <hr className="w-full border-1 border-solid border-black dark:border-white" />
            </div>
            <div className="w-1/2">
              <h3 className="font-extralight text-[12px] xl:text-base">
                {c("subject")}
              </h3>
              <input
                type="text"
                name="subject"
                className="w-full xl:mt-4 h-10 bg-[#EAEBEF] dark:bg-[#121212]  focus:outline-none focus:border-none font-extralight hover:no-underline hoverable text-[11px] xl:text-base"
                placeholder={
                  locale === "en"
                    ? "Enter your subject"
                    : "Indtast dit emne"
                }
              />
              <hr className="w-full border-1 border-solid border-black dark:border-white" />
            </div>
          </div>
          <div className="w-full mt-4 xl:mt-10">
            <h3 className="font-extralight text-[12px] xl:text-base">
              {c("message")}
            </h3>
            <textarea
              name="message"
              className="w-full h-[80px] mt-4 bg-[#EAEBEF] dark:bg-[#121212] focus:outline-none focus:border-none font-extralight overflow-auto hover:no-underline hoverable text-[11px] xl:text-base"
              placeholder={
                locale === "en"
                  ? "Enter your message"
                  : "Indtast din besked"
              }
            />
            <hr className="w-full border-1 border-solid border-black dark:border-white" />
          </div>
        </motion.form>
        <div className="flex justify-center w-full">
          <motion.button
            type="submit"
            form="contactForm"
            className={`w-full xl:w-1/3 h-10 lg:h-14 border border-solid ${
              loading
                ? "bg-orange-500 dark:bg-[#21C55D] text-white dark:text-white"
                : "bg-none"
            } border-orange-500 dark:border-green-500 text-orange-500 dark:text-green-500 mt-10 hover:no-underline hoverable hover:text-white hover:bg-orange-500 dark:hover:text-white dark:hover:bg-[#21C55D] text-[14px]`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>
        </div>
        <div className="w-full xl:w-2/3 m-auto mt-14">
          <motion.div
            className="flex justify-center items-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <hr className="border-1 border-solid border-gray-400 w-full mr-4" />
            <h3 className="text-[11px] text-gray-400">Social</h3>
            <hr className="border-1 border-solid border-gray-400 w-full ml-4" />
          </motion.div>
          <div className="flex gap-10 justify-center mt-6 lg:mt-10 text-white">
            <motion.div
              className="flex items-center p-1 lg:p-2 bg-orange-500 dark:bg-[#21C55D] rounded-full hoverable"
              onClick={() => {
                window.open("https://github.com/junbeomwooo");
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <FaGithub className="w-6 h-6 lg:w-8 lg:h-8 scale-90" />
            </motion.div>
            <motion.div
              className="flex items-center p-1 lg:p-2 bg-orange-500 dark:bg-[#21C55D] rounded-full hoverable"
              onClick={() => {
                window.open("https://www.linkedin.com/in/woojunbeom/");
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <FaLinkedin className="w-6 h-6 lg:w-8 lg:h-8 scale-[80%]" />
            </motion.div>
            <motion.div
              className="flex items-center p-1 lg:p-2 bg-orange-500 dark:bg-[#21C55D] rounded-full hoverable"
              onClick={() => {
                window.open("https://www.instagram.com/wwjjjbbb/");
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <AiFillInstagram className="w-6 h-6 lg:w-8 lg:h-8 scale-90" />
            </motion.div>
            <motion.div
              className="flex items-center p-1 lg:p-2 bg-orange-500  dark:bg-[#21C55D] rounded-full hoverable"
              onClick={() => {
                window.location.href = "mailto:junbeom2.woo@gmail.com";
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <IoIosMail className="w-6 h-6 lg:w-8 lg:h-8 scale-90" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
