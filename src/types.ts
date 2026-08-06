export interface WorkProject {
  id: string;
  title: string;
  category: string;
  tools: string;
  image: string;
  type: 'video' | 'design' | 'motion';
  description?: string;
}

export interface ClientStory {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarBg?: string;
}

export interface StoreItem {
  id: string;
  title: string;
  price: string;
  priceNum: number;
  category: string;
  image: string;
  badge?: string;
  downloads?: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
}

export interface ModalState {
  isOpen: boolean;
  type: 'project' | 'work' | 'recognition' | 'about' | 'services' | 'store' | 'testimonials' | 'contact' | null;
}
