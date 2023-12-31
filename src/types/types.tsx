export interface Data {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface Categories {
  index: number;
  name: string;
  chosen: boolean;
  color: string;
  category: string;
}
