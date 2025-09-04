import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container section-padding">
        <div ref={ref} className={`transition-all duration-800 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              À propos de <span className="gradient-text">moi</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 p-2">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-6xl font-bold text-primary-600">
                    RD
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Full Stack Dev
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Ingénieur des Travaux en Génie Logiciel
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                Passionné par le développement de solutions web modernes, performantes et sécurisées. 
                Je développe des applications web avec Laravel, Spring Boot et React, et je possède 
                également des notions pratiques en deep learning appliqué à des projets innovants.
              </p>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                Au fil de mes projets académiques, personnels et professionnels, j'ai acquis une solide 
                maîtrise du cycle de développement logiciel, du design d'architecture back-end/front-end 
                jusqu'au déploiement sur des serveurs web.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Localisation</h4>
                  <p className="text-gray-600">Dschang, Cameroun</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Âge</h4>
                  <p className="text-gray-600">24 ans</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Formation</h4>
                  <p className="text-gray-600">Université de Dschang</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Disponibilité</h4>
                  <p className="text-green-600 font-medium">Disponible</p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://linkedin.com/in/rince-donfack-a5a0062a3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Voir mon LinkedIn
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