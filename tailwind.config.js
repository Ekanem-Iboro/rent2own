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
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right, #f72585, #7209b7)",
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
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
