import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "#/components/ui/button";
import { Card, CardContent } from "#/components/ui/card";
import { Badge } from "#/components/ui/badge";
import { 
  Shield, Heart, Home, Stethoscope, Phone, Mail, ExternalLink, 
  ChevronDown, Menu, X, Quote 
} from "lucide-react";
import { insuranceData, navLinks } from "#/data/insurance";
import Logo from "#/assets/logo.svg?react";

export const Route = createFileRoute("/prototype/3")({
  component: Prototype3,
});

const iconMap = {
  Shield: Shield,
  Heart: Heart,
  Home: Home,
  Stethoscope: Stethoscope,
};

function Prototype3() {
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
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#faf8f5]/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#hero" onClick={() => scrollToSection("#hero")} className="flex items-center gap-2">
              <Logo className="h-8 w-auto fill-current" />
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-[#5a4a3a] hover:text-[#2c1810] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <button 
              className="md:hidden p-2 text-[#5a4a3a]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#faf8f5]/95 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-sm font-medium py-2 text-[#5a4a3a]"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero - Warm & Photo Focused */}
      <section id="hero" className="relative min-h-screen pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 pt-12 lg:pt-20">
            <div className="lg:col-span-8">
              <div className="relative">
                <img 
                  src="/src/assets/hero-family.png" 
                  alt="Happy family" 
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl">
                  <Badge className="bg-white/90 text-[#2c1810] mb-4">
                    Independent Insurance Broker
                  </Badge>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {insuranceData.hero.headline}
                  </h1>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Quote className="w-8 h-8 text-[#d4a574] mb-4" />
                <p className="text-lg text-[#5a4a3a] font-medium italic">
                  {insuranceData.hero.tagline}
                </p>
              </div>
              <p className="text-[#8a7a6a] leading-relaxed">
                Protecting families with personalized insurance solutions that provide peace of mind for generations.
              </p>
              <Button 
                className="bg-[#2c1810] hover:bg-[#5a4a3a] text-white w-full h-12"
                onClick={() => scrollToSection("#contact")}
              >
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button onClick={() => scrollToSection("#about")} className="text-[#8a7a6a] hover:text-[#5a4a3a] transition-colors">
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </section>

      {/* About - Storytelling Style */}
      <section id="about" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <div className="relative">
                  <img 
                    src={insuranceData.about.image} 
                    alt="About me" 
                    className="w-full rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[#d4a574] text-white rounded-xl p-4 shadow-lg">
                    <p className="text-2xl font-bold">5+</p>
                    <p className="text-sm">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-[#d4a574] text-sm font-bold tracking-wider uppercase">My Story</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#2c1810] mt-4 leading-tight">
                  {insuranceData.about.title}
                </h2>
              </div>
              <div className="prose prose-lg text-[#5a4a3a]">
                <p className="text-lg leading-relaxed">
                  {insuranceData.about.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <Heart className="w-8 h-8 text-[#d4a574] mb-3" />
                  <p className="font-bold text-[#2c1810]">Family First</p>
                  <p className="text-sm text-[#8a7a6a]">Protection for loved ones</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <Shield className="w-8 h-8 text-[#d4a574] mb-3" />
                  <p className="font-bold text-[#2c1810]">Trusted Advisor</p>
                  <p className="text-sm text-[#8a7a6a]">Personalized guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Offerings - Card Grid */}
      <section id="offerings" className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#d4a574] text-sm font-bold tracking-wider uppercase">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2c1810] mt-4">
              How I Can Help
            </h2>
            <p className="text-lg text-[#8a7a6a] mt-4">
              Comprehensive coverage options for every stage of life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {insuranceData.offerings.map((offering, index) => {
              const Icon = iconMap[offering.icon as keyof typeof iconMap] || Shield;
              return (
                <Card 
                  key={offering.title} 
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-[#faf8f5]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={offering.image} 
                      alt={offering.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#d4a574]" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{offering.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-[#5a4a3a] mb-4">{offering.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {offering.benefits.map((benefit) => (
                        <Badge key={benefit} variant="secondary" className="bg-[#d4a574]/10 text-[#8a7a6a] border-0">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact - Personal Touch */}
      <section id="contact" className="py-24 lg:py-32 bg-[#f0ebe3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#d4a574] text-sm font-bold tracking-wider uppercase">Let's Connect</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2c1810] mt-4">
              Reach Out
            </h2>
            <p className="text-lg text-[#8a7a6a] mt-4">
              I'm here to help you find the right coverage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#d4a574]/20 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-[#d4a574]" />
              </div>
              <h3 className="text-xl font-bold text-[#2c1810] mb-2">Call Me</h3>
              <a href={insuranceData.contact.phoneHref} className="text-[#5a4a3a] hover:text-[#d4a574] transition-colors">
                {insuranceData.contact.phone}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#d4a574]/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#d4a574]" />
              </div>
              <h3 className="text-xl font-bold text-[#2c1810] mb-2">Email Me</h3>
              <a href={insuranceData.contact.emailHref} className="text-[#5a4a3a] hover:text-[#d4a574] transition-colors text-sm">
                {insuranceData.contact.email}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#d4a574]/20 flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-[#d4a574]" />
              </div>
              <h3 className="text-xl font-bold text-[#2c1810] mb-2">Follow Me</h3>
              <a href={insuranceData.contact.instagramHref} target="_blank" rel="noopener noreferrer" className="text-[#5a4a3a] hover:text-[#d4a574] transition-colors">
                {insuranceData.contact.instagram}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c1810] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
