import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600', icon: '🟨' },
    { name: 'TypeScript', color: 'from-blue-400 to-blue-600', icon: '🔷' },
    { name: 'React', color: 'from-cyan-400 to-cyan-600', icon: '⚛️' },
    { name: 'Node.js', color: 'from-green-400 to-green-600', icon: '🟢' },
    { name: 'Express.js', color: 'from-gray-400 to-gray-600', icon: '🚂' },
    { name: 'MongoDB', color: 'from-green-400 to-green-700', icon: '🍃' },
    { name: 'Python', color: 'from-blue-400 to-yellow-400', icon: '🐍' },
    { name: 'OpenCV', color: 'from-red-400 to-red-600', icon: '👁️' },
    { name: 'TensorFlow', color: 'from-orange-400 to-orange-600', icon: '🧠' },
    { name: 'Git', color: 'from-orange-500 to-red-500', icon: '📝' },
    { name: 'Docker', color: 'from-blue-500 to-cyan-500', icon: '🐳' },
    { name: 'AWS', color: 'from-yellow-500 to-orange-500', icon: '☁️' },
  ];

  return (
    <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:bg-gray-700/40 transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                transition: 'transform 2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) rotateX(360deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotateX(0deg)';
              }}
            >
              <div className="text-center">
                <div className="text-2xl mb-3 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>
              
              {/* Subtle glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Always exploring new technologies and staying updated with industry trends</p>
          <div className="inline-flex items-center space-x-2 text-white">
            <span className="animate-pulse">🚀</span>
            <span className="text-sm">Currently learning: Next.js, Prisma, and Advanced Machine Learning</span>
            <span className="animate-pulse">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;