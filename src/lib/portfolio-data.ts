
import type { LucideIcon } from 'lucide-react';
import {
  Scissors,
  Palette,
  Music,
  Camera,
  Layers,
  Youtube,
  Instagram,
  Clapperboard,
  Bot,
  Briefcase,
  GraduationCap,
  Award
} from 'lucide-react';

export const personalInfo = {
  name: 'Sourabh Basagonda Magadum',
  location: 'Bengaluru, India',
  phone: '7721002719',
  email: 'sourabhmagadum27@gmail.com',
  youtube: {
    url: 'https://www.youtube.com/@Advhuduga',
    subscribers: '1088+',
  },
  instagram: {
    url: 'https://www.instagram.com/adventure_huduga_05?igsh=MW95dWNwMWFsZGdoOQ==',
    followers: '477+',
  },
};

export const careerObjective =
  'Creative and passionate final-year Computer Science engineering student with hands-on experience in video editing, reel creation, and content production. Skilled in Adobe Premiere Pro, DaVinci Resolve, and Final Cut Pro, with proven achievements in photography and reel-making competitions. Seeking an opportunity as a Video Editor / Content Creator to produce engaging digital content and grow brand presence.';

type SkillCategory =
  | 'Video Editing & Content'
  | 'Tools & Software'
  | 'Content Creation';

type Skill = {
  name: string;
  icon: LucideIcon;
};

export const skills: Record<SkillCategory, Skill[]> = {
  'Video Editing & Content': [
    { name: 'Short & Long-form Editing', icon: Scissors },
    { name: 'Reel & YouTube Creation', icon: Youtube },
    { name: 'Color Correction & Grading', icon: Palette },
    { name: 'Audio Sync & Sound Design', icon: Music },
    { name: 'Smooth Transitions & Effects', icon: Layers },
    { name: 'Thumbnail & Visual Storytelling', icon: Clapperboard },
  ],
  'Tools & Software': [
    { name: 'DaVinci Resolve', icon: Bot },
    { name: 'Adobe Premiere Pro', icon: Bot },
    { name: 'Final Cut Pro', icon: Bot },
    { name: 'Basic Photography & Videography', icon: Camera },
  ],
  'Content Creation': [
    { name: 'YouTube Content Creator', icon: Youtube },
    { name: 'Instagram Content Creator', icon: Instagram },
  ],
};

export const experience = [
  {
    icon: Briefcase,
    title: 'YouTube Content Creator',
    subtitle: 'Monetized Channel',
    description:
      'Own and manage a monetized YouTube channel with 1088+ subscribers. Experienced in content planning, editing, publishing, and audience engagement. Familiar with YouTube analytics and growth strategies.',
  },
  {
    icon: Briefcase,
    title: 'Instagram Content Creator',
    subtitle: '477+ Followers',
    description:
      'Created reels and short-form videos, building an organic audience. Focused on engaging visuals and trending formats to grow presence on the platform.',
  },
];

export const educationAndAchievements = [
    {
        icon: GraduationCap,
        title: "Sir M. Visvesvaraya Institute of Technology",
        subtitle: "Bachelor of Engineering – Computer Science | 2023 – 2026",
        description: "Currently in final year, gaining comprehensive knowledge in computer science principles.",
    },
    {
        icon: GraduationCap,
        title: "Sri Jayachamarajendra Polytechnic (SJP)",
        subtitle: "Diploma | 2020 – 2023",
        description: "Completed diploma, building a strong foundational understanding of technical skills.",
    },
    {
        icon: Award,
        title: "Winner – Photography & Reel Making Competition",
        subtitle: "at Electro Green",
        description: "Awarded first place for creative photography and compelling reel creation, showcasing technical and artistic skills.",
    },
    {
        icon: Award,
        title: "Monetized YouTube Channel",
        subtitle: "1088+ Subscribers",
        description: "Successfully built and monetized a YouTube channel, demonstrating ability to create engaging content and grow an audience.",
    }
]

