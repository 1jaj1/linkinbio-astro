# Technical Implementation Specifications

## Overview

This document provides comprehensive technical specifications for implementing the responsive content grid design. It integrates all design requirements, performance optimizations, accessibility features, and CMS integration into actionable development guidelines.

## Technology Stack

### Core Framework

- **Astro 4.x** - Static site generation with component islands
- **TypeScript** - Type safety and enhanced developer experience
- **Tailwind CSS** - Utility-first styling with custom design system
- **PostCSS** - CSS processing and optimization

### Build Tools & Optimization

- **Vite** - Fast build tooling and HMR
- **Sharp** - High-performance image processing
- **Rollup** - Bundle optimization and code splitting
- **Terser** - JavaScript minification

### Content Management

- **TinaCMS** or **Sanity** - Headless CMS for dynamic content
- **Astro Content Collections** - Type-safe content management
- **JSON Schema** - Content validation and editor experience

### Testing & Quality

- **Vitest** - Unit and integration testing
- **Playwright** - E2E testing and visual regression
- **axe-core** - Accessibility testing automation
- **Lighthouse CI** - Performance monitoring

## Project Structure

```
linkinbio_new/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Card/
│   │   │   ├── Card.astro
│   │   │   ├── CardBackground.astro
│   │   │   ├── CardContent.astro
│   │   │   └── types.ts
│   │   ├── Grid/
│   │   │   ├── ContentGrid.astro
│   │   │   ├── GridSkeleton.astro
│   │   │   └── types.ts
│   │   ├── Profile/
│   │   │   ├── Profile.astro
│   │   │   ├── ProfileHeader.astro
│   │   │   └── types.ts
│   │   └── ui/               # Base UI components
│   │       ├── Button.astro
│   │       ├── Link.astro
│   │       └── Typography.astro
│   ├── content/              # Content collections
│   │   ├── config.ts
│   │   ├── cards/
│   │   └── profile/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── [...slug].astro
│   ├── styles/               # Global styles
│   │   ├── globals.css
│   │   ├── components.css
│   │   └── utilities.css
│   ├── utils/                # Utility functions
│   │   ├── cms.ts
│   │   ├── images.ts
│   │   ├── performance.ts
│   │   └── accessibility.ts
│   └── types/                # TypeScript definitions
│       ├── cms.ts
│       ├── content.ts
│       └── global.ts
├── public/
│   ├── images/               # Static images
│   ├── fonts/                # Font files
│   └── icons/                # SVG icons
├── content/                  # CMS content files
├── tests/                    # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
└── tina/                     # TinaCMS configuration
```

## Component Architecture

### Card Component System

```typescript
// src/components/Card/types.ts
export interface CardBackground {
  type: 'image' | 'color' | 'gradient';
  image?: {
    src: string;
    alt: string;
    overlay?: {
      color: string;
      opacity: number;
    };
  };
  color?: string;
  gradient?: {
    direction: string;
    startColor: string;
    endColor: string;
    middleColor?: string;
  };
  textStyling?: {
    useCustomColors: boolean;
    primaryTextColor?: string;
    secondaryTextColor?: string;
  };
}

export interface CardContent {
  platform: {
    name: string;
    icon: string;
    color: string;
  };
  username: string;
  description: string;
  url: string;
  published: boolean;
  order: number;
}

export interface CardProps {
  content: CardContent;
  background: CardBackground;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
}
```

### Card Implementation

