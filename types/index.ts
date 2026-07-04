// ─── Portfolio Data Types ────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  techStack: string[];
  github?: string;
  liveDemo?: string;
  featured: boolean;
  category: string;
  caseStudy?: CaseStudy;
}

export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  metrics: { label: string; value: string }[];
  futureImprovements: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: 'work' | 'freelance' | 'internship';
}

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 1-5
  color: string;
}

export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'AI'
  | 'DevOps'
  | 'Cloud'
  | 'Languages'
  | 'Tools';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  number: string;
}

export interface CommandAction {
  id: string;
  label: string;
  description: string;
  icon: string;
  action: () => void;
  category: 'navigation' | 'action' | 'social';
  shortcut?: string;
}

export interface StatCounter {
  label: string;
  value: number;
  suffix: string;
}
