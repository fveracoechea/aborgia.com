import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "#/components/ui/button";
import { Badge } from "#/components/ui/badge";
import { Separator } from "#/components/ui/separator";
import { 
  Shield, Heart, Home, Stethoscope, Phone, Mail, ExternalLink, 
  ChevronRight, ArrowUpRight, Menu, X, Sparkles, Zap, Check
} from "lucide-react";
import { insuranceData, navLinks } from "#/data/insurance";
import Logo from "#/assets/logo.svg?react";

export const Route = createFileRoute("/prototype/4")({
  component: Prototype4,
});

const iconMap = {
  Shield: Shield,
  Heart: Heart,
  Home: Home,
  Stethoscope: Stethoscope,
};

function Prototype4() {
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
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-[var(--line)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" onClick={() => scrollToSection("#hero")} className="flex items-center gap-2">
              <Logo className="h-8 w-auto fill-current" />
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 text-sm font-medium rounded-lg text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)] hover:bg-[var(--sea-ink)]/5 transition-all"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <Button 
              size="sm" 
              className="hidden md:flex bg-[var(--lagoon)] hover:bg-[var(--lagoon-deep)] text-white"
              onClick={() => scrollToSection("#contact")}
            >
              <Zap className="w-4 h-4 mr-2" /> Get Quote
            </Button>

            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-b">
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-sm font-medium py-2 px-4 rounded-lg hover:bg-[var(--sea-ink)]/5"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero - Bento Grid Style */}
      <section id="hero" className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Main Hero Card */}
            <div className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-[var(--sea-ink)] text-white p-8 lg:p-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--lagoon)]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--lagoon)]/10 rounded-full blur-2xl" />
              
              <div className="relative z-10 max-w-lg">
                <Badge className="bg-white/20 text-white border-white/30 mb-6">
                  <Sparkles className="w-3 h-3 mr-1" /> Independent Broker
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  {insuranceData.hero.headline}
                </h1>
                <p className="text-lg text-white/80 mb-8">
                  {insuranceData.hero.tagline}
                </p>
                <div className="flex gap-4">
                  <Button 
                    className="bg-white text-[var(--sea-ink)] hover:bg-white/90"
                    onClick={() => scrollToSection("#contact")}
                  >
                    Get Started <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10"
                    onClick={() => scrollToSection("#offerings")}
                  >
                    Explore
                  </Button>
                </div>
              </div>
              
              <img 
                src="/src/assets/hero-family.png" 
                alt="Happy family" 
                className="absolute right-0 bottom-0 w-1/2 h-full object-cover object-left opacity-20"
              />
            </div>

            {/* Side Cards */}
            <div className="lg:col-span-4 grid gap-6">
              <div className="island-shell rounded-2xl p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[var(--lagoon)]/20 flex items-center justify-center shrink-0">
                  <Shield className="w-7 h-7 text-[var(--lagoon-deep)]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--sea-ink)]">4</p>
                  <p className="text-sm text-[var(--sea-ink-soft)]">Insurance Types</p>
                </div>
              </div>
              
              <div className="island-shell rounded-2xl p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[var(--palm)]/20 flex items-center justify-center shrink-0">
                  <Heart className="w-7 h-7 text-[var(--palm)]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--sea-ink)]">100%</p>
                  <p className="text-sm text-[var(--sea-ink-soft)]">Personalized</p>
                </div>
              </div>
              
              <div className="island-shell rounded-2xl p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[var(--lagoon)]/20 flex items-center justify-center shrink-0">
                  <Zap className="w-7 h-7 text-[var(--lagoon-deep)]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--sea-ink)]">24/7</p>
                  <p className="text-sm text-[var(--sea-ink-soft)]">Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About - Minimal Card */}
      <section id="about" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="island-shell rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4">
                <div className="relative">
                  <img 
                    src={insuranceData.about.image} 
                    alt="About me" 
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <span className="island-kicker">About</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--sea-ink)]">
                  {insuranceData.about.title}
                </h2>
                <p className="text-lg text-[var(--sea-ink-soft)] leading-relaxed max-w-2xl">
                  {insuranceData.about.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Final Expenses", "Life Insurance", "Mortgage Protection", "Obamacare"].map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-[var(--lagoon)]/10 text-[var(--lagoon-deep)] border-0">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Offerings - Bento Grid */}
      <section id="offerings" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="island-kicker">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--sea-ink)] mt-4">
              Insurance Offerings
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {insuranceData.offerings.map((offering, index) => {
              const Icon = iconMap[offering.icon as keyof typeof iconMap] || Shield;
              const isLarge = index === 0 || index === 3;
              
              return (
                <div 
                  key={offering.title}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    isLarge ? "md:col-span-2 aspect-[2/1]" : "aspect-square"
                  }`}
                >
                  <img 
                    src={offering.image} 
                    alt={offering.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{offering.title}</h3>
                      <p className="text-sm text-white/80 line-clamp-2 group-hover:line-clamp-none transition-all">
                        {offering.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        {offering.benefits.slice(0, 2).map((benefit) => (
                          <span key={benefit} className="text-xs text-white/90 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact - Clean Cards */}
      <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-transparent to-[var(--sand)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="island-kicker">Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--sea-ink)] mt-4">
              Get In Touch
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href={insuranceData.contact.phoneHref}
              className="island-shell rounded-2xl p-8 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--lagoon)]/20 flex items-center justify-center mb-4 group-hover:bg-[var(--lagoon)]/30 transition-colors">
                <Phone className="w-6 h-6 text-[var(--lagoon-deep)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--sea-ink)] mb-2">Phone</h3>
              <p className="text-[var(--sea-ink-soft)]">{insuranceData.contact.phone}</p>
              <div className="flex items-center gap-1 mt-4 text-[var(--lagoon-deep)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Call Now <ChevronRight className="w-4 h-4" />
              </div>
            </a>

            <a 
              href={insuranceData.contact.emailHref}
              className="island-shell rounded-2xl p-8 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--palm)]/20 flex items-center justify-center mb-4 group-hover:bg-[var(--palm)]/30 transition-colors">
                <Mail className="w-6 h-6 text-[var(--palm)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--sea-ink)] mb-2">Email</h3>
              <p className="text-[var(--sea-ink-soft)] text-sm">{insuranceData.contact.email}</p>
              <div className="flex items-center gap-1 mt-4 text-[var(--palm)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Send Email <ChevronRight className="w-4 h-4" />
              </div>
            </a>

            <a 
              href={insuranceData.contact.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="island-shell rounded-2xl p-8 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--lagoon)]/20 flex items-center justify-center mb-4 group-hover:bg-[var(--lagoon)]/30 transition-colors">
                <ExternalLink className="w-6 h-6 text-[var(--lagoon-deep)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--sea-ink)] mb-2">Instagram</h3>
              <p className="text-[var(--sea-ink-soft)]">{insuranceData.contact.instagram}</p>
              <div className="flex items-center gap-1 mt-4 text-[var(--lagoon-deep)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Follow <ChevronRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Logo className="h-8 w-auto fill-current" />
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
