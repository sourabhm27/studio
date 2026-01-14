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
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

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
    url: '#',
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
    { name: 'Adobe Premiere Pro', icon: Bot },
    { name: 'DaVinci Resolve', icon: Bot },
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

export type ProjectCategory = 'All' | 'Short-form' | 'Long-form' | 'Reels' | 'YouTube';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  skills: string[];
  url: string;
  image: ImagePlaceholder;
  videoStoragePath?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Electro Green Event Reel',
    category: 'Reels',
    description:
      'A dynamic and fast-paced reel capturing the highlights of the Electro Green event. This project won the reel-making competition, showcasing quick cuts, engaging music sync, and vibrant color grading.',
    skills: ['Adobe Premiere Pro', 'Color Grading', 'Sound Design'],
    url: '#',
    image: PlaceHolderImages.find(img => img.id === 'project-1')!,
    videoStoragePath: 'projects/1/video.mp4',
  },
  {
    id: '4',
    title: 'My YouTube Studio Tour',
    category: 'YouTube',
    description:
      'An engaging video for my YouTube channel, taking my 1000+ subscribers on a tour of my content creation setup. This video is an example of my ability to connect with an audience directly.',
    skills: ['Audience Engagement', 'Content Planning', 'YouTube Analytics'],
    url: '#',
    image: PlaceHolderImages.find(img => img.id === 'project-4')!,
    videoStoragePath: 'projects/4/video.mp4',
  },
];
