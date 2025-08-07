import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import contactBackground from '@/assets/contact-bg.jpg';

const Contact = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* <img
          src={contactBackground}
          alt="Contact Background"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/40" />
      </div>

      {/* Floating Glass Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-12 w-16 h-16 glass rounded-full float animate-float" />
        <div className="absolute top-40 right-16 w-12 h-12 glass rounded-full float animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-24 left-24 w-20 h-20 glass rounded-full float animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Contact Form Content */}
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-10 shadow-xl animate-fade-in">
          <h2 className="text-center font-playfair text-4xl md:text-5xl font-bold mb-6 text-blue-500 animate-slide-up">
  Get in Touch
</h2>

          <p className="text-center text-muted-foreground text-lg mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
          </p>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <input type="text" placeholder="Your Name" className="glass-input" required />
            <input type="email" placeholder="Your Email" className="glass-input" required />
            <input type="text" placeholder="Subject" className="glass-input md:col-span-2" />
            <textarea placeholder="Your Message" rows={5} className="glass-input md:col-span-2" required />
            <div className="md:col-span-2 text-center">
              <Button
                type="submit"
                className="px-8 py-4 text-lg bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-all"
              >
                Send Message
              </Button>
            </div>
          </form>

          {/* Contact Details */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3 text-white text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div>
              <Mail className="mx-auto mb-2" />
              <p>support@example.com</p>
            </div>
            <div>
              <Phone className="mx-auto mb-2" />
              <p>+1 234 567 8901</p>
            </div>
            <div>
              <MapPin className="mx-auto mb-2" />
              <p>123 Luxury Street, Cityville</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
