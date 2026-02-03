export interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
  is_active: boolean;
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

export interface BusinessResponse {
  success: boolean;
  message: string;
  data: BusinessData;
}

export interface BusinessData {
  user_profile: UserProfile;
  business_details: BusinessDetails;
  photos: Photo[];
  service_types: ServiceType[];
  business_hours: BusinessHour[];
  services: ServiceCategory[];
}

export interface UserProfile {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  profile_photo: string;
}

export interface BusinessDetails {
  id: string;
  profession_id: number;
  business_name: string;
  location: Location;
  is_active: boolean;
  service_types: ServiceType[];
  business_logo: string;
  service_categories: ServiceCategory[];
}

export interface Location {
  id: number;
  gps_address: string;
  street_address: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  country: string;
}

export interface ServiceCategory {
  name: string;
  description: string;
  services: Service[];
}

// export interface Service {
//   id: string;
//   name: string;
//   price: string;
//   duration: string;
//   is_active: boolean;
// }

export interface Photo {
  id: string;
  image_url: string;
  thumbnail_url: string;
  public_id: string;
  width: number;
  height: number;
  format: string;
}

export type ServiceType = "home" | "shop" | "walkin" | "mobile";

export interface BusinessHour {
  id: string;
  day:
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY";
  open_time: string;
  close_time: string;
  is_available_for_booking: boolean;
}
