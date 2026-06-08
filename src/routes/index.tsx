import { createFileRoute } from "@tanstack/react-router";
import {
	ArrowRight,
	ArrowUpRight,
	Award,
	ChevronRight,
	Clock,
	ExternalLink,
	Heart,
	Home,
	Mail,
	Menu,
	Phone,
	Shield,
	Stethoscope,
	Users,
	X,
} from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "#/assets/logo.svg?react";
import { Footer } from "#/components/Footer";
import { Button } from "#/components/ui/button";
import { insuranceData } from "#/data/insurance";
import { m } from "#/paraglide/messages";
import { getSeoMeta } from "#/utils/seo";

const iconMap = {
	Shield: Shield,
	Heart: Heart,
	Home: Home,
	Stethoscope: Stethoscope,
};

export const Route = createFileRoute("/")({
	component: HomePage,
	head: () => {
		const seo = getSeoMeta({
			title: m.meta_title(),
			description: m.meta_description(),
			path: "/",
			keywords: m.meta_keywords(),
		});
		return seo;
	},
});

function TrustBadges() {
	return (
		<div className="grid grid-cols-3 gap-2 sm:gap-4 sm:flex sm:flex-wrap">
			<div className="flex items-center gap-2 px-3 py-2 bg-muted border">
				<Award className="size-5 text-primary" />
				<span className="text-xs font-medium text-foreground">
					{m.badge_licensed()}
				</span>
			</div>
			<div className="flex items-center gap-2 px-3 py-2 bg-muted border">
				<Users className="size-5 text-primary" />
				<span className="text-xs font-medium text-foreground">
					{m.badge_family()}
				</span>
			</div>
			<div className="flex items-center gap-2 px-3 py-2 bg-muted border">
				<Clock className="size-5 text-primary" />
				<span className="text-xs font-medium text-foreground">
					{m.badge_available()}
				</span>
			</div>
		</div>
	);
}

const navLinks = [
	{ label: m.nav_home, href: "#hero" },
	{ label: m.nav_about, href: "#about" },
	{ label: m.nav_services, href: "#offerings" },
	{ label: m.nav_contact, href: "#contact" },
];

const offerings = [
	{
		title: m.offering_final_expenses_title,
		description: m.offering_final_expenses_desc,
		image: insuranceData.images.offerings[0],
		icon: "Shield" as const,
		benefits: [
			m.offering_final_expenses_benefit_1,
			m.offering_final_expenses_benefit_2,
			m.offering_final_expenses_benefit_3,
			m.offering_final_expenses_benefit_4,
		],
	},
	{
		title: m.offering_life_insurance_title,
		description: m.offering_life_insurance_desc,
		image: insuranceData.images.offerings[1],
		icon: "Heart" as const,
		benefits: [
			m.offering_life_insurance_benefit_1,
			m.offering_life_insurance_benefit_2,
			m.offering_life_insurance_benefit_3,
			m.offering_life_insurance_benefit_4,
		],
	},
	{
		title: m.offering_mortgage_protection_title,
		description: m.offering_mortgage_protection_desc,
		image: insuranceData.images.offerings[2],
		icon: "Home" as const,
		benefits: [
			m.offering_mortgage_protection_benefit_1,
			m.offering_mortgage_protection_benefit_2,
			m.offering_mortgage_protection_benefit_3,
			m.offering_mortgage_protection_benefit_4,
		],
	},
	{
		title: m.offering_obamacare_title,
		description: m.offering_obamacare_desc,
		image: insuranceData.images.offerings[3],
		icon: "Stethoscope" as const,
		benefits: [
			m.offering_obamacare_benefit_1,
			m.offering_obamacare_benefit_2,
			m.offering_obamacare_benefit_3,
			m.offering_obamacare_benefit_4,
		],
	},
];

