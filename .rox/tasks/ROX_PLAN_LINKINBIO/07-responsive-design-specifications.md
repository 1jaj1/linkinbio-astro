# Responsive Design Specifications - Avant-Garde Universal Cards

## Philosophy: "Fluid Brutalism Across Devices"

**Adaptive Asymmetry** - Our edge-to-edge, asymmetrical grid system maintains its avant-garde character while intelligently adapting to different devices. The design becomes more intimate on mobile while expanding to architectural proportions on large displays.

## 1. Breakpoint Strategy

### Breakpoint Definition
```scss
// Mobile-first approach with unconventional breakpoints
$bp-mobile: 320px;    // Minimum viable mobile
$bp-mobile-lg: 480px; // Large mobile / small tablet
$bp-tablet: 768px;    // Tablet portrait
$bp-tablet-lg: 1024px;// Tablet landscape / small desktop
$bp-desktop: 1200px;  // Desktop
$bp-desktop-lg: 1440px;// Large desktop
$bp-ultrawide: 1920px;// Ultrawide displays

// Usage with container queries for component-level responsiveness
@container (min-width: 768px) {
  .card-grid {
    // Component adapts to its container, not viewport
  }
}
```

### Device-Specific Adaptations
```scss
// Touch device optimizations
@media (hover: none) and (pointer: coarse) {
  .card {
    min-height: 60px; // Larger touch targets
    padding: 16px;    // More generous padding
  }
}

// High DPI displays
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .card-image {
    background-size: cover;
    image-rendering: -webkit-optimize-contrast;
  }
}

// Landscape orientation on mobile
@media (orientation: landscape) and (max-height: 500px) {
  .profile-section {
    padding: 8px 0; // Reduced vertical space
  }
  
  .cards-grid {
    gap: 2px; // Even tighter spacing in landscape
  }
}
```

## 2. Grid System Evolution

### Mobile (320px - 767px): "Intimate Stack"
```scss
.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  padding: 0; // Edge-to-edge
  
  // Single column with varying heights
  .card-hero {
    aspect-ratio: 2.5 / 1; // Wide hero cards
  }
  
  .card-standard {
    aspect-ratio: 3 / 1; // Wider than square on mobile
  }
  
  .card-feature {
    aspect-ratio: 2 / 1; // Prominent but not overwhelming
  }
}

// Mobile landscape adjustments
@media (orientation: landscape) and (max-width: 767px) {
  .cards-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    
    .card-hero {
      grid-column: 1 / -1; // Span full width
      aspect-ratio: 4 / 1;  // Even wider
    }
  }
}
```

### Tablet Portrait (768px - 1023px): "Asymmetrical Pairs"
```scss
@media (min-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
    
    // Asymmetrical spanning patterns
    .card-hero:nth-child(1) {
      grid-column: 1 / -1; // Full width
      aspect-ratio: 3 / 1;
    }
    
    .card-hero:nth-child(n+2) {
      grid-column: span 1; // Single column
      aspect-ratio: 1.5 / 1;
    }
    
    // Create visual rhythm with alternating spans
    .card-standard:nth-child(4n+1) {
      grid-column: 1 / -1; // Occasional full-width
      aspect-ratio: 4 / 1;
    }
  }
}
```

### Desktop (1024px+): "Architectural Grid"
```scss
@media (min-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 4px;
    
    // Complex spanning patterns
    .card-hero {
      grid-column: span 2;
      aspect-ratio: 2.5 / 1;
      
      &:nth-child(odd) {
        grid-column: span 3; // Varying widths
      }
    }
    
    .card-feature {
      grid-column: 1 / -1; // Full width
      aspect-ratio: 5 / 1;
    }
    
    // Asymmetrical cluster patterns
    .card-cluster {
      display: contents;
      
      .card:nth-child(1) { grid-column: span 2; }
      .card:nth-child(2) { grid-column: span 1; }
      .card:nth-child(3) { grid-column: span 1; }
    }
  }
}
```

### Large Desktop (1440px+): "Cinematic Expansion"
```scss
@media (min-width: 1440px) {
  .cards-grid {
    grid-template-columns: repeat(6, 1fr);
    gap: 6px; // Slightly larger gaps at huge sizes
    
    // More dramatic proportions
    .card-hero {
      grid-column: span 4;
      aspect-ratio: 3.5 / 1;
    }
    
    .card-feature {
      aspect-ratio: 8 / 1; // Ultra-wide
    }
  }
}
```

## 3. Typography Responsive Scaling

