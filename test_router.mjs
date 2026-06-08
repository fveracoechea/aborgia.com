// Mock browser environment
globalThis.window = {
  location: { href: "http://localhost:3000/es/client-consent", origin: "http://localhost:3000" },
  history: { replaceState: () => {}, pushState: () => {} },
  addEventListener: () => {},
  removeEventListener: () => {},
  scrollTo: () => {},
  scrollX: 0,
  scrollY: 0,
};
globalThis.document = {
  documentElement: { setAttribute: () => {} },
  addEventListener: () => {},
  removeEventListener: () => {},
};
globalThis.navigator = { languages: ["en-US", "en"] };

import { createRouter, createMemoryHistory } from "@tanstack/react-router";
import { routeTree } from "./src/routeTree.gen.ts";
import { deLocalizeUrl, localizeUrl } from "./src/paraglide/runtime.js";

const router = createRouter({
  routeTree,
  history: createMemoryHistory({ initialEntries: ["/es/client-consent"] }),
  rewrite: {
    input: ({ url }) => deLocalizeUrl(url),
    output: ({ url }) => localizeUrl(url),
  },
});

console.log("Processed tree type:", typeof router.processedTree);
console.log("Processed tree:", router.processedTree);
console.log("Processed tree keys:", Object.keys(router.processedTree));
