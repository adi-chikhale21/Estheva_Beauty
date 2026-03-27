import { motion } from 'motion/react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-secondary">
        {/* Abstract background shapes inspired by the image */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-20 w-72 h-72 bg-white/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-text-light mb-4 font-medium">
              Hello Everyone
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white drop-shadow-md mb-6 leading-tight">
              Estheva <br className="md:hidden" /> Beauty
            </h1>
            <p className="text-lg md:text-xl text-text/80 mb-10 max-w-2xl mx-auto font-light">
              Elevating your natural beauty with premium waxing, facials, lashes, and brows.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/booking" 
                className="px-8 py-4 bg-primary text-white rounded-full font-medium tracking-wide hover:bg-primary/90 transition-all hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                Book Appointment
              </Link>
              <WhatsAppButton className="w-full sm:w-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Our Services</h2>
            <p className="text-text-light max-w-2xl mx-auto">Discover our range of premium beauty treatments designed to make you look and feel your absolute best.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Waxing', desc: 'Smooth, flawless skin with our gentle waxing techniques.' },
              { title: 'Facials', desc: 'Rejuvenating treatments tailored to your unique skin type.' },
              { title: 'Lashes', desc: 'Enhance your eyes with our custom lash extensions and lifts.' },
              { title: 'Brows', desc: 'Perfectly sculpted brows to frame your beautiful face.' }
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-surface p-8 rounded-2xl text-center hover:shadow-xl transition-shadow"
              >
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-4 opacity-70" />
                <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                <p className="text-text-light text-sm mb-6">{service.desc}</p>
                <Link to="/booking" className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                  Book <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section inspired by the image */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-6 uppercase tracking-tight">Last Minute<br/>Openings!</h2>
            <p className="text-xl md:text-2xl mb-10 font-light">Snag any spot this Wednesday 3/11<br/>receive 10% OFF! ✨</p>
            <WhatsAppButton text="DM TO BOOK!" className="bg-white text-primary hover:bg-white/90" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
