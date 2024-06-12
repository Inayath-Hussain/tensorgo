/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'google-gradient': 'linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335);'
      }
    },
  },
  plugins: [],
}

