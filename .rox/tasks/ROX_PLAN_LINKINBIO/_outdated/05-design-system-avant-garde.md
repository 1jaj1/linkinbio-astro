# Design System - Avant-Garde Universal Cards

## Layout Philosophy: Edge-to-Edge Asymmetry

**DEATH TO CENTERING** - We're embracing full-width, edge-to-edge layouts with intentionally asymmetrical compositions that feel modern and unexpected.

### Desktop Layout (1024px+)
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [PHOTO]    DANIEL RICHTER                                                      │ ← No padding, full width
│ 120px      Creative Director & UX                                              │ ← Text hugs left edge
│            "Professional sophistication through intentional design"            │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│┌──────────────────────┐┌────────┐┌────────┐┌──────────────────────────────────┐│ ← 4px gaps
││     HERO CARD 1      ││ CARD 3 ││ CARD 4 ││         HERO CARD 2              ││ ← Asymmetrical sizes
││   [DYNAMIC BG IMG]   ││[IMG]   ││[IMG]   ││      [DYNAMIC BG IMG]            ││
││   Portfolio          ││Insta   ││LinkedIn││      Current Project             ││
│└──────────────────────┘└────────┘└────────┘└──────────────────────────────────┘│
│                                                                                 │
│┌────────┐┌────────┐┌────────┐┌────────┐┌────────┐┌──────────────────────────┐│ ← Irregular rhythm
││ CARD 5 ││ CARD 6 ││ CARD 7 ││ CARD 8 ││ CARD 9 ││       FEATURE CARD       ││
││[IMG]   ││[IMG]   ││[IMG]   ││[IMG]   ││[IMG]   ││     [DYNAMIC BG IMG]     ││
││Contact ││Services││Blog    ││Shop    ││About   ││      Call to Action      ││
│└────────┘└────────┘└────────┘└────────┘└────────┘└──────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────────┘
```

**Key Principles:**
- **Zero horizontal padding** - Content bleeds to viewport edges
- **Micro gaps** - 4px between cards (brutally tight)
- **Asymmetrical grid** - Varying card widths create visual tension
- **No centering** - Everything flows from left edge

### Tablet Layout (768px - 1024px)
```
┌─────────────────────────────────────────────────────────────┐
│[PHOTO] DANIEL RICHTER                                      │ ← Edge-to-edge
│100px   Creative Director & UX                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│┌──────────────────────┐┌─────────┐┌──────────────────────┐│ ← 4px gaps
││     HERO CARD 1      ││ CARD 3  ││     HERO CARD 2      ││
││   [DYNAMIC BG]       ││ [IMG]   ││   [DYNAMIC BG]       ││
│└──────────────────────┘└─────────┘└──────────────────────┘│
│                                                             │
│┌─────────┐┌─────────┐┌─────────┐┌─────────────────────────┐│
││ CARD 4  ││ CARD 5  ││ CARD 6  ││    FEATURE CARD         ││
││ [IMG]   ││ [IMG]   ││ [IMG]   ││   [DYNAMIC BG]          ││
│└─────────┘└─────────┘└─────────┘└─────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

## Micro-Interaction Design Language

### Animation Principles: "LIQUID BRUTALISM"

**Core Concept:** Combine the fluidity of liquid motion with the harshness of brutalist geometry.

#### 1. Card Hover States - "Morphing Glass"
```css
/* Base State */
.card {
  transform: scale(1) perspective(1000px) rotateX(0deg);
  backdrop-filter: blur(0px) saturate(1);
  border-radius: 0px;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

/* Hover State */
.card:hover {
  transform: scale(1.03) perspective(1000px) rotateX(2deg);
  backdrop-filter: blur(8px) saturate(1.2);
  border-radius: 12px;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}
```

#### 2. Progressive Image Reveal - "Digital Emergence"
```css
.card-image {
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
  transition: clip-path 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.card:hover .card-image {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
```

#### 3. Typography Micro-Movements - "Breathing Text"
```css
.card-title {
  transform: translateY(0px);
  transition: transform 0.3s ease-out;
}

.card:hover .card-title {
  transform: translateY(-2px);
}

.card-description {
  opacity: 0.7;
  transform: translateY(4px);
  transition: all 0.3s ease-out 0.1s;
}

.card:hover .card-description {
  opacity: 1;
  transform: translateY(0px);
}
```

### Loading States - "Skeletal Emergence"

