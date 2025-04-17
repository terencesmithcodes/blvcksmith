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
        primary: '#111827',     /* Rich black */
        secondary: '#1F2937',   /* Charcoal */
        accent: '#10B981',      /* Vibrant emerald */
        'accent-2': '#F97316',  /* Coral */
        'text': '#E5E7EB',      /* Light gray */
        'text-muted': '#9CA3AF' /* Medium gray */
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
