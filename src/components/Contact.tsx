import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, Send, Clipboard, Check, Terminal, Play } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formHistory, setFormHistory] = useState<string[]>([]);

  const contactLinks = [
    {
      name: 'Email',
      value: 'anand02102@gmail.com',
      href: 'mailto:anand02102@gmail.com',
      icon: Mail,
      desc: 'Send an email directly'
    },
    {
      name: 'GitHub',
      value: 'github.com/Anand-8876',
      href: 'https://github.com/Anand-8876',
      icon: Github,
      desc: 'Explore source code repositories'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/anand-29b9b3257',
      href: 'https://www.linkedin.com/in/anand-29b9b3257/',
      icon: Linkedin,
      desc: 'Connect professionally'
    }
  ];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('anand02102@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    setFormHistory([
      'Establishing API handshake with smtp.anand.dev...',
      `Sending packet: name=${formData.name} email=${formData.email}...`,
      'Encrypting message body with RSA-2048...',
      'Delivering message packet to backend nodes...',
      '[SUCCESS] Packet successfully delivered to Anand\'s inbox! Thank you.'
    ]);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-neutral-900 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-left mb-16 space-y-4">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">&gt; // 05. CONTACT_INTERFACE</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-neutral-800 rounded-full"></div>
          <p className="text-sm text-neutral-400 font-mono max-w-xl">
            Let's collaborate and build something secure, scalable, and catchy together. Open to discussions on roles or projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start font-mono">
          
          {/* Left Side: Contact Cards & SDE Status Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Social Links Cards */}
            <div className="space-y-3">
              {contactLinks.map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-neutral-950 border border-neutral-900 hover:border-neutral-800 rounded transition-all duration-300"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-850 flex items-center justify-center">
                      <contact.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        {contact.name}
                        {contact.name === 'Email' && (
                          <button
                            onClick={handleCopyEmail}
                            className="p-1 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-850 text-neutral-500 hover:text-white transition-colors"
                            title="Copy email to clipboard"
                          >
                            {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Clipboard className="w-3 h-3" />}
                          </button>
                        )}
                      </h3>
                      <span className="text-[10px] text-neutral-600 block mt-0.5">{contact.desc}</span>
                      <span className="text-[11px] text-neutral-400 block mt-1">{contact.value}</span>
                    </div>
                  </div>

                  <ExternalLink className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>

            {/* SDE Availability Box */}
            <div className="bg-neutral-950 p-6 rounded border border-neutral-900 text-xs text-neutral-400 space-y-3 leading-relaxed">
              <span className="text-neutral-600 block">// availability_status.json</span>
              <div className="space-y-1">
                <p><span className="text-neutral-500">"status":</span> <span className="text-emerald-500">"open_for_opportunities"</span>,</p>
                <p><span className="text-neutral-500">"roles":</span> <span className="text-neutral-300">["Full-time SDE", "Full Stack Engineer"]</span>,</p>
                <p><span className="text-neutral-500">"locations":</span> <span className="text-neutral-300">["Gurugram, IN", "Noida, IN", "Remote"]</span>,</p>
                <p><span className="text-neutral-500">"relocation":</span> <span className="text-neutral-300">true</span>,</p>
                <p><span className="text-neutral-500">"contact_speed":</span> <span className="text-neutral-300">"&lt; 24_hours"</span></p>
              </div>
            </div>

          </div>

          {/* Right Side: IDE-style Quick Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="editor-window flex flex-col min-h-[420px]">
              
              {/* Form Window Header */}
              <div className="editor-header flex justify-between items-center select-none">
                <div className="flex items-center">
                  <div className="editor-dot bg-neutral-850"></div>
                  <div className="editor-dot bg-neutral-850"></div>
                  <div className="editor-dot bg-neutral-850"></div>
                  <span className="text-[10px] text-neutral-500 ml-4">message_sender.sh // CLI Form</span>
                </div>
                <Terminal className="w-3.5 h-3.5 text-neutral-600" />
              </div>

              {/* Form Body */}
              <div className="p-6 bg-neutral-950 flex-1 flex flex-col justify-between text-xs text-neutral-400">
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleFormSubmit}
                      className="space-y-5 flex-1 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        {/* Name Input */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] text-neutral-600 uppercase tracking-wider block">// input.sender_name</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-neutral-900/40 border-b border-neutral-900 focus:border-white outline-none py-2 px-1 text-white transition-colors placeholder-neutral-750"
                            placeholder="your name or organization"
                          />
                        </div>

                        {/* Email Input */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] text-neutral-600 uppercase tracking-wider block">// input.sender_email</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-neutral-900/40 border-b border-neutral-900 focus:border-white outline-none py-2 px-1 text-white transition-colors placeholder-neutral-750"
                            placeholder="your.email@domain.com"
                          />
                        </div>

                        {/* Message Input */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] text-neutral-600 uppercase tracking-wider block">// input.message_body</label>
                          <textarea
                            name="message"
                            required
                            rows={3}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full bg-neutral-900/40 border-b border-neutral-900 focus:border-white outline-none py-2 px-1 text-white transition-colors resize-none placeholder-neutral-750"
                            placeholder="details about your project opportunity or a friendly hello..."
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center space-x-2.5 px-6 py-3.5 bg-white text-black font-semibold rounded hover:bg-neutral-200 transition-colors"
                      >
                        <Send className="w-4 h-4" />
                        <span className="uppercase text-[10px] tracking-wider font-bold">Transmit Packet</span>
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="logs"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4 flex-1 flex flex-col justify-between"
                    >
                      <div className="space-y-1.5 bg-neutral-900/50 p-4 rounded border border-neutral-900 leading-relaxed font-mono text-[10px]">
                        {formHistory.map((line, idx) => (
                          <div
                            key={idx}
                            className={line.startsWith('[SUCCESS]') ? 'text-emerald-500 font-bold' : 'text-neutral-500'}
                          >
                            &gt; {line}
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({ name: '', email: '', message: '' });
                        }}
                        className="w-full flex items-center justify-center space-x-2.5 px-6 py-3.5 bg-neutral-900 hover:bg-neutral-850 text-white font-semibold rounded border border-neutral-800 transition-colors"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span className="uppercase text-[10px] tracking-wider font-bold">Send Another Message</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-neutral-900 text-center font-mono text-[11px] text-neutral-600">
          <p>
            © 2026 Anand.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;