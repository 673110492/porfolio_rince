import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CalendarIcon, MapPinIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const experiences = [
    {
      title: "Développeur Full Stack",
      company: "DOOPINET LLC",
      location: "Remote",
      period: "Actuellement",
      type: "CDI",
      description: "Développement d'applications web complètes avec les dernières technologies. Travail sur des projets innovants avec une approche agile.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
      website: "https://web.doopinet.com/?dref=doojobs",
      current: true
    },
    {
      title: "Coordinateur de la cellule informatique",
      company: "International House of Friendships",
      location: "Dschang, Cameroun",
      period: "Mars 2025",
      type: "Mission",
      description: "Réduction de la fracture numérique en zone rurale et autonomisation des femmes et des jeunes à travers l'accès aux outils informatiques.",
      details: [
        "Mise en place d'un Point d'accès communautaire à l'informatique",
        "Formations de base en informatique et réseaux sociaux",
        "Introduction au E-commerce et création de boutiques en ligne",
        "Ateliers de programmation pour les jeunes (HTML, CSS, JavaScript, Python)",
        "Cybersécurité de base et outils bureautiques avancés"
      ],
      technologies: ["WordPress", "HTML/CSS", "JavaScript", "Python", "Photoshop", "Canva"]
    },
    {
      title: "Développeur logiciels",
      company: "INAF",
      location: "Dschang, Cameroun",
      period: "Novembre 2024",
      type: "Contrat",
      description: "Implémentation de la communication inter-microservices avec Spring Boot, architecture RESTful et déploiement d'API Gateway.",
      details: [
        "Communication inter-microservices avec RestTemplate",
        "Gestionnaires d'erreurs globaux via @ControllerAdvice",
        "Service de découverte via Eureka Server",
        "API Gateway avec Spring Cloud Gateway",
        "Circuit breaker avec Resilience4j",
        "Monitoring avec Prometheus et Grafana"
      ],
      technologies: ["Spring Boot", "Microservices", "Eureka", "RabbitMQ", "Docker", "Prometheus"]
    },
    {
      title: "Technicien Formateur en Graphisme",
      company: "VTC-99.9PMTT",
      location: "Dschang, Cameroun",
      period: "Octobre 2024",
      type: "Formation",
      description: "Animation et encadrement de sessions de formation en graphisme pour des groupes de 25 à 30 apprenants.",
      details: [
        "Conception de programmes pédagogiques adaptés",
        "Maîtrise des outils Adobe Creative Suite",
        "Formation UI/UX avec Figma",
        "Workflow graphique et gestion des couleurs",
        "Suivi individualisé des apprenants"
      ],
      technologies: ["Adobe Creative Suite", "Figma", "UI/UX", "Design Thinking"]
    },
    {
      title: "Enseignant d'informatique",
      company: "Lycée de Fontsa-Touala",
      location: "Fokoue, Cameroun",
      period: "Sept. 2023 - Présent",
      type: "Enseignement",
      description: "Développement et mise en œuvre des programmes de cours d'informatique adaptés aux besoins des étudiants.",
      details: [
        "Évaluation et amélioration des méthodes d'enseignement",
        "Intégration des nouvelles technologies dans l'enseignement",
        "Formation des étudiants aux bases de la programmation",
        "Suivi pédagogique et évaluation des acquis"
      ],
      technologies: ["Pédagogie", "Informatique de base", "Programmation", "Bureautique"]
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container section-padding">
        <div ref={ref} className={`transition-all duration-800 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mon <span className="gradient-text">Expérience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un parcours diversifié alliant développement, formation et leadership technique
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`card p-8 transition-all duration-500 hover:shadow-xl ${
                  exp.current ? 'ring-2 ring-primary-500 ring-opacity-50' : ''
                } ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {exp.title}
                          {exp.current && (
                            <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              En cours
                            </span>
                          )}
                        </h3>
                        <div className="space-y-1 mb-3">
                          <p className="text-primary-600 font-medium text-lg">{exp.company}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              {exp.period}
                            </span>
                            <span className="flex items-center">
                              <MapPinIcon className="h-4 w-4 mr-1" />
                              {exp.location}
                            </span>
                            <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.details && (
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="flex items-center text-primary-600 hover:text-primary-700 font-medium mb-4 transition-colors"
                      >
                        {expandedExperience === index ? (
                          <>
                            <ChevronUpIcon className="h-4 w-4 mr-1" />
                            Voir moins
                          </>
                        ) : (
                          <>
                            <ChevronDownIcon className="h-4 w-4 mr-1" />
                            Voir plus
                          </>
                        )}
                      </button>
                    )}

                    {exp.details && expandedExperience === index && (
                      <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">Réalisations clés :</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          {exp.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {exp.website && (
                      <div className="mt-4">
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 font-medium underline"
                        >
                          Voir l'entreprise
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;