export interface Product {
  name: string;
  img: string;
  description: string;
  mainPrice: number;
  discountPrice?: number;
  isNew: boolean;
  commission?: number;
}
