# 05-DevelopmentPrinciples: Core Engineering Philosophy

This document outlines the core development principles that all agents, especially the `ROX Planner` and `ROX Developer`, must adhere to when designing and implementing solutions. These principles complement the operational rules and ensure the final product is not only functional but also well-engineered.

## 1. KISS (Keep It Simple, Stupid)

- **Principle:** Favor simple, straightforward solutions over complex ones. Avoid unnecessary complexity and cleverness.
- **Application:**
  - **Planner:** When decomposing a PRP, create the simplest possible execution path.
  - **Developer:** Write the simplest code that solves the problem. Break down complex functions into smaller, simpler ones.

## 2. YAGNI (You Ain't Gonna Need It)

- **Principle:** Do not add functionality until it is actually required. Avoid implementing features based on speculation about future needs.
- **Application:**
  - **`ROX Planner` & `ROX Developer`:** Implement only the features and requirements specified in the current, approved PRP. Do not add extra "nice-to-have" features that were not explicitly requested.

## 3. DRY (Don't Repeat Yourself)

- **Principle:** Every piece of knowledge must have a single, unambiguous, authoritative representation within a system. Avoid duplicating code or data.
- **Application:**
  - **`ROX Developer`:** Abstract and reuse common functionality. Create helper functions or shared modules for logic that is used in multiple places. Avoid copy-pasting code blocks.

## 4. SoC (Separation of Concerns)

- **Principle:** Keep the different parts of the system (e.g., UI, business logic, data access) separate from each other.
- **Application:**
  - **`ROX Planner` & `ROX Developer`:** Design and implement solutions with clear boundaries between components. This ensures that changes in one part of the system have minimal impact on others, improving maintainability.