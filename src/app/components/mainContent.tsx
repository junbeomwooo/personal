import { ReactTyped } from "react-typed";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export default function MainContent() {

  const h = useTranslations("HomePage");

  const locale = useLocale();

  
  return (

    <div className="absolute pl-[5%] top-[55%] sm:top-[46%] z-10">
      <div className="flex flex-col">
   
      <h1 className="text-[40px] sm:text-[62px] mb-2 sm:mb-4 font-medium leading-[60px]">JUNBEOM WOO</h1>
        <div className="flex">
          <ReactTyped
            strings={locale === "en" ? ["Frontend Developer", "Backend Developer", "Fullstack Developer", "Web Designer"]:["Frontend Udvikler", "Backend Udvikler", "Fullstack Udvikler", "Web Designer"]}
            typeSpeed={100}
            className="flex text-[25px] sm:text-[40px] text-orange-500  dark:text-[#88ff69]"
            loop={true}
            showCursor={true}
          />
        </div>

        <h2 className="mt-5 text-[12px] sm:text-[18px]">{h("smallTitle")}</h2>
      </div>
    </div>

    // 2

  );
}
