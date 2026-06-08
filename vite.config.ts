import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { prerenderRoutes } from "./prerender-routes";

const config = defineConfig({
	resolve: {
		tsconfigPaths: true,
		alias: {
			html2canvas: "html2canvas-pro",
		},
	},
	optimizeDeps: {
		include: ["html2canvas-pro"],
		exclude: ["satori", "@resvg/resvg-js"],
	},
	plugins: [
		devtools(),
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/paraglide",
			outputStructure: "message-modules",
			cookieName: "PARAGLIDE_LOCALE",
			strategy: ["url", "cookie", "preferredLanguage", "baseLocale"],
			urlPatterns: [
				{
					pattern: "/:path(.*)?",
					localized: [
						["es", "/es/:path(.*)?"],
						["en", "/:path(.*)?"],
					],
				},
			],
		}),
		nitro({ preset: "bun", rollupConfig: { external: [/^@sentry\//] } }),
		tailwindcss(),
		tanstackStart({
			server: {
				entry: "./server.ts",
			},
			pages: prerenderRoutes,
		}),
		viteReact(),
		svgr(),
	],
});

export default config;
