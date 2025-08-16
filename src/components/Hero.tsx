import React, { useState, useEffect, useRef } from 'react';

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

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [heroRef, heroInView] = useInView();
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  const roles = [
    'Full-Stack Developer',
    'MERN Stack Enthusiast', 
    'Problem Solver',
    'Always Learning',
  ];

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Enhanced video loading and error handling
  useEffect(() => {
    const video = videoRef.current;
    if (video && !videoError) {
      // Force video to load and play
      const playVideo = async () => {
        try {
          // Set video properties before playing
          video.muted = true;
          video.playsInline = true;
          video.autoplay = true;
          video.loop = true;
          
          // Load the video
          video.load();
          
          // Wait a bit then try to play
          setTimeout(async () => {
            try {
              await video.play();
            } catch (playError) {
              console.warn('Video autoplay failed:', playError);
              // Fallback: try to play on first user interaction
              const playOnInteraction = async () => {
                try {
                  await video.play();
                  document.removeEventListener('touchstart', playOnInteraction);
                  document.removeEventListener('click', playOnInteraction);
                } catch (e) {
                  console.warn('Video play on interaction failed:', e);
                }
              };
              
              document.addEventListener('touchstart', playOnInteraction);
              document.addEventListener('click', playOnInteraction);
            }
          }, 500);
        } catch (error) {
          console.error('Video setup failed:', error);
          setVideoError(true);
        }
      };

      if (heroInView) {
        playVideo();
      }
    }
  }, [heroInView, videoError]);

  useEffect(() => {
    let timeout;
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

  // Parallax effect for background elements
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const stars = document.querySelectorAll('.floating-star');
      stars.forEach((star, index) => {
        const speed = 0.1 + (index * 0.05);
        star.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVideoError = (e) => {
    console.error('Video failed to load:', e);
    setVideoError(true);
  };

  const renderAvatar = () => {
    if (videoError || isMobile) {
      // Fallback for mobile or when video fails
      return (
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center text-4xl sm:text-5xl relative z-10 animate-pulse">
          👋
        </div>
      );
    }

    return (
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        controls={false}
        preload="metadata"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm object-cover relative z-10"
        style={{ objectFit: 'cover' }}
        onError={handleVideoError}
        onCanPlay={() => {
          console.log('Video can play');
          if (videoRef.current) {
            videoRef.current.play().catch(e => console.warn('Play failed:', e));
          }
        }}
      >
        {/* Fallback content */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center text-4xl sm:text-5xl">
          👋
        </div>
      </video>
    );
  };

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-gray-900/80"></div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="floating-star absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse opacity-20"></div>
        <div className="floating-star absolute top-40 right-32 w-1 h-1 bg-gray-400 rounded-full animate-ping opacity-30"></div>
        <div className="floating-star absolute bottom-32 left-16 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-25"></div>
        <div className="floating-star absolute bottom-20 right-20 w-1 h-1 bg-gray-300 rounded-full animate-ping opacity-20"></div>
        <div className="floating-star absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-40"></div>
        <div className="floating-star absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-gray-300 rounded-full animate-ping opacity-30"></div>
        
        {/* Additional floating elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-star absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className={`relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        <div className="space-y-8">
          {/* Avatar with enhanced animations */}
          <div className={`flex justify-center mb-8 transition-all duration-1000 delay-300 ${
            heroInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <div className="transform hover:scale-110 transition-all duration-500 hover:rotate-3 relative group">
              {/* Animated glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {renderAvatar()}
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-500 ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Hi there, I'm 
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-gray-100 to-black bg-clip-text text-transparent animate-pulse">
                Anand!
              </span>
            </h1>
          </div>

          <div className={`h-20 flex items-center justify-center transition-all duration-1000 delay-700 ${
            heroInView ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-300">
              <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="animate-pulse text-cyan-400 ml-1">|</span>
            </p>
          </div>

          <p className={`text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-1000 ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            I try to build modern, scalable, and user-friendly web applications. With expertise in the MERN stack, Next.js, and cutting-edge web technologies, I focus on creating impactful digital solutions. Welcome to my portfolio — a space where I share my projects, ideas, and journey in tech.
          </p>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 transition-all duration-1000 delay-1200 ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-white via-gray-100 to-black text-white font-semibold rounded-lg hover:from-gray-100 hover:via-white hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent font-bold">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-white -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1500 ${
        heroInView ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center relative overflow-hidden group cursor-pointer hover:border-purple-400 transition-colors duration-300"
             onClick={() => document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-2 animate-pulse group-hover:animate-bounce"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-400/20 to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;