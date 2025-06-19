import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import ScrollIndicator from '@/components/ScrollIndicator';
import Footer from '@/components/Footer';

const Project = () => {
  const { slug } = useParams();

  const projectData = {
    title: "Minimalist Residence",
    location: "Bengaluru, India",
    year: "2023",
    area: "2,400 sq ft",
    type: "Residential",
    description: "A study in spatial reduction and material honesty, this residence challenges conventional notions of luxury through simplicity.",
    images: [
      { src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&h=800&fit=crop", orientation: "horizontal" },
      { src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=1200&fit=crop", orientation: "vertical" },
      { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop", orientation: "horizontal" },
      { src: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=1200&fit=crop", orientation: "vertical" },
      { src: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=1200&h=800&fit=crop", orientation: "horizontal" },
      { src: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=1200&fit=crop", orientation: "vertical" },
      { src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop", orientation: "horizontal" },
      { src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=1200&fit=crop", orientation: "vertical" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop", orientation: "horizontal" },
      { src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=1200&fit=crop", orientation: "vertical" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop", orientation: "horizontal" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=1200&fit=crop", orientation: "vertical" }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <ScrollIndicator />
      <Navigation />
      
      <main id="main-content" className="relative pt-24">
        {/* Hero Image */}
        <section className="h-screen relative">
          <img 
            src={projectData.images[0].src} 
            alt={projectData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-20 left-6 right-6">
            <div className="max-w-4xl">
              <h1 className="text-display text-4xl md:text-6xl font-light mb-4 animate-fade-in-up">
                {projectData.title}
              </h1>
              <p className="text-body text-lg opacity-70 animate-fade-in-up delay-200">
                {projectData.location} • {projectData.year}
              </p>
            </div>
          </div>
        </section>

        {/* Project Info */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-display text-3xl font-light mb-8 animate-fade-in-up">
                  Project Overview
                </h2>
                <p className="text-body text-lg opacity-70 mb-8 leading-relaxed animate-fade-in-up delay-200">
                  {projectData.description}
                </p>
                <p className="text-body opacity-70 leading-relaxed animate-fade-in-up delay-400">
                  This project explores the relationship between interior and exterior spaces through carefully choreographed openings and transitions. The use of natural materials creates a dialogue with the surrounding landscape, while the minimal palette allows light and shadow to become primary design elements.
                </p>
              </div>
              <div className="space-y-8 animate-fade-in-up delay-600">
                <div>
                  <h3 className="text-display text-lg font-medium mb-2">Type</h3>
                  <p className="text-body opacity-70">{projectData.type}</p>
                </div>
                <div>
                  <h3 className="text-display text-lg font-medium mb-2">Area</h3>
                  <p className="text-body opacity-70">{projectData.area}</p>
                </div>
                <div>
                  <h3 className="text-display text-lg font-medium mb-2">Year</h3>
                  <p className="text-body opacity-70">{projectData.year}</p>
                </div>
                <div>
                  <h3 className="text-display text-lg font-medium mb-2">Location</h3>
                  <p className="text-body opacity-70">{projectData.location}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery - Mixed Aspect Ratios */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-display text-3xl font-light mb-16 text-center">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectData.images.slice(1).map((image, index) => (
                <div 
                  key={index} 
                  className={`animate-fade-in-up delay-${200 + (index * 100)} ${
                    image.orientation === 'vertical' ? 'row-span-2' : ''
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={`${projectData.title} - Image ${index + 2}`}
                    className={`w-full object-cover border border-white/10 hover:scale-105 transition-transform duration-500 ${
                      image.orientation === 'vertical' ? 'h-96 md:h-[600px]' : 'h-64 md:h-80'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display text-3xl md:text-4xl font-light mb-8 animate-fade-in-up">
              Design Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              <div className="animate-fade-in-up delay-200">
                <h3 className="text-display text-xl font-medium mb-4">Concept</h3>
                <p className="text-body opacity-70 text-sm leading-relaxed">
                  Initial sketches and site analysis inform the conceptual framework, establishing the relationship between built form and landscape.
                </p>
              </div>
              <div className="animate-fade-in-up delay-400">
                <h3 className="text-display text-xl font-medium mb-4">Development</h3>
                <p className="text-body opacity-70 text-sm leading-relaxed">
                  Through iterative design and material studies, the concept evolves into a coherent architectural proposition.
                </p>
              </div>
              <div className="animate-fade-in-up delay-600">
                <h3 className="text-display text-xl font-medium mb-4">Realization</h3>
                <p className="text-body opacity-70 text-sm leading-relaxed">
                  Close collaboration with craftspeople ensures that the design intent is faithfully translated into built form.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Project;
