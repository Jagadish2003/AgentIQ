# Contract Rules (EPIC E0)

## Non-negotiables
1. Backend responses match the contract exactly.
2. Frontend does NOT refactor UI components during mock→API switch.
3. If a field is missing in backend responses, the contract is the source of truth — backend must add it.

## Field conventions
- IDs: string (e.g., "opp_006", "run_001")
- Timestamps: ISO 8601 strings (e.g., "2026-03-18T10:12:00Z")
- Enums: uppercase where used in UI (APPROVED/REJECTED/UNREVIEWED; READY/PENDING/MISSING)

## Changes
- Any changes require a contract bump (v1.0 → v1.1) and approval by FE + BE leads.


## Run-scoped rule (non-negotiable)
- Run-scoped endpoints MUST include runId in the URL.
- Backend must NOT infer or fallback to a 'latest run'.
- If runId is missing/invalid: return 404/400.


## Contract PR sign-off
- Backend lead must comment: "Contract v1.1 approved — [name] [date]" before merge.
- Merge commit hash is the version anchor.


## Type change control
- Any change to src/types/*.ts requires a corresponding update to API_CONTRACT.md with a version bump (v1.x).
- Must be reviewed by both FE and BE before merge.