```astro
---
// src/components/Card/Card.astro
import type { CardProps } from './types';
import CardBackground from './CardBackground.astro';
import CardContent from './CardContent.astro';

interface Props extends CardProps {}

const { content, background, loading = 'lazy', priority = false } = Astro.props;

const cardId = `card-${content.platform.name.toLowerCase()}-${Date.now()}`;
const cardClasses = [
  'content-card',
  'relative',
  'aspect-[5/4]',
  'rounded-[20px]',
  'overflow-hidden',
  'group',
  'focus-within:outline-none',
  'focus-within:ring-2',
  'focus-within:ring-offset-2',
  'focus-within:ring-primary-500',
  'transition-transform',
  'duration-200',
  'hover:scale-[1.02]',
  'motion-reduce:transform-none',
  'motion-reduce:transition-none'
].join(' ');
---

<article
  id={cardId}
  class={cardClasses}
  data-card-type={background.type}
  data-platform={content.platform.name.toLowerCase()}
  aria-labelledby={`${cardId}-title`}
  aria-describedby={`${cardId}-description`}
  tabindex="0"
  role="article"
>
  <CardBackground 
    background={background} 
    loading={loading}
    priority={priority}
  />

  <CardContent 
    content={content}
    cardId={cardId}
    textColors={background.textStyling}
  />
</article>

<style>
  .content-card {
    /* Ensure proper stacking context */
    isolation: isolate;
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .content-card {
      border: 2px solid;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .content-card {
      transform: none !important;
      transition: none !important;
    }
  }
</style>
```

### Background Component

```astro
---
// src/components/Card/CardBackground.astro
import type { CardBackground } from './types';
import { getOptimizedImage } from '../../utils/images';

interface Props {
  background: CardBackground;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
}

const { background, loading = 'lazy', priority = false } = Astro.props;

let backgroundStyle = '';
let pictureElement = null;

if (background.type === 'image' && background.image) {
  const optimizedImages = await getOptimizedImage(background.image.src);
  pictureElement = optimizedImages;
} else if (background.type === 'color' && background.color) {
  backgroundStyle = `background-color: ${background.color};`;
} else if (background.type === 'gradient' && background.gradient) {
  const { direction, startColor, endColor, middleColor } = background.gradient;
  const colors = middleColor 
    ? `${startColor}, ${middleColor}, ${endColor}`
    : `${startColor}, ${endColor}`;
  backgroundStyle = `background: linear-gradient(${direction}, ${colors});`;
}
---

<div 
  class="card-background absolute inset-0 -z-10"
  style={backgroundStyle}
  data-background-type={background.type}
>
  {background.type === 'image' && pictureElement && (
    <picture class="w-full h-full">
      <source
        media="(max-width: 767px)"
        srcset={`${pictureElement.mobile.webp.src} 1x, ${pictureElement.mobile_2x.webp.src} 2x`}
        type="image/webp"
      />
      <source
        media="(max-width: 1023px)"
        srcset={`${pictureElement.tablet.webp.src} 1x, ${pictureElement.tablet_2x.webp.src} 2x`}
        type="image/webp"
      />
      <source
        media="(min-width: 1024px)"
        srcset={`${pictureElement.desktop.webp.src} 1x, ${pictureElement.desktop_2x.webp.src} 2x`}
        type="image/webp"
      />
      <img
        src={pictureElement.fallback.src}
        alt=""
        loading={loading}
        decoding="async"
        class="w-full h-full object-cover"
        width={pictureElement.fallback.width}
        height={pictureElement.fallback.height}
      />
    </picture>
  )}

  {background.type === 'image' && background.image?.overlay && (
    <div 
      class="absolute inset-0"
      style={`background-color: ${background.image.overlay.color}; opacity: ${background.image.overlay.opacity};`}
    ></div>
  )}
</div>

<style>
  /* Reduced data mode - hide images */
  @media (prefers-reduced-data: reduce) {
    .card-background[data-background-type="image"] img {
      display: none;
    }

    .card-background[data-background-type="image"]::before {
      content: '🖼️';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
      opacity: 0.5;
    }
  }
</style>
```

### Content Grid Implementation

