import { motion } from 'motion/react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Calendar, Clock, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Book Your Appointment</h1>
        <p className="text-text-light max-w-2xl mx-auto text-lg">
          Fill out the form below or message us directly on WhatsApp ✨
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 bg-surface p-8 md:p-10 rounded-3xl shadow-sm"
        >
          <h2 className="text-2xl font-serif text-primary mb-6">Request an Appointment</h2>
          
          {isSubmitted ? (
            <div className="bg-green-50 text-green-800 p-6 rounded-2xl text-center border border-green-200">
              <h3 className="text-xl font-serif mb-2">Request Sent!</h3>
              <p>Thank you for reaching out. We will get back to you shortly to confirm your appointment.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">Full Name</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white transition-shadow" placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">Phone Number</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white transition-shadow" placeholder="(555) 123-4567" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text mb-2">Service</label>
                  <select id="service" required className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white transition-shadow text-text">
                    <option value="">Select a service...</option>
                    <option value="waxing">Waxing</option>
                    <option value="facials">Facials</option>
                    <option value="lashes">Lashes</option>
                    <option value="brows">Brows</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-text mb-2">Preferred Date</label>
                  <input type="date" id="date" required className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white transition-shadow text-text" />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-text mb-2">Additional Notes</label>
                <textarea id="notes" rows={4} className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white transition-shadow resize-none" placeholder="Any specific requests or questions?"></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-medium tracking-wide hover:bg-primary/90 transition-all hover:shadow-lg flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Request
              </button>
            </form>
          )}
        </motion.div>

        {/* Info & WhatsApp */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
            <h2 className="text-2xl font-serif text-primary mb-6">Contact Info</h2>
            <div className="space-y-6 text-text-light">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-text">Availability</h3>
                  <p>Tuesday - Saturday</p>
                  <p>By appointment only</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-text">Hours</h3>
                  <p>10:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-text">Location</h3>
                  <p>Estheva Beauty Studio</p>
                  <p>123 Beauty Lane, Suite 100</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-8 rounded-3xl text-center">
            <h2 className="text-xl font-serif text-primary mb-3">Need a quicker response?</h2>
            <p className="text-text-light mb-6 text-sm">
              Message us directly on WhatsApp to check immediate availability.
            </p>
            <WhatsAppButton text="Message on WhatsApp" className="w-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
