export interface IProduct {
  id: number,
  title: string,
  image: string,
  rating: number,
  isStock: boolean,
  price: number,
  colors: string[],
  sizes: string[],
  description: string,
  reviews: number[],
  category: string,
  quantity: number,
}
