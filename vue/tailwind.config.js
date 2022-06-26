/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down' :{
          'form': {
            transform: 'translateY(-0.75rem)',
            opacity: '0'
          },
          'to': {
            transform: 'translateY(2rem)',
            opacity: '1'
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.2s ease-in-out both'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
