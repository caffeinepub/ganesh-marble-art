import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'krishna', label: 'Krishna' },
    { id: 'ganesha', label: 'Ganesha' },
    { id: 'shiva', label: 'Shiva' },
    { id: 'parvati', label: 'Parvati' },
    { id: 'handmade-portraits', label: 'Portraits' },
    { id: 'marble-structures', label: 'Structures' },
    { id: 'other-gods', label: 'Other Gods' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-royal-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/90 shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/assets/generated/ganesh-marble-art-logo.dim_512x512.png"
            alt="Ganesh Marble Art"
            className="h-12 w-12 object-contain"
          />
          <div className="flex flex-col">
            <span className="font-heading text-xl font-bold text-royal-gold md:text-2xl">
              Ganesh Marble Art
            </span>
            <span className="text-xs text-muted-foreground tracking-wide">Divine Craftsmanship</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-foreground transition-all duration-200 hover:text-royal-gold hover:scale-105"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden hover:bg-royal-gold/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-royal-border bg-background/98 backdrop-blur-md lg:hidden">
          <nav className="container flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-sm font-medium text-foreground transition-colors hover:text-royal-gold"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