```astro
---
// src/components/Grid/ContentGrid.astro
import type { CardProps } from '../Card/types';
import Card from '../Card/Card.astro';
import GridSkeleton from './GridSkeleton.astro';

interface Props {
  cards: CardProps[];
  loading?: boolean;
}

const { cards, loading = false } = Astro.props;

const gridClasses = [
  'content-grid',
  'grid',
  'gap-4',
  'p-4',
  'grid-cols-1',
  'sm:grid-cols-2',
  'sm:gap-5',
  'sm:p-6',
  'lg:grid-cols-4',
  'lg:gap-6',
  'lg:p-8',
  'lg:max-w-screen-xl',
  'lg:mx-auto'
].join(' ');
---

{loading ? (
  <GridSkeleton />
) : (
  <section 
    class={gridClasses}
    role="region"
    aria-label="Content portfolio"
    data-grid-count={cards.length}
  >
    {cards.map((card, index) => (
      <Card 
        {...card}
        loading={index < 4 ? 'eager' : 'lazy'}
        priority={index < 2}
      />
    ))}
  </section>
)}

<script>
  // Enhanced keyboard navigation for grid
  import { GridFocusManager } from '../../utils/accessibility';

  document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.content-grid');
    if (grid) {
      new GridFocusManager(grid as HTMLElement);
    }
  });
</script>

<style>
  /* Grid-specific responsive adjustments */
  .content-grid {
    container-type: inline-size;
  }

  /* Container queries for more granular control */
  @container (min-width: 640px) {
    .content-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @container (min-width: 1024px) {
    .content-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
```

## Content Management Integration

### TinaCMS Configuration

```typescript
// tina/config.ts
import { defineConfig } from 'tinacms';

const cardContentSchema = {
  name: 'card',
  label: 'Content Card',
  path: 'content/cards',
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Card Title',
      required: true
    },

    // Platform Configuration
    {
      type: 'object',
      name: 'platform',
      label: 'Platform',
      fields: [
        {
          type: 'string',
          name: 'name',
          label: 'Platform Name',
          options: ['YouTube', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'Custom']
        },
        {
          type: 'string',
          name: 'icon',
          label: 'Platform Icon',
          ui: { component: 'textarea' }
        },
        {
          type: 'string',
          name: 'color',
          label: 'Platform Color',
          ui: { component: 'color' }
        }
      ]
    },

    // Content Information
    {
      type: 'string',
      name: 'username',
      label: 'Username/Handle',
      required: true
    },
    {
      type: 'string',
      name: 'description',
      label: 'Description',
      ui: { component: 'textarea' }
    },
    {
      type: 'string',
      name: 'url',
      label: 'Target URL',
      required: true
    },

    // Visual Configuration
    {
      type: 'object',
      name: 'background',
      label: 'Background Settings',
      fields: [
        {
          type: 'string',
          name: 'type',
          label: 'Background Type',
          options: [
            { label: 'Image', value: 'image' },
            { label: 'Solid Color', value: 'color' },
            { label: 'Gradient', value: 'gradient' }
          ]
        },

        // Image background fields
        {
          type: 'image',
          name: 'image',
          label: 'Background Image',
          ui: {
            conditional: (values) => values.background?.type === 'image'
          }
        },
        {
          type: 'string',
          name: 'imageAlt',
          label: 'Image Alt Text',
          ui: {
            conditional: (values) => values.background?.type === 'image'
          }
        },

        // Color background field
        {
          type: 'string',
          name: 'color',
          label: 'Background Color',
          ui: {
            component: 'color',
            conditional: (values) => values.background?.type === 'color'
          }
        },

        // Gradient background fields
        {
          type: 'object',
          name: 'gradient',
          label: 'Gradient Settings',
          ui: {
            conditional: (values) => values.background?.type === 'gradient'
          },
          fields: [
            {
              type: 'string',
              name: 'direction',
              label: 'Direction',
              options: ['to right', 'to left', 'to bottom', 'to top', '45deg']
            },
            {
              type: 'string',
              name: 'startColor',
              label: 'Start Color',
              ui: { component: 'color' }
            },
            {
              type: 'string',
              name: 'endColor',
              label: 'End Color',
              ui: { component: 'color' }
            }
          ]
        }
      ]
    },

    // Publishing Controls
    {
      type: 'boolean',
      name: 'published',
      label: 'Published',
      required: true
    },
    {
      type: 'number',
      name: 'order',
      label: 'Display Order'
    }
  ]
};

export default defineConfig({
  branch: 'main',
  clientId: process.env.TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public'
  },

  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public'
    }
  },

  schema: {
    collections: [
      cardContentSchema,
      {
        name: 'profile',
        label: 'Profile',
        path: 'content/profile',
        format: 'md',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Name',
            required: true
          },
          {
            type: 'rich-text',
            name: 'bio',
            label: 'Biography'
          },
          {
            type: 'object',
            name: 'styling',
            label: 'Visual Styling',
            fields: [
              {
                type: 'string',
                name: 'backgroundColor',
                label: 'Page Background Color',
                ui: { component: 'color' }
              },
              {
                type: 'string',
                name: 'textColor',
                label: 'Text Color',
                ui: { component: 'color' }
              },
              {
                type: 'string',
                name: 'accentColor',
                label: 'Accent Color',
                ui: { component: 'color' }
              }
            ]
          }
        ]
      }
    ]
  }
});
```

