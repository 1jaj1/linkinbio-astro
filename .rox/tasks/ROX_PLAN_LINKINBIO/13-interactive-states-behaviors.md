# Interactive States & Behaviors Specification

## Overview

This document defines all interactive states, hover behaviors, and micro-interactions for the content grid design, ensuring consistent and delightful user experiences across all touchpoints.

## Interactive Elements Inventory

### Primary Interactive Elements
1. **Content Cards** - Main clickable areas
2. **Action Buttons** - "SEE MORE" buttons on cards
3. **Platform Tags** - Potential secondary interactions
4. **Username Handles** - Social media links
5. **Footer Attribution** - Credit link

### Secondary Interactive Elements
6. **Header Name** - Potential personal website link
7. **Information Section** - Potential bio expansion
8. **Social Media Icons** - If implemented

## State Definitions

### 1. Content Cards

#### Default State
```css
.content-card {
  transform: scale(1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.content-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
  transition: opacity 0.3s ease;
  opacity: 1;
}
```

#### Hover State
```css
.content-card:hover {
  transform: scale(1.02) translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.content-card:hover::before {
  opacity: 0.7; /* Lighter overlay on hover */
}

.content-card:hover .card-action-button {
  transform: scale(1.05);
  background-color: var(--action-hover-bg);
}

.content-card:hover .card-platform-tag {
  transform: translateY(-2px);
}
```

#### Focus State (Keyboard Navigation)
```css
.content-card:focus {
  outline: 3px solid var(--color-primary-500);
  outline-offset: 2px;
  transform: scale(1.01);
}

.content-card:focus:not(:focus-visible) {
  outline: none;
}
```

#### Active/Pressed State
```css
.content-card:active {
  transform: scale(0.98) translateY(0);
  transition-duration: 0.1s;
}
```

#### Loading State
```css
.content-card.loading {
  pointer-events: none;
  opacity: 0.7;
}

.content-card.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 24px;
  height: 24px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
```

### 2. Action Buttons ("SEE MORE")

#### Default State
```css
.card-action-button {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 8px 16px;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: white;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
```

#### Hover State
```css
.card-action-button:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

#### Focus State
```css
.card-action-button:focus {
  outline: 2px solid rgba(255, 255, 255, 0.8);
  outline-offset: 2px;
}
```

#### Active State
```css
.card-action-button:active {
  transform: scale(0.95);
  background: rgba(255, 255, 255, 0.4);
}
```

### 3. Platform Tags

#### Default State
```css
.card-platform-tag {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  padding: 4px 8px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: white;
  transition: all 0.2s ease;
  cursor: pointer;
}
```

#### Hover State
```css
.card-platform-tag:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
```

### 4. Username Handles

#### Default State
```css
.card-username {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease;
  cursor: pointer;
}
```

#### Hover State
```css
.card-username:hover {
  color: white;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.7);
  text-underline-offset: 2px;
}
```

### 5. Footer Attribution

#### Default State
```css
.footer-attribution {
  color: var(--color-gray-500);
  text-decoration: none;
  font-size: var(--text-xs);
  transition: all 0.2s ease;
  cursor: pointer;
}
```

#### Hover State
```css
.footer-attribution:hover {
  color: var(--color-gray-700);
  text-decoration: underline;
  text-underline-offset: 2px;
}
```

## Mobile Touch Interactions

### Touch Feedback
```css
@media (hover: none) and (pointer: coarse) {
  .content-card:active {
    transform: scale(0.96);
    transition-duration: 0.1s;
  }
  
  .card-action-button:active {
    background: rgba(255, 255, 255, 0.4);
    transform: scale(0.92);
  }
  
  /* Remove hover states on touch devices */
  .content-card:hover {
    transform: none;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
}
```

### Touch Target Optimization
```css
.content-card,
.card-action-button,
.card-platform-tag,
.card-username {
  min-height: 44px; /* WCAG touch target minimum */
  min-width: 44px;
}

/* Expand touch area without visual change */
.card-action-button::before {
  content: '';
  position: absolute;
  inset: -8px;
  z-index: -1;
}
```

## Animation & Transition Specifications

### Timing Functions
```css
:root {
  --ease-out-cubic: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in-cubic: cubic-bezier(0.4, 0, 1, 1);
  --ease-in-out-cubic: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Duration Standards
```css
:root {
  --duration-fast: 0.15s;
  --duration-normal: 0.25s;
  --duration-slow: 0.35s;
  --duration-slower: 0.5s;
}
```

### Performance Optimizations
```css
/* Enable hardware acceleration for smooth animations */
.content-card,
.card-action-button,
.card-platform-tag {
  will-change: transform;
  transform: translateZ(0);
}

/* Remove will-change after animation completes */
.content-card:not(:hover):not(:focus):not(:active) {
  will-change: auto;
}
```

## Reduced Motion Support

### Accessibility Compliance
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  .content-card:hover {
    transform: none;
  }
  
  .card-action-button:hover {
    transform: none;
  }
}
```

## Error States

### Failed Load State
```css
.content-card.error {
  opacity: 0.6;
  pointer-events: none;
}

.content-card.error::after {
  content: '⚠️ Failed to load';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(239, 68, 68, 0.9);
  color: white;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
}
```

### Network Error Feedback
```css
.content-card.network-error {
  border: 2px dashed var(--color-error);
  background: rgba(239, 68, 68, 0.05);
}
```

## CMS Customizable Interaction Properties

### Editable Animation Settings
```typescript
// TinaCMS schema addition for interaction customization
{
  type: "object",
  name: "interactions",
  label: "Interactive Behaviors",
  fields: [
    {
      type: "boolean",
      name: "enableHoverEffects",
      label: "Enable Hover Effects",
      description: "Show hover animations on desktop"
    },
    {
      type: "string",
      name: "hoverScale",
      label: "Hover Scale Factor",
      options: ["1.01", "1.02", "1.03", "1.05"],
      description: "How much cards scale on hover"
    },
    {
      type: "string",
      name: "transitionSpeed",
      label: "Animation Speed",
      options: ["0.15s", "0.25s", "0.35s", "0.5s"],
      description: "Speed of hover animations"
    },
    {
      type: "string",
      name: "hoverShadow",
      label: "Hover Shadow Intensity",
      options: ["subtle", "medium", "strong"],
      description: "Depth of shadow on hover"
    }
  ]
}
```

## Implementation Priority

### Phase 1: Core Interactions
1. Card hover and click states
2. Button interactions
3. Focus states for accessibility
4. Mobile touch feedback

### Phase 2: Enhanced Interactions
1. Platform tag interactions
2. Username handle links
3. Loading states
4. Error handling

### Phase 3: Advanced Features
1. CMS customizable animations
2. Advanced micro-interactions
3. Sound feedback (optional)
4. Haptic feedback on supported devices

This specification ensures smooth, accessible, and delightful interactions while maintaining the vibrant aesthetic of the content grid design.