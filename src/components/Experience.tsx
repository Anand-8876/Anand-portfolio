import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Award, TrendingUp, Code, Users, Lightbulb, Target, ChevronRight } from 'lucide-react';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      title: 'Full Stack Software Developer',
      company: 'SS Innovations',
      location: 'On-site',
      period: '2025 - Present',
      type: 'Software Engineering Intern',
      description:
        'Developing and maintaining SSI Sutra, the company\'s flagship web application. Contributing to full-stack development initiatives while gaining hands-on experience in enterprise-level software development practices.',
      achievements: [
        'Actively contributing to MERN stack application development and feature implementation',
        'Architecting and implementing new features to enhance user experience and system functionality',
        'Gaining expertise in system design principles and scalable architecture patterns',
        'Integrated Swagger API documentation and optimized database queries using SQL',
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Socket.io', 'MySQL', 'Swagger API'],
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Full-Stack SAP Developer',
      company: 'Plumcot Systems',
      location: 'Remote',
      period: '2024 - 2025',
      type: 'Software Development Trainee',
      description:
        'Specialized in designing, developing, and maintaining SAP-integrated client applications. Collaborated with cross-functional teams to deliver scalable, enterprise-grade software solutions within aggressive project timelines.',
      achievements: [
        'Successfully architected and delivered multiple enterprise applications with seamless SAP integration',
        'Developed responsive UI components using SAP UI5 framework and provided technical guidance to development teams',
        'Collaborated with clients to gather requirements and translate business needs into technical solutions',
      ],
      skills: [
        'JavaScript',
        'React',
        'Express.js',
        'PostgreSQL',
        'Redis',
        'Git',
        'SAP UI5',
        'OData Services',
        'SAP Fiori',
        'SAP ABAP Integration',
      ],
      icon: Users,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Frontend Developer',
      company: 'Doubt Free',
      location: 'Remote',
      period: '2024',
      type: 'Frontend Development Intern',
      description:
        'Focused on creating responsive, interactive user interfaces using modern frontend technologies. Collaborated closely with design teams to translate wireframes and mockups into pixel-perfect, accessible web applications.',
      achievements: [
        'Successfully delivered a complete client website as the primary internship deliverable',
        'Mastered React ecosystem and Next.js framework for building performant web applications',
        'Developed proficiency in modern UI/UX principles and design system implementation',
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Next.js', 'Tailwind CSS', 'Figma', 'Responsive Design'],
      icon: Lightbulb,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Software Engineering Intern',
      company: 'H-care',
      location: 'On-campus',
      period: '2023',
      type: 'Technical Internship Program',
      description:
        'Comprehensive internship program focusing on fundamental software engineering concepts, data structures, algorithms, and emerging technologies including artificial intelligence and machine learning.',
      achievements: [
        'Collaborated with senior developers to understand software development lifecycle and best practices',
        'Gained exposure to various technology stacks and modern application architectures',
        'Expanded skill set into digital marketing domain, understanding the intersection of technology and business',
      ],
      skills: ['Data Structures', 'Algorithms', 'Python', 'Java', 'Machine Learning Fundamentals', 'Research Methodology', 'WordPress', 'Shopify'],
      icon: Target,
      color: 'from-orange-500 to-red-500',
    },
  ];

  // Get the active icon component
  const ActiveIcon = experiences[activeExperience].icon;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white rounded-full animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced header with stagger animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-8 transform origin-left transition-transform duration-1000" style={{transitionDelay: '0.3s'}}></div>
          <p className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{transitionDelay: '0.6s'}}>
            A comprehensive overview of my professional journey and technical expertise in software development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Enhanced Timeline Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveExperience(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-500 hover:scale-105 transform ${
                      activeExperience === index
                        ? 'bg-gradient-to-r from-gray-700/50 to-gray-800/50 border-white/30 shadow-lg shadow-gray-900/50 scale-105'
                        : 'bg-gray-800/30 border-gray-700/30 hover:border-gray-600/50 hover:shadow-md'
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} bg-opacity-20 transition-all duration-300 ${
                        activeExperience === index ? 'scale-110' : ''
                      }`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`font-semibold text-sm truncate transition-all duration-300 ${
                            activeExperience === index ? 'text-white' : 'text-gray-300'
                          }`}
                        >
                          {exp.title}
                        </h3>
                        <p
                          className={`text-xs truncate transition-all duration-300 ${
                            activeExperience === index ? 'text-gray-300' : 'text-gray-500'
                          }`}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                        activeExperience === index ? 'text-white translate-x-1' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Enhanced Experience Details */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 min-h-[600px] relative overflow-hidden transition-all duration-700">
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${experiences[activeExperience].color} opacity-5 transition-all duration-1000`}
              ></div>

              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>

              <div className="relative z-10">
                {/* Enhanced Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r ${experiences[activeExperience].color} bg-opacity-20 animate-pulse-soft shadow-lg`}
                    >
                      <ActiveIcon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 transition-all duration-500 animate-slide-in-right">
                        {experiences[activeExperience].title}
                      </h3>
                      <p className="text-lg text-gray-300 transition-all duration-500 animate-slide-in-right" style={{animationDelay: '0.1s'}}>
                        {experiences[activeExperience].company}
                      </p>
                    </div>
                  </div>
                  <div className="text-right animate-slide-in-left">
                    <div className="flex items-center space-x-2 text-gray-400 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{experiences[activeExperience].period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{experiences[activeExperience].location}</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Type Badge */}
                <div className="mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <span
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${experiences[activeExperience].color} bg-opacity-20 text-white border border-gray-600/30 shadow-md backdrop-blur-sm`}
                  >
                    {experiences[activeExperience].type}
                  </span>
                </div>

                {/* Enhanced Description */}
                <p className="text-gray-300 mb-8 leading-relaxed text-base animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                  {experiences[activeExperience].description}
                </p>

                {/* Enhanced Achievements */}
                <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-yellow-400" />
                    Key Achievements & Responsibilities
                  </h4>
                  <ul className="space-y-4">
                    {experiences[activeExperience].achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 text-gray-300 animate-slide-in-right transition-all duration-300 hover:text-white hover:translate-x-2"
                        style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mt-2 animate-pulse flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Skills */}
                <div className="animate-fade-in-up" style={{animationDelay: '0.7s'}}>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {experiences[activeExperience].skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50 hover:border-gray-500/50 hover:bg-gray-600/50 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default animate-bounce-in backdrop-blur-sm"
                        style={{ animationDelay: `${0.8 + index * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-ping opacity-20"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-gray-400 rounded-full animate-ping opacity-30" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-8 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-bounce-in {
          animation: bounceIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounceIn {
          from {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;