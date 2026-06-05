import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ArrowRight, CornerDownLeft, Sparkles } from 'lucide-react';
import avatarImg from './anand_.png';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Interactive Terminal State
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'sys_boot_v3.0.4: SUCCESS',
    'docker_load: SUTRA-V3 [ONLINE]',
    'ollama_service: LLAMA-3 [READY]',
    'Welcome! Type help or click a command below.',
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  const roles = [
    'Software Development Engineer',
    'Full-Stack Developer (MERN)',
    'AI & Computer Vision Enthusiast',
  ];

  // Role Typewriter Effect
  useEffect(() => {
    let timeout: any;
    const currentRoleText = roles[currentRole];

    if (isTyping) {
      if (displayText.length < currentRoleText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole]);

  // Scroll terminal to bottom
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (!trimmedCmd) return;

    let response: string[] = [];
    switch (trimmedCmd) {
      case 'help':
        response = [
          'Available commands:',
          '  about       - Details about Anand',
          '  skills      - Key technical stack',
          '  contact     - Reach out information',
          '  clear       - Clear terminal logs'
        ];
        break;
      case 'about':
        response = [
          'Anand - Software Development Engineer (SDE)',
          'Currently engineering surgical robotics systems at SS Innovations.',
          'B.Tech in CSE from Galgotias University.'
        ];
        break;
      case 'skills':
        response = [
          'Core Stack: React, Node.js, Express, MongoDB',
          'Robotics & AI: OpenCV, Llama-3, Python',
          'DevOps: AWS (Cognito/Lambda/S3), Docker, GitLab CI/CD'
        ];
        break;
      case 'contact':
        response = [
          'Email: anand02102@gmail.com',
          'Phone: 9958352405',
          'LinkedIn: anand-29b9b3257',
          'GitHub: github.com/Anand-8876'
        ];
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        response = [`Command not found: '${trimmedCmd}'. Type 'help' for options.`];
    }

    setTerminalHistory((prev) => [...prev, `anand@sde:~$ ${cmd}`, ...response]);
    setTerminalInput('');
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(terminalInput);
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black dot-grid pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Information & Terminal */}
          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-1.5 text-xs text-neutral-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-neutral-500 animate-pulse"></span>
              <span>v3.0.0 // HOST_ONLINE</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
                ANAND
              </h1>
              
              <div className="h-8 flex items-center">
                <p className="text-xl sm:text-2xl font-mono text-neutral-400 font-medium">
                  &gt; <span className="text-white">{displayText}</span>
                  <span className="animate-pulse text-white ml-0.5">_</span>
                </p>
              </div>
            </div>

            <p className="text-neutral-400 text-base sm:text-lg max-w-xl leading-relaxed">
              Software Development Engineer (SDE) at SS Innovations. I build highly secure MERN platforms, integrate local AI agents, and write computer vision scripts for camera-based surgical robotics tracking.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center space-x-2 px-6 py-3.5 bg-white text-black font-semibold rounded hover:bg-neutral-200 transition-all duration-300 shadow-md border border-white"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center space-x-2 px-6 py-3.5 border border-neutral-800 text-neutral-300 font-semibold rounded hover:bg-neutral-950 hover:text-white hover:border-neutral-600 transition-all duration-300 font-mono text-sm"
              >
                <span>Explore Projects</span>
              </button>
            </div>

            {/* Interactive Command Terminal */}
            <div className="border border-neutral-900 bg-neutral-950/90 rounded-lg overflow-hidden shadow-2xl font-mono text-xs w-full max-w-xl">
              <div className="bg-neutral-900/50 px-4 py-2 border-b border-neutral-900 flex justify-between items-center">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
                  <span className="text-[10px] text-neutral-500 ml-2">guest@anand-sde: ~</span>
                </div>
                <Terminal className="w-3.5 h-3.5 text-neutral-600" />
              </div>
              
              <div className="p-4 h-40 overflow-y-auto space-y-1.5 text-neutral-400 scrollbar-thin select-text">
                {terminalHistory.map((line, idx) => (
                  <div key={idx} className={line.startsWith('anand@sde') ? 'text-white' : 'text-neutral-500'}>
                    {line}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              <form onSubmit={handleTerminalSubmit} className="bg-neutral-900/30 border-t border-neutral-900/50 flex items-center px-4 py-2">
                <span className="text-white mr-1.5">anand@sde:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-white border-none p-0 focus:ring-0 placeholder-neutral-700"
                  placeholder="type 'help'..."
                  autoComplete="off"
                  spellCheck="false"
                />
                <button type="submit" className="text-neutral-600 hover:text-white ml-2">
                  <CornerDownLeft className="w-3 h-3" />
                </button>
              </form>

              {/* Command quick-clicks */}
              <div className="px-4 py-2 bg-neutral-900/10 border-t border-neutral-900/30 flex gap-2 flex-wrap items-center">
                <span className="text-[10px] text-neutral-600">Quick Commands:</span>
                {['about', 'skills', 'contact', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    onClick={() => executeCommand(cmd)}
                    className="text-[10px] px-2 py-0.5 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800/80 transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Image Grid */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              
              {/* Decorative Tech Grid Box */}
              <div className="absolute -inset-2.5 border border-dashed border-neutral-800 rounded-lg pointer-events-none transition-all duration-500 group-hover:border-neutral-500"></div>
              
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neutral-750 font-mono text-[9px] text-neutral-600 -translate-x-1 -translate-y-1"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neutral-750 font-mono text-[9px] text-neutral-600 translate-x-1 -translate-y-1"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neutral-750 font-mono text-[9px] text-neutral-600 -translate-x-1 translate-y-1"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neutral-750 font-mono text-[9px] text-neutral-600 translate-x-1 translate-y-1"></div>

              {/* Status Box */}
              <div className="absolute top-4 left-4 z-20 font-mono text-[10px] bg-neutral-950/80 border border-neutral-850 px-2 py-1 rounded text-neutral-500 backdrop-blur-sm">
                SRC: <span className="text-white">anand_.png</span>
              </div>
              <div className="absolute bottom-4 right-4 z-20 font-mono text-[10px] bg-neutral-950/80 border border-neutral-850 px-2 py-1 rounded text-neutral-500 backdrop-blur-sm">
                SYS: <span className="text-emerald-500">ACTIVE</span>
              </div>

              {/* Image Frame */}
              <div className="w-full h-full rounded border border-neutral-850 bg-neutral-950 overflow-hidden relative shadow-2xl flex items-center justify-center">
                <img
                  src={avatarImg}
                  alt="Anand Profile"
                  className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out cursor-pointer"
                  onError={(e: any) => {
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop';
                  }}
                />
                
                {/* Scanline overlay effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-40"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-6 h-10 border border-neutral-850 rounded-full flex justify-center pt-2 hover:border-neutral-500 transition-colors"
        >
          <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
        </button>
      </div>
    </section>
  );
};

export default Hero;