import {
	mergeForm,
	type ServerFormState,
	useForm,
	useStore,
	useTransform,
} from "@tanstack/react-form-start";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import generatePDF from "react-to-pdf";
import Logo from "#/assets/logo.svg?react";
import { Footer } from "#/components/Footer";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { Checkbox } from "#/components/ui/checkbox";
import { Field, FieldError, FieldLabel } from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import { insuranceData } from "#/data/insurance";
import { m } from "#/paraglide/messages";
import { getLocale } from "#/paraglide/runtime";
import { $submitConsent } from "#/utils/client-consent.functions";
import { clientConsentOptions } from "#/utils/client-consent.schemas";
import { getSeoMeta } from "#/utils/seo";

export const Route = createFileRoute("/client-consent")({
	component: ClientConsent,
	head: () => {
		const seo = getSeoMeta({
			title: m.consent_meta_title(),
			description: m.consent_meta_description(),
			path: "/client-consent",
		});
		return seo;
	},
});

function downloadFile(file: File) {
	const url = URL.createObjectURL(file);
	const link = document.createElement("a");
	link.href = url;
	link.download = "ABorgia_Client_Consent.pdf";
	document.body.append(link);
	link.click();
	URL.revokeObjectURL(url);
	document.body.removeChild(link);
}