### Content Collection Setup

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const cardCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    platform: z.object({
      name: z.enum(['YouTube', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'Custom']),
      icon: z.string(),
      color: z.string()
    }),
    username: z.string(),
    description: z.string(),
    url: z.string().url(),
    background: z.discriminatedUnion('type', [
      z.object({
        type: z.literal('image'),
        image: z.string(),
        imageAlt: z.string(),
        overlay: z.object({
          color: z.string(),
          opacity: z.number().min(0).max(1)
        }).optional()
      }),
      z.object({
        type: z.literal('color'),
        color: z.string()
      }),
      z.object({
        type: z.literal('gradient'),
        gradient: z.object({
          direction: z.string(),
          startColor: z.string(),
          endColor: z.string(),
          middleColor: z.string().optional()
        })
      })
    ]),
    published: z.boolean().default(true),
    order: z.number().default(0)
  })
});

const profileCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    styling: z.object({
      backgroundColor: z.string().optional(),
      textColor: z.string().optional(),
      accentColor: z.string().optional()
    }).optional()
  })
});

export const collections = {
  cards: cardCollection,
  profile: profileCollection
};
```

## Performance Implementation

### Image Optimization Utility

```typescript
// src/utils/images.ts
import { getImage } from 'astro:assets';

interface OptimizedImageSet {
  mobile: { webp: any; jpg: any };
  mobile_2x: { webp: any; jpg: any };
  tablet: { webp: any; jpg: any };
  tablet_2x: { webp: any; jpg: any };
  desktop: { webp: any; jpg: any };
  desktop_2x: { webp: any; jpg: any };
  fallback: any;
}

export async function getOptimizedImage(src: string): Promise<OptimizedImageSet> {
  const sizes = {
    mobile: { width: 400, height: 320 },
    mobile_2x: { width: 800, height: 640 },
    tablet: { width: 600, height: 480 },
    tablet_2x: { width: 1200, height: 960 },
    desktop: { width: 800, height: 640 },
    desktop_2x: { width: 1600, height: 1280 }
  };

  const optimizedImages: any = {};

  // Generate WebP and JPEG versions for each size
  for (const [key, { width, height }] of Object.entries(sizes)) {
    optimizedImages[key] = {
      webp: await getImage({
        src,
        width,
        height,
        format: 'webp',
        quality: 85
      }),
      jpg: await getImage({
        src,
        width,
        height,
        format: 'jpeg',
        quality: 82
      })
    };
  }

  // Fallback image
  optimizedImages.fallback = await getImage({
    src,
    width: 800,
    height: 640,
    format: 'jpeg',
    quality: 80
  });

  return optimizedImages as OptimizedImageSet;
}

