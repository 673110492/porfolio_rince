import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "DjinPay",
      description: "Système complet de cartes prépayées avec gestion des transactions, recharges et paiements sécurisés.",
      image: "https://images.pexels.com/photos/5980856/pexels-photo-5980856.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Spring Boot", "React", "MySQL", "REST API", "Spring Security"],
      link: "https://djin-pay.com",
      category: "Fintech",
      featured: true
    },
    {
      title: "La Maison du Village",
      description: "Site institutionnel moderne présentant les services avec design responsive et interface intuitive.",
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
      link: "https://lamaisonduvillage.org/accueil",
      category: "Web Development"
    },
    {
      title: "Plant Doctor",
      description: "Application de détection des maladies des plantes utilisant l'intelligence artificielle et la vision par ordinateur.",
      image: "https://images.pexels.com/photos/1459520/pexels-photo-1459520.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TensorFlow", "Computer Vision", "React", "Flask"],
      link: "https://plantedoctor.lamaisonduvillage.org/",
      category: "AI/ML",
      featured: true
    },
    {
      title: "E-commerce Traditionnel",
      description: "Plateforme de vente en ligne d'objets traditionnels et articles locaux avec système de paiement intégré.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Laravel", "React", "Stripe", "PayPal", "MySQL"],
      category: "E-commerce"
    },
    {
      title: "Gestion des Actes d'État Civil",
      description: "Application complète de gestion des actes d'état civil développée lors de mon stage chez UNI2GROW CAMEROUN.",
      image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "TCPDF"],
      category: "Government"
    },
    {
      title: "Portfolio Personnel",
      description: "Portfolio moderne et responsive développé avec React et Tailwind CSS pour présenter mes compétences et projets.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Portfolio"
    }
  ];

  const categories = ["Tous", "Fintech", "AI/ML", "Web Development", "E-commerce", "Government", "Portfolio"];
  const [activeCategory, setActiveCategory] = React.useState("Tous");

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="container section-padding">
        <div ref={ref} className={`transition-all duration-800 ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mes <span className="gradient-text">Projets</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des solutions innovantes développées avec passion et expertise technique
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`card overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                } ${inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                      >
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                        Voir le projet
                      </a>
                    )}
                    <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200">
                      <CodeBracketIcon className="h-4 w-4" />
                      Détails
                    </button>
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

export default Projects;