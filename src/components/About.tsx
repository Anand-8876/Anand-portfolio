import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Brain, Rocket, Database, Layers, ShieldCheck, Cpu, Star } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const stats = [
    { value: '1.5+', label: 'Years Experience', desc: 'Full-time & Intern SDE roles', icon: Star },
    { value: '15+', label: 'Tech Tools', desc: 'MERN, Cloud & OpenCV stack', icon: Layers },
    { value: '300+', label: 'APIs Audited', desc: 'Security audited (JWT & RBAC)', icon: ShieldCheck },
    { value: '95%+', label: 'CV Model Accuracy', desc: 'Drowsiness & CNN pipelines', icon: Cpu }
  ];

  const focusAreas = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Engineering secure, high-density React/Vite interfaces and robust Node.js APIs.',
    },
    {
      icon: Database,
      title: 'MERN Stack Expertise',
      description: 'Optimizing MongoDB collections, Express middleware, and WebRTC telemetry streams.',
    },
    {
      icon: Brain,
      title: 'AI & Computer Vision',
      description: 'Configuring custom LLMs (Llama 3) locally and coding real-time camera tracking via OpenCV.',
    },
    {
      icon: Rocket,
      title: 'Reliable Deployments',
      description: 'Automating builds using GitLab CI/CD, containerizing with Docker, and hosting on AWS clouds.',
    }
  ];

  return (
    <section 
      ref={ref}
      id="about" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative border-t border-neutral-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-left mb-16 space-y-4">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">&gt; // 01. PROFILE_OVERVIEW</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
            About Me
          </h2>
          <div className="w-16 h-1 bg-neutral-800 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Biography text cards */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              className="space-y-6 font-mono text-sm leading-relaxed"
            >
              <motion.div 
                variants={fadeInUp}
                className="bg-neutral-950 p-6 rounded border border-neutral-900 border-glow-hover"
              >
                <span className="text-neutral-600 block mb-2">// background</span>
                <p className="text-neutral-300">
                  I am a Software Development Engineer (SDE) with a B.Tech in Computer Science & Engineering from Galgotias University. I specialize in backend API performance, robust full-stack architecture, and real-world system reliability.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-neutral-950 p-6 rounded border border-neutral-900 border-glow-hover"
              >
                <span className="text-neutral-600 block mb-2">// philosophy</span>
                <p className="text-neutral-300">
                  I believe in writing clean, self-documenting code and automating pipelines to prevent failure. My work ranges from auditing surgical robot dashboard APIs to implementing low-latency camera telemetry tracking.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-neutral-950 p-6 rounded border border-neutral-900 border-glow-hover"
              >
                <span className="text-neutral-600 block mb-2">// machine learning exploration</span>
                <p className="text-neutral-300">
                  I explore practical machine learning integrations, including running local large language models (Llama 3 via Ollama) and developing computer vision filters to improve surgical workflow visibility.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Bento Statistics Grid */}
          <div className="lg:col-span-5 w-full">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-neutral-950/80 p-5 rounded border border-neutral-900 border-glow-hover flex flex-col justify-between h-40 font-mono"
                >
                  <div className="flex justify-between items-start">
                    <stat.icon className="w-5 h-5 text-neutral-500" />
                    <span className="text-[10px] text-neutral-600">0{idx+1}</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold text-white block tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs text-neutral-400 block mt-1 font-semibold">
                      {stat.label}
                    </span>
                    <span className="text-[10px] text-neutral-600 block mt-0.5">
                      {stat.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Focus Areas Bento Boxes */}
        <div className="mt-16">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-6">&gt; // CORE_FOCUS_COMPETENCY</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((focus, idx) => (
              <div 
                key={idx}
                className="bg-neutral-950 p-6 rounded border border-neutral-900 border-glow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-850 flex items-center justify-center mb-4">
                    <focus.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {focus.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {focus.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-900/50 flex items-center justify-between font-mono text-[10px] text-neutral-600">
                  <span>FOCUS // 0{idx+1}</span>
                  <span>[STABLE]</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;