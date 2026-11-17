# Secret Leak Detector — public engineering evidence summary

> **Disclosure:** This is a project-owner-prepared summary of internal CI and benchmark records. The underlying repository and raw CI reports are private. This page is not an independent security audit or third-party certification. Results below should be treated as owner-reported until independently reproduced.

## Project scope
A developer security tool combining provider-specific credential signatures, entropy analysis, TypeScript AST/context inspection, Git history analysis, and controlled remediation.

## Executed CI evidence (owner-reported)
- Recorded validation run: 3 November 2026.
- Cross-platform CI was reported successful on Windows, macOS, and Ubuntu.
- 40 Git-hook security scenarios and 17 extension manifest/package checks were reported as passing.
- A controlled 40-case held-out fixture corpus was reported with 100% precision, recall, and F1.
- A separate 1,000-file controlled gate corpus was reported with 100% F1 and 455 μs average scan latency per target file.

## Limitations
- These results come from controlled corpora and do not establish general detection accuracy across arbitrary repositories.
- Broad external repository validation and additional language AST support remain outstanding.
- The scanner validates credential structure locally; it does not establish that every discovered credential is live or revoked.

## Reproduction status
The raw CI and benchmark artifacts remain private with the source repository. This public page records the owner's reported scope and results; it does not claim that visitors can independently reproduce them from this artifact alone.
