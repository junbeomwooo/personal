"use client";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

console.log(process.env.EMAIL_USER);
console.log(process.env.NEXT_PUBLIC_EMAIL_USER);
console.log('Current Environment:', process.env.NODE_ENV);

const submitForm = async(e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const current = e.currentTarget;
  
  const email = current.email.value.trim().toLowerCase();;
  const subject = current.subject.value;
  const message = current.message.value;

  try {
    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email:email, subject:subject, message:message}),
    });

    const result = await res.json();
    if (result.success) {
      window.alert("Email sent successfully!");
    } else {
      window.alert("Failed to send email.");
    }
  } catch(error) {
    console.error("Error:", error);
    window.alert("An error occurred.");
  }
}


export default function Contact() {
  return (
    <div className="w-full h-screen flex md:px-10 lg:px-40 xl:px-20 2xl:px-40 items-center relative">
      {/* message */}
      <div className="w-full px-6 md:px-10 lg:px-40 ">
        <h1 className="text-center text-[32px] lg:text-[50px] text-orange-500 dark:text-[#88ff69] font-semibold">
          Send me a message!
        </h1>

        <h2 className="text-center mt-5 text-[14px] lg:text-[25px] font-light text-orange-600 dark:text-[#74fe52]">
          Feel free to reach out anytime if you need anything!”
        </h2>

        {/* form */}
        <form id="contactForm" onSubmit={submitForm}className="w-full xl:w-2/3 m-auto mt-10 lg:mt-20">
          <div className="flex gap-4 xl:gap-20">
            <div className="w-1/2">
              <h3 className="font-extralight text-[12px] xl:text-base">
                Email
              </h3>
              <input
                type="email"
                name="email"
                className="w-full xl:mt-4 h-10 bg-[#EAEBEF] dark:bg-[#121212]  focus:outline-none focus:border-none font-extralight hover:no-underline hoverable text-[11px] xl:text-base"
                placeholder="Enter your email address"
              />
              <hr className="w-full border-1 xl:border border-solid border-black dark:border-white" />
            </div>
            <div className="w-1/2">
              <h3 className="font-extralight text-[12px] xl:text-base">
                Subject
              </h3>
              <input
                type="text"
                name="subject"
                className="w-full xl:mt-4 h-10 bg-[#EAEBEF] dark:bg-[#121212]  focus:outline-none focus:border-none font-extralight hover:no-underline hoverable text-[11px] xl:text-base"
                placeholder="Enter your subject"
              />
              <hr className="w-full border-1 xl:border border-solid border-black dark:border-white" />
            </div>
          </div>
          <div className="w-full mt-4 xl:mt-10">
            <h3 className="font-extralight text-[12px] xl:text-base">
              Message
            </h3>
            <textarea
              name="message"
              className="w-full h-[80px] mt-4 bg-[#EAEBEF] dark:bg-[#121212] focus:outline-none focus:border-none font-extralight overflow-auto hover:no-underline hoverable text-[11px] xl:text-base"
              placeholder="Enter your message"
            />
            <hr className="w-full border-1 lg:border border-solid border-black dark:border-white" />
          </div>
        </form>
        <div className="flex justify-center w-full">
          <button type="submit" form="contactForm" className="w-full xl:w-1/3 h-10 lg:h-14 border-2 border-solid border-orange-500 dark:border-green-500 text-orange-500 dark:text-green-500 mt-10 hover:no-underline hoverable hover:text-white hover:bg-orange-500 dark:hover:text-white dark:hover:bg-[#21C55D] text-[14px]">
            Submit
          </button>
          {/* 여기 애니메이션 추가하고 디자인 마무리 한 뒤 로딩바 구현하기 */}
        </div>
        <div className="w-full xl:w-2/3 m-auto mt-14">
          <div className="flex justify-center items-center">
            <hr className="border-1 border-solid border-gray-400 w-full mr-4" />
            <h3 className="text-[11px] text-gray-400">Social</h3>
            <hr className="border-1 border-solid border-gray-400 w-full ml-4" />
          </div>
          <div className="flex gap-10 justify-center mt-6 lg:mt-10 text-white">
            <div className="flex items-center p-1 lg:p-2 bg-orange-500 dark:bg-[#21C55D] rounded-full hoverable">
              <FaGithub className="w-6 h-6 lg:w-8 lg:h-8 scale-90" />
            </div>
            <div className="flex items-center p-1 lg:p-2 bg-orange-500 dark:bg-[#21C55D] rounded-full hoverable">
              <FaLinkedin className="w-6 h-6 lg:w-8 lg:h-8 scale-[80%]" />
            </div>
            <div className="flex items-center p-1 lg:p-2 bg-orange-500 dark:bg-[#21C55D] rounded-full hoverable">
              <AiFillInstagram className="w-6 h-6 lg:w-8 lg:h-8 scale-90" />
            </div>
            <div className="flex items-center p-1 lg:p-2 bg-orange-500  dark:bg-[#21C55D] rounded-full hoverable">
              <IoIosMail className="w-6 h-6 lg:w-8 lg:h-8 scale-90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
