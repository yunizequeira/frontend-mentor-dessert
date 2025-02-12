export interface Dessert {
  name: string;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  category: string;
  price: number;
}
