import React from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Backend Development",
      icon: "🔧",
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "Laravel", level: 85 },
        { name: "Microservices", level: 80 },
        { name: "API REST", level: 88 },
        { name: "Docker", level: 75 },
      ]
    },
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        { name: "React.js", level: 88 },
        { name: "React Native", level: 80 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 92 },
      ]
    },
    {
      title: "Design & Tools",
      icon: "🎨",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe Photoshop", level: 80 },
        { name: "Adobe Illustrator", level: 75 },
        { name: "UI/UX Design", level: 78 },
        { name: "Adobe InDesign", level: 70 },
      ]
    },
    {
      title: "Other Technologies",
      icon: "⚡",
      skills: [
        { name: "Computer Vision", level: 75 },
        { name: "Deep Learning", level: 70 },
        { name: "Git/GitHub", level: 85 },
        { name: "MySQL/PostgreSQL", level: 80 },
        { name: "Linux/Ubuntu", level: 75 },
      ]
    }
  ];

  return (
    <section id="competences" className="py-20 bg-gray-50">
      <div className="container section-padding">
        <div ref={ref} className={`transition-all duration-800 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mes <span className="gradient-text">Compétences</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une expertise technique complète pour créer des solutions web innovantes et performantes
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`card p-8 transform transition-all duration-500 hover:scale-105 ${
                  inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm font-medium text-primary-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 transition-all duration-1000 ease-out ${
                            inView ? 'animate-pulse-glow' : ''
                          }`}
                          style={{
                            width: inView ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;