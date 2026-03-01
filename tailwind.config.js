/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lato)', 'sans-serif'],
        serif: ['var(--font-bree)', 'serif'],
      },
      colors: {
        teal: {
          50: '#f0f9f9',
          100: '#d9f2f2',
          200: '#b7e4e5',
          300: '#8ccecf',
          400: '#5ab0b2',
          500: '#3f9396',
          600: '#317679',
          700: '#2b6062',
          800: '#274e50',
          900: '#244244',
          950: '#112628',
        },
      },
    },
  },
  plugins: [],
}
