import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import ScrollIndicator from '@/components/ScrollIndicator';
import Footer from '@/components/Footer';

const Studio = () => {
  const teamMembers = [
    {
      name: "Arjun Mehta",
      role: "Principal Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Rohan Kumar",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

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
              Our Studio
            </h1>
            <p className="text-body text-lg md:text-xl opacity-70 mb-12 animate-fade-in-up delay-200 leading-relaxed">
              We are a collective of dreamers, builders, and storytellers who believe that architecture has the power to transform lives and communities.
            </p>
          </div>
        </section>

        {/* About Studio */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-display text-3xl md:text-4xl font-light mb-8 animate-fade-in-up">
                  About Studio
                </h2>
                <div className="space-y-6 text-body opacity-70 animate-fade-in-up delay-200">
                  <p>
                    Founded in 2018, flyingmonké emerged from a simple belief: that architecture should be a dialogue between space, light, and human experience. We are not just architects; we are cultural curators who craft spatial narratives.
                  </p>
                  <p>
                    Our studio operates at the intersection of traditional wisdom and contemporary innovation, creating spaces that honor the past while embracing the future. Every project is an experiment in living, a testament to our commitment to pushing boundaries.
                  </p>
                  <p>
                    Based in Bengaluru, we draw inspiration from India's rich architectural heritage while maintaining a global perspective. Our work spans residential, commercial, and experimental projects, each telling a unique story.
                  </p>
                </div>
              </div>
              <div className="animate-fade-in-up delay-400">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=800&fit=crop" 
                  alt="Modern architectural interior"
                  className="w-full h-96 object-cover border border-white/10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-display text-3xl md:text-4xl font-light mb-16 text-center animate-fade-in-up">
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center animate-fade-in-up delay-200">
                <div className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">01</span>
                </div>
                <h3 className="text-display text-xl font-medium mb-4">Listen</h3>
                <p className="text-body opacity-70 text-sm leading-relaxed">
                  We begin every project by listening—to the site, to the client, to the community. Understanding context is fundamental to our process.
                </p>
              </div>
              <div className="text-center animate-fade-in-up delay-400">
                <div className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">02</span>
                </div>
                <h3 className="text-display text-xl font-medium mb-4">Experiment</h3>
                <p className="text-body opacity-70 text-sm leading-relaxed">
                  We embrace experimentation as a core value, testing materials, forms, and spatial relationships to discover new possibilities.
                </p>
              </div>
              <div className="text-center animate-fade-in-up delay-600">
                <div className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">03</span>
                </div>
                <h3 className="text-display text-xl font-medium mb-4">Craft</h3>
                <p className="text-body opacity-70 text-sm leading-relaxed">
                  Every detail matters. We work closely with skilled craftspeople to ensure that our vision is realized with precision and care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-display text-3xl md:text-4xl font-light mb-16 text-center animate-fade-in-up">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <div key={member.name} className={`text-center animate-fade-in-up delay-${200 + (index * 200)}`}>
                  <div className="mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-48 h-48 mx-auto object-cover border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-display text-xl font-medium mb-2">{member.name}</h3>
                  <p className="text-body opacity-70 text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Studio;
