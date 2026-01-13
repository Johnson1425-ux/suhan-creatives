import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'Branding',
      description: 'Complete brand redesign for a sustainable fashion startup',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
      tags: ['Logo Design', 'Brand Guidelines', 'Packaging'],
      color: 'blue',
    },
    {
      id: 2,
      title: 'Editorial Magazine',
      category: 'Print Design',
      description: 'Art direction and layout design for quarterly publication',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop',
      tags: ['Typography', 'Layout', 'Photography'],
      color: 'orange',
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      category: 'UI/UX Design',
      description: 'Modern web experience for boutique online retailer',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['Web Design', 'User Interface', 'Prototyping'],
      color: 'blue',
    },
    {
      id: 4,
      title: 'Packaging Design',
      category: 'Product Design',
      description: 'Sustainable packaging solution for organic cosmetics',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop',
      tags: ['Packaging', 'Illustration', 'Sustainability'],
      color: 'orange',
    },
    {
      id: 5,
      title: 'Mobile App Design',
      category: 'Digital Product',
      description: 'Fitness tracking app with gamification elements',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      tags: ['Mobile UI', 'UX Design', 'Animation'],
      color: 'blue',
    },
    {
      id: 6,
      title: 'Social Campaign',
      category: 'Marketing',
      description: 'Visual campaign for environmental awareness initiative',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
      tags: ['Social Media', 'Campaign', 'Digital Art'],
      color: 'orange',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="work" className="py-24 px-6 lg:px-40 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Fixed the class name from text-gradient to text-gradient-dual to match index.css */}
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-4">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            A curated collection of projects showcasing creative problem-solving and visual storytelling
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              {/* Project Image */}
              <div className="rounded-lg relative overflow-hidden bg-primary-light mb-6 aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  project.color === 'blue' 
                    ? 'from-accent-blue/80' 
                    : 'from-accent-orange/80'
                } via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6`}>
                  <ExternalLink className="text-white" size={24} />
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                {/* Fixed the class names to use accent-blue/orange */}
                <p className={`text-sm font-semibold tracking-widest uppercase ${
                  project.color === 'blue' ? 'text-accent-blue' : 'text-accent-orange'
                }`}>
                  {project.category}
                </p>
                <h3 className={`font-display text-2xl font-bold transition-colors ${
                  project.color === 'blue' 
                    ? 'group-hover:text-accent-blue' 
                    : 'group-hover:text-accent-orange'
                }`}>
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-accent-blue border border-gray-800 text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;