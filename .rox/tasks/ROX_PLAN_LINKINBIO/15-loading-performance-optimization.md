# Loading & Performance Optimization Strategies

## Overview

This document defines comprehensive performance optimization strategies for the content grid design, targeting Google PageSpeed scores of 95+ while maintaining the vibrant visual experience across all devices and connection types.

## Performance Targets

### Core Web Vitals Goals
- **Largest Contentful Paint (LCP)**: ≤ 2.5 seconds
- **First Input Delay (FID)**: ≤ 100 milliseconds  
- **Cumulative Layout Shift (CLS)**: ≤ 0.1
- **First Contentful Paint (FCP)**: ≤ 1.8 seconds
- **Total Blocking Time (TBT)**: ≤ 200 milliseconds

### Google PageSpeed Targets
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 95+
- **SEO**: 100

## Image Optimization Strategy

### Responsive Image Delivery
```html
<!-- Modern responsive image implementation -->
<picture>
  <!-- WebP for modern browsers -->
  <source 
    media="(max-width: 767px)"
    srcset="
      /images/card-mobile-400w.webp 400w,
      /images/card-mobile-800w.webp 800w
    "
    type="image/webp"
  />
  <source 
    media="(max-width: 1023px)"
    srcset="
      /images/card-tablet-600w.webp 600w,
      /images/card-tablet-1200w.webp 1200w
    "
    type="image/webp"
  />
  <source 
    media="(min-width: 1024px)"
    srcset="
      /images/card-desktop-800w.webp 800w,
      /images/card-desktop-1600w.webp 1600w
    "
    type="image/webp"
  />
  
  <!-- Fallback to JPEG for older browsers -->
  <source 
    media="(max-width: 767px)"
    srcset="
      /images/card-mobile-400w.jpg 400w,
      /images/card-mobile-800w.jpg 800w
    "
    type="image/jpeg"
  />
  <source 
    media="(max-width: 1023px)"
    srcset="
      /images/card-tablet-600w.jpg 600w,
      /images/card-tablet-1200w.jpg 1200w
    "
    type="image/jpeg"
  />
  <source 
    media="(min-width: 1024px)"
    srcset="
      /images/card-desktop-800w.jpg 800w,
      /images/card-desktop-1600w.jpg 1600w
    "
    type="image/jpeg"
  />
  
  <!-- Default fallback -->
  <img 
    src="/images/card-default-800w.jpg"
    alt="Card background"
    loading="lazy"
    decoding="async"
    width="800"
    height="640"
    style="aspect-ratio: 5/4;"
  />
</picture>
```

### Image Processing Pipeline
```typescript
// Astro build-time image optimization
import { getImage } from 'astro:assets';

interface ImageSizes {
  mobile: { width: number; height: number }[];
  tablet: { width: number; height: number }[];
  desktop: { width: number; height: number }[];
}

const imageSizes: ImageSizes = {
  mobile: [
    { width: 400, height: 320 },   // 1x
    { width: 800, height: 640 }    // 2x
  ],
  tablet: [
    { width: 600, height: 480 },   // 1x
    { width: 1200, height: 960 }   // 2x
  ],
  desktop: [
    { width: 800, height: 640 },   // 1x
    { width: 1600, height: 1280 }  // 2x
  ]
};

async function generateOptimizedImages(originalImage: string) {
  const optimizedImages = {
    webp: {},
    jpeg: {}
  };

  for (const [device, sizes] of Object.entries(imageSizes)) {
    for (const size of sizes) {
      // Generate WebP
      optimizedImages.webp[`${device}-${size.width}w`] = await getImage({
        src: originalImage,
        width: size.width,
        height: size.height,
        format: 'webp',
        quality: 85
      });

      // Generate JPEG fallback
      optimizedImages.jpeg[`${device}-${size.width}w`] = await getImage({
        src: originalImage,
        width: size.width,
        height: size.height,
        format: 'jpeg',
        quality: 82
      });
    }
  }

  return optimizedImages;
}
```

