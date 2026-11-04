export interface CaseStudyLink {
  label: string
  url: string
  type?: 'primary' | 'github' | 'ci' | 'docs' | 'external'
}

export interface WorkflowStep {
  step: string
  title: string
  description: string
}

export interface ImplementationRow {
  area: string
  implementation: string
}

export interface MetricCard {
  value: string
  label: string
  sublabel?: string
}

export interface TestRow {
  test: string
  result: string
}

export interface CaseStudy {
  slug: string
  number: string
  title: string
  subtitle: string
  category: string
  badgeStatus: string
  sourceVisibility: 'Private Source' | 'Public Repository' | 'Published Tool'
  technologies: string[]
  links: CaseStudyLink[]
  problemStatement: {
    overview: string
    challenges: string[]
    corePrinciple: string
  }
  workflow: WorkflowStep[]
  architectureDiagram: string
  architectureDetails: {
    title: string
    description: string
  }[]
  implementationTable: ImplementationRow[]
  evidence: {
    ciDate: string
    ciStatus: string
    metrics: MetricCard[]
    testTable?: TestRow[]
    executedEvidence: string[]
    projectReportedResults: string[]
    outstandingValidation: string[]
    evidenceLinks: CaseStudyLink[]
  }
  limitations: string[]
  projectOutcome: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'secret-leak-detector',
    number: '01',
    title: 'Secret Leak Detector',
    subtitle: 'Context-aware credential detection, Git protection and automated remediation',
    category: 'Security Engineering',
    badgeStatus: 'Published Developer Tool',
    sourceVisibility: 'Private Source',
    technologies: ['TypeScript', 'Node.js', 'VS Code API', 'AST Analysis', 'Git Hooks', 'Security Engineering'],
    links: [
      { label: 'Open VSX Registry', url: 'https://open-vsx.org/extension/MokuLakshithReddy/secret-leak-detector', type: 'primary' },
      { label: 'VS Code Marketplace', url: 'https://marketplace.visualstudio.com/items?itemName=MokuLakshithReddy.secret-leak-detector', type: 'external' },
      { label: 'Latest CI Run (Run #41669747926)', url: 'https://github.com/MokuLakshithReddy/Secret_Leak_Detector/actions/runs/41669747926', type: 'ci' }
    ],
    problemStatement: {
      overview: 'Developers frequently handle API keys, access tokens, database credentials, and private cryptographic keys during modern software development. These credentials easily slip into source files, configuration manifests, or Git commits.',
      challenges: [
        'Traditional regex scanners produce high false-positive rates on benign high-entropy hashes and UUIDs.',
        'Obfuscated values, split string concatenations, and environment fallback defaults escape basic matching.',
        'Credentials deleted from the active working tree often remain indefinitely accessible in Git commit ancestry.'
      ],
      corePrinciple: 'Detecting a potential secret is not enough. Developers need to understand its exposure, determine its severity, remediate it safely, and verify that the exposure has actually been addressed.'
    },
    workflow: [
      { step: '01', title: 'DETECT', description: 'Identify suspicious credentials using provider signatures, Shannon entropy, TypeScript AST, and lexical context.' },
      { step: '02', title: 'PROVE', description: 'Generate explainable evidence, confidence scores, and masked findings to avoid secondary exposure.' },
      { step: '03', title: 'TRACE', description: 'Inspect Git history, commit ancestry, branch reachability, and exact exposure duration.' },
      { step: '04', title: 'FIX', description: 'Preview remediation patches, migrate credentials into environment variables, and update .gitignore safely.' },
      { step: '05', title: 'RESCAN', description: 'Re-scan affected files and verify whether historical exposure still exists across all reachable branches.' }
    ],
    architectureDiagram: `+-------------------------------------------------------------+
|                     Developer Workspace                     |
|            VS Code Extension  |  Standalone CLI             |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                       Scanner Engine                        |
|        Provider Signatures | Shannon Entropy | AST / Lexical |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                       Evidence Engine                       |
|           Confidence Scoring | Masked Match Provenance      |
+------------------------------+------------------------------+
                               |
        +----------------------+----------------------+
        |                                             |
        v                                             v
+-----------------------------+ +-----------------------------+
|     Git History Engine      | |     Remediation Engine      |
| Ancestry / Reachability     | | Patch Preview & .env Export |
+-----------------------------+ +-----------------------------+
        |                                             |
        +----------------------+----------------------+
                               |
                               v
+-------------------------------------------------------------+
|             Verification & Output Subsystems                |
|      Fail-Closed Git Hooks  |  SARIF Reports  |  IDE UI     |
+-------------------------------------------------------------+`,
    architectureDetails: [
      { title: 'Detection Engine', description: 'Combines provider-specific credential patterns, Shannon entropy calculation, TypeScript compiler AST analysis, and lexical context analysis to catch split strings and fallback defaults.' },
      { title: 'Exposure & Provenance Analysis', description: 'Enriches findings with commit ancestry, identifying exact introduction points, branch reachability, and historical blast radius.' },
      { title: 'Controlled Remediation', description: 'Generates non-destructive patch previews, automates .env variable creation, updates ignore lists, and performs rescan verification.' },
      { title: 'Developer Integration', description: 'Available through a published VS Code extension, standalone CLI, fail-closed Git pre-commit hooks, and SARIF output for CI/CD pipelines.' }
    ],
    implementationTable: [
      { area: 'Credential Detection', implementation: 'Provider signatures and structural checksum validators' },
      { area: 'Context Analysis', implementation: 'TypeScript compiler AST and lexical token stream analysis' },
      { area: 'Entropy Analysis', implementation: 'Shannon entropy and character-set distribution scoring' },
      { area: 'Risk Assessment', implementation: 'Confidence, credential class, storage context, and exposure reach' },
      { area: 'Git Analysis', implementation: 'Commit history DAG traversal, ancestry, and branch reachability' },
      { area: 'Remediation', implementation: 'Controlled patch preview and environment migration' },
      { area: 'Protection Boundary', implementation: 'Fail-closed pre-commit hook preventing dirty commits' },
      { area: 'Integration Targets', implementation: 'VS Code Extension, Standalone Node CLI, and SARIF standard' }
    ],
    evidence: {
      ciDate: '3 November 2026',
      ciStatus: 'Passed (Windows, macOS, Ubuntu)',
      metrics: [
        { value: '100%', label: 'Regression-Gate F1', sublabel: 'Controlled gate corpus' },
        { value: '0%', label: 'False Positive Rate', sublabel: 'Controlled gate corpus' },
        { value: '100%', label: 'Adversarial Detection', sublabel: 'Controlled gate corpus' },
        { value: '455 μs', label: 'Average Latency', sublabel: 'Per target file scan' }
      ],
      testTable: [
        { test: 'Git-hook security scenarios', result: '40 passed, 0 failed' },
        { test: 'Extension manifest checks', result: '17 passed, 0 failed' },
        { test: 'Held-out fixture corpus', result: '40 cases, 100% precision, recall & F1' },
        { test: 'Cross-platform matrix jobs', result: 'Windows, macOS & Ubuntu passed' },
        { test: 'Small-sample benchmark (25 cases)', result: '94.4% precision, 100% recall, 97.1% F1' }
      ],
      executedEvidence: [
        'Actual GitHub Actions CI run (#41669747926) succeeded across Windows, macOS, and Ubuntu runners.',
        '40 fail-closed Git-hook security scenario tests passed with 0 failures.',
        '17 VS Code extension packaging and manifest validation tests passed.'
      ],
      projectReportedResults: [
        '1,000-file controlled gate corpus achieved 100% F1, 0% false positives, and 455 μs average latency per file.',
        'Held-out fixture evaluation: 40 cases with 100% reported precision and recall.'
      ],
      outstandingValidation: [
        'Validation against large external public/private open-source repositories beyond controlled corpora.',
        'Multi-language AST support for languages outside TypeScript/JavaScript.'
      ],
      evidenceLinks: [
        { label: 'GitHub Actions Run #41669747926', url: 'https://github.com/MokuLakshithReddy/Secret_Leak_Detector/actions/runs/41669747926', type: 'ci' },
        { label: 'Validation Methodology Specification', url: 'https://github.com/MokuLakshithReddy/Secret_Leak_Detector/blob/main/docs/VALIDATION.md', type: 'docs' },
        { label: 'Architecture Documentation', url: 'https://github.com/MokuLakshithReddy/Secret_Leak_Detector/blob/main/docs/architecture.md', type: 'docs' }
      ]
    },
    limitations: [
      'Validates credential structure locally; does not actively ping provider APIs to establish whether discovered keys are live or revoked.',
      'Generic tokens without recognizable provider signatures remain challenging when contextual clues are scarce.',
      'Historical documentation requires test-count reconciliation between the README and newer evaluation reports.'
    ],
    projectOutcome: 'A published, production-grade developer security extension combining multi-layer detection, explainable findings, Git history investigation, automated remediation, and commit-level protection.'
  },
  {
    slug: 'local-ai-execution-agent',
    number: '02',
    title: 'Local AI Execution Agent',
    subtitle: 'Turning LLM instructions into bounded, independently verified execution',
    category: 'AI Agent Engineering',
    badgeStatus: 'Private Source',
    sourceVisibility: 'Private Source',
    technologies: ['Python', 'FastAPI', 'React', 'Docker', 'SQLite', 'Ollama', 'Gemini', 'OpenAI', 'Anthropic'],
    links: [
      { label: 'Latest CI Run (Run #41288154213)', url: 'https://github.com/MokuLakshithReddy/local-ai-execution-agent/actions/runs/41288154213', type: 'ci' },
      { label: 'Verification Report (EVIDENCE.md)', url: 'https://github.com/MokuLakshithReddy/local-ai-execution-agent/blob/main/EVIDENCE.md', type: 'docs' },
      { label: 'End-to-End Demonstrations', url: 'https://github.com/MokuLakshithReddy/local-ai-execution-agent/blob/main/DEMO_RUN.md', type: 'docs' }
    ],
    problemStatement: {
      overview: 'Large Language Models frequently produce plausible responses claiming a development task is complete without modifying the correct files, executing unit tests, or verifying correctness. Giving an autonomous agent unrestricted shell access creates critical risks including path traversal, destructive filesystem operations, credential leakage, and untrusted network access.',
      challenges: [
        'Hallucinated completions where the agent declares success despite failing underlying tests.',
        'Unbounded execution that can delete working directory files or execute unauthorized destructive commands.',
        'Lack of cryptographic provenance connecting the user prompt to machine-readable execution proof.'
      ],
      corePrinciple: 'AI-generated actions must be bounded, authorized, and independently verified before they are accepted as completed work.'
    },
    workflow: [
      { step: '01', title: 'REQUEST & PLAN', description: 'Interpret the user request and generate structured, typed execution steps.' },
      { step: '02', title: 'AUTHORIZE', description: 'Check capability policies and enforce explicit human approvals for sensitive commands.' },
      { step: '03', title: 'EXECUTE', description: 'Run permitted tools inside isolated execution boundaries (Linux namespaces / Job Objects).' },
      { step: '04', title: 'VERIFY', description: 'Execute automated tests, inspect real Git diffs, check exit codes, and validate evidence.' },
      { step: '05', title: 'RECORD', description: 'Persist outputs in SQLite and issue a cryptographically signed HMAC-SHA256 execution record.' }
    ],
    architectureDiagram: `User Request
     |
     v
FastAPI Application
     |
     v
Execution Engine <---> LLM Provider Registry (Gemini, OpenAI, Claude, Ollama)
     |
     v
Permission & Policy Engine (Human Approval Gates)
     |
     v
Tool Registry (Filesystem | Git | Terminal | Verification)
     |
     v
Isolated Execution Environment (Docker Linux Namespaces / Windows Job Objects)
     |
     v
Independent Verifier (Test Results + Git Diff + Exit Codes + Evidence Check)
     |
     v
Trusted Execution Record (HMAC-SHA256 Cryptographic Signature)
     |
     v
SQLite Persistence & React Dashboard`,
    architectureDetails: [
      { title: 'Model-Agnostic Adapter Registry', description: 'Implemented adapters for Gemini, OpenAI, Anthropic, and local Ollama, decoupling execution from any single LLM vendor.' },
      { title: 'Linux Namespace Isolation', description: 'Configured with read-only root, network namespace isolation, dropped Linux capabilities, memory/process limits, and non-root execution.' },
      { title: 'Windows Job Object Supervision', description: 'Uses native Job Objects for process and resource containment on Windows environments.' },
      { title: 'Independent Verifier Engine', description: 'Evaluates real test runs, return codes, and diffs instead of accepting the model description of what occurred.' }
    ],
    implementationTable: [
      { area: 'Model Integration', implementation: 'Provider adapters for Gemini, OpenAI, Claude, and local Ollama' },
      { area: 'Command Containment', implementation: 'Docker Linux namespace isolation and Windows Job Objects' },
      { area: 'Human Approvals', implementation: 'Interactive approval gates for destructive and network operations' },
      { area: 'Verification Engine', implementation: 'Deterministic test runners, exit-code validation, and diff checking' },
      { area: 'Evidence Integrity', implementation: 'HMAC-SHA256 signed execution records with nonces' },
      { area: 'State Persistence', implementation: 'SQLite append-only event ledger and React real-time UI' }
    ],
    evidence: {
      ciDate: '1 November 2026',
      ciStatus: 'Passed (145/145 Tests)',
      metrics: [
        { value: '145 / 145', label: 'Canonical CI Tests', sublabel: '100% reported pass rate' },
        { value: '143', label: 'Unit & Adversarial', sublabel: 'Safety and policy benchmarks' },
        { value: '2', label: 'Live Docker Tests', sublabel: 'Real container integration' },
        { value: '100%', label: 'False Completion Catch', sublabel: 'Verifier caught all fake fixes' }
      ],
      testTable: [
        { test: 'End-to-End Bug Repair', result: 'Identified bug, modified function, passed 3 pytest checks, exit 0' },
        { test: 'Rejection of False Completion', result: 'Verifier caught failing tests and refused completion status' },
        { test: 'Human Approval Interception', result: 'Blocked `git clean -fdx` with zero filesystem modifications' }
      ],
      executedEvidence: [
        'Canonical Linux/Docker CI execution passed 145/145 unit, adversarial, and container tests.',
        'Demonstrated automated repair with recorded HMAC-SHA256 signature.'
      ],
      projectReportedResults: [
        'Captured and rejected 100% of simulated false-completion claims where LLM claimed fix but tests failed.',
        'Human-in-the-loop intercept successfully guarded destructive commands.'
      ],
      outstandingValidation: [
        'Windows Job Object containment provides process limits but lacks equivalent filesystem sandbox guarantees of Linux containers.',
        'Privacy with cloud providers depends on local Ollama execution to prevent prompt transmission.'
      ],
      evidenceLinks: [
        { label: 'Latest CI Run #41288154213', url: 'https://github.com/MokuLakshithReddy/local-ai-execution-agent/actions/runs/41288154213', type: 'ci' },
        { label: 'Formal Verification Report (EVIDENCE.md)', url: 'https://github.com/MokuLakshithReddy/local-ai-execution-agent/blob/main/EVIDENCE.md', type: 'docs' },
        { label: 'Adversarial Test Suite', url: 'https://github.com/MokuLakshithReddy/local-ai-execution-agent/blob/main/tests/test_adversarial_benchmark.py', type: 'docs' }
      ]
    },
    limitations: [
      'An execution record proves designated checks passed under documented conditions; it does not guarantee code is free of all defects.',
      'Windows containment requires dedicated virtual machine isolation for untrusted repository cloning.',
      'Cloud models transmit prompts to vendor servers; local-only privacy mandates local weights (e.g. Ollama).'
    ],
    projectOutcome: 'A local-first AI execution framework that turns LLM reasoning into bounded, authorized, and independently verified software modifications.'
  },
  {
    slug: 'thinkmate',
    number: '03',
    title: 'ThinkMate — AI Thinking Partner',
    subtitle: 'A structured reasoning workspace for understanding problems and making better decisions',
    category: 'AI Reasoning Product',
    badgeStatus: 'Private Source',
    sourceVisibility: 'Private Source',
    technologies: ['Next.js', 'TypeScript', 'Google GenAI', 'Supabase', 'PostgreSQL', 'Redis', 'Razorpay', 'MCP'],
    links: [
      { label: 'Repository Reference', url: 'https://github.com/MokuLakshithReddy/thinkmate', type: 'github' },
      { label: 'Latest Staging DB Verification (Run #41814847202)', url: 'https://github.com/MokuLakshithReddy/thinkmate/actions/runs/41814847202', type: 'ci' },
      { label: 'Latest Staging Browser E2E Report (Run #41838038580)', url: 'https://github.com/MokuLakshithReddy/thinkmate/actions/runs/41838038580', type: 'ci' },
      { label: 'Operational Runbook', url: 'https://github.com/MokuLakshithReddy/thinkmate/blob/main/docs/OPERATIONAL_RUNBOOK.md', type: 'docs' }
    ],
    problemStatement: {
      overview: 'Most conversational AI interfaces are optimized for generating immediate answers. However, complex architectural, strategic, and technical challenges require structured exploration: understanding root constraints, surfacing alternatives, challenging unstated assumptions, and testing trade-offs before committing to decisions.',
      challenges: [
        'Superficial AI answers that overlook unspoken constraints and edge cases.',
        'Unstructured conversational threads where context, decisions, and evidence are lost over time.',
        'Direct leaps from poorly framed problems into premature implementation.'
      ],
      corePrinciple: 'Help users think through a problem instead of simply generating an answer for them.'
    },
    workflow: [
      { step: '01', title: 'UNDERSTAND', description: "Clarify the user's actual problem, objectives, non-negotiable constraints, and stakeholders." },
      { step: '02', title: 'EXPLORE', description: 'Generate alternative solution paths with distinct architectural principles and trade-offs.' },
      { step: '03', title: 'CHALLENGE', description: 'Stress-test assumptions, identify failure modes, and distinguish verified facts from hypotheses.' },
      { step: '04', title: 'DECIDE', description: 'Compare alternatives against user-defined criteria and record explicit decision acceptance.' },
      { step: '05', title: 'ACT', description: 'Produce sequenced milestones, next actions, stop conditions, and a measurable definition of done.' }
    ],
    architectureDiagram: `User / Collaborative Team
          |
          v
ThinkMate Web Application (Next.js / TypeScript)
          |
          v
Guided Reasoning Interface (Stateful Thinking Canvas)
          |
          v
Cognitive Workflow Engine
  +-- Gemini Provider (Structured JSON Schema Outputs)
  +-- Server-Side Workflow State Machine
          |
          v
Supabase PostgreSQL (Multi-tenant with Row-Level Security)
  +-- Workspaces | Problem Frames | Evidence | Decisions | Events
          |
          v
Quota & Access Management (Redis + Plan Entitlements + Razorpay)
          |
          v
Model Context Protocol (MCP Server exposing 6 workspace tools)`,
    architectureDetails: [
      { title: 'Finite State Machine', description: 'Server-side state machine strictly enforces progress order, preventing premature progression from understanding to action.' },
      { title: 'Persistent Problem Frames', description: 'Stores workspace context, linked evidence, and open questions across sessions in Supabase PostgreSQL.' },
      { title: 'Model Context Protocol (MCP)', description: 'Exposes 6 standard MCP tools allowing IDEs and external agents to query and update thinking workspaces.' },
      { title: 'Production SaaS Infrastructure', description: 'Includes Redis distributed rate-limiting, Razorpay webhook validation, self-service account deletion, and strict PostgreSQL RLS.' }
    ],
    implementationTable: [
      { area: 'Frontend & Canvas', implementation: 'Next.js App Router, React 19, TypeScript, and Tailwind CSS' },
      { area: 'LLM Orchestration', implementation: 'Google GenAI SDK with structured schema enforcement' },
      { area: 'Workflow Engine', implementation: 'Deterministic 5-stage cognitive state machine' },
      { area: 'Data Persistence', implementation: 'Supabase PostgreSQL with multi-tenant Row-Level Security' },
      { area: 'Rate Limiting', implementation: 'Upstash Redis token bucket per workspace tier' },
      { area: 'External Agent Protocol', implementation: 'Custom MCP server exposing 6 workspace manipulation tools' },
      { area: 'Billing & Webhooks', implementation: 'Razorpay subscription integration with HMAC verification' }
    ],
    evidence: {
      ciDate: '4 November 2026',
      ciStatus: 'Staging DB Passed / Browser E2E Needs Fix',
      metrics: [
        { value: '234', label: 'Unit & Security Tests', sublabel: 'Across 37 test suites' },
        { value: 'Passed', label: 'Staging DB Verification', sublabel: 'Postgres migrations & RLS' },
        { value: '4 / 6', label: 'Staging Browser E2E', sublabel: 'Onboarding timeout identified' },
        { value: '6', label: 'Registered MCP Tools', sublabel: 'IDE context protocol' }
      ],
      testTable: [
        { test: 'Database schema & RLS policies', result: 'Passed (Run #41814847202)' },
        { test: 'Workspace access control', result: '37 suites passed with zero RLS leaks' },
        { test: 'Browser E2E (Guided Workspace)', result: 'Timeout at /consent onboarding screen' }
      ],
      executedEvidence: [
        'Staging database verification completed successfully on 4 November 2026.',
        '234 automated tests across 37 test suites verifying permissions, RLS, and state machine transitions.'
      ],
      projectReportedResults: [
        'Demonstrated 5-stage cognitive progression across complex system design scenarios.',
        'MCP server verified with local MCP clients for context retrieval and turn execution.'
      ],
      outstandingValidation: [
        'Latest browser E2E test identified an onboarding stall where desktop and mobile tests remained on /consent instead of progressing to /thinkmate.',
        'Live multi-user concurrent session stress testing requires deployment verification.'
      ],
      evidenceLinks: [
        { label: 'Staging Database Verification #41814847202', url: 'https://github.com/MokuLakshithReddy/thinkmate/actions/runs/41814847202', type: 'ci' },
        { label: 'Staging Browser E2E Report #41838038580', url: 'https://github.com/MokuLakshithReddy/thinkmate/actions/runs/41838038580', type: 'ci' },
        { label: 'Operational Runbook', url: 'https://github.com/MokuLakshithReddy/thinkmate/blob/main/docs/OPERATIONAL_RUNBOOK.md', type: 'docs' }
      ]
    },
    limitations: [
      'The onboarding redirect bug between /consent and /thinkmate must be reconciled before claiming fully verified public production status.',
      'Relies on cloud LLM availability (Gemini); offline operation is not currently supported.',
      'Team collaborative editing currently relies on polling rather than real-time CRDT synchronization.'
    ],
    projectOutcome: 'A stateful AI reasoning platform that transforms vague problems into structured, evidence-backed architectural decisions and actionable roadmaps.'
  },
  {
    slug: 'cluely-copilot',
    number: '04',
    title: 'Cluely Copilot — Desktop AI Assistant',
    subtitle: 'A context-aware desktop AI assistant combining screen perception, conversation intelligence and personal knowledge retrieval',
    category: 'Multimodal AI',
    badgeStatus: 'Private Source',
    sourceVisibility: 'Private Source',
    technologies: ['Electron', 'React', 'TypeScript', 'Vite', 'AI APIs', 'Audio Processing', 'RAG'],
    links: [
      { label: 'Latest CI Run (Run #41215464862)', url: 'https://github.com/MokuLakshithReddy/Cluely-AI-Desktop-Assistant/actions/runs/41215464862', type: 'ci' },
      { label: 'Architecture Specification', url: 'https://github.com/MokuLakshithReddy/Cluely-AI-Desktop-Assistant/blob/main/docs/architecture/ARCHITECTURE.md', type: 'docs' },
      { label: '89-Test Execution Report', url: 'https://github.com/MokuLakshithReddy/Cluely-AI-Desktop-Assistant/blob/main/docs/testing/TEST_RESULTS.md', type: 'docs' },
      { label: 'Quality Measurements', url: 'https://github.com/MokuLakshithReddy/Cluely-AI-Desktop-Assistant/blob/main/docs/benchmarks/QUALITY_MEASUREMENTS.md', type: 'docs' }
    ],
    problemStatement: {
      overview: 'Traditional AI chat assistants force users to manually copy-paste window contents, transcribe meeting notes, and provide background context. In active desktop workflows, critical information is fragmented across application windows, code editors, and spoken discussions.',
      challenges: [
        'High latency and cognitive friction in manually summarizing multi-window desktop contexts.',
        'Audio crosstalk between microphone and system loopback during voice calls.',
        'Privacy risks associated with sending uncurated desktop screenshots and audio to remote models.'
      ],
      corePrinciple: 'Provide contextual assistance grounded in user-consented screen perception and conversation intelligence while strictly preserving local privacy.'
    },
    workflow: [
      { step: '01', title: 'DUAL AUDIO CAPTURE', description: 'Capture local microphone and system-loopback audio as separated streams with VAD gating.' },
      { step: '02', title: 'SCREEN PERCEPTION', description: 'Capture display via Electron desktop capture with proportional downscaling to max 1920px.' },
      { step: '03', title: 'KNOWLEDGE RETRIEVAL', description: 'Ingest local user documents, chunk text, and perform TF-IDF retrieval for domain context.' },
      { step: '04', title: 'CONTEXT FUSION', description: 'Fuse screen vision, speech transcripts, user queries, and retrieved passages into a structured prompt.' },
      { step: '05', title: 'STREAMED RESPONSE', description: 'Stream AI assistance, strip screenshots prior to session persistence, and encrypt credentials.' }
    ],
    architectureDiagram: `User Desktop Workspace
      |
      +-----------------------------+-----------------------------+
      |                                                           |
      v                                                           v
Screen Capture (Electron DesktopCapturer)     Audio Capture (Mic + System Loopback)
  - Proportional Scaling (Max 1920px)           - Web Audio API (48kHz -> 16kHz)
  - Memory-efficient Buffering                  - VAD Pipeline (RMS + ZCR)
      |                                         - Whisper / Groq Transcription
      +-----------------------------+-----------------------------+
                                    |
                                    v
                             Context Fusion
                 Screen Vision + Transcripts + User Prompt
                 + Local Document Chunking & TF-IDF RAG
                                    |
                                    v
                           LLM Provider Engine
                       (Gemini, OpenAI, Claude, Ollama)
                                    |
                                    v
                  Streamed Response to Desktop Overlay
                  + OS-Backed Credential Storage (safeStorage)
                  + Screenshot Stripping & Session Purge`,
    architectureDetails: [
      { title: 'Dual-Channel Audio Separation', description: 'Processes user mic and speaker loopback independently. Voice Activity Detection (VAD) drops cross-talk WER from 18.62% to 2.14%.' },
      { title: 'Proportional Screen Perception', description: 'Downscales 4K/2K displays to 1920px maximum bounds, reducing latency and vision token consumption by over 60%.' },
      { title: 'Local Knowledge Retrieval (RAG)', description: 'Enables users to upload reference documentation; retrieves top-3 passages with 96.4% recall and 100% citation attribution.' },
      { title: 'Privacy & Credential Isolation', description: 'Enforces ephemeral audio processing, strips screenshot buffers before persisting session logs, and protects API keys with OS-backed safeStorage.' }
    ],
    implementationTable: [
      { area: 'Desktop Runtime', implementation: 'Electron main process with sandboxed context-isolated renderer' },
      { area: 'UI Architecture', implementation: 'React 19, TypeScript, and Vite' },
      { area: 'Audio Processing', implementation: 'Web Audio API, 48kHz to 16kHz resampling, RMS and ZCR' },
      { area: 'Speech Transcription', implementation: 'Whisper / Groq API integration' },
      { area: 'Display Perception', implementation: 'Electron desktopCapturer with aspect-preserving resize' },
      { area: 'Knowledge Retrieval', implementation: 'In-memory TF-IDF vector retrieval and source citation' },
      { area: 'Credential Vault', implementation: 'Electron safeStorage with OS DPAPI / Keychain and AES-GCM' },
      { area: 'Security Hardening', implementation: '22 IPC security tests covering origin checks and frame isolation' }
    ],
    evidence: {
      ciDate: '31 October 2026',
      ciStatus: 'Passed (89/89 Tests on Windows 11)',
      metrics: [
        { value: '89 / 89', label: 'Automated Tests Passed', sublabel: '100% reported pass rate' },
        { value: '22', label: 'IPC Security Tests', sublabel: 'Origin and schema validation' },
        { value: '2.14%', label: 'Crosstalk Audio WER', sublabel: 'Down from 18.62% with VAD' },
        { value: '98.8%', label: 'Answer Faithfulness', sublabel: '30-question RAG benchmark' }
      ],
      testTable: [
        { test: 'IPC Security & Origin Validation', result: '22 passed (frame isolation & URL bypass checks)' },
        { test: 'End-to-End Desktop Workflows', result: '6 passed (audio, screen, RAG, streaming, purge)' },
        { test: 'Credential Vault Encryption', result: '7 passed (safeStorage & AES-256 fallback)' },
        { test: 'RAG Retrieval Subsystem', result: '6 passed (TF-IDF ranking & context recall)' }
      ],
      executedEvidence: [
        '89 automated test suite executions completed on Windows 11 x64 environment.',
        'IPC security suite validated origin filtering and frame rejection.'
      ],
      projectReportedResults: [
        '150-utterance evaluation showed cross-talk WER reduction from 18.62% to 2.14%.',
        'RAG evaluation across 30 questions reported 96.4% recall and 1.2% hallucination rate.'
      ],
      outstandingValidation: [
        'Cross-platform testing on macOS and Linux desktop environments.',
        'Broader speech recognition benchmarking under varying acoustic noise conditions.'
      ],
      evidenceLinks: [
        { label: 'Latest CI Run #41215464862', url: 'https://github.com/MokuLakshithReddy/Cluely-AI-Desktop-Assistant/actions/runs/41215464862', type: 'ci' },
        { label: 'Architecture Specification', url: 'https://github.com/MokuLakshithReddy/Cluely-AI-Desktop-Assistant/blob/main/docs/architecture/ARCHITECTURE.md', type: 'docs' },
        { label: 'Test Execution Results', url: 'https://github.com/MokuLakshithReddy/Cluely-AI-Desktop-Assistant/blob/main/docs/testing/TEST_RESULTS.md', type: 'docs' },
        { label: 'Security & Privacy Runbook', url: 'https://github.com/MokuLakshithReddy/Cluely-AI-Desktop-Assistant/blob/main/docs/security/SECURITY_AND_PRIVACY.md', type: 'docs' }
      ]
    },
    limitations: [
      'Documented verification was performed primarily on Windows 11; multi-platform parity requires testing macOS entitlements.',
      'Audio capture and screen perception require explicit participant consent; must not be operated covertly.',
      'Vision token cost can be substantial during prolonged continuous screen streaming.'
    ],
    projectOutcome: 'An independent multimodal desktop AI copilot that bridges real-time screen understanding, dual-stream conversation audio, and document knowledge retrieval.'
  },
  {
    slug: 'autonomous-ai-coding-orchestrator',
    number: '05',
    title: 'Autonomous AI Coding Orchestrator',
    subtitle: 'Connecting an LLM planner, coding agent and independent verifier into a closed-loop engineering system',
    category: 'Autonomous AI Engineering',
    badgeStatus: 'Experimental · Private Source',
    sourceVisibility: 'Private Source',
    technologies: ['TypeScript', 'Node.js', 'Fastify', 'React', 'Gemini', 'SQLite', 'Git Worktrees', 'Docker'],
    links: [
      { label: 'Deterministic CI Verification (Run #41294524981)', url: 'https://github.com/MokuLakshithReddy/autonomous-ai-coding-orchestrator/actions/runs/41294524981', type: 'ci' },
      { label: 'Live-Model Benchmark (Run #41774740945)', url: 'https://github.com/MokuLakshithReddy/autonomous-ai-coding-orchestrator/actions/runs/41774740945', type: 'ci' },
      { label: 'Production Metrics Document', url: 'https://github.com/MokuLakshithReddy/autonomous-ai-coding-orchestrator/blob/main/PRODUCTION_METRICS.md', type: 'docs' },
      { label: 'Benchmark Methodology', url: 'https://github.com/MokuLakshithReddy/autonomous-ai-coding-orchestrator/blob/main/docs/BENCHMARKS.md', type: 'docs' }
    ],
    problemStatement: {
      overview: 'Autonomous coding agents can search codebases, draft changes, and run shell commands. However, generating a code diff does not mean a task was solved correctly. Agents frequently introduce regressions, skip required tests, modify incorrect files, or prematurely declare completion.',
      challenges: [
        'Coding agents self-reporting completion despite failing acceptance tests or partial repairs.',
        'Direct mutations to the developer active Git checkout that break existing uncommitted work.',
        'Failure loops where the agent repeats identical incorrect attempts without architectural adaptation.'
      ],
      corePrinciple: 'Make task completion an evidence-driven process evaluated by an independent verification engine rather than accepting the coding agent own self-report.'
    },
    workflow: [
      { step: '01', title: 'THE BRAIN', description: 'LLM Planner inspects the repository, analyzes requirements, and constructs sequenced execution steps.' },
      { step: '02', title: 'ISOLATION', description: 'Orchestrator provisions an isolated Git worktree and branch to safeguard the primary checkout.' },
      { step: '03', title: 'THE ENGINEER', description: 'Coding Agent uses controlled tools to inspect files, edit code, and invoke compilers/tests.' },
      { step: '04', title: 'THE VERIFIER', description: 'Independent Verification Engine checks actual diffs, executes test suites, and evaluates criteria.' },
      { step: '05', title: 'REPAIR LOOP', description: 'If checks fail, error analysis feeds back into the planner for iterative repair until proven.' }
    ],
    architectureDiagram: `Developer Request
      |
      v
Repository Inspection & Task Framing
      |
      v
LLM Planning (Acceptance Criteria Definition)
      |
      v
Finite State Machine & SQLite Ledger
      |
      v
Isolated Git Worktree (Protects Working Tree)
      |
      v
Coding Agent Execution (Tool-Use Sandbox)
      |
      v
Independent Verification Engine
  |
  +---> [Tests Pass & Criteria Met]  --> Task Completed & Merged
  |
  +---> [Tests Fail / Partial Fix]   --> Error Analysis & Repair Loop`,
    architectureDetails: [
      { title: 'Isolated Git Worktrees', description: 'Every task operates within an ephemeral Git worktree and branch, shielding the developer working tree from destructive changes.' },
      { title: 'Independent Verifier Engine', description: 'Runs in a separate process to inspect diffs, test exit codes, and verify acceptance criteria without relying on agent output.' },
      { title: 'Security Policy Guardrails', description: 'Validates workspace path boundaries, command risk tiers, and monitors sensitive files (.env, credentials, CI config).' },
      { title: 'Dual Benchmark Evaluation', description: 'Explicitly separates deterministic simulation benchmark results from unscripted live-model coding performance.' }
    ],
    implementationTable: [
      { area: 'Task Orchestration', implementation: 'Fastify backend with deterministic finite-state machine' },
      { area: 'Workspace Isolation', implementation: 'Git worktrees and ephemeral directory management' },
      { area: 'Agent Adapters', implementation: 'Native agent runtime + adapters for Claude Code and Aider' },
      { area: 'Verification Engine', implementation: 'Independent process runner, diff analyzer, and criteria checker' },
      { area: 'Security Policies', implementation: 'Path boundary checking, command whitelist, and approval gates' },
      { area: 'Task Ledger', implementation: 'SQLite append-only event log for full audit and playback' }
    ],
    evidence: {
      ciDate: '4 November 2026',
      ciStatus: 'Deterministic Passed (31/31) / Live Model Needs Improvement (1/4)',
      metrics: [
        { value: '31 / 31', label: 'Deterministic P0/P1', sublabel: '100% safety checks passed' },
        { value: '0', label: 'False Positives', sublabel: 'Caught 6/6 baseline fake fixes' },
        { value: '1 / 4', label: 'Live Model Benchmark', sublabel: 'Real unscripted Gemini run' },
        { value: '4 / 4', label: 'CI Runner Matrix', sublabel: 'Cross-platform runners green' }
      ],
      testTable: [
        { test: 'Production-readiness E2E scenarios', result: '10/10 passed' },
        { test: 'Deterministic repair benchmarks', result: '4/4 passed' },
        { test: 'Adversarial regression detection', result: '1/1 caught and blocked' },
        { test: 'Dangerous task execution rejection', result: '1/1 blocked at policy gate' },
        { test: 'Live Gemini Model Benchmark (4 Nov 2026)', result: '1/4 passed (Module resolution passed; 3 failed hidden tests)' }
      ],
      executedEvidence: [
        'Deterministic CI suite (#41294524981) completed 31/31 safety and orchestration checks.',
        'Live Gemini run (#41774740945) recorded real-world model performance on 4 November 2026.'
      ],
      projectReportedResults: [
        'Deterministic simulation: 18/19 verified task completions with 0 false-positive declarations.',
        'Baseline raw-agent comparison produced 6 false-positive completion claims that our verifier correctly caught.'
      ],
      outstandingValidation: [
        'Live model coding reliability requires improvement: 3 of 4 live scenarios failed hidden acceptance tests.',
        'Multi-file architectural refactoring requires more sophisticated context window management.'
      ],
      evidenceLinks: [
        { label: 'Deterministic CI Verification #41294524981', url: 'https://github.com/MokuLakshithReddy/autonomous-ai-coding-orchestrator/actions/runs/41294524981', type: 'ci' },
        { label: 'Live-Model Benchmark Run #41774740945', url: 'https://github.com/MokuLakshithReddy/autonomous-ai-coding-orchestrator/actions/runs/41774740945', type: 'ci' },
        { label: 'Production Verification Report', url: 'https://github.com/MokuLakshithReddy/autonomous-ai-coding-orchestrator/blob/main/PRODUCTION_METRICS.md', type: 'docs' }
      ]
    },
    limitations: [
      'Deterministic benchmarks prove orchestrator safety and control flow, but live models still struggle with unfamiliar multi-file tasks.',
      'Git worktree isolation isolates the repository checkout, but full untrusted execution requires Docker container sandboxing.',
      'Complex multi-file dependency cycles can trigger timeout limits during iterative repair loops.'
    ],
    projectOutcome: 'An experimental closed-loop AI engineering platform that enforces independent verification and acceptance criteria over autonomous code generation.'
  },
  {
    slug: 'bluecarbon-registry',
    number: '06',
    title: 'BlueCarbon Registry',
    subtitle: 'A blockchain-enabled Monitoring, Reporting and Verification platform for coastal blue-carbon ecosystems',
    category: 'Scientific & Blockchain MRV',
    badgeStatus: 'Research Prototype',
    sourceVisibility: 'Public Repository',
    technologies: ['TypeScript', 'React', 'Supabase', 'PostgreSQL', 'Solidity', 'EVM', 'GIS', 'Leaflet'],
    links: [
      { label: 'Public GitHub Repository', url: 'https://github.com/MokuLakshithReddy/bluecarbon-registry', type: 'github' },
      { label: 'Latest CI Pipeline (Run #40334221068)', url: 'https://github.com/MokuLakshithReddy/bluecarbon-registry/actions/runs/40334221068', type: 'ci' },
      { label: 'Scientific Validation Report', url: 'https://github.com/MokuLakshithReddy/bluecarbon-registry/blob/main/docs/SCIENTIFIC_VALIDATION_REPORT.md', type: 'docs' },
      { label: 'Carbon Methodology Specification', url: 'https://github.com/MokuLakshithReddy/bluecarbon-registry/blob/main/docs/CARBON_METHODOLOGY_SPEC.md', type: 'docs' },
      { label: 'Smart Contract Audit & Runbook', url: 'https://github.com/MokuLakshithReddy/bluecarbon-registry/blob/main/docs/SMART_CONTRACT_AUDIT.md', type: 'docs' }
    ],
    problemStatement: {
      overview: 'Coastal ecosystems (mangroves, seagrass meadows, tidal wetlands) sequester significant quantities of carbon. However, traditional MRV processes rely on fragmented evidence, creating risks of duplicate registration, modified field data, faulty spatial boundaries, and non-transparent carbon estimates.',
      challenges: [
        'Data tampering and evidence substitution during long verification cycles.',
        'Overlapping spatial boundaries causing double-counting of credits.',
        'Over-optimistic regional carbon formulas that overpredict in extreme or dwarf ecological conditions.'
      ],
      corePrinciple: 'Combine cryptographic evidence integrity, GIS spatial boundary checks, transparent IPCC formulas, and blockchain transaction anchoring into an audited workflow.'
    },
    workflow: [
      { step: '01', title: 'FIELD EVIDENCE', description: 'Collect field surveys, drone multispectral imagery, and soil samples with SHA-256 hash anchoring.' },
      { step: '02', title: 'GEOSPATIAL VALIDATION', description: 'Validate spatial polygons using Haversine formulas and topological boundary containment.' },
      { step: '03', title: 'CARBON MODELING', description: 'Estimate net sequestration separating biomass, soil accretion, methane emissions, and uncertainty.' },
      { step: '04', title: 'HUMAN VERIFICATION', description: 'Independent verifiers review evidence packages and approve or request revisions.' },
      { step: '05', title: 'BLOCKCHAIN ANCHORING', description: 'Transactional outbox worker commits approved records to an EVM smart contract with receipt verification.' }
    ],
    architectureDiagram: `Field Evidence (Surveys + Imagery + Soil Cores)
       |
       v
Project Registration & Storage URI Binding
       |
       v
Evidence Validation (SHA-256 Hashing + Polygon Containment)
       |
       v
Carbon Methodology Engine (IPCC Equations & Uncertainty Tiers)
       |
       v
Authorized Human Verification Workflow
       |
       v
VERIFIED_PENDING_ANCHOR State
       |
       v
Transactional Outbox & Background Worker
       |
       v
EVM Smart Contract (Solidity on Ethereum / Polygon)
       |
       v
Transaction Receipt & Cryptographic Audit Trail`,
    architectureDetails: [
      { title: 'Cryptographic Evidence Integrity', description: 'Uploaded files are bound to SHA-256 hashes and strict storage URI paths, preventing post-upload substitution.' },
      { title: 'Geospatial Polygon Containment', description: 'Calculates project area, validates boundary closure, and prevents overlapping claims using spatial algorithms.' },
      { title: 'Transparent Carbon Calculations', description: 'Separates gross biomass and soil carbon accretion from methane emissions, leakage risk, reversal buffers, and scientific uncertainty discounts.' },
      { title: 'Transactional Outbox Pattern', description: 'Guarantees reliable smart contract anchoring through an asynchronous worker with exponential backoff.' }
    ],
    implementationTable: [
      { area: 'Web Application', implementation: 'React 19, TypeScript, TanStack Start, and Leaflet GIS' },
      { area: 'Database & RLS', implementation: 'Supabase PostgreSQL with role-based Row-Level Security' },
      { area: 'Evidence Security', implementation: 'SHA-256 file hashing and project-bound URI schemes' },
      { area: 'Spatial Validation', implementation: 'Polygon containment and Haversine spatial calculations' },
      { area: 'Scientific Carbon Engine', implementation: 'IPCC-aligned mathematical models with 3 uncertainty tiers' },
      { area: 'Smart Contracts', implementation: 'Solidity EVM contracts managing verified project registry' },
      { area: 'Asynchronous Relayer', implementation: 'Transactional outbox with Ethers.js background worker' },
      { area: 'Authentication', implementation: 'Supabase Auth + Sign-In with Ethereum (SIWE)' }
    ],
    evidence: {
      ciDate: '26 October 2026',
      ciStatus: 'Passed (196/196 Full Test Suite)',
      metrics: [
        { value: '196 / 196', label: 'CI Tests Passed', sublabel: 'GitHub Actions test pipeline' },
        { value: '5', label: 'Solidity Unit Tests', sublabel: 'EVM in-process execution' },
        { value: '4.1%', label: 'In-Sample Calibration', sublabel: 'MAPE across 3 reference sites' },
        { value: '31.6%', label: 'Held-Out Stress Test', sublabel: 'Identified dwarf mangrove limits' }
      ],
      testTable: [
        { test: 'Blockchain record validation & outbox', result: 'Passed (atomic outbox execution)' },
        { test: 'Evidence hashing & URI binding', result: 'Passed (tamper detection verified)' },
        { test: 'Geospatial boundary validation', result: 'Passed (polygon containment & overlap checks)' },
        { test: 'Solidity contract execution', result: '5 passed (in-process EVM tests)' }
      ],
      executedEvidence: [
        'Automated CI pipeline passed 196/196 tests on 26 October 2026.',
        '5 in-process Solidity smart contract tests verified contract state transitions.'
      ],
      projectReportedResults: [
        'Model calibrated across Sundarbans, Pichavaram, and Chilika reference studies (4.1% MAPE).',
        'Stress-testing on extreme dwarf mangroves in Gulf of Kutch identified a 56.5% overprediction, proving regional defaults cannot be blindly applied.'
      ],
      outstandingValidation: [
        'Formal scientific accreditation by an accredited Validation & Verification Body (VVB).',
        'Third-party external smart contract security audit before mainnet deployment.'
      ],
      evidenceLinks: [
        { label: 'Public GitHub Repository', url: 'https://github.com/MokuLakshithReddy/bluecarbon-registry', type: 'github' },
        { label: 'CI Pipeline Run #40334221068', url: 'https://github.com/MokuLakshithReddy/bluecarbon-registry/actions/runs/40334221068', type: 'ci' },
        { label: 'Scientific Validation Report', url: 'https://github.com/MokuLakshithReddy/bluecarbon-registry/blob/main/docs/SCIENTIFIC_VALIDATION_REPORT.md', type: 'docs' },
        { label: 'Carbon Methodology Specification', url: 'https://github.com/MokuLakshithReddy/bluecarbon-registry/blob/main/docs/CARBON_METHODOLOGY_SPEC.md', type: 'docs' }
      ]
    },
    limitations: [
      'Pre-review scientific research prototype; not formally certified for carbon credit issuance by regulatory registries.',
      'The smart-contract audit document is an internal runbook, not a third-party security firm certification.',
      'Regional biomass models require ground-truthed soil core calibration for extreme environmental zones.'
    ],
    projectOutcome: 'A research-grade digital MRV prototype proving how cryptographic evidence provenance, geospatial validation, scientific formulas, and blockchain anchoring ensure transparent environmental accounting.'
  }
]
