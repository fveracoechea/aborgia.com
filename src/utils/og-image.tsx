import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

// Cache font buffers in memory to avoid repeated reads/fetches
const fontCache = new Map<string, ArrayBuffer>();

async function loadFont(family: string, weight: number, url: string): Promise<ArrayBuffer> {
	const cacheKey = `${family}-${weight}`;
	const cached = fontCache.get(cacheKey);
	if (cached) {
		return cached;
	}

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Failed to load font ${family} from ${url}: ${response.status}`);
	}
	const buffer = await response.arrayBuffer();
	fontCache.set(cacheKey, buffer);
	return buffer;
}

async function getFonts() {
	const [geistRegular, geistBold, outfitBold] = await Promise.all([
		loadFont(
			"Geist",
			400,
			"https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4nQ.ttf",
		),
		loadFont(
			"Geist",
			700,
			"https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4nQ.ttf",
		),
		loadFont(
			"Outfit",
			700,
			"https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C4E.ttf",
		),
	]);

	return [
		{ name: "Geist", data: geistRegular, weight: 400 as const, style: "normal" as const },
		{ name: "Geist", data: geistBold, weight: 700 as const, style: "normal" as const },
		{ name: "Outfit", data: outfitBold, weight: 700 as const, style: "normal" as const },
	];
}

// Theme colors extracted from src/styles.css
const THEME = {
	background: "#e7f3ec",
	foam: "#f3faf5",
	seaInk: "#173a40",
	seaInkSoft: "#416166",
	lagoon: "#4fb8b2",
	lagoonDeep: "#328f97",
	palm: "#2f6a4a",
	sand: "#e7f0e8",
	white: "#ffffff",
	primary: "oklch(0.52 0.105 223.128)",
};

export interface OgImageProps {
	title: string;
	description: string;
	locale?: string;
	tagline?: string;
	insuranceLabel?: string;
}

function OgImageTemplate({
	title,
	description,
	tagline = "Licensed insurance agent with national and international experience",
	insuranceLabel = "INSURANCE",
}: OgImageProps) {

	return (
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				background: `linear-gradient(135deg, ${THEME.background} 0%, ${THEME.foam} 50%, ${THEME.sand} 100%)`,
				position: "relative",
				overflow: "hidden",
				padding: 60,
			}}
		>
			{/* Decorative radial blobs */}
			<div
				style={{
					position: "absolute",
					top: -100,
					left: -100,
					width: 500,
					height: 500,
					borderRadius: "50%",
					background: `radial-gradient(circle, rgba(79, 184, 178, 0.25) 0%, transparent 70%)`,
				}}
			/>
			<div
				style={{
					position: "absolute",
					bottom: -80,
					right: -80,
					width: 400,
					height: 400,
					borderRadius: "50%",
					background: `radial-gradient(circle, rgba(47, 106, 74, 0.15) 0%, transparent 70%)`,
				}}
			/>

			{/* Main card */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "center",
					width: "100%",
					maxWidth: 960,
					padding: 48,
					background: "rgba(255, 255, 255, 0.74)",
					borderRadius: 24,
					border: "1px solid rgba(23, 58, 64, 0.14)",
					boxShadow: "0 22px 44px rgba(30, 90, 72, 0.1), 0 6px 18px rgba(23, 58, 64, 0.08)",
					position: "relative",
					zIndex: 1,
				}}
			>
				{/* Kicker / badge */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 8,
						marginBottom: 20,
					}}
				>
					<div
						style={{
							width: 8,
							height: 8,
							borderRadius: "50%",
							backgroundColor: THEME.lagoon,
						}}
					/>
					<span
						style={{
							fontFamily: "Geist",
							fontSize: 18,
							fontWeight: 700,
							letterSpacing: "0.16em",
							textTransform: "uppercase",
							color: "rgba(47, 106, 74, 0.9)",
						}}
					>
						{insuranceLabel}
					</span>
				</div>

				{/* Title */}
				<h1
					style={{
						fontFamily: "Outfit",
						fontSize: 64,
						fontWeight: 700,
						lineHeight: 1.15,
						color: THEME.seaInk,
						margin: 0,
						marginBottom: 20,
						letterSpacing: "-0.02em",
					}}
				>
					{title}
					<span style={{ color: THEME.lagoonDeep }}>.</span>
				</h1>

				{/* Description */}
				<p
					style={{
						fontFamily: "Geist",
						fontSize: 28,
						fontWeight: 400,
						lineHeight: 1.4,
						color: THEME.seaInkSoft,
						margin: 0,
						marginBottom: 32,
						maxWidth: 700,
					}}
				>
					{description}
				</p>

				{/* Bottom row: tagline + accent line */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 16,
						width: "100%",
					}}
				>
					<div
						style={{
							width: 48,
							height: 3,
							backgroundColor: THEME.lagoon,
							borderRadius: 2,
							flexShrink: 0,
						}}
					/>
					<span
						style={{
							fontFamily: "Geist",
							fontSize: 20,
							fontWeight: 500,
							color: THEME.seaInkSoft,
							letterSpacing: "0.02em",
						}}
					>
						{tagline}
					</span>
				</div>
			</div>

			{/* Bottom brand mark */}
			<div
				style={{
					position: "absolute",
					bottom: 32,
					right: 48,
					display: "flex",
					alignItems: "center",
					gap: 12,
					zIndex: 2,
				}}
			>
				<div
					style={{
						width: 10,
						height: 10,
						borderRadius: "50%",
						backgroundColor: THEME.lagoon,
					}}
				/>
				<span
					style={{
						fontFamily: "Geist",
						fontSize: 16,
						fontWeight: 700,
						color: THEME.seaInkSoft,
						letterSpacing: "0.08em",
						textTransform: "uppercase",
					}}
				>
					aborgia.com
				</span>
			</div>
		</div>
	);
}

export async function generateOgImage(props: OgImageProps): Promise<Buffer> {
	const fonts = await getFonts();
	const svg = await satori(<OgImageTemplate {...props} />, {
		width: 1200,
		height: 630,
		fonts,
	});

	const resvg = new Resvg(svg);
	const pngData = resvg.render();
	return pngData.asPng();
}
