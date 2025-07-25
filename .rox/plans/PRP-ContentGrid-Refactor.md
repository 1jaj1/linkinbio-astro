# Product Requirements Prompt (PRP): Content Grid Architecture Refactor

## 1. Goal

To completely refactor the existing frontend codebase, replacing the outdated, static components with a new, fully responsive, accessible, and CMS-driven content grid architecture that aligns with the comprehensive design specifications provided in the `.rox/tasks/ROX_PLAN_LINKINBIO/` directory.

---

## 2. Context & Background

*   **User Story / Business Need:** The current link-in-bio page is a basic list of links. The user, a creative professional, needs a visually compelling and content-rich portfolio to better showcase their work, reflect their brand, and engage visitors. The new design shifts from a simple link aggregator to a dynamic, grid-based content showcase.

*   **Existing Codebase (To be removed/refactored):**
    *   `src/components/Card.astro`: An outdated card component with a rigid structure and limited styling.
    *   `src/components/LinkButton.astro`: A simple button component that doesn't align with the new design's interactive elements.
    *   `src/components/Profile.astro`: A basic profile component lacking the styling and structure of the new design.
    *   `src/components/ContentGrid/ContentGrid.astro`: A component with a duplicated `Props` interface that needs to be cleaned up.
    *   `src/layouts/Layout.astro`: A basic layout that needs to be replaced with a more structured and extensible layout system.
    *   `src/styles/global.css`: Global styles that will be replaced by a Tailwind CSS design system.

*   **Design Artifacts (Source of Truth):**
    *   `[.rox/tasks/ROX_PLAN_LINKINBIO/09-design-analysis-content-grid.md](.rox/tasks/ROX_PLAN_LINKINBIO/09-design-analysis-content-grid.md)`
    *   `[.rox/tasks/ROX_PLAN_LINKINBIO/10-responsive-breakpoint-specifications.md](.rox/tasks/ROX_PLAN_LINKINBIO/10-responsive-breakpoint-specifications.md)`
    *   `[.rox/tasks/ROX_PLAN_LINKINBIO/11-cms-content-structure.md](.rox/tasks/ROX_PLAN_LINKINBIO/11-cms-content-structure.md)`
    *   `[.rox/tasks/ROX_PLAN_LINKINBIO/12-typography-color-system.md](.rox/tasks/ROX_PLAN_LINKINBIO/12-typography-color-system.md)`
    *   `[.rox/tasks/ROX_PLAN_LINKINBIO/13-interactive-states-behaviors.md](.rox/tasks/ROX_PLAN_LINKINBIO/13-interactive-states-behaviors.md)`
    *   `[.rox/tasks/ROX_PLAN_LINKINBIO/14-accessibility-requirements.md](.rox/tasks/ROX_PLAN_LINKINBIO/14-accessibility-requirements.md)`
    *   `[.rox/tasks/ROX_PLAN_LINKINBIO/15-loading-performance-optimization.md](.rox/tasks/ROX_PLAN_LINKINBIO/15-loading-performance-optimization.md)`
    *   `[.rox/tasks/ROX_PLAN_LINKINBIO/16-technical-implementation-specifications.md](.rox/tasks/ROX_PLAN_LINKINBIO/16-technical-implementation-specifications.md)`
    *   `[.rox/tasks/ROX_PLAN_LINKINBIO/17-executive-summary.md](.rox/tasks/ROX_PLAN_LINKINBIO/17-executive-summary.md)`

---

## 3. Technical Requirements & Specifications

*   **Functional Requirements:**
    *   The application must render a responsive grid of content cards populated from a headless CMS (TinaCMS).
    *   The entire theme (colors, fonts, etc.) must be configurable through the CMS.
    *   Cards must support multiple background types: image, solid color, and gradient.
    *   All interactive elements must match the states (hover, focus, active) defined in the design specs.
*   **Non-Functional Requirements (NFRs):**
    *   **Performance:** Achieve a Google PageSpeed score of 95+. LCP < 2.5s, FID < 100ms, CLS < 0.1.
    *   **Accessibility:** Full WCAG 2.1 AA compliance.
    *   **Maintainability:** Code must be modular, well-documented, and follow the new project structure.
*   **Data Model:**
    *   The data model is defined by the TinaCMS schema in `11-cms-content-structure.md`. This includes global settings, header, information, content cards, and footer collections.

---

## 4. Implementation Blueprint

1.  **Phase 1: Cleanup & Foundation**
    *   Remove old components: `Card.astro`, `LinkButton.astro`, `Profile.astro`, and old `ContentGrid.astro`.
    *   Establish new project structure as per `16-technical-implementation-specifications.md`.
    *   Configure Tailwind CSS with the new design system from `12-typography-color-system.md`.
    *   Create new base layouts: `BaseLayout.astro` and `MainLayout.astro`.
2.  **Phase 2: Component Development**
    *   Develop the new `Profile` component system.
    *   Develop the new, modular `Card` component system (`Card.astro`, `CardBackground.astro`, `CardContent.astro`).
    *   Develop the new responsive `ContentGrid.astro` component.
3.  **Phase 3: CMS & Data Integration**
    *   Set up TinaCMS with the schema from `11-cms-content-structure.md`.
    *   Integrate components with Astro Content Collections to fetch data from the CMS.
    *   Implement dynamic rendering of cards based on CMS content.
4.  **Phase 4: Polish & Validation**
    *   Implement all accessibility features as per `14-accessibility-requirements.md`.
    *   Apply performance optimizations from `15-loading-performance-optimization.md`.
    *   Write unit, integration, and E2E tests.
    *   Validate all acceptance criteria are met.

---

## 5. Validation Loop

*   **Success Criteria:**
    *   All "old stuff" is removed from the codebase.
    *   The new component architecture is implemented as per the technical specifications.
    *   The final site perfectly matches the visual and functional requirements of the design documents.
    *   All content is editable via TinaCMS.
    *   All performance and accessibility targets are met.
*   **Testing Plan:**
    *   **Unit Tests:** For all utility functions and component logic.
    *   **Integration Tests:** To ensure components work together correctly and with the CMS.
    *   **E2E Tests (Playwright):** To verify key user flows, responsive layouts, and interactive states.
    *   **Accessibility Tests (axe-core):** To ensure no automated accessibility violations are present.
*   **Manual Verification Steps:**
    *   Verify cross-browser and cross-device rendering against the design specifications.
    *   Conduct a full accessibility audit using a screen reader and keyboard-only navigation.
    *   Confirm that all content can be edited in TinaCMS and that changes are reflected on the live site.
