import React, { useState } from 'react';
import { CheckCircle, ChevronDown, ArrowRight } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group">
      {/* Barra colorida no topo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
      
      {/* Badge da categoria */}
      <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-full">
        {project.category}
      </div>
      
      {/* Conteúdo principal */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-4 text-sm">
          {project.description}
        </p>
        
        {/* Resultados */}
        <div className="space-y-2 mb-6">
          {project.results.slice(0, isExpanded ? project.results.length : 3).map((result: string, index: number) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-300">{result}</span>
            </div>
          ))}
          
          {project.results.length > 3 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 mt-2"
            >
              {isExpanded ? 'Ver menos' : `Ver mais ${project.results.length - 3} resultados`} 
              <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>
        
        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, index: number) => (
            <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Link ver detalhes */}
        <button className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium">
          Ver detalhes <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};