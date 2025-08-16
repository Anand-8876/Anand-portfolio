import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Brain, Rocket, Database } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const slideInRight = {
  initial: { opacity: 0, x: 100 },
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
      delayChildren: 0.3
    }
  }
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Crafting end-to-end solutions with modern web technologies',
      color: 'from-blue-500 to-cyan-500',
      delay: 0
    },
    {
      icon: Database,
      title: 'MERN Stack',
      description: 'Specialized in MongoDB, Express.js, React, Next.js, Three.js and Node.js',
      color: 'from-green-500 to-emerald-500',
      delay: 0.1
    },
    {
      icon: Brain,
      title: 'AI & Computer Vision',
      description: 'Exploring CNNs, OpenCV, and machine learning applications',
      color: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: Rocket,
      title: 'Development',
      description: 'Working on different projects, Research and development',
      color: 'from-orange-500 to-red-500',
      delay: 0.3
    }
  ];

  return (
    <motion.section 
      id="about" 
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black min-h-screen relative overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          variants={fadeInDown} 
          initial="initial" 
          animate={inView ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div className="space-y-6">
            <motion.div 
              variants={slideInLeft}
              className="relative"
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              <motion.p 
                className="text-lg text-white leading-relaxed relative z-10 p-6 rounded-xl bg-black border border-gray-700/30"
                whileHover={{
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                I am a final year bachelor's in technology student specialized in computer science and I am currently working as a software engineer.
              </motion.p>
            </motion.div>
            
            <motion.div 
              variants={slideInLeft}
              className="relative"
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              <motion.p 
                className="text-lg text-white leading-relaxed relative z-10 p-6 rounded-xl bg-black border border-gray-700/30"
                whileHover={{
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                Specializing in the MERN stack, I build scalable web applications from concept to deployment. 
                My expertise extends to data structures & algorithms, ensuring efficient and optimized solutions.
              </motion.p>
            </motion.div>
            
            <motion.div 
              variants={slideInLeft}
              className="relative"
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              <motion.p 
                className="text-lg text-white leading-relaxed relative z-10 p-6 rounded-xl bg-black border border-gray-700/30"
                whileHover={{
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                Currently exploring the fascinating world of AI and machine learning, with particular interest in 
                computer vision using CNNs and OpenCV. I believe in the power of technology to solve real-world problems.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={slideInRight}
                className="relative group cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Floating animation */}
                <motion.div
                  variants={floatingAnimation}
                  animate="animate"
                  style={{ animationDelay: `${feature.delay}s` }}
                >
                  {/* Glow effect */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30`}
                    whileHover={{
                      opacity: 0.4,
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  
                  {/* Card */}
                  <motion.div 
                    className="relative bg-gradient-to-br from-gray-900/90 to-black/90 p-6 rounded-xl border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300 backdrop-blur-sm"
                    whileHover={{
                      borderColor: "rgba(255, 255, 255, 0.5)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div 
                        className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${feature.color} p-2`}
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.2,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <feature.icon className="w-full h-full text-white" />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-xl font-bold text-white mb-3"
                        whileHover={{
                          color: "transparent",
                          backgroundImage: `linear-gradient(to right, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`,
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          transition: { duration: 0.3 }
                        }}
                      >
                        {feature.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                        whileHover={{ x: 5, transition: { duration: 0.3 } }}
                      >
                        {feature.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;