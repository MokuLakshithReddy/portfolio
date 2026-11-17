# Cluely Copilot — public engineering evidence summary

> **Disclosure:** This is a project-owner-prepared summary of private CI and benchmark records. The source repository and raw reports remain private. Metrics are owner-reported and do not represent an independent security or scientific audit.

## Project scope
A desktop AI assistant combining screen perception, conversation audio, speech transcription, and personal knowledge retrieval.

## Executed evidence (owner-reported)
- Recorded CI run: 31 October 2026, Windows 11 x64.
- 89 automated tests were reported as passing.
- The summary reports 22 IPC security checks covering origin and frame-isolation validation.
- A 150-utterance audio evaluation was reported to reduce crosstalk word error rate from 18.62% to 2.14% with voice activity detection.
- A 30-question RAG evaluation was reported with 98.8% answer faithfulness.

## Limitations
- Documented verification was primarily on Windows 11; macOS and Linux parity remains unverified.
- Audio and screen capture require explicit participant consent.
- Small benchmark sets should not be interpreted as broad real-world accuracy guarantees.
- Continuous vision processing can incur substantial model-token costs.

## Reproduction status
Raw Windows CI logs, benchmark inputs, and reports are private. The figures above are disclosed as project-reported measurements, not independently reproduced results.
