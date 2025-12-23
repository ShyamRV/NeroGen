
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

const IMAGE_HERO = "https://lh3.googleusercontent.com/d/1op7lRjntBOvoJawbXzGum5ZYOAxVuuTX";
const IMAGE_NEURAL = "https://lh3.googleusercontent.com/d/10AeBvWqjAWDKkk2qn_Tubzu8apViieH_";

export const ASSETS = {
  RESEARCH: "https://lh3.googleusercontent.com/d/14KmQvAe46R8tZOrjPR01kJvBzcRqBcUd",
  DEFENCE: "https://lh3.googleusercontent.com/d/1Z87uAPVUReQayCvUfLmcdwC6Xv0vDRoB",
  ROBOTICS: "https://lh3.googleusercontent.com/d/1BnH4yg5iYS0VoQNNxey_tkrSjq6j2qsp",
  BIO_AI: "https://lh3.googleusercontent.com/d/1ItPHqTj2V3Ker4qhAGlCyPsZ1ElUVIGe"
};

export const BANNERS: Banner[] = [
  {
    id: 'INFRA-CORE-01',
    tag: 'PRODUCTION // STABLE',
    title: 'Sovereign Systems',
    subtitle: 'Institutional Foundations for Research Communities',
    description: 'We develop high-fidelity intelligence systems that serve as the foundational architecture for civilization-scale logic and reasoning.',
    status: 'ACTIVE',
    accent: '#00e5ff',
    visualType: 'DATA',
    metadata: ['LATENCY: 4.2ms', 'NODES: 1024_SYNC', 'AVAILABILITY: L-STABLE'],
    bgImage: IMAGE_HERO
  },
  {
    id: 'LOGIC-VERNACULAR-02',
    tag: 'SYSTEM_STAGING // V2.4',
    title: 'Linguistic Logic',
    subtitle: 'Bilingual Reasoning Architectures',
    description: 'Architecting neural networks specifically designed to interpret the complex semantic structures of the Indic linguistic landscape.',
    status: 'DEVELOPMENT',
    accent: '#7c3aed',
    visualType: 'LANGUAGE',
    metadata: ['PARAMS: 70B_ENCRYPTED', 'PHASE: ALIGNMENT', 'PRECISION: FP8'],
    bgImage: IMAGE_NEURAL
  }
];

export const DATASETS: Dataset[] = [
  {
    id: 'hindi-synthetic-01',
    title: 'Linguistic-Synth Hindi',
    subtitle: 'Semantic Corpus / 1.2B Tokens',
    description: 'High-fidelity synthetic Hindi corpus designed for precision alignment and cultural grounding in foundational models.',
    status: DatasetStatus.LIVE,
    icon: 'languages',
    category: 'Language'
  } as any,
  {
    id: 'image-net-bharat',
    title: 'System Vision V1',
    subtitle: 'Environmental Perception Stacks',
    description: 'Computer vision datasets optimized for the high-density spatial environments of the Indian subcontinent.',
    status: DatasetStatus.LIVE,
    icon: 'eye',
    category: 'Vision'
  } as any,
  {
    id: 'hri-gesture-01',
    title: 'Physical Interaction Hub',
    subtitle: 'Embodied Logic Frameworks',
    description: 'Multi-modal gesture and speech datasets for autonomous agent interaction in industrial operational environments.',
    status: DatasetStatus.COMING_SOON,
    icon: 'bot',
    category: 'Robotics'
  } as any
];

export const SERVICES = [
  {
    id: 'security-infra',
    title: 'Strategic Systems',
    tagline: 'Sovereign Infrastructure Control',
    description: 'Resilient, air-gapped intelligence platforms designed for institutional accountability and situational awareness.',
    icon: ShieldAlert,
    color: 'accent-violet',
    bgImage: ASSETS.DEFENCE
  },
  {
    id: 'physical-automation',
    title: 'Physical Logic',
    tagline: 'Autonomous Operational Stacks',
    description: 'Reliable industrial systems for autonomous logistics and high-precision actuation in complex environments.',
    icon: Bot,
    color: 'accent-cyan',
    bgImage: ASSETS.ROBOTICS
  },
  {
    id: 'biosystems-research',
    title: 'Biosystems Research',
    tagline: 'Foundational Life Sciences',
    description: 'Interpretability-focused genomic modeling and protein folding infrastructure for sovereign medical research.',
    icon: Dna,
    color: 'accent-emerald',
    bgImage: ASSETS.BIO_AI
  }
];

export const RESEARCH_AREAS = [
  {
    title: 'Reasoning Systems',
    problem: 'Sovereign Alignment',
    description: 'Developing objective functions that prioritize semantic depth and cultural grounding over generic benchmarks.',
    icon: Atom
  },
  {
    title: 'Embodied Grounding',
    problem: 'Physical Fidelity',
    description: 'Building simulation environments that accurately reflect the chaotic sensory dynamics of the physical world.',
    icon: Microscope
  },
  {
    title: 'Protocol Privacy',
    problem: 'Zero-Knowledge Synthesis',
    description: 'Advancing techniques for generating high-fidelity research data without compromising the privacy of individuals.',
    icon: Database
  }
];

export const MANIFESTO_POINTS = [
  {
    title: 'Sovereign Autonomy',
    subtitle: 'Every civilization must maintain control over its cognitive infrastructure to ensure independence and mitigate external bias.'
  },
  {
    title: 'Institutional Rigor',
    subtitle: 'Platforms should remain open to rigorous audit, providing verifiable proof of safety and ethical alignment.'
  },
  {
    title: 'Infrastructure Access',
    subtitle: 'High-fidelity data and compute are foundational utilities that must be accessible to qualified research entities.'
  },
  {
    title: 'Operational Grounding',
    subtitle: 'The primary utility of intelligence systems is their ability to solve complex challenges within physical environments.'
  }
];
