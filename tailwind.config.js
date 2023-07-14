/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   colors:{
    dark:"#101D40",
    light:"#E2E0DF",
    accent:"#24CBC8"
   }
  },
  plugins: [],
}
