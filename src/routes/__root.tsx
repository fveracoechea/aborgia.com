import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	redirect,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import ParaglideLocaleSwitcher from "#/components/LocaleSwitcher";
import { getLocale, shouldRedirect } from "#/paraglide/runtime";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	headers() {
		return {
			// https://tanstack.com/start/latest/docs/framework/react/guide/isr#marketing-landing-pages
			// Long cache for stable content
			"Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
		};
	},
	staleTime: 60 * 60_000, // 1 hour client-side
	async beforeLoad({ location }) {
		const decision = await shouldRedirect({ url: location.href });
		if (decision.redirectUrl) {
			throw redirect({ href: decision.redirectUrl.href });
		}
	},

	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				sizes: "any",
			},
			{
				rel: "icon",
				href: "/logo192.png",
				type: "image/png",
			},
			{
				rel: "apple-touch-icon",
				href: "/logo192.png",
			},
			{
				rel: "manifest",
				href: "/manifest.json",
			},
		],
	}),
	shellComponent: RootDocument,
});

const structuredData = {
	"@context": "https://schema.org",
	"@type": "InsuranceAgent",
	name: "Aborgia Insurance",
	image: "https://aborgia.com/logo512.png",
	url: "https://aborgia.com",
	telephone: "+1-404-513-1683",
	email: "aborgiainsurance@gmail.com",
	address: {
		"@type": "PostalAddress",
		addressLocality: "Smyrna",
		addressRegion: "GA",
		addressCountry: "US",
	},
	areaServed: {
		"@type": "Country",
		name: "United States",
	},
	priceRange: "$$",
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
				"Sunday",
			],
			opens: "00:00",
			closes: "23:59",
		},
	],
	knowsAbout: [
		"Health Insurance",
		"Life Insurance",
		"Final Expenses Insurance",
		"Mortgage Protection Insurance",
		"Obamacare",
		"Affordable Care Act",
		"ACA Marketplace",
	],
	contactPoint: {
		"@type": "ContactPoint",
		telephone: "+1-404-513-1683",
		contactType: "Insurance Agent",
		areaServed: "US",
		availableLanguage: ["English", "Spanish"],
	},
};

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang={getLocale()}>
			<head>
				<HeadContent />
				<script type="application/ld+json">
					{JSON.stringify(structuredData)}
				</script>
			</head>
			<body>
				{children}
				<div className="fixed bottom-4 left-4 z-50">
					<ParaglideLocaleSwitcher />
				</div>
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
