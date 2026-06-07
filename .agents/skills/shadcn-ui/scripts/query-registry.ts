#!/usr/bin/env bun
/**
 * query-registry.ts
 *
 * Search the official @shadcn registry for components matching a query.
 *
 * Usage:
 *   bun run .agents/skills/shadcn-ui/scripts/query-registry.ts <query>
 *
 * Output (JSON):
 *   {
 *     "query": "button",
 *     "items": [
 *       { "name": "button", "type": "registry:ui", "registry": "@shadcn", "addCommandArgument": "@shadcn/button" }
 *     ]
 *   }
 */

import { existsSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";

const query = Bun.argv[2];
if (!query) {
  console.error("Usage: query-registry.ts <query>");
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

interface RegistryItem {
  name: string;
  type: string;
  registry: string;
  addCommandArgument: string;
}

interface SearchResponse {
  pagination?: {
    total: number;
    offset: number;
    limit: number;
    hasMore: boolean;
  };
  items: RegistryItem[];
}

try {
  const cmd = `${pm} shadcn@latest search @shadcn --query "${query}" --limit 20`;
  const output = execSync(cmd, {
    encoding: "utf8",
    timeout: 60000,
    stdio: ["pipe", "pipe", "pipe"],
  });

  const data = JSON.parse(output) as SearchResponse;
  console.log(
    JSON.stringify(
      {
        query,
        total: data.pagination?.total ?? 0,
        items: data.items || [],
      },
      null,
      2
    )
  );
} catch (e: unknown) {
  const err = e as { stderr?: string; stdout?: string; message?: string };
  const message = err.stderr || err.stdout || err.message || "";
  console.error(
    JSON.stringify(
      {
        query,
        error: true,
        message: message.trim(),
      },
      null,
      2
    )
  );
  process.exit(1);
}
