// Locale switcher refs:
// - Paraglide docs: https://inlang.com/m/gerre34r/library-inlang-paraglideJs
// - Router example: https://github.com/TanStack/router/tree/main/examples/react/i18n-paraglide#switching-locale

import { m } from "#/paraglide/messages";
import { getLocale, locales, setLocale } from "#/paraglide/runtime";

const localeLabels: Record<string, () => string> = {
	en: m.locale_label_en,
	es: m.locale_label_es,
};

export default function ParaglideLocaleSwitcher() {
	const currentLocale = getLocale();

	return (
		<nav
			className="flex items-center gap-2 text-sm"
			aria-label={m.language_label()}
		>
			{locales.map((locale) => (
				<button
					type="button"
					key={locale}
					onClick={() => setLocale(locale)}
					aria-pressed={locale === currentLocale}
					className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-colors ${
						locale === currentLocale
							? "bg-primary text-primary-foreground border-primary"
							: "bg-transparent text-foreground border-border hover:border-primary/60"
					}`}
				>
					{localeLabels[locale]?.() ?? locale.toUpperCase()}
				</button>
			))}
		</nav>
	);
}