export const languages = ['Kannada (Native)', 'English (Professional)', 'Hindi (Conversational)'];
export const interests = ['Video Editing', 'Visual Storytelling', 'Content Creation', 'Photography', 'Exploring Creative Trends'];

export type ProjectCategory = 'All' | 'Short-form' | 'Long-form' | 'Reels';

export type ImageInfo = {
  imageUrl: string;
  imageHint: string;
};

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  skills: string[];
  url: string;
  image?: ImageInfo;
  videoStoragePath?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Electro Green Event Reel',
    category: 'Reels',
    description:
      'A dynamic and fast-paced reel capturing the highlights of the Electro Green event. This project won the reel-making competition, showcasing quick cuts, engaging music sync, and vibrant color grading.',
    skills: ['DaVinci Resolve', 'Color Grading', 'Sound Design'],
    url: 'https://youtu.be/83ZsdRWkmt4',
    image: {
      "imageUrl": "https://images.unsplash.com/photo-1758939558639-7b826540047c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxldmVudCUyMHZpZGVvfGVufDB8fHx8MTc2ODQwODU1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "event video"
    },
    videoStoragePath: 'projects/1/video.mp4',
  },
  {
    id: '2',
    title: 'E Cell SMVIT',
    category: 'Short-form',
    description:
      'Where ideas spark and dreams take flight, this is E Cell SMVIT! Let’s build, create, and hustle.',
    skills: ['Video Editing', 'Community', 'Promotion'],
    url: 'https://youtu.be/dSh6yQt6GFQ',
    image: {
      "imageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXJzaGlwJTIwZXZlbnR8ZW58MHx8fHwxNzY4NDk0ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "entrepreneurship event"
    },
    videoStoragePath: 'projects/2/video.mp4',
  },
  {
    id: '3',
    title: 'Electro Green Promotion',
    category: 'Reels',
    description:
      'A promotional reel created for the Electro Green event, released 10 days prior to build excitement and anticipation.',
    skills: ['Video Editing', 'Promotion', 'Social Media'],
    url: 'https://youtube.com/shorts/-WGI60sMdvg',
    image: {
      "imageUrl": "https://images.unsplash.com/photo-1631387019069-2ff599943f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxwcm9tbyUyMHZpZGVvfGVufDB8fHx8MTc2ODQxNDQwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "promo video"
    },
    videoStoragePath: 'projects/3/video.mp4',
  },
  {
    id: '4',
    title: 'Super Nan Child Care Assignment',
    category: 'Long-form',
    description: 'A long-form video project created as an assignment for Super Nan Child Care Pvt Limited, showcasing detailed editing and storytelling.',
    skills: ['Adobe Premiere Pro', 'Storytelling', 'Long-form Editing'],
    url: 'https://youtu.be/Wsg_x5pgc2k',
    image: {
      "imageUrl": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGNhcmV8ZW58MHx8fHwxNzY4NTAwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "child care"
    },
    videoStoragePath: 'projects/4/video.mp4',
  },
  {
    id: '5',
    title: 'Concept Media Assignment',
    category: 'Reels',
    description: 'A creative concept video created as an assignment for Concept Media.',
    skills: ['Video Editing', 'Concept Development', 'Social Media'],
    url: 'https://youtube.com/shorts/0igs_zKyV8c',
    image: {
      "imageUrl": "https://images.unsplash.com/photo-1761864294727-3c9f6b3e7425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MXwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8fDE3NjgzNTg5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "social media"
    },
    videoStoragePath: 'projects/5/video.mp4',
  },
  {
    id: '7',
    title: 'Recruiter Company Promotion',
    category: 'Reels',
    description: 'A promotional video created for a recruitment company to attract talent. This short video highlights the company culture and opportunities.',
    skills: ['Video Editing', 'Corporate Video', 'Social Media'],
    url: 'https://youtube.com/shorts/USzfUdJd7jA',
    image: {
      "imageUrl": "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZWNydWl0bWVudCUyMG9mZmljZXxlbnwwfHx8fDE3Njg1MTE5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "recruitment office"
    },
    videoStoragePath: 'projects/7/video.mp4',
  },
];
