export interface Product {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  category: string;
  image: string;
  featured?: boolean;
  isTentacion?: boolean;
}