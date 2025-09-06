import { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, MessageCircle, BarChart, Layout, GraduationCap, ChevronDown, Award, Star, CheckCircle, ArrowRight as ArrowRightIcon, Code, Database, Cloud } from 'lucide-react';
import { TOOLS, PROJECTS, SOLUTIONS, CTA, CONTACT, ABOUT, CERTIFICATIONS, TESTIMONIALS, PROCESS, ADDITIONAL_SKILLS, SPECIALIZATIONS } from './config/portfolio';

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
    category: string;
  }
}

interface StatCardProps {
  stat: {
    number: string;
    label: string;
  }
}

interface TestimonialCardProps {
  testimonial: {
    text: string;
    author: string;
    role: string;
    company: string;
    rating: number;
  }
}

interface CertificationCardProps {
  certification: {
    name: string;
    issuer: string;
    year: string;
    credentialId: string;
  }
}

interface ProcessStepProps {
  process: {
    step: string;
    title: string;
    description: string;
    details: string[];
  }
  index: number;
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
      <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
                VM
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <NavLink onClick={() => scrollToSection('hero')}>Início</NavLink>
              <NavLink onClick={() => scrollToSection('about')}>Sobre</NavLink>
              <NavLink onClick={() => scrollToSection('projects')}>Projetos</NavLink>
              <NavLink onClick={() => scrollToSection('tools')}>Ferramentas</NavLink>
              <NavLink onClick={() => scrollToSection('solutions')}>Soluções</NavLink>
              <NavLink onClick={() => scrollToSection('contact')}>Contato</NavLink>
              <a 
                href="/portfolio/Victor Melo - Currículo - Analista_Dados_BI.pdf" 
                download="Victor_Melo_Curriculo.pdf"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium"
              >
                Currículo
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />
      
      {/* Sobre Mim Section */}
      <AboutSection />
      
      {/* Projetos Section */}
      <ProjectsSection />
      
      {/* Ferramentas Section */}
      <ToolsSection />
      
      {/* Certificações Section - Oculta quando vazia */}
      {CERTIFICATIONS.length > 0 && <CertificationsSection />}
      
      {/* Processo Section */}
      <ProcessSection />
      
      {/* Depoimentos Section - Oculta quando vazia */}
      {TESTIMONIALS.length > 0 && <TestimonialsSection />}
      
      {/* Soluções Section */}
      <SolutionsSection />
      
      {/* CTA Section */}
      <CTASection scrollToSection={scrollToSection} />
      
      {/* Contato Section */}
      <ContactSection />
    </div>
  );
};

// Componente de Link de Navegação
const NavLink: React.FC<NavLinkProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium"
    >
      {children}
    </button>
  );
};

