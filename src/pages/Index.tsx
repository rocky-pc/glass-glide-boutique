import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Sparkles } from 'lucide-react';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { products, testimonials } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium items that define luxury and style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/shop">
              <Button 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                size="lg"
              >
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-muted-foreground">
              Find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Audio', 'Wearables', 'Fashion', 'Bags', 'Home', 'Accessories'].map((category, index) => (
              <Link
                key={category}
                to={`/shop?category=${category.toLowerCase()}`}
                className="group block"
              >
                <div className="glass-card hover-lift hover-glow transition-all duration-300 text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Premium {category.toLowerCase()} collection
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied customers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="glass-card text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="animate-scale-in">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="font-playfair text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="font-playfair text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Premium Products</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <Star className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="font-playfair text-3xl font-bold text-primary mb-2">4.9</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="font-playfair text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card text-center max-w-2xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter and be the first to know about new arrivals, 
              exclusive offers, and style inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="glass-button bg-white/5 border-white/10 flex-1"
              />
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy and never share your email address.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
