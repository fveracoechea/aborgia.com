import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "#/components/ui/button";
import { Badge } from "#/components/ui/badge";
import { Separator } from "#/components/ui/separator";
import { 
  Shield, Heart, Home, Stethoscope, Phone, Mail, ExternalLink, 
  ChevronRight, ArrowUpRight, ArrowRight, Award, Users, Clock,
  Menu, X 
} from "lucide-react";
import { insuranceData, navLinks } from "#/data/insurance";
import Logo from "#/assets/logo.svg?react";

export const Route = createFileRoute("/prototype/2")({
  component: Prototype2,
});

const iconMap = {
  Shield: Shield,
  Heart: Heart,
  Home: Home,
  Stethoscope: Stethoscope,
};

function Prototype2() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[var(--sea-ink)] text-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#hero" onClick={() => scrollToSection("#hero")} className="flex items-center gap-2">
              <Logo className={`h-8 w-auto fill-current ${scrolled ? "text-white" : ""}`} />
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    scrolled 
                      ? "text-white/80 hover:text-white hover:bg-white/10" 
                      : "text-[var(--sea-ink)] hover:bg-[var(--sea-ink)]/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button 
                size="sm" 
                className="ml-4 bg-[var(--lagoon)] hover:bg-[var(--lagoon-deep)] text-white"
                onClick={() => scrollToSection("#contact")}
              >
                Contact Us
              </Button>
            </nav>

            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[var(--sea-ink)] text-white">
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-sm font-medium py-2 px-4 rounded-lg hover:bg-white/10"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Bold & Asymmetric */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--sea-ink)]/5 -skew-x-12 translate-x-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--lagoon)]/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-8">
              <Badge className="bg-[var(--lagoon)]/20 text-[var(--lagoon-deep)] border-[var(--lagoon)]/30">
                Independent Insurance Broker
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-[var(--sea-ink)]">
                Medical<br />
                <span className="text-[var(--lagoon-deep)]">coverage</span><br />
                at your fingertips
              </h1>
              <p className="text-xl md:text-2xl text-[var(--sea-ink-soft)] max-w-lg font-medium">
                {insuranceData.hero.tagline}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-[var(--sea-ink)] hover:bg-[var(--sea-ink-soft)] text-white px-8 h-14 text-lg"
                  onClick={() => scrollToSection("#contact")}
                >
                  Get Started <ArrowUpRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-14 text-lg border-[var(--sea-ink)]/20"
                  onClick={() => scrollToSection("#offerings")}
                >
                  View Services
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="/src/assets/hero-family.png" 
                    alt="Happy family" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[var(--sea-ink)] text-white rounded-lg p-4 shadow-xl">
                  <p className="text-2xl font-bold">4+</p>
                  <p className="text-sm text-white/80">Insurance Types</p>
                </div>
                <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-xl border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-sm font-medium">Available Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section id="about" className="py-24 lg:py-32 bg-[var(--sea-ink)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={insuranceData.about.image} 
                alt="About me" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-[var(--lagoon)] text-sm font-bold tracking-wider uppercase">About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold">
                {insuranceData.about.title}
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                {insuranceData.about.description}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10">
                  <div className="w-6 h-6 rounded-full bg-[var(--lagoon)]/30 flex items-center justify-center">
                    <Award className="w-3 h-3 text-[var(--lagoon)]" />
                  </div>
                  <span className="text-xs font-medium text-white/90">Licensed & Certified</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10">
                  <div className="w-6 h-6 rounded-full bg-[var(--lagoon)]/30 flex items-center justify-center">
                    <Users className="w-3 h-3 text-[var(--lagoon)]" />
                  </div>
                  <span className="text-xs font-medium text-white/90">Family Focused</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10">
                  <div className="w-6 h-6 rounded-full bg-[var(--lagoon)]/30 flex items-center justify-center">
                    <Clock className="w-3 h-3 text-[var(--lagoon)]" />
                  </div>
                  <span className="text-xs font-medium text-white/90">24/7 Available</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <p className="text-3xl font-bold text-[var(--lagoon)]">4+</p>
                  <p className="text-sm text-white/60">Insurance Types</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[var(--lagoon)]">100%</p>
                  <p className="text-sm text-white/60">Personalized</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[var(--lagoon)]">24/7</p>
                  <p className="text-sm text-white/60">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Offerings - Grid with Numbers */}
      <section id="offerings" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[var(--lagoon-deep)] text-sm font-bold tracking-wider uppercase">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--sea-ink)] mt-4">
              Insurance<br />Offerings
            </h2>
          </div>

          <div className="space-y-12">
            {insuranceData.offerings.map((offering, index) => {
              const Icon = iconMap[offering.icon as keyof typeof iconMap] || Shield;
              return (
                <div 
                  key={offering.title} 
                  className={`grid lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={offering.image} 
                        alt={offering.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-6xl font-bold text-[var(--lagoon)]/20">0{index + 1}</span>
                      <div className="w-12 h-12 rounded-lg bg-[var(--lagoon)]/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[var(--lagoon-deep)]" />
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--sea-ink)] mb-4">{offering.title}</h3>
                    <p className="text-lg text-[var(--sea-ink-soft)] mb-6">{offering.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {offering.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2 text-sm text-[var(--sea-ink-soft)]">
                          <ChevronRight className="w-4 h-4 text-[var(--lagoon)]" />
                          {benefit}
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

      {/* Contact - Editorial Rows */}
      <section id="contact" className="py-24 lg:py-32 bg-[var(--sand)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[var(--lagoon-deep)] text-sm font-bold tracking-wider uppercase">Contact</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--sea-ink)] mt-4">
                Get In Touch
              </h2>
              <p className="text-[var(--sea-ink-soft)] mt-4 text-lg">
                Ready to protect what matters most? I'm here to help you find the perfect coverage.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-4">
                <a
                  href={insuranceData.contact.phoneHref}
                  className="flex items-center gap-6 p-6 bg-white rounded-xl border border-[var(--line)] hover:border-[var(--sea-ink)] transition-colors group"
                >
                  <div className="w-14 h-14 rounded-full bg-[var(--sand)] flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[var(--sea-ink)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[var(--sea-ink)]">Phone</h3>
                    <p className="text-[var(--sea-ink-soft)]">{insuranceData.contact.phone}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[var(--sea-ink-soft)] group-hover:text-[var(--sea-ink)] transition-colors" />
                </a>

                <a
                  href={insuranceData.contact.emailHref}
                  className="flex items-center gap-6 p-6 bg-white rounded-xl border border-[var(--line)] hover:border-[var(--sea-ink)] transition-colors group"
                >
                  <div className="w-14 h-14 rounded-full bg-[var(--sand)] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[var(--sea-ink)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[var(--sea-ink)]">Email</h3>
                    <p className="text-[var(--sea-ink-soft)] text-sm">{insuranceData.contact.email}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[var(--sea-ink-soft)] group-hover:text-[var(--sea-ink)] transition-colors" />
                </a>

                <a
                  href={insuranceData.contact.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 bg-white rounded-xl border border-[var(--line)] hover:border-[var(--sea-ink)] transition-colors group"
                >
                  <div className="w-14 h-14 rounded-full bg-[var(--sand)] flex items-center justify-center shrink-0">
                    <ExternalLink className="w-6 h-6 text-[var(--sea-ink)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[var(--sea-ink)]">Instagram</h3>
                    <p className="text-[var(--sea-ink-soft)]">{insuranceData.contact.instagram}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[var(--sea-ink-soft)] group-hover:text-[var(--sea-ink)] transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
