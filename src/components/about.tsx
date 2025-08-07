import { Lightbulb, HeartHandshake, Star } from 'lucide-react';
// import aboutBackground from '@/assets/about-bg.jpg'; // Add this image
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* <img
          src={aboutBackground}
          alt="About Background"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 w-16 h-16 glass rounded-full float animate-float" />
        <div className="absolute top-1/2 right-10 w-12 h-12 glass rounded-full float animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-24 left-24 w-20 h-20 glass rounded-full float animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">About</span>
            <br />
            <span className="text-foreground">Our Brand</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            We’re more than just a brand — we’re a lifestyle. Founded with passion and driven by a mission to deliver excellence,
            our collection reflects timeless design, quality, and purpose.
          </p>

          {/* Mission / Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-center px-4">
              <Lightbulb className="mx-auto text-primary h-8 w-8 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Creative Vision</h4>
              <p className="text-sm text-muted-foreground">
                Every product begins with a bold idea to blend form and function beautifully.
              </p>
            </div>
            <div className="text-center px-4">
              <HeartHandshake className="mx-auto text-primary h-8 w-8 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Customer First</h4>
              <p className="text-sm text-muted-foreground">
                Your satisfaction drives us. We value trust and long-term relationships.
              </p>
            </div>
            <div className="text-center px-4">
              <Star className="mx-auto text-primary h-8 w-8 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Uncompromised Quality</h4>
              <p className="text-sm text-muted-foreground">
                From materials to craftsmanship, we never settle for less than the best.
              </p>
            </div>
          </div>

          {/* CTA / Footer Quote */}
          <div className="mt-16">
            <blockquote className="italic text-muted-foreground max-w-xl mx-auto">
              “Quality means doing it right when no one is looking.” – Henry Ford
            </blockquote>

            <div className="mt-8 flex justify-center">
              <Button size="lg" className="glass-button px-8 py-5 text-lg hover-scale">
                Discover Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
