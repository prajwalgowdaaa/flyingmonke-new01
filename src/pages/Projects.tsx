import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import ScrollIndicator from '@/components/ScrollIndicator';
import Footer from '@/components/Footer';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  slug: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Minimalist Residence",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=800&fit=crop",
    description: "A study in spatial reduction and material honesty.",
    slug: "sample",
    featured: true
  },
  {
    id: 2,
    title: "Cultural Center",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=800&fit=crop",
    description: "Where community meets architecture in perfect harmony.",
    slug: "cultural-center"
  },
  {
    id: 3,
    title: "Urban Intervention",
    category: "Experiments",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=800&fit=crop",
    description: "Challenging the boundaries between public and private space.",
    slug: "urban-intervention"
  },
  {
    id: 4,
    title: "Boutique Interior",
    category: "Interiors",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=800&fit=crop",
    description: "Crafting atmosphere through light and shadow.",
    slug: "boutique-interior"
  },
  {
    id: 5,
    title: "Concrete Poetry",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=600&h=800&fit=crop",
    description: "Brutalist principles meet contemporary living.",
    slug: "concrete-poetry"
  },
  {
    id: 6,
    title: "Workspace Lab",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=800&fit=crop",
    description: "Reimagining the future of collaborative environments.",
    slug: "workspace-lab"
  },
  {
    id: 7,
    title: "Zen Garden House",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=800&fit=crop",
    description: "Where nature and architecture find balance.",
    slug: "zen-garden-house"
  },
  {
    id: 8,
    title: "Gallery Reimagined",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800&fit=crop",
    description: "Redefining how art meets space.",
    slug: "gallery-reimagined"
  }
];

const categories = ["All", "Residential", "Commercial", "Interiors", "Experiments"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProject = projects.find(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

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
              Projects
            </h1>
            <p className="text-body text-lg md:text-xl opacity-70 mb-12 animate-fade-in-up delay-200 leading-relaxed">
              Each project is a dialogue between space, light, and human experience.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border border-white/30 focus:border-white focus:outline-none transition-colors"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 cursor-hover focus-visible:outline-custom ${
                      selectedCategory === category
                        ? 'bg-white text-black border border-white'
                        : 'border border-white/30 hover:border-white/60'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Project */}
        {featuredProject && (selectedCategory === "All" || selectedCategory === featuredProject.category) && (
          <section className="py-20 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-display text-3xl font-light mb-12 text-center">Featured Project</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="animate-fade-in-up">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title}
                    className="w-full h-96 object-cover border border-white/10"
                  />
                </div>
                <div className="animate-fade-in-up delay-200">
                  <span className="text-xs uppercase tracking-wider opacity-60 mb-4 block">
                    {featuredProject.category}
                  </span>
                  <h3 className="text-display text-3xl md:text-4xl font-light mb-6 leading-tight">
                    {featuredProject.title}
                  </h3>
                  <p className="text-body opacity-70 mb-8 leading-relaxed">
                    {featuredProject.description}
                  </p>
                  <Link
                    to={`/project/${featuredProject.slug}`}
                    className="inline-block px-8 py-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 cursor-hover"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Grid */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularProjects.map((project, index) => (
                <Link
                  key={project.id}
                  to={`/project/${project.slug}`}
                  className="bento-card aspect-[4/5] p-8 flex flex-col justify-end cursor-hover animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    />
                  </div>

                  <div className="relative z-10">
                    <span className="text-xs uppercase tracking-wider opacity-60 mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-display text-2xl font-light mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-body text-sm opacity-70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
