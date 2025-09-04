import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, CodeBracketIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);
  
  const technologies = [
    'Spring Boot',
    'Laravel', 
    'React',
    'React Native',
    'Node.js',
    'PostgreSQL'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Animation cyclique des technologies
    const techInterval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);

    return () => clearInterval(techInterval);
  }, []);

  const scrollToNext = () => {
    document.querySelector('#apropos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projets')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Gradient Background avec animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute rounded-full top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 mix-blend-multiply filter blur-3xl animate-float-delayed"></div>
        <div className="absolute rounded-full top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Code particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute font-mono text-sm text-blue-300/20 animate-drift"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            >
              {['<>', '{}', '[]', '()', '/>', '<?', '&&', '||'][Math.floor(Math.random() * 8)]}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container relative z-10 px-6 mx-auto lg:px-8">
        <div className="text-center text-white">
          {/* Name and Title */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8">
              <h1 className="mb-4 text-6xl font-bold leading-none lg:text-8xl">
                <span className="block text-white drop-shadow-2xl">Rince</span>
                <span className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text animate-gradient-x">
                  Donfack
                </span>
              </h1>
            </div>
          </div>

          {/* Dynamic Tech Stack */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <CodeBracketIcon className="w-8 h-8 text-blue-400" />
              <p className="text-2xl font-light lg:text-3xl text-slate-200">
                Développeur Full Stack
              </p>
              <SparklesIcon className="w-8 h-8 text-purple-400 animate-pulse" />
            </div>
            
            <div className="mb-8">
              <p className="mb-4 text-lg text-slate-300">Spécialisé en</p>
              <div className="relative flex items-center justify-center h-12">
                <div className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  {technologies[currentTech]}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col justify-center gap-4 mb-16 sm:flex-row">
              <button
                onClick={scrollToProjects}
                className="relative px-8 py-4 font-semibold text-white transition-all duration-300 transform rounded-full shadow-2xl group bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-blue-500/25 hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">Voir mes projets</span>
                <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-r from-blue-700 to-purple-700 group-hover:opacity-100"></div>
              </button>
              
              <button
                onClick={scrollToContact}
                className="relative px-8 py-4 font-semibold text-white transition-all duration-300 transform border rounded-full group bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">Me contacter</span>
              </button>
            </div>
          </div>

          {/* Current Position Card */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative max-w-md mx-auto mb-16">
              <div className="absolute opacity-75 -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur"></div>
              <div className="relative p-8 border bg-slate-900/90 backdrop-blur-xl rounded-2xl border-white/10">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-3 h-3 mr-3 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-sm font-medium text-slate-400">ACTUELLEMENT CHEZ</p>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-transparent text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  DOOPINET LLC
                </h3>
                <p className="font-medium text-slate-300">Full Stack Developer</p>
                <div className="flex justify-center mt-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 ${i < 4 ? 'animate-pulse' : 'opacity-50'}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col items-center">
          <p className="mb-3 text-sm font-medium tracking-wide text-white/60">DÉCOUVRIR PLUS</p>
          <button
            onClick={scrollToNext}
            className="p-4 transition-all duration-300 border rounded-full group bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:scale-110 animate-bounce hover:animate-none"
          >
            <ChevronDownIcon className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-blue-400" />
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;