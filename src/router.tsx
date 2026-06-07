import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { deLocalizeUrl, localizeUrl, getLocale } from "#/paraglide/runtime";

export function getRouter() {
	console.log("[router] getLocale() in getRouter():", getLocale());

	const router = createTanStackRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		rewrite: {
			input: ({ url }) => deLocalizeUrl(url),
			output: ({ url }) => localizeUrl(url),
		},
	});

	console.log("[router] created, options:", router.options);
	console.log("[router] routeTree:", router.routeTree);
	console.log("[router] rewrite:", router.rewrite);
	console.log("[router] routesById:", router.routesById);

	return router;
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
