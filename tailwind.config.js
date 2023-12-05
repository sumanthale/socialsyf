// tailwind.config.js
import { tailwindConfig } from "@storefront-ui/react/tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindConfig],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@storefront-ui/react/**/*.{js,mjs}",
  ],
  theme: {
    // fontFamily: {
    //   primary: ["Dosis"],
    // },
    extend: {
      colors: {
        syf: "#fbc600",
        primary: {
          50: "#ffe173",
          100: "#ffde62",
          200: "#ffda51",
          300: "#ffd740",
          400: "#ffd32f",
          500: "#ffcf1e",
          600: "#ffcc0d",
          700: "#fbc600",
          800: "#eab900",
          900: "#d9ab00",
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
