import { MediumCardData, TestimonialItem } from '../types';
import nurturingLittleArtists from '../assets/images/nurturing_little_artists.jpg';
import shivShakti from '../assets/images/instagram/shiv_shakti.jpg';
import digitalArt from '../assets/images/portfolio/digital_art_COiihgEMG1Q.jpg';
import rangoliPeacock from '../assets/images/rangoli_peacock_diwali_1792496981369.jpg';

export const HERO_CAMP_IMAGE = nurturingLittleArtists;

export const MEDIUM_CARDS: MediumCardData[] = [
  {
    id: 'fine-arts',
    title: 'Canvases and Fine Arts',
    subtitle: 'Paintings, sketches, mixed media',
    icon: '🎨',
    image: shivShakti,
    accentColor: '#F9A66C', // Warm peach
    bgLight: '#FFF6F0',
  },
  {
    id: 'graphic-design',
    title: 'Digital Art',
    subtitle: 'Illustrations, digital painting, vectors',
    icon: '💻',
    image: digitalArt,
    accentColor: '#4A6163', // Slate eucalyptus
    bgLight: '#F2F6F6',
  },
  {
    id: 'mehandi-makeup',
    title: 'Rangoli & Mehandi',
    subtitle: 'Floor rangoli art, bridal & festive henna',
    icon: '🌿',
    image: rangoliPeacock,
    accentColor: '#F17A7E', // Coral rose
    bgLight: '#FFF2F3',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote: 'From guiding 4th graders through their daily learning journey to creating bold canvas art, graphic designs, and vibrant summer craft camps—she brings creativity, color, and dedication to everything she touches.',
    name: 'Priya Sharma',
    role: 'Grade 4 Parent & Art Enthusiast',
    initials: 'PS',
    avatarBg: '#F9A66C',
    tag: 'Grade 4 & Summer Camp',
  },
  {
    id: '2',
    quote: 'My daughter attended Shruti’s summer art camp and came back home brimming with excitement every single day. The 3D rainforest model she built is still proudly displayed in our living room!',
    name: 'Ananya & Rajiv Mehta',
    role: 'Summer Camp Parents',
    initials: 'AM',
    avatarBg: '#FFC94B',
    tag: 'Summer Art Camp',
  },
  {
    id: '3',
    quote: 'Shruti’s canvas painting for our anniversary captured the exact warmth and color palette we envisioned. The impasto texture and botanical details bring so much life to our home.',
    name: 'Vikram Malhotra',
    role: 'Art Collector & Commission Client',
    initials: 'VM',
    avatarBg: '#4A6163',
    tag: 'Fine Arts Commission',
  },
  {
    id: '4',
    quote: 'The bridal mehandi Shruti designed for my wedding was breathtaking. The stain was deep, the lines were razor-sharp, and her calm, cheerful presence made the hours fly by.',
    name: 'Ritu Sen Gupta',
    role: 'Bridal Client',
    initials: 'RS',
    avatarBg: '#F17A7E',
    tag: 'Bridal Mehandi',
  },
  {
    id: '5',
    quote: 'As an educator, Shruti has an extraordinary gift: she turns complex science and history topics into tactile, colorful 3D crafts that kids remember long after test day.',
    name: 'Dr. Sunita Kapoor',
    role: 'Elementary School Principal',
    initials: 'SK',
    avatarBg: '#4A6163',
    tag: 'School Educator',
  },
  {
    id: '6',
    quote: 'Her brand posters and digital event graphics struck the ideal balance between playful warmth and clean modern aesthetics. A truly versatile creative partner!',
    name: 'Karan Singhal',
    role: 'Community Outreach Director',
    initials: 'KS',
    avatarBg: '#F9A66C',
    tag: 'Graphic Design',
  },
];
