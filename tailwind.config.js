/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        /* Base neutrals */
        bg: '#0F172A',          // app background
        panel: '#111827',       // sidebar / panels
        surface: '#1F2937',     // cards
        border: '#374151',      // subtle borders

        /* Text */
        text: {
          primary: '#E5E7EB',
          secondary: '#9CA3AF',
          muted: '#6B7280',
        },

        /* Accent (TrackFlux green) */
        accent: {
          DEFAULT: '#A3E635',   // lime-400
          soft: 'rgba(163,230,53,0.15)',
          hover: 'rgba(163,230,53,0.25)',
        },

        /* Status colors */
        success: '#22C55E',
        warning: '#FACC15',
        danger: '#EF4444',
      },

      borderRadius: {
        xl: '0.75rem',
        lg: '0.5rem',
      },

      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
};
