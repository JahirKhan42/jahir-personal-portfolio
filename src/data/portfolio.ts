/**
 * @file portfolio.ts
 * Centralized, typed portfolio data for Jahir Ali Khan.
 * Edit this file to update professional information, projects, links, and credentials.
 */

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  project?: string;
  period: string;
  isCurrent?: boolean;
  responsibilities: string[];
  type: 'Customer Service' | 'AI Training' | 'Educational Content';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  headline?: string;
  category: string;
  description: string;
  extendedDescription?: string;
  projectUrl: string;
  actionLabel: string;
  platformType?: string;
  image: string;
  technologies: string[];
  githubUrl: string | null;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  platform: string;
  year: string;
  credentialUrl: string | null;
  credentialNote?: string;
}

export interface EducationItem {
  id: string;
  program: string;
  institutionOrBoard: string;
  year: string;
  status?: string;
  type: 'Schooling' | 'Vocational' | 'Undergraduate Study';
  notes?: string;
}

export interface ScienceFocusArea {
  title: string;
  description: string;
  topics: string[];
}

export interface SocialCardItem {
  id: string;
  platform: string;
  displayName: string;
  url: string;
  description: string;
  iconType: 'instagram' | 'facebook' | 'threads' | 'google' | 'linkedin' | 'github';
  badgeLabel?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
  facebook: string;
  threads: string;
  googleSearchProfile: string;
  email: string;
}

export interface PortfolioData {
  identity: {
    brandName: string;
    fullName: string;
    headline: string;
    introLabel: string;
    animatedPhrases: string[];
    location: string;
    heroDescription: string;
    profileImage: string;
    profileImageFallback: string;
  };
  contact: {
    email: string;
    statusText: string;
  };
  socialLinks: SocialLinks;
  socialCards: SocialCardItem[];
  about: {
    biography: string[];
    interestCards: Array<{
      title: string;
      description: string;
      iconName: string;
    }>;
  };
  experience: ExperienceItem[];
  skills: {
    categories: SkillCategory[];
    languages: LanguageItem[];
  };
  projects: ProjectItem[];
  certifications: CertificationItem[];
  education: EducationItem[];
  scienceInitiative: {
    title: string;
    subtitle: string;
    description: string;
    focusAreas: ScienceFocusArea[];
    domainNotice: string;
  };
}