### Fluid Typography System
```scss
// Mobile-first fluid scaling
$text-scale-mobile: 0.85;
$text-scale-tablet: 0.95;
$text-scale-desktop: 1.0;
$text-scale-large: 1.1;

// Profile section scaling
.profile-name {
  font-size: clamp(1.8rem, 4vw + 0.5rem, 3.5rem);
  line-height: clamp(0.9, 0.9, 0.9);
  
  // Device-specific adjustments
  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 6vw, 2.2rem);
  }
}

.profile-title {
  font-size: clamp(0.9rem, 2vw + 0.2rem, 1.3rem);
  
  @media (max-width: 480px) {
    font-size: clamp(0.8rem, 3vw, 1rem);
  }
}

// Card typography scaling
.card-title {
  font-size: clamp(0.75rem, 1.2vw + 0.2rem, 1rem);
  
  // Larger on touch devices for readability
  @media (hover: none) and (pointer: coarse) {
    font-size: clamp(0.85rem, 1.4vw + 0.2rem, 1.1rem);
  }
}

.card-description {
  font-size: clamp(0.7rem, 1vw + 0.1rem, 0.85rem);
  
  // Hide on very small screens to maintain clean look
  @media (max-width: 320px) {
    display: none;
  }
}
```

### Reading Distance Optimization
```scss
// Optimize for different viewing distances
@media (min-width: 1440px) {
  // Assume farther viewing distance on large screens
  .card-title {
    font-size: clamp(0.9rem, 1.3vw + 0.2rem, 1.2rem);
    font-weight: 800; // Bolder for distance viewing
  }
}

@media (max-width: 480px) {
  // Assume close viewing on small devices
  .card-title {
    font-weight: 600; // Lighter weight for close viewing
    letter-spacing: 0.01em; // Slightly more open
  }
}
```

## 4. Interactive Behavior Adaptation

### Touch vs. Hover Interactions
```scss
// Base touch-first approach
.card {
  transition: transform 0.2s ease-out, background-color 0.2s ease-out;
  
  // Touch feedback
  &:active {
    transform: scale(0.98);
    background-color: rgba(255, 255, 255, 0.05);
  }
}

// Enhanced hover for pointer devices
@media (hover: hover) and (pointer: fine) {
  .card {
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    
    &:hover {
      transform: scale(1.02) perspective(1000px) rotateX(1deg);
      backdrop-filter: blur(8px) saturate(1.2);
      border-radius: 8px;
      box-shadow: 
        0 20px 40px -12px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(255, 255, 255, 0.1);
    }
  }
}

// Simplified interactions for low-end devices
@media (max-width: 480px) and (hover: none) {
  .card {
    &:active {
      transform: scale(0.95);
      transition: transform 0.1s ease-out;
    }
    
    // Remove complex effects on mobile
    &:hover {
      backdrop-filter: none;
      border-radius: 0;
      box-shadow: none;
    }
  }
}
```

### Gesture Support
```javascript
// Touch gesture handling for mobile
class TouchGestureHandler {
  constructor(element) {
    this.element = element;
    this.startY = 0;
    this.currentY = 0;
    this.bindEvents();
  }
  
  bindEvents() {
    this.element.addEventListener('touchstart', this.onTouchStart.bind(this));
    this.element.addEventListener('touchmove', this.onTouchMove.bind(this));
    this.element.addEventListener('touchend', this.onTouchEnd.bind(this));
  }
  
  onTouchStart(e) {
    this.startY = e.touches[0].clientY;
  }
  
  onTouchMove(e) {
    e.preventDefault(); // Prevent scroll during swipe
    this.currentY = e.touches[0].clientY;
    
    // Visual feedback during swipe
    const deltaY = this.currentY - this.startY;
    const card = e.target.closest('.card');
    if (card && Math.abs(deltaY) > 20) {
      card.style.transform = `translateY(${deltaY * 0.1}px)`;
    }
  }
  
  onTouchEnd(e) {
    const deltaY = this.currentY - this.startY;
    const card = e.target.closest('.card');
    
    if (card) {
      card.style.transform = ''; // Reset transform
      
      // Activate on vertical swipe
      if (Math.abs(deltaY) > 50) {
        card.click();
      }
    }
  }
}
```

## 5. Performance Optimization

### Critical Path CSS
```scss
// Inline critical styles for above-the-fold content
@media (max-width: 767px) {
  /* Critical mobile styles - inline in <head> */
  .profile-section {
    padding: 16px 0;
    text-align: left;
  }
  
  .cards-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;
    padding: 0;
  }
  
  .card {
    background: rgba(26, 26, 26, 1);
    color: white;
    padding: 12px 16px;
    cursor: pointer;
  }
}
```

