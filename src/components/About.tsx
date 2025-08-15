import React, { useState, useEffect } from 'react';
import { Code, Brain, Rocket, Database } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Crafting end-to-end solutions with modern web technologies',
      color: 'from-blue-500 to-cyan-500',
      bgGlow: 'shadow-blue-500/20'
    },
    {
      icon: Database,
      title: 'MERN Stack',
      description: 'Specialized in MongoDB, Express.js, React, Next.js, Three.js and Node.js',
      color: 'from-green-500 to-emerald-500',
      bgGlow: 'shadow-green-500/20'
    },
    {
      icon: Brain,
      title: 'AI & Computer Vision',
      description: 'Exploring CNNs, OpenCV, and machine learning applications',
      color: 'from-purple-500 to-pink-500',
      bgGlow: 'shadow-purple-500/20'
    },
    {
      icon: Rocket,
      title: 'Development',
      description: 'Working on different projects, Research and development',
      color: 'from-orange-500 to-red-500',
      bgGlow: 'shadow-orange-500/20'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            About Me
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-8 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}></div>
          <div className={`w-16 h-16 mx-auto mb-8 relative ${
            isVisible ? 'animate-spin-slow' : ''
          }`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-75 animate-pulse"></div>
            <div className="absolute inset-2 bg-black rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              <p className="text-lg text-gray-300 leading-relaxed relative z-10 p-6 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/30 backdrop-blur-sm">
                I am a final year bachelor's in technology student specialized in computer science and I am currently working as a software engineer.
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl -z-10"></div>
              </p>
            </div>
            
            <div className="relative">
              <p className="text-lg text-gray-300 leading-relaxed relative z-10 p-6 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/30 backdrop-blur-sm">
                Specializing in the MERN stack, I build scalable web applications from concept to deployment. 
                My expertise extends to data structures & algorithms, ensuring efficient and optimized solutions.
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl blur-xl -z-10"></div>
              </p>
            </div>
            
            <div className="relative">
              <p className="text-lg text-gray-300 leading-relaxed relative z-10 p-6 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/30 backdrop-blur-sm">
                Currently exploring the fascinating world of AI and machine learning, with particular interest in 
                computer vision using CNNs and OpenCV. I believe in the power of technology to solve real-world problems.
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl -z-10"></div>
              </p>
            </div>
          </div>

          <div className={`grid sm:grid-cols-2 gap-6 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 transform group-hover:scale-110`}></div>
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 p-6 rounded-xl border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300 backdrop-blur-sm">
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl blur-sm`}></div>
                    <div className="absolute inset-px bg-gradient-to-br from-gray-900 to-black rounded-xl"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${feature.color} p-2 transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110`}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Hover particles effect */}
                  {activeCard === index && (
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-1 h-1 bg-white rounded-full animate-ping opacity-50`}
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 200}ms`,
                            animationDuration: '2s'
                          }}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style tsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;