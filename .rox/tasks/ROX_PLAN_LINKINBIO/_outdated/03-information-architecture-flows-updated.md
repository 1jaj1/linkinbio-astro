# Information Architecture & User Flows - Universal Card System

## Content Hierarchy (Revised)

### Page Structure (Grid-Based Layout)
```
1. Header Section
   ├── Profile Image (elegant, prominent)
   ├── Name/Title (large, sophisticated typography)
   └── Bio/Description (concise tagline)

2. Universal Cards Grid (Primary Content)
   ├── Card 1 (Portfolio/Website - featured size)
   ├── Card 2 (Current Project)
   ├── Card 3 (Services/Contact)
   ├── Card 4 (Instagram - social)
   ├── Card 5 (LinkedIn - social)
   ├── Card 6 (Additional content)
   └── Card N (expandable grid)

3. Footer (Minimal)
   ├── Name repetition
   ├── Professional title
   └── Copyright/year
```

## Universal Card System

### Card Types (All use same component structure)
1. **Portfolio Cards** - Rich background images, project titles
2. **Service Cards** - Service offerings, booking links
3. **Social Cards** - Platform branding, follower counts (optional)
4. **Contact Cards** - Communication methods, calendly links
5. **Content Cards** - Blog posts, articles, media features
6. **Product Cards** - Shop items, digital products

### Card Visual Hierarchy
- **Hero Cards** (1-2): Larger size, most important content
- **Primary Cards** (3-6): Standard grid size, key destinations
- **Secondary Cards** (7+): Standard size, supporting content

### Card Content Schema
```
- title: string (required)
- description: string (optional, max 100 characters)
- url: string (required)
- backgroundImage: image (optional but recommended)
- cardType: select (portfolio, social, service, contact, content, product)
- size: select (hero, standard)
- order: number (for manual sorting)
- isActive: boolean
```

## Grid Layout Specifications

### Mobile (320px - 768px)
- Single column grid
- Cards stack vertically
- Hero cards: full width
- Standard cards: full width
- Minimum card height: 120px
- Maximum card height: 200px

### Tablet (768px - 1024px)
- 2-column grid
- Hero cards: span 2 columns
- Standard cards: 1 column each
- Card aspect ratio: 1.5:1 or 2:1

### Desktop (1024px+)
- 3-column grid (maximum)
- Hero cards: span 2 columns
- Standard cards: 1 column each
- Maximum grid width: 1200px
- Card aspect ratio: 1.5:1

## Visual Hierarchy Principles

### Typography Scale
1. **Page Title (Name)**: 3rem - 4rem
2. **Page Subtitle (Bio)**: 1.2rem - 1.5rem
3. **Card Titles**: 1.1rem - 1.3rem
4. **Card Descriptions**: 0.9rem - 1rem
5. **Footer Text**: 0.8rem - 0.9rem

### Color Strategy
- **Background**: Deep, sophisticated dark tones
- **Cards**: High contrast with rich background images
- **Typography**: White/light text for legibility
- **Accents**: Minimal, purposeful color highlights

### Spacing System
- **Grid gap**: 16px mobile, 24px tablet, 32px desktop
- **Card padding**: 16px mobile, 20px tablet, 24px desktop
- **Section spacing**: 40px mobile, 60px tablet, 80px desktop

## User Journey Mapping (Revised)

### Primary User Flow: Visual Discovery
```
Visual Impact → Profile Recognition → Card Exploration → Action Selection → Destination
```

**Step 1: Visual Impact (0-1 seconds)**
- Immediate aesthetic impression
- Grid layout creates portfolio-like browsing experience
- Professional sophistication communicated instantly

**Step 2: Profile Recognition (1-3 seconds)**
- Name and title establish identity
- Bio provides context and value proposition
- Design quality signals expertise level

**Step 3: Card Exploration (3-15 seconds)**
- Visual scanning of card grid
- Rich imagery draws attention to key content
- Card hierarchy guides eye to most important content

**Step 4: Action Selection (15-30 seconds)**
- User selects based on visual appeal and relevance
- May explore multiple cards before deciding
- High-quality design builds trust for conversion

**Step 5: Destination**
- Click through to selected destination
- Strong visual memory aids return visits

## Content Strategy (Revised)

### Card Content Prioritization
1. **Hero Card 1**: Primary website/portfolio
2. **Hero Card 2**: Current featured project/service
3. **Standard Cards**: Mix of services, social, and content
   - Instagram (visual platform)
   - LinkedIn (professional network)
   - Contact/Booking
   - Key services
   - Recent work
   - Blog/articles

### Card Visual Guidelines
- **Background Images**: High-quality, consistent style
- **Typography**: Bold, legible over images
- **Branding**: Consistent visual treatment
- **Hover States**: Subtle animation/overlay effects

## TinaCMS Schema (Revised)

### Profile Schema
```
- name: string (required)
- title: string (required)
- bio: text (max 200 characters)
- profileImage: image (required)
- backgroundColor: color picker
```

### Universal Cards Schema
```
- title: string (required)
- description: string (optional, max 100 characters)
- url: string (required)
- backgroundImage: image (recommended)
- cardType: select (portfolio, social, service, contact, content, product)
- size: select (hero, standard)
- order: number (manual sorting)
- isActive: boolean
- customStyling: object (advanced users)
```

### Layout Configuration
```
- maxColumns: number (1-3, responsive breakpoints)
- gridGap: number (spacing between cards)
- cardAspectRatio: select (1:1, 3:2, 2:1, auto)
- enableAnimations: boolean
```

This revised architecture supports the sophisticated, portfolio-style aesthetic while maintaining simplicity and performance. The universal card system eliminates unnecessary complexity while providing rich visual presentation options.