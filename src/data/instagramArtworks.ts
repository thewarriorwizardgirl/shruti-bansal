export interface InstagramArtwork {
  id: string;
  url: string;
  title: string;
  cleanTitle: string;
  medium: string;
  date: string;
  desc: string;
  localPath: string;
  tags: string[];
}

export const INSTAGRAM_FINE_ARTS: InstagramArtwork[] = [
  {
    id: 'post-1',
    url: 'https://www.instagram.com/p/DV3vC7DEQNe/',
    title: 'First page of the Diary starts with love ❤️',
    cleanTitle: 'Diary Starts With Love',
    medium: 'Mixed Media & Illustrated Journaling',
    date: 'March 14, 2026',
    desc: 'The inaugural page of the art journal, exploring heart motifs, intimate brushwork, and expressive red tones.',
    localPath: '/src/assets/images/instagram/diary_starts_with_love.jpg',
    tags: ['Journal', 'Mixed Media', 'Expressive'],
  },
  {
    id: 'post-2',
    url: 'https://www.instagram.com/p/DQBrbytEfN0/',
    title: 'Shiv Shakti 🪔🎆',
    cleanTitle: 'Shiv Shakti',
    medium: 'Acrylic & Gold Embellishments on Canvas',
    date: 'October 20, 2025',
    desc: 'Spiritual canvas painting portraying the divine cosmic balance of Shiva and Shakti with vibrant traditional hues.',
    localPath: '/src/assets/images/instagram/shiv_shakti.jpg',
    tags: ['Spiritual Canvas', 'Acrylics', 'Traditional'],
  },
  {
    id: 'post-3',
    url: 'https://www.instagram.com/p/DP_Je5lESqb/',
    title: 'Happy Diwali 🎆🪔',
    cleanTitle: 'Diwali Festive Lights',
    medium: 'Festive Canvas & Mixed Media',
    date: 'October 19, 2025',
    desc: 'Celebratory festival of lights artwork featuring warm radiant diyas, golden shimmer, and joyful ambiance.',
    localPath: '/src/assets/images/instagram/happy_diwali_artwork.jpg',
    tags: ['Festive', 'Diyas', 'Celebration'],
  },
  {
    id: 'post-4',
    url: 'https://www.instagram.com/p/DK4W-F8y32y/',
    title: 'Alcohol Inks & Plate Art 🎨🎭',
    cleanTitle: 'Alcohol Inks Owl Plate',
    medium: 'Alcohol Inks on Upcycled Ceramic Plate',
    date: 'June 14, 2025',
    desc: 'Upcycled artwork transforming a plain utilitarian plate into a designer collector piece featuring an intricate owl motif.',
    localPath: '/src/assets/images/instagram/alcohol_inks_transformed_plate.jpg',
    tags: ['Alcohol Inks', 'Upcycled', 'Owl Art'],
  },
  {
    id: 'post-5',
    url: 'https://www.instagram.com/p/C_gUo30MaiD/',
    title: 'Ardhnarishwar ❤️❤️',
    cleanTitle: 'Ardhnarishwar',
    medium: 'Devotional Canvas Painting',
    date: 'September 4, 2024',
    desc: 'Intricate devotional canvas depicting the composite androgynous form of Shiva and Parvati, symbolizing the union of masculine and feminine energies.',
    localPath: '/src/assets/images/instagram/ardhnarishwar_canvas.jpg',
    tags: ['Devotional', 'Iconography', 'Canvas'],
  },
];
