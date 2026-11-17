# Protecting the main branch

This repository is maintained through pull requests. The GitHub branch rule itself is a repository setting and cannot be enabled by changing application source files.

## Required rules for `main`

Open **Settings → Rules → Rulesets** (or **Settings → Branches → Add branch protection rule**) and configure a rule targeting the `main` branch.

Enable:

1. **Require a pull request before merging.**
2. **Require status checks to pass before merging.** Select the required Portfolio CI check after it has completed successfully on a pull request. The check name follows the CI job name in `.github/workflows/ci.yml`.
3. **Require branches to be up to date before merging**, so the required checks run against the current base branch.
4. **Block force pushes.**
5. **Block branch deletion.**

For a single-maintainer repository, set the required approving review count to **0** unless another reviewer is available. Pull requests and required CI checks can still be mandatory without making self-approval impossible. Increase the required approval count when a second reviewer is available.

Enable administrator enforcement unless there is a deliberate recovery/bypass requirement. Keep any bypass list empty or limited to a documented emergency role.

## Verification

After saving the rule:

- Confirm GitHub shows `main` as protected in **Settings → Branches**.
- Open a small test pull request and verify the required Portfolio CI check is listed as required.
- Confirm a pull request with a failing required check cannot be merged.
- Confirm direct pushes and force pushes to `main` are rejected.

## Current state

The repository was observed with `main` unprotected during the November 8, 2026 audit. This document is an operator guide only; it does **not** itself enable branch protection. The setting must be saved in GitHub repository settings by an administrator.
