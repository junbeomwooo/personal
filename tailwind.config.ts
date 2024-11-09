import type { Config } from "tailwindcss";

const config: Config = {
  darkMode : ['class'],
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
    },
  },
  plugins: [],
};
export default config;
