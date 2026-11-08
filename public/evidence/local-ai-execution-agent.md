# Local AI Execution Agent — public engineering evidence summary

> **Disclosure:** This summary is published by the project owner from private CI and benchmark records. The source repository and raw evidence are private. The measurements are owner-reported, not an independent security certification.

## Project scope
A local-first execution framework that connects an LLM provider to bounded tools, human approval gates, isolated execution, independent verification, and persistent execution records.

## Executed CI evidence (owner-reported)
- Recorded CI run: 1 November 2026.
- 145 automated tests were reported as passing.
- The reported suite includes 143 unit/adversarial checks and 2 live Docker integration tests.
- A bug-repair workflow was reported to modify the target function, pass three pytest checks, and exit successfully.
- A destructive command test reportedly blocked `git clean -fdx` before filesystem changes occurred.

## Limitations
- Test results establish behavior only for the documented scenarios.
- Windows Job Object process limits are not equivalent to a complete filesystem sandbox.
- Cloud model providers receive prompts according to their service terms; local-only execution requires a local model.
- Dedicated VM isolation is still recommended for untrusted repository execution on Windows.

## Reproduction status
The raw CI logs, execution records, and test artifacts are not public. This page is a sanitized project-owner summary, not a downloadable proof bundle or third-party audit.