export function generateImageSrcSet(images: OptimizedImageSet): {
  webpSrcSet: string;
  jpegSrcSet: string;
  fallbackSrc: string;
} {
  return {
    webpSrcSet: [
      `${images.mobile.webp.src} 400w`,
      `${images.mobile_2x.webp.src} 800w`,
      `${images.tablet.webp.src} 600w`,
      `${images.tablet_2x.webp.src} 1200w`,
      `${images.desktop.webp.src} 800w`,
      `${images.desktop_2x.webp.src} 1600w`
    ].join(', '),

    jpegSrcSet: [
      `${images.mobile.jpg.src} 400w`,
      `${images.mobile_2x.jpg.src} 800w`,
      `${images.tablet.jpg.src} 600w`,
      `${images.tablet_2x.jpg.src} 1200w`,
      `${images.desktop.jpg.src} 800w`,
      `${images.desktop_2x.jpg.src} 1600w`
    ].join(', '),

    fallbackSrc: images.fallback.src
  };
}
```

## Testing Specifications

### Component Testing

```typescript
// tests/unit/Card.test.ts
import { describe, it, expect } from 'vitest';
import { render } from '@astrojs/test-utils';
import Card from '../../src/components/Card/Card.astro';

describe('Card Component', () => {
  const mockCardProps = {
    content: {
      platform: { name: 'YouTube', icon: '📺', color: '#FF0000' },
      username: '@testuser',
      description: 'Test description',
      url: 'https://youtube.com/@testuser'
    },
    background: {
      type: 'color' as const,
      color: '#f0f0f0'
    }
  };

  it('renders with correct accessibility attributes', async () => {
    const result = await render(Card, { props: mockCardProps });
    const article = result.querySelector('article');

    expect(article).toBeTruthy();
    expect(article?.getAttribute('role')).toBe('article');
    expect(article?.getAttribute('tabindex')).toBe('0');
    expect(article?.getAttribute('aria-labelledby')).toContain('title');
  });

  it('applies correct platform data attributes', async () => {
    const result = await render(Card, { props: mockCardProps });
    const article = result.querySelector('article');

    expect(article?.getAttribute('data-platform')).toBe('youtube');
    expect(article?.getAttribute('data-card-type')).toBe('color');
  });

  it('renders color background correctly', async () => {
    const result = await render(Card, { props: mockCardProps });
    const background = result.querySelector('.card-background');

    expect(background?.getAttribute('style')).toContain('background-color: #f0f0f0');
  });
});
```

### Accessibility Testing

```typescript
// tests/integration/accessibility.test.ts
import { describe, it, expect } from 'vitest';
import { chromium } from 'playwright';
import { injectAxe, checkA11y, getViolations } from 'axe-playwright';

describe('Accessibility Tests', () => {
  it('meets WCAG AA standards', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:4321');
    await injectAxe(page);

    const violations = await getViolations(page, null, {
      tags: ['wcag2a', 'wcag2aa'],
      rules: {
        'color-contrast': { enabled: true },
        'keyboard': { enabled: true },
        'focus-order-semantics': { enabled: true }
      }
    });

    expect(violations).toHaveLength(0);
    await browser.close();
  });

  it('supports keyboard navigation', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:4321');

    // Test tab navigation
    await page.keyboard.press('Tab');
    const firstCard = await page.locator('.content-card:first-child');
    await expect(firstCard).toBeFocused();

    // Test arrow key navigation
    await page.keyboard.press('ArrowRight');
    const secondCard = await page.locator('.content-card:nth-child(2)');
    await expect(secondCard).toBeFocused();

    await browser.close();
  });
});
```

### Performance Testing

```typescript
// tests/integration/performance.test.ts
import { describe, it, expect } from 'vitest';
import { chromium } from 'playwright';

