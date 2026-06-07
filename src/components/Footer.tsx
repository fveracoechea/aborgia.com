import { Link } from "@tanstack/react-router";
import { ExternalLink, Mail, Phone } from "lucide-react";
import Logo from "#/assets/logo.svg?react";
import { insuranceData } from "#/data/insurance";

export function Footer() {
	return (
		<footer className="bg-foreground text-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
					{/* Brand & About */}
					<div className="space-y-4 col-span-2">
						<Link to="/" className="inline-block">
							<Logo className="h-14 w-auto text-background fill-current" />
						</Link>
						<p className="text-lg font-medium text-background/90 leading-snug">
							{insuranceData.footer.tagline}
						</p>
						<p className="text-sm text-background/60 leading-relaxed">
							{insuranceData.footer.about}
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider text-background/60 mb-4">
							Quick Links
						</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="/#hero"
									className="text-background/70 hover:text-background transition-colors text-sm"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="/#about"
									className="text-background/70 hover:text-background transition-colors text-sm"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="/#offerings"
									className="text-background/70 hover:text-background transition-colors text-sm"
								>
									Services
								</a>
							</li>
							<li>
								<a
									href="/#contact"
									className="text-background/70 hover:text-background transition-colors text-sm"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider text-background/60 mb-4">
							Contact
						</h3>
						<div className="space-y-3">
							<a
								href={insuranceData.contact.phoneHref}
								className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
							>
								<Phone className="w-4 h-4" />
								{insuranceData.contact.phone}
							</a>
							<a
								href={insuranceData.contact.emailHref}
								className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
							>
								<Mail className="w-4 h-4" />
								{insuranceData.contact.email}
							</a>
							<a
								href={insuranceData.contact.instagramHref}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
							>
								<ExternalLink className="w-4 h-4" />
								{insuranceData.contact.instagram}
							</a>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
					<p>© {new Date().getFullYear()} Aborgia Insurance</p>
					<div className="flex items-center gap-6">
					<Link
						to="/privacy-policy"
						className="hover:text-background transition-colors"
					>
						Privacy Policy
					</Link>
					<Link
						to="/client-consent"
						className="hover:text-background transition-colors"
					>
						Client Consent
					</Link>
					<Link
						to="/terms-and-conditions"
						className="hover:text-background transition-colors"
					>
						Terms & Conditions
					</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
