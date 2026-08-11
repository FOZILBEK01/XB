export type MenuCategoryId = 'all' | 'burger' | 'lavash' | 'hotdog' | 'dessert' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryId;
  price: number;
  formattedPrice: string;
  description: string;
  badge?: string;
  popular?: boolean;
  itemType: 'burger' | 'lavash' | 'hotdog' | 'dessert' | 'tea' | 'coffee' | 'drink';
  calories?: string;
}

export interface FeatureGroup {
  id: string;
  title: string;
  icon: string;
  items: string[];
}

export interface WorkingDay {
  dayName: string;
  dayIndex: number; // 0 = Sunday, 1 = Monday, etc.
  hours: string;
  isClosed: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface BusinessInfo {
  name: string;
  slogan: string;
  tagline: string;
  description: string;
  phone: string;
  phoneRaw: string;
  address: string;
  addressFull: string;
  city: string;
  region: string;
  telegramHandle: string;
  telegramUrl: string;
  googleMapUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

