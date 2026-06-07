#!/usr/bin/env bun
/**
 * update-component.ts
 *
 * Update an existing shadcn/ui component to the latest version from the registry.
 * Backs up the existing file before overwriting.
 *
 * Usage:
 *   bun run .agents/skills/shadcn-ui/scripts/update-component.ts <component-name>
 *
 * Output:
 *   Prints the backup path and the result of the CLI update command.
 */

import { existsSync, readFileSync, copyFileSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";

const componentName = Bun.argv[2];
if (!componentName) {
  console.error("Usage: update-component.ts <component-name>");
  process.exit(1);
}

function detectPackageManager(): string {
  const cwd = process.cwd();
  if (existsSync(join(cwd, "bun.lock")) || existsSync(join(cwd, "bun.lockb"))) {
    return "bunx";
  }
  if (existsSync(join(cwd, "pnpm-lock.yaml"))) {
    return "pnpm dlx";
  }
  if (existsSync(join(cwd, "yarn.lock"))) {
    return "yarn dlx";
  }
  return "npx";
}

const pm = detectPackageManager();

interface ComponentsJson {
  style?: string;
  aliases?: {
    ui?: string;
  };
}

let componentsJson: ComponentsJson;
try {
  componentsJson = JSON.parse(readFileSync("components.json", "utf8")) as ComponentsJson;
} catch (e: unknown) {
  console.error("Could not read components.json:", (e as Error).message);
  process.exit(1);
}

const uiAlias = componentsJson.aliases?.ui || "@/components/ui";

function resolveAlias(alias: string): string {
  try {
    const pkg = JSON.parse(readFileSync("package.json", "utf8")) as Record<string, unknown>;
    const imports = pkg.imports as Record<string, string> | undefined;
    if (imports) {
      for (const [key, val] of Object.entries(imports)) {
        const prefix = key.replace("/*", "");
        if (alias.startsWith(prefix)) {
          const relative = alias.slice(prefix.length);
          const base = val.replace("./", "").replace("/*", "");
          return join(base, relative);
        }
      }
    }
  } catch {}

  try {
    const tsconfig = JSON.parse(readFileSync("tsconfig.json", "utf8")) as {
      compilerOptions?: { paths?: Record<string, string[]> };
    };
    const paths = tsconfig.compilerOptions?.paths;
    if (paths) {
      for (const [key, vals] of Object.entries(paths)) {
        const prefix = key.replace("/*", "");
        if (alias.startsWith(prefix)) {
          const relative = alias.slice(prefix.length);
          const base = vals[0]?.replace("./", "").replace("/*", "");
          if (base) return join(base, relative);
        }
      }
    }
  } catch {}

  if (alias.startsWith("@/") || alias.startsWith("~/") || alias.startsWith("#/")) {
    return join("src", alias.slice(2));
  }
  return alias.replace(/^[@#~]\//, "");
}

const uiPath = resolveAlias(uiAlias);
const componentPath = join(uiPath, `${componentName}.tsx`);

if (!existsSync(componentPath)) {
  console.error(`Component not found locally: ${componentPath}`);
  console.error("Use validate-component.ts to check, or install it first.");
  process.exit(1);
}

const backupPath = `${componentPath}.backup-${Date.now()}`;
copyFileSync(componentPath, backupPath);
console.log(`Backup created: ${backupPath}`);

const cmd = `${pm} shadcn@latest add ${componentName} --overwrite --yes`;
console.log(`Running: ${cmd}`);
try {
  const output = execSync(cmd, {
    encoding: "utf8",
    timeout: 60000,
    stdio: ["inherit", "inherit", "inherit"],
  });
  console.log(output || "Update complete.");
} catch (e: unknown) {
  console.error("Update failed:", (e as Error).message);
  console.error(`You can restore from backup: ${backupPath}`);
  process.exit(1);
}
