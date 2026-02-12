import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const collections = [
    { id: 'krishna', label: 'Lord Krishna' },
    { id: 'ganesha', label: 'Lord Ganesha' },
    { id: 'shiva', label: 'Lord Shiva' },
    { id: 'parvati', label: 'Goddess Parvati' },
    { id: 'handmade-portraits', label: 'Handmade Portraits' },
    { id: 'marble-structures', label: 'Marble Structures' },
    { id: 'other-gods', label: 'Other Gods' },
  ];

  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'ganesh-marble-art';

  return (
    <footer className="border-t border-royal-border bg-card/50 backdrop-blur-sm">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/ganesh-marble-art-logo.dim_512x512.png"
                alt="Ganesh Marble Art"
                className="h-10 w-10 object-contain"
              />
              <span className="font-heading text-xl font-bold text-royal-gold">
                Ganesh Marble Art
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Crafting divine beauty through timeless marble artistry
            </p>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Collections</h3>
            <ul className="space-y-2">
              {collections.map((collection) => (
                <li key={collection.id}>
                  <button
                    onClick={() => scrollToSection(collection.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-royal-gold"
                  >
                    {collection.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Email</p>
                <a
                  href="mailto:gautamdayma2005@gmail.com"
                  className="text-sm text-foreground transition-colors hover:text-royal-gold break-all"
                >
                  gautamdayma2005@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Phone</p>
                <a
                  href="tel:+918769262238"
                  className="text-sm text-foreground transition-colors hover:text-royal-gold"
                >
                  +91 8769262238
                </a>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-2 text-sm font-medium text-royal-gold transition-colors hover:text-royal-gold/80"
              >
                Get in Touch →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-royal-border pt-8 flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Ganesh Marble Art. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-royal-gold fill-royal-gold" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-royal-gold transition-colors hover:text-royal-gold/80"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
