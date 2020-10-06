module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    maxWidth: {
             'fhd': '1920px',
             '1/2': '50%',
             '3/4': '75%',
             '500px': '500px',
    },
    fontSize:{
      xs: ['10px', '12px'],
      base: ['13.5px', '16.2px'],
        'lg': '18px',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
    },
    extend: {
      colors: {
          'bateeq-topheader':'#f5f5f5'
      }
    },
    boxShadow: {
      bxShadow:'0px 2px 2px rgba(0, 0, 0, 0.1)'
    },
  },
  variants: {},
  plugins: [],
}
