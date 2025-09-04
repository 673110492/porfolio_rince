import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  technologies: string[];
  website?: string;
  current?: boolean;
  details?: string[];
}

const Experience: React.FC = () => {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const experiences: ExperienceItem[] = [
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

  const toggleExpanded = (index: number): void => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  return (
    <section id="experience" className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="container max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="translate-y-0 opacity-100">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl sm:mb-6">
              Mon <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Expérience</span>
            </h2>
            <p className="max-w-3xl px-4 mx-auto text-lg leading-relaxed text-gray-600 sm:text-xl">
              Un parcours diversifié alliant développement, formation et leadership technique
            </p>
            <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 sm:mt-6"></div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp: ExperienceItem, index: number) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 sm:p-8 transition-all duration-500 hover:shadow-xl border ${
                  exp.current ? 'ring-2 ring-blue-500 ring-opacity-50 border-blue-200' : 'border-gray-200'
                }`}
              >
                <div className="w-full">
                  <div className="mb-4">
                    <div className="flex flex-col mb-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                          {exp.title}
                          {exp.current && (
                            <span className="inline-flex items-center px-3 py-1 mt-2 ml-0 text-xs font-medium text-green-800 bg-green-100 rounded-full sm:ml-3 sm:mt-0">
                              En cours
                            </span>
                          )}
                        </h3>
                        <p className="mb-3 text-base font-medium text-blue-600 sm:text-lg">{exp.company}</p>
                        <div className="flex flex-col gap-2 text-sm text-gray-500 sm:flex-row sm:flex-wrap sm:gap-4">
                          <span className="flex items-center">
                            <Calendar className="flex-shrink-0 w-4 h-4 mr-1" />
                            <span className="break-words">{exp.period}</span>
                          </span>
                          <span className="flex items-center">
                            <MapPin className="flex-shrink-0 w-4 h-4 mr-1" />
                            <span className="break-words">{exp.location}</span>
                          </span>
                          <span className="px-2 py-1 text-xs bg-gray-100 rounded w-fit">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {exp.description}
                    </p>

                    {exp.details && (
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="flex items-center mb-4 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 sm:text-base"
                        type="button"
                        aria-expanded={expandedExperience === index}
                        aria-controls={`details-${index}`}
                      >
                        {expandedExperience === index ? (
                          <>
                            <ChevronUp className="w-4 h-4 mr-1" />
                            Voir moins
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4 mr-1" />
                            Voir plus
                          </>
                        )}
                      </button>
                    )}

                    {exp.details && expandedExperience === index && (
                      <div 
                        id={`details-${index}`}
                        className="p-4 mb-4 rounded-lg bg-gray-50"
                      >
                        <h4 className="mb-3 text-sm font-medium text-gray-900 sm:text-base">Réalisations clés :</h4>
                        <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside sm:text-base">
                          {exp.details.map((detail: string, detailIndex: number) => (
                            <li key={detailIndex} className="break-words">{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium text-blue-800 break-words bg-blue-100 rounded-full sm:px-3 sm:text-sm"
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
                          className="text-sm font-medium text-blue-600 underline break-all hover:text-blue-700 sm:text-base"
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