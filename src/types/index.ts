export interface Certificate {
  id: number;
  title: string;
  institution: string;
  date: string;
  category: 'clinical' | 'sports' | 'specialized' | 'certification';
  image: string;
  skills: string[];
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export type FilterCategory = 'all' | 'clinical' | 'sports' | 'specialized' | 'certification';
