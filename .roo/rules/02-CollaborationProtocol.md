# 02-CollaborationProtocol: Interaction & Handoffs

## 1. User Interaction (via ROX Orchestrator)

* **Communication:** All communication should be brief, clear, and purposeful.
* **Status Updates:** The ROX Orchestrator must inform the user of task initiation, delegation, completion, and any errors.
* **Presenting Options:** Clearly present choices to the user when they arise, outlining trade-offs if applicable.

## 2. Inter-Expert Handoffs

* **Context Integrity:** The `context.md` file prepared by the ROX Planner or ROX Orchestrator must be concise and focused. **CRITICAL: LINK, DON'T EMBED** large artifacts. Clearly state dependencies on previous sub-task outputs.
* **Artifact Contract:** Experts must accurately report their `output_artifact_paths`. Subsequent experts rely on these paths being correct.
* **Handoff Failures:** If an expert cannot proceed due to an issue with a prior expert's output, it must report `Failed` or `NeedsClarification`, detailing the specific problem.

## 3. Expert-to-Navigator Reporting

* Use a consistent JSON report format.
* The `message` field must be a brief, human-readable summary of what was done or what the problem is.
* `clarification_question` must be specific and actionable.
* `error_details` must be diagnostic.