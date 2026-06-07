import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import Logo from "#/assets/logo.svg?react";
import { Footer } from "#/components/Footer";
import { insuranceData } from "#/data/insurance";

export const Route = createFileRoute("/terms-and-conditions")({
	component: TermsAndConditions,
});

function TermsAndConditions() {
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
								Home
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
						<ArrowLeft className="w-4 h-4" /> Back to Home
					</Link>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight">
						Terms & Conditions
					</h1>
					<p className="text-background/60 mt-4">
						Last updated: June 6, 2026 · Smyrna, GA
					</p>
				</div>
			</div>

			{/* Content */}
			<main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="prose prose-lg max-w-none text-foreground">
					<section className="mb-12">
						<p className="text-muted-foreground leading-relaxed">
							Welcome to{" "}
							<strong className="text-foreground">aborgia.com</strong> ("us,"
							"we," or "our"). By accessing or using our website and the forms
							provided, you agree to comply with and be bound by the following
							terms and conditions. Please read these Terms &amp; Conditions
							carefully before using the website.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							1. Acceptance of Terms
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							By accessing or using our website and forms, you agree to these
							Terms &amp; Conditions. If you do not agree to these terms in
							full, please do not use our website.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							2. Use of Website Forms
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Our website provides quote forms, contact forms, and feedback
							forms for your convenience. By submitting information through
							these forms, you agree to provide accurate, current, and complete
							information to the best of your knowledge.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							3. User Responsibilities
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-4">
							You agree to use our website and forms for lawful purposes only
							and in a manner consistent with these Terms &amp; Conditions. You
							shall not:
						</p>
						<ul className="space-y-2 text-muted-foreground">
							{[
								"Use the website for any unauthorized or unlawful purpose",
								"Submit false, misleading, or malicious information through the forms",
								"Attempt to disrupt, interfere with, or compromise the operation of the website or forms",
								"Violate any applicable laws, regulations, or third-party rights",
							].map((item) => (
								<li key={item} className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
									{item}
								</li>
							))}
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							4. Intellectual Property
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							All content on{" "}
							<strong className="text-foreground">aborgia.com</strong>,
							including text, logos, graphics, and forms, is protected by
							copyright and other intellectual property laws. You agree not to
							reproduce, distribute, modify, or create derivative works based on
							our content without our prior written consent.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							5. Limitation of Liability
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							We strive to provide accurate and up-to-date information on our
							website and forms. However, we do not guarantee the accuracy,
							completeness, or reliability of any content. You use our website
							and forms at your own risk. We are not liable for any direct,
							indirect, incidental, or consequential damages arising from your
							use of the site.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							6. Indemnification
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							You agree to indemnify and hold us harmless from any claims,
							damages, liabilities, and expenses (including reasonable legal
							fees) arising from your use of our website and forms, or your
							violation of these Terms &amp; Conditions.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							7. Changes to These Terms
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							We reserve the right to modify or update these Terms &amp;
							Conditions at any time. The updated terms will be posted on this
							page, and your continued use of the website after any changes
							signifies your acceptance of the modified terms. We encourage you
							to review this page periodically.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							8. Termination
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							We reserve the right to terminate or suspend your access to our
							website and forms, with or without notice, for any reason,
							including violation of these terms or conduct that we determine to
							be harmful to us or other users.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							9. Governing Law
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							These Terms &amp; Conditions are governed by and construed in
							accordance with the laws of the State of Georgia, without regard
							to its conflict of laws principles.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-bold text-foreground mb-4">
							10. Contact Us
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-6">
							If you have any questions or concerns about these Terms &amp;
							Conditions, please reach out to us:
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
									<p className="text-sm text-muted-foreground">Email</p>
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
									<p className="text-sm text-muted-foreground">Phone</p>
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
