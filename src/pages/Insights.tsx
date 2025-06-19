import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import ScrollIndicator from '@/components/ScrollIndicator';
import Footer from '@/components/Footer';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  slug: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "The Future of Spatial Design",
    excerpt: "Exploring how technology and human-centered design are reshaping our understanding of architectural space.",
    date: "December 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    tags: ["Design", "Technology", "Future"],
    slug: "future-spatial-design"
  },
  {
    id: 2,
    title: "Material Honesty in Contemporary Architecture",
    excerpt: "A deep dive into how authentic materials can create more meaningful and sustainable design solutions.",
    date: "November 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
    tags: ["Materials", "Sustainability", "Architecture"],
    slug: "sample"
  },
  {
    id: 3,
    title: "Crafting Cultural Narratives Through Design",
    excerpt: "How architecture can serve as a medium for storytelling and cultural preservation in modern contexts.",
    date: "November 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop",
    tags: ["Culture", "Storytelling", "Design"],
    slug: "cultural-narratives"
  },
  {
    id: 4,
    title: "Minimalism: Less is More",
    excerpt: "Understanding the philosophy behind minimalist architecture and its impact on modern living.",
    date: "October 22, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop",
    tags: ["Minimalism", "Philosophy", "Living"],
    slug: "minimalism-philosophy"
  }
];

const allTags = Array.from(new Set(articles.flatMap(article => article.tags)));

const Insights = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter(article => {
    const matchesTag = selectedTag === "All" || article.tags.includes(selectedTag);
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTag && matchesSearch;
  });

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
              Insights
            </h1>
            <p className="text-body text-lg md:text-xl opacity-70 mb-12 animate-fade-in-up delay-200 leading-relaxed">
              Thoughts, observations, and discoveries from our journey in architecture and design.
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
                  placeholder="Search insights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border border-white/30 focus:border-white focus:outline-none transition-colors text-white placeholder-white/50"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setSelectedTag("All")}
                  className={`px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 cursor-hover ${
                    selectedTag === "All"
                      ? 'bg-white text-black border border-white'
                      : 'border border-white/30 hover:border-white/60'
                  }`}
                >
                  All
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 cursor-hover ${
                      selectedTag === tag
                        ? 'bg-white text-black border border-white'
                        : 'border border-white/30 hover:border-white/60'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <section className="py-20 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="animate-fade-in-up">
                  <img 
                    src={filteredArticles[0].image} 
                    alt={filteredArticles[0].title}
                    className="w-full h-96 object-cover border border-white/10"
                  />
                </div>
                <div className="animate-fade-in-up delay-200">
                  <span className="text-xs uppercase tracking-wider opacity-60 mb-4 block">
                    Featured Article
                  </span>
                  <h2 className="text-display text-3xl md:text-4xl font-light mb-6 leading-tight">
                    {filteredArticles[0].title}
                  </h2>
                  <p className="text-body opacity-70 mb-6 leading-relaxed">
                    {filteredArticles[0].excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm opacity-60 mb-8">
                    <span>{filteredArticles[0].date}</span>
                    <span>•</span>
                    <span>{filteredArticles[0].readTime}</span>
                  </div>
                  <Link
                    to={`/insight/${filteredArticles[0].slug}`}
                    className="px-8 py-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 cursor-hover"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Article Grid */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-display text-3xl md:text-4xl font-light mb-16 text-center animate-fade-in-up">
              Recent Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredArticles.slice(1).map((article, index) => (
                <article 
                  key={article.id}
                  className={`animate-fade-in-up delay-${200 + (index * 200)}`}
                >
                  <Link to={`/insight/${article.slug}`} className="block group cursor-hover">
                    <div className="mb-6">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-64 object-cover border border-white/10 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center space-x-4 text-xs opacity-60 mb-4">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-display text-xl md:text-2xl font-light mb-4 leading-tight group-hover:opacity-80 transition-opacity">
                      {article.title}
                    </h3>
                    <p className="text-body opacity-70 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 border border-white/20 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display text-3xl md:text-4xl font-light mb-8 animate-fade-in-up">
              Stay Updated
            </h2>
            <p className="text-body opacity-70 mb-8 animate-fade-in-up delay-200">
              Subscribe to our newsletter for the latest insights and project updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent border border-white/30 focus:border-white focus:outline-none transition-colors text-white placeholder-white/50"
              />
              <button className="px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors cursor-hover">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Insights;
