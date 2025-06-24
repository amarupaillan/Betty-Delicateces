export interface Product {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  ingredients?: string;
  category: string;
  image: string;
  featured?: boolean;
  isTentacion?: boolean;
}