/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#101010",
        bgSecondary: "#121212",
        textPrimary: "#e0def4",
        textSecondary: "#908caa",
        textRose: "#ea9a97",
        orange: "#ffc799",
        pine: "#31748f",
        borderPrimary: "#524f67",
        iris: "#c4a7e7",
        gold: "#f6c177",
        customRed: "#ff8080",
      },
    },
  },
  plugins: [],
};
