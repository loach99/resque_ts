/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '320px',
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'laptop': '1280px',
      // => @media (min-width: 1024px) { ... }
      'desktop': '1920px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

