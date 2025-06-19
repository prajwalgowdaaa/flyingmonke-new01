import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Ballpit from "@/components/Ballpit";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Interactive Ballpit Background */}
      <div className="absolute inset-0">
        <Ballpit
          count={200}
          gravity={0.7}
          friction={0.8}
          wallBounce={0.95}
          followCursor={true}
          className="opacity-30"
        />
      </div>
      
      {/* 404 Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-display text-8xl md:text-9xl font-light mb-8 animate-fade-in-up">
          404
        </h1>
        <p className="text-body text-xl md:text-2xl opacity-70 mb-8 animate-fade-in-up delay-200">
          Page Not Found
        </p>
        <p className="text-body text-lg opacity-50 mb-12 animate-fade-in-up delay-400 max-w-md mx-auto">
          The page you're looking for has wandered off into the architectural void.
        </p>
        <a 
          href="/" 
          className="inline-block px-12 py-4 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 cursor-hover animate-fade-in-up delay-600"
        >
          Return Home
        </a>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-1000" />
    </div>
  );
};

export default NotFound;
