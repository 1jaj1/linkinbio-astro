# Typography & Color System Specifications

## Overview

This document defines the complete typography and color system for the content grid design, ensuring visual consistency while providing full CMS customization capabilities.

## Typography System

### Type Scale (Responsive)

Based on modular scale with 1.250 (Major Third) ratio:

```css
/* Desktop Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.563rem;  /* 25px */
--text-3xl: 1.953rem;  /* 31px */
--text-4xl: 2.441rem;  /* 39px */
--text-5xl: 3.052rem;  /* 49px */
--text-6xl: 3.815rem;  /* 61px */

/* Tablet Scale (0.9x) */
--text-xs-tablet: 0.675rem;
--text-sm-tablet: 0.7875rem;
--text-base-tablet: 0.9rem;
--text-lg-tablet: 1.0125rem;
--text-xl-tablet: 1.125rem;
--text-2xl-tablet: 1.4067rem;
--text-3xl-tablet: 1.7577rem;
--text-4xl-tablet: 2.1969rem;
--text-5xl-tablet: 2.7468rem;
--text-6xl-tablet: 3.4335rem;

/* Mobile Scale (0.8x) */
--text-xs-mobile: 0.6rem;
--text-sm-mobile: 0.7rem;
--text-base-mobile: 0.8rem;
--text-lg-mobile: 0.9rem;
--text-xl-mobile: 1rem;
--text-2xl-mobile: 1.2504rem;
--text-3xl-mobile: 1.5624rem;
--text-4xl-mobile: 1.9528rem;
--text-5xl-mobile: 2.4416rem;
--text-6xl-mobile: 3.052rem;
```

### Design Token Mapping

```typescript
// Typography tokens for each component
const typographyTokens = {
  header: {
    name: {
      desktop: 'text-6xl',     // 61px - Bold, impactful
      tablet: 'text-5xl',      // ~49px
      mobile: 'text-4xl'       // ~39px
    }
  },
  
  information: {
    label: {
      desktop: 'text-lg',      // 18px - Clear hierarchy
      tablet: 'text-base',     // ~16px
      mobile: 'text-sm'        // ~14px
    },
    content: {
      desktop: 'text-xl',      // 20px - Readable body text
      tablet: 'text-lg',       // ~18px
      mobile: 'text-base'      // ~16px
    }
  },
  
  cards: {
    platform: {
      desktop: 'text-xs',      // 12px - Subtle labeling
      tablet: 'text-xs',       // Same across devices
      mobile: 'text-xs'
    },
    username: {
      desktop: 'text-base',    // 16px - Clear identification
      tablet: 'text-sm',       // ~14px
      mobile: 'text-sm'        // ~14px
    },
    description: {
      desktop: 'text-sm',      // 14px - Readable overlay
      tablet: 'text-sm',       // Consistent
      mobile: 'text-xs'        // ~12px for space
    },
    action: {
      desktop: 'text-sm',      // 14px - Button text
      tablet: 'text-sm',
      mobile: 'text-xs'
    }
  },
  
  footer: {
    attribution: {
      desktop: 'text-xs',      // 12px - Subtle
      tablet: 'text-xs',
      mobile: 'text-xs'
    }
  }
}
```

### Font Weight System

```css
--font-weight-thin: 100;
--font-weight-extralight: 200;
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
--font-weight-black: 900;
```

**Usage Guidelines:**
- **Headers**: Bold (700) or Extrabold (800) for impact
- **Body Text**: Normal (400) or Medium (500) for readability
- **Labels**: Medium (500) or Semibold (600) for clarity
- **Buttons**: Medium (500) or Semibold (600) for prominence
- **Subtle Text**: Light (300) or Normal (400)

### Line Height System

```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

**Component Applications:**
- **Headlines**: `leading-tight` (1.25) for impact
- **Body Text**: `leading-normal` (1.5) for readability
- **Card Descriptions**: `leading-snug` (1.375) for overlay space
- **Labels**: `leading-none` (1) or `leading-tight` for compactness

## Color System

### Primary Palette

Based on the design analysis, here's the extracted color system:

```css
/* Neutral Base Colors */
--color-white: #FFFFFF;
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;    /* Background color from design */
--color-gray-300: #D1D5DB;
--color-gray-400: #9CA3AF;
--color-gray-500: #6B7280;
--color-gray-600: #4B5563;
--color-gray-700: #374151;
--color-gray-800: #1F2937;
--color-gray-900: #111827;
--color-black: #000000;

/* Primary Brand Colors */
--color-primary-50: #EFF6FF;
--color-primary-100: #DBEAFE;
--color-primary-500: #3B82F6;   /* Default primary */
--color-primary-600: #2563EB;
--color-primary-700: #1D4ED8;
--color-primary-900: #1E3A8A;

