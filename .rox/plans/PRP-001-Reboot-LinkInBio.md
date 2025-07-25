# Product Requirements Prompt (PRP): Reboot `linkinbio_new` Project

## 1. Goal

To get the `linkinbio_new` project back on track by establishing a clear, actionable plan, improving the file management structure, and delivering a tangible initial feature: a functional "Link in Bio" page. This will address the user's feelings of being stuck and provide a solid foundation for future development.

---

## 2. Context & Background

*   **User Story / Business Need:** The user is a creator who wants a simple, elegant "Link in Bio" page to showcase their links. They are currently frustrated with the project's lack of progress and disorganized files, which makes it difficult to move forward.

*   **Existing Codebase:** The project is a minimal Astro application using Tailwind CSS and appears to be set up with TinaCMS. The current file structure is flat and lacks organization, contributing to the user's "spiraling" experience.
    *   `[astro.config.mjs](astro.config.mjs)`: Main Astro configuration file.
    *   `[src/pages/index.astro](src/pages/index.astro)`: The main entry point of the application.
    *   `[src/components/](src/components/)`: Contains all components in a flat structure.
    *   `[tina/config.ts](tina/config.ts)`: TinaCMS configuration.

*   **External Documentation & Resources:**
    *   [Astro Documentation](https://docs.astro.build/)
    *   [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## 3. Technical Requirements & Specifications

*   **Functional Requirements:**
    *   The system must have a clear, organized, and scalable file structure.
    *   A reusable `Card` component must be created to display individual links.
    *   A main "Link in Bio" page must be created at the root of the site.
    *   The page must display a profile section and a list of links fetched from a local data source.

*   **Non-Functional Requirements:**
    *   The new file structure must be adhered to for all new code.
    *   The code should follow basic DRY (Don't Repeat Yourself) and SoC (Separation of Concerns) principles.

*   **Proposed File Structure:** To improve organization and scalability, the following directory structure will be implemented under `src/`:
    ```
    src/
    ├── components/
    │   ├── common/         # Buttons, Inputs, etc.
    │   └── modules/        # Larger, feature-specific components (e.g., Profile, LinkGrid)
    ├── layouts/
    ├── lib/              # Utility functions, API helpers
    ├── pages/
    ├── styles/
    └── data/             # Local data files, constants
    ```

---

## 4. Implementation Blueprint

1.  **Sub-task 1: Refactor File Structure:** Create the new directories as defined in the "Proposed File Structure" section and move existing files into their new, logical locations.
2.  **Sub-task 2: Create Universal Card Component:** Consolidate the existing `Card` components into a single, reusable component located at `src/components/common/Card.astro`.
3.  **Sub-task 3: Develop Profile Component:** Create a new `Profile` component in `src/components/modules/` to display user information.
4.  **Sub-task 4: Develop Link-in-Bio Page:** Implement the main page at `src/pages/index.astro`, using the new `Profile` and `Card` components to build the layout.
5.  **Sub-task 5: Populate with Static Data:** Create a `links.json` file in `src/data/` and populate the `index.astro` page with this data.

---

## 5. Validation Loop

*   **Success Criteria:**
    *   The file structure has been successfully refactored according to the plan.
    *   The `index.astro` page renders without errors.
    *   The page displays a profile section and a list of links from the static data file.
    *   The links are displayed using the new universal `Card` component.

*   **Testing Plan:**
    *   Manual verification of the rendered page in a browser is sufficient for this initial phase.

*   **Manual Verification Steps:**
    1.  Run the development server.
    2.  Open the site in a browser.
    3.  Confirm that the main page displays the profile information and a list of links as expected.