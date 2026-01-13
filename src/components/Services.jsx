import { motion } from 'framer-motion';
import { Palette, Smartphone, Package, Megaphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand development from concept to execution, including logo design, color systems, and brand guidelines.',
      features: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Style Guides'],
      color: 'blue',
    },
    {
      icon: Smartphone,
      title: 'Digital Design',
      description: 'User-centered design for web and mobile applications that balance aesthetics with functionality.',
      features: ['UI/UX Design', 'Web Design', 'Mobile Apps', 'Prototyping'],
      color: 'yellow',
    },
    {
      icon: Package,
      title: 'Print & Packaging',
      description: 'Thoughtful print design and packaging solutions that make your products stand out on shelves.',
      features: ['Packaging Design', 'Editorial Design', 'Print Collateral', 'Illustration'],
      color: 'blue',
    },
    {
      icon: Megaphone,
      title: 'Art Direction',
      description: 'Strategic creative direction for campaigns, photoshoots, and marketing materials.',
      features: ['Campaign Strategy', 'Photography Direction', 'Content Creation', 'Visual Storytelling'],
      color: 'yellow',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 lg:px-40 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6">
            What I Do
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I offer comprehensive design services to help your brand stand out and connect with your audience
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-primary-light rounded-lg border border-gray-800 hover:border-accent-blue transition-all duration-500"
            >
              {/* Icon */}
              <div className={`mb-6 inline-flex p-4 transition-all duration-300 ${
                service.color === 'blue' 
                  ? 'rounded-lg bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue' 
                  : 'rounded-lg bg-accent-orange/10 text-accent-orange group-hover:bg-accent-orange'
              } group-hover:text-primary`}>
                <service.icon size={32} />
              </div>

              {/* Content */}
              <h3 className={`font-display text-3xl font-bold mb-4 transition-colors ${
                service.color === 'blue' 
                  ? 'group-hover:text-accent-blue' 
                  : 'group-hover:text-accent-orange'
              }`}>
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300 text-sm">
                    <span className={`w-1.5 h-1.5 mr-3 ${
                      service.color === 'blue' ? 'bg-accent-blue' : 'bg-accent-orange'
                    }`}></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;