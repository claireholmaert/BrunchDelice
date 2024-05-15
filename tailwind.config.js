/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': "#ffffff",
      'yellow': "#fe8f01",
      'gray': {
        500: "#333238",
        900: "#18171d",
      }
    },
    fontFamily: {
      'primary': ["Alfa Slab One"],
    },
    extend: {},
  },
  plugins: [],
}

