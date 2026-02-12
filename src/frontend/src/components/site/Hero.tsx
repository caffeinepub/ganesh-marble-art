import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToCollections = () => {
    const element = document.getElementById('krishna');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/generated/hero-marble-gold-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      {/* Decorative Corners */}
      <div
        className="absolute left-0 top-0 h-32 w-32 opacity-50 md:h-48 md:w-48"
        style={{
          backgroundImage: 'url(/assets/generated/gold-filigree-corners.dim_1024x1024.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-32 w-32 rotate-180 opacity-50 md:h-48 md:w-48"
        style={{
          backgroundImage: 'url(/assets/generated/gold-filigree-corners.dim_1024x1024.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Content */}
      <div className="container relative z-10 flex min-h-[600px] flex-col items-center justify-center px-4 py-20 text-center md:min-h-[700px]">
        <h1 className="font-heading text-4xl font-bold leading-tight text-royal-gold drop-shadow-lg md:text-6xl lg:text-7xl">
          Ganesh Marble Art
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/95 leading-relaxed md:text-xl">
          Experience the divine beauty of handcrafted marble sculptures. Each piece is a testament to
          centuries-old artistry, bringing sacred elegance into your sacred spaces.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            onClick={scrollToCollections}
            className="bg-royal-gold text-royal-burgundy font-semibold hover:bg-royal-gold/90 shadow-royal transition-all duration-300 hover:scale-105"
          >
            Explore Collections
          </Button>
        </div>
      </div>
    </section>
  );
}
