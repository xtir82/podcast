import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Users, Globe } from 'lucide-react';

const team = [
  {
    name: "Sarah Jenkins",
    role: "Host & Producer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    bio: "Journalist turned podcaster with a passion for uncovering hidden stories."
  },
  {
    name: "David Chen",
    role: "Audio Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Sound wizard ensuring every episode sounds crisp and immersive."
  },
  {
    name: "Elena Rodriguez",
    role: "Content Strategist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "The creative mind behind our episode themes and guest curation."
  }
];

const About = () => {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="relative py-20 bg-neutral-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            We Are <span className="text-purple-500">PodcastPro</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Dedicated to bringing you the most compelling conversations from around the globe. We believe in the power of voice to inspire, educate, and connect.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Mic className="w-10 h-10 text-purple-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-400">Episodes Produced</div>
            </div>
            <div className="p-6">
              <Users className="w-10 h-10 text-purple-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">50k+</div>
              <div className="text-gray-400">Monthly Listeners</div>
            </div>
            <div className="p-6">
              <Globe className="w-10 h-10 text-purple-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">80+</div>
              <div className="text-gray-400">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-neutral-800 group-hover:border-purple-500 transition-colors">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <div className="text-purple-400 font-medium mb-3">{member.role}</div>
              <p className="text-gray-400 text-sm leading-relaxed px-4">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