### Image Optimization Strategy
```scss
// Progressive image loading
.card-image {
  // Start with ultra-low quality placeholder
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMUExQTFBIi8+Cjwvc3ZnPgo=');
  background-size: cover;
  background-position: center;
  
  // Load appropriate resolution based on device
  &.loaded {
    @media (max-width: 480px) {
      background-image: var(--image-small); // 400px wide
    }
    
    @media (min-width: 481px) and (max-width: 1024px) {
      background-image: var(--image-medium); // 800px wide
    }
    
    @media (min-width: 1025px) {
      background-image: var(--image-large); // 1200px wide
    }
    
    @media (min-width: 1441px) and (-webkit-min-device-pixel-ratio: 2) {
      background-image: var(--image-xlarge); // 2400px wide for retina
    }
  }
}
```

### Reduced Data Mode
```scss
// Respect user's data preferences
@media (prefers-reduced-data: reduce) {
  .card-image {
    background-image: none !important;
    background-color: rgba(255, 255, 255, 0.05);
    
    &::after {
      content: '📷';
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      opacity: 0.3;
    }
  }
  
  // Disable complex animations
  .card {
    transition: background-color 0.1s ease-out;
    
    &:hover {
      transform: none;
      backdrop-filter: none;
      box-shadow: none;
    }
  }
}
```

## 6. Progressive Enhancement Layers

### Layer 1: Core HTML/CSS (No JavaScript)
```html
<!-- Works without JavaScript -->
<main class="profile-container">
  <section class="profile-section">
    <img src="profile.jpg" alt="Daniel Richter" class="profile-image">
    <h1 class="profile-name">Daniel Richter</h1>
    <p class="profile-title">Creative Director & UX Designer</p>
  </section>
  
  <section class="cards-grid">
    <a href="https://portfolio.example.com" class="card card-hero">
      <h2>Portfolio</h2>
      <p>View my latest work</p>
    </a>
    <!-- More cards... -->
  </section>
</main>
```

### Layer 2: Enhanced CSS (Modern Browser Support)
```scss
// Enhanced for modern browsers
@supports (display: grid) and (gap: 4px) {
  .cards-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

// Fallback for older browsers
@supports not (display: grid) {
  .cards-grid {
    display: flex;
    flex-direction: column;
    gap: 4px;
    
    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      
      .card {
        flex: 1 1 calc(50% - 2px);
      }
    }
  }
}
```

### Layer 3: JavaScript Enhancements
```javascript
// Progressive enhancement with JavaScript
class ProgressiveCardGrid {
  constructor() {
    this.init();
  }
  
  init() {
    // Only enhance if JavaScript is available
    document.documentElement.classList.add('js-enabled');
    
    // Add advanced interactions
    this.addGestureSupport();
    this.addKeyboardNavigation();
    this.addLazyImageLoading();
    this.addAnalytics();
  }
  
  addGestureSupport() {
    if ('ontouchstart' in window) {
      // Touch device enhancements
      document.body.classList.add('touch-device');
      this.initTouchGestures();
    }
  }
  
  addLazyImageLoading() {
    if ('IntersectionObserver' in window) {
      // Modern lazy loading
      this.initIntersectionObserver();
    } else {
      // Fallback: load all images immediately
      this.loadAllImages();
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ProgressiveCardGrid();
  });
} else {
  new ProgressiveCardGrid();
}
```

## 7. Testing & Validation

### Device Testing Matrix
```markdown
## Primary Test Devices
- iPhone SE (375x667) - Minimum modern mobile
- iPhone 14 Pro (393x852) - Current flagship
- iPad Mini (768x1024) - Small tablet
- iPad Pro 12.9" (1024x1366) - Large tablet
- MacBook Air 13" (1440x900) - Laptop
- 27" iMac (2560x1440) - Desktop
- 32" Monitor (3840x2160) - 4K desktop

## Secondary Test Scenarios
- Samsung Galaxy S23 (360x800) - Android
- iPad Air (820x1180) - Mid-size tablet
- Surface Pro (1368x912) - Windows tablet
- Ultrawide monitor (3440x1440) - Cinematic display
```

### Performance Benchmarks
```markdown
## Target Metrics by Device
- Mobile: First Contentful Paint < 1.5s
- Tablet: First Contentful Paint < 1.2s  
- Desktop: First Contentful Paint < 0.8s
- Largest Contentful Paint < 2.5s (all devices)
- Cumulative Layout Shift < 0.1
- First Input Delay < 100ms
```

This responsive framework ensures our avant-garde design maintains its revolutionary edge while adapting intelligently to every device and context.