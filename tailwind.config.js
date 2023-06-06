/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      grayscale: {
        80: '80%',
      }
    },
    fontFamily: {
      Space_Grotesk: ['Space Grotesk', 'sans-serif'],
      anton: ['Anton', 'sans-serif']
    }
  },
  plugins: [],
}

