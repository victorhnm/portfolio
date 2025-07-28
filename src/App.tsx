import { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ArrowRight, BarChart, Layout, GraduationCap, ChevronDown } from 'lucide-react';
import { TOOLS, PROJECTS, SOLUTIONS, CTA, CONTACT } from './config/portfolio';

// Interfaces para tipagem
interface NavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
}

interface SectionProps {
  scrollToSection: (id: string) => void;
}

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    results: string[];
    technologies: string[];
  }
}

// Componente principal
const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Controle de progresso de scroll
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para scroll suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#101b2d] to-gray-900 text-white">
      {/* Barra de Progresso Fixa */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-800">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navegação Fixa */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-gray-900/80 backdrop-blur-sm py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-lg font-bold text-emerald-400">VM</div>
          <div className="hidden md:flex space-x-8">
            <NavLink onClick={() => scrollToSection('home')}>Início</NavLink>
            <NavLink onClick={() => scrollToSection('projects')}>Projetos</NavLink>
            <NavLink onClick={() => scrollToSection('tools')}>Ferramentas</NavLink>
            <NavLink onClick={() => scrollToSection('solutions')}>Soluções</NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>Contato</NavLink>
          </div>
          <button className="md:hidden">
            <BarChart className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />
      
      {/* Projetos Section (agora antes de Ferramentas) */}
      <ProjectsSection />
      
      {/* Ferramentas Section (era Tecnologias) */}
      <ToolsSection />
      
      {/* Soluções Section */}
      <SolutionsSection />
      
      {/* CTA Section */}
      <CTASection scrollToSection={scrollToSection} />
      
      {/* Footer/Contato Section */}
      <FooterSection />
    </div>
  );
};

// Componente de link de navegação
const NavLink: React.FC<NavLinkProps> = ({ children, onClick }) => (
  <button 
    onClick={onClick}
    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm font-medium"
  >
    {children}
  </button>
);

