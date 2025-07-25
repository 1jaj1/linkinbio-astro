# Action Plan: Overhaul Link-in-Bio Implementation

## 1. Goal
Correct all design and data integration deficiencies to align the application with the user's documented requirements and regain their confidence.

## 2. Core Issues Identified
*   **Design Discrepancy**: The frontend implementation ignores the established design system, typography, color schemes, and responsive grid layout.
*   **Data Misalignment**: The main page uses a static `links.json` file, completely ignoring the TinaCMS `page.json` data structure.
*   **Hardcoded Content**: Key content elements like the profile name, bio, and footer text are hardcoded in `src/pages/index.astro`, preventing CMS-driven updates.

## 3. Step-by-Step Corrective Plan

### **Sub-task 1: Data Integration & Dynamic Content (Developer)**
-   **Objective**: Replace all hardcoded content and static JSON with live data from TinaCMS.
-   **File to Modify**: `src/pages/index.astro`
-   **Actions**:
    1.  Remove the import of `links.json`.
    2.  Use `Tina.getCollection("page").findOne({ relativePath: "page.json" })` to fetch the page data from TinaCMS.
    3.  Replace the hardcoded `Profile` component props (`name`, `bio`, `avatarUrl`) with data from the fetched `page.header.profile` object.
    4.  Replace the hardcoded footer text and link with data from the fetched `page.footer` object.
    5.  Map over `page.information.cards` to render the content grid, passing the appropriate props to the card components.

### **Sub-task 2: Design and Layout Implementation (Designer & Developer)**
-   **Objective**: Implement the responsive content grid layout and apply the full design system.
-   **Files to Modify**:
    -   `src/layouts/Layout.astro`
    -   `src/components/modules/ContentGrid/ContentGrid.astro` (new component)
    -   `src/components/common/Card/Card.astro`
    -   `src/styles/global.css`
    -   `tailwind.config.mjs`
-   **Actions**:
    1.  **Layout**: In `Layout.astro`, set the body background color to the specified light gray (`#E5E7EB` or `--color-gray-200`).
    2.  **Tailwind Config**: Extend the Tailwind configuration in `tailwind.config.mjs` to include the fonts, colors, and responsive breakpoints defined in the design documents.
    3.  **Global CSS**: In `global.css`, define the CSS variables for colors, fonts, and typography from the design system.
    4.  **Content Grid**: Create a new `ContentGrid.astro` component that implements the responsive CSS grid layout as specified in `10-responsive-breakpoint-specifications.md`.
    5.  **Card Component**: Overhaul `Card.astro` to match the detailed anatomy, typography, color, and interactive state specifications from the design documents.
    6.  **Typography**: Apply the correct typography (font family, size, weight, line height) to all elements as specified in `12-typography-color-system.md`.

### **Sub-task 3: Final Review and Validation (Planner)**
-   **Objective**: Verify that all corrections have been implemented successfully.
-   **Actions**:
    1.  Compare the final implementation against all relevant design documents.
    2.  Test the TinaCMS integration by making changes in the CMS and verifying they appear on the live site.
    3.  Confirm the footer is displaying the correct dynamic content.
    4.  Review the site at all specified responsive breakpoints.

## 4. Sub-task Decomposition
I will create two new sub-tasks, one for the developer and one for the designer, to execute this plan.