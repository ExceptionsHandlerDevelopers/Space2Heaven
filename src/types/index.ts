export interface Property {
  title: string;
  propertyType: string;
  price: string;
  images: string[];
  rooms: {
    bedrooms: number;
    bathrooms: number;
  };
  features: string[];
  yearBuilt: number;
  area: string;
  location: string;
  dimensions: string;
  status: string;
  description: string;
}

export interface PropertyCardProps {
  id: string,
  imageSrc: string,
  price: string,
  features: string,
  tag: string,
  rooms: number,
  year: number,
  location: string,
  area: string,
  isLoading: boolean
}

export interface PropertyFormValues {
  title: string;
  images: string[];
  bedrooms: number;
  bathrooms?: number;
  description: string;
  price: number;
  location: string;
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  propertyType: string;
  serviceType: 'buy' | 'sell' | 'rent';
  status: 'available' | 'sold' | 'pending';
  dimensions: string;
  area: string;
  yearBuilt: number;
  features: string[];
}

export interface Property {
  _id: string;
  propertyType: string;
  price: string;
  images: string[];
  rooms: { bedrooms: number; bathrooms: number };
  features: string[];
  yearBuilt: number;
  area: string;
  location: string;
}

export interface InputProps {
  title: string;
  name: string;
  value: string;
  placeholder?: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}