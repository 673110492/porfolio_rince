import React from 'react';

const Projects = () => {
  // Icônes SVG inline
  const ArrowTopRightIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );

  const CodeBracketIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );

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
    <section id="projets" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="translate-y-0 opacity-100">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl sm:mb-6">
              Mes <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Projets</span>
            </h2>
            <p className="max-w-3xl px-4 mx-auto text-lg leading-relaxed text-gray-600 sm:text-xl">
              Des solutions innovantes développées avec passion et expertise technique
            </p>
            <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 sm:mt-6"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 px-4 mb-8 sm:gap-3 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 sm:px-6 py-2 rounded-full font-medium transition-all duration-200 text-sm sm:text-base ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                  project.featured ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 transition-transform duration-300 sm:h-56 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE2NVYxMzVIMTc1VjEyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+Tm8gSW1hZ2U8L3A+Cjwvc3ZnPgo=';
                    }}
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded-full sm:px-3">
                      {project.category}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="px-2 py-1 text-xs font-medium text-white bg-purple-500 rounded-full sm:px-3">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors sm:text-xl sm:mb-3 group-hover:text-blue-600">
                    {project.title}
                  </h3>
                  
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs text-gray-700 break-words bg-gray-100 rounded-full sm:px-3 sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 sm:text-base"
                      >
                        <ArrowTopRightIcon />
                        Voir le projet
                      </a>
                    )}
                    <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 rounded-lg hover:bg-gray-200 sm:text-base">
                      <CodeBracketIcon />
                      Détails
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-500">Aucun projet trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;