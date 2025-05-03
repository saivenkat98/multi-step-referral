/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'wk-indigo': 'var(--wk-indigo)',
        'wk-navy': 'var(--wk-navy)',
        'wk-green': 'var(--wk-green)',
      },
    },
  },
  plugins: [],
}

