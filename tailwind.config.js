/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#1f3a8a", press: "#172c6a" },
      },
      boxShadow: { card: "0 10px 18px rgba(2,6,23,.08)" },
      maxWidth: { mobile: "360px" },
    },
  },
  plugins: [],
};
