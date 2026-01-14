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
    url: '#',
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
        subtitle: "at Elcro Green",
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
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Elcro Green Event Reel',
    category: 'Reels',
    description:
      'A dynamic and fast-paced reel capturing the highlights of the Elcro Green event. This project won the reel-making competition, showcasing quick cuts, engaging music sync, and vibrant color grading.',
    skills: ['Adobe Premiere Pro', 'Color Grading', 'Sound Design'],
    url: '#',
    image: PlaceHolderImages.find(img => img.id === 'project-1')!,
  },
  {
    id: '2',
    title: 'Slick Product Demo',
    category: 'Short-form',
    description:
      'A sleek and professional product demonstration video created for a tech startup. Focused on clean visuals, smooth animations, and a clear, concise narrative to highlight key features.',
    skills: ['DaVinci Resolve', 'Motion Graphics', 'Visual Storytelling'],
    url: '#',
    image: PlaceHolderImages.find(img => img.id === 'project-2')!,
  },
  {
    id: '3',
    title: 'Hampi - A Cinematic Journey',
    category: 'Long-form',
    description:
      'A cinematic travel vlog exploring the beautiful ruins of Hampi. This long-form video uses stunning videography, drone shots, and a carefully crafted narrative to tell the story of the ancient city.',
    skills: ['Final Cut Pro', 'Color Correction', 'Videography'],
    url: '#',
    image: PlaceHolderImages.find(img => img.id === 'project-3')!,
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
  },
  {
    id: '5',
    title: 'Viral Social Media Ad',
    category: 'Short-form',
    description:
      'A high-energy, 30-second ad designed for Instagram and TikTok. Utilized trending audio and formats to maximize reach and engagement for a local fashion brand.',
    skills: ['Reel Creation', 'Adobe Premiere Pro', 'Trending Formats'],
    url: '#',
    image: PlaceHolderImages.find(img => img.id === 'project-5')!,
  },
  {
    id: '6',
    title: 'Kinetic Typography Explainer',
    category: 'Long-form',
    description:
      'An animated explainer video using kinetic typography to break down a complex topic. This project showcases skills in timing, animation, and making information visually appealing.',
    skills: ['After Effects Basics', 'Kinetic Typography', 'Sound Design'],
    url: '#',
    image: PlaceHolderImages.find(img => img.id === 'project-6')!,
  },
];
