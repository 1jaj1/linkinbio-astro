# Information Architecture & User Flows

## Content Hierarchy

### Page Structure (Single-Column, Vertical Flow)
```
1. Header/Hero Section
   ├── Profile Image (prominent)
   ├── Name/Title (large typography)
   └── Bio/Description (concise)

2. Primary Links Section
   ├── Link Card 1 (most important)
   ├── Link Card 2
   ├── Link Card 3
   └── Link Card N (expandable)

3. Social Links Section
   ├── Social Icon 1 (e.g., Instagram)
   ├── Social Icon 2 (e.g., LinkedIn)
   ├── Social Icon 3 (e.g., Twitter)
   └── Social Icon N

4. Footer (optional)
   └── Subtle branding/credits
```

## Content Priority Matrix

### Primary Content (Above the Fold)
1. **Profile Image** - Immediate personal connection
2. **Name/Title** - Clear identification and professional role
3. **Bio/Description** - Value proposition and personality
4. **Top 2-3 Link Cards** - Most important destinations

### Secondary Content (Scroll to Reveal)
5. **Additional Link Cards** - Supporting content and services
6. **Social Links** - Community engagement and discovery
7. **Footer Elements** - Administrative information

## User Journey Mapping

### Primary User Flow: Visitor Discovery
```
Landing → Profile Recognition → Value Assessment → Action Selection → External Destination
```

**Step 1: Landing (0-2 seconds)**
- User arrives from social media, QR code, or direct link
- Immediate visual impact from hero section
- Quick scan of profile image and name

**Step 2: Profile Recognition (2-5 seconds)**
- Read name and title for context
- Scan bio for relevance and value
- Form initial impression of professionalism

**Step 3: Value Assessment (5-15 seconds)**
- Review available link options
- Identify most relevant content/service
- Assess credibility through design quality

**Step 4: Action Selection (15-30 seconds)**
- Choose primary action (portfolio, contact, service)
- May explore multiple links
- Consider social media follow

**Step 5: External Destination**
- Click through to selected destination
- Potential return for additional exploration

### Secondary User Flow: Content Creator Management
```
TinaCMS Login → Content Edit → Preview → Publish → Verification
```

**Content Creator Workflow:**
1. Access TinaCMS interface
2. Edit profile information (name, bio, image)
3. Manage link cards (add, edit, reorder, delete)
4. Update social links
5. Preview changes
6. Publish updates
7. Verify live site appearance

## Information Scent & Wayfinding

### Visual Hierarchy Principles
1. **Size Hierarchy**: Profile > Primary Links > Social Links > Footer
2. **Color Contrast**: High contrast for important CTAs
3. **Spacing**: Generous white space between sections
4. **Typography Scale**: Clear distinction between heading levels

### Cognitive Load Management
- **7±2 Rule**: Limit primary links to 5-9 items for optimal cognitive processing
- **Progressive Disclosure**: Most important content first, additional options revealed through scrolling
- **Familiar Patterns**: Card-based layout follows established mental models

## Content Strategy

### Profile Section Content
- **Name**: Full professional name or brand name
- **Title/Role**: Clear professional identifier (e.g., "Creative Director", "Digital Artist")
- **Bio**: 1-2 sentences maximum, focusing on value proposition
- **Image**: High-quality, professional photo that reflects personal brand

### Links Section Content Strategy
**Priority Order:**
1. **Portfolio/Main Website** - Primary professional destination
2. **Current Project/Feature** - What's currently important
3. **Services/Booking** - Direct business conversion
4. **About/Contact** - Relationship building
5. **Blog/Content** - Thought leadership
6. **Shop/Products** - E-commerce if applicable

**Content Guidelines:**
- Titles: Action-oriented, clear purpose
- Descriptions: Brief explanation of destination value
- Visual Treatment: Consistent card design with potential custom backgrounds

### Social Links Strategy
**Platform Priority:**
1. **Professional Networks** (LinkedIn, Behance)
2. **Visual Platforms** (Instagram, Pinterest)
3. **Communication** (Twitter, contact methods)
4. **Specialized** (industry-specific platforms)

## Responsive Information Architecture

### Mobile (320px - 768px)
- Single column layout maintained
- Profile image size optimized for small screens
- Link cards stack vertically with touch-friendly sizing
- Social icons in horizontal row

### Tablet (768px - 1024px)
- Larger profile section with more breathing room
- Link cards may show in pairs for larger tablets
- Enhanced typography scale
- Social icons with labels

### Desktop (1024px+)
- Maximum content width with centered alignment
- Large, impactful typography
- Generous spacing between all elements
- Hover states for interactive elements

## Accessibility Information Architecture

### Screen Reader Flow
1. Skip to main content link
2. Profile section with proper heading hierarchy
3. Links section with descriptive text
4. Social links with platform names
5. Footer navigation

### Keyboard Navigation
- Tab order: Profile → Primary Links → Social Links → Footer
- Clear focus indicators on all interactive elements
- Skip links for efficient navigation

### Content Accessibility
- Alt text for all images
- Descriptive link text (not "click here")
- Proper heading hierarchy (h1, h2, h3)
- Sufficient color contrast ratios

## Performance Considerations

### Critical Path
1. **Above-the-fold content**: Profile section loads first
2. **Progressive enhancement**: Link cards load in priority order
3. **Lazy loading**: Images below the fold load on scroll
4. **Social icons**: Load last as supplementary content

### Content Optimization
- **Images**: WebP format with fallbacks, multiple sizes
- **Typography**: Subset fonts to reduce payload
- **CSS**: Critical CSS inlined, non-critical loaded asynchronously
- **JavaScript**: Minimal, progressive enhancement only

## TinaCMS Content Schema

### Profile Schema
```
- name: string (required)
- title: string (required)
- bio: text (max 300 characters)
- profileImage: image (required)
- accentColor: color picker (optional)
```

### Links Schema
```
- title: string (required)
- description: string (optional, max 150 characters)
- url: string (required)
- backgroundImage: image (optional)
- featured: boolean (affects visual treatment)
- order: number (for manual sorting)
```

### Social Links Schema
```
- platform: select (Instagram, LinkedIn, Twitter, etc.)
- url: string (required)
- displayLabel: string (optional override)
- isActive: boolean
```

This architecture ensures intuitive navigation, optimal conversion paths, and maintainable content management while supporting the sophisticated aesthetic requirements.