import { ProviderData } from "@/types/bookings";

export const mockProviders: Record<string, ProviderData> = {
  "13924993": {
    id: "13924993",
    name: "The Sharp Edge",
    address: "47 W 13th East Legon",
    priceRange: "GHS 40-150",
    completedJobs: 153,
    rating: 4.5,
    reviewCount: 45,
    homeService: true,
    walkIn: false,
    images: [
      "/assets/images/placeholder-1.jpg",
      "/assets/images/placeholder-2.jpg",
      "/assets/images/placeholder-3.jpg",
      "/assets/images/placeholder-4.jpg",
      "/assets/images/placeholder-5.jpg",
    ],
    owner: {
      name: "Mohammed Abdul",
      title: "Business Owner",
      avatar: "/assets/images/avatar-placeholder.png",
    },
    categories: [
      {
        name: "Barbering services",
        services: [
          { name: "Regular haircut", duration: "30mins", price: 40 },
          { name: "Regular haircut & dye", duration: "45mins", price: 50 },
          { name: "Regular haircut, dye & curls", duration: "1hr", price: 60 },
          { name: "Colourful dye only", duration: "30mins", price: 70 },
        ],
      },
      {
        name: "Pedicure",
        services: [
          { name: "Basic pedicure", duration: "30mins", price: 35 },
          { name: "Deluxe pedicure", duration: "45mins", price: 55 },
        ],
      },
      {
        name: "Manicure",
        services: [
          { name: "Basic manicure", duration: "30mins", price: 30 },
          { name: "Gel manicure", duration: "45mins", price: 50 },
        ],
      },
    ],
    location: {
      lat: 5.6364,
      lng: -0.1419,
      address: "East Legon, Accra",
    },
    reviews: [
      {
        id: "1",
        name: "Joshua Gavu",
        avatar: "/assets/images/avatar-placeholder.png",
        rating: 5,
        time: "30 mins ago",
        comment:
          "Absolutely top-notch service! The cut was clean, stylish, and perfect. I highly recommend!",
      },
      {
        id: "2",
        name: "Joshua Gavu",
        avatar: "/assets/images/avatar-placeholder.png",
        rating: 5,
        time: "30 mins ago",
        comment:
          "Absolutely top-notch service! The cut was clean, stylish, and perfect. I highly recommend!",
      },
    ],
  },
  "13924994": {
    id: "13924994",
    name: "Glow Beauty Salon",
    address: "15 Oxford Street, Osu",
    priceRange: "GHS 50-200",
    completedJobs: 89,
    rating: 4.8,
    reviewCount: 32,
    homeService: true,
    walkIn: true,
    images: [
      "/assets/images/placeholder-1.jpg",
      "/assets/images/placeholder-2.jpg",
      "/assets/images/placeholder-3.jpg",
      "/assets/images/placeholder-4.jpg",
      "/assets/images/placeholder-5.jpg",
    ],
    owner: {
      name: "Ama Serwaa",
      title: "Business Owner",
      avatar: "/assets/images/avatar-placeholder.png",
    },
    categories: [
      {
        name: "Hair Styling",
        services: [
          { name: "Braiding", duration: "2hrs", price: 100 },
          { name: "Weaving", duration: "1.5hrs", price: 80 },
        ],
      },
      {
        name: "Makeup",
        services: [
          { name: "Basic makeup", duration: "45mins", price: 50 },
          { name: "Bridal makeup", duration: "2hrs", price: 200 },
        ],
      },
    ],
    location: {
      lat: 5.5571,
      lng: -0.1879,
      address: "Osu, Accra",
    },
    reviews: [
      {
        id: "1",
        name: "Akua Mensah",
        avatar: "/assets/images/avatar-placeholder.png",
        rating: 5,
        time: "1 hour ago",
        comment: "Amazing service! Will definitely come back.",
      },
    ],
  },
};

export function getProvider(id: string): ProviderData | undefined {
  return mockProviders[id];
}
