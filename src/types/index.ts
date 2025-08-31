export type Category = 'devops' | 'ai' | 'cloud' | 'web' | 'advanced';

export interface Project {
  id: string;
  title: string;
  category: Category[];
  summary: string;
  stack: string[];
  metrics?: { label: string; value: string }[];
  year?: number;
  links?: { type: 'repo' | 'demo' | 'case'; url: string }[];
  featured?: boolean;
  cover?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  problem: string;
  approach: string;
  architecture: string;
  outcome: string;
  links?: { label: string; url: string }[];
  year?: number;
}

export interface Tutorial {
  slug: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  minutes: number;
  tags: string[];
  summary: string;
}

export interface Badge {
  id: string;
  title: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  category: 'project' | 'award' | 'skill';
  description: string;
  earnedAt?: string;
}

export interface LogEntry {
  id: string;
  ts: string;
  level: 'info' | 'success' | 'warn' | 'error';
  icon?: string;
  message: string;
  link?: string;
}