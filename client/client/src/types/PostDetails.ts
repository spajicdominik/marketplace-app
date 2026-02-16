export interface PostDetails {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  userId: number;
  product: Product;
  location: Location;
}

export interface Product {
  id: number;
  name: string;
  brandId: number;
  subcategoryItemId: number;
}

export interface Location {
  id: number;
  addressLine1: string;
  addressLine2: string | null; 
  cityId: number;
  postalCode: string;
}