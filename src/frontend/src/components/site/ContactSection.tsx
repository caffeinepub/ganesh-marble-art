import { Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-16 md:py-24">
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
          <h2 className="font-heading text-3xl font-bold text-royal-gold md:text-4xl lg:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Connect with us to discuss your marble art requirements
          </p>
          <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-transparent via-royal-gold to-transparent" />
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="border-royal-border bg-card/50 backdrop-blur-sm shadow-royal">
            <CardHeader className="text-center">
              <CardTitle className="font-heading text-2xl text-royal-gold">
                Contact Information
              </CardTitle>
              <CardDescription className="text-base">
                Reach out to us for inquiries, custom orders, or any questions about our marble art
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Email Card */}
                <div className="group rounded-lg border border-royal-border bg-card p-6 transition-all duration-300 hover:border-royal-gold hover:shadow-royal">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-royal-gold/10 p-3 transition-colors group-hover:bg-royal-gold/20">
                      <Mail className="h-6 w-6 text-royal-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-semibold text-foreground">Email</h3>
                      <a
                        href="mailto:gautamdayma2005@gmail.com"
                        className="mt-2 block break-all text-sm text-muted-foreground transition-colors hover:text-royal-gold"
                      >
                        gautamdayma2005@gmail.com
                      </a>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-royal-burgundy"
                        asChild
                      >
                        <a href="mailto:gautamdayma2005@gmail.com">Send Email</a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="group rounded-lg border border-royal-border bg-card p-6 transition-all duration-300 hover:border-royal-gold hover:shadow-royal">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-royal-gold/10 p-3 transition-colors group-hover:bg-royal-gold/20">
                      <Phone className="h-6 w-6 text-royal-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-semibold text-foreground">Phone</h3>
                      <a
                        href="tel:+918769262238"
                        className="mt-2 block text-sm text-muted-foreground transition-colors hover:text-royal-gold"
                      >
                        +91 8769262238
                      </a>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-royal-burgundy"
                        asChild
                      >
                        <a href="tel:+918769262238">Call Now</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-royal-border bg-muted/30 p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  We look forward to bringing your vision to life with our exquisite marble craftsmanship
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
