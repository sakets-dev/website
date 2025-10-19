/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        subtle: "#f6f6f7",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(17, 17, 17, 0.05)",
        xl: "0 12px 24px rgba(17, 17, 17, 0.1)",
      },
      fontFamily: {
        gill: ['"Gill Sans"', "sans-serif"],
      },
      keyframes: {
        pageIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "page-in": "pageIn 400ms ease-out both",
      },
    },
  },
  plugins: [],
};
