export interface Service {
  name: string;
  duration: string;
  price: number;
}

export interface Category {
  name: string;
  services: Service[];
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  time: string;
  comment: string;
}

export interface ProviderData {
  id: string;
  name: string;
  address: string;
  priceRange: string;
  completedJobs: number;
  rating: number;
  reviewCount: number;
  homeService: boolean;
  walkIn: boolean;
  images: string[];
  owner: {
    name: string;
    title: string;
    avatar: string;
  };
  categories: Category[];
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  reviews: Review[];
}