// Hero Section com efeito Aurora Boreal
const HeroSection: React.FC<SectionProps> = ({ scrollToSection }) => {
  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background com efeito Aurora Boreal */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base background (dark gradient) */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-[#0f172a] to-gray-900"></div>
        
        {/* Aurora Boreal effect */}
        <div className="absolute inset-0 opacity-20">
          {/* Main Aurora rays */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute h-[600px] w-[140%] left-[-20%] top-[5%] 
                           bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent 
                           blur-[60px] transform -rotate-12 aurora-shift"></div>
            <div className="absolute h-[500px] w-[120%] left-[-10%] top-[15%] 
                           bg-gradient-to-r from-transparent via-teal-400/20 to-transparent 
                           blur-[70px] transform -rotate-6 aurora-pulse"></div>
            <div className="absolute h-[400px] w-[150%] left-[-25%] top-[25%] 
                           bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent 
                           blur-[50px] transform rotate-6 aurora-shift-reverse"></div>
            <div className="absolute h-[350px] w-[130%] left-[-15%] top-[20%] 
                           bg-gradient-to-r from-transparent via-blue-400/15 to-transparent 
                           blur-[80px] transform -rotate-12 aurora-pulse-slow"></div>
            <div className="absolute h-[300px] w-[140%] left-[-20%] top-[40%] 
                           bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent 
                           blur-[90px] transform rotate-3 aurora-shift"></div>
            
            {/* Subtle stars effect */}
            <div className="absolute inset-0 opacity-30 mix-blend-screen" 
                 style={{ backgroundImage: 'radial-gradient(2px 2px at 20px 30px, white, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, white, rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, white, rgba(0,0,0,0)), radial-gradient(1px 1px at 160px 120px, white, rgba(0,0,0,0))', 
                          backgroundSize: '200px 200px',
                          backgroundRepeat: 'repeat' }}></div>
          </div>
        </div>
      </div>
      
      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="inline-block px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 mb-6 text-sm font-medium tracking-wide">
            Analista de Dados & Especialista em BI
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Victor </span>
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">Melo</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Convertendo complexidade em clareza através dos dados
          </p>
          
          <p className="text-md md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Desenvolvo soluções personalizadas de Business Intelligence que permitem sua empresa 
            visualizar oportunidades, otimizar processos e acelerar o crescimento baseado em dados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 font-medium text-white shadow-lg shadow-emerald-900/20"
            >
              Ver Projetos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-lg border border-emerald-600 hover:bg-emerald-600/10 transition-all duration-300 font-medium text-white"
            >
              Contato
            </button>
          </div>
          
          {/* Indicador de scroll reposicionado abaixo dos botões */}
          <div className="mt-12 flex flex-col items-center">
            <div 
              onClick={() => scrollToSection('projects')}
              className="animate-bounce cursor-pointer text-center"
            >
              <span className="text-emerald-400 text-sm block mb-2">Scroll</span>
              <ChevronDown className="text-emerald-400 w-6 h-6 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Ferramentas Section (antes era Tecnologias)
const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
            Ferramentas
          </span>
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {TOOLS.map((tool, index) => (
            <div 
              key={tool.name}
              className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 relative p-4 rounded-xl bg-gray-800/50 mb-3 group-hover:bg-gray-800/80 transition-colors">
                <img
                  src={tool.image}
                  alt={tool.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm text-center text-gray-300 group-hover:text-emerald-400 transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projetos Section (agora antes de Ferramentas)
const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
            Projetos em Destaque
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de Card de Projeto
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group">
      {/* Barra colorida no topo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
      
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
          {project.results.slice(0, isExpanded ? project.results.length : 2).map((result: string, index: number) => (
            <div key={index} className="flex items-start gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-500 mt-1 flex-shrink-0">
                <path d="M12 15L8.5359 18.4641L8.5359 18.4641C8.2839 18.7161 7.86826 18.7161 7.61625 18.4641L6 16.8478" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15L17.6569 9.34315L17.6569 9.34315C17.9089 9.09114 17.9089 8.6755 17.6569 8.42349L16.2357 7.00232" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="text-sm text-gray-300">{result}</span>
            </div>
          ))}
          
          {project.results.length > 2 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 mt-2"
            >
              {isExpanded ? 'Ver menos' : 'Ver mais resultados'} 
              <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>
        
        {/* Tecnologias utilizadas */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech: string, index: number) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300 hover:bg-emerald-900/30 hover:text-emerald-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Call to action */}
        <button 
          className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
        >
          <span>Ver detalhes</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

// Soluções Section (incorpora ícones de serviços)
const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
            Soluções
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {SOLUTIONS.map((solution, index) => {
            // Determine o ícone baseado no título
            let icon = null;
            if (solution.title.includes('Visualização')) {
              icon = <BarChart className="w-6 h-6 text-emerald-500" />;
            } else if (solution.title.includes('Assessoria')) {
              icon = <Layout className="w-6 h-6 text-emerald-500" />;
            } else if (solution.title.includes('Capacitação')) {
              icon = <GraduationCap className="w-6 h-6 text-emerald-500" />;
            }
            
            return (
              <div 
                key={index} 
                className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 
                          hover:border-emerald-500/50 hover:translate-y-[-4px] 
                          transition-all duration-300 shadow-lg shadow-black/5"
              >
                {/* Adicionar ícone */}
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                  {icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-white">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection: React.FC<SectionProps> = ({ scrollToSection }) => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
            {CTA.main}
          </span>
        </h2>
        <button 
          onClick={() => scrollToSection('contact')}
          className="px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 
                    hover:from-emerald-500 hover:to-emerald-400 
                    transition-all duration-300 font-medium text-lg 
                    shadow-lg shadow-emerald-900/20"
        >
          {CTA.button}
        </button>
      </div>
    </section>
  );
};

// Footer/Contato Section
const FooterSection: React.FC = () => {
  return (
    <footer id="contact" className="py-24 relative bg-gray-900/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
            {CTA.contact.title}
          </span>
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          {CTA.contact.description}
        </p>
        
        <div className="flex justify-center gap-8">
          <a 
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          <a 
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a 
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
        
        <p className="text-gray-500 mt-16 text-sm">
          © {new Date().getFullYear()} Victor Melo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default App;