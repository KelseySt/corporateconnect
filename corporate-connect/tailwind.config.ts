import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(avatar|progress|skeleton).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dpurple: "#342459",
        lpurple:"#9C7CFC",
        brightpurple:"#7828c8",
        llgrey:"#E9ECEF",
        lgrey: "#DEE2E6",
        grey: "#ADB5BD",
        dgrey: "#495057",
        black: "#212529",
      }, 
    },
  },
  plugins: [heroui()],
} satisfies Config;
