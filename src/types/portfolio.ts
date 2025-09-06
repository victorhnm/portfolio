// Tipos base para o portfólio
export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}

export interface Tool {
  name: string;
  image: string;
  alt: string;
  category: string;
  description: string;
}

export interface AdditionalSkill {
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  results: string[];
  technologies: string[];
  category: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export interface Solution {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

// Interfaces para o perfil principal
export interface Profile {
  name: string;
  title: string;
  headline: string;
  focus: string;
}

export interface Hero {
  greeting: string;
  highlight: string;
  description: string;
}

export interface About {
  title: string;
  description: string;
  stats: Stat[];
  experience: Experience[];
}

export interface CTA {
  main: string;
  button: string;
  contact: {
    title: string;
    description: string;
  };
}