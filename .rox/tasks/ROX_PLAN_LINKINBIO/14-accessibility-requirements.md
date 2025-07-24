# Accessibility Requirements & Guidelines

## Overview

This document defines comprehensive accessibility requirements for the content grid design, ensuring WCAG 2.1 AA compliance while maintaining the vibrant visual aesthetic. All specifications prioritize inclusive design for users with diverse abilities and assistive technologies.

## WCAG 2.1 AA Compliance Standards

### Target Compliance Level
- **WCAG 2.1 AA** - Industry standard for accessibility
- **Section 508** - Federal accessibility requirements
- **EN 301 549** - European accessibility standard

### Success Criteria Coverage
- ✅ **Perceivable** - Information presentable to users in ways they can perceive
- ✅ **Operable** - Interface components must be operable
- ✅ **Understandable** - Information and UI operation must be understandable
- ✅ **Robust** - Content must be robust enough for various assistive technologies

## Visual Accessibility

### Color Contrast Requirements

#### Text Contrast Ratios
```css
/* WCAG AA Requirements */
--minimum-normal-text: 4.5:1;    /* 14px and below */
--minimum-large-text: 3.0:1;     /* 18px+ or 14px+ bold */
--minimum-ui-elements: 3.0:1;    /* Interactive components */

/* AAA Targets (aspirational) */
--enhanced-normal-text: 7.0:1;
--enhanced-large-text: 4.5:1;
```

#### Implementation Strategy
```css
/* High contrast text on image overlays */
.card-text-overlay {
  background: linear-gradient(
    180deg, 
    rgba(0, 0, 0, 0.2) 0%, 
    rgba(0, 0, 0, 0.8) 100%
  );
  color: #FFFFFF; /* 21:1 contrast on dark overlay */
}

/* Platform tags with sufficient contrast */
.card-platform-tag {
  background: rgba(0, 0, 0, 0.9); /* Dark background */
  color: #FFFFFF; /* White text: 21:1 ratio */
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Action buttons with clear contrast */
.card-action-button {
  background: rgba(255, 255, 255, 0.95);
  color: #1F2937; /* Dark gray: 16.2:1 ratio */
  border: 2px solid rgba(0, 0, 0, 0.1);
}
```

#### Color Blind Accessibility
```css
/* Never rely solely on color for information */
.card-platform-tag::before {
  content: attr(data-platform-icon);
  margin-right: 4px;
  font-family: 'Platform Icons'; /* Icon font */
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .content-card {
    border: 2px solid;
    background: Canvas;
    color: CanvasText;
  }
  
  .card-action-button {
    background: ButtonFace;
    color: ButtonText;
    border: 2px solid ButtonText;
  }
}
```

### Focus Management

#### Focus Indicators
```css
/* High visibility focus rings */
.focusable-element:focus {
  outline: 3px solid var(--color-primary-500);
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.3);
}

/* Remove focus for mouse users, maintain for keyboard */
.focusable-element:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}

/* Enhanced focus for high contrast */
@media (prefers-contrast: high) {
  .focusable-element:focus {
    outline: 4px solid Highlight;
    outline-offset: 2px;
  }
}
```

#### Focus Order & Navigation
```typescript
// Focus management for grid navigation
class GridFocusManager {
  private gridItems: HTMLElement[] = [];
  private currentIndex: number = 0;
  private columns: number = 4;

  constructor(gridContainer: HTMLElement) {
    this.gridItems = Array.from(gridContainer.querySelectorAll('.content-card'));
    this.setupKeyboardNavigation();
  }

  private setupKeyboardNavigation() {
    this.gridItems.forEach((item, index) => {
      item.addEventListener('keydown', (e) => this.handleKeyDown(e, index));
      item.setAttribute('tabindex', index === 0 ? '0' : '-1');
    });
  }

  private handleKeyDown(event: KeyboardEvent, currentIndex: number) {
    let targetIndex = currentIndex;

    switch (event.key) {
      case 'ArrowRight':
        targetIndex = Math.min(currentIndex + 1, this.gridItems.length - 1);
        break;
      case 'ArrowLeft':
        targetIndex = Math.max(currentIndex - 1, 0);
        break;
      case 'ArrowDown':
        targetIndex = Math.min(currentIndex + this.columns, this.gridItems.length - 1);
        break;
      case 'ArrowUp':
        targetIndex = Math.max(currentIndex - this.columns, 0);
        break;
      case 'Home':
        targetIndex = 0;
        break;
      case 'End':
        targetIndex = this.gridItems.length - 1;
        break;
      default:
        return; // Don't prevent default for other keys
    }

    if (targetIndex !== currentIndex) {
      event.preventDefault();
      this.moveFocus(targetIndex);
    }
  }

  private moveFocus(newIndex: number) {
    this.gridItems[this.currentIndex].setAttribute('tabindex', '-1');
    this.gridItems[newIndex].setAttribute('tabindex', '0');
    this.gridItems[newIndex].focus();
    this.currentIndex = newIndex;
  }
}
```

