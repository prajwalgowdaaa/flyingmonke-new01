import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Minimalist Residence",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=800&fit=crop",
    description: "A study in spatial reduction and material honesty."
  },
  {
    id: 2,
    title: "Cultural Center",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=800&fit=crop",
    description: "Where community meets architecture in perfect harmony."
  },
  {
    id: 3,
    title: "Urban Intervention",
    category: "Experiments",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=800&fit=crop",
    description: "Challenging the boundaries between public and private space."
  },
  {
    id: 4,
    title: "Boutique Interior",
    category: "Interiors",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=800&fit=crop",
    description: "Crafting atmosphere through light and shadow."
  }
];

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <Link
          key={project.id}
          to={`/project/sample`}
          className="bento-card aspect-[4/5] p-8 flex flex-col justify-end cursor-hover animate-fade-in-up group"
          style={{ animationDelay: `${index * 200}ms` }}
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
  );
};

export default ProjectGrid;
