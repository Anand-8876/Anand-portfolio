import React, { useState } from 'react';
import { ExternalLink, Github, Play, Code, Database, Smartphone, Globe, Brain } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN application with user authentication, payment integration, and admin dashboard. Features real-time inventory management and order tracking.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      demoUrl: '#',
      githubUrl: '#',
      features: ['Payment Integration', 'Real-time Updates', 'Admin Dashboard', 'Responsive Design']
    },
    {
      title: 'AI Image Classifier',
      description: 'Computer vision application using CNNs and OpenCV for real-time image classification. Trained on custom datasets with 95% accuracy.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      demoUrl: '#',
      githubUrl: '#',
      features: ['Real-time Processing', 'Custom CNN Model', 'Web Interface', 'High Accuracy']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with drag-and-drop functionality, team collaboration features, and progress tracking.',
      tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      demoUrl: '#',
      githubUrl: '#',
      features: ['Drag & Drop', 'Real-time Collaboration', 'Progress Tracking', 'Team Management']
    },
    {
      title: 'Mobile Weather App',
      description: 'Cross-platform mobile application providing detailed weather forecasts with beautiful animations and location-based services.',
      tech: ['React Native', 'TypeScript', 'Weather API', 'Redux'],
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
      demoUrl: '#',
      githubUrl: '#',
      features: ['Cross-platform', 'Location Services', 'Beautiful UI', 'Offline Support']
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for data visualization and analytics with real-time charts, filters, and export functionality.',
      tech: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      icon: Database,
      color: 'from-yellow-500 to-orange-500',
      demoUrl: '#',
      githubUrl: '#',
      features: ['Interactive Charts', 'Real-time Data', 'Export Features', 'Custom Filters']
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-fade-in">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-8 animate-slide-in"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in-up">
            A showcase of my recent work, demonstrating expertise in full-stack development, AI/ML, and modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/80 border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Floating particles on hover */}
              {hoveredProject === index && (
                <>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                  <div className="absolute top-8 right-12 w-1 h-1 bg-gray-400 rounded-full animate-ping animation-delay-200"></div>
                  <div className="absolute top-12 right-6 w-1.5 h-1.5 bg-white rounded-full animate-ping animation-delay-400"></div>
                </>
              )}

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${project.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-all duration-300 hover:scale-110 group-hover:rotate-12"
                    >
                      <Play className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-all duration-300 hover:scale-110 group-hover:-rotate-12"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50 group-hover:border-gray-500/50 group-hover:bg-gray-600/50 transition-all duration-300 hover:scale-110"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full animation-delay-200"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/anand"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-white to-gray-300 text-black font-semibold rounded-lg hover:from-gray-100 hover:to-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:rotate-1"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;