import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shield, Mail, Phone, ExternalLink, ArrowLeft,
} from "lucide-react";
import Logo from "#/assets/logo.svg?react";
import { insuranceData } from "#/data/insurance";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[var(--sea-ink)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2">
              <Logo className="h-8 w-auto text-white fill-current" />
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              <Link
                to="/"
                className="px-4 py-2 text-sm font-medium rounded-lg !text-white hover:bg-white/10 transition-all"
              >
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-[var(--sea-ink)] text-white pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm !text-white/90 hover:!text-white underline underline-offset-4 !decoration-white/40 hover:!decoration-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-white/60 mt-4">
            Last updated: August 14, 2023 · Smyrna, GA
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none text-[var(--sea-ink)]">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--sea-ink)] mb-4">Introduction</h2>
            <p className="text-[var(--sea-ink-soft)] leading-relaxed">
              Welcome to aborgia.com. This Privacy Policy outlines how we collect, use, share, and protect the personal information of our users. By using our services, you agree to the practices described in this policy. We are committed to safeguarding your privacy and ensuring transparency in how we handle your data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--sea-ink)] mb-4">Types of Information Collected</h2>
            <p className="text-[var(--sea-ink-soft)] leading-relaxed mb-4">
              We may collect the following types of personal information when you interact with our website or services:
            </p>
            <ul className="space-y-2 text-[var(--sea-ink-soft)]">
              {[
                "Name",
                "Email address",
                "Phone number",
                "Mailing address",
                "Location data",
                "IP address",
                "Browser and device information",
                "Usage data and interaction patterns",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--lagoon)] mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--sea-ink)] mb-4">Methods of Collection</h2>
            <p className="text-[var(--sea-ink-soft)] leading-relaxed mb-4">
              We collect personal information through the following methods:
            </p>
            <ul className="space-y-2 text-[var(--sea-ink-soft)]">
              {[
                "Contact and quote request forms submitted on our website",
                "Cookies and similar tracking technologies",
                "Direct communication via email, phone, or social media",
                "Analytics tools that monitor website usage and performance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--lagoon)] mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--sea-ink)] mb-4">Purpose of Data Collection</h2>
            <p className="text-[var(--sea-ink-soft)] leading-relaxed mb-4">
              We collect and process your personal information for the following purposes:
            </p>
            <ul className="space-y-2 text-[var(--sea-ink-soft)]">
              {[
                "Providing insurance quotes and policy recommendations",
                "Communicating with you about your inquiries and policies",
                "Personalizing your experience and improving our services",
                "Marketing and promotional communications (with your consent)",
                "Complying with legal and regulatory obligations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--lagoon)] mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--sea-ink)] mb-4">Legal Basis for Processing</h2>
            <p className="text-[var(--sea-ink-soft)] leading-relaxed mb-4">
              We process personal data based on one or more of the following legal grounds:
            </p>
            <ul className="space-y-2 text-[var(--sea-ink-soft)]">
              {[
                "Your explicit consent",
                "Performance of a contract or pre-contractual steps",
                "Compliance with legal obligations",
                "Our legitimate business interests (balanced against your rights)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--lagoon)] mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--sea-ink)] mb-4">Data Usage and Sharing</h2>
            <p className="text-[var(--sea-ink-soft)] leading-relaxed mb-4">
              We respect your privacy and do not sell your personal information. We may share your data with:
            </p>
            <ul className="space-y-2 text-[var(--sea-ink-soft)]">
              {[
                "Insurance carriers and underwriters to provide quotes and policies",
                "Third-party service providers who assist in our business operations",
                "Analytics and marketing platforms to improve our services",
                "Legal and regulatory authorities when required by law",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--lagoon)] mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--sea-ink)] mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-[var(--sea-ink-soft)] leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience. These technologies help us:
            </p>
            <ul className="space-y-2 text-[var(--sea-ink-soft)]">
              {[
                "Analyze website traffic and usage patterns",
                "Remember your preferences and settings",
                "Personalize content and recommendations",
                "Measure the effectiveness of our marketing campaigns",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--lagoon)] mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[var(--sea-ink-soft)] leading-relaxed mt-4">
              You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--sea-ink)] mb-4">User Rights</h2>
            <p className="text-[var(--sea-ink-soft)] leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="space-y-2 text-[var(--sea-ink-soft)]">
              {[
                "Access — request a copy of the personal data we hold about you",
                "Correction — request that we correct inaccurate or incomplete information",
                "Deletion — request that we delete your personal data",
                "Restriction — request that we limit the processing of your data",
                "Objection — object to our processing of your personal data",
                "Portability — request a transfer of your data to another service",
                "Withdrawal — withdraw your consent at any time",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--lagoon)] mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[var(--sea-ink-soft)] leading-relaxed mt-4">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--sea-ink)] mb-4">Data Security</h2>
            <p className="text-[var(--sea-ink-soft)] leading-relaxed mb-4">
              We take the security of your personal information seriously. We implement industry-standard measures to protect your data, including:
            </p>
            <ul className="space-y-2 text-[var(--sea-ink-soft)]">
              {[
                "Encryption of data in transit and at rest",
                "Access controls and authentication mechanisms",
                "Regular security assessments and vulnerability testing",
                "Employee training on data protection best practices",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--lagoon)] mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--sea-ink)] mb-4">Data Retention</h2>
            <p className="text-[var(--sea-ink-soft)] leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, to comply with legal obligations, to resolve disputes, and to enforce our agreements. When your data is no longer needed, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--sea-ink)] mb-4">Children's Privacy</h2>
            <p className="text-[var(--sea-ink-soft)] leading-relaxed">
              Our services are not intended for children under the age of 14. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a child, please contact us immediately so we can take appropriate action to delete the information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--sea-ink)] mb-4">Updates to This Policy</h2>
            <p className="text-[var(--sea-ink-soft)] leading-relaxed">
              This Privacy Policy may be updated periodically to reflect changes in our practices, technologies, or legal requirements. We will post any changes on this page and update the "Last updated" date at the top. Your continued use of our website and services after any changes constitutes your acceptance of the revised policy. We encourage you to review this page regularly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--sea-ink)] mb-4">Contact Information</h2>
            <p className="text-[var(--sea-ink-soft)] leading-relaxed mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please reach out to us:
            </p>
            <div className="bg-[var(--sand)] rounded-xl p-6 space-y-4">
              <a
                href={insuranceData.contact.emailHref}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[var(--sea-ink)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--sea-ink-soft)]">Email</p>
                  <p className="font-medium text-[var(--sea-ink)] group-hover:text-[var(--lagoon-deep)] transition-colors">
                    {insuranceData.contact.email}
                  </p>
                </div>
              </a>
              <a
                href={insuranceData.contact.phoneHref}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[var(--sea-ink)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--sea-ink-soft)]">Phone</p>
                  <p className="font-medium text-[var(--sea-ink)] group-hover:text-[var(--lagoon-deep)] transition-colors">
                    {insuranceData.contact.phone}
                  </p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--sea-ink)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Logo className="h-8 w-auto text-white fill-current" />
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Aborgia Insurance. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href={insuranceData.contact.phoneHref} className="text-white/60 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href={insuranceData.contact.emailHref} className="text-white/60 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href={insuranceData.contact.instagramHref} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
