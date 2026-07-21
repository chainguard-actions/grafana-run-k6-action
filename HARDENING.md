<!-- markdownlint-disable -->

# Hardening Report: grafana--run-k6-action/v1.4.0

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **grafana--run-k6-action/v1.4.0** was hardened automatically. 2 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

The workflow uses `grafana/setup-k6-action@main` — a mutable branch reference — in 5 steps across multiple jobs. If the `main` branch of that action is compromised or force-pushed, all jobs using it will silently execute attacker-controlled code. Pin each reference to a full 40-character commit SHA (e.g. `grafana/setup-k6-action@<sha> # vX.Y.Z`).

Locations:

- `.github/workflows/test.yaml:52`
- `.github/workflows/test.yaml:67`
- `.github/workflows/test.yaml:79`
- `.github/workflows/test.yaml:91`
- `.github/workflows/test.yaml:103`

### script-injection (severity: high)

Sub-rule (b): The run: block in the 'Get major version number and update tag' step uses unquoted shell variable expansions of workflow-controllable data. Specifically, `${MAJOR}` (derived from `$GITHUB_REF` which maps to `github.ref`) is used unquoted in `git tag -fa ${MAJOR}` and `git push origin ${MAJOR} --force`, and `${GITHUB_REPOSITORY}` (from `github.repository`) is interpolated unquoted inside the remote URL string. An attacker who can control the tag name (e.g. via a crafted release ref) could inject shell metacharacters. All expansions of these variables must be double-quoted: e.g. `git tag -fa "${MAJOR}"` and `git push origin "${MAJOR}" --force`.

Locations:

- `.github/workflows/move-major-release-tag.yaml:19`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses, script-injection

**Notes:**

1. unpinned-uses: Replaced all 5 occurrences of `grafana/setup-k6-action@main` in `.github/workflows/test.yaml` with the pinned SHA `grafana/setup-k6-action@85119162329017cffa5e1450d8caef5780543201 # main` (resolved via git ls-remote). 2. script-injection: In `.github/workflows/move-major-release-tag.yaml`, double-quoted all unquoted variable expansions in the run block: `${MAJOR}` in `git tag -fa` and `git push origin`, and the full remote URL string containing `${GITHUB_REPOSITORY}` to prevent shell metacharacter injection from attacker-controlled tag/ref values.