describe('Performance Tests', () => {
  it('meets Core Web Vitals targets', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:4321');

    // Measure LCP
    const lcp = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.startTime);
        }).observe({ type: 'largest-contentful-paint', buffered: true });
      });
    });

    expect(lcp).toBeLessThan(2500); // 2.5s target

    await browser.close();
  });

  it('lazy loads images correctly', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Block image requests initially
    await page.route('**/*.{jpg,jpeg,png,webp}', route => route.abort());

    await page.goto('http://localhost:4321');

    // Enable images and scroll to trigger lazy loading
    await page.unroute('**/*.{jpg,jpeg,png,webp}');

    const imageRequests: string[] = [];
    page.on('request', request => {
      if (request.url().match(/\.(jpg|jpeg|png|webp)$/)) {
        imageRequests.push(request.url());
      }
    });

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    expect(imageRequests.length).toBeGreaterThan(0);
    await browser.close();
  });
});
```

## Build Configuration

### Astro Config

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { resolve } from 'path';

export default defineConfig({
  site: 'https://your-domain.com',

  integrations: [
    tailwind({
      applyBaseStyles: false,
      configFile: './tailwind.config.mjs'
    }),
    sitemap()
  ],

  vite: {
    resolve: {
      alias: {
        '@': resolve('./src'),
        '@components': resolve('./src/components'),
        '@utils': resolve('./src/utils'),
        '@styles': resolve('./src/styles')
      }
    },

    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro'],
            interactions: ['./src/utils/interactions.ts'],
            accessibility: ['./src/utils/accessibility.ts']
          }
        }
      },

      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },

    css: {
      postcss: {
        plugins: [
          require('autoprefixer'),
          require('cssnano')({
            preset: ['advanced', {
              discardComments: { removeAll: true },
              mergeRules: true
            }]
          })
        ]
      }
    }
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },

  experimental: {
    assets: true,
    viewTransitions: true
  },

  compressHTML: true,

  build: {
    assets: '_astro',
    inlineStylesheets: 'auto'
  }
});
```

### Tailwind Configuration

```javascript
// tailwind.config.mjs
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        gray: {
          50: '#f9fafb',
          200: '#e5e7eb',
          900: '#111827',
        }
      },

      aspectRatio: {
        'card': '5 / 4',
      },

      borderRadius: {
        'card': '20px',
      },

      spacing: {
        'card-gap': 'clamp(1rem, 3vw, 1.5rem)',
      },

      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'shimmer': 'shimmer 1.5s infinite ease-in-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },

  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
  ],

  future: {
    hoverOnlyWhenSupported: true,
  },
};
```

## Deployment Configuration

### Vercel Configuration

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "functions": {},
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/_astro/(.*)",
      "headers": [
        {
          "key": "Cache-Control", 
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## Implementation Roadmap

### Phase 1: Foundation (Week 1-2)

1. **Project Setup**
   
   - Initialize Astro project with TypeScript
   - Configure Tailwind CSS with custom design system
   - Set up basic file structure

2. **Core Components**
   
   - Implement Card component with all background types
   - Create ContentGrid with responsive layout
   - Build Profile header component

3. **Content Management**
   
   - Configure TinaCMS integration
   - Set up content collections
   - Create initial content schema

### Phase 2: Enhancement (Week 3-4)

1. **Performance Optimization**
   
   - Implement lazy loading with Intersection Observer
   - Set up responsive image pipeline
   - Configure build optimization

2. **Accessibility Features**
   
   - Add keyboard navigation support
   - Implement ARIA labels and descriptions
   - Create focus management system

3. **Testing Setup**
   
   - Configure unit testing with Vitest
   - Set up accessibility testing with axe
   - Create performance testing suite

### Phase 3: Polish (Week 5-6)

1. **Advanced Features**
   
   - Add loading states and transitions
   - Implement reduced motion support
   - Create error handling and fallbacks

2. **CMS Integration**
   
   - Complete TinaCMS configuration
   - Add live preview functionality
   - Create content validation

3. **Deployment & Monitoring**
   
   - Configure production deployment
   - Set up performance monitoring
   - Create CI/CD pipeline

This technical specification provides a complete implementation roadmap that maintains the design vision while ensuring performance, accessibility, and maintainability.