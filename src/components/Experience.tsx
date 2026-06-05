import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Award, Terminal, Code, GitCommit, GitBranch, TerminalSquare, Compass, ShieldCheck } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  icon: any;
}

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences: ExperienceItem[] = [
    {
      title: 'Software Development Engineer',
      company: 'SS Innovations International, Inc.',
      location: 'Gurugram, India',
      period: 'Sept 2025 - Present',
      type: 'Full-time SDE',
      description:
        'Spearheaded the end-to-end development of "Sutra v3", a highly scalable enterprise-grade web application built using the MERN Stack. Implemented complex dashboards, security audits, and optimized traffic handling workflows.',
      achievements: [
        'Security: Integrated AWS Cognito for auth, created AWS Lambda functions for user pool synchronization, encrypted Local Storage auth tokens, and implemented CryptoJS API response encryption.',
        'Frontend: Architected responsive interfaces using React, Vite, Redux Toolkit, and Material-UI (MUI), featuring charts (Chart.js/Recharts) and GIS mapping (React Leaflet).',
        'Backend: Designed scalable Node.js/Express.js REST APIs and managed complex database schemas using MongoDB/Mongoose with query optimizations.',
        'Cloud & DevOps: Configured EC2 Load Balancers for traffic scalability, integrated S3, SES, and SNS, containerized setups with Docker/Nginx, and automated GitLab CI/CD builds.',
        'Architecture: Authored Low-Level Design (LLD) documents for Incident Management, Service Operations, and Pickup Tracking systems.'
      ],
      skills: ['React.js', 'Redux Toolkit', 'Material-UI (MUI)', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'AWS Cognito/Lambda', 'CryptoJS', 'Docker', 'Nginx', 'GitLab CI/CD', 'WebRTC', 'Socket.io', 'Chart.js', 'React Leaflet', 'Nodemailer'],
      icon: ShieldCheck
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'SS Innovations International, Inc.',
      location: 'Gurugram, India',
      period: 'Mar 2025 - Aug 2025',
      type: 'Internship',
      description:
        'Engineered features for hospital telemetry systems and medical data visualization dashboards.',
      achievements: [
        'Optimized custom telemetry streaming components utilizing React, Vite, and Node.js backend nodes.',
        'Configured real-time hospital network communications and telemetry feeds with Socket.io.'
      ],
      skills: ['React', 'Vite', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
      icon: Code
    },
    {
      title: 'Software Developer Intern',
      company: 'Doubt Free',
      location: 'Remote',
      period: 'Oct 2023 - Mar 2024',
      type: 'Internship',
      description:
        'Designed frontend components and optimized code blocks for a high-traffic education portal.',
      achievements: [
        'Built interactive React frontend routes, forms, and layout pages for online doubt clearance.',
        'Audited website styles, implementing Tailwind CSS for responsive mobile and web layouts.'
      ],
      skills: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git'],
      icon: TerminalSquare
    },
    {
      title: 'Software Engineer Intern',
      company: 'H care',
      location: 'Gurugram, India',
      period: 'Sept 2022 - Nov 2022',
      type: 'Internship',
      description:
        'Collaborated on basic healthcare platform features and studied engineering team workflows.',
      achievements: [
        'Created UI modules and assisted senior developers in troubleshooting REST endpoints.',
        'Learned production Git flows, agile methodologies, and test assertions in Java.'
      ],
      skills: ['Python', 'Java', 'Data Structures', 'Algorithms', 'Agile Methodologies', 'Git'],
      icon: Compass
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-neutral-900 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 font-mono">
        
        {/* Header */}
        <div className="text-left mb-16 space-y-4">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">&gt; // 04. EXPERIENCE_LOG</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
            Professional History
          </h2>
          <div className="w-16 h-1 bg-neutral-800 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Git Commit Tree Timeline Navigation (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-neutral-900"></div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className="w-full text-left flex items-start space-x-6 group relative z-10 focus:outline-none"
                  >
                    
                    {/* Node Dot / Commit Marker */}
                    <div className="flex items-center justify-center h-12">
                      <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'bg-white border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                          : 'bg-black border-neutral-800 hover:border-neutral-700'
                      }`}>
                        {isActive ? (
                          <GitCommit className="w-5 h-5 text-black" />
                        ) : (
                          <GitBranch className="w-5 h-5 text-neutral-600 group-hover:text-neutral-400" />
                        )}
                      </div>
                    </div>

                    {/* Timeline Button Body */}
                    <div className={`flex-1 p-4 rounded border transition-all duration-300 ${
                      isActive 
                        ? 'bg-neutral-950 border-neutral-700' 
                        : 'bg-transparent border-transparent hover:border-neutral-900/60 hover:bg-neutral-950/40'
                    }`}>
                      <div className="flex justify-between items-start">
                        <span className={`text-[10px] uppercase font-bold tracking-widest ${
                          isActive ? 'text-white' : 'text-neutral-500'
                        }`}>
                          {exp.period}
                        </span>
                        <span className="text-[9px] text-neutral-600">COMMIT_0{idx}</span>
                      </div>
                      <h3 className={`text-sm font-bold mt-1 transition-colors ${
                        isActive ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                      }`}>
                        {exp.title}
                      </h3>
                      <p className="text-[11px] text-neutral-500 mt-0.5">{exp.company}</p>
                    </div>

                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Experience Details Console (7 cols) */}
          <div className="lg:col-span-7">
            <div className="editor-window flex flex-col min-h-[500px]">
              
              {/* Fake Terminal Header */}
              <div className="editor-header flex justify-between items-center select-none">
                <div className="flex items-center">
                  <div className="editor-dot bg-neutral-850"></div>
                  <div className="editor-dot bg-neutral-850"></div>
                  <div className="editor-dot bg-neutral-850"></div>
                  <span className="text-[10px] text-neutral-500 ml-4 font-mono">
                    experience_detail.log // SS Innovations & Others
                  </span>
                </div>
                <Terminal className="w-3.5 h-3.5 text-neutral-600" />
              </div>

              {/* Terminal Log Panel Content */}
              <div className="p-6 bg-neutral-950 flex-1 flex flex-col justify-between text-neutral-400 text-xs leading-relaxed space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div>
                      {/* Job title & info */}
                      <div className="border-b border-neutral-900 pb-4 space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-base font-bold text-white uppercase tracking-wider">
                            {experiences[activeIndex].title}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded bg-neutral-900 border border-neutral-850 text-neutral-400 text-[10px]">
                            {experiences[activeIndex].type}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-neutral-500 text-[11px]">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{experiences[activeIndex].period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{experiences[activeIndex].location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Brief description */}
                      <p className="text-neutral-400 text-[11px] leading-relaxed pt-2">
                        &gt; {experiences[activeIndex].description}
                      </p>

                      {/* Achievements bullets */}
                      <div className="mt-4 space-y-3">
                        <span className="text-neutral-600 block text-[9px] uppercase tracking-widest">// key_deliverables:</span>
                        <ul className="space-y-2.5">
                          {experiences[activeIndex].achievements.map((ach, achIdx) => (
                            <li key={achIdx} className="flex items-start space-x-2 text-neutral-300">
                              <span className="text-neutral-600 mt-1 select-none font-bold">+</span>
                              <span className="text-[11px] leading-relaxed">{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="pt-4 border-t border-neutral-900/60">
                      <span className="text-neutral-600 block text-[9px] uppercase tracking-widest mb-2">// associated_skills:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {experiences[activeIndex].skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-850 text-neutral-400 text-[10px]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;