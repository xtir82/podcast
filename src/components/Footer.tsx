import { Instagram, Twitter, Facebook, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">PODCAST<span className="text-purple-500">PRO</span></h3>
            <p className="text-gray-400 leading-relaxed">
              Exploring the depths of technology, culture, and human stories. Join us every week for new episodes that inspire and challenge.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-purple-500 transition-colors">About Us</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-purple-500 transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-purple-500 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-4 h-4" />
              <span>hello@podcastpro.com</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} PodcastPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
