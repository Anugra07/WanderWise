module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'], // updated to include app directory
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.95 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulseSoft: 'pulseSoft 3s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
