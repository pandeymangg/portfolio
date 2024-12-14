/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--bg-primary)",
        bgSecondary: "var(--bg-secondary)",
        bgTertiary: "var(--bg-tertiary)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        orange: "var(--orange)",
        pine: "#31748f",
        borderPrimary: "var(--border-primary)",
        customRed: "var(--custom-red)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
