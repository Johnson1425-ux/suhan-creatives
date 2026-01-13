import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Brand Identity',
    'UI/UX Design',
    'Art Direction',
    'Typography',
    'Illustration',
    'Motion Graphics',
    'Print Design',
    'Digital Marketing',
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-40 bg-white/2 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-accent-blue to-accent-orange relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/30"></div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
                alt="Designer"
                className="w-full h-full object-cover mix-blend-luminosity opacity-80"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-accent-blue"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-accent-orange"></div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Suhan Creatives</span>
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                At Suhan Creatives, we're passionate about creating meaningful brand experiences that connect with people on an emotional level. With over 8 years of experience, we've worked with startups and established brands across various industries.
              </p>
              <p>
                Our approach combines strategic thinking with creative execution, ensuring every design decision serves both aesthetic and business goals. We believe great design is invisible—it solves problems seamlessly while delighting users.
              </p>
              <p>
                When we're not designing, you'll find us exploring art galleries, experimenting with photography, or traveling to find inspiration in different cultures and environments.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6 text-gray-100">
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`px-4 py-2 bg-primary border font-medium text-sm tracking-wide transition-all duration-300 ${
                      index % 2 === 0 
                        ? 'border-accent-blue text-gray-300 hover:border-accent-blue hover:text-accent-blue' 
                        : 'border-accent-orange text-gray-300 hover:border-accent-orange hover:text-accent-orange'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;