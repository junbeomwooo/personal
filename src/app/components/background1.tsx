import ShuffleText from "react-shuffle-text";
import { motion } from "framer-motion";
import { useState } from "react";

import { useGlitch, GlitchHandle } from 'react-powerglitch'

export default function Background1() {
  const options = {
    "playMode": "always",
    "createContainers": true,
    "hideOverflow": false,
    "timing": {
      "duration": 6000
    },
    "glitchTimeSpan": {
      "start": 0.3,
      "end": 0.6
    },
    "shake": {
      "velocity": 20,
      "amplitudeX": 0.2,
      "amplitudeY": 0.2
    },
    "slice": {
      "count": 15,
      "velocity": 20,
      "minHeight": 0.02,
      "maxHeight": 0.15,
      "hueRotate": false
    },
    "pulse": true
  }


  const glitch: GlitchHandle = useGlitch(options);

  const [isAnimationDone, setIsAnimationDone] = useState(false);
  return (
    <div className="w-full h-full absolute flex justify-center items-center pt-20">
      <div>
        {/* title */}
        <div className="flex gap-[150px]">
          {/* A-Box */}
          <motion.div
            className="h-44 w-[400px] bg-A-gradient bg-A-size bg-A-position bg-no-repeat text-center leading-[100px] flex items-center justify-center"
            initial={{ rotate: 90, scale: 1.5 }}
            animate={{
              rotate: 0,
              scale: 1,
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            onAnimationComplete={() => setIsAnimationDone(true)}
          >
            <h1 className="text-[25px] font-extralight tracking-[25px] text-orange-600 dark:text-[#88ff69]">
              <ShuffleText content="CREATE" charFrameTime={150} />
            </h1>
          </motion.div>

          {/* B-Box */}
          <motion.div
            className="relative h-44 w-[400px] p-4 bg-B-gradient bg-B-size bg-B-position bg-no-repeat text-center leading-[100px] flex items-center justify-center"
            initial={{ rotate: 90, scale: 1.5 }}
            animate={{
              rotate: 0,
              scale: 1,
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <h1 className="text-[35px] font-medium tracking-[25px] text-orange-600 dark:text-[#88ff69] pl-20" ref={glitch.ref}>
              DEVELOPER
            </h1>
          </motion.div>

          {/* C-Box */}
          <motion.div
            className="h-44 w-[400px] bg-C-gradient bg-C-size bg-C-position bg-no-repeat text-center leading-[100px] flex items-center justify-center"
            initial={{ rotate: 90, scale: 1.5 }}
            animate={{
              rotate: 0,
              scale: 1,
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <h1 className="text-[25px] font-extralight  tracking-[25px] text-orange-600 dark:text-[#88ff69] w-full">
              <ShuffleText content="INNOVATE" charFrameTime={250} />
            </h1>
          </motion.div>
        </div>
        {/* subtitle */}
        {isAnimationDone ? (
          <motion.div
            className="mt-48"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <h1 className="text-[35px] font-thin">
              Focused on <strong>Front-End Development</strong>
            </h1>
            <h1 className="text-[35px] font-thin mt-6">
              aspiring to grow into a <strong>Full Stack Developer</strong>
            </h1>
          </motion.div>
        ) : (
          <div className="mt-48 opacity-0">
            {" "}
            <h1 className="text-[35px] font-thin">
              Focused on <strong>Front-End Development</strong>
            </h1>
            <h1 className="text-[35px] font-thin mt-6">
              aspiring to grow into a <strong>Full Stack Developer</strong>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
