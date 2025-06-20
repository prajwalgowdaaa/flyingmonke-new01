import { Instagram, Facebook, X, Linkedin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import ScrollIndicator from '@/components/ScrollIndicator';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <ScrollIndicator />
      <Navigation />
      
      <main id="main-content" className="relative pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-4xl md:text-6xl font-light mb-8 animate-fade-in-up">
              Let's Create Something
            </h1>
            <p className="text-body text-lg md:text-xl opacity-70 mb-12 animate-fade-in-up delay-200 leading-relaxed">
              Ready to begin your architectural journey? We'd love to hear about your vision and explore how we can bring it to life.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="animate-fade-in-up">
                <h2 className="text-display text-3xl font-light mb-8">
                  Start a Conversation
                </h2>
                <form className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/30 focus:border-white focus:outline-none transition-colors text-white placeholder-white/50"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/30 focus:border-white focus:outline-none transition-colors text-white placeholder-white/50"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Project Type"
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/30 focus:border-white focus:outline-none transition-colors text-white placeholder-white/50"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="What are you dreaming of?"
                      rows={4}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/30 focus:border-white focus:outline-none transition-colors text-white placeholder-white/50 resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="px-12 py-4 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 cursor-hover mt-8"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="animate-fade-in-up delay-200">
                <h3 className="text-display text-2xl font-light mb-8">
                  Get in Touch
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-display text-lg font-medium mb-2">Head Office</h4>
                    <p className="text-body opacity-70">
                      Bengaluru, India
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-display text-lg font-medium mb-2">Email</h4>
                    <p className="text-body opacity-70">
                      <a href="mailto:workflyingmonke@gmail.com" className="hover:opacity-100 transition-opacity cursor-hover">
                        workflyingmonke@gmail.com
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-display text-lg font-medium mb-2">Phone</h4>
                    <div className="space-y-1 text-body opacity-70">
                      <p>
                        <a href="tel:+919535696698" className="hover:opacity-100 transition-opacity cursor-hover">
                          +91-9535696698
                        </a>
                      </p>
                      <p>
                        <a href="tel:+919606165475" className="hover:opacity-100 transition-opacity cursor-hover">
                          +91-9606165475
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-display text-lg font-medium mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.instagram.com/flyingmonke__/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 border hover:border-grey hover:bg-white hover:text-black transition-all duration-300 cursor-hover"
                        aria-label="Instagram"
                      >
                        <Instagram size={20} />
                      </a>
                      <a 
                        href="https://www.facebook.com/people/flyingmonk%C3%A9/61576847467953/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 cursor-hover"
                        aria-label="Facebook"
                      >
                        <Facebook size={20} />
                      </a>
                      <a 
                        href="https://x.com/flyingmonke_" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 cursor-hover"
                        aria-label="X (Twitter)"
                      >
                        <X size={20} />
                      </a>
                      <a 
                        href="https://www.linkedin.com/company/flyingmonkecreativelabs" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 cursor-hover"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-display text-3xl font-light mb-12 text-center">
              Visit Our Studio
            </h2>
            <div className="h-96 bg-gray-900 border border-white/10 relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0858431928383!2d77.54293737467354!3d13.045475187216692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzQzLjciTiA3N8KwMzInMzYuNSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ 
                  border: 0,
                  filter: 'grayscale(1) contrast(1.2) brightness(0.8)',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="flyingmonké Studio Location"
              />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
              </div>
            </div>
            
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
