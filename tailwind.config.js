/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",        // pages qovluğundakı bütün JS/TS fayllar
    "./components/**/*.{js,ts,jsx,tsx}"    // components qovluğundakı bütün fayllar
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}