## Semantic HTML Structure

### Content Card Markup
```html
<article 
  class="content-card" 
  role="article"
  aria-labelledby="card-title-1"
  aria-describedby="card-description-1"
  tabindex="0"
>
  <!-- Platform information -->
  <header class="card-header">
    <span 
      class="card-platform-tag" 
      aria-label="YouTube content"
      role="img"
    >
      <span aria-hidden="true">📺</span>
      YOUTUBE
    </span>
  </header>

  <!-- Visual content -->
  <div class="card-visual" role="img" aria-describedby="card-alt-1">
    <img 
      src="content-image.jpg" 
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
    />
    <div id="card-alt-1" class="sr-only">
      Colorful abstract digital art with vibrant green and blue tones
    </div>
  </div>

  <!-- Content information -->
  <div class="card-content">
    <h3 id="card-title-1" class="card-username">
      <a href="https://youtube.com/@testingthetest" aria-label="Visit @testingthetest on YouTube">
        @testingthetest
      </a>
    </h3>
    
    <p id="card-description-1" class="card-description">
      Here goes a short description of the specific channel we want to link. 
      The description can also be a bit longer to give more context.
    </p>
  </div>

  <!-- Call to action -->
  <footer class="card-footer">
    <a 
      href="https://youtube.com/@testingthetest" 
      class="card-action-button"
      aria-label="Visit @testingthetest channel on YouTube"
    >
      SEE MORE
      <span aria-hidden="true">→</span>
    </a>
  </footer>
</article>
```

### Page Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Daniel Richter - Digital Content & Systems Strategy</title>
</head>
<body>
  <!-- Skip navigation link -->
  <a href="#main-content" class="skip-link">
    Skip to main content
  </a>

  <!-- Main header -->
  <header role="banner">
    <h1 class="site-title">Daniel Richter</h1>
  </header>

  <!-- About section -->
  <section aria-labelledby="about-heading">
    <h2 id="about-heading" class="section-heading">Information</h2>
    <p class="about-text">
      Daniel Richter is a systems strategist and principled nonconformist...
    </p>
  </section>

  <!-- Main content grid -->
  <main id="main-content" role="main">
    <h2 class="sr-only">Content Portfolio</h2>
    <div 
      class="content-grid" 
      role="grid"
      aria-label="Content portfolio with 8 items"
    >
      <!-- Content cards... -->
    </div>
  </main>

  <!-- Footer -->
  <footer role="contentinfo">
    <p class="attribution">
      <a href="https://urt.media">made with ❤️ by urt.media</a>
    </p>
  </footer>
</body>
</html>
```

## Screen Reader Support

### ARIA Labels & Descriptions
```typescript
// Dynamic ARIA labels for content cards
interface CardData {
  platform: string;
  username: string;
  description: string;
  url: string;
}

function generateAccessibleCard(card: CardData, index: number): string {
  const ariaLabel = `${card.platform} content by ${card.username}. ${card.description}`;
  const positionInfo = `Item ${index + 1} of ${totalCards}`;
  
  return `
    <article 
      class="content-card"
      aria-label="${ariaLabel}"
      aria-posinset="${index + 1}"
      aria-setsize="${totalCards}"
      role="gridcell"
    >
      <!-- Card content -->
    </article>
  `;
}
```

### Screen Reader Announcements
```typescript
// Live region for dynamic updates
class A11yAnnouncer {
  private liveRegion: HTMLElement;

  constructor() {
    this.liveRegion = document.createElement('div');
    this.liveRegion.setAttribute('aria-live', 'polite');
    this.liveRegion.setAttribute('aria-atomic', 'true');
    this.liveRegion.className = 'sr-only';
    document.body.appendChild(this.liveRegion);
  }

  announce(message: string, priority: 'polite' | 'assertive' = 'polite') {
    this.liveRegion.setAttribute('aria-live', priority);
    this.liveRegion.textContent = message;
    
    // Clear after announcement
    setTimeout(() => {
      this.liveRegion.textContent = '';
    }, 1000);
  }
}

// Usage examples
const announcer = new A11yAnnouncer();

// Card interaction feedback
announcer.announce('Navigated to YouTube content by @testingthetest');
announcer.announce('Loading content...', 'assertive');
announcer.announce('Content loaded successfully');
```

## Motor Accessibility

### Touch Target Sizing
```css
/* WCAG AAA touch target guidelines */
.interactive-element {
  min-height: 44px;
  min-width: 44px;
  position: relative;
}

/* Expand touch area without visual change */
.card-action-button::before {
  content: '';
  position: absolute;
  inset: -12px; /* Expand beyond visual boundaries */
  z-index: -1;
}

