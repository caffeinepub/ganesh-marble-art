import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ItemCardProps {
  title: string;
  description: string;
  image: string;
}

export function ItemCard({ title, description, image }: ItemCardProps) {
  return (
    <Card className="group overflow-hidden border-royal-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-royal hover:border-royal-gold hover:-translate-y-1">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="font-heading text-xl text-royal-gold group-hover:text-royal-gold/90 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
