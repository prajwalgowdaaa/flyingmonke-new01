import { Instagram, Facebook, X, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div>
            <div className="text-display text-2xl font-light mb-4">
              flying<span className="font-bold">monké</span>
            </div>
            <p className="text-body text-sm opacity-70 mb-6">
              Architecting culture through crafted spatial stories.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/flyingmonke__/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-white hover:text-black transition-all duration-300 cursor-hover"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://www.facebook.com/people/flyingmonk%C3%A9/61576847467953/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-white hover:text-black transition-all duration-300 cursor-hover"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://x.com/flyingmonke_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-white hover:text-black transition-all duration-300 cursor-hover"
                aria-label="X (Twitter)"
              >
                <X size={16} />
              </a>
              <a 
                href="https://www.linkedin.com/company/flyingmonkecreativelabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-white hover:text-black transition-all duration-300 cursor-hover"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-display text-lg font-medium mb-4">Head Office</h3>
            <div className="space-y-2 text-sm opacity-70">
              <p>Bengaluru, India</p>
              <p>
                <a href="mailto:workflyingmonke@gmail.com" className="hover:opacity-100 transition-opacity cursor-hover">
                  workflyingmonke@gmail.com
                </a>
              </p>
              <div className="space-y-1">
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
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-display text-lg font-medium mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm opacity-70">
              <p>
                <a href="/" className="hover:opacity-100 transition-opacity cursor-hover">
                  Home
                </a>
              </p>
              <p>
                <a href="/studio" className="hover:opacity-100 transition-opacity cursor-hover">
                  Studio
                </a>
              </p>
              <p>
                <a href="/projects" className="hover:opacity-100 transition-opacity cursor-hover">
                  Projects
                </a>
              </p>
              <p>
                <a href="/insights" className="hover:opacity-100 transition-opacity cursor-hover">
                  Insights
                </a>
              </p>
              <p>
                <a href="/contact" className="hover:opacity-100 transition-opacity cursor-hover">
                  Contact
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="text-sm opacity-70 mb-4 md:mb-0">
            © 2024 flyingmonké. All Rights Reserved.
          </div>
          <div className="text-sm opacity-70">
            Made with love in India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
