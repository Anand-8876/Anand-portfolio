import React from 'react';
import { Code, Brain, Rocket, Database } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Crafting end-to-end solutions with modern web technologies'
    },
    {
      icon: Database,
      title: 'MERN Stack',
      description: 'Specialized in MongoDB, Express.js, React, and Node.js'
    },
    {
      icon: Brain,
      title: 'AI & Computer Vision',
      description: 'Exploring CNNs, OpenCV, and machine learning applications'
    },
    {
      icon: Rocket,
      title: 'Continuous Learning',
      description: 'Always staying updated with the latest technologies and best practices'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with a deep love for creating innovative digital solutions. 
              My journey in tech is driven by curiosity and a constant desire to push the boundaries of what's possible.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Specializing in the MERN stack, I build scalable web applications from concept to deployment. 
              My expertise extends to data structures & algorithms, ensuring efficient and optimized solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently exploring the fascinating world of AI and machine learning, with particular interest in 
              computer vision using CNNs and OpenCV. I believe in the power of technology to solve real-world problems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <feature.icon className="w-8 h-8 text-white mb-4 group-hover:text-gray-300 transition-colors duration-300" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;