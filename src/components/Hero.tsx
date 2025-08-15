import React, { useState, useEffect } from 'react';
import WavingAvatar from './WavingAvatar';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Full-Stack Developer',
    'MERN Stack Enthusiast', 
    'Problem Solver',
    'Always Learning 🚀',
    'AI & Computer Vision Explorer'
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentRoleText = roles[currentRole];

    if (isTyping) {
      if (displayText.length < currentRoleText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole, roles]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/80"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-gray-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-25"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-gray-300 rounded-full animate-ping opacity-20"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="relative">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Hi there, I'm 
              </span>
              <br />
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Anand! 👋
              </span>
            </h1>
            
            {/* Waving Avatar positioned at top-right */}
            <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8">
              <WavingAvatar />
            </div>
          </div>

          <div className="h-20 flex items-center justify-center">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-300">
              <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="animate-pulse text-white">|</span>
            </p>
          </div>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code, exploring cutting-edge technologies, 
            and building meaningful digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-white to-gray-300 text-black font-semibold rounded-lg hover:from-gray-100 hover:to-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;