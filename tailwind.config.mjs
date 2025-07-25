import lineClamp from '@tailwindcss/line-clamp';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Design System Colors - using CSS variables for CMS customization
      colors: {
        // Neutral Base Colors - Figma exact values
        gray: {
          50: 'var(--color-gray-50, #F9FAFB)',
          100: 'var(--color-gray-100, #F3F4F6)',
          200: 'var(--color-gray-200, #E6E6E6)', // Figma background color
          300: 'var(--color-gray-300, #D3D3D3)', // Figma description text
          400: 'var(--color-gray-400, #9CA3AF)',
          500: 'var(--color-gray-500, #6B7280)',
          600: 'var(--color-gray-600, #4B5563)',
          700: 'var(--color-gray-700, #374151)',
          800: 'var(--color-gray-800, #1F2937)',
          900: 'var(--color-gray-900, #111827)',
        },
        
        // Primary Brand Colors
        primary: {
          50: 'var(--color-primary-50, #EFF6FF)',
          100: 'var(--color-primary-100, #DBEAFE)',
          500: 'var(--color-primary-500, #3B82F6)',
          600: 'var(--color-primary-600, #2563EB)',
          700: 'var(--color-primary-700, #1D4ED8)',
          900: 'var(--color-primary-900, #1E3A8A)',
        },

        // Semantic Colors
        success: 'var(--color-success, #10B981)',
        warning: 'var(--color-warning, #F59E0B)',
        error: 'var(--color-error, #EF4444)',
        info: 'var(--color-info, #3B82F6)',

        // Vibrant Content Colors
        'neon-green': 'var(--color-neon-green, #00FF7F)',
        'electric-blue': 'var(--color-electric-blue, #007FFF)',
        'hot-pink': 'var(--color-hot-pink, #FF1493)',
        'cyber-yellow': 'var(--color-cyber-yellow, #FFFF00)',
        'purple-neon': 'var(--color-purple-neon, #BF00FF)',
        'orange-bright': 'var(--color-orange-bright, #FF4500)',

        // Platform Brand Colors
        platform: {
          youtube: '#FF0000',
          instagram: '#E4405F',
          tiktok: '#000000',
          twitter: '#1DA1F2',
          linkedin: '#0077B5',
          github: '#181717',
          behance: '#1769FF',
          dribbble: '#EA4C89',
        },
      },

      // Typography System - Cairo as primary font (from Figma)
      fontFamily: {
        primary: ['Cairo', 'system-ui', 'sans-serif'],
        heading: ['Cairo', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
      },

      fontSize: {
        // Figma-specific Typography Scale
        'figma-title': ['4rem', { lineHeight: '1.874', fontWeight: '700' }], // 64px - Main title
        'figma-section': ['1rem', { lineHeight: '1.874', fontWeight: '700' }], // 16px - Section headers
        'figma-body': ['1rem', { lineHeight: '1.874', fontWeight: '400' }], // 16px - Body text
        'figma-username': ['1.125rem', { lineHeight: '1.874', fontWeight: '400' }], // 18px - Username
        'figma-description': ['1.125rem', { lineHeight: '1.2', fontWeight: '400' }], // 18px - Description
        'figma-tag': ['0.75rem', { lineHeight: '1.874', fontWeight: '400' }], // 12px - Tags
        'figma-footer': ['0.75rem', { lineHeight: '1.874', fontWeight: '400' }], // 12px - Footer
        
        // Legacy sizes for compatibility
        'xs': ['0.75rem', { lineHeight: '1.25', fontWeight: '500' }],
        'sm': ['0.875rem', { lineHeight: '1.375', fontWeight: '400' }],
        'base': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'lg': ['1.125rem', { lineHeight: '1.5', fontWeight: '400' }],
        'xl': ['1.25rem', { lineHeight: '1.5', fontWeight: '400' }],
        '2xl': ['1.563rem', { lineHeight: '1.25', fontWeight: '600' }],
        '3xl': ['1.953rem', { lineHeight: '1.25', fontWeight: '600' }],
        '4xl': ['2.441rem', { lineHeight: '1.1', fontWeight: '700' }],
        '5xl': ['3.052rem', { lineHeight: '1.1', fontWeight: '700' }],
        '6xl': ['3.815rem', { lineHeight: '1.1', fontWeight: '700' }],
      },

      // Font Weight System
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },

      // Line Height System
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },

      // Responsive Breakpoints
      screens: {
        'xs': '320px',
        'sm': '768px',   // Tablet
        'md': '1024px',  // Desktop Small
        'lg': '1280px',  // Desktop
        'xl': '1440px',  // Desktop XL
      },

      // Spacing System - Figma specific dimensions
      spacing: {
        'micro': '4px',
        'tiny': '8px',
        'small': '12px',
        'medium': '20px',
        'large': '24px',
        'xl': '32px',
        '2xl': '48px',
        // Figma specific spacing
        '144': '9rem',        // 144px - main sections gap
        '120': '7.5rem',      // 120px - information gap
        '337': '21.0625rem',  // 337px - card width
        '432': '27rem',       // 432px - card height
        '1408': '88rem',      // 1408px - grid container width
      },

      // Animation System for Interactive States
      animation: {
        'card-hover': 'card-hover 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'button-hover': 'button-hover 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fade-in 0.5s ease-out',
        'scale-up': 'scale-up 0.2s ease-out',
        'loading-spin': 'spin 1s linear infinite',
      },

      keyframes: {
        'card-hover': {
          '0%': { transform: 'scale(1) translateY(0)' },
          '100%': { transform: 'scale(1.02) translateY(-4px)' },
        },
        'button-hover': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },

      // Backdrop Filters for Glass Effects
      backdropBlur: {
        'card': '8px',
        'button': '4px',
        'figma': '50px',  // Figma glassmorphism effect
      },

      backdropSaturate: {
        'card': '1.2',
        'button': '1.1',
      },

      // Border Radius for Cards
      borderRadius: {
        'card-mobile': '12px',
        'card-tablet': '16px',
        'card-desktop': '20px',
        'button': '12px',
        'tag': '8px',
      },

      // Box Shadows - Figma specific shadows
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'button': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'focus': '0 0 0 3px var(--color-primary-500)',
        // Figma shadows
        'figma-card': '2px 2px 50px 0px rgba(0, 0, 0, 0.1)',
        'figma-tag': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },

      // Aspect Ratios for Cards
      aspectRatio: {
        'card-mobile': '16 / 9',
        'card-tablet': '4 / 3',
        'card-desktop': '5 / 4',
      },

      // Transition Timing Functions
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      // Transition Durations
      transitionDuration: {
        'fast': '0.15s',
        'normal': '0.25s',
        'slow': '0.35s',
        'slower': '0.5s',
      },
    },
  },
  plugins: [
    lineClamp,
  ],
}