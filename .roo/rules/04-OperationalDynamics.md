# 04-OperationalDynamics: Advanced Workflow & Task Execution

## 1. Core Workflow: The Product Requirements Prompt (PRP)

- **Central Artifact:** For any non-trivial feature, bug-fix, or research task, the **Product Requirements Prompt (PRP)** is the primary source of truth. A PRP is a comprehensive briefing document that encapsulates the goal, all necessary context, technical specifications, and validation criteria.
- **Planner's Role:** The `ROX Planner` is responsible for creating these PRPs. When tasked with a complex user goal, the Planner will perform the necessary research (leveraging MCP tools heavily), analyze the existing codebase, and produce a detailed PRP document.
- **Navigator's Role:** The `ROX Orchestrator` uses a completed PRP to break down the work into granular, trackable sub-tasks. Each sub-task is then queued for the appropriate specialist agent.

## 2. Task Granularity & Status Tracking

- **Principle of Decomposition:** Work should be broken down into the smallest logical and independently completable sub-tasks. This provides maximum visibility into project status and allows for more flexible planning.
- **Status Visibility:** The ROX Orchestrator maintains the task queue (`queue.jsonl`) and activity log (`activity.jsonl`), providing a real-time view of what work is pending, in-progress, and completed.

## 3. Mandatory MCP Tool Usage

- **Contextual Enrichment:** All agents, especially the `ROX Planner`, are required to use availableMCP (Model Context Protocol) tools to gather external information, read documentation, or access other resources needed to create a comprehensive plan and execute tasks.
- **Execution Power:** Agents should prefer using MCP tools for complex actions (e.g., interacting with a remote API, running a code linter) over implementing the logic themselves. This promotes modularity and leverages specialized, external capabilities.

## 4. System Evolution & Adaptation

- **Iterative Refinement:** The `Roochestra (ROX)` framework is designed to be iterative. Insights from task execution logs and agent reports should be used by a human supervisor to refine agent directives, PRP templates, and overall workflow.
- **Feedback Loop:** User feedback is critical. The system is designed to facilitate a tight feedback loop where user clarification and direction continuously guide the project.