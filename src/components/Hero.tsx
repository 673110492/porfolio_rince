import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const scrollToNext = () => {
    document.querySelector('#apropos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container section-padding relative z-10">
        <div className="text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Rince</span>
              <span className="block gradient-text bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                Donfack
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up delay-200">
            <p className="text-xl lg:text-2xl mb-4 text-primary-100 font-light">
              Développeur Full Stack
            </p>
            <p className="text-lg mb-8 text-primary-200 max-w-2xl mx-auto">
              Spécialisé en Spring Boot, Laravel, React & React Native
            </p>
          </div>
          
          <div className="animate-fade-in-up delay-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => document.querySelector('#projets')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Voir mes projets
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary bg-white/10 hover:bg-white/20 text-white border border-white/20"
              >
                Me contacter
              </button>
            </div>
          </div>

          {/* Current Position */}
          <div className="animate-fade-in-up delay-400 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto border border-white/20">
              <p className="text-sm text-primary-200 mb-2">Actuellement chez</p>
              <h3 className="text-xl font-semibold text-white mb-1">DOOPINET LLC</h3>
              <p className="text-primary-200">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToNext}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
        >
          <ChevronDownIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;