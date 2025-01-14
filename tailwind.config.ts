import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monaco: ["Monaco", "sans-serif"],
        apple: ["AppleSDGothicNeo", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "max-sm": { max: "640px" },
        "max-msm": { max: "700px" },
        "max-md": { max: "768px" },
        "max-lg": { max: "1024px" },
        "max-xl": { max: "1280px" },
        "max-2xl": { max: "1536px" },
      },
      backgroundImage: {
        "A-gradient": `
          linear-gradient(
            to bottom,
            transparent 5%,
            #7a7a7a 15%,
            #7a7a7a 85%,
            transparent 95%
          ),
          linear-gradient(
            to bottom,
            transparent 5%,
            #7a7a7a 15%,
            #7a7a7a 85%,
            transparent 95%
          ),
          linear-gradient(
            to right,
            transparent 5%,
            #7a7a7a 15%,
            #7a7a7a 85%,
            transparent 95%
          ),
          linear-gradient(
            to right,
            transparent 5%,
            #7a7a7a 15%,
            #7a7a7a 85%,
            transparent 95%
          )
        `,
        "B-gradient": `
        linear-gradient(
          to bottom,
          transparent 5%,
          #7a7a7a 45%,
          #7a7a7a 85%,
          transparent 95%
        ),
        linear-gradient(
          to bottom,
          transparent 5%,
          #7a7a7a 15%,
          #7a7a7a 85%,
          transparent 95%
        ),
        linear-gradient(
          to right,
          transparent 5%,
          #7a7a7a 15%,
          #7a7a7a 85%,
          transparent 95%
        ),
        linear-gradient(
          to right,
          transparent 5%,
          #7a7a7a 15%,
          #7a7a7a 85%,
          transparent 95%
        )
      `,
        "C-gradient": `
      linear-gradient(to bottom, transparent 5%, #7a7a7a 45%, #7a7a7a 5%, transparent 95%),
      linear-gradient(to bottom, transparent 50%, #7a7a7a 50%, #7a7a7a 5%, transparent 95%),
      linear-gradient(to right, transparent 30%, #7a7a7a 50%, #7a7a7a 5%, transparent 75%),
      linear-gradient(to right, transparent 30%, #7a7a7a 50%, #7a7a7a 5%, transparent 75%)
    `,
      },
      backgroundSize: {
        "A-size": "1px 100%, 0 100%, 100% 1px, 100% 1px",
        "B-size": "1px 100%, 1px 100%, 100% 1px, 100% 1px",
        'C-size': '1px 100%, 0 100%, 100% 1px, 100% 1px',
      },
      backgroundPosition: {
        "A-position": "0 0, 100% 0, 0 0, 0 100%",
        "B-position": "60px 0px, 100% 0px, 0px 0px, 0px 100%",
        'C-position': '50% 0, 100% 0, 0 0, 0 100%',
      },
    },
  },
  plugins: [],
};
export default config;
