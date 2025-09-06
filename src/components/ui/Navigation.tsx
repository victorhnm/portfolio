import React from 'react';

interface NavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
}

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

interface NavigationProps {
  scrollToSection: (id: string) => void;
  scrollProgress: number;
}

export const Navigation: React.FC<NavigationProps> = ({ scrollToSection, scrollProgress }) => {
  return (
    <>
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
    </>
  );
};