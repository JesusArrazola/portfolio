/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      heebo: ['"Heebo Variable"', "monospace"],
    },
    extend: {
      colors: {
        light: "#8695A4",
        dark: "#21243D",
        secondary: "#00A8CC",
        primary: "#FF6464",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
