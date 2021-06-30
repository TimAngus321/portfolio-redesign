module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        slideInOutRight: 'slideInOutRight 1s ease-out'
      },
      keyframes: {
        slideInOutRight: {
         '0%': {
          opacity: '0',
          transform: 'translateX(50px)'
         },
         '100%': {
          opacity: '1',
          transform: 'translateX(0)'
         }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
