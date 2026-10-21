export interface WorkshopMediaItem {
  id: string;
  type: 'video' | 'image';
  postCode: string;
  url: string;
  localPath: string;
  title: string;
  subtitle: string;
  description: string;
  date?: string;
  likes?: string;
}

// Row 1: Workshop Videos (Do not display "Row 1" in UI)
export const WORKSHOP_VIDEOS: WorkshopMediaItem[] = [
  {
    id: 'wv_1',
    type: 'video',
    postCode: 'DK3vmBtpW2S',
    url: 'https://www.instagram.com/p/DK3vmBtpW2S/',
    localPath: '/src/assets/images/workshops/row1_1.jpg',
    title: 'Glass Painting Workshop Activity',
    subtitle: 'Hands-on creative glass art & vibrant pigments',
    description: 'Students discovering glass painting techniques with specialized paints, exploring transparency, color blending, and detailed outlines on glass sheets.',
    date: 'June 2025',
  },
  {
    id: 'wv_2',
    type: 'video',
    postCode: 'DKwaeqgJ82F',
    url: 'https://www.instagram.com/p/DKwaeqgJ82F/',
    localPath: '/src/assets/images/workshops/row1_2.jpg',
    title: 'The Little Dancers Movement Lab',
    subtitle: 'Rhythm, stage confidence & joyful movement',
    description: 'Our enthusiastic young performers rehearsing lively choreography and expressive routines during summer camp stage sessions.',
    date: 'June 2025',
  },
  {
    id: 'wv_3',
    type: 'video',
    postCode: 'DKWewk2p6hH',
    url: 'https://www.instagram.com/p/DKWewk2p6hH/',
    localPath: '/src/assets/images/workshops/row1_3.jpg',
    title: 'Mango Festival & Young Entrepreneur Stalls',
    subtitle: 'Hands-on buying, selling & creative culinary booths',
    description: 'A special weekend activity where students designed their own mango-themed recipe stalls, calculated pricing, and experienced the thrill of selling out their dishes completely!',
    date: 'June 2025',
  },
  {
    id: 'wv_4',
    type: 'video',
    postCode: 'DKSWGgdTNDL',
    url: 'https://www.instagram.com/p/DKSWGgdTNDL/',
    localPath: '/src/assets/images/workshops/row1_4.jpg',
    title: 'Sunflower Craft & Sunlit Creations',
    subtitle: 'Multi-medium papercraft & radiant floral designs',
    description: 'Bright golden sunflower craft making with textured papers, scissor skill development, and proud little artists showing off their summer creations.',
    date: 'May 2025',
  },
  {
    id: 'wv_5',
    type: 'video',
    postCode: 'C8eFd7-pqdH',
    url: 'https://www.instagram.com/p/C8eFd7-pqdH/',
    localPath: '/src/assets/images/workshops/row1_5.jpg',
    title: 'Camp Celebrations & Collaborative Murals',
    subtitle: 'Expressive team painting & joyous energy',
    description: 'Capturing the infectious smiles, shared laughs, and vibrant teamwork as kids worked together on large-scale craft and art displays.',
    date: 'June 2024',
  },
  {
    id: 'wv_6',
    type: 'video',
    postCode: 'CttCllGpMzW',
    url: 'https://www.instagram.com/p/CttCllGpMzW/',
    localPath: '/src/assets/images/workshops/row1_6.jpg',
    title: 'Game Zone & Saturday Fun',
    subtitle: 'Active team games, laughter & peer bonding',
    description: 'Energetic group team building and indoor creative games designed to foster friendship, confidence, and motor coordination.',
    date: 'June 2023',
  },
  {
    id: 'wv_7',
    type: 'video',
    postCode: 'CtS_ti4p6Io',
    url: 'https://www.instagram.com/p/CtS_ti4p6Io/',
    localPath: '/src/assets/images/workshops/row1_7.jpg',
    title: 'First Song Performance',
    subtitle: 'Musical vocals, group harmony & stage presence',
    description: 'Celebrating the kids perfecting their first group song performance with beautiful rhythm and beaming confidence.',
    date: 'June 2023',
  },
];

// Row 2: Workshop Pictures (Do not display "Row 2" in UI)
export const WORKSHOP_PICTURES: WorkshopMediaItem[] = [
  {
    id: 'wp_1',
    type: 'image',
    postCode: 'DKG5vq5JyFY',
    url: 'https://www.instagram.com/p/DKG5vq5JyFY/',
    localPath: '/src/assets/images/workshops/row2_1.jpg',
    title: 'Summer Color Palette & Play',
    subtitle: 'Bright papercrafts and artistic exploration',
    description: 'Vibrant workshop session where students experimented with pastel textures, cut-outs, and mixed-medium collage compositions.',
    date: 'May 2025',
  },
  {
    id: 'wp_2',
    type: 'image',
    postCode: 'DJ8mpEdpAgF',
    url: 'https://www.instagram.com/p/DJ8mpEdpAgF/',
    localPath: '/src/assets/images/workshops/row2_2.jpg',
    title: 'Thumb Painting & Leaf Printing',
    subtitle: 'Botanical printing & tactile sensory art',
    description: 'Tactile sensory exploration combining natural garden leaves with tempera paints and fingerprint stamp textures to build organic trees and animals.',
    date: 'May 2025',
  },
  {
    id: 'wp_3',
    type: 'image',
    postCode: 'C7lj3CnJAUg',
    url: 'https://www.instagram.com/p/C7lj3CnJAUg/',
    localPath: '/src/assets/images/workshops/row2_3.jpg',
    title: 'Space Scratch Art & Printmaking',
    subtitle: 'Senior student scratchboards & junior prints',
    description: 'Senior cohorts crafted iridescent cosmic galaxies and constellations on scratchboard sheets, while younger artists mastered relief block stamping.',
    date: 'May 2024',
  },
  {
    id: 'wp_4',
    type: 'image',
    postCode: 'C7TbapdpwRH',
    url: 'https://www.instagram.com/p/C7TbapdpwRH/',
    localPath: '/src/assets/images/workshops/row2_4.jpg',
    title: 'The Little Artists Showcase',
    subtitle: 'Proud campers holding completed masterpieces',
    description: 'The joy of holding something created with their own two hands! Campers showcase their finished canvas paintings and handmade sculptures.',
    date: 'May 2024',
  },
  {
    id: 'wp_5',
    type: 'image',
    postCode: 'Ct3XomjpD27',
    url: 'https://www.instagram.com/p/Ct3XomjpD27/',
    localPath: '/src/assets/images/workshops/row2_5.jpg',
    title: 'Camp Finale & Celebration Feast',
    subtitle: 'Awarding certificates, sharing food & memories',
    description: 'Concluding the summer workshop with celebratory treats, heartfelt student certificates, and cherished friendships made to last a lifetime.',
    date: 'June 2023',
  },
  {
    id: 'wp_6',
    type: 'image',
    postCode: 'CtJA-XxJaZ2',
    url: 'https://www.instagram.com/p/CtJA-XxJaZ2/',
    localPath: '/src/assets/images/workshops/row2_6.jpg',
    title: 'Our Creative Troupe Moments',
    subtitle: 'Playful spirit & classroom laughter',
    description: 'Candid smiles during craft break times—where imagination knows no bounds and every child is encouraged to be their true, wonderful self.',
    date: 'June 2023',
  },
];