### Background Image Optimization for Cards
```css
/* CSS-based responsive background images */
.content-card {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Mobile-first approach */
.content-card[data-bg-image] {
  background-image: url('card-mobile-400w.webp');
}

/* Tablet and up */
@media (min-width: 768px) and (min-resolution: 1dppx) {
  .content-card[data-bg-image] {
    background-image: url('card-tablet-600w.webp');
  }
}

/* High DPI tablet */
@media (min-width: 768px) and (min-resolution: 2dppx) {
  .content-card[data-bg-image] {
    background-image: url('card-tablet-1200w.webp');
  }
}

/* Desktop */
@media (min-width: 1024px) and (min-resolution: 1dppx) {
  .content-card[data-bg-image] {
    background-image: url('card-desktop-800w.webp');
  }
}

/* High DPI desktop */
@media (min-width: 1024px) and (min-resolution: 2dppx) {
  .content-card[data-bg-image] {
    background-image: url('card-desktop-1600w.webp');
  }
}

/* Fallback for browsers without WebP support */
.no-webp .content-card[data-bg-image] {
  background-image: url('card-mobile-400w.jpg');
}
```

## Lazy Loading Implementation

### Progressive Image Loading
```typescript
// Intersection Observer for lazy loading
class LazyImageLoader {
  private observer: IntersectionObserver;
  private imageQueue: Set<HTMLElement> = new Set();

  constructor() {
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      {
        rootMargin: '50px 0px', // Start loading 50px before visible
        threshold: 0.1
      }
    );
  }

  observe(element: HTMLElement) {
    this.imageQueue.add(element);
    this.observer.observe(element);
  }

  private async handleIntersection(entries: IntersectionObserverEntry[]) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        await this.loadImage(element);
        this.observer.unobserve(element);
        this.imageQueue.delete(element);
      }
    }
  }

  private async loadImage(element: HTMLElement): Promise<void> {
    return new Promise((resolve) => {
      // Show loading state
      element.classList.add('loading');
      
      const bgImage = element.dataset.bgImage;
      if (bgImage) {
        const img = new Image();
        
        img.onload = () => {
          element.style.backgroundImage = `url('${bgImage}')`;
          element.classList.remove('loading');
          element.classList.add('loaded');
          resolve();
        };
        
        img.onerror = () => {
          element.classList.remove('loading');
          element.classList.add('error');
          resolve();
        };
        
        img.src = bgImage;
      }
    });
  }
}

// Initialize lazy loading
const lazyLoader = new LazyImageLoader();
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.content-card[data-bg-image]').forEach(card => {
    lazyLoader.observe(card as HTMLElement);
  });
});
```

### Loading States
```css
/* Loading skeleton animation */
.content-card.loading {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: loading-shimmer 1.5s infinite ease-in-out;
}

@keyframes loading-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Smooth fade-in when loaded */
.content-card.loaded {
  animation: fade-in 0.3s ease-out;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Error state */
.content-card.error {
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-card.error::before {
  content: '🖼️ Image failed to load';
  color: #666;
  font-size: 14px;
}
```

## Critical CSS Optimization

### Above-the-Fold CSS
```css
/* Critical CSS for immediate render */
:root {
  --color-gray-200: #E5E7EB;
  --color-gray-900: #111827;
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

body {
  margin: 0;
  background-color: var(--color-gray-200);
  font-family: var(--font-primary);
  font-display: swap;
}

.header-name {
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 700;
  color: var(--color-gray-900);
  line-height: 1.1;
  margin: 2rem 1rem 1rem;
  text-align: left;
}

.content-grid {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .content-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    padding: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .content-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}

.content-card {
  aspect-ratio: 5/4;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  background: #f9fafb;
  min-height: 200px;
}
```

### CSS Loading Strategy
```html
<!-- Critical CSS inline -->
<style>
  /* Critical above-the-fold styles inline */
</style>

<!-- Non-critical CSS with preload -->
<link rel="preload" href="/styles/non-critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/styles/non-critical.css"></noscript>
```

## Font Loading Optimization

### Google Fonts Strategy
```html
<!-- Preconnect to Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Font loading with display swap -->
<link 
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" 
  rel="stylesheet"
  media="print" 
  onload="this.media='all'"
>
<noscript>
  <link 
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" 
    rel="stylesheet"
  >
</noscript>
```

