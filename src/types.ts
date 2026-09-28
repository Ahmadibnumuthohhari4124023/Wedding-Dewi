export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  startingPrice: string;
  actionText: string;
  packageKey: string;
  accentColor: 'primary' | 'secondary';
}

export interface PackageItem {
  id: string;
  name: string;
  category: string;
  badge?: string;
  popular?: boolean;
  description: string;
  price: string;
  note: string;
  features: { text: string; highlight?: boolean }[];
  ctaText: string;
}

export interface PortfolioItem {
  id: string;
  couple: string;
  title: string;
  location: string;
  category: ('makeup' | 'dekorasi' | 'akad' | 'resepsi')[];
  image: string;
  imageAlt: string;
  story?: string;
}

export interface TestimonialItem {
  id: string;
  couple: string;
  location: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingFormData {
  name: string;
  whatsapp: string;
  date: string;
  venue: string;
  service: string;
  notes: string;
}
