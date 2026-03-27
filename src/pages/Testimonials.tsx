import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Jessica M.",
    text: "Samantha is absolutely amazing! I've never felt more comfortable during a waxing session. The results are always flawless.",
    service: "Waxing"
  },
  {
    name: "Sarah T.",
    text: "My lashes have never looked better. She took the time to understand exactly what I wanted and delivered perfectly. Highly recommend!",
    service: "Lashes"
  },
  {
    name: "Emily R.",
    text: "The most relaxing facial I've ever had. My skin is glowing and feels so rejuvenated. Estheva Beauty is my new go-to spot.",
    service: "Facials"
  },
  {
    name: "Amanda K.",
    text: "She completely transformed my brows! I get compliments all the time now. Thank you Samantha!",
    service: "Brows"
  }
];

export function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Client Love</h1>
        <p className="text-text-light max-w-2xl mx-auto">Don't just take our word for it. Here's what our beautiful clients have to say.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
          >
            <div className="flex text-primary mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-text italic mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
            <div className="flex justify-between items-end">
              <p className="font-serif font-medium text-lg text-primary">{testimonial.name}</p>
              <span className="text-xs uppercase tracking-wider text-text-light bg-white px-3 py-1 rounded-full">{testimonial.service}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