// Hero Section
const HeroSection: React.FC<SectionProps> = ({ scrollToSection }) => {
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
              Engenheiro de Dados & Especialista em BI
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Victor <span className="bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">Melo</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Construindo pipelines robustos e soluções de dados escaláveis
            </p>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-5xl mx-auto">
              Especialista em engenharia de dados e BI, com experiência em bases de +1 bilhão de registros usando Microsoft Fabric, SQL Server e ferramentas modernas de data engineering.
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

// Sobre Mim Section
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
              {ABOUT.title}
            </span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Texto About */}
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {ABOUT.description}
              </p>
              
              {/* Experiência */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-emerald-400 mb-6">Experiência Profissional</h3>
                {ABOUT.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-emerald-500 pl-6 relative">
                    <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-2 top-2"></div>
                    <div className="text-emerald-400 text-sm font-medium">{exp.year}</div>
                    <div className="text-xl font-semibold text-white">{exp.role}</div>
                    <div className="text-gray-400 mb-2">{exp.company}</div>
                    <div className="text-gray-300 text-sm">{exp.description}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Estatísticas */}
            <div className="grid grid-cols-2 gap-6">
              {ABOUT.stats.map((stat, index) => (
                <StatCard key={index} stat={stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Card de Estatística
const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 text-center hover:border-emerald-500/50 transition-all duration-300">
      <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.number}</div>
      <div className="text-gray-300 text-sm">{stat.label}</div>
    </div>
  );
};

// Projetos Section
const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
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
          Ver detalhes <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Ferramentas Section
const ToolsSection: React.FC = () => {
  const categories = [
    { name: 'Visualização', icon: BarChart, tools: TOOLS.filter(t => t.category === 'Visualização').concat(ADDITIONAL_SKILLS.filter(s => s.category === 'Visualização')) },
    { name: 'Análise', icon: Code, tools: TOOLS.filter(t => t.category === 'Análise').concat(ADDITIONAL_SKILLS.filter(s => s.category === 'Análise')) },
    { name: 'Banco de Dados', icon: Database, tools: TOOLS.filter(t => t.category === 'Banco de Dados').concat(ADDITIONAL_SKILLS.filter(s => s.category === 'Banco de Dados')) },
    { name: 'Cloud', icon: Cloud, tools: TOOLS.filter(t => t.category === 'Cloud').concat(ADDITIONAL_SKILLS.filter(s => s.category === 'Cloud')) },
    { name: 'ETL', icon: BarChart, tools: TOOLS.filter(t => t.category === 'ETL').concat(ADDITIONAL_SKILLS.filter(s => s.category === 'ETL')) },
    { name: 'Outras', icon: Code, tools: TOOLS.filter(t => !['Visualização', 'Análise', 'Banco de Dados', 'Cloud', 'ETL'].includes(t.category)).concat(ADDITIONAL_SKILLS.filter(s => !['Visualização', 'Análise', 'Banco de Dados', 'Cloud', 'ETL'].includes(s.category))) }
  ];

  return (
    <section id="tools" className="py-32 relative bg-gray-900/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
            Ferramentas & Tecnologias
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Domínio completo do ecossistema de Business Intelligence e Data Analytics, desde coleta até visualização
        </p>
        
        {/* Ferramentas principais com imagens */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-emerald-400 mb-8 text-center">Stack Principal</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {TOOLS.map((tool: any, index: number) => (
              <div 
                key={tool.name}
                className="flex flex-col items-center group hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 relative p-4 rounded-xl bg-gray-800/50 mb-4 group-hover:bg-gray-800/80 transition-colors border border-gray-700 group-hover:border-emerald-500/50">
                  <img
                    src={tool.image}
                    alt={tool.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-center text-gray-300 group-hover:text-emerald-400 transition-colors mb-1">
                  {tool.name}
                </span>
                <span className="text-xs text-emerald-500 mb-1">{tool.category}</span>
                <span className="text-xs text-gray-500 text-center">{tool.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ferramentas por categoria */}
        <div className="space-y-12">
          {categories.filter(cat => cat.tools.length > 0).map((category: any) => (
            <div key={category.name} className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <category.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.tools.map((tool: any) => (
                  <div 
                    key={tool.name}
                    className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-all duration-300 border border-gray-600/30 hover:border-emerald-500/50"
                  >
                    <div className="font-medium text-white mb-1">{tool.name}</div>
                    <div className="text-xs text-gray-400">{tool.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Estatísticas de proficiência */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">22+</div>
            <div className="text-gray-300">Tecnologias Dominadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">6</div>
            <div className="text-gray-300">Certificações Técnicas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-gray-300">Projetos Concluídos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Certificações Section
const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
            Certificações
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationCard key={index} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Card de Certificação
const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-emerald-500/20 rounded-lg">
          <Award className="w-6 h-6 text-emerald-400" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-white mb-2">{certification.name}</h3>
          <p className="text-gray-400 text-sm mb-1">{certification.issuer}</p>
          <p className="text-emerald-400 text-sm">{certification.year}</p>
        </div>
      </div>
    </div>
  );
};

// Processo Section
const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 relative bg-gray-900/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
            Meu Processo
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS.map((process, index) => (
            <ProcessStep key={index} process={process} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Step do Processo
const ProcessStep: React.FC<ProcessStepProps> = ({ process, index }) => {
  return (
    <div className="relative">
      {/* Linha conectora */}
      {index < 3 && (
        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-emerald-500 to-transparent transform translate-x-4"></div>
      )}
      
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
            {process.step}
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{process.description}</p>
        </div>
        
        <ul className="space-y-2">
          {process.details.map((detail, detailIndex) => (
            <li key={detailIndex} className="flex items-center gap-2 text-sm text-gray-400">
              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Depoimentos Section
const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
            O que dizem sobre meu trabalho
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Card de Depoimento
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>
      
      {/* Texto */}
      <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
      
      {/* Autor */}
      <div className="border-t border-gray-700 pt-4">
        <div className="font-semibold text-white">{testimonial.author}</div>
        <div className="text-emerald-400 text-sm">{testimonial.role}</div>
        <div className="text-gray-500 text-sm">{testimonial.company}</div>
      </div>
    </div>
  );
};

// Soluções Section
const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-24 relative bg-gray-900/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
            Soluções
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((solution, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="mb-6">
                {solution.icon === 'BarChart' && <BarChart className="w-12 h-12 text-emerald-400" />}
                {solution.icon === 'Layout' && <Layout className="w-12 h-12 text-emerald-400" />}
                {solution.icon === 'GraduationCap' && <GraduationCap className="w-12 h-12 text-emerald-400" />}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {solution.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {solution.description}
              </p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
          className="px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 font-medium text-white text-lg shadow-lg shadow-emerald-900/20"
        >
          {CTA.button}
        </button>
      </div>
    </section>
  );
};

// Contato Section
const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative bg-gray-900/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
            {CTA.contact.title}
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          {CTA.contact.description}
        </p>
        
        <div className="flex justify-center space-x-8">
          <a 
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
            Email
          </a>
          <a 
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp
          </a>
          <a 
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
            LinkedIn
          </a>
          <a 
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors"
          >
            <Github className="w-6 h-6" />
            GitHub
          </a>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-sm">© 2025 Victor Melo. Todos os direitos reservados.</p>
        </div>
      </div>
    </section>
  );
};

export default App;