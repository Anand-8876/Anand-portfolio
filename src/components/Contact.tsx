import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, Send } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const contactLinks = [
    {
      name: 'Email',
      value: 'anandmannusingh@gmail.com',
      href: 'anandmannusingh@gmail.com',
      icon: Mail,
      color: 'from-red-400 to-red-600',
      description: 'Send me an email'
    },
    {
      name: 'GitHub',
      value: 'https://github.com/Anand-8876',
      href: 'https://github.com/Anand-8876',
      icon: Github,
      color: 'from-gray-400 to-gray-600',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/anand',
      href: 'https://www.linkedin.com/in/anand-29b9b3257/',
      icon: Linkedin,
      color: 'from-blue-400 to-blue-600',
      description: 'Connect professionally'
    }
  ];

  const availableServices = [
    'Full-stack web development projects',
    'Open source collaborations',
    'Technical consulting',
    'Mentoring and knowledge sharing'
  ];

  return (
    <motion.section 
      id="contact" 
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ delay: 0.6 }}
          >
            Let's collaborate and build something amazing together. I'm always open to discussing new opportunities and interesting projects.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div 
            variants={fadeInLeft}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            className="space-y-8"
          >
            <motion.div 
              variants={staggerContainer}
              animate={inView ? "animate" : "initial"}
              className="space-y-6"
            >
              {contactLinks.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={scaleIn}
                  className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/80 border border-gray-700/50 rounded-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className={`p-3 rounded-full bg-gradient-to-r ${contact.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <contact.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">
                      {contact.name}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {contact.description}
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ 
                      rotate: 45,
                      scale: 1.2,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div 
              variants={scaleIn}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/30 rounded-xl p-6"
              whileHover={{
                borderColor: "rgba(255, 255, 255, 0.3)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Available for:</h3>
              <motion.ul 
                variants={staggerContainer}
                animate={inView ? "animate" : "initial"}
                className="space-y-2 text-gray-400"
              >
                {availableServices.map((service, index) => (
                  <motion.li 
                    key={index}
                    variants={scaleIn}
                    className="flex items-center space-x-2"
                    whileHover={{ x: 5, transition: { duration: 0.3 } }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-green-500 rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                    <span>{service}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Quick Message Form */}
          <motion.div 
            variants={fadeInRight}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 border border-gray-700/50 rounded-xl p-8"
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-white mb-6"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              Send a Quick Message
            </motion.h3>
            <motion.form 
              variants={staggerContainer}
              animate={inView ? "animate" : "initial"}
              className="space-y-6"
            >
              <motion.div variants={scaleIn}>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <motion.input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-white/50 text-white placeholder-gray-400 transition-colors duration-300"
                  placeholder="Your name"
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: "rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
              <motion.div variants={scaleIn}>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <motion.input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-white/50 text-white placeholder-gray-400 transition-colors duration-300"
                  placeholder="your.email@example.com"
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: "rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
              <motion.div variants={scaleIn}>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <motion.textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-white/50 text-white placeholder-gray-400 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or just say hi!"
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: "rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                ></motion.textarea>
              </motion.div>
              <motion.button
                variants={scaleIn}
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-white to-gray-300 text-black font-semibold rounded-lg"
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Send className="w-5 h-5" />
                </motion.div>
                <span>Send Message</span>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="mt-16 pt-8 border-t border-gray-700/50 text-center"
          transition={{ delay: 1 }}
        >
          <motion.p 
            className="text-gray-400"
            whileHover={{ 
              color: "#ffffff",
              transition: { duration: 0.3 }
            }}
          >
            © 2025 Anand. Built with React, TypeScript & Tailwind CSS.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;