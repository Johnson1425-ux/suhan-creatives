import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 py-10 px-6 md:px-10 lg:px-16">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-gray-400 text-sm flex items-center gap-2">
            <span>© {currentYear} Suhan Creatives</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <a
              href="#work"
              className="text-gray-400 hover:text-accent-blue transition-colors text-sm"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-accent-orange transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-400 hover:text-accent-blue transition-colors text-sm"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-accent-orange transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;