
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
    skills: ['DaVinci Resolve', 'Color Grading', 'Sound Design'],
    url: 'https://youtu.be/83ZsdRWkmt4',
    image: PlaceHolderImages.find(img => img.id === 'project-1')!,
    videoStoragePath: 'projects/1/video.mp4',
  },
  {
    id: '2',
    title: 'E Cell SMVIT',
    category: 'YouTube',
    description:
      'Where ideas spark and dreams take flight, this is E Cell SMVIT! Let’s build, create, and hustle.',
    skills: ['Video Editing', 'Community', 'Promotion'],
    url: 'https://youtu.be/dSh6yQt6GFQ',
    image: PlaceHolderImages.find(img => img.id === 'project-7')!,
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
    image: PlaceHolderImages.find(img => img.id === 'project-8')!,
    videoStoragePath: 'projects/3/video.mp4',
  },
];
