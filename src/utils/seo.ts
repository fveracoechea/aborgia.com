import { getLocale } from "#/paraglide/runtime";
import { m } from "#/paraglide/messages";

const BASE_URL = "https://aborgia.com";

export function getSeoMeta({
	title,
	description,
	path,
	image,
	keywords,
}: {
	title: string;
	description: string;
	path: string;
	image?: string;
	keywords?: string;
}) {
	const locale = getLocale();
	const url = `${BASE_URL}${path}`;
	const defaultOg = `${BASE_URL}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&locale=${locale}`;
	const ogImage = image
		? image.startsWith("http")
			? image
			: `${BASE_URL}${image}`
		: defaultOg;

	const meta = [
		{ title: title },
		{ name: "description", content: description },
		keywords ? { name: "keywords", content: keywords } : null,
		{ name: "author", content: "Arelys Borgia - Aborgia Insurance" },
		{ name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: url },
		{ property: "og:image", content: ogImage },
		{ property: "og:image:width", content: "1200" },
		{ property: "og:image:height", content: "630" },
		{ property: "og:locale", content: locale === "es" ? "es_ES" : "en_US" },
		{ property: "og:site_name", content: "Aborgia Insurance" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: ogImage },
	].filter((item): item is NonNullable<typeof item> => item !== null);

	const links = [
		{ rel: "canonical", href: url },
	];

	return { meta, links };
}

export function getDefaultTitle() {
	return m.meta_title();
}

export function getDefaultDescription() {
	return m.meta_description();
}

export function getDefaultKeywords() {
	return m.meta_keywords();
}
