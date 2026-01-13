import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background Effects with Blue and Orange */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creative <span className="text-accent-blue">Design</span>
            <br />
            <span className="text-accent-orange">Solutions</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transforming ideas into stunning visual experiences that captivate and inspire
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#work"
              className="group px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-orange rounded-lg hover:opacity-90 text-white font-semibold tracking-wide transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-gray-700 rounded-lg hover:border-accent-blue text-gray-100 font-semibold tracking-wide transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1.5 h-3 bg-accent-blue rounded-full mt-2"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;