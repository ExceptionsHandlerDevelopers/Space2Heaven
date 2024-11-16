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
  updatedAt:string
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
  // isLoading: boolean
}

export interface PropertyFormValues {
  title: string;
  images: File[];
  rooms: {
    bedrooms: number;
    bathrooms: number;
  }
  description: string;
  price: number;
  location: string;
  address: {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
  };
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
  value: string | number | undefined;
  placeholder?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type AuthInputs = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export interface Admin {
  name: string;
  email: string;
}