### Font Display Strategy
```css
/* Ensure text remains visible during font swap */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap; /* Critical for performance */
  src: url('inter-regular.woff2') format('woff2');
}

/* Fallback font matching */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

## Code Splitting & Bundle Optimization

### Astro Configuration
```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',
  
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate vendor code
            vendor: ['astro'],
            // Separate large libraries if any
            interactions: ['./src/utils/interactions.ts']
          }
        }
      },
      // Enable code splitting
      cssCodeSplit: true,
      // Minimize assets
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.log in production
          drop_debugger: true
        }
      }
    },
    
    // CSS optimization
    css: {
      postcss: {
        plugins: [
          require('cssnano')({
            preset: ['advanced', {
              discardComments: { removeAll: true },
              mergeRules: true,
              mergeLonghand: true,
              cssDeclarationSorter: true
            }]
          })
        ]
      }
    }
  },

  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
```

### JavaScript Optimization
```typescript
// Dynamic imports for non-critical functionality
const loadInteractions = async () => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(async () => {
      const { initializeInteractions } = await import('./interactions.js');
      initializeInteractions();
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(async () => {
      const { initializeInteractions } = await import('./interactions.js');
      initializeInteractions();
    }, 100);
  }
};

// Load non-critical features after page load
window.addEventListener('load', loadInteractions);
```

## Caching Strategy

### HTTP Caching Headers
```javascript
// Vercel configuration (_headers file)
/images/*
  Cache-Control: public, max-age=31536000, immutable

/fonts/*
  Cache-Control: public, max-age=31536000, immutable

/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/
  Cache-Control: public, max-age=3600, s-maxage=86400

*.css
  Cache-Control: public, max-age=31536000, immutable

*.js
  Cache-Control: public, max-age=31536000, immutable
```

### Service Worker Implementation
```typescript
// sw.js - Basic service worker for caching
const CACHE_NAME = 'linkinbio-v1';
const CRITICAL_RESOURCES = [
  '/',
  '/styles/critical.css',
  '/fonts/inter-regular.woff2',
  '/fonts/inter-medium.woff2',
  '/fonts/inter-bold.woff2'
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CRITICAL_RESOURCES))
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) return response;
          
          return fetch(event.request)
            .then(fetchResponse => {
              const responseClone = fetchResponse.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, responseClone));
              return fetchResponse;
            });
        })
    );
  }
});
```

## Performance Monitoring

### Core Web Vitals Tracking
```typescript
// Web Vitals measurement
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric: any) {
  // Send to your analytics provider
  console.log(metric);
  
  // Example: Send to Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      value: Math.round(metric.value),
      metric_id: metric.id,
      custom_parameter: metric.delta
    });
  }
}

// Measure all Core Web Vitals
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### Performance Budget
```json
{
  "budget": {
    "requests": 25,
    "totalSize": "500kb",
    "resourceSizes": [
      {
        "resourceType": "script",
        "budget": "125kb"
      },
      {
        "resourceType": "total",
        "budget": "500kb"
      },
      {
        "resourceType": "image",
        "budget": "200kb"
      },
      {
        "resourceType": "media",
        "budget": "150kb"
      },
      {
        "resourceType": "font",
        "budget": "50kb"
      },
      {
        "resourceType": "stylesheet",
        "budget": "25kb"
      }
    ]
  }
}
```

## Mobile-Specific Optimizations

### Touch Optimization
```css
/* Improve touch performance */
.content-card {
  touch-action: manipulation; /* Prevent zoom on double-tap */
  -webkit-tap-highlight-color: transparent; /* Remove tap highlight */
}

/* Optimize scroll performance */
.content-grid {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
```

### Reduced Data Mode
```css
/* Respect user preferences for reduced data */
@media (prefers-reduced-data: reduce) {
  .content-card[data-bg-image] {
    background-image: none;
    background-color: var(--fallback-color, #f5f5f5);
  }
  
  .content-card::before {
    content: '📷';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    opacity: 0.5;
  }
}
```

## Implementation Checklist

### Phase 1: Core Performance
- [ ] Implement critical CSS inlining
- [ ] Set up responsive image pipeline
- [ ] Configure font loading with display: swap
- [ ] Enable Astro's built-in optimizations

### Phase 2: Advanced Optimizations
- [ ] Implement lazy loading with Intersection Observer
- [ ] Add service worker for caching
- [ ] Set up performance monitoring
- [ ] Configure CDN caching headers

### Phase 3: Fine-tuning
- [ ] Optimize bundle splitting
- [ ] Implement reduced motion/data preferences
- [ ] Add performance budgets to CI/CD
- [ ] Conduct real-world performance testing

This performance strategy ensures the vibrant content grid loads quickly while maintaining its visual impact across all devices and network conditions.