import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  MapPinIcon, 
  CalendarIcon, 
  AcademicCapIcon, 
  CheckCircleIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const personalInfo = [
    { 
      icon: MapPinIcon, 
      label: 'Localisation', 
      value: 'Dschang, Cameroun'
    },
    { 
      icon: CalendarIcon, 
      label: 'Âge', 
      value: '24 ans'
    },
    { 
      icon: AcademicCapIcon, 
      label: 'Formation', 
      value: 'Université de Dschang'
    },
    { 
      icon: CheckCircleIcon, 
      label: 'Disponibilité', 
      value: 'Disponible',
      isStatus: true 
    }
  ];

  return (
    <section id="apropos" className="py-16 bg-white md:py-20">
      <div className="container px-4 mx-auto md:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Section Header */}
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              À propos de <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">moi</span>
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
          </div>

          <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            
            {/* Profile Image */}
            <div className="flex justify-center order-1 lg:justify-start lg:order-1">
              <div className="relative">
                <div className="w-64 h-64 p-2 rounded-full md:w-80 md:h-80 bg-gradient-to-br from-blue-600 to-purple-600">
                  <div className="w-full h-full p-1 overflow-hidden bg-white rounded-full">
                    <img 
                      src="/src/pho.png" 
                      alt="Rince Donfack" 
                      className="object-cover w-full h-full transition-transform duration-300 rounded-full hover:scale-105"
                    />
                  </div>
                </div>
                <div className="absolute px-3 py-2 text-xs font-medium text-white bg-green-500 rounded-full shadow-lg -bottom-3 -right-3 md:-bottom-4 md:-right-4 md:px-4 md:py-2 md:text-sm">
                  Full Stack Dev
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="order-2 space-y-6 lg:order-2">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 md:text-2xl">
                Ingénieur des Travaux en Génie Logiciel
              </h3>
              
              <div className="space-y-4 text-base leading-relaxed text-gray-600 md:text-lg">
                <p>
                  Passionné par le développement de <strong className="text-blue-600">solutions web modernes</strong>, 
                  performantes et sécurisées. Je développe des applications web avec Laravel, Spring Boot et React, 
                  et je possède également des notions pratiques en <strong className="text-purple-600">deep learning</strong> 
                  appliqué à des projets innovants.
                </p>
                
                <p>
                  Au fil de mes projets académiques, personnels et professionnels, j'ai acquis une solide 
                  maîtrise du cycle de développement logiciel, du design d'architecture back-end/front-end 
                  jusqu'au déploiement sur des serveurs web.
                </p>
              </div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:gap-6 md:mt-8">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 transition-colors duration-200 rounded-lg bg-gray-50 hover:bg-gray-100">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg">
                      <info.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900">{info.label}</h4>
                      <p className={`text-sm md:text-base ${info.isStatus ? 'text-green-600 font-medium' : 'text-gray-600'} truncate`}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* LinkedIn Button */}
              <div className="pt-4 md:pt-6">
                <a
                  href="https://www.linkedin.com/in/rince-donfack-a5a0062a3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:scale-105"
                >
                  <span>Voir mon LinkedIn</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;