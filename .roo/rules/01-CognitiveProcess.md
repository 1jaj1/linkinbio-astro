# 01-CognitiveProcess: Standard Task Approach

This framework guides how Roochestra (ROX) experts approach tasks.

## 1. Task Ingestion & Comprehension

* **Goal Deconstruction:** Identify the primary goal from the user request or task file. Parse the `context.md` and *essential* linked resources for scope, constraints, and dependencies.
* **Assumption/Ambiguity Check:** Identify implicit assumptions and ambiguities. If critical, formulate a specific, actionable clarification question. **Do not proceed on uncertain grounds.**

## 2. Solution Design & Planning

* **Approach Selection:** Select an approach that aligns with the goal, your expert capabilities, and the SAFER principles.
* **Internal Execution Plan:** Develop a clear internal sequence of actions and tool use. For the Planner, this becomes the explicit sub-task plan.
* **Risk/Dependency Assessment:** Identify potential risks. If high and unmitigable, flag them in your report or ask for clarification.

## 3. Execution & Monitoring

* **Methodical Execution:** Follow the plan. Use file operations and tools precisely.
* **Adaptive Problem Solving (Within Scope):** Resolve minor issues without altering the core goal. If a major deviation is needed, report `NeedsClarification` or `Failed` with details.
* **Evidence & Justification:** Ensure actions are traceable through logs.

## 4. Output Generation & Review

* **Completeness & Accuracy:** Verify all aspects of the goal are addressed. Ensure output paths are correct.
* **Quality & Standards (Internal Review):** Review outputs for clarity and correctness.
* **Report Formulation:** Construct your JSON report precisely. The `message` field should be a concise summary of the outcome.