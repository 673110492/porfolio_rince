import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Build,
  Computer,
  Palette,
  Bolt,
  Code,
  Web,
  Api,
  Storage,
  Brush,
  Psychology,
  Terminal,
  GitHub
} from '@mui/icons-material';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Build className="w-8 h-8" />,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      skills: [
        { name: "Spring Boot", level: 90, icon: <Code className="w-5 h-5" /> },
        { name: "Laravel", level: 85, icon: <Web className="w-5 h-5" /> },
        { name: "Microservices", level: 80, icon: <Api className="w-5 h-5" /> },
        { name: "API REST", level: 88, icon: <Api className="w-5 h-5" /> },
        { name: "Docker", level: 75, icon: <Storage className="w-5 h-5" /> },
      ]
    },
    {
      title: "Frontend Development",
      icon: <Computer className="w-8 h-8" />,
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      skills: [
        { name: "React.js", level: 88, icon: <Code className="w-5 h-5" /> },
        { name: "React Native", level: 80, icon: <Computer className="w-5 h-5" /> },
        { name: "JavaScript/TypeScript", level: 85, icon: <Code className="w-5 h-5" /> },
        { name: "Tailwind CSS", level: 90, icon: <Brush className="w-5 h-5" /> },
        { name: "HTML/CSS", level: 92, icon: <Web className="w-5 h-5" /> },
      ]
    },
    {
      title: "Design & Tools",
      icon: <Palette className="w-8 h-8" />,
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      skills: [
        { name: "Figma", level: 85, icon: <Brush className="w-5 h-5" /> },
        { name: "Adobe Photoshop", level: 80, icon: <Palette className="w-5 h-5" /> },
        { name: "Adobe Illustrator", level: 75, icon: <Brush className="w-5 h-5" /> },
        { name: "UI/UX Design", level: 78, icon: <Palette className="w-5 h-5" /> },
        { name: "Adobe InDesign", level: 70, icon: <Brush className="w-5 h-5" /> },
      ]
    },
    {
      title: "Other Technologies",
      icon: <Bolt className="w-8 h-8" />,
      color: "from-orange-600 to-orange-700",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      skills: [
        { name: "Computer Vision", level: 75, icon: <Psychology className="w-5 h-5" /> },
        { name: "Deep Learning", level: 70, icon: <Psychology className="w-5 h-5" /> },
        { name: "Git/GitHub", level: 85, icon: <GitHub className="w-5 h-5" /> },
        { name: "MySQL/PostgreSQL", level: 80, icon: <Storage className="w-5 h-5" /> },
        { name: "Linux/Ubuntu", level: 75, icon: <Terminal className="w-5 h-5" /> },
      ]
    }
  ];

  return (
    <section id="competences" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container section-padding">
        <div ref={ref} className={`transition-all duration-800 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              Mes <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Compétences</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
              Une expertise technique complète pour créer des solutions web innovantes et performantes
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="flex items-center mb-8">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-xl ${category.bgColor} ${category.iconColor} mr-4 shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className={`${category.iconColor}`}>
                            {skill.icon}
                          </span>
                          <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                        </div>
                        <span className={`text-sm font-bold px-2 py-1 rounded-full ${category.bgColor} ${category.iconColor}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-3 overflow-hidden bg-gray-200 rounded-full shadow-inner">
                        <div
                          className={`h-3 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out relative overflow-hidden ${
                            inView ? 'animate-pulse' : ''
                          }`}
                          style={{
                            width: inView ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Summary */}
          <div className={`mt-16 text-center ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '800ms' }}>
            <div className="max-w-4xl p-8 mx-auto bg-white border border-gray-100 shadow-lg rounded-2xl">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Expertise Technique</h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                Passionné par les technologies émergentes et l'innovation, je m'efforce constamment d'approfondir mes connaissances 
                et de rester à la pointe des dernières tendances du développement web et mobile.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Full-Stack', 'Mobile Development', 'UI/UX Design', 'DevOps', 'AI/ML'].map((badge, index) => (
                  <span
                    key={badge}
                    className="px-4 py-2 text-sm font-semibold text-white transition-shadow duration-300 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl"
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