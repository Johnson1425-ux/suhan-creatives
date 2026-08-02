import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden px-6 pt-28 pb-20">
      {/* Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs sm:text-sm font-medium tracking-widest uppercase text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-orange" />
            Graphic Design Studio &middot; Mbeya, Tanzania
          </motion.p>

          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creative <span className="text-accent-blue">Design</span>
            <br />
            <span className="text-accent-orange">Solutions</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light tracking-wide"
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
              className="group w-full sm:w-auto justify-center bg-accent-orange px-8 py-4 rounded-xl text-black font-semibold tracking-wide transition-all duration-300 hover:brightness-110 flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-accent-blue text-gray-100 font-semibold tracking-wide transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
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