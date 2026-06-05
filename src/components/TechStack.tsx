import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  SiGithub,
  SiNextdotjs,
  SiTailwindcss,
  SiSwagger,
  SiSocketdotio
} from 'react-icons/si';

interface TechItem {
  name: string;
  icon: any;
  category: 'frontend' | 'backend' | 'ai-vision' | 'tools';
  rating: number; // 1-5
}

const TechStack = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai-vision', label: 'AI & Vision' },
    { id: 'tools', label: 'DevOps & Tools' }
  ];

  const technologies: TechItem[] = [
    { name: 'React', icon: DiReact, category: 'frontend', rating: 5 },
    { name: 'JavaScript', icon: DiJavascript, category: 'frontend', rating: 5 },
    { name: 'TypeScript', icon: SiTypescript, category: 'frontend', rating: 4 },
    { name: 'Next.js', icon: SiNextdotjs, category: 'frontend', rating: 4 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'frontend', rating: 5 },
    { name: 'CSS3', icon: DiCss3, category: 'frontend', rating: 5 },
    
    { name: 'Node.js', icon: DiNodejsSmall, category: 'backend', rating: 5 },
    { name: 'Express.js', icon: SiExpress, category: 'backend', rating: 5 },
    { name: 'MongoDB', icon: SiMongodb, category: 'backend', rating: 5 },
    { name: 'Socket.io', icon: SiSocketdotio, category: 'backend', rating: 5 },
    { name: 'MySQL', icon: DiMysql, category: 'backend', rating: 4 },
    { name: 'Swagger', icon: SiSwagger, category: 'backend', rating: 4 },
    
    { name: 'Python', icon: DiPython, category: 'ai-vision', rating: 4 },
    { name: 'OpenCV', icon: SiOpencv, category: 'ai-vision', rating: 4 },
    { name: 'TensorFlow', icon: SiTensorflow, category: 'ai-vision', rating: 3 },
    
    { name: 'AWS', icon: DiAws, category: 'tools', rating: 4 },
    { name: 'Docker', icon: DiDocker, category: 'tools', rating: 4 },
    { name: 'Git', icon: DiGit, category: 'tools', rating: 5 },
    { name: 'GitHub', icon: SiGithub, category: 'tools', rating: 5 }
  ];

  const filteredTech = activeTab === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeTab);

  const getDots = (rating: number) => {
    return '•'.repeat(rating) + '◦'.repeat(5 - rating);
  };

  return (
    <section 
      id="tech" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-neutral-900 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-left mb-16 space-y-4">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">&gt; // 02. TECHNICAL_SKILLS</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
            Tech Stack
          </h2>
          <div className="w-16 h-1 bg-neutral-800 rounded-full"></div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-neutral-900 pb-4 font-mono text-xs">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2 rounded transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-white text-black font-semibold' 
                  : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-900 hover:border-neutral-800'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.span 
                  layoutId="activeTabUnderline" 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={tech.name}
                  className="group bg-neutral-950 border border-neutral-900 hover:border-neutral-800 rounded p-4 flex items-center justify-between transition-all duration-300 font-mono"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded bg-neutral-900 border border-neutral-850 group-hover:border-neutral-700 transition-colors">
                      <IconComponent className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors block">
                        {tech.name}
                      </span>
                      <span className="text-[9px] text-neutral-600 uppercase tracking-wider block">
                        {tech.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-xs text-neutral-600 group-hover:text-white tracking-widest transition-colors block">
                      {getDots(tech.rating)}
                    </span>
                    <span className="text-[8px] text-neutral-700 uppercase tracking-normal block mt-0.5">
                      {tech.rating === 5 ? 'EXPERT' : tech.rating === 4 ? 'ADVANCED' : 'INTERMEDIATE'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Footnote */}
        <div className="mt-12 text-center font-mono text-xs text-neutral-500">
          <p>
            Currently expanding into: <span className="text-neutral-300">Advanced ML Pipelines, GraphQL, and microservices scaling</span>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TechStack;