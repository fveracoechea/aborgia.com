import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "#/components/ui/button";
import { Card, CardContent } from "#/components/ui/card";
import { Badge } from "#/components/ui/badge";
import { Separator } from "#/components/ui/separator";
import { 
  Shield, Heart, Home, Stethoscope, Phone, Mail, ExternalLink, 
  ChevronDown, Menu, X 
} from "lucide-react";
import { insuranceData, navLinks } from "#/data/insurance";
import Logo from "#/assets/logo.svg?react";
import LogoWhite from "#/assets/logo-white.png";

export const Route = createFileRoute("/prototype/1")({
  component: Prototype1,
});

const iconMap = {
  Shield: Shield,
  Heart: Heart,
  Home: Home,
  Stethoscope: Stethoscope,
};

function Prototype1() {
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
          if (rect.top <= 100 && rect.bottom >= 100) {
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="page-wrap">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#hero" onClick={() => scrollToSection("#hero")} className="flex items-center gap-2">
              <Logo className="h-8 w-auto fill-current" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`nav-link text-sm font-medium transition-colors ${
                    activeSection === link.href.replace("#", "") 
                      ? "text-foreground is-active" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t">
            <div className="page-wrap py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-sm font-medium py-2"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-a)] via-transparent to-[var(--hero-b)]" />
        </div>
        
        <div className="page-wrap relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-xs">
                Independent Insurance Broker
              </Badge>
              <h1 className="display-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--sea-ink)]">
                {insuranceData.hero.headline}
              </h1>
              <p className="text-lg md:text-xl text-[var(--sea-ink-soft)] max-w-md">
                {insuranceData.hero.tagline}
              </p>
              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-[var(--lagoon)] hover:bg-[var(--lagoon-deep)] text-white"
                  onClick={() => scrollToSection("#contact")}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection("#offerings")}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/hero-family.png" 
                  alt="Happy family" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg island-shell">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--lagoon)]/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[var(--lagoon-deep)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Trusted Coverage</p>
                    <p className="text-xs text-muted-foreground">For your family</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <button onClick={() => scrollToSection("#about")} className="text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)]">
              <ChevronDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="page-wrap">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={insuranceData.about.image} 
                  alt="About me" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--lagoon)]/20 rounded-full blur-2xl" />
            </div>
            <div className="space-y-6">
              <span className="island-kicker">About Me</span>
              <h2 className="display-title text-3xl md:text-4xl font-bold text-[var(--sea-ink)]">
                {insuranceData.about.title}
              </h2>
              <p className="text-lg text-[var(--sea-ink-soft)] leading-relaxed">
                {insuranceData.about.description}
              </p>
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-[var(--lagoon-deep)]">4+</p>
                  <p className="text-sm text-muted-foreground">Insurance Types</p>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div>
                  <p className="text-3xl font-bold text-[var(--lagoon-deep)]">100%</p>
                  <p className="text-sm text-muted-foreground">Personalized</p>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div>
                  <p className="text-3xl font-bold text-[var(--lagoon-deep)]">24/7</p>
                  <p className="text-sm text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Offerings */}
      <section id="offerings" className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-[var(--sand)]/50">
        <div className="page-wrap">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="island-kicker">Services</span>
            <h2 className="display-title text-3xl md:text-4xl font-bold text-[var(--sea-ink)] mt-4">
              Insurance Offerings
            </h2>
            <p className="text-lg text-[var(--sea-ink-soft)] mt-4">
              Comprehensive coverage options tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {insuranceData.offerings.map((offering, index) => {
              const Icon = iconMap[offering.icon as keyof typeof iconMap] || Shield;
              return (
                <Card 
                  key={offering.title} 
                  className="feature-card overflow-hidden border-0 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={offering.image} 
                      alt={offering.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[var(--lagoon)]/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[var(--lagoon-deep)]" />
                      </div>
                      <h3 className="text-xl font-bold text-[var(--sea-ink)]">{offering.title}</h3>
                    </div>
                    <p className="text-[var(--sea-ink-soft)] mb-4">{offering.description}</p>
                    <ul className="space-y-2">
                      {offering.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-[var(--sea-ink-soft)]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--lagoon)]" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32">
        <div className="page-wrap">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="island-kicker">Contact</span>
            <h2 className="display-title text-3xl md:text-4xl font-bold text-[var(--sea-ink)] mt-4">
              Get In Touch
            </h2>
            <p className="text-lg text-[var(--sea-ink-soft)] mt-4">
              Ready to protect what matters most? Reach out today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a 
              href={insuranceData.contact.phoneHref}
              className="island-shell rounded-xl p-8 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--lagoon)]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--lagoon)]/30 transition-colors">
                <Phone className="w-6 h-6 text-[var(--lagoon-deep)]" />
              </div>
              <h3 className="font-semibold text-[var(--sea-ink)] mb-2">Phone</h3>
              <p className="text-[var(--sea-ink-soft)]">{insuranceData.contact.phone}</p>
            </a>

            <a 
              href={insuranceData.contact.emailHref}
              className="island-shell rounded-xl p-8 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--lagoon)]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--lagoon)]/30 transition-colors">
                <Mail className="w-6 h-6 text-[var(--lagoon-deep)]" />
              </div>
              <h3 className="font-semibold text-[var(--sea-ink)] mb-2">Email</h3>
              <p className="text-[var(--sea-ink-soft)] text-sm">{insuranceData.contact.email}</p>
            </a>

            <a 
              href={insuranceData.contact.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="island-shell rounded-xl p-8 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--lagoon)]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--lagoon)]/30 transition-colors">
                <ExternalLink className="w-6 h-6 text-[var(--lagoon-deep)]" />
              </div>
              <h3 className="font-semibold text-[var(--sea-ink)] mb-2">Instagram</h3>
              <p className="text-[var(--sea-ink-soft)]">{insuranceData.contact.instagram}</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer py-12">
        <div className="page-wrap">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src={LogoWhite} alt="Aborgia Insurance" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-[var(--sea-ink-soft)]">
              © {new Date().getFullYear()} Aborgia Insurance. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href={insuranceData.contact.phoneHref} className="text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)]">
                <Phone className="w-5 h-5" />
              </a>
              <a href={insuranceData.contact.emailHref} className="text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)]">
                <Mail className="w-5 h-5" />
              </a>
              <a href={insuranceData.contact.instagramHref} target="_blank" rel="noopener noreferrer" className="text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)]">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
