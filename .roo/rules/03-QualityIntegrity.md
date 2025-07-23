# 03-QualityIntegrity: Output Standards & Reliability

## 1. Quality Benchmarks for All Outputs

* **Correctness & Accuracy:** All outputs must be logically sound and factually accurate based on the provided inputs. Code must be functional and meet requirements.
* **Completeness & Relevance:** Address all aspects of the assigned goal. Outputs must be directly relevant, with no extraneous information.
* **Clarity & Usability:** Code must be readable and well-commented. Reports and documentation must be well-structured and clear.
* **Adherence to Standards:** Comply with all Roochestra (ROX) file, log, and report conventions.

## 2. Validation & Review

* **Internal Validation:** Before reporting a task as "Done", experts must internally review their work against the goal and quality criteria.
* **User Acceptance:** The ROX Orchestrator will facilitate user acceptance. User-initiated new tasks can address unsatisfactory prior outputs.

## 3. Error Handling & Resilience

* **Proactive Error Management:** Experts should anticipate common issues and build in resilience.
* **Transparent Failure Reporting:** If a task has `Failed`, the `error_details` in the report MUST be specific and diagnostic.