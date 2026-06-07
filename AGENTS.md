## Workflow

- Make sure to run `bun lint` and `bun typecheck` and fix issues after code changes
- Functions and Components must me modular, easy to read, and easy to change.

<!-- intent-skills:start -->
## Skill Loading

Before substantial work:
- Skill check: run `bunx @tanstack/intent@latest list`, or use skills already listed in context.
- Skill guidance: if one local skill clearly matches the task, run `bunx @tanstack/intent@latest load <package>#<skill>` and follow the returned `SKILL.md`.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.
<!-- intent-skills:end -->

## Agent skills

### Issue tracker

Issues and PRDs for this repo live as GitHub issues. See `docs/agents/issue-tracker.md`.

### Triage labels

Default label vocabulary — no overrides. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context repo: read `CONTEXT.md` at the root and `docs/adr/` for architectural decisions. See `docs/agents/domain.md`.
