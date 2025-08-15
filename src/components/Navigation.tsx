import React, { useState, useEffect } from 'react';
import logo from "./logo-b.png";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'tech', 'github', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tech', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div 
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <img 
                src={logo} 
                alt="Anand Logo" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  // Fallback to text if logo fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Anand
              </span>
            </div>
            
            {/* Menu Button - Now for both mobile and desktop */}
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-300 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block h-0.5 bg-current transition-opacity duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Overlay - Now for both mobile and desktop */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Side Menu - Responsive for all devices */}
        <div className={`absolute top-0 right-0 h-full w-80 sm:w-96 bg-black/90 backdrop-blur-md border-l border-gray-800 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col pt-20 px-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left py-4 text-lg lg:text-xl transition-all duration-300 hover:text-white border-b border-gray-800/50 hover:border-gray-600/50 hover:pl-2 ${
                  activeSection === item.id
                    ? 'text-white pl-2'
                    : 'text-gray-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;