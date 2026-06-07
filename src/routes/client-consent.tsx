import { mergeForm, useForm, useTransform } from "@tanstack/react-form-start";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import generatePDF from "react-to-pdf";
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
import {
	$submitConsent,
	getFormDataFromServer,
} from "#/utils/client-consent.functions";
import { clientConsentOptions } from "#/utils/client-consent.schemas";

export const Route = createFileRoute("/client-consent")({
	component: ClientConsent,
	loader: async () => ({
		state: await getFormDataFromServer(),
	}),
});

function downloadPDF(pdf: File) {
	const blobUrl = URL.createObjectURL(pdf);

	const link = document.createElement("a");
	link.href = blobUrl;
	link.download = "client-consent.pdf";

	document.body.appendChild(link);
	link.click();

	document.body.removeChild(link);
	URL.revokeObjectURL(blobUrl);
}

function ClientConsent() {
	const { state } = Route.useLoaderData();
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);

	const submitConsent = useServerFn($submitConsent);

	const form = useForm({
		...clientConsentOptions,
		transform: useTransform((baseForm) => mergeForm(baseForm, state), [state]),
		async onSubmit({ value }) {
			setSubmitSuccess(false);
			setSubmitError(null);

			const pdf = await generatePDF(
				() => document.getElementById("client-consent"),
				{ method: "build" },
			);

			const file = new File([pdf.output("blob")], "client-consent.pdf", {
				type: "application/pdf",
				lastModified: Date.now(),
			});

			try {
				// await submitConsent({ data: { ...value, file } });

				downloadPDF(file);

				setSubmitSuccess(true);
			} catch (e: unknown) {
				setSubmitError(
					e instanceof Error ? e.message : "Failed to submit consent form.",
				);
			}
		},
	});

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
								className="px-4 py-2 text-sm font-medium rounded-lg text-background hover:bg-background/10 transition-all"
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
								{form.getFieldValue("fullName")}
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
						{submitSuccess && (
							<Card>
								<CardContent className="pt-6">
									<div className="text-center space-y-2">
										<p className="text-lg font-medium text-green-600">
											Consent Form Submitted Successfully
										</p>
										<p className="text-muted-foreground">
											A copy of your signed consent form has been sent to your
											email.
										</p>
									</div>
								</CardContent>
							</Card>
						)}

						{submitError && (
							<Card className="border-destructive">
								<CardContent className="pt-6">
									<div className="text-center space-y-2">
										<p className="text-lg font-medium text-destructive">
											Submission Failed
										</p>
										<p className="text-muted-foreground">
											{submitError || "Something went wrong. Please try again."}
										</p>
										<Button
											variant="outline"
											onClick={() => setSubmitError(null)}
											className="mt-2"
										>
											Try Again
										</Button>
									</div>
								</CardContent>
							</Card>
						)}

						{!submitSuccess && (
							<form
								noValidate
								onSubmit={(e) => {
									e.preventDefault();
									form.handleSubmit();
								}}
							>
								<Card>
									<CardHeader>
										<CardTitle>Consent Form</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="space-y-6">
											<form.Field
												name="email"
												validators={{
													onChange: ({ value }) =>
														value.length > 0 && !value.includes("@")
															? "Please enter a valid email address"
															: undefined,
												}}
											>
												{(field) => (
													<FormField label="Email" htmlFor="email" required>
														<Input
															type="email"
															id="email"
															name="email"
															required
															value={field.state.value}
															onBlur={field.handleBlur}
															onChange={(e) =>
																field.handleChange(e.target.value)
															}
														/>
														{field.state.meta.isTouched &&
															field.state.meta.errors.length > 0 && (
																<p className="text-sm text-destructive">
																	{field.state.meta.errors
																		.map((err) =>
																			typeof err === "string"
																				? err
																				: ((err as { message?: string })
																						.message ?? String(err)),
																		)
																		.join(", ")}
																</p>
															)}
													</FormField>
												)}
											</form.Field>
											<form.Field
												name="phone"
												validators={{
													onChange: ({ value }) =>
														value.length > 0 && value.length < 7
															? "Please enter a valid phone number"
															: undefined,
												}}
											>
												{(field) => (
													<FormField
														label="Phone Number"
														htmlFor="phone"
														required
													>
														<Input
															type="tel"
															id="phone"
															name="phone"
															required
															value={field.state.value}
															onBlur={field.handleBlur}
															onChange={(e) =>
																field.handleChange(e.target.value)
															}
														/>
														{field.state.meta.isTouched &&
															field.state.meta.errors.length > 0 && (
																<p className="text-sm text-destructive">
																	{field.state.meta.errors
																		.map((err) =>
																			typeof err === "string"
																				? err
																				: ((err as { message?: string })
																						.message ?? String(err)),
																		)
																		.join(", ")}
																</p>
															)}
													</FormField>
												)}
											</form.Field>
											<form.Field
												name="fullName"
												validators={{
													onChange: ({ value }) =>
														value.length > 0 && value.length < 2
															? "Full name is required"
															: undefined,
												}}
											>
												{(field) => (
													<FormField
														label="Full name signature"
														htmlFor="fullName"
														required
													>
														<Input
															type="text"
															id="fullName"
															name="fullName"
															required
															value={field.state.value}
															onBlur={field.handleBlur}
															onChange={(e) =>
																field.handleChange(e.target.value)
															}
														/>
														{field.state.meta.isTouched &&
															field.state.meta.errors.length > 0 && (
																<p className="text-sm text-destructive">
																	{field.state.meta.errors
																		.map((err) =>
																			typeof err === "string"
																				? err
																				: ((err as { message?: string })
																						.message ?? String(err)),
																		)
																		.join(", ")}
																</p>
															)}
													</FormField>
												)}
											</form.Field>
											<form.Field
												name="acknowledgment"
												validators={{
													onChange: ({ value }) =>
														!value
															? "You must acknowledge the terms and privacy notice"
															: undefined,
												}}
											>
												{(field) => (
													<div className="flex flex-col gap-1">
														<div className="flex items-start gap-3">
															<Checkbox
																id="acknowledgment"
																name="acknowledgment"
																checked={field.state.value}
																onCheckedChange={(checked) =>
																	field.handleChange(checked === true)
																}
																className="mt-0.5"
															/>
															<Label
																htmlFor="acknowledgment"
																className="text-foreground"
															>
																<span>
																	I acknowledge that by clicking submit, I am
																	agreeing with the{" "}
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
														{field.state.meta.isTouched &&
															field.state.meta.errors.length > 0 && (
																<p className="text-sm text-destructive">
																	{field.state.meta.errors
																		.map((err) =>
																			typeof err === "string"
																				? err
																				: ((err as { message?: string })
																						.message ?? String(err)),
																		)
																		.join(", ")}
																</p>
															)}
													</div>
												)}
											</form.Field>
										</div>
									</CardContent>
									<CardFooter>
										<form.Subscribe
											selector={(formState) => [
												formState.canSubmit,
												formState.isSubmitting,
											]}
										>
											{([canSubmit, isSubmitting]) => (
												<Button
													type="submit"
													size="lg"
													className="w-full text-sm"
													disabled={!canSubmit || isSubmitting}
												>
													{isSubmitting ? "Processing..." : "Submit Consent"}
												</Button>
											)}
										</form.Subscribe>
									</CardFooter>
								</Card>
							</form>
						)}
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

			{/* Hidden PDF source */}
			<div
				id="client-consent"
				// style={{
				// 	position: "absolute",
				// 	left: "-9999px",
				// 	top: 0,
				// 	width: "1200px",
				// }}
				className="p-6 text-sm space-y-6 text-foreground"
			>
				{/* Header */}
				<div className="flex items-end justify-between border-b border-primary/60 pb-1 mb-6">
					<div className="flex items-center gap-3">
						<div>
							<h2 className="text-sm font-bold text-foreground leading-tight">
								Arelys Borgia
							</h2>
							<h1 className="text-xl font-bold text-foreground leading-tight">
								Client Consent Form
							</h1>
							<p className="text-sm text-foreground">
								CMS Marketplace Agents and Brokers
							</p>
						</div>
					</div>
					<Logo className="h-10 w-auto text-foreground fill-primary" />
				</div>

				{/* Consent text */}
				<div className="space-y-2">
					<p className="text-sm text-foreground leading-relaxed text-balance">
						I,{" "}
						<strong className="font-semibold text-foreground">
							{form.getFieldValue("fullName") || "____________________"}
						</strong>
						, give my permission to{" "}
						<strong className="font-semibold text-foreground">
							Arelys Borgia
						</strong>{" "}
						to serve as the health insurance agent or broker for myself and my
						entire household if applicable, for purposes of enrollment in a
						Qualified Health Plan offered on the Federally Facilitated
						Marketplace. By consenting to this agreement, I authorize the
						above-mentioned Agent to view and use the confidential information
						provided by me in writing, electronically, or by telephone only for
						the purposes of one or more of the following:
					</p>
					<ul className="space-y-1 text-sm text-foreground pl-4">
						{[
							"Searching for an existing Marketplace application;",
							"Completing an application for eligibility and enrollment in a Marketplace Qualified Health Plan or other government insurance affordability programs, such as Medicaid and CHIP or advance tax credits to help pay for Marketplace premiums;",
							"Providing ongoing account maintenance and enrollment assistance, as necessary;",
							"Responding to inquiries from the Marketplace regarding my Marketplace application.",
						].map((item) => (
							<li key={item} className="flex items-start gap-2">
								<span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
								<span>{item}</span>
							</li>
						))}
					</ul>
					<p className="text-sm textforeground leading-relaxed text-balance">
						I understand that the Agent will not use or share my personally
						identifiable information (PII) for any purposes other than those
						listed above. The Agent will ensure that my PII is kept private and
						safe when collecting, storing, and using my PII for the stated
						purposes above.
					</p>
					<p className="text-sm text-foreground leading-relaxed text-balance">
						I confirm that the information I provide for entry on my Marketplace
						eligibility and enrollment application will be true to the best of
						my knowledge. I understand that I do not have to share additional
						personal information about myself or my health with my Agent beyond
						what is required on the application for eligibility and enrollment
						purposes. I understand that my consent remains in effect until I
						revoke it, and I may revoke or modify my consent at any time by
						sending an email to{" "}
						<a
							href={insuranceData.contact.emailHref}
							className="text-foreground! font-medium underline"
						>
							aborgiainsurance@gmail.com
						</a>{" "}
						specifying my request.
					</p>
				</div>

				{/* Agent Info Card */}
				<div className="border">
					<div className="p-2 border-b">
						<h2 className="text-xs font-semibold text-muted-foreground uppercase">
							Agent Information
						</h2>
					</div>
					<div className="p-4 grid grid-cols-2 gap-3">
						<div>
							<p className="text-xs text-muted-foreground uppercase font-medium">
								Name
							</p>
							<p className="font-medium text-foreground text-sm">
								Arelys Borgia de Perez
							</p>
						</div>
						<div>
							<p className="text-xs text-muted-foreground uppercase font-medium">
								Agent National Producer Number
							</p>
							<p className="font-medium text-foreground text-sm">19802325</p>
						</div>
						<div>
							<p className="text-xs text-muted-foreground uppercase font-medium">
								Phone Number
							</p>
							<p className="font-medium text-foreground text-sm">
								{insuranceData.contact.phone}
							</p>
						</div>
						<div>
							<p className="text-xs text-muted-foreground uppercase font-medium">
								Email
							</p>
							<p className="font-medium text-foreground text-sm">
								{insuranceData.contact.email}
							</p>
						</div>
					</div>
				</div>

				{/* Signature block */}
				<div className="border  ">
					<div className="p-2 border-b">
						<h2 className="text-xs font-semibold text-muted-foreground uppercase">
							Client Information
						</h2>
					</div>
					<div className="grid grid-cols-2 gap-4 p-2">
						<div>
							<p className="text-xs text-muted-foreground uppercase font-medium">
								Email
							</p>
							<p className="font-medium text-foreground text-sm">
								{form.getFieldValue("email") || "____________________"}
							</p>
						</div>
						<div>
							<p className="text-xs text-muted-foreground uppercase font-medium">
								Phone Number
							</p>
							<p className="font-medium text-foreground text-sm">
								{form.getFieldValue("phone") || "____________________"}
							</p>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4 p-2">
						<div>
							<p className="text-xs text-muted-foreground uppercase font-medium">
								Full Name Signature
							</p>
							<p className="font-medium text-foreground text-sm">
								{form.getFieldValue("fullName") || "____________________"}
							</p>
						</div>
						<div>
							<p className="text-xs text-muted-foreground uppercase font-medium">
								Date
							</p>
							<p className="font-medium text-foreground text-sm">
								{new Date().toLocaleDateString()}
							</p>
						</div>
					</div>
				</div>

				{/* PRA Disclosure */}
				<div className="border">
					<div className="p-2 border-b">
						<h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
							PRA Disclosure
						</h2>
					</div>
					<div className="p-2 space-y-2 text-xs text-muted-foreground leading-relaxed">
						<p className="text-balance">
							According to the Paperwork Reduction Act of 1995, no persons are
							required to respond to a collection of information unless it
							displays a valid OMB control number. The valid OMB control number
							for this information collection is 0938-XXXX, expiration date is
							XX/XX/20XX. The time required to complete this information
							collection is estimated to take up to 0.08 hours per applicant per
							year, including the time to review instructions, gather the
							information needed, and complete and review the information
							collection. If you have comments concerning the accuracy of the
							time estimate(s) or suggestions for improving this form, please
							write to: CMS, 7500 Security Boulevard, Attn: PRA Reports
							Clearance Officer, Mail Stop C4-26-05, Baltimore, Maryland
							21244-1850.
						</p>
						<p className="text-balance">
							<strong className="text-foreground">CMS Disclosure</strong> Please
							do not send applications, claims, payments, medical records or any
							documents containing sensitive information to the PRA Reports
							Clearance Office. Please note that any correspondence not
							pertaining to the information collection burden approved under the
							associated OMB control number listed on this form will not be
							reviewed, forwarded, or retained. If you have questions or
							concerns regarding where to submit your documents, please contact
							Brian Gubin at{" "}
							<a
								href="mailto:Brian.Gubin@cms.hhs.gov"
								className="text-foreground! font-medium underline"
							>
								Brian.Gubin@cms.hhs.gov
							</a>
							.
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
