/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#EF2A82",
        textMainColor: "#172755",
        textSecondaryColor: "#8794BA",
        bgMainColor: "#fff",
        bgSecondaryColor: "#0F1F4B",
        textThirdColor: "#fff",
      },
      backgroundImage: {
        "hero-bg": "url('./src/assets/images/heroBackground.png')",
        "footer-bg": "url(footerBg)",
      },
    },
  },
  plugins: [],
};
