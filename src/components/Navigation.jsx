import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpeg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionIds = ['work', 'about', 'services', 'contact'];

    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs && obs.disconnect());
    };
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-1 right-1 z-50 transition-all duration-500 ease-out max-w-6xl mx-auto mt-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-[1rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={logo} alt="Suhan Creatives" className="h-12 w-12 rounded-full object-cover" />
            <span className="text-xl font-bold tracking-tight hidden sm:block">
              Suhan <span className="text-gradient">Creatives</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium tracking-wide transition-colors duration-300 pb-1 group"
                  style={{ color: isActive ? 'var(--accent-blue, #60a5fa)' : 'rgb(156 163 175)' }}
                >
                  {link.name}
                  {/* Active underline */}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300 ease-out"
                    style={{
                      width: isActive ? '100%' : '0%',
                      background: 'var(--accent-blue, #60a5fa)',
                    }}
                  />
                  {/* Hover underline (only shows when not active) */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 h-[2px] rounded-full w-0 group-hover:w-full transition-all duration-300 ease-out bg-gray-400/50" />
                  )}
                </a>
              );
            })}
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-100 hover:text-accent-blue transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 font-medium transition-colors duration-300"
                      style={{ color: isActive ? 'var(--accent-blue, #60a5fa)' : 'rgb(156 163 175)' }}
                    >
                      {isActive && (
                        <span
                          className="inline-block h-[2px] w-4 rounded-full flex-shrink-0"
                          style={{ background: 'var(--accent-blue, #60a5fa)' }}
                        />
                      )}
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;