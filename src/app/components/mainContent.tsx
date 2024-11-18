import { ReactTyped } from "react-typed";

export default function MainContent() {
  return (
    <div className="absolute flex items-center w-full h-full z-0 pl-[5%]">
      <div className="flex flex-col">
      <h1 className="text-[70px] mb-5 font-medium">JUNBEOM WOO</h1>
        <div className="flex">
          <ReactTyped
            strings={["Frontend Developer", "Backend Developer", "Fullstack Developer", "Web Designer"]}
            typeSpeed={150}
            className="flex text-[50px] dark:text-[#88ff69] "
            loop={true}
            showCursor={true}
          />
        </div>

        <h2 className="mt-6">Aiming to be a skilled Full Stack Developer</h2>
      </div>
    </div>
  );
}
