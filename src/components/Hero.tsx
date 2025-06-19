import { useEffect, useState } from 'react';
import Squares from './Squares';

const Hero = () => {
  const [isCompressed, setIsCompressed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const compressionPoint = windowHeight * 0.8;

      setIsCompressed(scrollY > compressionPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section
      className={`relative min-h-screen flex flex-col justify-center items-center text-center transition-all duration-700 ${
        isCompressed ? 'hero-compressed' : ''
      }`}
      aria-label="Hero section"
    >
      {/* Interactive squares background for desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 z-0">
          <Squares
            speed={0.2}
            squareSize={40}
            direction='up' // up, down, left, right, diagonal
            borderColor='#141414'
            hoverFillColor='#222'
            className="opacity-20"
          />
        </div>
      )}

      {/* Static dark background for mobile */}
      {isMobile && (
        <div className="absolute inset-0 bg-black z-0" />
      )}

      {/* Main content */}
      <div className={`relative z-10 transition-all duration-700 px-6 ${isCompressed ? 'scale-50 opacity-70' : ''}`}>

        <h1 className="text-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light mb-8 animate-fade-in-up">
          flying<span className="font-bold">monké</span>
        </h1>
        <div className="w-px h-20 bg-white/30 mx-auto animate-fade-in delay-500" />
        <br></br>
         <p className="text-2xl mb-8 text-center max-w-full mx-auto">
 Architecture ◦ Interiors ◦ Experiments </p>
      </div>

      {/* Manifesto */}
      <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-700 px-6 z-10 ${
        isCompressed ? 'opacity-0 translate-y-4' : 'opacity-100'
      }`}>
        <p className="text-display text-xl sm:text-2xl md:text-3xl font-light leading-tight max-w-4xl mx-auto text-balance animate-fade-in-up delay-700">
          Architecting culture through crafted spatial stories.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse transition-all duration-700 z-10 ${
        isCompressed ? 'opacity-0' : 'opacity-50'
      }`}>
        <div className="w-6 h-10 border border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
