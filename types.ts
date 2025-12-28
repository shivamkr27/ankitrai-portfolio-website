export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  targetAudience: string;
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
  tags?: string[];
}

export interface Experience {
  role: string;
  organization: string;
  period?: string;
  description: string;
}

export interface MediaFeature {
  outlet: string;
  type: 'TV' | 'Radio' | 'Print' | 'Award';
  description: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}
