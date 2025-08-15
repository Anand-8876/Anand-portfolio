import React, { useState } from 'react';
import { Calendar, MapPin, Award, TrendingUp, Code, Users, Lightbulb, Target } from 'lucide-react';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Remote',
      period: '2023 - Present',
      type: 'Full-time',
      description:
        'Leading development of scalable web applications using MERN stack. Mentoring junior developers and implementing best practices for code quality and performance optimization.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 5 developers on multiple projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Architected microservices handling 100k+ daily users',
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'TypeScript'],
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'San Francisco, CA',
      period: '2022 - 2023',
      type: 'Full-time',
      description:
        'Developed and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver high-quality software solutions on tight deadlines.',
      achievements: [
        'Built 3 major applications from scratch',
        'Reduced bug reports by 50% through comprehensive testing',
        'Implemented real-time features using WebSocket technology',
        'Optimized database queries improving response time by 35%',
      ],
      skills: ['JavaScript', 'React', 'Express.js', 'PostgreSQL', 'Redis', 'Git'],
      icon: Users,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      period: '2021 - 2022',
      type: 'Internship',
      description:
        'Focused on creating responsive and interactive user interfaces. Gained experience in modern frontend frameworks and collaborated with design teams.',
      achievements: [
        'Converted 15+ design mockups to responsive web pages',
        'Improved website loading speed by 25%',
        'Learned and implemented modern CSS frameworks',
        'Contributed to open-source projects',
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Figma'],
      icon: Lightbulb,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Computer Science Student',
      company: 'University of Technology',
      location: 'Boston, MA',
      period: '2019 - 2023',
      type: 'Education',
      description:
        'Bachelor of Science in Computer Science with focus on software engineering, data structures, algorithms, and artificial intelligence.',
      achievements: [
        'Graduated Magna Cum Laude with 3.8 GPA',
        'Led university coding club with 200+ members',
        'Won 3 hackathons and coding competitions',
        'Published research paper on machine learning applications',
      ],
      skills: ['Data Structures', 'Algorithms', 'Python', 'Java', 'Machine Learning', 'Research'],
      icon: Target,
      color: 'from-orange-500 to-red-500',
    },
  ];

  // Get the active icon component
  const ActiveIcon = experiences[activeExperience].icon;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-fade-in">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-8 animate-slide-in"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in-up">
            My professional journey and educational background in software development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveExperience(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                      activeExperience === index
                        ? 'bg-gradient-to-r from-gray-700/50 to-gray-800/50 border-white/30 shadow-lg'
                        : 'bg-gray-800/30 border-gray-700/30 hover:border-gray-600/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} bg-opacity-20`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`font-semibold text-sm truncate transition-colors duration-300 ${
                            activeExperience === index ? 'text-white' : 'text-gray-300'
                          }`}
                        >
                          {exp.title}
                        </h3>
                        <p
                          className={`text-xs truncate transition-colors duration-300 ${
                            activeExperience === index ? 'text-gray-300' : 'text-gray-500'
                          }`}
                        >
                          {exp.company}
                        </p>
                      </div>
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

          {/* Experience Details */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 border border-gray-700/50 rounded-2xl p-8 min-h-[600px] relative overflow-hidden animate-fade-in">
              {/* Background animation */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${experiences[activeExperience].color} opacity-5 transition-all duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r ${experiences[activeExperience].color} bg-opacity-20 animate-pulse`}
                    >
                      <ActiveIcon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 animate-slide-in-right">
                        {experiences[activeExperience].title}
                      </h3>
                      <p className="text-lg text-gray-300 animate-slide-in-right animation-delay-100">
                        {experiences[activeExperience].company}
                      </p>
                    </div>
                  </div>
                  <div className="text-right animate-slide-in-left">
                    <div className="flex items-center space-x-2 text-gray-400 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{experiences[activeExperience].period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{experiences[activeExperience].location}</span>
                    </div>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="mb-6 animate-fade-in-up">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${experiences[activeExperience].color} bg-opacity-20 text-white border border-gray-600/30`}
                  >
                    {experiences[activeExperience].type}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
                  {experiences[activeExperience].description}
                </p>

                {/* Achievements */}
                <div className="mb-8 animate-fade-in-up animation-delay-300">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {experiences[activeExperience].achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 text-gray-300 animate-slide-in-right"
                        style={{ animationDelay: `${400 + index * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="animate-fade-in-up animation-delay-500">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeExperience].skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50 hover:border-gray-500/50 hover:bg-gray-600/50 transition-all duration-300 hover:scale-110 animate-bounce-in"
                        style={{ animationDelay: `${600 + index * 50}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping opacity-20"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-gray-400 rounded-full animate-ping opacity-30 animation-delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
