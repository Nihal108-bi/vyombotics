/**
 * @copyright Copyright (c) 2026 Nihal Jaiswal
 * @author    Nihal Jaiswal
 * @license   MIT
 */

export interface Course {
  id: number;
  name: string;
  description: string;
  image: string;
  difficulty: string;
  tag: string;
  tagColor: string;
  badgeColor: string;
  rating: number;
}

export const courses: Course[] = [
  {
    id: 1,
    name: 'Robotics Fundamentals',
    description: 'Build and program real robots from scratch. Learn mechanics, electronics, and control systems.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&fit=crop',
    difficulty: 'Beginner',
    tag: 'Hardware',
    tagColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    badgeColor: 'bg-green-500/20 text-green-300',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Artificial Intelligence',
    description: 'Explore AI concepts, neural networks, and deploy intelligent systems with Python.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&fit=crop',
    difficulty: 'Intermediate',
    tag: 'AI',
    tagColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    badgeColor: 'bg-yellow-500/20 text-yellow-300',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Python Programming',
    description: 'Master Python from basics to advanced — data structures, OOP, automation and scripting.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&fit=crop',
    difficulty: 'Beginner',
    tag: 'Programming',
    tagColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    badgeColor: 'bg-green-500/20 text-green-300',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Web Development',
    description: 'Design and build modern websites using HTML, CSS, JavaScript, React and Node.js.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&fit=crop',
    difficulty: 'Beginner',
    tag: 'Web',
    tagColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    badgeColor: 'bg-green-500/20 text-green-300',
    rating: 4.7,
  },
  {
    id: 5,
    name: 'App Development',
    description: 'Create cross-platform mobile apps with React Native and deploy to iOS and Android.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&fit=crop',
    difficulty: 'Intermediate',
    tag: 'Mobile',
    tagColor: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    badgeColor: 'bg-yellow-500/20 text-yellow-300',
    rating: 4.8,
  },
  {
    id: 6,
    name: '3D Designing',
    description: 'Master Blender, CAD tools and create stunning 3D models, animations and renders.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&fit=crop',
    difficulty: 'Intermediate',
    tag: 'Design',
    tagColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    badgeColor: 'bg-yellow-500/20 text-yellow-300',
    rating: 4.6,
  },
  {
    id: 7,
    name: 'Machine Learning',
    description: 'Build predictive models, work with datasets, and deploy ML solutions in the real world.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&fit=crop',
    difficulty: 'Advanced',
    tag: 'ML',
    tagColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    badgeColor: 'bg-red-500/20 text-red-300',
    rating: 4.9,
  },
  {
    id: 8,
    name: 'Electronics & IoT',
    description: 'Connect the physical world to the internet — sensors, Arduino, Raspberry Pi and smart systems.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&fit=crop',
    difficulty: 'Intermediate',
    tag: 'IoT',
    tagColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    badgeColor: 'bg-yellow-500/20 text-yellow-300',
    rating: 4.7,
  },
];
