# Autonomous AI Coding Orchestrator — public engineering evidence summary

> **Disclosure:** This page is a sanitized owner-published summary of private CI and benchmark records. The source code and raw reports remain private. Deterministic test results and live-model results are deliberately reported separately.

## Project scope
An experimental system connecting an LLM planner, coding agent, isolated Git worktree, and independent verifier in a controlled repair loop.

## Executed evidence (owner-reported)
- Deterministic verification suite: 31 of 31 reported passing.
- The deterministic regression harness reportedly caught all 6 baseline false-completion claims.
- A live-model benchmark dated 4 November 2026 passed 1 of 4 scenarios; three scenarios failed hidden acceptance tests.
- The deterministic simulation reported 18 of 19 verified task completions with no false-positive completion declarations.

## Limitations
- Deterministic harness success does not imply reliable performance on unfamiliar real-world tasks.
- Live-model reliability remains a known limitation (1/4 in the recorded run).
- Git worktrees isolate repository state but are not a complete sandbox for untrusted command execution.
- Complex multi-file tasks can exceed repair-loop timeout limits.

## Reproduction status
The underlying CI runs and benchmark reports are private. This public summary makes the reported scope and known failures visible without disclosing proprietary source.
