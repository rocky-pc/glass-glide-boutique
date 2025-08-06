import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="glass-card border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-playfair text-xl font-semibold text-gradient">
                Glide Boutique
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Curating premium lifestyle products with elegant design and exceptional quality. 
              Experience luxury in every detail.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="glass-button p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="glass-button p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="glass-button p-2">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              {['Shop', 'About', 'Contact', 'FAQ', 'Size Guide', 'Returns'].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-playfair font-semibold text-lg">Categories</h3>
            <div className="space-y-2">
              {['Audio', 'Wearables', 'Fashion', 'Bags', 'Home', 'Accessories'].map((category) => (
                <Link
                  key={category}
                  to={`/shop?category=${category.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-playfair font-semibold text-lg">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for exclusive offers and new arrivals.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="glass-button bg-white/5 border-white/10"
              />
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                Subscribe
              </Button>
            </div>
            <div className="space-y-2 pt-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@glideboutique.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 Glide Boutique. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;