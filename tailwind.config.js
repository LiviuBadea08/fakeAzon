module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./resources/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {



    extend: {
      fontFamily: {
        'source': ['Source Sans Pro', 'sans-serif'],

    },
      colors: {


        'orangeF': '#FFA02D',

        'brownSet': {
          100: '#D9D9D9',
          200: '#808080',
          300: '#594242',
          
        },
        
        'blueSet': {
          100: '#556573',
          200: '#232F3E',
          300: '#1C1F26',
          
        },
        
        'grayDuo': {
          100: '#F2F2F2',
          200: '#8D9AA6',
          
        },


    },
  },
  plugins: [],
}
}