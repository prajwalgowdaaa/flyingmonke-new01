import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Studio', path: '/studio' },
    { name: 'Projects', path: '/projects' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Skip to content */}
      <a 
        href="#main-content" 
        className="skip-to-content focus-visible:outline-custom"
      >
        Skip to content
      </a>

      {/* Navigation */}
      <nav 
        className={`fixed top-6 left-6 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black/80 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2' : ''
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center">
          <Link 
            to="/" 
            className="text-display text-xl font-medium cursor-hover focus-visible:outline-custom"
            aria-label="flyingmonké home"
          >
            flying<span className="font-bold">monké</span>
          </Link>

          {/* Menu toggle button */}
          <button
            onClick={toggleMenu}
            className="ml-8 w-8 h-8 flex flex-col justify-center items-center cursor-hover focus-visible:outline-custom group"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            aria-controls="main-menu"
          >
            <span 
              className={`w-5 h-px bg-white transition-all duration-300 group-hover:w-6 ${
                isMenuOpen ? 'rotate-45 translate-y-0.5' : ''
              }`}
            />
            <span 
              className={`w-5 h-px bg-white transition-all duration-300 mt-1 group-hover:w-6 ${
                isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay with Enhanced Micro-interactions */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex items-center justify-center animate-fade-in">
          <div 
            id="main-menu"
            className="flex flex-col items-center space-y-8"
          >
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`group relative text-display text-3xl md:text-4xl font-light cursor-hover transition-all duration-500 hover:scale-110 animate-fade-in-up ${
                  location.pathname === item.path ? 'text-white font-medium' : 'text-white/60 hover:text-white'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                onClick={() => setIsMenuOpen(false)}
                aria-label={`Navigate to ${item.name}`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-110 transition-transform duration-300 -z-0" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-1000" />
        </div>
      )}
    </>
  );
};

export default Navigation;
