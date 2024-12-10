import { ReactTyped } from "react-typed";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export default function MainContent() {

  const h = useTranslations("HomePage");

  const locale = useLocale();

  console.log(locale);

  
  return (

    <div className="absolute pl-[5%] top-[55%] sm:top-[38%] z-10">
      <div className="flex flex-col">
   
      <h1 className="text-[50px] sm:text-[70px] mb-5 font-medium leading-[60px]">JUNBEOM WOO</h1>
        <div className="flex">
          <ReactTyped
            strings={locale === "en" ? ["Frontend Developer", "Backend Developer", "Fullstack Developer", "Web Designer"]:["Frontend Udvikler", "Backend Udvikler", "Fullstack Udvikler", "Web Designer"]}
            typeSpeed={100}
            className="flex text-[25px] sm:text-[50px] text-orange-500  dark:text-[#88ff69]"
            loop={true}
            showCursor={true}
          />
        </div>

        <h2 className="mt-6 text-[12px] sm:text-[18px]">{h("smallTitle")}</h2>
      </div>
    </div>

    // 2

  );
}
