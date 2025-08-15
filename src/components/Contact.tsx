import React from 'react';
import { Mail, Github, Linkedin, ExternalLink, Send } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      value: 'anand@example.com',
      href: 'mailto:anand@example.com',
      icon: Mail,
      color: 'from-red-400 to-red-600',
      description: 'Send me an email'
    },
    {
      name: 'GitHub',
      value: 'github.com/anand',
      href: 'https://github.com/anand',
      icon: Github,
      color: 'from-gray-400 to-gray-600',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/anand',
      href: 'https://linkedin.com/in/anand',
      icon: Linkedin,
      color: 'from-blue-400 to-blue-600',
      description: 'Connect professionally'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Let's collaborate and build something amazing together. I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactLinks.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/80 border border-gray-700/50 rounded-xl hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`p-3 rounded-full bg-gradient-to-r ${contact.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">
                      {contact.name}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {contact.description}
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Available for:</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Full-stack web development projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Open source collaborations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Technical consulting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Mentoring and knowledge sharing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 border border-gray-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Quick Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-white/50 text-white placeholder-gray-400 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-white/50 text-white placeholder-gray-400 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:border-white/50 text-white placeholder-gray-400 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or just say hi!"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-white to-gray-300 text-black font-semibold rounded-lg hover:from-gray-100 hover:to-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700/50 text-center">
          <p className="text-gray-400">
            © 2025 Anand. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;