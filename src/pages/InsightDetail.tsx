import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import ScrollIndicator from '@/components/ScrollIndicator';
import Footer from '@/components/Footer';

const InsightDetail = () => {
  const { slug } = useParams();

  const insightData = {
    title: "Material Honesty in Contemporary Architecture",
    author: "flyingmonké Studio",
    date: "November 28, 2024",
    readTime: "7 min read",
    tags: ["Materials", "Sustainability", "Architecture"],
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&h=800&fit=crop",
    content: [
      {
        type: "text",
        content: "In an era where digital facades and synthetic materials dominate the architectural landscape, the concept of material honesty emerges as a revolutionary approach to authentic design. This philosophy challenges architects to embrace the inherent properties of materials, allowing their natural characteristics to inform both aesthetic and functional decisions."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1200&h=600&fit=crop",
        caption: "Raw concrete reveals its honest structural nature"
      },
      {
        type: "text",
        content: "Material honesty is not merely about exposing structural elements; it's about creating a dialogue between the built environment and its occupants through tactile and visual authenticity. When concrete remains unfinished, when steel shows its oxidation, when wood displays its grain – these materials tell stories of time, process, and place."
      },
      {
        type: "text",
        content: "This approach has profound implications for sustainability. By celebrating the natural aging process of materials, we reduce the need for maintenance, replacement, and artificial treatments. The weathering of copper, the patina of steel, the silvering of wood – these are not flaws to be hidden but qualities to be celebrated."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=600&fit=crop",
        caption: "Natural materials age gracefully, developing character over time"
      },
      {
        type: "text",
        content: "Contemporary projects worldwide are embracing this philosophy. From Peter Zumthor's thermal baths in Vals, where local stone creates an intimate connection with the landscape, to Tadao Ando's concrete churches that transform industrial material into spiritual space, material honesty is reshaping our understanding of architectural beauty."
      },
      {
        type: "text",
        content: "For emerging architects and designers, material honesty offers a path toward more meaningful practice. It requires deep understanding of material properties, respect for craft traditions, and courage to let materials speak for themselves. This approach challenges the superficial and embraces the profound, creating architecture that ages gracefully and connects authentically with human experience."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <ScrollIndicator />
      <Navigation />
      
      <main id="main-content" className="relative pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {insightData.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 border border-white/20 rounded uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-display text-4xl md:text-6xl font-light mb-8 animate-fade-in-up leading-tight">
                {insightData.title}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-sm opacity-70 animate-fade-in-up delay-200">
                <span>By {insightData.author}</span>
                <span>•</span>
                <span>{insightData.date}</span>
                <span>•</span>
                <span>{insightData.readTime}</span>
              </div>
            </div>
            
            <img 
              src={insightData.image} 
              alt={insightData.title}
              className="w-full h-96 md:h-[500px] object-cover border border-white/10 animate-fade-in-up delay-400"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              {insightData.content.map((block, index) => (
                <div key={index} className={`animate-fade-in-up delay-${(index + 1) * 200}`}>
                  {block.type === 'text' && (
                    <p className="text-body text-lg leading-relaxed mb-8 opacity-90">
                      {block.content}
                    </p>
                  )}
                  {block.type === 'image' && (
                    <figure className="my-12">
                      <img 
                        src={block.src} 
                        alt={block.caption}
                        className="w-full h-80 object-cover border border-white/10"
                      />
                      {block.caption && (
                        <figcaption className="text-sm opacity-60 mt-4 text-center italic">
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-display text-3xl font-light mb-12 text-center">
              Related Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <article className="animate-fade-in-up">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop" 
                  alt="The Future of Spatial Design"
                  className="w-full h-48 object-cover border border-white/10 mb-6"
                />
                <h3 className="text-display text-xl font-light mb-4">
                  The Future of Spatial Design
                </h3>
                <p className="text-body opacity-70 text-sm leading-relaxed">
                  Exploring how technology and human-centered design are reshaping our understanding of architectural space.
                </p>
              </article>
              
              <article className="animate-fade-in-up delay-200">
                <img 
                  src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop" 
                  alt="Crafting Cultural Narratives"
                  className="w-full h-48 object-cover border border-white/10 mb-6"
                />
                <h3 className="text-display text-xl font-light mb-4">
                  Crafting Cultural Narratives Through Design
                </h3>
                <p className="text-body opacity-70 text-sm leading-relaxed">
                  How architecture can serve as a medium for storytelling and cultural preservation in modern contexts.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InsightDetail;