function HomePage() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			const sections = ["hero", "about", "offerings", "contact"];
			for (const section of sections) {
				const el = document.getElementById(section);
				if (el) {
					const rect = el.getBoundingClientRect();
					if (rect.top <= 120 && rect.bottom >= 120) {
						setActiveSection(section);
						break;
					}
				}
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (href: string) => {
		const id = href.replace("#", "");
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
			setMobileMenuOpen(false);
		}
	};

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
					scrolled
						? "bg-background/90 backdrop-blur-md text-foreground shadow-sm border-border"
						: "bg-transparent border-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16 lg:h-20">
						<button
							type="button"
							onClick={() => scrollToSection("#hero")}
							className="flex items-center gap-2"
						>
							<Logo className="h-8 w-auto fill-current text-foreground" />
						</button>
						<nav className="hidden md:flex items-center gap-1">
							{navLinks.map((link) => {
								const isActive = activeSection === link.href.replace("#", "");
								return (
									<button
										type="button"
										key={link.href}
										onClick={() => scrollToSection(link.href)}
										className={`px-4 py-2 text-sm font-medium transition-all ${
											isActive
												? "text-foreground bg-foreground/10"
												: "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
										}`}
									>
										{link.label()}
									</button>
								);
							})}
							<Button
								size="sm"
								className="ml-4"
								onClick={() => scrollToSection("#contact")}
							>
								{m.cta_contact_us()}
							</Button>
						</nav>
						<button
							type="button"
							className="md:hidden p-2"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						>
							{mobileMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{mobileMenuOpen && (
					<div className="md:hidden bg-card text-foreground border-t border-border">
						<div className="px-4 py-4 flex flex-col gap-2">
							{navLinks.map((link) => (
								<button
									type="button"
									key={link.href}
									onClick={() => scrollToSection(link.href)}
									className="text-left text-sm font-medium py-2 px-4 rounded-lg hover:bg-foreground/5 text-foreground"
								>
									{link.label()}
								</button>
							))}
						</div>
					</div>
				)}
			</header>

			{/* Hero */}
			<section
				id="hero"
				className="relative min-h-screen flex items-center pt-25 sm:pt-20 overflow-hidden"
			>
				<div className="absolute top-0 right-0 w-1/2 h-full bg-foreground/5 -skew-x-12 translate-x-20" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
					<div className="grid lg:grid-cols-12 gap-8 items-center">
						<div className="lg:col-span-7 space-y-6 pb-4">
							<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-foreground">
								{m.hero_title_line1()}
								<br />
								<span className="text-primary">{m.hero_title_line2()}</span>
								<br />
								{m.hero_title_line3()}
							</h1>
							<p className="text-xl md:text-2xl text-muted-foreground max-w-lg font-medium">
								{m.hero_tagline()}
							</p>

							<div className="flex flex-wrap gap-4 flex-col sm:flex-row">
								<Button
									size="lg"
									className="text-base sm:h-14 sm:text-lg"
									onClick={() => scrollToSection("#contact")}
								>
									{m.cta_get_started()}{" "}
									<ArrowUpRight className="ml-1 size-5 sm:size-6" />
								</Button>

								<Button
									variant="outline"
									size="lg"
									className="text-base sm:h-14 sm:text-lg"
									onClick={() => scrollToSection("#offerings")}
								>
									{m.cta_view_services()}
								</Button>

								<TrustBadges />
							</div>
						</div>

						<div className="lg:col-span-5 relative px-6 py-12 sm:px-0 sm:py-0">
							<div className="relative">
								<div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
								<div className="aspect-[4/5] overflow-hidden shadow-2xl border">
									<video
										autoPlay
										muted
										loop
										playsInline
										className="w-full h-full object-cover"
										aria-label={m.aria_hero_video()}
									>
										<source
											src={
												insuranceData.images.hero[Math.floor(Math.random() * 3)]
											}
											type="video/mp4"
										/>
									</video>
								</div>
								<div className="absolute -bottom-4 -left-4 bg-foreground text-background p-4 shadow-xl">
									<p className="text-2xl font-bold">{m.hero_free()}</p>
									<p className="text-base text-background">
										{m.hero_free_label()}
									</p>
								</div>
								<div className="absolute -top-4 -right-4 bg-card p-2 shadow-xl border border-border">
									<div className="flex items-center gap-2">
										<div className="w-3 h-3 rounded-full bg-primary" />
										<span className="text-sm font-medium">
											{m.hero_broker_label()}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About */}
			<section id="about" className="py-24 lg:py-32 bg-muted text-foreground">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="order-2 lg:order-1">
							<img
								src={insuranceData.images.about}
								alt={m.about_title()}
								className="w-full border shadow-2xl"
							/>
						</div>
						<div className="order-1 lg:order-2 space-y-6">
							<span className="text-primary text-sm font-bold tracking-wider uppercase">
								{m.about_label()}
							</span>
							<h2 className="text-4xl md:text-5xl font-bold">
								{m.about_title()}
							</h2>
							<p className="text-lg text-muted-foreground leading-relaxed">
								{m.about_description()}
							</p>

							<TrustBadges />

							<div className="flex gap-8 pt-6">
								<div>
									<p className="text-xl font-bold text-primary">
										{m.about_stat1_label()}
									</p>
									<p className="text-sm text-muted-foreground">
										{m.about_stat1_desc()}
									</p>
								</div>
								<div>
									<p className="text-xl font-bold text-primary">
										{m.about_stat2_label()}
									</p>
									<p className="text-sm text-muted-foreground">
										{m.about_stat2_desc()}
									</p>
								</div>
								<div>
									<p className="text-xl font-bold text-primary">
										{m.about_stat3_label()}
									</p>
									<p className="text-sm text-muted-foreground">
										{m.about_stat3_desc()}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Offerings */}
			<section id="offerings" className="py-20 lg:py-32 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mb-16">
						<span className="text-primary text-sm font-bold tracking-wider uppercase">
							{m.services_section_label()}
						</span>
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
							{m.services_title_line1()}
							<br />
							{m.services_title_line2()}
						</h2>
					</div>

					<div className="space-y-22">
						{offerings.map((offering, index) => {
							const Icon =
								iconMap[offering.icon as keyof typeof iconMap] || Shield;
							const isEven = index % 2 === 0;
							return (
								<div
									key={offering.title()}
									className="grid lg:grid-cols-12 gap-8 items-center"
								>
									<div
										className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}
									>
										<div className="aspect-4/3 overflow-hidden shadow-lg group">
											<img
												src={offering.image}
												alt={offering.title()}
												className="w-full h-full object-cover transition-transform duration-700 border group-hover:scale-105"
											/>
										</div>
									</div>
									<div
										className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}
									>
										<div className="flex items-center gap-4 mb-4">
											<span className="text-7xl font-bold text-primary/25">
												0{index + 1}
											</span>
											<div className="size-12 bg-primary/15 flex items-center justify-center">
												<Icon className="size-6 text-primary" />
											</div>
										</div>
										<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
											{offering.title()}
										</h3>
										<p className="text-lg text-muted-foreground mb-6 leading-relaxed">
											{offering.description()}
										</p>
										<div className="grid sm:grid-cols-2 gap-3">
											{offering.benefits.map((benefit) => (
												<div
													key={benefit()}
													className="flex items-center gap-2 text-sm text-muted-foreground"
												>
													<div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
														<ChevronRight className="w-3 h-3 text-primary" />
													</div>
													{benefit()}
												</div>
											))}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Contact */}
			<section id="contact" className="py-24 lg:py-32 bg-muted">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-12 gap-12">
						<div className="lg:col-span-4">
							<span className="text-primary text-sm font-bold tracking-wider uppercase">
								{m.contact_section_label()}
							</span>
							<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
								{m.contact_title()}
							</h2>
							<p className="text-muted-foreground mt-4 text-lg leading-relaxed">
								{m.contact_description()}
							</p>
						</div>
						<div className="lg:col-span-8">
							<div className="space-y-4">
								<a
									href={insuranceData.contact.phoneHref}
									className="flex items-center gap-6 p-6 bg-card border border-border hover:border-foreground transition-all group hover:shadow-lg"
								>
									<div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center shrink-0">
										<Phone className="w-6 h-6 text-foreground" />
									</div>
									<div className="flex-1">
										<h3 className="text-lg font-bold text-foreground">
											{m.contact_phone_label()}
										</h3>
										<p className="text-muted-foreground">
											{insuranceData.contact.phone}
										</p>
									</div>
									<ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
								</a>

								<a
									href={insuranceData.contact.emailHref}
									className="flex items-center gap-6 p-6 bg-card border border-border hover:border-foreground transition-all group hover:shadow-lg"
								>
									<div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center shrink-0">
										<Mail className="w-6 h-6 text-foreground" />
									</div>
									<div className="flex-1">
										<h3 className="text-lg font-bold text-foreground">
											{m.contact_email_label()}
										</h3>
										<p className="text-muted-foreground text-sm">
											{insuranceData.contact.email}
										</p>
									</div>
									<ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
								</a>

								<a
									href={insuranceData.contact.instagramHref}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-6 p-6 bg-card border border-border hover:border-foreground transition-all group hover:shadow-lg"
								>
									<div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center shrink-0">
										<ExternalLink className="w-6 h-6 text-foreground" />
									</div>
									<div className="flex-1">
										<h3 className="text-lg font-bold text-foreground">
											{m.contact_instagram_label()}
										</h3>
										<p className="text-muted-foreground">
											{insuranceData.contact.instagram}
										</p>
									</div>
									<ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
