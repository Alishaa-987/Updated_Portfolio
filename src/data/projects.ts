export interface Project {
  id: string;
  name: string;
  description: string;
  github: string;
  live: string | null;
  language: string;
  tags: string[];
  category: 'fullstack' | 'ai' | 'mobile' | 'other';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'school-mgmt',
    name: 'School Management System',
    description:
      'Modern LMS-style web app with multi-role authentication (admin, teacher, student, parent), dynamic dashboards, CRUD operations, and analytics. Built production-ready with Docker.',
    github: 'https://github.com/Alishaa-987/School_Managment_System',
    live: 'https://learning-managment-system-sigma.vercel.app/',
    language: 'TypeScript',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Clerk', 'Docker', 'Recharts'],
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Project',
    description:
      'Full-featured e-commerce platform with product listings, shopping cart, user authentication, and order management. Deployed on Vercel.',
    github: 'https://github.com/Alishaa-987/E_Commerce_Project',
    live: 'https://e-commerce-project-one-rho.vercel.app',
    language: 'JavaScript',
    tags: ['Next.js', 'JavaScript', 'Tailwind CSS', 'Clerk', 'PostgreSQL'],
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'real-estate',
    name: 'Real Estate Web App',
    description:
      'Full-stack MERN real estate platform with property search, advanced filters, JWT authentication, and property management for buyers and sellers.',
    github: 'https://github.com/Alishaa-987/Real_State_project',
    live: 'https://real-state-project-sand.vercel.app',
    language: 'JavaScript',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'JWT', 'Tailwind CSS'],
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'chatting',
    name: 'Real-Time Chat App',
    description:
      'Real-time messaging application with live chat functionality, user authentication, and a clean modern UI.',
    github: 'https://github.com/Alishaa-987/chatting',
    live: 'https://chatting-silk-nine.vercel.app',
    language: 'TypeScript',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Supabase'],
    category: 'fullstack',
    featured: false,
  },
  {
    id: 'hospital-mgmt',
    name: 'Hospital Management System',
    description:
      'Comprehensive hospital management website with patient records, appointment scheduling, and admin dashboard built with modern TypeScript stack.',
    github: 'https://github.com/Alishaa-987/Hospital_Managment_System_Webiste',
    live: null,
    language: 'TypeScript',
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    category: 'fullstack',
    featured: false,
  },
  {
    id: 'webmind-hackathon',
    name: 'IntelliSense AI — Hackathon',
    description:
      'AI analytics platform measuring brand visibility across generative AI models. Built and presented at the WebMind Innovation Hackathon.',
    github: 'https://github.com/Alishaa-987/WebMind-Innovation-Hackathon-Track-1',
    live: null,
    language: 'JavaScript',
    tags: ['JavaScript', 'Next.js', 'FastAPI', 'Python', 'OpenAI'],
    category: 'ai',
    featured: false,
  },
  {
    id: 'chat-pdf',
    name: 'Chat with PDF',
    description:
      'RAG-powered chatbot that lets users interact with the content of PDF and Word documents using the Groq API for fast LLM inference.',
    github: 'https://github.com/Alishaa-987/Chat_with_pdf',
    live: null,
    language: 'Python',
    tags: ['Python', 'Groq API', 'LangChain', 'RAG', 'Streamlit'],
    category: 'ai',
    featured: false,
  },
  {
    id: 'voice-chatbot',
    name: 'Voice-to-Voice Chatbot',
    description:
      'Real-time voice chatbot using OpenAI Whisper for speech-to-text, Groq API for LLM responses, and gTTS for text-to-speech output.',
    github: 'https://github.com/Alishaa-987/Voice-to_voice_chatbot',
    live: null,
    language: 'Python',
    tags: ['Python', 'Whisper', 'Groq API', 'gTTS', 'Speech Recognition'],
    category: 'ai',
    featured: false,
  },
];
