"use client";

import { ReactTyped } from "react-typed";
import { useState } from "react";

interface LoadingProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Loading({ setLoading }: LoadingProps) {
  // command not found 를 보여주기 위한 상태갓
  const [showError, setShowError] = useState(false);

  // complete시 clear을 보여주기위한 상태값
  const [showClear, setShowClear] = useState("");

  //   claer 되고난뒤 다음 화면을 보여주기 위한 상태값
  const [secondScreen, setSecondScreen] = useState(false);

  // 프로젝트 실행시 보여주기 위한 상태값
  const [showExcute, setShowExcute] = useState(false);
  const [showExcute2, setShowExcute2] = useState(false);
  const [showExcute3, setShowExcute3] = useState(false);

  return (
    <div
      className="w-100vh h-full mt-10 mx-20 font-monaco text-xl max-xl:text-sm max-xl:mx-10 dark:text-[#88ff69]" 
    >
      {/* 로딩바의 첫번째 화면 */}
      {!secondScreen && (
        <div className="flex flex-col flex-wrap">
          <h4 className="mb-2">junbeomwoo@my-server:$&nbsp;&nbsp;pwd</h4>
          <h4 className="mb-2">/Users/junbeomwoo/desktop</h4>
          <h4 className="mb-2">
            junbeomwoo@my-server:$&nbsp;&nbsp;cd portfolio
          </h4>
          <h4 className="mb-2">junbeomwoo@my-server:$&nbsp;&nbsp;ls</h4>
          <h4 className="mb-2">
            README.md&emsp;node_modules&emsp;postcss.config.mjs&emsp;tailwind.config.ts&emsp;
            next-env.d.ts&emsp;package-lock.json&emsp;public&emsp;tsconfig.json&emsp;next.config.ts&emsp;
            package.json src
          </h4>
          <h4 className="mb-2">
            junbeomwoo@my-server:$&nbsp;&nbsp;
            <ReactTyped
              strings={["hello"]}
              showCursor={false}
              typeSpeed={100}
              onComplete={() => {
                setShowError(true);
                setTimeout(() => {
                  setShowClear("clear");
                }, 1200);
              }}
            />
          </h4>
          {showError && (
            <>
              <h4 className="mb-2">zsh: command not found: hello</h4>
              <h4 className="mb-2">
                junbeomwoo@my-server:$&nbsp;&nbsp;
                <ReactTyped
                  strings={[showClear]}
                  typeSpeed={100}
                  onComplete={() =>
                    setTimeout(() => {
                      setSecondScreen(true);
                    }, 2500)
                  }
                />
              </h4>
            </>
          )}
        </div>
      )}

      {/* 로딩바의 두번째 화면 */}
      {secondScreen && (
        <div className="flex flex-col flex-wrap">
          <h4 className="mb-6">
            junbeomwoo@my-server:$&nbsp;&nbsp;
            <ReactTyped
              strings={["npm run dev"]}
              showCursor={false}
              typeSpeed={100}
              onComplete={() => {
                setShowExcute(true);
                setTimeout(() => {
                  setShowExcute2(true);
                }, 1800);
                setTimeout(() => {
                  setShowExcute3(true);
                }, 2500);
                setTimeout(() => {
                  setLoading(false);
                }, 3000);
              }}
            />
          </h4>

          {showExcute && (
            <div>
              <h4>&gt;&nbsp;&nbsp;junbeomwoo@0.1.0 dev</h4>
              <h4>&gt;&nbsp;&nbsp;next dev</h4>
            </div>
          )}

          {showExcute2 && (
            <div>
              <h4 className="mt-6">▲ Next.js&nbsp;&nbsp;15.0.2</h4>
              <h4>- Local:&emsp;&emsp;http://localhost:3000</h4>
              <h4 className="mt-6"> ✓ Starting...</h4>
            </div>
          )}

          {showExcute3 && (
            <div>
              <h4> ✓ Ready in 1863ms</h4>
            </div>
          )}
        </div>
      )}

      <div className="absolute right-0 text-base cursor-pointer mr-20 bottom-0 mb-20 max-xl:mr-10 max-xl:text-sm max-xl:mb-10">
        <button className="hover:underline" onClick={() => setLoading(false)}>
          Skip intro{" "}
        </button>
      </div>
    </div>
  );
}
