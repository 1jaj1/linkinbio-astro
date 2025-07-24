# CMS Content Structure: TinaCMS Schema Definition

## Overview

This document defines the complete content structure for TinaCMS, ensuring all text, fonts, colors, tags, and categories are fully editable. The schema supports the content grid layout while maintaining design consistency.

## Content Architecture

### 1. Global Settings (Site Configuration)

```typescript
// .tina/schema.ts - Global Settings Collection
{
  name: "globalSettings",
  label: "Global Settings",
  path: "content/settings",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    // Typography Settings with Google Fonts
    {
      type: "object",
      name: "typography",
      label: "Typography & Google Fonts",
      fields: [
        {
          type: "string",
          name: "googleFontApi",
          label: "Google Fonts to Load",
          description: "Enter Google Font names separated by commas (e.g., 'Inter:400,500,700', 'Bebas Neue:400')",
          ui: {
            component: "textarea"
          }
        },
        {
          type: "string",
          name: "primaryFont",
          label: "Primary Font Family",
          description: "Font for body text. Use exact Google Font name or fallback",
          options: [
            "Inter",
            "Roboto",
            "Open Sans",
            "Lato",
            "Montserrat",
            "Source Sans Pro",
            "Raleway",
            "Ubuntu",
            "Nunito",
            "Poppins",
            "Arial",
            "Helvetica Neue",
            "Georgia",
            "Times New Roman"
          ]
        },
        {
          type: "string",
          name: "customPrimaryFont",
          label: "Custom Primary Font",
          description: "Enter any Google Font name if not listed above"
        },
        {
          type: "string",
          name: "headingFont",
          label: "Heading Font Family",
          description: "Font for headings and titles",
          options: [
            "Inter",
            "Bebas Neue",
            "Oswald",
            "Montserrat",
            "Playfair Display",
            "Merriweather",
            "Lora",
            "Source Serif Pro",
            "Crimson Text",
            "Space Grotesk",
            "JetBrains Mono",
            "Fira Code",
            "Arial",
            "Helvetica Neue",
            "Georgia"
          ]
        },
        {
          type: "string",
          name: "customHeadingFont",
          label: "Custom Heading Font",
          description: "Enter any Google Font name if not listed above"
        },
        {
          type: "object",
          name: "fontWeights",
          label: "Font Weights",
          fields: [
            {
              type: "string",
              name: "light",
              label: "Light Weight",
              options: ["100", "200", "300"],
              description: "For subtle text elements"
            },
            {
              type: "string",
              name: "regular",
              label: "Regular Weight",
              options: ["400", "500"],
              description: "For body text"
            },
            {
              type: "string",
              name: "medium",
              label: "Medium Weight",
              options: ["500", "600"],
              description: "For emphasis"
            },
            {
              type: "string",
              name: "bold",
              label: "Bold Weight",
              options: ["600", "700", "800"],
              description: "For headings"
            }
          ]
        }
      ]
    },
    
    // Color System
    {
      type: "object",
      name: "colors",
      label: "Color System",
      fields: [
        {
          type: "string",
          name: "backgroundColor",
          label: "Background Color",
          ui: {
            component: "color"
          }
        },
        {
          type: "string",
          name: "primaryText",
          label: "Primary Text Color",
          ui: {
            component: "color"
          }
        },
        {
          type: "string",
          name: "secondaryText",
          label: "Secondary Text Color",
          ui: {
            component: "color"
          }
        },
        {
          type: "string",
          name: "accentColor",
          label: "Accent Color",
          ui: {
            component: "color"
          }
        },
        {
          type: "string",
          name: "cardOverlayText",
          label: "Card Text Color",
          ui: {
            component: "color"
          }
        }
      ]
    }
  ]
}
```

### 2. Header Section

```typescript
// Main content schema - Header section
{
  type: "object",
  name: "header",
  label: "Header Section",
  fields: [
    {
      type: "string",
      name: "name",
      label: "Name/Title",
      required: true,
      description: "Main heading (e.g., 'DANIEL RICHTER')"
    },
    {
      type: "object",
      name: "styling",
      label: "Header Styling",
      fields: [
        {
          type: "number",
          name: "fontSize",
          label: "Font Size (rem)",
          ui: {
            parse: (val) => Number(val),
            component: "number"
          }
        },
        {
          type: "string",
          name: "textColor",
          label: "Text Color",
          ui: {
            component: "color"
          }
        },
        {
          type: "string",
          name: "backgroundColor",
          label: "Background Color",
          ui: {
            component: "color"
          }
        }
      ]
    }
  ]
}
```

