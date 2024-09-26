/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite",
        "spin-reverse": "spin-reverse 1.5s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right, #f72585, #7209b7)",
      },
      fontFamily: {
        HelveticalNeue: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: "#016AB3",

        secondary: "#6FC200",
      },
    },
  },
  variants: {
    extend: {
      backgroundClip: ["text"],
      textFillColor: ["hover", "focus"],
    },
  },
  plugins: [],
};
