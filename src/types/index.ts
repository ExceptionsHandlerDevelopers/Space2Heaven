export interface Property {
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
  }

 export interface PropertyCardProps {
    id:string,
    imageSrc: string,
    price: string,
    features: string,
    tag: string,
    rooms: number,
    year: number,
    location: string,
    area: string,
    isLoading:boolean
}