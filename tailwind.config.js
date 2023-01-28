
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'plactic-pink' : '#ff1493' ,
      }),
      backgroundColor: theme => ({
        'plastic-pink' : '#ff1493',
      }),
      textColor: {
        'plastic-pink' : '#ff1493',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}