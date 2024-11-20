import { ReactTyped } from "react-typed";

export default function MainContent() {
  return (
    <div className="absolute pl-[5%] top-[40%] z-10">
      <div className="flex flex-col">
      <h1 className="text-[70px] mb-5 font-medium">JUNBEOM WOO</h1>
        <div className="flex">
          <ReactTyped
            strings={["Frontend Developer", "Backend Developer", "Fullstack Developer", "Web Designer"]}
            typeSpeed={100}
            className="flex text-[50px] text-[#028251] dark:text-[#88ff69] "
            loop={true}
            showCursor={true}
          />
        </div>

        <h2 className="mt-6">Aiming to be a skilled Full Stack Developer</h2>
      </div>
    </div>
  );
}
