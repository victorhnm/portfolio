import React from 'react';
import { ChevronDown } from 'lucide-react';
import { PROFILE, HERO, SPECIALIZATIONS } from '../../config/portfolio';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <header id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background Aurora Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-aurora-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-aurora-shift"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-aurora-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10 max-w-6xl">
        <div className="space-y-8">
          {/* Badges de Especialização */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {SPECIALIZATIONS.slice(0, 4).map((spec: string, index: number) => (
              <span key={index} className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30 backdrop-blur-sm">
                {spec}
              </span>
            ))}
          </div>
          
          <div className="space-y-6">
            <p className="text-emerald-400 text-xl tracking-wide font-medium">
              {PROFILE.title}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Victor <span className="bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">Melo</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              {PROFILE.headline}
            </p>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-5xl mx-auto">
              {HERO.description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center py-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-10 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 font-semibold text-white text-lg shadow-lg shadow-emerald-900/20 transform hover:scale-105"
            >
              Ver Projetos
            </button>
            <a 
              href="/portfolio/Victor Melo - Currículo - Analista_Dados_BI.pdf" 
              download="Victor_Melo_Curriculo.pdf"
              className="px-10 py-4 rounded-xl border-2 border-emerald-600 hover:bg-emerald-600/10 transition-all duration-300 font-semibold text-white text-lg transform hover:scale-105 text-center"
            >
              Download CV
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-10 py-4 rounded-xl border-2 border-emerald-600 hover:bg-emerald-600/10 transition-all duration-300 font-semibold text-white text-lg transform hover:scale-105"
            >
              Contato
            </button>
          </div>
          
          {/* Mais badges de especialização */}
          <div className="flex flex-wrap justify-center gap-3 py-8">
            {SPECIALIZATIONS.slice(4).map((spec: string, index: number) => (
              <span key={index} className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm font-medium border border-gray-600/30 backdrop-blur-sm">
                {spec}
              </span>
            ))}
          </div>
          
          {/* Indicador de scroll */}
          <div className="flex flex-col items-center pt-12">
            <div 
              onClick={() => scrollToSection('about')}
              className="animate-bounce cursor-pointer text-center"
            >
              <span className="text-emerald-400 text-sm block mb-3 font-medium">Scroll</span>
              <ChevronDown className="text-emerald-400 w-6 h-6 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};