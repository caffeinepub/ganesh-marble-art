import { ItemCard } from './ItemCard';

interface GodSectionProps {
  id: string;
  title: string;
  description: string;
  items: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
}

export function GodSection({ id, title, description, items }: GodSectionProps) {
  return (
    <section id={id} className="relative scroll-mt-20 py-16 md:py-24">
      {/* Section Banner Background */}
      <div
        className="absolute inset-x-0 top-0 h-48 opacity-10"
        style={{
          backgroundImage: 'url(/assets/generated/section-banner-royal-pattern.dim_1600x400.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container relative z-10">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-royal-gold drop-shadow-sm md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-royal-gold to-transparent shadow-sm" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
