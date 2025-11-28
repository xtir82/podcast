import React from 'react';
import { Play, Headphones, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const episodes = [
  {
    id: 1,
    title: "The Future of AI in Creative Arts",
    date: "Mar 15, 2024",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    description: "Exploring how artificial intelligence is reshaping the landscape of digital art and music composition."
  },
  {
    id: 2,
    title: "Sustainable Living in 2024",
    date: "Mar 08, 2024",
    duration: "38 min",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    description: "Practical tips for reducing your carbon footprint without sacrificing modern comforts."
  },
  {
    id: 3,
    title: "Mental Health in the Digital Age",
    date: "Mar 01, 2024",
    duration: "52 min",
    image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&q=80&w=800",
    description: "A deep dive into the psychological effects of social media and constant connectivity."
  }
];

const Home = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?auto=format&fit=crop&q=80&w=2000" 
            alt="Studio Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/80 to-neutral-950" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium mb-6 border border-purple-500/30">
              New Episode Every Friday
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Stories That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Resonate</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join us as we explore the untold stories of innovators, creators, and dreamers shaping our world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                Listen Now
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                View Episodes
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Episodes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-white">Latest Episodes</h2>
          <a href="#" className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1">
            View All <span className="text-xl">→</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-neutral-900 rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={episode.image} 
                  alt={episode.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-5 h-5 text-white fill-current ml-1" />
                  </div>
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {episode.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {episode.duration}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {episode.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {episode.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
                  <Headphones className="w-4 h-4" />
                  Listen Episode
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-8 md:p-16 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Never Miss an Episode</h2>
            <p className="text-gray-300 mb-8">Subscribe to our newsletter to get the latest episodes, show notes, and exclusive content delivered straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-4 rounded-full bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
              <button className="px-8 py-4 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
