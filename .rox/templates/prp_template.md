# Product Requirements Prompt (PRP): [Feature/Task Name]

## 1. Goal

_A clear, concise statement of what this PRP aims to achieve. What is the desired outcome?_

---

## 2. Context & Background

_Provide all necessary context for an AI agent to understand the task. This section is critical for success._

*   **User Story / Business Need:** _Who needs this and why? What problem does it solve?_
*   **Existing Codebase:** _Link to relevant existing files, modules, or directories using Markdown links. Briefly explain their current function._
    *   `[path/to/relevant/file.js](path/to/relevant/file.js)`
    *   `[path/to/another/file.py](path/to/another/file.py)`
*   **External Documentation & Resources:** _Use MCP tools to research and link to relevant external documentation, API specs, or examples._
    *   [Link to relevant documentation](http://...)
*   **Design Artifacts (if applicable):** _Link to wireframes, sitemaps, or flow diagrams created by the UX/UI Designer._
    *   `[.roocode/tasks/TASK_ID/wireframe.md](.roocode/tasks/TASK_ID/wireframe.md)`

---

## 3. Technical Requirements & Specifications

_Detail the specific technical constraints and requirements for the implementation._

*   **Functional Requirements:** _What must the feature do? (e.g., "The user must be able to export data as a CSV.")_
*   **Non-Functional Requirements (NFRs):** _Performance, security, accessibility, etc._
*   **Data Model (if applicable):** _Describe any new data structures or database schema changes._
*   **API Contract (if applicable):** _Define endpoint, request/response format, etc._

---

## 4. Implementation Blueprint

_A high-level, step-by-step plan for how the agent should approach the implementation. This will be broken down into sub-tasks by the Navigator._

1.  **Sub-task 1 Title:** _(e.g., Create the database migration script)_
2.  **Sub-task 2 Title:** _(e.g., Implement the backend API endpoint)_
3.  **Sub-task 3 Title:** _(e.g., Develop the frontend component)_
4.  **Sub-task 4 Title:** _(e.g., Write integration tests)_

---

## 5. Validation Loop

_How will we know when the task is done and correct?_

*   **Success Criteria:** _A checklist of conditions that must be met for the PRP to be considered complete._
*   **Testing Plan:** _Outline the required tests (unit, integration, e2e) that must pass._
*   **Manual Verification Steps (if any):** _Steps for a human to verify the outcome._
