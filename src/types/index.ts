export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'info-card' | 'list';
}

export interface CampusInfo {
  id: string;
  category: 'schedule' | 'facility' | 'dining' | 'library' | 'admin';
  title: string;
  content: string;
  details?: Record<string, any>;
  keywords: string[];
}

export interface QuickAction {
  id: string;
  label: string;
  query: string;
  icon: string;
}