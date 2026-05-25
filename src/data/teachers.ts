/**
 * @copyright Copyright (c) 2026 Nihal Jaiswal
 * @author    Nihal Jaiswal
 * @license   MIT
 */

export interface Teacher {
  id: number;
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  avatar: string;
  featured: boolean;
  badge: string;
  badgeColor: string;
  linkedin: string | null;
  github: string | null;
}

export const teachers: Teacher[] = [
  {
    id: 1,
    name: 'Prof. Neeraj Singh',
    role: 'Academic Head',
    expertise: ['Robotics & AI', 'Drone & Aerodynamics', 'Ethics', 'STEAM'],
    bio: "Visionary academic leader guiding Vyombotics' curriculum with deep expertise in Robotics, AI, Drone technology, Aerodynamics, and STEAM education.",
    avatar: '/images/teachers/prof-neeraj-singh.jpg',
    featured: true,
    badge: '⭐ Academic Head',
    badgeColor: 'purple',
    linkedin: null,
    github: null,
  },
  {
    id: 2,
    name: 'Nihal Jaiswal',
    role: 'AI & GenAI Expert',
    expertise: ['AI', 'ML', 'Deep Learning', 'Generative AI'],
    bio: 'B.Tech IT student and AI/ML engineer specializing in LLMs, RAG pipelines, Agentic AI, and MLOps. National hackathon achiever with 80+ GitHub projects.',
    avatar: '/images/teachers/nihal-jaiswal.jpg',
    featured: false,
    badge: 'AI • ML • DL • Gen AI',
    badgeColor: 'blue',
    linkedin: 'https://www.linkedin.com/in/nihal-jaiswal-908b52257/',
    github: 'https://github.com/Nihal108-bi',
  },
  {
    id: 3,
    name: 'Srishti Soni',
    role: 'IoT & Embedded Systems Expert',
    expertise: ['IoT', 'Embedded Systems', 'Hardware Programming'],
    bio: 'Passionate hardware and embedded systems educator helping students bridge the gap between software and physical computing through real-world IoT projects.',
    avatar: '/images/teachers/srishti-soni.jpg',
    featured: false,
    badge: 'IoT • Embedded',
    badgeColor: 'cyan',
    linkedin: null,
    github: null,
  },
  {
    id: 4,
    name: 'Rishabh Yadav',
    role: 'Python & AI Expert',
    expertise: ['Python', 'AI', 'Machine Learning'],
    bio: 'Dedicated Python and AI educator focused on building strong programming fundamentals and applying AI concepts to real-world problem solving.',
    avatar: '/images/teachers/rishabh-yadav.jpg',
    featured: false,
    badge: 'Python • AI',
    badgeColor: 'green',
    linkedin: 'https://linkedin.com/in/rishabh-yadav17',
    github: 'https://github.com/RishabhYadav17',
  },
  {
    id: 5,
    name: 'Aanchal Chaurasiya',
    role: 'Web Development Expert',
    expertise: ['Frontend', 'Backend', 'Full Stack Web Dev'],
    bio: 'Full stack web development mentor guiding students from HTML/CSS basics to building and deploying complete modern web applications.',
    avatar: '/images/teachers/aanchal-chaurasiya.jpg',
    featured: false,
    badge: 'Web Dev',
    badgeColor: 'pink',
    linkedin: 'https://linkedin.com/in/anchal-chaurasiya-693b53257',
    github: 'https://github.com/Ancha2003',
  },
  {
    id: 6,
    name: 'Neeraj Kumar',
    role: 'Robotics & Automation Expert',
    expertise: ['Robotics', 'Automation', 'Control Systems'],
    bio: 'Robotics and automation specialist helping students design, build, and program intelligent robotic systems for real-world applications.',
    avatar: '/images/teachers/neeraj-kumar.jpg',
    featured: false,
    badge: 'Robotics • Automation',
    badgeColor: 'orange',
    linkedin: null,
    github: null,
  },
  {
    id: 7,
    name: 'Anmol Verma',
    role: '3D Design Expert',
    expertise: ['3D Modelling', 'CAD', 'Product Design', 'Rendering'],
    bio: 'Creative 3D design educator teaching students to bring ideas to life using industry-standard tools for modelling, animation, and design rendering.',
    avatar: 'https://ui-avatars.com/api/?name=Anmol+Verma&background=7c3aed&color=fff&size=128&bold=true',
    featured: false,
    badge: '3D Design',
    badgeColor: 'violet',
    linkedin: null,
    github: null,
  },
];