function ClientConsent() {
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);
	const [serverState, setServerState] = useState(
		{} as ServerFormState<unknown, undefined>,
	);

	const formRef = useRef<HTMLFormElement>(null);
	const recaptchaTokenRef = useRef("");
	const submitConsent = useServerFn($submitConsent);

	useEffect(() => {
		if (import.meta.env.VITE_RECAPTCHA_ENABLED !== "true") return;

		(window as unknown as Record<string, unknown>).onRecaptchaSuccess = (
			token: string,
		) => {
			recaptchaTokenRef.current = token;
		};

		const scriptSrc = "https://www.google.com/recaptcha/enterprise.js";
		if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
			const script = document.createElement("script");
			script.src = scriptSrc;
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);
		}
	}, []);

	const form = useForm({
		...clientConsentOptions,
		transform: useTransform(
			(baseForm) => mergeForm(baseForm, serverState),
			[serverState],
		),
		async onSubmit() {
			if (!formRef.current) return;
			setSubmitSuccess(false);
			setSubmitError(null);

			const pdf = await generatePDF(
				() => document.getElementById("client-consent"),
				{ method: "build" },
			);

			const formData = new FormData(formRef.current);

			const file = new File([pdf.output("blob")], "client-consent.pdf", {
				type: "application/pdf",
				lastModified: Date.now(),
			});

			formData.set("file", file);

			if (import.meta.env.VITE_RECAPTCHA_ENABLED === "true") {
				formData.set("recaptchaToken", recaptchaTokenRef.current);
			}

			try {
				const result = await submitConsent({ data: formData });

				if (result.status === "error") {
					setSubmitError(result.result);
					if (import.meta.env.VITE_RECAPTCHA_ENABLED === "true") {
						recaptchaTokenRef.current = "";
						const grecaptcha = (window as unknown as Record<string, unknown>)
							.grecaptcha as Record<string, unknown> | undefined;
						if (grecaptcha?.enterprise) {
							(grecaptcha.enterprise as Record<string, () => void>).reset();
						}
					}
				} else if (result.status === "validation-error") {
					setServerState(result.result);
				} else {
					setSubmitSuccess(true);
					downloadFile(file);
				}
			} catch (e: unknown) {
				setSubmitError(
					e instanceof Error ? e.message : m.consent_error_message(),
				);
				if (import.meta.env.VITE_RECAPTCHA_ENABLED === "true") {
					recaptchaTokenRef.current = "";
					const grecaptcha = (window as unknown as Record<string, unknown>)
						.grecaptcha as Record<string, unknown> | undefined;
					if (grecaptcha?.enterprise) {
						(grecaptcha.enterprise as Record<string, () => void>).reset();
					}
				}
			}
		},
	});

	const fullName = useStore(form.store, (state) => state.values.fullName);
	const email = useStore(form.store, (state) => state.values.email);
	const phone = useStore(form.store, (state) => state.values.phone);

	const consentPurposes = [
		m.consent_purpose_1,
		m.consent_purpose_2,
		m.consent_purpose_3,
		m.consent_purpose_4,
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
								className="px-4 py-2 text-sm font-medium rounded-lg text-background hover:bg-background/10 transition-all"
							>
								{m.nav_home()}
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
						<ArrowLeft className="w-4 h-4" /> {m.nav_back_to_home()}
					</Link>
					<p className="text-lg text-background/80">{m.consent_agent_name()}</p>
					<h1 className="text-4xl md:text-5xl font-bold text-primary brightness-140">
						{m.consent_title()}
					</h1>
					<p className="text-lg text-background/80">{m.consent_subtitle()}</p>
				</div>
			</div>

			{/* Content */}
			<main className="space-y-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="space-y-12 max-w-none text-foreground">
					<section className="space-y-6">
						<p className="text-muted-foreground leading-relaxed mb-4">
							{m.consent_intro_1({ name: fullName })}
						</p>
						<ul className="space-y-2 text-muted-foreground">
							{consentPurposes.map((item) => (
								<li key={item()} className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
									{item()}
								</li>
							))}
						</ul>
						<p className="text-muted-foreground leading-relaxed">
							{m.consent_privacy_text()}
						</p>
						<p className="text-muted-foreground leading-relaxed">
							{m.consent_revoke_part1()}{" "}
							<a
								href={insuranceData.contact.emailHref}
								className="text-primary hover:underline"
							>
								{insuranceData.contact.email}
							</a>{" "}
							{m.consent_revoke_part2()}
						</p>
					</section>

					<section>
						<Card>
							<CardHeader>
								<CardTitle className="text-sm">
									{m.consent_agent_info_title()}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
									<div>
										<p className="text-xs text-muted-foreground uppercase font-medium">
											{m.consent_label_full_name()}
										</p>
										<p className="font-medium text-foreground text-base">
											{m.consent_agent_full_name()}
										</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground uppercase font-medium">
											{m.consent_agent_npn()}
										</p>
										<p className="font-medium text-foreground text-base">
											19802325
										</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground uppercase font-medium">
											{m.consent_agent_phone_label()}
										</p>
										<p className="font-medium text-foreground text-base">
											{insuranceData.contact.phone}
										</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground uppercase font-medium">
											{m.consent_agent_email_label()}
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
									<div className="text-center flex flex-col items-center justify-center gap-4">
										<p className="text-2xl font-medium text-green-700">
											{m.consent_success_title()}
										</p>
										<CheckCircle className="size-20 text-primary" />
									</div>
								</CardContent>
							</Card>
						)}

						{submitError && (
							<Card className="border-destructive">
								<CardContent className="pt-6">
									<div className="text-center space-y-2">
										<p className="text-lg font-medium text-destructive">
											{m.consent_error_title()}
										</p>
										<p className="text-muted-foreground">
											{submitError || m.consent_error_message()}
										</p>
										<Button
											variant="outline"
											onClick={() => setSubmitError(null)}
											className="mt-2"
										>
											{m.cta_try_again()}
										</Button>
									</div>
								</CardContent>
							</Card>
						)}

						{!submitSuccess && (
							<form
								noValidate
								ref={formRef}
								method="post"
								onSubmit={async (e) => {
									e.preventDefault();
									await form.handleSubmit();
								}}
							>
								<Card>
									<CardHeader>
										<CardTitle>{m.consent_form_title()}</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="space-y-6">
											<form.Field name="email">
												{(field) => (
													<Field>
														<FieldLabel htmlFor="email">
															{m.consent_label_email()}
															<span className="text-destructive ml-0.5">*</span>
														</FieldLabel>
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
														{field.state.meta.isTouched && (
															<FieldError errors={field.state.meta.errors} />
														)}
													</Field>
												)}
											</form.Field>
											<form.Field name="phone">
												{(field) => (
													<Field>
														<FieldLabel htmlFor="phone">
															{m.consent_label_phone()}
															<span className="text-destructive ml-0.5">*</span>
														</FieldLabel>
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
														{field.state.meta.isTouched && (
															<FieldError errors={field.state.meta.errors} />
														)}
													</Field>
												)}
											</form.Field>
											<form.Field name="fullName">
												{(field) => (
													<Field>
														<FieldLabel htmlFor="fullName">
															{m.consent_label_full_name()}
															<span className="text-destructive ml-0.5">*</span>
														</FieldLabel>
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
														{field.state.meta.isTouched && (
															<FieldError errors={field.state.meta.errors} />
														)}
													</Field>
												)}
											</form.Field>
											<form.Field name="acknowledgment">
												{(field) => (
													<div className="flex flex-col gap-1">
														<div className="flex items-start gap-3">
															<Checkbox
																id="acknowledgment"
																name="acknowledgment"
																checked={!!field.state.value}
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
																	{m.consent_ack_text_1()}{" "}
																	<Link
																		to="/terms-and-conditions"
																		className="text-primary hover:underline"
																	>
																		{m.consent_link_terms()}
																	</Link>{" "}
																	{m.consent_ack_text_2()}{" "}
																	<Link
																		to="/privacy-policy"
																		className="text-primary hover:underline"
																	>
																		{m.consent_link_privacy_notice()}
																	</Link>
																</span>
															</Label>
														</div>
														{field.state.meta.isTouched && (
															<FieldError errors={field.state.meta.errors} />
														)}
													</div>
												)}
											</form.Field>
											{import.meta.env.VITE_RECAPTCHA_ENABLED === "true" && (
												<div
													className="g-recaptcha"
													data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
													data-callback="onRecaptchaSuccess"
													data-action="CLIENT_CONSENT"
												/>
											)}
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
													{isSubmitting
														? m.cta_processing()
														: m.consent_submit()}
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
								<CardTitle className="text-sm">
									{m.consent_pra_title()}
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-muted-foreground leading-relaxed text-sm">
									{m.consent_pra_text()}
								</p>
								<p className="text-muted-foreground leading-relaxed text-sm">
									<strong>{m.consent_cms_disclosure_label()}</strong>{" "}
									{m.consent_cms_text_1()}{" "}
									<a
										href="mailto:Brian.Gubin@cms.hhs.gov"
										className="text-primary hover:underline"
									>
										Brian.Gubin@cms.hhs.gov
									</a>
									{m.consent_cms_text_2()}
								</p>
							</CardContent>
						</Card>
					</section>
				</div>
			</main>

			{/* Hidden PDF source */}
			<div
				id="client-consent"
				style={{
					position: "absolute",
					left: "-999999px",
					top: 0,
					width: "1000px",
					backgroundColor: "#fff",
				}}
				className="p-6 text-base space-y-8 text-foreground"
			>
				{/* Header */}
				<div className="flex items-end justify-between border-b border-primary/60 pb-1 mb-6">
					<div className="flex items-center gap-3">
						<div>
							<h2 className="text-base font-bold text-foreground leading-tight">
								{m.consent_agent_name()}
							</h2>
							<h1 className="text-2xl font-bold text-foreground leading-tight">
								{m.consent_pdf_title()}
							</h1>
							<p className="text-base text-foreground">
								{m.consent_pdf_subtitle()}
							</p>
						</div>
					</div>
					<Logo className="h-10 w-auto text-foreground fill-primary" />
				</div>

				{/* Consent text */}
				<div className="space-y-4">
					<p className="text-base text-foreground leading-relaxed text-pretty">
						{m.consent_intro_1({ name: fullName || "____________________" })}
					</p>
					<ul className="space-y-1 text-base text-foreground pl-4">
						{consentPurposes.map((item) => (
							<li key={item()} className="flex items-start gap-2">
								<span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
								<span className="text-pretty">{item()}</span>
							</li>
						))}
					</ul>
					<p className="text-base text-foreground leading-relaxed text-pretty">
						{m.consent_privacy_text()}
					</p>
					<p className="text-base text-foreground leading-relaxed text-pretty">
						{m.consent_revoke_part1()}{" "}
						<a
							href={insuranceData.contact.emailHref}
							className="text-foreground font-medium underline"
						>
							{insuranceData.contact.email}
						</a>{" "}
						{m.consent_revoke_part2()}
					</p>
				</div>

				{/* Agent Info Card */}
				<div className="border">
					<div className="p-2 border-b">
						<h2 className="text-xs font-semibold text-muted-foreground uppercase">
							{m.consent_pdf_agent_info()}
						</h2>
					</div>
					<div className="p-4 grid grid-cols-2 gap-3">
						<div>
							<p className="text-xs text-muted-foreground uppercase font-medium">
								{m.consent_label_full_name()}
							</p>
							<p className="font-medium text-foreground text-base">
								{m.consent_agent_full_name()}
							</p>
						</div>
						<div>
							<p className="text-xs text-muted-foreground uppercase font-medium">
								{m.consent_agent_npn()}
							</p>
							<p className="font-medium text-foreground text-base">19802325</p>
						</div>
						<div>
							<p className="text-xs text-muted-foreground uppercase font-medium">
								{m.consent_agent_phone_label()}
							</p>
							<p className="font-medium text-foreground text-base">
								{insuranceData.contact.phone}
							</p>
						</div>
						<div>
							<p className="text-xs text-muted-foreground uppercase font-medium">
								{m.consent_agent_email_label()}
							</p>
							<p className="font-medium text-foreground text-base">
								{insuranceData.contact.email}
							</p>
						</div>
					</div>
				</div>

				{/* Signature block */}
				<div className="border">
					<div className="p-2 border-b">
						<h2 className="text-xs font-semibold text-muted-foreground uppercase">
							{m.consent_pdf_client_info()}
						</h2>
					</div>
					<div className="grid grid-cols-2 gap-4 p-2">
						<div>
							<p className="text-xs text-muted-foreground uppercase font-medium">
								{m.consent_label_email()}
							</p>
							<p className="font-medium text-foreground text-base">
								{email || "____________________"}
							</p>
						</div>
						<div>
							<p className="text-xs text-muted-foreground uppercase font-medium">
								{m.consent_label_phone()}
							</p>
							<p className="font-medium text-foreground text-base">
								{phone || "____________________"}
							</p>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4 p-2">
						<div>
							<p className="text-xs text-muted-foreground uppercase font-medium">
								{m.consent_pdf_signature_label()}
							</p>
							<p className="font-medium text-foreground text-base">
								{fullName || "____________________"}
							</p>
						</div>
						<div>
							<p className="text-xs text-muted-foreground uppercase font-medium">
								{m.consent_pdf_date()}
							</p>
							<p className="font-medium text-foreground text-base">
								{new Date().toLocaleDateString(getLocale())}
							</p>
						</div>
					</div>
				</div>

				{/* PRA Disclosure */}
				<div className="border">
					<div className="p-2 border-b">
						<h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
							{m.consent_pra_title()}
						</h2>
					</div>
					<div className="p-2 space-y-2 text-sm text-muted-foreground leading-relaxed">
						<p className="text-pretty">{m.consent_pra_text()}</p>
						<p className="text-pretty">
							<strong className="text-foreground">
								{m.consent_cms_disclosure_label()}
							</strong>{" "}
							{m.consent_cms_text_1()}{" "}
							<a
								href="mailto:Brian.Gubin@cms.hhs.gov"
								className="text-foreground font-medium underline"
							>
								Brian.Gubin@cms.hhs.gov
							</a>
							{m.consent_cms_text_2()}
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
