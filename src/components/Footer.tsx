import { Instagram, Twitter, Facebook, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">A FONDO<span className="text-purple-500"> CULTURA POP</span></h3>
            <p className="text-gray-400 leading-relaxed">
              Explorando lo mejor del cine, series, música y cultura pop. Únete a nosotros cada semana para nuevos episodios que inspiran y entretienen.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-purple-500 transition-colors">Quiénes Somos</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-purple-500 transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-purple-500 transition-colors">Contacto</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Conéctate</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-4 h-4" />
              <span>hola@afondoculturepop.com</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} A Fondo Cultura Pop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
