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
        'section-active': '#FF79B5',
        'radial-blue': '#1F41BB',
        'gray-20%': 'rgba(184,184,184,0.2)',
        'overlay-email': '#080808d9',
        red: 'rgb(255 85 85 / 72%)',
        green: 'rgb(85 255 154 / 72%)'
      },
      backgroundImage: {
        'desktop-hero-image':
          'url("https://lipesms.github.io/v2//src/assets/images/background.png")',
        'mobile-hero-image':
          'url("https://lipesms.github.io/v2//src/assets/images/background_mobile.png")',
        'hero-pattern':
          'linear-gradient(to top, #101728, transparent, transparent, transparent, transparent);',
        'email-pattern': 'linear-gradient(225deg, #ff79c3, #5c80ff)',
        'button-linear': 'linear-gradient(to right, #FF79B5, #5C80FF);'
      },
      gridTemplateColumns: {
        31: '1fr 1fr 1fr',
        '2/5': '1.5fr 2fr',
        experiences: '1fr max-content 1fr'
      },
      gridTemplateRows: {
        experiences: '1fr 32px 1fr'
      },
      maxWidth: {
        '35%': '35%',
        87: '22rem',
        100: '26rem',
        332: '332px'
      },
      width: {
        332: '332px'
      },
      minWidth: {
        100: '30rem'
      },
      spacing: {
        '37%': '37%'
      },
      animation: {
        float: 'float 5s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(-15px)' }
        }
      }
    }
  },
  plugins: []
}