/* Semantic Colors */
--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-info: #3B82F6;

/* Vibrant Content Colors */
--color-neon-green: #00FF7F;
--color-electric-blue: #007FFF;
--color-hot-pink: #FF1493;
--color-cyber-yellow: #FFFF00;
--color-purple-neon: #BF00FF;
--color-orange-bright: #FF4500;
```

### Design Token Mapping

```typescript
const colorTokens = {
  backgrounds: {
    body: 'var(--color-gray-200)',           // Light gray from design
    card: 'var(--color-white)',              // White cards with image overlay
    overlay: 'rgba(0, 0, 0, 0.4)'            // Semi-transparent overlay
  },
  
  text: {
    primary: 'var(--color-gray-900)',        // Main headings
    secondary: 'var(--color-gray-700)',      // Body text
    subtle: 'var(--color-gray-500)',         // Labels, captions
    onDark: 'var(--color-white)',            // Text on dark backgrounds
    onOverlay: 'var(--color-white)'          // Text on image overlays
  },
  
  interactive: {
    primary: 'var(--color-primary-600)',     // Main buttons
    primaryHover: 'var(--color-primary-700)',
    secondary: 'var(--color-gray-600)',      // Secondary buttons
    secondaryHover: 'var(--color-gray-700)'
  },
  
  borders: {
    light: 'var(--color-gray-200)',
    medium: 'var(--color-gray-300)',
    dark: 'var(--color-gray-400)'
  },
  
  platform: {
    youtube: '#FF0000',
    instagram: '#E4405F',
    tiktok: '#000000',
    twitter: '#1DA1F2',
    linkedin: '#0077B5',
    github: '#181717',
    behance: '#1769FF',
    dribbble: '#EA4C89'
  }
}
```

### Color Usage Guidelines

#### Background Colors
- **Page Background**: Light gray (`--color-gray-200`) for subtle contrast
- **Card Backgrounds**: White with image content and overlay
- **Overlay**: Semi-transparent black for text readability
- **Button Backgrounds**: Primary blue with hover states

#### Text Colors
- **Headlines**: Dark gray (`--color-gray-900`) for maximum contrast
- **Body Text**: Medium dark gray (`--color-gray-700`) for readability
- **Labels**: Medium gray (`--color-gray-500`) for hierarchy
- **Overlay Text**: White (`--color-white`) for contrast on images

#### Interactive Colors
- **Primary Actions**: Blue (`--color-primary-600`) with darker hover
- **Secondary Actions**: Gray tones with appropriate hover states
- **Platform Tags**: Brand-specific colors for recognition

### Accessibility Considerations

#### Contrast Ratios
All color combinations must meet WCAG 2.1 AA standards:

- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **UI Components**: Minimum 3:1 for borders and interactive elements

#### Color Blind Friendly
- Never rely solely on color to convey information
- Use additional visual indicators (icons, patterns, text)
- Test with color blindness simulators

### CSS Implementation

```css
/* Base CSS Variables */
:root {
  /* Colors from CMS */
  --background-color: var(--cms-background-color, var(--color-gray-200));
  --primary-text: var(--cms-primary-text, var(--color-gray-900));
  --secondary-text: var(--cms-secondary-text, var(--color-gray-700));
  --accent-color: var(--cms-accent-color, var(--color-primary-600));
  --card-overlay-text: var(--cms-card-overlay-text, var(--color-white));
  
  /* Typography from CMS */
  --font-primary: var(--cms-primary-font, 'Inter, sans-serif');
  --font-heading: var(--cms-heading-font, 'Inter, sans-serif');
}

/* Component Styles */
.header-name {
  font-family: var(--font-heading);
  font-size: var(--text-6xl);
  font-weight: var(--font-weight-bold);
  color: var(--primary-text);
  line-height: var(--leading-tight);
  letter-spacing: -0.04em;
}

.information-content {
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-normal);
  color: var(--secondary-text);
  line-height: var(--leading-normal);
}

.card-platform-tag {
  font-family: var(--font-primary);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--card-overlay-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Responsive Typography */
@media (max-width: 1023px) {
  .header-name {
    font-size: var(--text-5xl-tablet);
  }
  
  .information-content {
    font-size: var(--text-lg-tablet);
  }
}

@media (max-width: 767px) {
  .header-name {
    font-size: var(--text-4xl-mobile);
  }
  
  .information-content {
    font-size: var(--text-base-mobile);
  }
}
```

### Dark Mode Considerations

While not in the current design, the system supports dark mode variants:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background-color: var(--color-gray-900);
    --primary-text: var(--color-gray-50);
    --secondary-text: var(--color-gray-300);
    /* Maintain vibrant card colors */
  }
}
```

This typography and color system provides comprehensive design consistency while maintaining full CMS editability for maximum brand flexibility.