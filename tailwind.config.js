/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Arimo", sans-serif']
      },
      colors: {
        'main-color': '#101728',
        background: '#101728',
        navBar: '#030508',
        sectionActive: '#FF79B5',
        'radial-blue': '1F41BB'
      },
      backgroundImage: {
        'hero-image': 'url("./src/assets/images/background.png")',
        'hero-pattern':
          'linear-gradient(to top, #101728, transparent, transparent, transparent, transparent);',
        buttonLinear: 'linear-gradient(to right, #FF79B5, #5C80FF);'
      },
      gridTemplateColumns: {
        31: '1fr 1fr 1fr'
      },
      maxWidth: {
        '35%': '35%',
        87: '22rem',
        100: '26rem'
      }
    }
  },
  plugins: []
}
