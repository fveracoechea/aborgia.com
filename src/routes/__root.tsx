import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import ParaglideLocaleSwitcher from "#/components/LocaleSwitcher";
import { getLocale } from "#/paraglide/runtime";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	beforeLoad: async () => {
		// Other redirect strategies are possible; see
		// https://github.com/TanStack/router/tree/main/examples/react/i18n-paraglide#offline-redirect
		if (typeof document !== "undefined") {
			document.documentElement.setAttribute("lang", getLocale());
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
