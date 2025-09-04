import React, { useState, useEffect } from 'react';
import { 
  Hammer, 
  Monitor, 
  Palette, 
  Zap, 
  Code, 
  Globe, 
  Settings, 
  Database, 
  Paintbrush, 
  Brain, 
  Terminal 
} from 'lucide-react';

const Skills = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.getElementById('competences');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Hammer className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      skills: [
        { name: "Spring Boot", level: 50, icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Laravel", level: 70, icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Microservices", level: 40, icon: <Settings className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "API REST", level: 48, icon: <Settings className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Docker", level: 35, icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" /> },
      ]
    },
    {
      title: "Frontend Development",
      icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      skills: [
        { name: "React.js", level: 48, icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "React Native", level: 60, icon: <Monitor className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "JavaScript/TS", level: 45, icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Tailwind CSS", level: 50, icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "HTML/CSS", level: 72, icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" /> },
      ]
    },
    {
      title: "Design & Tools",
      icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      skills: [
        { name: "Figma", level: 45, icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Adobe Photoshop", level: 60, icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Adobe Illustrator", level: 45, icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "UI/UX Design", level: 48, icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Adobe InDesign", level: 30, icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" /> },
      ]
    },
    {
      title: "Other Technologies",
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-orange-600 to-orange-700",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      skills: [
        { name: "Computer Vision", level: 35, icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Deep Learning", level: 40, icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Git/GitHub", level: 70, icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "MySQL/PostgreSQL", level: 60, icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Linux/Ubuntu", level: 65, icon: <Terminal className="w-4 h-4 sm:w-5 sm:h-5" /> },
      ]
    }
  ];

  return (
    <section id="competences" className="min-h-screen py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className={`transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header Section */}
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:mb-6 sm:text-4xl lg:text-5xl">
              Mes <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Compétences</span>
            </h2>
            <p className="max-w-3xl px-2 mx-auto text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl sm:px-4">
              Une expertise technique complète pour créer des solutions web innovantes et performantes
            </p>
            <div className="w-16 h-1 mx-auto mt-4 rounded-full sm:w-24 sm:mt-6 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 sm:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: `${categoryIndex * 200}ms`,
                  transitionDelay: `${categoryIndex * 200}ms`
                }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl ${category.bgColor} ${category.iconColor} mr-3 sm:mr-4 shadow-lg flex-shrink-0`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold leading-tight text-gray-900 break-words sm:text-xl">{category.title}</h3>
                </div>
                
                {/* Skills List */}
                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2 sm:space-y-3">
                      {/* Skill Header */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center flex-1 min-w-0 gap-2 sm:gap-3">
                          <span className={`${category.iconColor} flex-shrink-0`}>
                            {skill.icon}
                          </span>
                          <span className="text-sm font-semibold text-gray-700 truncate sm:text-base">
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-xs sm:text-sm font-bold px-2 py-1 rounded-full ${category.bgColor} ${category.iconColor} flex-shrink-0`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-full shadow-inner sm:h-3">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{
                            width: inView ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Summary */}
          <div 
            className={`mt-12 sm:mt-16 text-center transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
            style={{ transitionDelay: '800ms' }}
          >
            <div className="max-w-4xl p-4 mx-auto bg-white border border-gray-100 shadow-lg sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
              <h3 className="mb-3 text-xl font-bold text-gray-900 sm:mb-4 sm:text-2xl">Expertise Technique</h3>
              <p className="px-0 mb-4 text-sm leading-relaxed text-gray-600 sm:mb-6 sm:text-base sm:px-2">
                Passionné par les technologies émergentes et l'innovation, je m'efforce constamment d'approfondir mes connaissances 
                et de rester à la pointe des dernières tendances du développement web et mobile.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
                {['Full-Stack', 'Mobile Dev', 'UI/UX Design', 'DevOps', 'AI/ML'].map((badge, index) => (
                  <span
                    key={badge}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:scale-105"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;