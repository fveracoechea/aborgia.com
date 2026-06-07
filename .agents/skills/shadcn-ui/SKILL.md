---
name: shadcn-ui
description: Install, update, and use shadcn/ui components from the official registry and local project. Covers component discovery, installation via CLI, usage patterns with Tailwind CSS, and updating existing components. Use when working with shadcn/ui components, adding new UI components, updating installed components, or when user mentions button, dialog, table, card, or any shadcn/ui primitive.
---

# shadcn/ui

## Quick start

```tsx
import { Button } from "#/components/ui/button"

export function Page() {
  return <Button variant="outline">Click me</Button>
}
```

## Before you start

- Reference the canonical docs: https://ui.shadcn.com/llms.txt
- This project uses Bun. Prefer `bunx shadcn@latest` over `npx shadcn@latest`.
- Components live in the `ui` alias path (e.g., `#/components/ui/<name>.tsx`).

## Workflows

### Install a component

1. Check if already installed:
   ```bash
   bun run .agents/skills/shadcn-ui/scripts/validate-component.ts <name>
   ```
2. If missing, install:
   ```bash
   bunx shadcn@latest add <name>
   ```
3. Verify the file was created at `#/components/ui/<name>.tsx`.
4. Install any peer dependency warnings from CLI output.

### Use a component

1. Import from the `ui` alias: `import { Component } from "#/components/ui/component"`
2. Compose with other shadcn/ui primitives and Tailwind utility classes.
3. Use `cn()` from `#/lib/utils` for conditional class merging.
4. Prefer composition over prop drilling — components are uncontrolled by default.

### Update a component

1. Back up the existing file if customizations were made.
2. Run `bunx shadcn@latest add <name> --overwrite`
3. Re-apply any local customizations.
4. Verify no TypeScript errors in consuming files.

## Advanced

- Query the registry: `bun run .agents/skills/shadcn-ui/scripts/query-registry.ts <query>`
- Custom registries: see https://ui.shadcn.com/docs/registry
- Theming: see https://ui.shadcn.com/docs/theming
- Dark mode: see https://ui.shadcn.com/docs/dark-mode
