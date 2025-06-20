import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import ScrollIndicator from '@/components/ScrollIndicator';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import Footer from '@/components/Footer';
const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <ScrollIndicator />
      <Navigation />
      
      <main id="main-content" className="relative">
        <Hero />
        
        {/* Featured Projects Section */}
        <section className="relative bg-black">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-display text-4xl md:text-5xl font-light mb-6 animate-fade-in-up">
                  Selected Works
                </h2>
                <p className="text-body text-lg opacity-70 max-w-2xl mx-auto animate-fade-in-up delay-200">
                  Each project is a dialogue between space, light, and human experience.
                </p>
              </div>
              
              <ProjectGrid />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="relative py-32 px-6">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-display text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed mb-12 animate-fade-in-up">
              "Architecture begins where function ends — in the quiet emotion a space can evoke."
            </blockquote>
            
            <div className="w-16 h-px bg-white/30 mx-auto mb-8 animate-fade-in-up delay-300" />
            
            <p className="text-body text-lg opacity-70 animate-fade-in-up delay-400">
              Studio Philosophy
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="relative py-20 px-6">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display text-3xl md:text-4xl font-light mb-8 animate-fade-in-up">
            Let’s build more than just Walls
            </h2>
            
            <a 
              href="/contact"
              className="group inline-block px-12 py-4 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-500 cursor-hover focus-visible:outline-custom animate-fade-in-up delay-200"
            >
              <span className="text-sm uppercase tracking-wider">
                Start a Conversation
              </span>
              <span className="inline-block ml-3 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
