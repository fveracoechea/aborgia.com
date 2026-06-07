import {
	createStartHandler,
	defaultStreamHandler,
} from "@tanstack/react-start/server";
import { createServerEntry } from "@tanstack/react-start/server-entry";
import { paraglideMiddleware } from "#/paraglide/server";

const fetch = createStartHandler(defaultStreamHandler);

export default createServerEntry({
	async fetch(req) {
		return paraglideMiddleware(req, () => fetch(req));
	},
});
