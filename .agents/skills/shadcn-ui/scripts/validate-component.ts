#!/usr/bin/env bun
/**
 * validate-component.ts
 *
 * Checks if a shadcn/ui component exists locally and/or in the registry.
 *
 * Usage:
 *   bun run .agents/skills/shadcn-ui/scripts/validate-component.ts <component-name>
 *
 * Output (JSON):
 *   {
 *     "component": "button",
 *     "localExists": true,
 *     "localPath": "src/components/ui/button.tsx",
 *     "registryExists": true,
 *     "docsUrl": "https://ui.shadcn.com/docs/components/button",
 *     "pm": "bunx"
 *   }
 */

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";

const componentName = Bun.argv[2];
if (!componentName) {
  console.error("Usage: validate-component.ts <component-name>");
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
  // Check package.json imports (e.g. "#/*": "./src/*")
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

  // Check tsconfig paths
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

  // Fallback heuristics
  if (alias.startsWith("@/") || alias.startsWith("~/")) {
    return join("src", alias.slice(2));
  }
  if (alias.startsWith("#/")) {
    return join("src", alias.slice(2));
  }

  return alias.replace(/^[@#~]\//, "");
}

const uiPath = resolveAlias(uiAlias);
const componentPath = join(uiPath, `${componentName}.tsx`);
const localExists = existsSync(componentPath);

let registryExists = false;
let registryOutput = "";
try {
  const cmd = `${pm} shadcn@latest add ${componentName} --dry-run --yes`;
  registryOutput = execSync(cmd, {
    encoding: "utf8",
    timeout: 60000,
    stdio: ["pipe", "pipe", "pipe"],
  });
  if (!registryOutput.includes("was not found") && !registryOutput.includes("not found")) {
    registryExists = true;
  }
} catch (e: unknown) {
  const err = e as { stdout?: string; stderr?: string };
  const combined = (err.stdout || "") + (err.stderr || "");
  if (!combined.includes("was not found") && !combined.includes("not found")) {
    registryExists = true;
    registryOutput = combined;
  }
}

const style = componentsJson.style || "";
const docsBase = "https://ui.shadcn.com/docs/components";
const docsUrl = style ? `${docsBase}/${style}/${componentName}` : `${docsBase}/${componentName}`;

console.log(
  JSON.stringify(
    {
      component: componentName,
      localExists,
      localPath: localExists ? componentPath : null,
      registryExists,
      docsUrl,
      pm,
    },
    null,
    2
  )
);
