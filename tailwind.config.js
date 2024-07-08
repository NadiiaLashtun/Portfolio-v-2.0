/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#EFEEEC",
        "brand-color": "#E2A567",
        "brand-lite-color": "#efd6c166",
        "text-color": "#100E0C",
        "text-white-color": "#ffffff59",
      },

      dropShadow: {
        black: "0 4px 2px rgba(0, 0, 0, 0.25)",
      },

      fontFamily: {
        Montserrat: [
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],

        "Montserrat-Alternates": [
          "MontserratAlternates",
          "ui-sans-serif",
          "system-ui",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],

        "Amsterdam-four": [
          "Amsterdam-four",
          "Cambria",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};
