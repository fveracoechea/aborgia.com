import { localizeHref } from "./src/paraglide/runtime";

const baseRoutes = ["/", "/privacy-policy", "/terms-and-conditions", "/client-consent"];

export const prerenderRoutes = baseRoutes.flatMap((path) => [
	{ path, prerender: { enabled: true } },
	{ path: localizeHref(path, { locale: "es" }), prerender: { enabled: true } },
]);