### 3. Information Section

```typescript
{
  type: "object",
  name: "information",
  label: "Information Section",
  fields: [
    {
      type: "string",
      name: "label",
      label: "Section Label",
      description: "Label text (e.g., 'Information')"
    },
    {
      type: "rich-text",
      name: "content",
      label: "Bio Content",
      description: "Main biographical or descriptive text"
    },
    {
      type: "object",
      name: "styling",
      label: "Information Styling",
      fields: [
        {
          type: "string",
          name: "labelColor",
          label: "Label Color",
          ui: {
            component: "color"
          }
        },
        {
          type: "string",
          name: "contentColor",
          label: "Content Text Color",
          ui: {
            component: "color"
          }
        },
        {
          type: "number",
          name: "fontSize",
          label: "Content Font Size (rem)",
          ui: {
            component: "number"
          }
        }
      ]
    }
  ]
}
```

### 4. Content Cards Collection

```typescript
{
  name: "contentCards",
  label: "Content Cards",
  path: "content/cards",
  format: "md",
  fields: [
    // Card Metadata
    {
      type: "string",
      name: "title",
      label: "Card Title",
      required: true,
      isTitle: true
    },
    {
      type: "datetime",
      name: "createdAt",
      label: "Created Date"
    },
    {
      type: "boolean",
      name: "published",
      label: "Published",
      description: "Show this card on the site"
    },
    {
      type: "number",
      name: "order",
      label: "Display Order",
      description: "Lower numbers appear first"
    },
    
    // Platform Information
    {
      type: "object",
      name: "platform",
      label: "Platform Details",
      fields: [
        {
          type: "string",
          name: "name",
          label: "Platform Name",
          options: [
            "YOUTUBE",
            "INSTAGRAM",
            "TIKTOK",
            "TWITTER",
            "LINKEDIN",
            "GITHUB",
            "BEHANCE",
            "DRIBBBLE",
            "CUSTOM"
          ]
        },
        {
          type: "string",
          name: "customName",
          label: "Custom Platform Name",
          description: "Use if 'CUSTOM' is selected above"
        },
        {
          type: "object",
          name: "styling",
          label: "Platform Tag Styling",
          fields: [
            {
              type: "string",
              name: "backgroundColor",
              label: "Background Color",
              ui: {
                component: "color"
              }
            },
            {
              type: "string",
              name: "textColor",
              label: "Text Color",
              ui: {
                component: "color"
              }
            }
          ]
        }
      ]
    },
    
    // Visual Content
    {
      type: "object",
      name: "visual",
      label: "Visual Content",
      fields: [
        {
          type: "string",
          name: "backgroundType",
          label: "Background Type",
          options: [
            { label: "Image", value: "image" },
            { label: "Solid Color", value: "color" },
            { label: "Gradient", value: "gradient" }
          ],
          description: "Choose between image, solid color, or gradient background"
        },
        
        // Image Background Options
        {
          type: "image",
          name: "backgroundImage",
          label: "Background Image",
          description: "Main visual for the card",
          ui: {
            condition: {
              field: "backgroundType",
              value: "image"
            }
          }
        },
        {
          type: "string",
          name: "imageAlt",
          label: "Image Alt Text",
          description: "Accessibility description for background image",
          ui: {
            condition: {
              field: "backgroundType",
              value: "image"
            }
          }
        },
        {
          type: "object",
          name: "imageOverlay",
          label: "Image Overlay",
          ui: {
            condition: {
              field: "backgroundType",
              value: "image"
            }
          },
          fields: [
            {
              type: "string",
              name: "overlayColor",
              label: "Overlay Color",
              ui: {
                component: "color"
              }
            },
            {
              type: "number",
              name: "overlayOpacity",
              label: "Overlay Opacity (0-1)",
              ui: {
                component: "number"
              }
            }
          ]
        },
        
        // Solid Color Background Options
        {
          type: "string",
          name: "backgroundColor",
          label: "Background Color",
          ui: {
            component: "color",
            condition: {
              field: "backgroundType",
              value: "color"
            }
          }
        },
        
        // Gradient Background Options
        {
          type: "object",
          name: "gradient",
          label: "Gradient Settings",
          ui: {
            condition: {
              field: "backgroundType",
              value: "gradient"
            }
          },
          fields: [
            {
              type: "string",
              name: "direction",
              label: "Gradient Direction",
              options: [
                "to right",
                "to left",
                "to bottom",
                "to top",
                "to bottom right",
                "to bottom left",
                "45deg",
                "135deg"
              ]
            },
            {
              type: "string",
              name: "startColor",
              label: "Start Color",
              ui: {
                component: "color"
              }
            },
            {
              type: "string",
              name: "endColor",
              label: "End Color",
              ui: {
                component: "color"
              }
            },
            {
              type: "string",
              name: "middleColor",
              label: "Middle Color (Optional)",
              ui: {
                component: "color"
              }
            }
          ]
        },
        
        // Text Color Adjustment for all background types
        {
          type: "object",
          name: "textStyling",
          label: "Text Color Override",
          description: "Override text colors for optimal contrast",
          fields: [
            {
              type: "boolean",
              name: "useCustomColors",
              label: "Use Custom Text Colors",
              description: "Override default text colors for this card"
            },
            {
              type: "string",
              name: "primaryTextColor",
              label: "Primary Text Color",
              ui: {
                component: "color",
                condition: {
                  field: "useCustomColors",
                  value: true
                }
              }
            },
            {
              type: "string",
              name: "secondaryTextColor",
              label: "Secondary Text Color",
              ui: {
                component: "color",
                condition: {
                  field: "useCustomColors",
                  value: true
                }
              }
            }
          ]
        }
      ]
    },
    
    // Content Information
    {
      type: "object",
      name: "content",
      label: "Content Details",
      fields: [
        {
          type: "string",
          name: "username",
          label: "Username/Handle",
          description: "e.g., '@testingthetest'"
        },
        {
          type: "rich-text",
          name: "description",
          label: "Content Description",
          description: "Text overlay describing the content"
        },
        {
          type: "string",
          name: "url",
          label: "Destination URL",
          required: true
        }
      ]
    },
    
    // Action Button
    {
      type: "object",
      name: "action",
      label: "Action Button",
      fields: [
        {
          type: "string",
          name: "text",
          label: "Button Text",
          description: "e.g., 'SEE MORE'"
        },
        {
          type: "object",
          name: "styling",
          label: "Button Styling",
          fields: [
            {
              type: "string",
              name: "backgroundColor",
              label: "Background Color",
              ui: {
                component: "color"
              }
            },
            {
              type: "string",
              name: "textColor",
              label: "Text Color",
              ui: {
                component: "color"
              }
            },
            {
              type: "string",
              name: "hoverBackgroundColor",
              label: "Hover Background Color",
              ui: {
                component: "color"
              }
            }
          ]
        }
      ]
    },
    
    // Categories & Tags
    {
      type: "object",
      name: "taxonomy",
      label: "Categories & Tags",
      fields: [
        {
          type: "string",
          name: "category",
          label: "Content Category",
          options: [
            "Featured",
            "Recent",
            "Tutorial",
            "Showcase",
            "Update",
            "Behind the Scenes"
          ]
        },
        {
          type: "string",
          name: "tags",
          label: "Tags",
          list: true,
          description: "Add multiple tags for content organization"
        }
      ]
    }
  ]
}
```

