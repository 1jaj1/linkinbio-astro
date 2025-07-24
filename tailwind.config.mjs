/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Noir Spectrum Color System - using CSS variables
      colors: {
        noir: {
          primary: 'var(--noir-primary)',
          background: 'var(--noir-background)',
          surface: 'var(--noir-surface)',
          'surface-hover': 'var(--noir-surface-hover)',
          'accent-1': 'var(--noir-accent-1)',
          'accent-2': 'var(--noir-accent-2)',
          'accent-3': 'var(--noir-accent-3)',
          'glass-overlay': 'var(--noir-glass-overlay)',
          'glass-border': 'var(--noir-glass-border)',
          portfolio: '#ff6b35',
          social: '#00d4ff',
          contact: '#50fa7b',
          services: '#ff79c6',
          content: '#f1fa8c',
        },
      },

      // Brutal Hierarchy Typography System
      fontFamily: {
        'noir-primary': ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        'noir-display': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        'noir-mono': ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
      },

      fontSize: {
        // Desktop Scale
        display: ['clamp(3.5rem, 8vw, 6rem)', {
          lineHeight: '0.9',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        }],
        h1: ['clamp(2.5rem, 5vw, 4rem)', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
        h2: ['clamp(1.5rem, 3vw, 2.5rem)', {
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
        'body-large': ['clamp(1.1rem, 2vw, 1.3rem)', {
          lineHeight: '1.4',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        body: ['clamp(0.9rem, 1.5vw, 1rem)', {
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        small: ['clamp(0.75rem, 1vw, 0.85rem)', {
          lineHeight: '1.4',
          letterSpacing: '0.01em',
          fontWeight: '400',
        }],
      },

      // Micro-Dense Spacing System
      spacing: {
        micro: '4px',
        tiny: '8px',
        small: '12px',
        base: '16px',
        medium: '20px',
        large: '24px',
        xl: '32px',
        '2xl': '40px',
      },

      // Animation System
      animation: {
        'skeletal-flow': 'skeletal-flow 1.5s ease-in-out infinite',
        'content-emerge': 'content-emerge 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'morph-glass': 'morph-glass 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'image-reveal': 'image-reveal 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        'text-breathe': 'text-breathe 0.3s ease-out forwards',
      },

      keyframes: {
        'skeletal-flow': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'content-emerge': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px) scale(1)'
          },
        },
        'morph-glass': {
          '0%': {
            transform: 'scale(1) perspective(1000px) rotateX(0deg)',
            backdropFilter: 'blur(0px) saturate(1)',
            borderRadius: '0px',
          },
          '100%': {
            transform: 'scale(1.03) perspective(1000px) rotateX(2deg)',
            backdropFilter: 'blur(8px) saturate(1.2)',
            borderRadius: '12px',
          },
        },
        'image-reveal': {
          '0%': { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
        'text-breathe': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-2px)' },
        },
      },

      // Backdrop Filters
      backdropBlur: {
        glass: '8px',
        'glass-hover': '12px',
      },

      backdropSaturate: {
        glass: '1.2',
        'glass-hover': '1.4',
      },

      // Border Radius
      borderRadius: {
        morph: '12px',
      },

      // Box Shadows
      boxShadow: {
        brutal: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'brutal-hover': '0 35px 60px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.2)',
      },

      // Aspect Ratios
      aspectRatio: {
        hero: '2.5 / 1',
        standard: '1 / 1',
        feature: '3 / 1',
      },
    },
  },
  plugins: [],
}