import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you. Fill out the form or reach us directly.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Email Us</h3>
                <p className="text-gray-400">hello@podcastpro.com</p>
                <p className="text-gray-400">press@podcastpro.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Visit Us</h3>
                <p className="text-gray-400">123 Audio Avenue</p>
                <p className="text-gray-400">Sound City, SC 90210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Call Us</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
                <p className="text-gray-400">Mon-Fri, 9am-6pm EST</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-900 p-8 rounded-3xl border border-white/5"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</label>
                <input 
                  type="text" 
                  id="firstName"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</label>
                <input 
                  type="text" 
                  id="lastName"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
              <input 
                type="email" 
                id="email"
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
              <select 
                id="subject"
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              >
                <option>General Inquiry</option>
                <option>Sponsorship</option>
                <option>Guest Proposal</option>
                <option>Feedback</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2">
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
