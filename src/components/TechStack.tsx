import React, { useRef, useState, useEffect } from 'react';
import { 
  DiJavascript, 
  DiReact, 
  DiNodejsSmall, 
  DiPython, 
  DiGit, 
  DiDocker, 
  DiAws,
  DiCss3,
  DiMysql 
} from 'react-icons/di';
import { 
  SiTypescript, 
  SiExpress, 
  SiMongodb, 
  SiOpencv, 
  SiTensorflow, 
  SiGit, 
  SiDocker, 
  SiAmazonaws,
  SiNextdotjs,
  SiTailwindcss,
  SiSwagger,
  SiSocketdotio,
  SiGithub
} from 'react-icons/si';

// Custom hook for intersection observer
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

// Individual tech card component with enhanced animations
const TechCard = ({ tech, index, isVisible }) => {
  const [cardRef, cardInView] = useInView({ threshold: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 cursor-pointer transition-all duration-700 transform ${
        cardInView && isVisible 
          ? 'opacity-100 translate-y-0 rotate-0' 
          : 'opacity-0 translate-y-20 rotate-12'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background glow */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${tech.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
      
      {/* Card content */}
      <div className="relative z-10 text-center">
        <div className={`text-4xl mb-3 transition-all duration-500 transform ${
          isHovered ? 'scale-125 rotate-12' : 'scale-100 rotate-0'
        }`}>
          <tech.icon className={`mx-auto transition-all duration-500 ${
            isHovered ? 'text-white drop-shadow-lg' : 'text-gray-400'
          }`} />
        </div>
        <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
          {tech.name}
        </h3>
      </div>
      
      {/* Hover overlay with tech color */}
      <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-xl transition-all duration-500`}></div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-white/20 transition-all duration-500"></div>
      
      {/* Floating particles on hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-60"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 1}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const TechStack = () => {
  const [sectionRef, sectionInView] = useInView();
  const [titleRef, titleInView] = useInView();

  const technologies = [
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600', icon: DiJavascript },
    { name: 'TypeScript', color: 'from-blue-400 to-blue-600', icon: SiTypescript },
    { name: 'React', color: 'from-cyan-400 to-cyan-600', icon: DiReact },
    { name: 'Next.js', color: 'from-white to-gray-300', icon: SiNextdotjs },
    { name: 'Node.js', color: 'from-green-400 to-green-600', icon: DiNodejsSmall },
    { name: 'Express.js', color: 'from-gray-400 to-gray-600', icon: SiExpress },
    { name: 'MongoDB', color: 'from-green-400 to-green-700', icon: SiMongodb },
    { name: 'MySQL', color: 'from-blue-500 to-orange-500', icon: DiMysql },
    { name: 'Python', color: 'from-blue-400 to-yellow-400', icon: DiPython },
    { name: 'OpenCV', color: 'from-red-400 to-red-600', icon: SiOpencv },
    { name: 'TensorFlow', color: 'from-orange-400 to-orange-600', icon: SiTensorflow },
    { name: 'Tailwind CSS', color: 'from-cyan-400 to-blue-500', icon: SiTailwindcss },
    { name: 'CSS3', color: 'from-blue-400 to-blue-600', icon: DiCss3 },
    { name: 'Socket.io', color: 'from-black to-gray-700', icon: SiSocketdotio },
    { name: 'Swagger', color: 'from-green-400 to-green-600', icon: SiSwagger },
    { name: 'Git', color: 'from-orange-500 to-red-500', icon: DiGit },
    { name: 'GitHub', color: 'from-gray-700 to-black', icon: SiGithub },
    { name: 'AWS', color: 'from-yellow-500 to-orange-500', icon: DiAws },
  ];

  return (
    <section 
      ref={sectionRef}
      id="tech" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Floating code symbols */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/30 text-sm font-mono animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {['</', '/>', '{}', '[]', '()', '&&', '||', '=>'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8 rounded-full relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur opacity-50 animate-pulse"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <TechCard 
              key={index} 
              tech={tech} 
              index={index} 
              isVisible={sectionInView}
            />
          ))}
        </div>

        {/* Current learning section with enhanced animations */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <p className="text-gray-400 mb-6 text-lg">
            Always exploring new technologies and staying updated with industry trends
          </p>
          
          <div className="inline-flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-full px-6 py-3 text-white group hover:border-cyan-400/50 transition-all duration-300">
            <span className="animate-pulse text-xl">🚀</span>
            <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-medium">
              Currently learning: Advanced Machine Learning, GraphQL, and Microservices Architecture
            </span>
            <span className="animate-pulse text-xl">🚀</span>
            
            {/* Animated glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Add custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(90deg); }
          50% { transform: translateY(-5px) rotate(180deg); }
          75% { transform: translateY(-15px) rotate(270deg); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStack;