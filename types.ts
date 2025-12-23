
export enum DatasetStatus {
  LIVE = 'LIVE',
  COMING_SOON = 'COMING_SOON',
  PLANNED = 'PLANNED'
}

export interface Dataset {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: DatasetStatus;
  icon: string;
  category: 'Language' | 'Vision' | 'Medical' | 'Robotics' | 'Defence';
}

export interface VisionNode {
  id: string;
  label: string;
  status: 'active' | 'development' | 'planned';
  children?: VisionNode[];
}