### 5. Footer Section

```typescript
{
  type: "object",
  name: "footer",
  label: "Footer Section",
  fields: [
    {
      type: "string",
      name: "attribution",
      label: "Attribution Text",
      description: "e.g., 'made with ❤️ by urt.media'"
    },
    {
      type: "string",
      name: "attributionUrl",
      label: "Attribution Link",
      description: "Link for the attribution text"
    },
    {
      type: "object",
      name: "styling",
      label: "Footer Styling",
      fields: [
        {
          type: "string",
          name: "textColor",
          label: "Text Color",
          ui: {
            component: "color"
          }
        },
        {
          type: "number",
          name: "fontSize",
          label: "Font Size (rem)",
          ui: {
            component: "number"
          }
        }
      ]
    }
  ]
}
```

## Complete TinaCMS Configuration Example

```typescript
// .tina/config.ts
import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  
  schema: {
    collections: [
      // Main page content
      {
        name: "page",
        label: "Page Content",
        path: "content/page",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          // Header section fields (defined above)
          // Information section fields (defined above)
          // Footer section fields (defined above)
          {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Page Title"
              },
              {
                type: "string",
                name: "description",
                label: "Meta Description"
              },
              {
                type: "image",
                name: "ogImage",
                label: "Social Share Image"
              }
            ]
          }
        ]
      },
      
      // Content cards collection (defined above)
      // Global settings collection (defined above)
    ],
  },
});
```

## Usage Guidelines

### Content Management Workflow

1. **Global Settings**: Configure typography and color system once
2. **Page Content**: Edit header, information, and footer sections
3. **Content Cards**: Add, edit, and reorder individual content items
4. **Visual Customization**: Each element has granular styling controls
5. **SEO Management**: Control meta tags and social sharing

