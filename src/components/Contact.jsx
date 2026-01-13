import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // The Dual-Method Handler
  const handleSubmit = (e, method) => {
    e.preventDefault();
    
    const phoneNumber = "255625726195"; 
    const emailAddress = "suhancreative@gmail.com";
    
    // Only includes the message field now
    const cleanMessage = encodeURIComponent(formData.message);

    if (method === 'whatsapp') {
      const url = `https://wa.me/${phoneNumber}?text=${cleanMessage}`;
      window.open(url, '_blank');
    } else {
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject)}&body=${cleanMessage}`;
      window.location.href = mailtoLink;
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'suhancreative@gmail.com',
      href: 'mailto:suhancreative@gmail.com',
      color: 'blue',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+255 625 726 195 ',
      href: 'tel:+255625726195',
      color: 'orange',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mbeya, Tanzania',
      href: null,
      color: 'blue',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-40 bg-primary scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-lg">
              Have a project in mind? We'd love to hear from you. Choose your preferred way to reach out below.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className={`p-4 ${
                    item.color === 'blue' ? 'bg-accent-blue/10 text-accent-blue' : 'bg-accent-orange/10 text-accent-orange'
                  }`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-xl font-medium hover:text-accent-blue transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-xl font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary-light p-8 md:p-12 border border-gray-800 rounded-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                      className="w-full px-4 py-3 bg-primary rounded-lg border border-gray-800 text-gray-100 focus:border-accent-blue focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary rounded-lg border border-gray-800 text-gray-100 focus:border-accent-blue focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary rounded-lg border border-gray-800 text-gray-100 focus:border-accent-blue focus:outline-none transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-primary rounded-lg border border-gray-800 text-gray-100 focus:border-accent-blue focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="button"
                  onClick={(e) => handleSubmit(e, 'email')}
                  className="flex-1 px-8 py-4 bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold tracking-wide rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send via Email
                  <Mail size={18} />
                </button>

                <button
                  type="button"
                  onClick={(e) => handleSubmit(e, 'whatsapp')}
                  className="flex-1 px-8 py-4 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold tracking-wide rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  WhatsApp Us
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;