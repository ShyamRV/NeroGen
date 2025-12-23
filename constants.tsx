
import { 
  Database, 
  Languages, 
  Eye, 
  Zap, 
  Bot,
  Microscope,
  Dna,
  ShieldAlert,
  Atom,
  Binary
} from 'lucide-react';
import { Dataset, DatasetStatus } from './types';

export interface Banner {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'ACTIVE' | 'DEVELOPMENT' | 'LOCKED';
  accent: string;
  visualType: 'DATA' | 'LANGUAGE' | 'VISION' | 'MULTIMODAL' | 'ROBOTICS';
  metadata: string[];
  bgImage: string;
}

// Institutional Image Assets
const IMAGE_HERO = "https://lh3.googleusercontent.com/d/1op7lRjntBOvoJawbXzGum5ZYOAxVuuTX";
const IMAGE_NEURAL = "https://lh3.googleusercontent.com/d/10AeBvWqjAWDKkk2qn_Tubzu8apViieH_";

// New Assigned Assets
export const ASSETS = {
  RESEARCH: "https://lh3.googleusercontent.com/d/14KmQvAe46R8tZOrjPR01kJvBzcRqBcUd",
  DEFENCE: "https://lh3.googleusercontent.com/d/1Z87uAPVUReQayCvUfLmcdwC6Xv0vDRoB",
  ROBOTICS: "https://lh3.googleusercontent.com/d/1BnH4yg5iYS0VoQNNxey_tkrSjq6j2qsp",
  BIO_AI: "https://lh3.googleusercontent.com/d/1ItPHqTj2V3Ker4qhAGlCyPsZ1ElUVIGe"
};

export const BANNERS: Banner[] = [
  {
    id: 'INFRA-01',
    tag: 'ACTIVE / PRODUCTION',
    title: 'Open Datasets',
    subtitle: 'Language • Vision • Human-Robot Interaction',
    description: 'The foundation of intelligence. Open data as public infrastructure for the global research community.',
    status: 'ACTIVE',
    accent: '#22d3ee',
    visualType: 'DATA',
    metadata: ['LOAD_AVG: 0.22', 'REGION: BHARAT-SOUTH', 'STREAMS: 1024'],
    bgImage: IMAGE_HERO
  },
  {
    id: 'LLM-02',
    tag: 'ACTIVE DEVELOPMENT',
    title: 'Language Models',
    subtitle: 'Bilingual LLMs • Semantic Graphs',
    description: 'Language as intelligence. Constructing high-reasoning transformer architectures for Indic linguistic logic.',
    status: 'DEVELOPMENT',
    accent: '#8b5cf6',
    visualType: 'LANGUAGE',
    metadata: ['TOKEN_RATE: ENCRYPTED', 'PHASE: ALIGNMENT', 'L-STABLE: FALSE'],
    bgImage: IMAGE_NEURAL
  }
];

export const DATASETS: Dataset[] = [
  {
    id: 'hindi-synthetic-01',
    title: 'Indic-Synth Hindi',
    subtitle: 'Linguistics / Project 01',
    description: 'A massive high-fidelity synthetic Hindi dataset curated for LLM training and cross-lingual alignment.',
    status: DatasetStatus.LIVE,
    icon: 'languages',
    category: 'Language'
  } as any,
  {
    id: 'image-net-bharat',
    title: 'Bharat Vision V1',
    subtitle: 'Computer Vision / Industrial',
    description: 'Region-specific object detection and depth mapping data for Indian urban environments.',
    status: DatasetStatus.LIVE,
    icon: 'eye',
    category: 'Vision'
  } as any,
  {
    id: 'hri-gesture-01',
    title: 'HRI Gesture Stack',
    subtitle: 'Human-Robot Interaction',
    description: 'Synchronized gesture and speech data for training intuitive robot response systems.',
    status: DatasetStatus.COMING_SOON,
    icon: 'bot',
    category: 'Robotics'
  } as any
];

export const SERVICES = [
  {
    id: 'defence-ai',
    title: 'Defence AI',
    tagline: 'Strategic Infrastructure',
    description: 'Secure, air-gapped intelligence systems for national security and situational awareness.',
    icon: ShieldAlert,
    color: 'accent-violet',
    bgImage: ASSETS.DEFENCE
  },
  {
    id: 'robotics-automation',
    title: 'Robotics & Automation',
    tagline: 'Physical Intelligence',
    description: 'Turnkey industrial AI stacks for high-precision manufacturing and autonomous logistics.',
    icon: Bot,
    color: 'accent-cyan',
    bgImage: ASSETS.ROBOTICS
  },
  {
    id: 'bio-ai',
    title: 'Bio-AI Systems',
    tagline: 'Civilization-Scale Health',
    description: 'Next-generation genomic modeling and protein folding infrastructure for sovereign medical research.',
    icon: Dna,
    color: 'accent-emerald',
    bgImage: ASSETS.BIO_AI
  }
];

export const RESEARCH_AREAS = [
  {
    title: 'Neural Dynamics',
    problem: 'Sovereign Alignment',
    description: 'Researching novel loss functions that prioritize Indic cultural logic and safety over standard benchmarks.',
    icon: Atom
  },
  {
    title: 'Embodied Logic',
    problem: 'Real-to-Sim Gap',
    description: 'Building high-fidelity simulation environments that mirror the complex noise of the physical world.',
    icon: Microscope
  },
  {
    title: 'Synthetic Privacy',
    problem: 'Zero-Knowledge Data',
    description: 'Generating research-grade datasets that provide utility without ever exposing PII.',
    icon: Database
  }
];

// Added MANIFESTO_POINTS export to fix error in components/Manifesto.tsx
export const MANIFESTO_POINTS = [
  {
    title: 'Sovereign Intelligence',
    subtitle: 'Every nation must own its foundation models, trained on its own cultural logic and linguistic diversity.'
  },
  {
    title: 'Public Utility',
    subtitle: 'Data and compute foundations should be treated as essential utilities, open to the global research community.'
  },
  {
    title: 'Radical Privacy',
    subtitle: 'Prioritizing synthetic techniques that provide high-fidelity training signals without ever exposing PII.'
  },
  {
    title: 'Physical Convergence',
    subtitle: 'Bridge-building between digital reasoning and robotic actuation to solve real-world industrial challenges.'
  }
];