### Design System Integration

- **Color Consistency**: Global color palette with component-level overrides
- **Typography Scale**: Responsive font sizing with rem units
- **Visual Hierarchy**: Structured content with clear relationships
- **Brand Flexibility**: Full customization while maintaining design principles

### Content Validation

- **Required Fields**: Critical content like URLs and titles are required
- **Image Optimization**: Automatic WebP conversion and responsive sizing
- **Accessibility**: Alt text requirements and color contrast considerations
- **Performance**: Lazy loading and progressive enhancement support

This schema provides complete editorial control while maintaining the sophisticated visual design and technical performance requirements.

## Google Fonts Integration Implementation

### Font Loading Strategy

```typescript
// utils/googleFonts.ts
export function generateGoogleFontsUrl(fontString: string): string {
  if (!fontString) return '';
  
  // Parse font string like "Inter:400,500,700,Bebas Neue:400"
  const fonts = fontString.split(',').map(font => font.trim());
  const encodedFonts = fonts.map(font => 
    font.replace(/\s+/g, '+')
  ).join('&family=');
  
  return `https://fonts.googleapis.com/css2?family=${encodedFonts}&display=swap`;
}

export function generateFontFamily(fontName: string, customFont?: string): string {
  const selectedFont = customFont || fontName;
  
  // Add appropriate fallbacks based on font type
  const sansSerifFallback = ', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  const serifFallback = ', Georgia, "Times New Roman", serif';
  const monospaceFallback = ', "SF Mono", Monaco, "Cascadia Code", monospace';
  
  // Detect font type and add fallbacks
  if (selectedFont.includes('Mono') || selectedFont.includes('Code')) {
    return `"${selectedFont}"${monospaceFallback}`;
  } else if (selectedFont.includes('Serif') || ['Playfair Display', 'Merriweather', 'Lora', 'Crimson Text'].includes(selectedFont)) {
    return `"${selectedFont}"${serifFallback}`;
  } else {
    return `"${selectedFont}"${sansSerifFallback}`;
  }
}
```

### Layout Integration

```astro
---
// src/layouts/Layout.astro
import { generateGoogleFontsUrl, generateFontFamily } from '../utils/googleFonts';

// Get settings from TinaCMS
const settings = await getGlobalSettings();
const typography = settings.typography;

const googleFontsUrl = generateGoogleFontsUrl(typography.googleFontApi);
const primaryFontFamily = generateFontFamily(typography.primaryFont, typography.customPrimaryFont);
const headingFontFamily = generateFontFamily(typography.headingFont, typography.customHeadingFont);
---

<html lang="en">
  <head>
    <!-- Google Fonts -->
    {googleFontsUrl && (
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href={googleFontsUrl} rel="stylesheet">
    )}
    
    <!-- CSS Custom Properties -->
    <style is:inline define:vars={{
      primaryFont: primaryFontFamily,
      headingFont: headingFontFamily,
      fontWeightLight: typography.fontWeights.light,
      fontWeightRegular: typography.fontWeights.regular,
      fontWeightMedium: typography.fontWeights.medium,
      fontWeightBold: typography.fontWeights.bold,
    }}>
      :root {
        --font-primary: var(--primaryFont);
        --font-heading: var(--headingFont);
        --font-weight-light: var(--fontWeightLight);
        --font-weight-regular: var(--fontWeightRegular);
        --font-weight-medium: var(--fontWeightMedium);
        --font-weight-bold: var(--fontWeightBold);
      }
      
      body {
        font-family: var(--font-primary);
        font-weight: var(--font-weight-regular);
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-heading);
        font-weight: var(--font-weight-bold);
      }
    </style>
  </head>
  <body>
    <slot />
  </body>
</html>
```

### Performance Optimization

- **Font Display**: Uses `display=swap` for better loading performance
- **Preconnect**: Establishes early connection to Google Fonts CDN
- **CSS Variables**: Dynamic font application without style recalculation
- **Fallback Fonts**: Ensures text remains visible during font load

### CMS Usage Examples

**Basic Setup:**
```
Google Fonts to Load: Inter:400,500,700
Primary Font: Inter
Heading Font: Inter
```

**Creative Setup:**
```
Google Fonts to Load: Bebas Neue:400, Inter:400,500,700, JetBrains Mono:400,500
Primary Font: Inter
Custom Heading Font: Bebas Neue
```

**Designer Setup:**
```
Google Fonts to Load: Playfair Display:400,700, Source Sans Pro:300,400,600
Primary Font: Source Sans Pro
Custom Heading Font: Playfair Display
```