#### 1. Card Skeleton Animation
```css
.card-skeleton {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 200% 100%;
  animation: skeletal-flow 1.5s ease-in-out infinite;
}

@keyframes skeletal-flow {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

#### 2. Progressive Content Load
```css
.card-content {
  animation: content-emerge 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes content-emerge {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
}
```

## Color System - "Noir Spectrum"

### Primary Palette
```scss
$color-primary: #000000;           // Pure black
$color-background: #0a0a0a;        // Deep black
$color-surface: #1a1a1a;          // Card backgrounds
$color-surface-hover: #2a2a2a;    // Card hover states

$color-accent-1: #ffffff;          // Pure white text
$color-accent-2: #f0f0f0;         // Secondary text
$color-accent-3: #888888;         // Muted text

$color-glass-overlay: rgba(0, 0, 0, 0.4);  // Card overlays
$color-glass-border: rgba(255, 255, 255, 0.1); // Glass borders
```

### Dynamic Accent Colors (Context-Dependent)
```scss
$color-portfolio: #ff6b35;    // Vibrant orange
$color-social: #00d4ff;       // Electric blue  
$color-contact: #50fa7b;      // Neon green
$color-services: #ff79c6;     // Hot pink
$color-content: #f1fa8c;      // Electric yellow
```

## Typography System - "Brutal Hierarchy"

### Font Stack
```scss
$font-primary: 'Inter', 'SF Pro Display', system-ui, sans-serif;
$font-display: 'Space Grotesk', 'Inter', system-ui, sans-serif;
$font-mono: 'JetBrains Mono', 'SF Mono', Consolas, monospace;
```

### Scale (Unconventional Ratios)
```scss
// Desktop
$text-display: clamp(3.5rem, 8vw, 6rem);     // 56px - 96px
$text-h1: clamp(2.5rem, 5vw, 4rem);          // 40px - 64px
$text-h2: clamp(1.5rem, 3vw, 2.5rem);        // 24px - 40px
$text-body-large: clamp(1.1rem, 2vw, 1.3rem); // 18px - 21px
$text-body: clamp(0.9rem, 1.5vw, 1rem);       // 14px - 16px
$text-small: clamp(0.75rem, 1vw, 0.85rem);    // 12px - 14px

// Tablet & Mobile (Tighter scale)
$text-mobile-display: clamp(2.5rem, 6vw, 3.5rem);
$text-mobile-h1: clamp(1.8rem, 4vw, 2.5rem);
$text-mobile-body: clamp(0.85rem, 1.5vw, 0.95rem);
```

### Typography Treatments
```scss
.text-display {
  font-family: $font-display;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 0.9;
}

.text-card-title {
  font-family: $font-primary;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.1;
  text-transform: uppercase;
  font-size: clamp(0.85rem, 1.2vw, 1rem);
}

.text-card-description {
  font-family: $font-primary;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.3;
  font-size: clamp(0.75rem, 1vw, 0.85rem);
}
```

## Spacing System - "Micro-Dense"

### Base Unit: 4px (Extremely Tight)
```scss
$space-1: 4px;   // Micro
$space-2: 8px;   // Tiny  
$space-3: 12px;  // Small
$space-4: 16px;  // Base
$space-5: 20px;  // Medium
$space-6: 24px;  // Large
$space-8: 32px;  // XL (rare use)
$space-10: 40px; // XXL (very rare)
```

### Layout Applications
```scss
// Card spacing
.cards-grid {
  gap: $space-1; // 4px - brutally tight
}

// Content padding
.card-content {
  padding: $space-3 $space-4; // 12px 16px
}

// Section spacing
.section {
  margin-bottom: $space-6; // 24px max
}

// Profile section
.profile {
  padding: $space-4 0; // 16px vertical only
}
```

## Card Component Architecture

### Card Variants

#### 1. Hero Cards (Portfolio/Featured)
```scss
.card-hero {
  aspect-ratio: 2.5 / 1;
  background: linear-gradient(135deg, 
    rgba(0,0,0,0.8) 0%, 
    rgba(0,0,0,0.4) 100%);
  
  &:hover {
    background: linear-gradient(135deg, 
      rgba(0,0,0,0.6) 0%, 
      rgba(0,0,0,0.2) 100%);
  }
}
```

#### 2. Standard Cards (Social/Services)
```scss
.card-standard {
  aspect-ratio: 1 / 1;
  background: rgba(0,0,0,0.6);
  
  &:hover {
    background: rgba(0,0,0,0.4);
  }
}
```

#### 3. Feature Cards (Call-to-Action)
```scss
.card-feature {
  aspect-ratio: 3 / 1;
  background: linear-gradient(45deg,
    var(--accent-color) 0%,
    rgba(0,0,0,0.8) 100%);
}
```

## Interactive Behaviors

### Cursor States
```scss
.card {
  cursor: pointer;
  
  &:hover {
    cursor: pointer;
  }
  
  &:active {
    transform: scale(0.98);
    transition: transform 0.1s ease-out;
  }
}
```

### Focus States (Accessibility)
```scss
.card:focus-visible {
  outline: 2px solid $color-accent-1;
  outline-offset: 2px;
}
```

### Touch Device Adaptations
```scss
@media (hover: none) and (pointer: coarse) {
  .card:hover {
    transform: none; // Disable hover on touch devices
  }
  
  .card:active {
    transform: scale(0.95);
    background: rgba(255, 255, 255, 0.05);
  }
}
```

## Performance Optimization

### Hardware Acceleration
```scss
.card {
  will-change: transform, backdrop-filter;
  transform: translateZ(0); // Force GPU layer
}
```

### Reduced Motion Support
```scss
@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
  
  .card:hover {
    transform: none;
  }
}
```

This design system creates a cutting-edge, modern experience that feels like browsing a high-end digital art gallery rather than a traditional link-in-bio page. The tight spacing, asymmetrical layouts, and liquid-brutal animations will make this feel genuinely avant-garde.