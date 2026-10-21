export type PageId =
  | 'home'
  | 'fine-arts'
  | 'graphic-design'
  | 'mehandi-makeup'
  | 'summer-camps'
  | 'contact';

export interface MediumCardData {
  id: PageId;
  title: string;
  subtitle: string;
  icon: string;
  image: string;
  accentColor: string;
  bgLight: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  tag: string;
}
