import { createFileRoute } from "@tanstack/react-router";
import { getLocale } from "#/paraglide/runtime";
import { m } from "#/paraglide/messages";
import { generateOgImage } from "#/utils/og-image";

export const Route = createFileRoute("/api/og")({
	server: {
		handlers: {
			GET: async ({ request }) => {
				const url = new URL(request.url);
				const rawLocale = url.searchParams.get("locale");
				const locale: "en" | "es" =
					rawLocale === "es" ? "es" : getLocale();
				const title =
					url.searchParams.get("title") || m.og_title({}, { locale });
				const description =
					url.searchParams.get("description") ||
					m.og_description({}, { locale });

				try {
					const png = await generateOgImage({
						title,
						description,
						locale,
						tagline: m.og_tagline({}, { locale }),
						insuranceLabel: m.og_insurance_label({}, { locale }),
					});

					return new Response(png as unknown as BodyInit, {
						headers: {
							"Content-Type": "image/png",
							"Cache-Control": "public, max-age=86400, immutable",
						},
					});
				} catch (error) {
					console.error("OG image generation failed:", error);
					return new Response("Failed to generate image", {
						status: 500,
					});
				}
			},
		},
	},
});
