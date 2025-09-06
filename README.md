# Portfolio Victor Melo - Engenheiro de Dados

Portfolio pessoal moderno e responsivo construído com React, TypeScript e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- **React 18** - Framework frontend
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool e dev server
- **Lucide React** - Ícones SVG

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── cards/           # Cards (ProjectCard, StatCard, etc.)
│   ├── sections/        # Seções da página
│   └── ui/              # Componentes de interface
├── config/              # Configurações e dados
│   └── portfolio.ts     # Dados do portfólio
├── hooks/               # Custom hooks
├── types/               # Definições TypeScript
├── utils/               # Funções utilitárias
└── App.tsx              # Componente principal
```

## 🛠️ Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Animações suaves e efeitos visuais
- ✅ Seções dinâmicas (oculta quando vazia)
- ✅ Download direto de CV
- ✅ Navegação com scroll suave
- ✅ Tipagem TypeScript completa
- ✅ Componentização escalável

## 📊 Seções do Portfólio

1. **Hero** - Apresentação principal
2. **Sobre** - Experiência e estatísticas
3. **Projetos** - Cases de sucesso
4. **Ferramentas** - Stack tecnológico
5. **Soluções** - Serviços oferecidos
6. **Contato** - Informações de contato

## 🚀 Como Executar

### Desenvolvimento
```bash
npm install
npm run dev
```

### Build para Produção
```bash
npm run build
npm run preview
```

### Deploy GitHub Pages
```bash
npm run build
# Arquivos gerados em /dist/
```

## ⚙️ Configuração

### Dados do Portfólio
Edite `src/config/portfolio.ts` para personalizar:
- Informações pessoais
- Projetos e experiências
- Ferramentas e habilidades
- Dados de contato

### Imagens
Adicione imagens em `public/images/tools/` para ícones de ferramentas.

## 📱 Responsividade

- **Mobile First** - Design otimizado para dispositivos móveis
- **Breakpoints Tailwind** - `sm:`, `md:`, `lg:`, `xl:`
- **Navegação adaptativa** - Menu colapsível em mobile

## 🎨 Design System

### Cores
- **Primary**: Emerald (verde)
- **Secondary**: Blue/Teal
- **Background**: Gray-900/800
- **Text**: White/Gray-300

### Animações
- **Aurora Effects** - Efeitos de fundo animados
- **Hover States** - Transições suaves
- **Scroll Progress** - Barra de progresso fixa

## 🔧 Manutenção

### Adicionar Novo Projeto
1. Edite `PROJECTS` array em `portfolio.ts`
2. Inclua: título, descrição, resultados, tecnologias, categoria

### Atualizar Ferramentas
1. Adicione ícone SVG em `public/images/tools/`
2. Configure no array `TOOLS` em `portfolio.ts`

### Modificar Seções
1. Componentes em `src/components/sections/`
2. Dados em `src/config/portfolio.ts`
3. Tipos em `src/types/portfolio.ts`

## 🚀 Deploy

### GitHub Pages
1. Configure `base: '/portfolio/'` no `vite.config.ts`
2. Execute `npm run build`
3. Faça push da pasta `dist/` para branch `gh-pages`

### Outras Plataformas
- **Vercel**: Conecte repositório
- **Netlify**: Deploy da pasta `dist/`
- **GitHub Actions**: Automatize com workflow

## 📈 Performance

- **Code Splitting** - Carregamento otimizado
- **Tree Shaking** - Remoção de código não utilizado
- **Image Optimization** - Formatos SVG
- **Lazy Loading** - Componentes sob demanda

---

**Desenvolvido com ❤️ por Victor Melo**