export const portfolioData: PortfolioData = {
  identity: {
    brandName: 'JAHIR.DEV',
    fullName: 'Jahir Ali Khan',
    headline: 'AI Training Contributor | Aspiring Developer | Science Educator',
    introLabel: 'AI TRAINING • DEVELOPMENT • SCIENCE',
    animatedPhrases: ['Building.', 'Learning.', 'Exploring.'],
    location: 'West Bengal, India',
    heroDescription:
      "I'm an AI Training Contributor and science educator with experience in quality-focused evaluation and customer service. I build practical AI-assisted web applications while developing my skills in modern software engineering.",
    // Configured to look for uploaded headshot, falling back gracefully to placeholder
    profileImage: '/images/profile-photo.jpg',
    profileImageFallback: '/images/profile-placeholder.svg',
  },
  contact: {
    email: 'jahirkhan8514833823@gmail.com',
    statusText:
      'Open to relevant opportunities in AI training, evaluation, technology, and science education.',
  },
  socialLinks: {
    github: 'https://github.com/JahirKhan42',
    linkedin: 'https://www.linkedin.com/in/jahiralikhan/',
    instagram: 'https://www.instagram.com/sciencewithjahir/',
    facebook: 'https://www.facebook.com/share/1EcXyaju8u/',
    threads: 'https://www.threads.com/@sciencewithjahir',
    googleSearchProfile:
      'https://profile.google.com/@sciencewithjahir?source=srp&token=bWlkOiAvZy8xMXp5ZmxiN3h3&pane_nb_mode=2&hl=en-IN&pf=0',
    email: 'jahirkhan8514833823@gmail.com',
  },
  socialCards: [
    {
      id: 'instagram',
      platform: 'Instagram',
      displayName: 'Science With Jahir',
      url: 'https://www.instagram.com/sciencewithjahir/',
      description: 'Science visuals and educational content',
      iconType: 'instagram',
      badgeLabel: '@sciencewithjahir',
    },
    {
      id: 'facebook',
      platform: 'Facebook',
      displayName: 'Science With Jahir',
      url: 'https://www.facebook.com/share/1EcXyaju8u/',
      description: 'Science posts and discoveries',
      iconType: 'facebook',
      badgeLabel: 'Science With Jahir',
    },
    {
      id: 'threads',
      platform: 'Threads',
      displayName: 'Science With Jahir',
      url: 'https://www.threads.com/@sciencewithjahir',
      description: 'Science discussions and updates',
      iconType: 'threads',
      badgeLabel: '@sciencewithjahir',
    },
    {
      id: 'google-search-profile',
      platform: 'Google Search Profile',
      displayName: 'Jahir Ali Khan',
      url: 'https://profile.google.com/@sciencewithjahir?source=srp&token=bWlkOiAvZy8xMXp5ZmxiN3h3&pane_nb_mode=2&hl=en-IN&pf=0',
      description: 'Public creator profile',
      iconType: 'google',
      badgeLabel: 'Verified Creator',
    },
    {
      id: 'linkedin',
      platform: 'LinkedIn',
      displayName: 'Jahir Ali Khan',
      url: 'https://www.linkedin.com/in/jahiralikhan/',
      description: 'Professional experience and networking',
      iconType: 'linkedin',
      badgeLabel: 'in/jahiralikhan',
    },
  ],
  about: {
    biography: [
      "I'm an AI Training Contributor, aspiring developer, and science educator from West Bengal, India.",
      'My professional background includes customer service, AI evaluation workflows, and educational content creation.',
      "I'm passionate about technology, artificial intelligence, physics, and building digital tools that solve practical problems.",
      "Alongside my professional work, I'm actively learning frontend development, Python, and modern software engineering.",
    ],
    interestCards: [
      {
        title: 'AI Training & Evaluation',
        description:
          'Rigorous model response rating, data annotation, and quality assessment following detailed evaluation rubrics.',
        iconName: 'Cpu',
      },
      {
        title: 'Web Development',
        description:
          'Practical frontend development using modern web technologies, React fundamentals, TypeScript, and clean responsive CSS.',
        iconName: 'Code',
      },
      {
        title: 'Science Education',
        description:
          'Translating complex physics, astronomy, and technology concepts into structured, intuitive visual explanations.',
        iconName: 'Atom',
      },
      {
        title: 'Creative Technology',
        description:
          'Designing interactive science games, educational utilities, and human-in-the-loop AI workflows.',
        iconName: 'Sparkles',
      },
    ],
  },
  experience: [
    {
      id: 'fusion-cx',
      role: 'Customer Service Associate',
      company: 'Fusion CX Limited',
      period: 'December 2024 – Present',
      isCurrent: true,
      type: 'Customer Service',
      responsibilities: [
        'Customer communication and support',
        'Handling service-related queries',
        'Following operational workflows',
        'Maintaining quality and accuracy',
        'Professional problem solving',
      ],
    },
    {
      id: 'outlier-aether',
      role: 'AI Training Contributor',
      company: 'Outlier',
      project: 'Aether',
      period: 'July 2026 – September 2026',
      isCurrent: false,
      type: 'AI Training',
      responsibilities: [
        'AI response evaluation',
        'Content quality assessment',
        'Following evaluation rubrics',
        'Text and audio-related annotation workflows',
        'Rating and reviewing AI-generated outputs',
      ],
    },
    {
      id: 'science-with-jahir',
      role: 'Independent Science Content Creator',
      company: 'Science With Jahir',
      period: 'Independent Initiative',
      type: 'Educational Content',
      responsibilities: [
        'Educational science content creation',
        'Physics concept explanation',
        'Astronomy and technology content',
        'Visual science storytelling',
        'Educational video planning',
      ],
    },
  ],
  skills: {
    categories: [
      {
        title: 'AI Training & Evaluation',
        description: 'Hands-on annotation, rubric-driven rating, and multimodal assessment',
        skills: [
          'AI Response Evaluation',
          'Data Annotation',
          'Text Evaluation',
          'Audio Evaluation',
          'Quality Assessment',
          'Rubric-Based Rating',
          'Bengali Language Evaluation',
        ],
      },
      {
        title: 'Development & Technology',
        description: 'Learning-stage foundations and practical application building',
        skills: [
          'HTML5 & Modern CSS',
          'JavaScript (ES6+)',
          'Python Fundamentals',
          'React Fundamentals',
          'TypeScript Fundamentals',
          'AI-Assisted Development',
          'Git & GitHub',
          'Vercel Deployment',
        ],
      },
      {
        title: 'Science & Creative Skills',
        description: 'Concept deconstruction and multimedia educational storytelling',
        skills: [
          'Science Communication',
          'Physics Explanation',
          'Educational Content Creation',
          'Visual Storytelling',
          'AI-Assisted Video Production',
          'Content Research',
        ],
      },
      {
        title: 'Professional Skills',
        description: 'Workplace discipline, quality assurance, and user support',
        skills: [
          'Customer Service',
          'Clear Communication',
          'Attention to Detail',
          'Quality-Focused Work',
          'Problem Solving',
        ],
      },
    ],
    languages: [
      { language: 'Bengali', proficiency: 'Native' },
      { language: 'Hindi', proficiency: 'Proficient' },
      { language: 'English', proficiency: 'Working Proficiency' },
    ],
  },
  projects: [
    {
      id: 'inboxpilot-ai',
      title: 'InboxPilot AI — Your Personal Email Copilot',
      category: 'AI Productivity / Workflow Automation',
      description:
        'InboxPilot AI is a human-controlled email assistant built around ChatGPT Work and connected Gmail workflows. It helps review inbox conversations, identify messages that need attention, and prepare draft replies while keeping the user in control.',
      extendedDescription:
        'Designed with human-in-the-loop safeguards: it never sends emails automatically, instead surfacing high-priority conversations and preparing draft suggestions for user confirmation.',
      projectUrl: 'https://chatgpt.com/s/cx_6ae9a74f54b881919147453e9725ac4c',
      actionLabel: 'View Project',
      platformType: 'ChatGPT Custom Workflow',
      image: '/images/project-placeholders/inboxpilot.svg',
      technologies: ['ChatGPT Work', 'Gmail Workflow', 'Prompt Engineering', 'Human-in-the-Loop'],
      githubUrl: null,
      highlights: [
        'Surfaces inbox conversations needing action',
        'Generates context-aware draft responses',
        'Strict human authorization before any outbound action',
      ],
    },
    {
      id: 'quantum-clash',
      title: 'QUANTUM CLASH — Predict. Influence. Outthink.',
      category: 'Interactive Science Game',
      description:
        'QUANTUM CLASH is a multiplayer science strategy game designed for 2–6 players. Players join using room codes, predict experimental outcomes, and make strategic decisions using limited energy across five rounds.',
      extendedDescription:
        'Built to combine quantum mechanics principles with tactical competitive gaming. Players balance energy budgets while attempting to predict stochastic phenomena across 5 structured rounds.',
      projectUrl: 'https://quantum-clash-laboratory.jahirkhan8514833823.chatgpt.site/',
      actionLabel: 'View Project',
      platformType: 'Web Game Prototype',
      image: '/images/project-placeholders/quantum-clash.svg',
      technologies: ['Interactive Game Logic', 'Room-Based Multiplayer', 'Scientific Modeling'],
      githubUrl: null,
      highlights: [
        'Room code lobby for 2–6 participants',
        'Five-round strategic energy allocation',
        'Quantum prediction & probabilistic mechanics',
      ],
    },
    {
      id: 'examvault-ai',
      title: 'ExamVault AI',
      category: 'EdTech / AI-Assisted Learning',
      description:
        'ExamVault AI is an educational web application designed to transform class notes, PDFs, and images into organized study resources and interactive learning materials.',
      extendedDescription:
        'Developed utilizing AI-assisted development workflows to create an intuitive study organizer that digests raw student study materials into structured revision assets.',
      projectUrl: 'https://examvault-ai.vercel.app/',
      actionLabel: 'View Project',
      platformType: 'Deployed Web App (Vercel)',
      image: '/images/project-placeholders/examvault.svg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI-Assisted Workflow'],
      githubUrl: null,
      highlights: [
        'Transforms notes & documents into structured study units',
        'Interactive learning card format',
        'Clean, accessible student interface',
      ],
    },
    {
      id: 'physics-intuition-engine',
      title: 'Physics Intuition Engine',
      category: 'Physics Education / AI Application',
      description:
        'Physics Intuition Engine is an AI-assisted educational web application that helps transform physics concepts into structured explanations and creative learning content.',
      extendedDescription:
        'Built to bridge the gap between abstract physics formulas and intuitive conceptual understanding through visual representations and stepwise explanations.',
      projectUrl: 'https://physics-intuition-engine.vercel.app/',
      actionLabel: 'View Project',
      platformType: 'Deployed Web App (Vercel)',
      image: '/images/project-placeholders/physics-intuition.svg',
      technologies: ['Physics Simulation UI', 'Concept Modeling', 'Vercel Deployment'],
      githubUrl: null,
      highlights: [
        'Deconstructs foundational physics principles',
        'Step-by-step conceptual intuition breakdowns',
        'Visual concept mapping for learners',
      ],
    },
  ],
  certifications: [
    {
      id: 'google-ai-cert',
      title: 'Google AI Professional Certificate',
      issuer: 'Google',
      platform: 'Coursera',
      year: '2026',
      credentialUrl: null,
      credentialNote: 'Official credential link can be configured in portfolio.ts',
    },
  ],
  education: [
    {
      id: 'hs-2022',
      program: 'Higher Secondary (Class XII)',
      institutionOrBoard: 'West Bengal Council of Rabindra Open Schooling',
      year: '2022',
      type: 'Schooling',
      notes: 'Completed secondary education with focus on science foundations.',
    },
    {
      id: 'vocational-2024',
      program: 'Data Entry Operator with Introduction of DTP (V2)',
      institutionOrBoard:
        'West Bengal State Council of Technical & Vocational Education & Skill Development',
      year: '2024',
      type: 'Vocational',
      notes: 'Short-term certified technical vocational training program.',
    },
    {
      id: 'bca-gla',
      program: 'Bachelor of Computer Applications (BCA)',
      institutionOrBoard: 'GLA University',
      year: 'Academic Study',
      status: 'Discontinued / Degree not completed',
      type: 'Undergraduate Study',
      notes:
        'Undergraduate coursework in computer applications; program discontinued prior to completion.',
    },
  ],
  scienceInitiative: {
    title: 'Science With Jahir',
    subtitle: 'Making complex science easier to understand.',
    description:
      'Science With Jahir is my science education and digital content initiative, focused on making physics, astronomy, technology, and scientific ideas accessible through visual explanations and engaging educational content.',
    focusAreas: [
      {
        title: 'Physics',
        description: 'Classical mechanics, thermodynamics, quantum principles, and electromagnetism.',
        topics: ['Mechanics', 'Relativity', 'Quantum Foundations', 'Energy Systems'],
      },
      {
        title: 'Astronomy',
        description: 'Cosmology, planetary systems, black holes, and deep-space observation.',
        topics: ['Stellar Evolution', 'Cosmology', 'Space Exploration', 'Orbital Dynamics'],
      },
      {
        title: 'Emerging Technology',
        description: 'Artificial intelligence architectures, computing paradigms, and robotics.',
        topics: ['AI Models', 'Computation', 'Automation', 'Digital Tools'],
      },
      {
        title: 'Science Education',
        description: 'Pedagogy, visual explanation techniques, and intuitive learning frameworks.',
        topics: ['Visual Explanations', 'Curriculum Design', 'Storytelling', 'Interactive Models'],
      },
    ],
    domainNotice:
      'Note: The web domain sciencewithjahir.com is currently under development and not yet live.',
  },
};
