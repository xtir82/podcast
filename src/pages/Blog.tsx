import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "Why Podcasting is the Future of Storytelling",
    excerpt: "In an age of short-form content, long-form audio is making a massive comeback. Here's why.",
    date: "Mar 20, 2024",
    category: "Industry",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Top 10 Microphones for Beginners",
    excerpt: "You don't need to break the bank to sound professional. Check out our top picks for 2024.",
    date: "Mar 18, 2024",
    category: "Gear",
    image: "https://images.unsplash.com/photo-1524678606372-987d780461d4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Interviewing 101: How to Ask Better Questions",
    excerpt: "The secret to a great interview isn't the guest, it's the questions you ask.",
    date: "Mar 15, 2024",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1554446422-d05db23719d2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Building a Community Around Your Podcast",
    excerpt: "Engagement goes beyond downloads. Learn how to foster a loyal community.",
    date: "Mar 10, 2024",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "The Art of Sound Design",
    excerpt: "How subtle sound effects and music can elevate your storytelling to the next level.",
    date: "Mar 05, 2024",
    category: "Production",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Monetization Strategies for 2024",
    excerpt: "From sponsorships to premium content, explore the best ways to monetize your show.",
    date: "Feb 28, 2024",
    category: "Business",
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
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Blog</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Insights, tips, and stories from the world of audio production and storytelling.
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
                Read Article <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
