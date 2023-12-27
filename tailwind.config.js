/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        mbl: { max: "630px" }, // mbl == mobile
        // => @media (max-width: 630px) { ... }
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      backgroundImage: {
        homeFirstSectionImage: "url(../src/assets/home-first-section-image.webp)",
      },
      colors: {
        product: {
          purple: {
            100: "#d8d1d8",
            200: "#b0a4b1",
            300: "#897689",
            400: "#614962",
            500: "#3a1b3b",
            600: "#2e162f",
            700: "#231023",
            800: "#170b18",
            900: "#0c050c",
          },
          gray: {
            100: "#d6d6d6",
            200: "#adadad",
            300: "#858585",
            400: "#5c5c5c",
            500: "#333333",
            600: "#292929",
            700: "#1f1f1f",
            800: "#141414",
            900: "#0a0a0a",
          },
        },
      },
    },
  },
  plugins: [],
};
