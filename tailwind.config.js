/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette inspirée du design asiatique
        'asian-primary': '#E94E77',
        'asian-secondary': '#F1D302',
        'asian-accent': '#7A9E9F',
        // Palette inspirée du design européen
        'euro-primary': '#264653',
        'euro-secondary': '#2A9D8F',
        'euro-accent': '#E9C46A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
}