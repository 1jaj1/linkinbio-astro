# Product Requirements Prompt (PRP): Link-in-Bio Platform

## 1. Overview & Goal

**Project:** Create a customizable, design-forward, and performant personal "Link-in-Bio" platform.

**Vision:** The goal is a beautiful, fast, and self-hosted alternative to generic services. It will serve as a personal landing page that prioritizes aesthetic quality, brand identity, and technical excellence, using `https://link-kit.com/brie-conomos/` as the primary design and UX inspiration. The final product must be a reusable template.

**Primary User:** A creative professional who values aesthetics, performance, and ownership.

**End-User:** A visitor who needs a fast, clear, and visually pleasing experience.

## 2. Core Functional Requirements

### 2.1. Page Content & Structure (Managed via TinaCMS)
-   **Profile Section:**
    -   Profile Image
    -   Name/Title
    -   Short Bio/Description
-   **Links Section:**
    -   An ordered list of link items.
    -   Each item must have a display Title and a destination URL.
    -   Must be fully manageable (add, edit, reorder, delete) via TinaCMS.
-   **Social Links Section:**
    -   A list of social media icons with links to respective profiles (e.g., Twitter, GitHub, Instagram).

### 2.2. Design, UX, and UI
-   **Inspiration:** The design must closely follow the minimalist, elegant, and professional aesthetic of `https://link-kit.com/brie-conomos/`.
    -   **Layout:** Full-screen background, centered single-column content.
    -   **Typography:** Clean, elegant, and highly readable.
    -   **Interactivity:** Link cards/buttons must have subtle and smooth hover animations/transitions.
-   **Responsiveness:** The layout must be fully responsive and optimized for mobile, tablet, and desktop screens.

## 3. Non-Functional Requirements

-   **Performance:**
    -   The site must be a Static Site Generation (SSG) build.
    -   Achieve Google PageSpeed Insights scores of **95+** across all categories (Performance, Accessibility, Best Practices, SEO).
    -   Images must be automatically optimized (e.g., using Astro's built-in asset handling for WebP conversion and resizing).
-   **SEO:**
    -   Page metadata (`<title>`, `<meta description>`) must be dynamically generated from CMS content.
    -   Open Graph tags (`og:title`, `og:description`, `og:image`) must be implemented for rich social sharing.
    -   A `sitemap.xml` and `robots.txt` must be automatically generated.
-   **Maintainability & Reusability:**
    -   The codebase must be a clean, well-commented, and reusable template.
    -   Content must be fully decoupled from the presentation layer.

## 4. Required Technology Stack

-   **Framework:** Astro
-   **Styling:** Tailwind CSS
-   **CMS:** TinaCMS
-   **Deployment & Hosting:** Vercel

## 5. Architecture & Project Structure

The project will be structured as a standard Astro project.

```
/
|-- public/
|   |-- favicon.svg
|   `-- robots.txt
|-- src/
|   |-- assets/
|   |   `-- (images, fonts, etc.)
|   |-- components/
|   |   |-- Profile.astro
|   |   |-- LinkCard.astro
|   |   `-- SocialLinks.astro
|   |-- content/
|   |   `-- (managed by TinaCMS)
|   |-- layouts/
|   |   `-- MainLayout.astro
|   |-- pages/
|   |   `-- index.astro
|   `-- env.d.ts
|-- .tina/
|   |-- config.ts
|   `-- schema.ts
|-- astro.config.mjs
|-- package.json
`-- tailwind.config.cjs
```

## 6. Integration & Deployment Strategy

-   **Astro + Tailwind CSS:** Integrated using the official `@astrojs/tailwind` adapter.
-   **Astro + TinaCMS:** Astro will fetch content from the local files managed by TinaCMS during the build process. The TinaCMS schema will be defined in `.tina/schema.ts` to match the required editable fields.
-   **Deployment to Vercel:**
    -   Connect the GitHub repository to a new Vercel project.
    -   Vercel will automatically detect the Astro project and configure the build settings.
    -   A Git-based workflow will be used: every push to the `main` branch will trigger a new CI/CD pipeline, building and deploying the site.
    -   Environment variables for TinaCMS can be managed in the Vercel project settings.

## 7. Development Phases & Task Breakdown

### Phase 1: Project Scaffolding & Setup (Est: 2 hours)
1.  Initialize a new Astro project.
2.  Install and configure Tailwind CSS.
3.  Install and configure TinaCMS.
4.  Set up the basic project structure (folders and initial files).
5.  Initial commit and push to a new GitHub repository.

### Phase 2: Core Component Development (Est: 6 hours)
1.  Develop the `Profile.astro` component.
2.  Develop the `LinkCard.astro` component with props for title, URL, and hover effects.
3.  Develop the `SocialLinks.astro` component.
4.  Create the main page layout (`index.astro`) and integrate the components.
5.  Style all components using Tailwind CSS to match the design inspiration.

### Phase 3: CMS Integration (Est: 4 hours)
1.  Define the content schema in `.tina/schema.ts` for the profile, links, and social links.
2.  Configure TinaCMS in `.tina/config.ts` to use the defined schema.
3.  Update the Astro page (`index.astro`) to fetch and render content from the JSON/MD files managed by TinaCMS.
4.  Test the live editing experience.

### Phase 4: SEO, Performance & Deployment (Est: 3 hours)
1.  Implement dynamic metadata and Open Graph tags in the main layout.
2.  Configure Astro to generate `sitemap.xml`.
3.  Create a `robots.txt` file.
4.  Connect the repository to Vercel and configure the deployment.
5.  Run performance audits and optimize as needed.

### Phase 5: Finalization & Documentation (Est: 2 hours)
1.  Clean up the codebase and add comments.
2.  Create a `README.md` with instructions on how to use the template, set up TinaCMS, and deploy to Vercel.

**Total Estimated Effort:** ~17 Hours

## 8. Validation Criteria
- All functional and non-functional requirements are met.
- The deployed site on `rchtr.net` perfectly mirrors the design inspiration's aesthetic and UX.
- Google PageSpeed scores are 95 or higher.
- Content is fully editable via TinaCMS without developer intervention.
- The project is a clean, reusable template.