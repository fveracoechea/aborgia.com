import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import Logo from "#/assets/logo.svg?react";
import { Footer } from "#/components/Footer";
import { insuranceData } from "#/data/insurance";
import { m } from "#/paraglide/messages";
import { getSeoMeta } from "#/utils/seo";

export const Route = createFileRoute("/privacy-policy")({
	component: PrivacyPolicy,
	head: () => {
		const seo = getSeoMeta({
			title: m.privacy_meta_title(),
			description: m.privacy_meta_description(),
			path: "/privacy-policy",
		});
		return seo;
	},
});

function PrivacyPolicy() {
	const infoTypes = [
		m.privacy_info_types_1,
		m.privacy_info_types_2,
		m.privacy_info_types_3,
		m.privacy_info_types_4,
		m.privacy_info_types_5,
		m.privacy_info_types_6,
		m.privacy_info_types_7,
		m.privacy_info_types_8,
	];

	const methods = [
		m.privacy_methods_1,
		m.privacy_methods_2,
		m.privacy_methods_3,
		m.privacy_methods_4,
	];

	const purposes = [
		m.privacy_purpose_1,
		m.privacy_purpose_2,
		m.privacy_purpose_3,
		m.privacy_purpose_4,
		m.privacy_purpose_5,
	];

	const legalGrounds = [
		m.privacy_legal_1,
		m.privacy_legal_2,
		m.privacy_legal_3,
		m.privacy_legal_4,
	];

	const sharing = [
		m.privacy_sharing_1,
		m.privacy_sharing_2,
		m.privacy_sharing_3,
		m.privacy_sharing_4,
	];

	const cookies = [
		m.privacy_cookies_1,
		m.privacy_cookies_2,
		m.privacy_cookies_3,
		m.privacy_cookies_4,
	];

	const rights = [
		m.privacy_rights_1,
		m.privacy_rights_2,
		m.privacy_rights_3,
		m.privacy_rights_4,
		m.privacy_rights_5,
		m.privacy_rights_6,
		m.privacy_rights_7,
	];

	const security = [
		m.privacy_security_1,
		m.privacy_security_2,
		m.privacy_security_3,
		m.privacy_security_4,
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
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight">
						{m.privacy_title()}
					</h1>
					<p className="text-background/60 mt-4">{m.privacy_last_updated()}</p>
				</div>
			</div>

			{/* Content */}
			<main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="prose prose-lg max-w-none text-foreground">
					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.privacy_intro_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{m.privacy_intro_text()}
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.privacy_info_types_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-4">
							{m.privacy_info_types_intro()}
						</p>
						<ul className="space-y-2 text-muted-foreground">
							{infoTypes.map((item) => (
								<li key={item()} className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
									{item()}
								</li>
							))}
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.privacy_methods_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-4">
							{m.privacy_methods_intro()}
						</p>
						<ul className="space-y-2 text-muted-foreground">
							{methods.map((item) => (
								<li key={item()} className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
									{item()}
								</li>
							))}
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.privacy_purpose_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-4">
							{m.privacy_purpose_intro()}
						</p>
						<ul className="space-y-2 text-muted-foreground">
							{purposes.map((item) => (
								<li key={item()} className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
									{item()}
								</li>
							))}
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.privacy_legal_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-4">
							{m.privacy_legal_intro()}
						</p>
						<ul className="space-y-2 text-muted-foreground">
							{legalGrounds.map((item) => (
								<li key={item()} className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
									{item()}
								</li>
							))}
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.privacy_sharing_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-4">
							{m.privacy_sharing_intro()}
						</p>
						<ul className="space-y-2 text-muted-foreground">
							{sharing.map((item) => (
								<li key={item()} className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
									{item()}
								</li>
							))}
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.privacy_cookies_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-4">
							{m.privacy_cookies_intro()}
						</p>
						<ul className="space-y-2 text-muted-foreground">
							{cookies.map((item) => (
								<li key={item()} className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
									{item()}
								</li>
							))}
						</ul>
						<p className="text-muted-foreground leading-relaxed mt-4">
							{m.privacy_cookies_outro()}
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.privacy_rights_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-4">
							{m.privacy_rights_intro()}
						</p>
						<ul className="space-y-2 text-muted-foreground">
							{rights.map((item) => (
								<li key={item()} className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
									{item()}
								</li>
							))}
						</ul>
						<p className="text-muted-foreground leading-relaxed mt-4">
							{m.privacy_rights_outro()}
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.privacy_security_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-4">
							{m.privacy_security_intro()}
						</p>
						<ul className="space-y-2 text-muted-foreground">
							{security.map((item) => (
								<li key={item()} className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
									{item()}
								</li>
							))}
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.privacy_retention_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{m.privacy_retention_text()}
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.privacy_children_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{m.privacy_children_text()}
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.privacy_updates_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{m.privacy_updates_text()}
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							{m.privacy_contact_title()}
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-6">
							{m.privacy_contact_intro()}
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
