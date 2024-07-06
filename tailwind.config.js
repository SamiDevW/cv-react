/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html',
  ],
  theme: {

    extend: {
      colors: {
        myBg: 'rgba(255,255,255,0.92)',
        myTxt: '#777',
        myContact: '#F7E0C1',

      },
    },

  },
  plugins:
    [
      require('daisyui'),

    ],
}

