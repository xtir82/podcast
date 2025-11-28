import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "El Auge de los Universos Cinematográficos",
    excerpt: "Cómo Marvel y DC han transformado la forma en que consumimos historias en el cine moderno.",
    date: "20 Mar, 2024",
    category: "Cine",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Las 10 Series Más Esperadas de 2024",
    excerpt: "Desde dramas épicos hasta comedias refrescantes, estas son las series que no te puedes perder este año.",
    date: "18 Mar, 2024",
    category: "Series",
    image: "https://images.unsplash.com/photo-1524678606372-987d780461d4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "El Renacimiento del Vinilo en la Era Digital",
    excerpt: "Por qué los millennials y Gen Z están redescubriendo el placer de escuchar música en formato físico.",
    date: "15 Mar, 2024",
    category: "Música",
    image: "https://images.unsplash.com/photo-1554446422-d05db23719d2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Anime: De Nicho a Mainstream",
    excerpt: "Cómo el anime japonés conquistó el mundo y se convirtió en fenómeno global.",
    date: "10 Mar, 2024",
    category: "Anime",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Los Videojuegos Como Arte Narrativo",
    excerpt: "Exploramos cómo los videojuegos modernos rivalizan con el cine en términos de narrativa y emoción.",
    date: "05 Mar, 2024",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Festivales de Música 2024: Guía Completa",
    excerpt: "Los mejores festivales de música alrededor del mundo que no te puedes perder este año.",
    date: "28 Feb, 2024",
    category: "Música",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800"
  }
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestro Blog</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Perspectivas, análisis y historias del mundo de la cultura popular y el entretenimiento.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-neutral-900 rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/10">
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="text-sm text-purple-400 mb-3 font-medium">{post.date}</div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <a href="#" className="inline-flex items-center text-white font-medium hover:text-purple-400 transition-colors">
                Leer Artículo <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
