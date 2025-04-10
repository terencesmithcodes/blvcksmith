/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      blur: {
        '3xl': '64px',
        '4xl': '96px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float-delay 7s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'beam': 'beam 8s linear infinite',
      },
      colors: {
        primary: '#121212',     /* Obsidian */
        secondary: '#2F3542',   /* Dark slate */
        accent: '#E74C3C',      /* Ember red */
        'accent-2': '#38A3A5',  /* Teal */
        'text': '#F5F5F5',      /* Off-white */
        'text-muted': '#B8B8B8' /* Muted text */
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
