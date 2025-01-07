"use client";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="w-full h-screen flex md:px-10 lg:px-40 xl:px-20 2xl:px-40 items-center relative">
      {/* message */}
      <div className="w-full px-6 md:px-10 lg:px-40 ">
        <h1 className="text-center text-[32px] lg:text-[50px] text-orange-500 dark:text-[#88ff69] font-semibold">
          Send me a message!
        </h1>

        <h2 className="text-center mt-5 text-[14px] lg:text-[25px] font-light text-orange-600 dark:text-[#74fe52]">
          Got a question or proposal, or just want to say hello? Go ahead
        </h2>

        {/* form */}
        <form className="w-full lg:w-2/3 m-auto mt-10 lg:mt-20">
          <div className="flex gap-4 lg:gap-20">
            <div className="w-1/2">
              <h3 className="font-extralight text-[12px]">Email</h3>
              <input
                type="email"
                className="w-full lg:mt-4 h-10 bg-[#EAEBEF] dark:bg-[#121212]  focus:outline-none focus:border-none font-extralight hover:no-underline hoverable text-[11px]"
                placeholder="Enter your email address"
              />
              <hr className="w-full border-1 lg:border border-solid border-black dark:border-white" />
            </div>
            <div className="w-1/2">
              <h3 className="font-extralight text-[12px]">Subject</h3>
              <input
                type="text"
                className="w-full lg:mt-4 h-10 bg-[#EAEBEF] dark:bg-[#121212]  focus:outline-none focus:border-none font-extralight hover:no-underline hoverable text-[11px]"
                placeholder="Enter your subject"
              />
              <hr className="w-full border-1 lg:border border-solid border-black dark:border-white" />
            </div>
          </div>
          <div className="w-full mt-4 lg:mt-10">
            <h3 className="font-extralight">Message</h3>
            <textarea
              className="w-full h-[80px] mt-4 bg-[#EAEBEF] dark:bg-[#121212] focus:outline-none focus:border-none font-extralight overflow-auto hover:no-underline hoverable text-[11px]"
              placeholder="Enter your message"
            />
            <hr className="w-full border-1 lg:border border-solid border-black dark:border-white" />
          </div>
        </form>
        <div className="flex justify-center w-full">
          <button className="w-full lg:w-1/3 h-10 lg:h-16 border-2 border-solid border-orange-500 dark:border-green-500 text-orange-500 dark:text-green-500 mt-10 hover:no-underline hoverable hover:text-white hover:bg-orange-500 dark:hover:text-white dark:hover:bg-[#21C55D] text-[14px]">
            Submit
          </button>
        </div>
        <div className="w-1/3 m-auto">
          {/* <hr className="border border-solid border-black dark:border-white m-auto mt-10" /> */}
          <div className="flex gap-10 justify-center mt-6 lg:mt-14 text-white">
            <div className="flex items-center p-2 bg-orange-500 dark:bg-[#21C55D] rounded-full">
              <FaGithub className="w-8 h-8 scale-90" />
            </div>
            <div className="flex items-center p-2 bg-orange-500  dark:bg-[#21C55D] rounded-full">
              <IoIosMail className="w-8 h-8  scale-90" />
            </div>
            <div className="flex items-center p-2 bg-orange-500 dark:bg-[#21C55D] rounded-full">
              <FaLinkedin className="w-8 h-8  scale-90" />
            </div>
            <div className="flex items-center p-2 bg-orange-500 dark:bg-[#21C55D] rounded-full">
              <IoCall className="w-8 h-8  scale-90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
