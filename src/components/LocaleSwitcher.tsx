// Locale switcher refs:
// - Paraglide docs: https://inlang.com/m/gerre34r/library-inlang-paraglideJs
// - Router example: https://github.com/TanStack/router/tree/main/examples/react/i18n-paraglide#switching-locale

import { LanguagesIcon } from "lucide-react";
import { m } from "#/paraglide/messages";
import { getLocale, locales, setLocale } from "#/paraglide/runtime";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const localeLabels: Record<string, () => string> = {
	en: m.locale_label_en,
	es: m.locale_label_es,
};

export default function ParaglideLocaleSwitcher() {
	const currentLocale = getLocale();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size="xs" variant="secondary" className="shadow-xl border">
					<LanguagesIcon className="size-4" />
					<span className="">{localeLabels[currentLocale]?.()}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuGroup>
					<DropdownMenuLabel>{m.languages_label()}</DropdownMenuLabel>
					{locales.map((locale) => (
						<DropdownMenuItem
							key={locale}
							onClick={() => setLocale(locale)}
							aria-pressed={locale === currentLocale}
						>
							{localeLabels[locale]?.() ?? locale.toUpperCase()}
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