/* Adequate spacing between targets */
.content-grid {
  gap: clamp(16px, 3vw, 24px);
}

@media (max-width: 767px) {
  .content-grid {
    gap: 20px; /* Larger gaps on mobile */
  }
  
  .card-action-button {
    min-height: 48px; /* Larger touch targets on mobile */
    padding: 12px 20px;
  }
}
```

### Reduced Motion Support
```css
/* Respect motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* Remove transform animations */
  .content-card:hover {
    transform: none;
  }
  
  /* Maintain focus indicators without animation */
  .content-card:focus {
    outline: 3px solid var(--color-primary-500);
    outline-offset: 2px;
  }
}
```

## Cognitive Accessibility

### Clear Information Hierarchy
```css
/* Consistent heading hierarchy */
h1 { font-size: var(--text-6xl); } /* Page title */
h2 { font-size: var(--text-3xl); } /* Section headings */
h3 { font-size: var(--text-xl); }  /* Card titles */

/* Clear visual hierarchy */
.section-heading {
  margin-bottom: 1.5rem;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-bold);
}

.card-username {
  font-weight: var(--font-weight-medium);
  margin-bottom: 0.5rem;
}
```

### Content Readability
```css
/* Optimal line length for readability */
.about-text {
  max-width: 65ch; /* Optimal reading width */
  line-height: 1.6; /* Comfortable line spacing */
  font-size: clamp(16px, 2.5vw, 20px);
}

/* Clear content grouping */
.content-card {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

## Error Prevention & Recovery

### Form Validation (if implemented)
```typescript
// Accessible error handling
class AccessibleErrorHandler {
  showError(element: HTMLElement, message: string) {
    const errorId = `${element.id}-error`;
    let errorElement = document.getElementById(errorId);
    
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.id = errorId;
      errorElement.className = 'error-message';
      errorElement.setAttribute('role', 'alert');
      element.parentNode?.insertBefore(errorElement, element.nextSibling);
    }
    
    errorElement.textContent = message;
    element.setAttribute('aria-describedby', errorId);
    element.setAttribute('aria-invalid', 'true');
    
    // Focus management
    element.focus();
  }
  
  clearError(element: HTMLElement) {
    const errorId = `${element.id}-error`;
    const errorElement = document.getElementById(errorId);
    
    if (errorElement) {
      errorElement.remove();
    }
    
    element.removeAttribute('aria-describedby');
    element.removeAttribute('aria-invalid');
  }
}
```

## Testing & Validation

### Automated Testing
```javascript
// Accessibility testing with axe-core
import { configureAxe } from 'jest-axe';

const axe = configureAxe({
  rules: {
    'color-contrast': { enabled: true },
    'keyboard-navigation': { enabled: true },
    'focus-management': { enabled: true },
    'aria-labels': { enabled: true }
  }
});

describe('Content Grid Accessibility', () => {
  test('should not have accessibility violations', async () => {
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
  
  test('should support keyboard navigation', () => {
    const firstCard = document.querySelector('.content-card');
    firstCard?.focus();
    
    // Simulate arrow key navigation
    fireEvent.keyDown(firstCard, { key: 'ArrowRight' });
    
    const secondCard = document.querySelectorAll('.content-card')[1];
    expect(secondCard).toHaveFocus();
  });
});
```

### Manual Testing Checklist

#### Keyboard Navigation
- [ ] Tab order is logical and predictable
- [ ] All interactive elements are reachable via keyboard
- [ ] Arrow keys navigate the grid appropriately
- [ ] Focus indicators are clearly visible
- [ ] No keyboard traps exist

#### Screen Reader Testing
- [ ] Content is announced logically
- [ ] ARIA labels provide sufficient context
- [ ] Headings create proper content structure
- [ ] Images have appropriate alt text
- [ ] Interactive elements have clear purposes

#### Visual Testing
- [ ] Text contrast meets WCAG AA standards
- [ ] Content is readable at 200% zoom
- [ ] High contrast mode is supported
- [ ] Color is not the only indicator of information

#### Motor Testing
- [ ] Touch targets meet minimum size requirements
- [ ] Adequate spacing between interactive elements
- [ ] Reduced motion preferences are respected
- [ ] Gesture alternatives are available

## Implementation Priority

### Phase 1: Foundation (WCAG A)
1. Semantic HTML structure
2. Keyboard navigation support
3. Basic ARIA labels
4. Alt text for images

### Phase 2: Enhancement (WCAG AA)
1. Color contrast optimization
2. Focus management
3. Screen reader announcements
4. Touch target sizing

### Phase 3: Excellence (WCAG AAA)
1. Enhanced contrast ratios
2. Advanced keyboard shortcuts
3. Comprehensive error handling
4. Cognitive accessibility features

This accessibility specification ensures the vibrant content grid design is inclusive and usable by all users, regardless of their abilities or assistive technologies used.