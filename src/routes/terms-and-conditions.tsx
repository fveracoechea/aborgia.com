import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import Logo from "#/assets/logo.svg?react";
import { Footer } from "#/components/Footer";
import { insuranceData } from "#/data/insurance";
import { m } from "#/paraglide/messages";
import { getSeoMeta } from "#/utils/seo";

export const Route = createFileRoute("/terms-and-conditions")({
	component: TermsAndConditions,
	head: () => {
		const seo = getSeoMeta({
			title: m.terms_meta_title(),
			description: m.terms_meta_description(),
			path: "/terms-and-conditions",
		});
		return seo;
	},
});

function TermsAndConditions() {
	const responsibilities = [
		m.terms_responsibilities_1,
		m.terms_responsibilities_2,
		m.terms_responsibilities_3,
		m.terms_responsibilities_4,
	];

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="bg-foreground text-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16 lg:h-20">
						<Link to="/" className="flex items-center gap-2">
							<Logo className="h-8 w-auto text-background fill-current" />
						</Link>
						<nav className="hidden md:flex items-center gap-1">
							<Link
								to="/"
								className="px-4 py-2 text-sm font-medium rounded-lg !text-background hover:bg-background/10 transition-all"
							>
								{m.nav_home()}
							</Link>
						</nav>
					</div>
				</div>
			</header>

			{/* Hero */}
			<div className="bg-foreground text-background pb-16">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-sm !text-background/90 hover:!text-background underline underline-offset-4 !decoration-background/40 hover:!decoration-background transition-colors mb-6"
					>
						<ArrowLeft className="w-4 h-4" /> {m.nav_back_to_home()}
					</Link>
					<h1 className="text-4xl md:text-5xl font-bold text-primary brightness-140">
						{m.terms_title()}
					</h1>
					<p className="text-background/80 mt-4">{m.terms_last_updated()}</p>
				</div>
			</div>

			{/* Content */}
			<main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="prose prose-lg max-w-none text-foreground">
					<section className="mb-12">
						<p className="text-muted-foreground leading-relaxed">
							{m.terms_welcome()}
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.terms_acceptance_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{m.terms_acceptance_text()}
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.terms_forms_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{m.terms_forms_text()}
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.terms_responsibilities_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-4">
							{m.terms_responsibilities_intro()}
						</p>
						<ul className="space-y-2 text-muted-foreground">
							{responsibilities.map((item) => (
								<li key={item()} className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
									{item()}
								</li>
							))}
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.terms_ip_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{m.terms_ip_text()}
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.terms_liability_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{m.terms_liability_text()}
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.terms_indemnification_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{m.terms_indemnification_text()}
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.terms_changes_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{m.terms_changes_text()}
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.terms_termination_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{m.terms_termination_text()}
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.terms_governing_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{m.terms_governing_text()}
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.terms_contact_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-6">
							{m.terms_contact_intro()}
						</p>
						<div className="bg-muted rounded-xl p-6 space-y-4">
							<a
								href={insuranceData.contact.emailHref}
								className="flex items-center gap-4 group"
							>
								<div className="w-12 h-12 rounded-full bg-card flex items-center justify-center shrink-0">
									<Mail className="w-5 h-5 text-foreground" />
								</div>
								<div>
									<p className="text-sm text-muted-foreground">
										{m.contact_email_label()}
									</p>
									<p className="font-medium text-foreground group-hover:text-primary transition-colors">
										{insuranceData.contact.email}
									</p>
								</div>
							</a>
							<a
								href={insuranceData.contact.phoneHref}
								className="flex items-center gap-4 group"
							>
								<div className="w-12 h-12 rounded-full bg-card flex items-center justify-center shrink-0">
									<Phone className="w-5 h-5 text-foreground" />
								</div>
								<div>
									<p className="text-sm text-muted-foreground">
										{m.contact_phone_label()}
									</p>
									<p className="font-medium text-foreground group-hover:text-primary transition-colors">
										{insuranceData.contact.phone}
									</p>
								</div>
							</a>
						</div>
					</section>
				</div>
			</main>

			<Footer />
		</div>
	);
}
