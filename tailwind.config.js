/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5d9e2',
          300: '#b1b8c7',
          400: '#8690a5',
          500: '#677088',
          600: '#525a6f',
          700: '#43495a',
          800: '#393e4d',
          900: '#181b25',
        },
        brand: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd6ff',
          300: '#8ebbff',
          400: '#5894ff',
          500: '#3372ff',
          600: '#1d52f5',
          700: '#173fe1',
          800: '#1934b6',
          900: '#1a328f',
        },
      },
    },
  },
  plugins: [],
}
