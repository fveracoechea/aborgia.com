import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "#/components/ui/button";
import { Badge } from "#/components/ui/badge";
import { Separator } from "#/components/ui/separator";
import { 
  Shield, Heart, Home, Stethoscope, Phone, Mail, ExternalLink, 
  ChevronRight, ArrowRight, Menu, X, Bookmark, Clock, User
} from "lucide-react";
import { insuranceData, navLinks } from "#/data/insurance";
import Logo from "#/assets/logo.svg?react";

export const Route = createFileRoute("/prototype/5")({
  component: Prototype5,
});

const iconMap = {
  Shield: Shield,
  Heart: Heart,
  Home: Home,
  Stethoscope: Stethoscope,
};

function Prototype5() {
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
    <div className="min-h-screen bg-[#f8f7f4]">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled ? "bg-[#f8f7f4]/95 backdrop-blur-md border-[#e5e4e0]" : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#hero" onClick={() => scrollToSection("#hero")} className="flex items-center gap-2">
              <Logo className="h-8 w-auto fill-current" />
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.href.replace("#", "") 
                      ? "text-[#1a1a1a]" 
                      : "text-[#6b6b6b] hover:text-[#1a1a1a]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="sm"
                className="hidden md:flex border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
                onClick={() => scrollToSection("#contact")}
              >
                Contact
              </Button>
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f8f7f4]/95 backdrop-blur-md border-t border-[#e5e4e0]">
            <div className="px-4 py-4 flex flex-col gap-4">
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

      {/* Hero - Editorial Magazine Style */}
      <section id="hero" className="pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 pt-8 lg:pt-12">
            {/* Left Column - Text */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-sm text-[#6b6b6b]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> Updated Today
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#6b6b6b]" />
                  <span>5 min read</span>
                </div>
                
                <Badge variant="outline" className="w-fit border-[#1a1a1a] text-[#1a1a1a]">
                  Independent Insurance Broker
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-[#1a1a1a]">
                  {insuranceData.hero.headline}
                </h1>
                
                <p className="text-xl text-[#6b6b6b] leading-relaxed">
                  {insuranceData.hero.tagline}
                </p>
                
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#e5e4e0] flex items-center justify-center">
                      <User className="w-5 h-5 text-[#6b6b6b]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1a1a1a]">Aborgia Insurance</p>
                      <p className="text-xs text-[#6b6b6b]">Licensed Broker</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    className="bg-[#1a1a1a] hover:bg-[#333] text-white"
                    onClick={() => scrollToSection("#contact")}
                  >
                    Get Coverage <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-[#1a1a1a] text-[#1a1a1a]"
                    onClick={() => scrollToSection("#offerings")}
                  >
                    <Bookmark className="w-4 h-4 mr-2" /> Save
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Large Image */}
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src="/src/assets/hero-family.png" 
                    alt="Happy family" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <p className="text-sm font-medium text-[#1a1a1a]">Family Protection</p>
                  </div>
                  <div className="bg-[#1a1a1a] text-white rounded-lg px-4 py-2">
                    <p className="text-sm font-medium">Featured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About - Asymmetric Layout */}
      <section id="about" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <span className="text-[#6b6b6b] text-sm font-medium tracking-wider uppercase">About</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-2 leading-tight">
                  {insuranceData.about.title}
                </h2>
                <Separator className="my-6" />
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e5e4e0] flex items-center justify-center">
                      <Shield className="w-4 h-4 text-[#6b6b6b]" />
                    </div>
                    <span className="text-sm text-[#6b6b6b]">Licensed & Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e5e4e0] flex items-center justify-center">
                      <Heart className="w-4 h-4 text-[#6b6b6b]" />
                    </div>
                    <span className="text-sm text-[#6b6b6b]">Family Focused</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e5e4e0] flex items-center justify-center">
                      <Clock className="w-4 h-4 text-[#6b6b6b]" />
                    </div>
                    <span className="text-sm text-[#6b6b6b]">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-9">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <img 
                    src={insuranceData.about.image} 
                    alt="About me" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-[#4a4a4a] leading-relaxed">
                    {insuranceData.about.description}
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="border-t border-[#e5e4e0] pt-4">
                      <p className="text-3xl font-bold text-[#1a1a1a]">4+</p>
                      <p className="text-sm text-[#6b6b6b]">Insurance Types</p>
                    </div>
                    <div className="border-t border-[#e5e4e0] pt-4">
                      <p className="text-3xl font-bold text-[#1a1a1a]">100%</p>
                      <p className="text-sm text-[#6b6b6b]">Personalized</p>
                    </div>
                    <div className="border-t border-[#e5e4e0] pt-4">
                      <p className="text-3xl font-bold text-[#1a1a1a]">24/7</p>
                      <p className="text-sm text-[#6b6b6b]">Support</p>
                    </div>
                    <div className="border-t border-[#e5e4e0] pt-4">
                      <p className="text-3xl font-bold text-[#1a1a1a]">5+</p>
                      <p className="text-sm text-[#6b6b6b]">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Offerings - Magazine Grid */}
      <section id="offerings" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[#6b6b6b] text-sm font-medium tracking-wider uppercase">Services</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-2">
                Insurance Offerings
              </h2>
            </div>
            <Button 
              variant="outline" 
              className="hidden md:flex border-[#1a1a1a] text-[#1a1a1a]"
              onClick={() => scrollToSection("#contact")}
            >
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Featured Article */}
            <div className="lg:col-span-7">
              <div className="group relative rounded-lg overflow-hidden cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={insuranceData.offerings[0].image} 
                    alt={insuranceData.offerings[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <Badge className="bg-white/20 text-white border-white/30 mb-3">
                    Featured
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {insuranceData.offerings[0].title}
                  </h3>
                  <p className="text-white/80 line-clamp-2">
                    {insuranceData.offerings[0].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Side Articles */}
            <div className="lg:col-span-5 space-y-6">
              {insuranceData.offerings.slice(1).map((offering, index) => {
                const Icon = iconMap[offering.icon as keyof typeof iconMap] || Shield;
                return (
                  <div key={offering.title} className="group flex gap-4 cursor-pointer">
                    <div className="w-32 h-24 rounded-lg overflow-hidden shrink-0">
                      <img 
                        src={offering.image} 
                        alt={offering.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-[#6b6b6b]" />
                        <span className="text-xs text-[#6b6b6b] uppercase tracking-wider">{offering.icon}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:underline">
                        {offering.title}
                      </h3>
                      <p className="text-sm text-[#6b6b6b] line-clamp-2 mt-1">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Minimal Editorial */}
      <section id="contact" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[#6b6b6b] text-sm font-medium tracking-wider uppercase">Contact</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-2">
                Get In Touch
              </h2>
              <p className="text-[#6b6b6b] mt-4">
                Ready to protect what matters most? I'm here to help you find the perfect coverage.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-4">
                <a 
                  href={insuranceData.contact.phoneHref}
                  className="flex items-center gap-6 p-6 bg-white rounded-lg border border-[#e5e4e0] hover:border-[#1a1a1a] transition-colors group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#f8f7f4] flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1a1a1a]">Phone</h3>
                    <p className="text-[#6b6b6b]">{insuranceData.contact.phone}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#6b6b6b] group-hover:text-[#1a1a1a] transition-colors" />
                </a>

                <a 
                  href={insuranceData.contact.emailHref}
                  className="flex items-center gap-6 p-6 bg-white rounded-lg border border-[#e5e4e0] hover:border-[#1a1a1a] transition-colors group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#f8f7f4] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1a1a1a]">Email</h3>
                    <p className="text-[#6b6b6b] text-sm">{insuranceData.contact.email}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#6b6b6b] group-hover:text-[#1a1a1a] transition-colors" />
                </a>

                <a 
                  href={insuranceData.contact.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 bg-white rounded-lg border border-[#e5e4e0] hover:border-[#1a1a1a] transition-colors group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#f8f7f4] flex items-center justify-center shrink-0">
                    <ExternalLink className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1a1a1a]">Instagram</h3>
                    <p className="text-[#6b6b6b]">{insuranceData.contact.instagram}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#6b6b6b] group-hover:text-[#1a1a1a] transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e5e4e0] py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Logo className="h-8 w-auto fill-current" />
            <p className="text-sm text-[#6b6b6b]">
              © {new Date().getFullYear()} Aborgia Insurance. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href={insuranceData.contact.phoneHref} className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href={insuranceData.contact.emailHref} className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href={insuranceData.contact.instagramHref} target="_blank" rel="noopener noreferrer" className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
