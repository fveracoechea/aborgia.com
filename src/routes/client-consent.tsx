import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { useState } from "react";
import Logo from "#/assets/logo.svg?react";
import { Footer } from "#/components/Footer";
import { FormField } from "#/components/FormField";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { Checkbox } from "#/components/ui/checkbox";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import { insuranceData } from "#/data/insurance";

export const Route = createFileRoute("/client-consent")({
	component: ClientConsent,
});

function ClientConsent() {
	const [fullName, setFullName] = useState("");

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
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-4">
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-sm !text-background/90 hover:!text-background underline underline-offset-4 !decoration-background/40 hover:!decoration-background transition-colors mb-6"
					>
						<ArrowLeft className="w-4 h-4" /> Back to Home
					</Link>
					<p className="text-lg text-background/80">Arelys Borgia</p>
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight">
						Client Consent Form
					</h1>
					<p className="text-lg text-background/80">
						CMS Marketplace Agents and Brokers
					</p>
				</div>
			</div>

			{/* Content */}
			<main className="space-y-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="space-y-12 max-w-none text-foreground">
					<section className="space-y-6">
						<p className="text-muted-foreground leading-relaxed mb-4">
							I,{" "}
							<span className="inline-block border-b border-muted-foreground min-w-[8rem] px-1 text-foreground font-medium">
								{fullName}
							</span>{" "}
							give my permission to <strong>Arelys Borgia</strong> to serve as
							the health insurance agent or broker for myself and my entire
							household if applicable, for purposes of enrollment in a Qualified
							Health Plan offered on the Federally Facilitated Marketplace. By
							consenting to this agreement, I authorize the above-mentioned
							Agent to view and use the confidential information provided by me
							in writing, electronically, or by telephone only for the purposes
							of one or more of the following:
						</p>
						<ul className="space-y-2 text-muted-foreground">
							{[
								"Searching for an existing Marketplace application;",
								"Completing an application for eligibility and enrollment in a Marketplace Qualified Health Plan or other government insurance affordability programs, such as Medicaid and CHIP or advance tax credits to help pay for Marketplace premiums;",
								"Providing ongoing account maintenance and enrollment assistance, as necessary;",
								"Responding to inquiries from the Marketplace regarding my Marketplace application.",
							].map((item) => (
								<li key={item} className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
									{item}
								</li>
							))}
						</ul>
						<p className="text-muted-foreground leading-relaxed">
							I understand that the Agent will not use or share my personally
							identifiable information (PII) for any purposes other than those
							listed above. The Agent will ensure that my PII is kept private
							and safe when collecting, storing, and using my PII for the stated
							purposes above.
						</p>
						<p className="text-muted-foreground leading-relaxed ">
							I confirm that the information I provide for entry on my
							Marketplace eligibility and enrollment application will be true to
							the best of my knowledge. I understand that I do not have to share
							additional personal information about myself or my health with my
							Agent beyond what is required on the application for eligibility
							and enrollment purposes. I understand that my consent remains in
							effect until I revoke it, and I may revoke or modify my consent at
							any time by sending an email to{" "}
							<a
								href={insuranceData.contact.emailHref}
								className="text-primary hover:underline"
							>
								aborgiainsurance@gmail.com
							</a>{" "}
							specifying my request.
						</p>
					</section>

					<section>
						<Card>
							<CardHeader>
								<CardTitle className="text-sm">Agent Information</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
									<div>
										<p className="text-xs text-muted-foreground uppercase font-medium">
											Name
										</p>
										<p className="font-medium text-foreground text-base">
											Arelys Borgia de Perez
										</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground uppercase font-medium">
											Agent National Producer Number
										</p>
										<p className="font-medium text-foreground text-base">
											19802325
										</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground uppercase font-medium">
											Phone Number
										</p>
										<p className="font-medium text-foreground text-base">
											{insuranceData.contact.phone}
										</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground uppercase font-medium">
											Email
										</p>
										<p className="font-medium text-foreground text-base">
											{insuranceData.contact.email}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</section>

					<section>
						<form onSubmit={(e) => e.preventDefault()}>
							<Card>
								<CardHeader>
									<CardTitle>Consent Form</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-6">
										<FormField label="Email" htmlFor="email" required>
											<Input type="email" id="email" name="email" required />
										</FormField>
										<FormField label="Phone Number" htmlFor="phone" required>
											<Input type="tel" id="phone" name="phone" required />
										</FormField>
										<FormField
											label="Full name signature"
											htmlFor="signature"
											required
										>
											<Input
												type="text"
												id="signature"
												name="signature"
												required
												value={fullName}
												onChange={(e) => setFullName(e.target.value)}
											/>
										</FormField>
										<div className="flex items-start gap-3">
											<Checkbox
												id="acknowledgment"
												name="acknowledgment"
												required
												className="mt-0.5"
											/>
											<Label
												htmlFor="acknowledgment"
												className="text-foreground"
											>
												<span>
													I acknowledge that by clicking submit, I am agreeing
													with the{" "}
													<Link
														to="/terms-and-conditions"
														className="text-primary hover:underline"
													>
														Terms
													</Link>{" "}
													and{" "}
													<Link
														to="/privacy-policy"
														className="text-primary hover:underline"
													>
														Privacy Notice
													</Link>
												</span>
											</Label>
										</div>
									</div>
								</CardContent>
								<CardFooter>
									<Button type="submit" size="lg" className="w-full text-sm">
										Submit Consent
									</Button>
								</CardFooter>
							</Card>
						</form>
					</section>

					<section>
						<Card>
							<CardHeader>
								<CardTitle className="text-sm">PRA Disclosure</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-muted-foreground leading-relaxed text-sm">
									According to the Paperwork Reduction Act of 1995, no persons
									are required to respond to a collection of information unless
									it displays a valid OMB control number. The valid OMB control
									number for this information collection is 0938-XXXX,
									expiration date is XX/XX/20XX. The time required to complete
									this information collection is estimated to take up to 0.08
									hours per applicant per year, including the time to review
									instructions, gather the information needed, and complete and
									review the information collection. If you have comments
									concerning the accuracy of the time estimate(s) or suggestions
									for improving this form, please write to: CMS, 7500 Security
									Boulevard, Attn: PRA Reports Clearance Officer, Mail Stop
									C4-26-05, Baltimore, Maryland 21244-1850.
								</p>
								<p className="text-muted-foreground leading-relaxed text-sm">
									<strong>CMS Disclosure</strong> Please do not send
									applications, claims, payments, medical records or any
									documents containing sensitive information to the PRA Reports
									Clearance Office. Please note that any correspondence not
									pertaining to the information collection burden approved under
									the associated OMB control number listed on this form will not
									be reviewed, forwarded, or retained. If you have questions or
									concerns regarding where to submit your documents, please
									contact Brian Gubin at{" "}
									<a
										href="mailto:Brian.Gubin@cms.hhs.gov"
										className="text-primary hover:underline"
									>
										Brian.Gubin@cms.hhs.gov
									</a>
									.
								</p>
							</CardContent>
						</Card>
					</section>
				</div>
			</main>

			<Footer />
		</div>
	);
}
