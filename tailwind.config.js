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
        booConBackground: "url(../src/assets/bg-boocon.webp)",
        bgBookclubHome: "url(../src/assets/bg-bookclub-home.webp)"
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
          100: "#d1d2d3",
          200: "#a3a5a7",
          300: "#75777b",
          400: "#474a4f",
          500: "#191d23",
          600: "#14171c",
          700: "#0f1115",
          800: "#0a0c0e",
          900: "#050607"
},
        },
      },
    },
  },
  plugins: [],
};
